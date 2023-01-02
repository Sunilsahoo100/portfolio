import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Social from './social'
const header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Sunil Kumar Sahoo</h1>
      <h3 className="text-light">Front-end Developer</h3>
      <div className='he'>
      <p>I am an open minded individual that loves 
        exploring and learning new things. Outside of software development 
        I enjoy chess, video games, sports and hanging out with friends.
      </p>
      </div>
      <CTA/>
      <Social/>
      </div>
      
      <div className="me">
        <img src={ME} alt="me"/>
      </div>
      {/* <a href="#contact" className='scroll__down'>Scroll Down </a> */}

    </header>
  )
}

export default header