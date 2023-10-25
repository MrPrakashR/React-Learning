import React,{useEffect, useState} from "react";

const Timer = () => {
    const [time,setTime] = useState(0)
    
    useEffect(()=>{
        //Mounted
        const timer = setInterval(()=> setTime(time+1),1000)

        return function() {
            clearInterval(timer)
        }
    },[time])

    return (
        <div>
            <h1>StopWatch</h1>
            <p>Current Timer is {time}</p>
        </div>
    )
}

export default Timer