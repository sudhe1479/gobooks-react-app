import { Button } from 'antd'
import axios from 'axios'
import { error } from 'console'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {deposit,withdraw } from '../bankSlice'
import { RootState } from '../store';

export function Dashboard(){
    const [userData, setUserData]= useState([])
const dispatch =useDispatch()
const balance = useSelector((state:RootState)=>state.bank.balance)
    const getUsersData =()=>{
        axios.get('https://dummyapi.online/api/users')
        .then(response=> {
            setUserData(response.data)
        })// to recevice response 
        .catch(error=>{
            console.log(error)
        })// to recevie any error 
    }

useEffect(()=>{
    getUsersData()
},[])

const handleDeposite = ()=>{
    dispatch(deposit(99))
}

const handleWithdraw = ()=>{
    dispatch(withdraw(5))
}
     return (
        <>


        <center>
        <div>
            Currenet Balance: {balance}
        </div>
            <div>
             <Button type="primary" onClick={handleDeposite} style={{marginRight:"20px"}}>Deposite</Button>
             
             <Button type="primary" onClick={handleWithdraw} >Withdraw</Button>
             </div>
            </center></>
     )
}
