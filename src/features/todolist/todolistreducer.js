import { createSlice} from "@reduxjs/toolkit";

const initialState={
    todolist:['hi','hello']
}

export const todolistSlice=createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todolist.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todolist.splice(action.payload,1)
        }
    }

})

export const {addTodo,deleteTodo}=todolistSlice.actions;

export default todolistSlice.reducer;