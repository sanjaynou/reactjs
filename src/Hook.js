import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Hook(){
    const [count,setCount]= useState(0);
        return (
            <div>
               <p>You click {count} times.</p> 
               <Button onClick={()=>{setCount(count+1)}}>Click me</Button>
            </div>
        )
    
}

export default Hook
