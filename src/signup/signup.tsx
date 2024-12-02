
import { AppContext } from "../context/App.context";
import '../login/login.css'
import logo from '../login/logo.svg'
import { Input, Button, Alert, Modal } from 'antd';
import { MailOutlined, LockOutlined, GoogleOutlined, UserOutlined } from '@ant-design/icons';
import { useState, useEffect, useContext, useRef } from 'react';

function SignUp() {
    const { isUserLogin } = useContext(AppContext)
    return (
        <div className="container">

            <div className="left-side-section">
                <img src={logo} width={200} height={300} className="logo" />
                <div className="goBooksText">GoBooks</div>
                <div className="publishText">Leading Indian book publishing company</div>
            </div>
            <div className="right-side-section">
                <div className="loginSection">
                    <div className="headerSec">
                        <span className="helloTexrt">Hello!</span>
                        <span className="welcomeText">Sign Up to Get Started</span>
                    </div>
                    <div className='loginInputsSection'>
                        <Input size="large" placeholder="Full Name" prefix={<UserOutlined />} />
                        <Input size="large" placeholder="Email Address" prefix={<MailOutlined />} />
                        <Input size="large" type="password" placeholder="Password" prefix={<LockOutlined />} />
                        <Button type='primary' > Register</Button>
                    </div>
                    <div>
                        <Button icon={<GoogleOutlined />} className="signInBtn" >Sign In with Google</Button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignUp