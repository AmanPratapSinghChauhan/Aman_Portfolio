import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
   
  return (
    <div className='sidebar'>
      <div className='sidebar-item'>
          <span> Aman Chauhan</span>
           <NavLink  to={'/'} className='nav-lin home'> <i class="fa fa-home"></i> Home</NavLink>
           <NavLink  className='nav-lin about' to={'/about'}> <i class="fa fa-user"></i> About</NavLink>
           <NavLink  className='nav-lin services' to={'/service'}> <i class="fa fa-list"></i>Services</NavLink>
           <NavLink  className='nav-lin project' to={'/project'}> <i class="fa fa-briefcase"> </i>Projects</NavLink>
           <NavLink  className='nav-lin contact' to={'/contact'}> <i class="fa fa-comments"> </i>Contact</NavLink>
           </div>
      </div>
  )
}
export default Sidebar;
