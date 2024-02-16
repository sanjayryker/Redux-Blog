/* import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement,reset,incerementByAmount } from './counterSlice'



const Counter = () => {

    const [incrementCount,setIncrementCount] = useState("")
    const checkNum = Number(incrementCount) || 0

    const count = useSelector((state) => state.counter.count) 
    const dispatch = useDispatch()

    const resetAll = () =>
    {
        dispatch(reset())
        setIncrementCount('')
    }

  return (
    <section>
        <p> {count} </p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <input
        type='text'
        placeholder='0'
        value={incrementCount}
        onChange={(e) => setIncrementCount(e.target.value)}
        />
        <div>
            <button onClick={() => dispatch(incerementByAmount(checkNum))}>Add amount</button>
            <button onClick={resetAll}> Reset</button>
        </div>
    </section>
    
  )
}

export default Counter */