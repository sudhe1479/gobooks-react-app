import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import {loginComponentProps} from './login/login';
import SignUp from './signup/signup';
import {AppProvider} from './context/App.context'
import { CounterComponent } from './counter/counter';
import { Dashboard} from './dashboard/dashboard'
import  {ProtectRoute} from './protectRoute'
function App() {
  const loginData:loginComponentProps ={
    name:"test",
    maineMail:"test@gmail.com",
    mobileNumber:34543543543,
    testData:{
      sudent:"",

    }
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <AppProvider>
    // <Login {...loginData}></Login>
    // <SignUp></SignUp>
    
    // </AppProvider>

<BrowserRouter>
    <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/dashboard" element = {<ProtectRoute><Dashboard /></ProtectRoute>}></Route>
    </Routes>
</BrowserRouter>

  );
}

export default App;
