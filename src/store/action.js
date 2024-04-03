import { ADDTODO } from "./actionType";
import { INC } from "./actionType";
import { DEC } from "./actionType";


export const addTodo=(newtodo)=>{
    return {type:ADDTODO,payload:newtodo}
}

export const inc=()=>{
    return {type:INC}
}

export const dec=()=>{
    return {type:DEC}
}
