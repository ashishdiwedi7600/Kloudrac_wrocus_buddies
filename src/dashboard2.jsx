import React from 'react'


export default function Dashboard() {

    const userName = localStorage.getItem('token');
    const tokenObj = JSON.parse(userName);

    console.log(userName,tokenObj);

    return ( 
    <div>
    <h1>{ tokenObj.key }</h1>
    </div> )
}