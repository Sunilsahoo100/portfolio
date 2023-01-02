import React from 'react'
import './about.css'
import AB from '../../assets/AB.png'
const about = () => {
  return (
    <section id="about">
      <h4>About Me</h4>
      <div className='para'>
      <p>Currently I am a Sophomer at NIT Rourkela pursuing B.tech in Electrical engineering having knowledge in 
        Data Structure and Algorithm, Web development and app development.
      </p>
      <br></br>
      <p>As a front-end developer, I am skilled in creating visually appealing and 
        user-friendly websites using HTML, CSS, and JavaScript. I have a strong understanding 
        of web design principles and user experience design. My ability to work 
        effectively in a team and strong problem-solving skills have allowed me to improve myself in a short-time. 
        I am passionate about staying 
        up-to-date with the latest technologies and best practices in front-end development and 
        am excited to bring my skills and experience to a new team.
      </p>
      
      </div>
      <div className="ab">
      <img src={AB}/>
      
      
      </div>

    </section>
  )
}

export default about