import React, { useState } from 'react';
import './Sendemail.css';
import { useNavigate } from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';
import axios from 'axios';

const Sendemail = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [subject,setSubject]=useState('');
  const [message,setMessage]=useState('');
  const navigate=useNavigate();
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const {data}=await axios.post(`http://localhost:5000/api/v1/sendMail`,{
      name,email,subject,message
    });
    if(data.success){
      toast.success("Your message was sent successfully");
    }
    
  }
  const handleBack=(e)=>{
    e.preventDefault();
    navigate('/');
  }
  return (


    

    <div className='email-container'>
        <div className='email-box'>
        <div className='heading'>
        <span> Send Message</span>
        </div>
         
        <div className='first-row'>
          <div className='email-item'>
          <p>Name:</p>
          <input type='text'
          placeholder='Enter your name'
           onChange={(e)=>{setName(e.target.value)}}
            value={name}
           />

          </div>
          <div className='email-item'>
          <p>Email:</p>
            <input type='email'
            placeholder='Enter your email'
             onChange={(e)=>{setEmail(e.target.value)}}
              value={email}
             />
          </div>
          </div>

          <div className='email-item '>
          <p>Subject:</p>
           <input type='text'
           className='subject'
           placeholder='write your subject...' 
           onChange={(e)=>{setSubject(e.target.value)}}
            value={subject}
           />
  

          </div>
          
          
          <div className='email-item'>
          <p>Message:</p>
           <textarea type='text'
           placeholder='write your message here...' 
           onChange={(e)=>{setMessage(e.target.value)}}
            value={message}
            className='message'
            ></textarea>

          </div>
          <div className='button-container'>
          <div className='email-button goback-button' >
           <button type='submit'  onClick={handleBack} >Go Back</button>
           </div>
          <div className='email-button'>
           <button type='submit'  onClick={handleSubmit}>
             Send
           </button>

           </div>
          

        </div>
        </div>
        <Toaster className='go2072408551' toastOptions={{duration:5000}}/>
    </div>
    
  )
}

export default Sendemail;