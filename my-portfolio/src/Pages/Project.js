import React from 'react';
import Sidebar from '../Components/Sidebar';
import Bottombar from '../Components/Bottombar';
import Encodingo from '../img/Encodingo.png';
import Geekstacks from '../img/Geekstacks.png';
import './Project.css';

const Project = () => {
  return (
    <div className='container'>
        <Sidebar/>
        <div className='project-box'>
           <h1>Portfolio</h1>
           <div className='internship-details'>
           <p className='internship-heading'>  Internships</p>
           <p className='internship-info'> I have completed my 2 month internship of <span> Web Development</span> at <span>Vidyayan Eduventure Pvt. Ltd.</span> in June 2023. </p>
           </div>
           <div className='project-heading'>
              Internship Projects
           </div>
           <div className='internship-projects'>
             <div className='project-1'>
               <div className='projects'>
               <span> Encodingo</span>
               <img src={Encodingo} alt='encodingo'/>
               </div>
               
               

             </div>
             <div className='project-2'>
              <div className='projects'>
              <span>Geekstacks</span>
              <img src={Geekstacks} alt='geekstacks' />
              </div>
               
             </div>

           </div>
           <Bottombar/>
        </div>
    </div>
  )
}

export default Project;