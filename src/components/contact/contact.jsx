import React from 'react'
import './contact.css'
const contact = () => {
  return (
    <section id='contact'>
    <h4>Get In Touch</h4>
    
    <div className='shy'>
    <small>DON'T BE SHY !</small>
    </div>
    <div className='para4'>
    <p>Feel free to get in touch with me. I am always open to discussing new projects, creative 
      ideas or opportunities to be part of your visions.</p>
    </div>
    
    <div className='get'>
    <form action=""> 
      <input type="text" name="name" placeholder="Your Full Name" required/>
      <input type="email" name="email" placeholder="Your Email" required/>
      <input type="text" name="subject" placeholder="Subject" required/>
      <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
      <button type='submit' className='btnn'>Send Message</button>
    
    </form>
    </div>
    
    </section>
  )
}

export default contact