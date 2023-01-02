import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {RiContactsFill} from 'react-icons/ri'
import {FiUser} from 'react-icons/fi'
import {FaUserGraduate} from 'react-icons/fa'
import {BsBookFill} from 'react-icons/bs'
import {HiLightBulb} from 'react-icons/hi'


const Nav = () => {

  return (
    <nav>
      
        <a href="#"><ImHome/></a>
        <a href="#about"><FiUser/></a>
        <a href="#skills"><HiLightBulb/></a>
        <a href="#projects"><FaUserGraduate/></a>
        <a href="#experience"><BsBookFill/></a>
        <a href="#contact"><RiContactsFill/></a>
        
        
      

    </nav>
  )
}

export default Nav