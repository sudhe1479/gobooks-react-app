import { Button } from "antd";
import { useMemo, useState } from "react";


export function CounterComponent(){
const [count, setCount]= useState(0);
// const [percentageValue, setPercentageValue] = useState(null);

const increment = ()=>{
    setCount(count+1)
}
//useCallBack

//useMemo(()=>{},[])
const percentage = useMemo(()=>{
    return (count/100)*50
},[count])

    return(
        <>
        <p>Count : {count}</p>
        <p> Percentage: {percentage} </p>
      
        <Button type='primary' onClick={increment}> counter increment</Button>
        </> 
    )
}