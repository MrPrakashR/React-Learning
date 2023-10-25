import React,{useEffect,useState} from "react";

const MyComponent = () => {

    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(10)

    useEffect(()=>{
        console.log("My Componenet is mounting")

        return function() {
            console.log("unmounting ...")
        }
    },[])

    useEffect(()=>{
        console.log("Count got updated ",count)

        return function() {
            console.log("Retuning Count",count)
        }
    },[count,count2])

    return (<div>
        <p>Count is {count}</p>
        <p>Count 2 is {count2}</p>
        <button onClick={()=> setCount(count+1)}>Update</button>
        <button onClick={()=> setCount2(count2+1)}>Update 2</button>
    </div>)
}

export default MyComponent