import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const TodoListSlice = createSlice({
    name:'todoListe',
    initialState:{
        todoListe:[{
            id:uuidv4(),
            task:"",
            completed:false,
            updated:false
        }],
        filterItem:'All'
    },

    

    reducers:{
        Adding:(state,action)=>{
            state.todoListe.unshift(action.payload)
        },
        DeleteTodo:(state,{type,payload})=>{
            const delteitem = state.todoListe.filter(el=>el.id!==payload)
            state.todoListe = delteitem
        },
        CompleteTodo:(state,action)=>{
            state.todoListe.map ( el => {
                if( el.id === action.payload) {
                  return el.completed=!el.completed 
                }
                return el.completed;
              })
        },
        ChangeTask : (state,action) => {
            state.todoListe.map(el=> (el.id === action.payload.id) ? el.task=action.payload.task : el)
              
          },
          toggleUpdate:(state,action)=>{
            state.todoListe.map(el => (el.id === action.payload) ? el.updated=!el.updated : el)
          },
        FilterByComplted:(state)=>{
            state.filterItem='Completed'
        },
        FilterByUndone:(state)=>{
            state.filterItem='Undone'
        },
        FilterByAll:(state)=>{
            state.filterItem='All'
        },
    }
})



export default TodoListSlice.reducer
export const {Adding,ChangeTask,toggleUpdate , DeleteTodo,CompleteTodo,FilterByAll,FilterByComplted,FilterByUndone} = TodoListSlice.actions