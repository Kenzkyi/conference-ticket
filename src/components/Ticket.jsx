import React from 'react'
import './ticket.css'
import ticketIcon from '../assets/images/logo-full.svg'
import avatarIcon from '../assets/images/image-avatar.jpg'
import gitHub from '../assets/images/icon-github.svg'

const Ticket = ({all, imageUrl}) => {
  return (
    <div className='ticket'>
      <h3>Congrats, <span>{all.fullName}!</span></h3>
      <h3>Your ticket is ready.</h3>
      <h6>We've emailed your ticket to <span style={{color:'hsl(7, 71%, 60%)'}}>{all.email}</span> and will send updates in the run up to the event.</h6>
      <main>
        <header>
            <div>
                <img src={ticketIcon} />
            </div>
            <h5>may 02, 2025 / Austin, TX</h5>
        </header>
        <footer>
            <nav>
                <img src={imageUrl} />
            </nav>
            <section>
                <h4>{all.fullName}</h4>
                <article><div>
                    <img src={gitHub} /></div> {all.gitHub}</article>
            </section>
        </footer>
        <aside>#01609</aside>
      </main>
    </div>
  )
}

export default Ticket
