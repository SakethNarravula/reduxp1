import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './todolistreducer'

const Todolist = () => {
    var [newtodo,setnewtodo]=React.useState('')
    var {todolist}=useSelector(state=>state.t)
    var dispatch=useDispatch()
    console.log(todolist);
  return (
    <div className='bor'>
        <h2>Todolist</h2>
        <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}}/>
        <button onClick={()=>{dispatch(addTodo(newtodo))}}>add</button>
        {
            todolist.map((todo,i)=>{
                return <li style={{listStyleType:'none'}}>
                            {i}{todo}
                            <button onClick={()=>{dispatch(deleteTodo(i))}}>delete</button>
                        </li>
            })
        }
    </div>
  )
}

export default Todolist