import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { Adding } from "../redux/todoSlice";
import { v4 as uuidv4 } from 'uuid';

function AddItem() {
    let dispatch = useDispatch()
    const[newList,setNewList]=useState('')


    
    const handleAddItem =()=>{dispatch(Adding({
        id:uuidv4(),
        task:newList,
        completed:false}))
        setNewList('')

    }
    return ( 
        <div className='form'>
    <input onChange={(e)=>setNewList(e.target.value) } type="text" placeholder='Add a Todo' className='task-input' name="task" value={newList}></input>
    <button onClick={handleAddItem} className='button-add' type="submit">Add</button>
    </div>
     );
}

export default AddItem;