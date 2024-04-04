import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import todolistreducer from '../features/todolist/todolistreducer';

export const store=configureStore({
    reducer:{
        c:counterReducer,
        t:todolistreducer
    },
})