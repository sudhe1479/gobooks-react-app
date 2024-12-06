import axios from 'axios'
import { error } from 'console'
import { useEffect, useState } from 'react'

export function Dashboard(){
    const [userData, setUserData]= useState([])


    const getUsersData =()=>{
        axios.get('https://dummyapi.online/api/users')
        .then(response=> {
            debugger
            setUserData(response.data)
        })// to recevice response 
        .catch(error=>{
            console.log(error)
        })// to recevie any error 
    }

useEffect(()=>{
    getUsersData()
},[])

     return (
        <><center>Dashboard Component loaded</center></>
     )
}
