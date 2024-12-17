
import {Navigate} from'react-router-dom'

export function ProtectRoute({children}:any){
    const isUserLoggedIn = sessionStorage.getItem("userLoggedIn")
return isUserLoggedIn?children:<Navigate to="/"/>
}

