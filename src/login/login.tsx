

import './login.css'
import logo from './logo.svg'
import { Input, Button } from 'antd';
import { MailOutlined, LockOutlined, GoogleOutlined} from '@ant-design/icons';

 function Login(){
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
                         <Input size="large" placeholder="Email Address" prefix={<MailOutlined />} />
                         <Input size="large" type="password" placeholder="Password" prefix={<LockOutlined />} />
                         <Button type="primary">Login</Button>
                     </div>
                     <div className="fogotPasswordSec">
                     <span className="fogotPasswordText">Forgot Password ?</span>
                     </div>
                    <div>
                    <Button icon={<GoogleOutlined />} className="signInBtn">Sign In with Google</Button>
                    </div>
                 </div>
             </div>
         </div>
     )

}

export default Login;
