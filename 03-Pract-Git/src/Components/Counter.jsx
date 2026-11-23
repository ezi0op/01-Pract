import React, { useState } from 'react'

const Counter = () => {

    const [cnt, setCnt] = useState(0)

    const inc=()=>{
        setCnt(cnt+1);
    }

    const inc4=()=>{
        setCnt(cnt-4)
    }
    const dec3=()=>{
        setCnt(cnt-3)
    }
  return (
    <div>

    <h3>{cnt}</h3>

    <button onClick={inc} >Count 1</button>
        <button onClick={inc4} >Count 1</button>

    <button onClick={dec3} >Count 2</button>

    <button>On click inc numbers</button>


    </div>
  )
}

export default Counter