import React from 'react';
import { connect } from 'react-redux';

const Todolist=(props)=>{
    console.log(props);
    let [newtodo,setnewtodo]=React.useState('');
    return(
        <div className='bor'>
            <h2>Todolist</h2>
            <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}} />
            <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:newtodo})}}>Add</button>
            <ul>
                {props.t.todolist.map((todo)=>{
                    return <li>{todo}</li>
                })}
            </ul>
        </div>
    )
}

export default connect((store)=>{return store})(Todolist);