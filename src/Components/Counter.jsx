import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const inc = () => {
        setCount(count + 1)
    }
    const dec = () => {
        setCount(count - 1)
    }
    const res = () => {
        setCount(0)
    }

    const add5 = () => {
        setCount(count + 5)
    }

    const sub5 = () => {
        setCount(count - 5)
    }

    const add3 = () => {
        setCount(count + 3)
    }


     const add6 = () => {
        setCount(count + 6)
    }

    const sub6 = () => {
        setCount(count - 6)
    }
     const add8 = () => {
        setCount(count + 8)
    }

    const sub8 = () => {
        setCount(count - 8)
    }
    const add90=()=>{
        setCount(count+90)
    }
    const add100=()=>{
    
    setCount(count+100)
    }

    return (
        <div>
                <h3>Couht : {count} - Dev A and Dev B</h3>

            <button onClick={inc} >Inc</button>
            <button onClick={dec} >Dec</button>
            <button onClick={res} >Reset</button>
            <button onClick={add5} >Add 5</button>
            <button onClick={sub5} >Sub 5</button>
            <button onClick={add3} >Add 3</button>
            <button onClick={add6} >Add 6</button>
            <button onClick={sub6} >Sub 6</button>
            <button onClick={add8} >Add 8</button>
            <button onClick={sub8} >Sub 8</button>
            <button onClick={add90} >Add 90</button>
              <button onClick={add100} >Add 100</button>
Annasheb birajadar is good boy and he is doing weeln in this economy
        </div>
    )
}

export default Counter
