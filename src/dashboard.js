import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './common/header';
import Sidemenu from './common/sidemenu';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import './dash.css'
import axios from 'axios';
export default function Dashboard() {

  const location = useLocation();
  let [h, setName] = useState([]);
  // let h = location.state
  // setName(h)
  useEffect(() => {
    let hi = location.state;
    setName(hi)
console.log(hi)
  }, [])

  const dashContainer = {
    position: 'absolute',
    left: '20vw',
    top: '8vh',
    backgroundImage: 'gym3',
    height: '100%'
  }
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const axios = require('axios')

    axios.get('https://fakestoreapi.com/products').then(response => {
      setDetail(response.data)

      console.log(response.data)
    }).catch(function (error) {
      console.log(error)
    })

  }, []);
  

  return (<>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>

        <Header name={h}/></div>
      <div><Sidemenu /></div>

    </div>

    <div className='image' style={dashContainer}>

      <Outlet />
      <h1>ha</h1>

      <center>
        {detail.map((v) => <div className='rounded w-50 bg-white mt-2 p-4'
          style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', width: '100%', height: '70px', marginBottom: '20px' }}>
          <b>{v.id}</b>
          <p>{v.title}</p>
        </div>)}
      </center>

    </div>

  </>

  );
}

