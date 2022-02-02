import React from "react";
import './dash.css';
// import image from './img/img1.png'
import avatar from './img/avatar.jpg'
import gym2 from './img/pixels.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import { Link, useNavigate } from "react-router-dom"
// import { Button } from "bootstrap";

export function WelcomeOOO() {

    const headerCOntainer = {
        backgroundColor: '#000000',
        // borderStyle: 'solid',
        // textAlign: 'left',
        gap: '15px',
        display: 'flex',
        padding: '10px 20px 5px 0',
        justifyContent: 'space-between',


    }
   
    const navi = useNavigate()
    const routeChange2 = (e) => {
        e.preventDefault();
        navi('/signup');
    }



    


    return (

        <div >
            <div style={headerCOntainer}>

                <div  style={{ padding: '10px 50px', fontSize: '25px', justifyContent: 'start',display:'flex',position:'relative',flexDirection:'column' }}>
                    <div><img src={gym2} style={{height:'20px',width:'10px',position:'absolute',right:'57px',bottom:'10px',borderRadius:'50%'}}/></div>
                    <div>
                    <strong style={{ placeSelf: 'left', padding: '5px', color: '#EEEEEE' }}>  FittyFreak</strong></div>
                </div><br />
                <div>
                
                <input type="text" placeholder='search...' style={{
                    marginTop: '1vh', top: '0vh', height: '40px',width:'350px'
                    , border: '2px red', borderTopLeftRadius: '5px',borderBottomLeftRadius: '5px', opacity: '0.4',
                }} />
                <button style={{height:'41px',backgroundColor:'grey',borderTopRightRadius: '5px',borderBottomRightRadius: '5px'}}>Go</button>

            </div><div>
            <h3 style={{color:'white',fontStyle:'initial',paddingLeft:'8vw'}}> Hello,User</h3>
            </div>

            <div style={{ paddingTop: '8px' }}>
                
                <img src={avatar} alt={" "} style={{ borderRadius: '50%' }} className="img" />
                <Link to='./signup' onClick={routeChange2} > SIGNUP </Link>
                {/* <br /> */}

                <Link to='./loginPage' style={{ padding: '10px' }}>SIGN IN </Link>
            </div>
        </div>
            {/* <div style={sideMenu} > */ }

    {/* <ul style={{padding:'20px 20px 20px 20px'}}>
          <li style={{fontSize:'30px'},list}>Dashboard </li><hr />
          <li style={{fontSize:'30px'},list}>Components</li><hr />
          <li style={{fontSize:'30px'},list}>Comments </li><hr />
          <li style={{fontSize:'30px'},list}> Staff</li><hr />
          <li style={{fontSize:'30px'},list}>Static Report</li><hr />
          <li style={{fontSize:'30px'},list}>About Us </li><hr />
          <li style={{fontSize:'30px'},list}>For More </li><hr />

        </ul>
      </div> */}
    {/* <img src={gym} style={{ width: '100%', height: '100%' }} /> */ }
    <div style={{ backgroundImage: `url(${gym2})`, height: '100vh', width: '100%',display:'grid', backgroundSize: '1600px 110vh', opacity: '0.9' }}>
        <div style={{justifyContent:'center',placeSelf:'center',paddingLeft:'70px',width:'50vw',height:'60vh',borderRadius:'20px',padding:'20px'}}>
            <h2>Don't Stop</h2>
            <h2>When You are </h2>
            <h1 style={{fontSize:'100px',fontStyle:'oblique'}}>Tired</h1>
            <h2>Stop when You're </h2>
            <h1 style={{fontSize:'100px',fontStyle:'oblique'}}>Done</h1>
        </div>
    </div>
        </div >
    );

}