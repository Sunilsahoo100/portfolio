import React from 'react'
import './skills.css'
import {SiCplusplus} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {IoLogoCss3} from 'react-icons/io'
import {DiJavascript} from 'react-icons/di'
import {SiDart} from 'react-icons/si'

import {SiMacos} from 'react-icons/si'
import {BsWindows} from 'react-icons/bs'

import {SiAndroidstudio} from 'react-icons/si'
import {SiLabview} from 'react-icons/si'
import {DiGit} from 'react-icons/di'
import {BsGithub} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {SiFlutter} from 'react-icons/si'
const skills = () => {
  return (
    <section id='skills'>
    <h4>Skills</h4>
    <div className='para1'>
    <p>General Programming</p>
    </div>
    <div className='general'>
        <a href="#skills"><SiCplusplus size="2em" color="#086ea8"/></a>
        <a href="#skills"><SiHtml5 size="2em" color="#e56318"/></a>
        <a href="#skills"><IoLogoCss3 size="2em" color="#086ea8"/></a>
        <a href="#skills"><DiJavascript size="2em" color="#ffc926"/></a>
        <a href="#skills"><SiDart size="2em" color="#0ba6ff"/></a>    
    </div>
    
    <div className='para2'>
    <p>Operating Systems</p>
    </div>
    <div className='op'>
        <a href="#skills"><SiMacos size="2em"/></a>
        <a href="#skills"><BsWindows size="2em" color="blue"/></a>    
    </div>


    <div className='para3'>
    <p>Softwares, Framework and Other</p>
    </div>
    <div className='other'>
        <a href="#skills"><SiAndroidstudio size="2em" color="green"/></a>
        <a href="#skills"><SiLabview size="2em" color="#f5bf19"/></a>
        <a href="#skills"><DiGit size="2em" color="black"/></a>
        <a href="#skills"><BsGithub size="2em" color="black"/></a>
        <a href="#skills"><FaReact size="2em" color="#0ba6ff"/></a>    
        <a href="#skills"><SiFlutter size="2em" color="#0ba6ff"/></a>   
    </div>
    
    
    
    
    
    </section>
  )
}

export default skills