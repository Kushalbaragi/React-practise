import React, { useState } from 'react'

function Condition() {
    const [count, setCount]=useState(false); 
    if(count){
        return (
            <div>Condition true</div>
          )
    }
    else{
        return (
            <div>Condition false</div>
          )
    }
  
}

export default Condition