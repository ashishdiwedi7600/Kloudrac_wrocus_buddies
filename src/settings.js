import React from 'react';
import Badcrumble from './common/badcrumble';

export default function Settings() { 


    return (<>
        <Badcrumble  expressPath={['Dashboard /','Settings',]}/>
        <div style={{display:'grid'}}>
        <div style={{justifyContent:'center',placeSelf:'center',paddingLeft:'70px',width:'50vw',height:'60vh',borderRadius:'20px',padding:'20px'}}>
            <h2>Don't Stop</h2>
            <h2>When You are </h2>
            <h1 style={{fontSize:'100px',fontStyle:'oblique'}}>Tired</h1>
            <h2>Stop when You're </h2>
            <h1 style={{fontSize:'100px',fontStyle:'oblique'}}>Done</h1>
        </div></div>
     </>
    )
}