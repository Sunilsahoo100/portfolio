import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsTelephoneForwardFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {SiCodechef} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'

const social = () => {
  return (
    <div className='social'>
        <a href="mailto: princesunilsahoo@gmail.com" target="_blank"><GrMail size="2em" color="black"/></a>
        <a href="tel: 7978994311" target="_blank"><BsTelephoneForwardFill size="2em" color="black"/></a>
        <a href="https://www.linkedin.com/in/sunil-kumar-sahoo-885b6a226/" target="_blank"><BsLinkedin size="2em" color="#0082f8"/></a>
        <a href="https://github.com/Sunilsahoo100" target="_blank"><BsGithub size="2em" color="black"/></a>
        <a href="https://twitter.com/sunilsa86247492?t=n8LIcGYyXWxDyydIJ7WnVA&s=09" target="_blank"><BsTwitter size="2em" color="#0082f8"/></a>
        <a href="https://www.instagram.com/sunilsahoo36/" target="_blank"><AiFillInstagram size="2em" color="#d20778"/></a>
        <a href="https://www.facebook.com/profile.php?id=100009665019347" target="_blank"><BsFacebook size="2em" color="#0082f8" /></a>
        <a href="https://www.codechef.com/users/s_u_n_i_l" target="_blank"><SiCodechef size="2em" color="black"/></a>
        <a href="https://leetcode.com/Sunilkumarsahoo100/" target="_blank"><SiLeetcode size="2em" color="#ffc926"/></a>
        
        
    </div>
  )
}

export default social