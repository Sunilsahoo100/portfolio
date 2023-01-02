import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsTelephoneForwardFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <ul className='foot'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Project</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='soci'>
        <a href="mailto: princesunilsahoo@gmail.com" target="_blank"><GrMail size="1em" color="black"/></a>
        <a href="tel: 7978994311" target="_blank"><BsTelephoneForwardFill size="1em" color="black"/></a>
        <a href="https://www.linkedin.com/in/sunil-kumar-sahoo-885b6a226/" target="_blank"><BsLinkedin size="1em" color="black"/></a>
        <a href="https://github.com/Sunilsahoo100" target="_blank"><BsGithub size="1em" color="black"/></a>
        <a href="https://twitter.com/sunilsa86247492?t=n8LIcGYyXWxDyydIJ7WnVA&s=09" target="_blank"><BsTwitter size="1em" color="black"/></a>
        <a href="https://www.instagram.com/sunilsahoo36/" target="_blank"><AiFillInstagram size="1em" color="black"/></a>
        <a href="https://www.facebook.com/profile.php?id=100009665019347" target="_blank"><BsFacebook size="1em" color="black" /></a>
        


      </div>



    </footer>
    
  )
}

export default footer