# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This is a product that generate ticket for conference meeting

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./src/assets/images/myScreenshot.png)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w)
- Live Site URL: [Live Site](https://conference-ticket-delta-two.vercel.app/)

## My process

After designing the ui . i used a state to toggle between the form and the ticket . so it depends on the condition if it is meant

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [vite](https://vite.dev/) - JS library

### What I learned

I learnt about the dashed border and also the drag and drop

```html
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
```

### Continued development

i want to build more using the drag and drop method.

### Useful resources

- [React dropzone](https://react-dropzone.js.org/) - This helped me for the drag and drop. I really liked this pattern and will use it going forward

## Author

- Frontend Mentor - [@Kenzkyi](https://www.frontendmentor.io/profile/Kenzkyi)
- Twitter - [@EkeneOkoye20](https://www.twitter.com/EkeneOkoye20)
