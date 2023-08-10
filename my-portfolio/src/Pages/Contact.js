import React from 'react'
import Sidebar from '../Components/Sidebar';
import Bottombar from '../Components/Bottombar';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate=useNavigate();
  const handleMessage=(e)=>{
    e.preventDefault();
    navigate('/sendemail');


  }
  return (
    <div className='container'>

    <Sidebar/>
    <div className='contact-box'>
      <div className='contact-heading'>
          <h1>Contact Me</h1>
      </div>
      <div className='contact-query'>
          <p>Have You Any Questions?</p>
          <span> I am at your Service</span>

      </div>
      <div className='contact-options'>
        <div className='option1 options'>
         <i className='fa fa-phone'></i>
         <p> Call us on </p>
         <span>+91 8630086139</span>

        </div>


        <div className='option2 options'>
         <i className='fa fa-envelope'></i>
         <p> Email </p>
         <span> aman0107chauah2003@gmail.com</span>

        </div>

        <div className='option3 options'>
         <i className='fa fa-instagram'></i>
         <p> Instagram </p>
         <span>+91 8630086139</span>

        </div>

        <div className='option4 options'>
         <i className='fa fa-map-marker'></i>
         <p> Home </p>
         <span>Advocate Colony Diwani Road, Mainpuri</span>

        </div>

      </div>
      <div className='contact-query'>
           <p>SEND ME AN EMAIL</p>
           <span>I'M VERY RESPONSIVE TO MESSAGES</span>
      </div>
      <div className='contact-button'> 
      <button type='button' onClick={handleMessage}> Send Message</button>
      </div>

      
    <Bottombar/>
    </div>
    </div>
  )
}

export default Contact;