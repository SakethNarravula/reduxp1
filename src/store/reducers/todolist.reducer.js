import {ADDTODO} from '../actionType'

const initialState={
    todolist:['job','settleinlife']
}

const todolistReducer=(state=initialState,action)=>{
    if(action.type===ADDTODO){
        return {todolist:[...state.todolist,action.payload]}
    }
    return state
}

export default todolistReducer