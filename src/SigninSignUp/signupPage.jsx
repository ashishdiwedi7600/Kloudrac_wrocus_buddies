
import React from 'react';
import {  useNavigate } from 'react-router-dom'
import avatar3 from '../img/av4.png'


export default function SignupPage() {
  const navi = useNavigate();


  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userList = localStorage.getItem('userList') || [];
    console.log(typeof (userList));
    const userListParsed = typeof userList == 'string' ? JSON.parse(userList) : userList;
    const newUSer = {
      userName,
      password
    };
    userListParsed.push(newUSer);
    localStorage.setItem('userList', JSON.stringify(userListParsed));
    navi('/loginPage');
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


  return <div style={{ display: 'grid', backgroundColor: '#E9DAC1', height: '100vh' }}>
    <div style={headerCOntainer}>
      <div >
        <strong style={{ placeSelf: 'left', paddingLeft: '50px', fontSize: '30px', color: '#EEEEEE' }}>  FittyFreak</strong>
      </div><br />
      <div>
        <h3 style={{ placeSelf: 'left', color: 'white', fontStyle: 'initial', fontSize: '20px', paddingRight: '30px' }}> Hello,User<br/>Please Register</h3>
      </div>
    </div>

    <form style={{
      placeSelf: 'center', border: '2px solid black', padding: '100px 5px ', borderRadius: '15px', backgroundColor: '#FBF8F1', justifyContent: 'start'
      , height: '550px', width: '800px', display: 'flex'
    }} >

      <div style={{ textAlign: 'left', placeSelf: 'left', marginRight: '0px', paddingLeft: '30px' }}>

        <label htmlFor="fname"> Name</label><br />
        <input type="text" style={{ width: '400px', height: '50px', borderRadius: '5px', border: '2px solid black' }} value={userName} onChange={(e) => setUserName(e.target.value)}
          id="fname" name="firstname" placeholder="Your name.." /><br />

        <label htmlFor="pwd">Password</label><br />
        <input type="password" style={{ width: '400px', height: '50px', borderRadius: '5px', border: '2px solid black' }} id="pwd" value={password} name="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} /><br />
        <label htmlFor="num">Mobile No.</label><br />
        <input type="tel" id="mob" style={{ width: '400px', height: '50px', borderRadius: '5px', border: '2px solid black' }} name="number" placeholder="Enter Your Mobile No." /><br />
        <label htmlFor="country">Country</label><br />
        <select id="country" name="country" style={{ width: '400px', height: '50px', borderRadius: '5px', border: '2px solid black' }}>
          <option value="India">India</option>
          <option value="australia">Australia</option>
          <option value="">Canada</option>
          <option value="usa">USA</option>
        </select><div style={{ gap: '15px' }}></div><br />
        <input type="checkbox" /><span>Allow Notification</span><br />

        <input type="submit" style={{ backgroundColor: '#ccffff', height: '50px', width: '400px', borderRadius: '5px' }} value="Create Account" onClick={handleSubmit} />
      </div>
      <div style={{ textAlign: 'right', placeSelf: 'right', marginLeft: '0px', paddingLeft: '20px',marginTop:'40px' }}>
        <img src={avatar3} alt={" "} style={{
          width: '350px',
          height: '300px',
          paddingRight: '20px'
        }} />
      </div>
    </form>

  </div>;
}
