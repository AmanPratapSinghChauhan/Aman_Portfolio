import React from 'react';
import Sidebar from '../Components/Sidebar';
import './About.css';
import Bottombar from '../Components/Bottombar';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate=useNavigate();
  const handleHire=(e)=>{
    e.preventDefault();
    navigate('/contact');
  }
  return (<>
    <div className='container'>
    <div className='sidebar-container'>
    <Sidebar />
    
    </div>
    
        
  <div className='about-page'>
      <h1> About Me</h1>
      <p> I'm Aman Pratap Singh Chauhan and I'm a <span> Web Developer</span> </p>
      <p> I have Completed my internship of WebDevelopment at <span>Vidyayan Eduventure Pvt. Ltd.</span> in June 2023.</p>
      <div className='about-span'> <span >"A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collect Contact details for future ongoing relation."</span></div>
      
      <div className='about-info'>
      <div className='my-info'>
        <div className='info-item'>
          <p>Birthday:</p> 27 August

        </div>
        <div className='info-item'>
        <p>github:</p>https://github.com/AmanPratapSinghChauhan
            
        </div>
        <div className='info-item'>
        <p>Degree:</p>B.Tech,Branch-IT,UIET Kanpur
        </div>
        <div className='info-item'>
        <p>City:</p>Mainpuri(UP)
            
        </div>
        <div className='info-item'>
        <p>Linkedin:</p>https://www.linkedin.com/in/aman-pratap-singh-chauhan-18ba52231/
            
        </div>
        <div className='info-item'>
        <p>Email:</p>aman0107chauah2003@gmail.com
            
        </div>
        <div className='info-item'>
        <p>Phone:</p>
             8630086139
            
        </div>
        <div className='info-item'>
            <p>Freelance:</p>https://www.freelancer.com/u/Aman53211
            
        </div>
        <div className='info-item info-but'>
          <button type='button' onClick={handleHire}>Hire Me</button>

        </div>


      </div>
      <div className='my-skill'>
      
      <div className='skill'>
      <div className='skill-name'>
        <span>HTML</span>
        <span>75%</span>
      </div>
      <div className="progress-container">
       <div className="progress-bar" style={{width:'75%'}} ></div>
      </div>

      </div>
     
      <div className='skill'>
      <div className='skill-name'>
      <span>CSS </span>
      <span>70%</span>
      </div>
      
      <div className="progress-container">
       <div className="progress-bar" style={{width:'70%'}} ></div>
      </div>
      </div>
      <div className='skill'>
      <div className='skill-name'>
      <span>JS </span>
      <span>70%</span>
      </div>
      <div className="progress-container">
       <div className="progress-bar" style={{width:'70%'}}></div>
      </div>
      </div>
      <div className='skill'>
      <div className='skill-name'>
      <span>ReactJS </span>
      <span>80%</span>
      </div>
      <div className="progress-container">
       <div className="progress-bar" style={{width:'80%'}} ></div>
      </div>
      </div>
      <div className='skill'>
      <div className='skill-name'>
      <span>MongoDB </span>
      <span>50%</span>
      </div>
      <div className="progress-container">
       <div className="progress-bar" style={{width:'50%'}} ></div>
      </div>
      </div>
      <div className='skill'>
      <div className='skill-name'>
      <span>NodeJS </span>
      <span>75%</span>
      </div>
      
      <div className="progress-container">
       <div className="progress-bar" style={{width:'75%'}} ></div>
      </div>
      </div>
      
      <div className='skill'>
      <div className='skill-name'>
      <span>PHP</span>
      <span>30%</span>
      </div>

      <div className="progress-container">
       <div className="progress-bar" style={{width:'30%'}} ></div>
      </div>


      </div>
      <div>

      </div>
      

      </div>
      </div>
      <Bottombar/>
    </div>

    </div>
  </>
  )
}

export default About;