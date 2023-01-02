import React from 'react'
import './projects.css'
import PROJ1 from '../../assets/proj1.png'
import PROJ2 from '../../assets/proj2.png'
import PROJ3 from '../../assets/proj3.png'
const projects = () => {
  return (
    <section id='projects'>
      <h4>Projects</h4>
      <div className='proj'>
        <div className="item1">
        <a href="https://github.com/Sunilsahoo100/Voltage-Regulation-Project" target="_blank"> <img src={PROJ1} /> </a>
       <a href="https://github.com/Sunilsahoo100/Voltage-Regulation-Project" target="_blank"><h6>Voltage regulation of transformer</h6></a>
        </div>

        <div className="item1">
        <a href="https://github.com/Sunilsahoo100/Stellar-Motion-2" target="_blank"> <img src={PROJ2}/> </a>
        <a href="https://github.com/Sunilsahoo100/Stellar-Motion-2" target="_blank"><h6>Stellar Motion</h6></a>
        </div>

        <div className="item1">
        <a href="#"> <img src={PROJ3}/> </a>
        <a href="#"><h6>Portfolio</h6></a>
        </div>
       
       
      </div>
      
      
      
      
    </section>
  )
}

export default projects