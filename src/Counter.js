import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Increment , decrement} from './Redux/Countslice'

const Counter = () => {
    const {value, istrue} = useSelector(state=> state.Countslice)
    console.log(value);
    console.log(istrue);
    const dispatch = useDispatch()
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=> dispatch(Increment())}>Add</button>
        <button onClick={()=> dispatch(decrement())}>Minus</button>
    </div>
  )
}

export default Counter