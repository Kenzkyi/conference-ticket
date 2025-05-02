import React, { useCallback, useEffect, useState } from 'react'
import patternLine from './assets/images/pattern-lines.svg'
import patternCircle from './assets/images/pattern-circle.svg'
import leftBottom from './assets/images/pattern-squiggly-line-bottom-desktop.svg'
import rightTop from './assets/images/pattern-squiggly-line-top.svg'
import iconTop from './assets/images/logo-full.svg'
import fireIcon from './assets/images/icon-upload.svg'
import avatar from './assets/images/image-avatar.jpg'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import {useDropzone} from 'react-dropzone'
import Ticket from './components/Ticket'

const App = () => {
  const [imageUrl,setImageUrl] = useState('')
  const [showTicket,setShowTicket] = useState(false)
  const [error,setError] = useState({})
  const [all,setAll] = useState({
    fullName:'',
    email:'',
    gitHub:''
  })
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    if(acceptedFiles[0].type.startsWith('image') && acceptedFiles[0].size <= 512000){
      const url = URL.createObjectURL(acceptedFiles[0])
      console.log(url)
      setImageUrl(url)      
    }else{
      setError({...error,image: true})
    }
  }, [])

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
  const onchangeForFile = (e)=>{
    if(e.target.files[0].type.startsWith('image') && e.target.files[0].size <= 512000){
      const url = URL.createObjectURL(e.target.files[0])
      console.log(url)
      setImageUrl(url)      
    }else{
      setError({...error,image: true})
    }
  }

  const onChangeForAll = (e)=>{
    const { name, value } = e.target
    setAll({...all,[name]:value})
    if(name === 'email'){
      setError({...error,email:''})
    }
  }

  const validateForm = ()=>{
    let allError = {}
    if(!imageUrl) allError.image = true
    if (!validateEmail(all.email)) allError.email = true
    if(!all.fullName.trim()) allError.fullName = true
    if(!all.gitHub.trim()) allError.gitHub = true
    console.log(Object.keys(allError).length === 0)
    setError(allError)
    return Object.keys(allError).length === 0
  }

  const onGenerateTicket = ()=>{
    if(validateForm()){
      setShowTicket(true)
      console.log('valid')
    }else{
      console.log('notValid')
    }
  }

  useEffect(()=>{
    if (imageUrl) {
      setError({...error,image:''})
    }
  },[imageUrl])

  return (
    <div className='app'>
      <img src={patternLine} className='app-backgroundImg'/>
      <img src={patternCircle} className='app-patternCircle' />
      <div className="app-leftBottom">
        <img src={leftBottom} />
      </div>
      <div className="rightTop">
        <img src={rightTop} />
      </div>
      <div className="app-iconTop">
        <img src={iconTop} />
      </div>
      <>
        {
          showTicket ? <Ticket all={all} imageUrl={imageUrl} /> :
            <>
              <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
      <h2>Secure your spot at next year's biggest coding conference.</h2>
      <div className="app-holder">
        <main>
          <label>Upload Avatar</label>
          <nav {...getRootProps()}>
            {
              imageUrl ? 
              <>
            <header>
              <img src={imageUrl} />
            </header>
            <footer>
              <button onClick={()=>setImageUrl('')}>Remove image</button>
              <label htmlFor='hello'>Change image</label>
              <input type="file" id="hello" hidden onChange={onchangeForFile}/>
            </footer>
            </> :
            <>
            <label className='app-changeImage'>
              <img src={fireIcon} />
              <input {...getInputProps()} type='file' id='hi' onChange={onchangeForFile}/>
            </label>
            <p style={{display:isDragActive ? 'none' : 'flex'}}>Drag and drop or click to Upload</p>
            </>
            } 
          </nav>
          <small style={{color:error?.image ? 'red' : 'hsl(245, 15%, 58%)'}}>
            <div>
            <IoMdInformationCircleOutline />
            </div>
            <p>Upload your photo (JPG or PNG, max size: 500kb)</p>  
          </small>
        </main>
        <section>
          <label>Full Name</label>
          <input type="text" name='fullName' value={all.fullName} onChange={onChangeForAll} />
        </section>
        <article>
          <label>Email Address</label>
          <input type="email" placeholder='example@email.com' name='email' value={all.email} onChange={onChangeForAll}/>
          {error?.email && <small><div><IoMdInformationCircleOutline/></div>Please enter a valid email address</small>}
        </article>
        <section>
          <label>GitHub Username</label>
          <input type="text" placeholder='@yourusername' name='gitHub' value={all.gitHub} onChange={onChangeForAll}/>
        </section>
        <button className='app-generateTicket' onClick={onGenerateTicket}>Generate My Ticket</button>
      </div>
            </>
        }
      </>
      
      
    </div>
  )
}

export default App
