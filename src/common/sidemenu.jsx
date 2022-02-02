import React from 'react';
import '../dash.css';
import { Link } from 'react-router-dom'


export default function Sidemenu() {

  return <div className="side-menu" style={{}}>

    <div style={{ fontSize: '30px', padding: '1vh 3vw 1vh 5.2vw',marginTop:'3vh',gap:'15px' }}>
      <Link to='management'>Managements</Link><br/><hr/>
      <Link to='settings'>Setting</Link><hr/>



    </div>
  </div>

}