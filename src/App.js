import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { WelcomeOOO } from './welcome'; 
import SignupPage from './SigninSignUp/signupPage'
import LoginPage from './SigninSignUp/loginPage'
import Dashboard from './dashboard';
import { useRoutes } from  'react-router-dom'
import './dash.css';
import Management from './management';
import Settings from './settings';
import Private from './common/privateRoute';

function App() {

  const routes = useRoutes([
    {path:'',element:<WelcomeOOO/> },
    {path:'/signup',element:<SignupPage/> },
    {path:'/loginPage',element:<LoginPage/> },
    {path:'/dashboard',element: <Private page={<Dashboard/>}/>, children : [
        {path: 'management', element: <Management/> },
        {path: 'settings', element: <Settings/> }
    ] },

  ])

  return routes;
}


export default App;