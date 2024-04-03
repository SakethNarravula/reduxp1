import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/action';
import { inc } from '../../store/action';
import { dec } from '../../store/action';
const Counter=(props)=>{
    console.log(props);
    var [newtodo,setnewtodo]=React.useState('')
    return(
        <div className='bor'>
            <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/>
            <button onClick={()=>{props.dispatch(addTodo(newtodo))}}>addtodo</button>
            <h2>Counter:{props.c.count}</h2>
            <button onClick={()=>{props.dispatch(inc())}}>+</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch(dec())}}>-</button>
        </div>
    )
}

export default connect((store)=>{ return store})(Counter);