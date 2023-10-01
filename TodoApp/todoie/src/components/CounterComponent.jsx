import React, {useState} from "react";

const CounterComponent = () => {
    
    const [count,setCount] = useState(23)
    const [value,setValue] = useState("")

    return (
        <div>
            <p>Count Component - {count}</p>
            <h5>Value is {count%2 == 0 ? "Even" : "Odd"}</h5>
            <button onClick={() => setValue("React")}>Change</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default CounterComponent