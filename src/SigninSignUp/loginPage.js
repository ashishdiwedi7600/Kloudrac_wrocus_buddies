import React from 'react'
import {  useNavigate } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import avatar from '../img/av2.jpg'
import avatar2 from '../img/av3.png'

// import './login.css'

export default function LoginPage() {

  const [username, setUserName] = React.useState();
  const [pwd, setPwd] = React.useState();

  const navi = useNavigate();

  const onSubmitLogin = (e) => {
    e.preventDefault();

    let userList = localStorage.getItem("userList")
    let verifyUser = JSON.parse(userList);

    for (var j = 0; j < userList.length; j++) {
      if (verifyUser[j]?.userName === username && verifyUser[j]?.password === pwd) {
        navi('/dashboard',{state:verifyUser[j].userName})
        
        return
      }

    }
    alert('invalid user');
  }
  const headerCOntainer = {
    backgroundColor: '#54BAB9',
    // borderStyle: 'solid',
    // textAlign: 'left',
    gap: '15px',
    height: '9vh',
    display: 'flex',
    padding: '10px 10px 5px 0',
    justifyContent: 'space-between',
  }
  const style = {
    width: '600px'
  }

  return (
    <div style={{ display: 'grid', backgroundColor: '#E9DAC1', height: '100vh' }}>
      <div style={headerCOntainer}>

        <div >
          <strong style={{ placeSelf: 'left', paddingLeft: '50px', fontSize: '30px', color: '#EEEEEE' }}>  FittyFreak</strong>
        </div><br />
        <div>
          <h3 style={{ placeSelf: 'left', color: 'white', fontStyle: 'initial', fontSize: '30px', paddingRight: '30px' }}> Hello,User</h3>
        </div>


      </div>


      <form style={{
        placeSelf: 'center', border: '2px solid black', padding: '100px 5px ', borderRadius: '15px', backgroundColor: '#F7ECDE', justifyContent: 'end'
        , height: '500px', width: '800px', display: 'flex'
      }} onSubmit={onSubmitLogin}>
        <div style={{ textAlign: 'left', placeSelf: 'left', marginRight: '0px' }}>
          <img src={avatar2} alt='' style={{
            width: '350px',
            height: '300px',
            paddingRight: '20px'}}/>
        </div>



        <div style={{ justifyContent: 'end', placeSelf: 'end', }}>
          <div style={{ justifyContent: 'center' }}>
            <img src={avatar} alt=''  style={{ height: '60px', width: '90px', marginLeft: '10vw', borderRadius: '60%' }} />
          </div>

          <div>
            <strong for="Name" style={{ fontFamily: 'monospace' }}>      Name</strong> <br />
            <input id='Name'  placeholder='Name...' style={{ width: '400px', height: '50px', borderRadius: '5px' }} type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <br />
          <div>
            <strong for="Name" style={{ fontFamily: 'monospace' }}>      Password</strong> <br />
            <input id='passd' type='password' placeholder='Password...' value={pwd} style={style, { width: '400px', height: '50px', borderRadius: '5px' }} onChange={(e) => setPwd(e.target.value)} />
          </div>
          <br /><br />
          <div style={{ display: 'flex', gap: '50px' }}>

            <input type='submit' value='Login' style={{ backgroundColor: '#ccffff', height: '50px', width: '100px', borderRadius: '5px' }} />
            <a style={{ justifyContent: 'end', placeSelf: 'end', color: 'blue' }} href='#'>Forgot Password?</a>
          </div>

        </div>

      </form>

    </div>)
}