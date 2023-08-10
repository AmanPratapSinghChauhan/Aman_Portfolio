import React from 'react';
import Sidebar from '../Components/Sidebar';
import './Service.css';
import Bottombar from '../Components/Bottombar';

const Service = () => {
  return (
    <div className='container'>
        <Sidebar/>
  <div className='service-container'>
      <h1> Services</h1>
      <div className='service-card'>
      <div className='card'> <div className='card-1'>
      <i className='fa fa-mobile-alt'></i>
        <p>Responsive Website</p>
        <span>We Made Responsive websites. These Websites are user friendly and user can run these websites on his mobiles , tablate etc...</span>
      </div></div>
      <div className='card'> <div className='card-1'>
      <i className='fa fa-palette'></i> 
        <p>Web Designing</p>
        <span>The most important part of selling something is how to present it in front of someone. And presentation become more important when we sell online . So Web Designing helps us a lot in presentation of something. If you are looking for a web designer than contact me......</span>
      </div></div>
      <div className='card'> <div className='card-1'>
      <i className='fa fa-laptop-code'></i>
        <p> Web FrontEnd Development</p>
        <span> am a front end developer. I already made several web pages , you can visit in portfolio seection for take a look of them. My projects are based on html,css,php and javascript. I am also friendly with Bootstrap. In my project section i made a webpage named as army_results it's completely Bootstrap based web page , in this i can't use a singal line of CSS code. </span>
      </div></div>  

      </div>
      <Bottombar/>

      </div>

    </div>
  )
}

export default Service;