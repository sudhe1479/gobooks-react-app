
import React, {Children, createContext, SetStateAction, useState} from "react";
type AppContextModel={
    isUserLogin:boolean;
    setIsUserLogin:(state:boolean)=>void;
}
// context
export const AppContext = createContext<AppContextModel>({
    isUserLogin:false,
    setIsUserLogin:()=>{}
})

//provider
export const AppProvider = ({children}:any)=>{
    const [isUserLogin, setIsUserLogin]=useState<boolean>(false)

    return(
        <AppContext.Provider value={{isUserLogin,setIsUserLogin}}>
            {children}
        </AppContext.Provider>
    )
}

