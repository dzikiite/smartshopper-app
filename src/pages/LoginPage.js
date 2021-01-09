import React, { useEffect, useState } from 'react';
import '../styles/LoginPage.scss';
import Logo from '../assets/logo.svg';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return ( 
        <div className="main-container">
            <header className="header-container">
                <div className="header">
                    <img src={Logo} alt="smartshopper-logo"/>
                    <a href="#"><button>Landing Page</button></a>
                </div>
            </header>
            <LoginForm />
        </div>
     );
}
 
export default LoginPage;