import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {inc,dec} from './counterSlice' 

const Counter = () => {
    var {count}=useSelector(state=>state.c)
    var dispatch=useDispatch()
    console.log(count)
  return (
    <div className='bor'>
        <h2>Counter:{count}</h2>
        <button onClick={()=>{dispatch(inc())}}>+</button>
        <button onClick={()=>{dispatch(dec())}}>-</button>
    </div>
  )
}

export default Counter