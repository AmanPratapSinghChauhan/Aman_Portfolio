import React from 'react';
import './Bottombar.css'
import { NavLink } from 'react-router-dom';

const Bottombar = () => {
  return (
    <div className='bottom-bar'>
       <div className='bottom-box'>
         <NavLink to={'/'} className='bottom-item' style={{marginLeft:'15px'}}>
           <i className='fa fa-home'></i>
         </NavLink>
         <NavLink to={'/about'} className='bottom-item'>
          <i className='fa fa-user'></i>
         </NavLink>
         <NavLink to={'/service'} className='bottom-item'>
          <i className='fa fa-list'></i>
         </NavLink>
         <NavLink to={'/project'}className='bottom-item'>
          <i className='fa fa-briefcase'></i>
         </NavLink>
         <NavLink to={'/contact'} style={{marginRight:'15px'}} className='bottom-item'>
          <i className='fa fa-comments'></i>
         </NavLink>

       </div>

    </div>
  )
}

export default Bottombar;