import React from 'react';
import './Home.css';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Sidebar from '../Components/Sidebar';
import Bottombar from '../Components/Bottombar';
import amanimg from '../img/aman.JPG';
import toast,{Toaster} from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Resume from '../img/Resume.pdf';

const Home = () => {
  const {msg}=useParams();
  if(msg){
    toast.success(msg);
  }

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN Stack Development"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  
  return (
    <div className='container'>
    <Sidebar/>
      
      <div className='container-page'>
       <div className='dev-container'>

       
        <div className='dev-info'>
          <span className='salute-tag' >Hello, My name is</span>
          <span className='name-tag'> Aman Pratap Singh Chauhan</span>

          <span className='skill-tag'><pre>My Skills...</pre> <span ref={el}></span></span>

          <a href={Resume} download="Resume">Download Resume</a>
           

        </div>
        <div className='dev-image'>
          <img src={amanimg}/>

        </div>

        </div>
       <Bottombar/>
      </div>
      <Toaster class='go2072408551' toastOptions={{duration:5000}}/>
    </div>
  )
}

export default Home;