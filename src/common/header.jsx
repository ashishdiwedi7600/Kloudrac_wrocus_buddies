import React, { useEffect, useState } from 'react';
import {  useNavigate , useLocation } from 'react-router-dom'

import avatar from '../img/avatar.jpg'



export default function Header(props){
    let h1 = props.name
    console.log(h1)
  
    const navi = useNavigate();

    const routeChange = (e) => {
        e.preventDefault();
        navi('/');
      }
    
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav ">
  <div className="container-fluid">
  <div className='nav-right' style={{ padding: '10px 50px 10px ', fontSize: '25px', justifyContent: 'start' }}>
                    <strong style={{ placeSelf: 'left', color: 'white' }}>  { h1}</strong>
                </div><br />
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
       


      </ul>
      <div><h3 style={{color:'white',fontStyle:'initial',paddingLeft:'2.7vw'}}>Hello  { h1 } </h3></div>
      
        <img src={avatar} alt='' style={{ borderRadius: '50%' }} className="img" />
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
        <a className="nav-link active" aria-current="page"  onClick={routeChange} >Logout</a>
      
    </div>
  </div>
</nav>
}