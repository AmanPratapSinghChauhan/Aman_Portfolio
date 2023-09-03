import React from 'react';
import Sidebar from '../Components/Sidebar';
import Bottombar from '../Components/Bottombar';
import Encodingo from '../img/Encodingo.png';
import Geekstacks from '../img/Geekstacks.png';
import Socialbook from '../img/Socialbook.png';
import Typing from '../img/Typing.png';
import Song from '../img/Song.png';
import TicTacToe from '../img/TicTacToe.png';

import './Project.css';

const Project = () => {
  return (
    <div className='container'>
       <div className='sidebar-container'>
       <Sidebar/>
       </div>
        
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
               <a href='https://encodingo.com' target='_blank'><img src={Encodingo} alt='encodingo'/></a>
               </div>
               
               

             </div>
             <div className='project-2'>
              <div className='projects'>
              <span>Geekstacks</span>
              <a href='https://github.com/Encodingo/geekstacksFinal' target='_blank'><img src={Geekstacks} alt='geekstacks' /></a>
              
              </div>
               
             </div>

           </div>
          <div className='project-heading'>
          My Projects

          </div>
           <div className='internship-projects'>
              <div className='project-1'>
              <div className='projects'>
                  <span> Socialbook</span>
                  <a href='https://github.com/AmanPratapSinghChauhan/Socialbook' target='_blank'><img src={Socialbook}/> </a>
              </div>
                
              </div>
              <div className='project-1'>
              <div className='projects'>
                  <span> Typing Website</span>
                  <a href='https://freetypingwebsite-amanpratapsinghchauhan.onrender.com' target='_blank'> <img src={Typing}/></a>
      
              </div>
                
              </div>
           </div>
           <div className='internship-projects'>
           <div className='project-1'>
              <div className='projects'>
                  <span> Tic Tac Toe</span>
                  <a href='https://tictac-toe-frontend-jddf.onrender.com/' target='_blank'><img src={TicTacToe}/></a>
              </div>
                
              </div>
              <div className='project-1'>
              <div className='projects'>
                  <span> SongWebsite</span>
                  <a href='https://song-website.onrender.com' target='_blank'><img src={Song}/></a>
              </div>
                
              </div>

           </div>
           <Bottombar/>
        </div>
    </div>
  )
}

export default Project;