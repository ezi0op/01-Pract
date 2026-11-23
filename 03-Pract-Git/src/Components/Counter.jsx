import React, { useState } from 'react'

const Counter = () => {

    const [cnt, setCnt] = useState(0)

    const inc=()=>{
        setCnt(cnt+1);
    }
  return (
    <div>

    <h3>{cnt}</h3>

    <button onClick={inc} >Count 1</button>



    </div>
  )
}

export default Counter