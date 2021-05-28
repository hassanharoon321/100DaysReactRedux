import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Click me</button>
            <h1>Current Count {count}</h1>
        </div>
    )
}

export default Counter
