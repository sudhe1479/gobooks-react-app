

import './login.css'
import logo from './logo.svg'
import { Input, Button, Alert, Modal } from 'antd';
import { MailOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons';
import { useState,useEffect, useContext } from 'react';
import { AppContext } from '../context/App.context';
export type loginComponentProps = {
    name?:string,
    maineMail?:string,
    mobileNumber?:number
    testData?:{
        sudent?:string
    }
}
function Login({name,maineMail,mobileNumber}:loginComponentProps) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //const [varName, setVarName]=useState<type>(initialValue)
    const [email, setEmail] = useState<string>("")//state variable
    const [password, setPassword] = useState<string>("")//state variable
    const [error, setError] = useState<string>("")
    const [isModalOpen, setIsModalOpen] = useState(false);
     // const {value} = useContext(contextName)
    const {setIsUserLogin} =useContext(AppContext)

  
 


//only if dependeces are empty then it will call one time 
useEffect(()=>{
    setIsModalOpen(true)
    console.log(name)
    console.log(maineMail)
    console.log(mobileNumber)
   
},[])

const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)

    }
    const handleLogin = () => {

        if (emailRegex.test(email)) {
            if (password.length === 10) {
                setError("")
                setIsUserLogin(true)
                //logic
            } else {
                setError("Please enter a password minimum 10 characters ")
            }
        } else {
            setError("Please enter valid Email address ")
        }
    }

    //typescript
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
                        <span className="helloTexrt">Hello Again!</span>
                        <span className="welcomeText">Welcome Back</span>
                    </div>
                    <div className='loginInputsSection'>
                        <Input size="large" placeholder="Email Address" prefix={<MailOutlined />} onChange={handleEmailChange} />
                        <Input size="large" type="password" placeholder="Password" prefix={<LockOutlined />} onChange={handlePasswordChange} />

                        <Button type="primary" disabled={!email || !password} onClick={handleLogin}>Login</Button>
                        {error && <Alert message={error} type="error" />}
                    </div>
                    <div className="fogotPasswordSec">
                        <span className="fogotPasswordText">Forgot Password ?</span>
                    </div>
                    <div>
                        <Button icon={<GoogleOutlined />} className="signInBtn" >Sign In with Google</Button>
                    </div>
                </div>
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Please Login to continue to dashboard</p>
       
      </Modal>
        </div>
    )

}

export default Login;
