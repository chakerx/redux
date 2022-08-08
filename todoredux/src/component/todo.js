import React  from "react";
import { TiEdit } from 'react-icons/ti';
import { TiTrash } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";
import { DeleteTodo } from '../redux/todoSlice';
import {useDispatch} from "react-redux";
import {CompleteTodo} from "../redux/todoSlice";
import {toggleUpdate} from '../redux/todoSlice'
import UpdateForm from "./updatedTodo";


function Todos({todoListe}) {
    let dispatch = useDispatch()
    return ( 
        
        <div>
{todoListe.updated? <UpdateForm id={todoListe.id} updateData={todoListe} />: <li className="list-item" key={todoListe.id}>
                {<input className={`list ${todoListe.completed ? "complete":""}` }value={todoListe.task} readOnly='readonly'></input>}

                <div >
                <button className="button-complete task-button" onClick={()=>dispatch(CompleteTodo(todoListe.id))} >
                {todoListe.completed ? <FaCheckCircle className="completed"/>: <FaCheckCircle />}
                </button>
                
                
                <button onClick={()=>dispatch(toggleUpdate(todoListe.id))} className="button-edit task-button"  >
                <TiEdit className='edit-icon'/>
                </button>


                <button className="button-delete task-button" onClick={()=>dispatch(DeleteTodo(todoListe.id))}>
                <TiTrash/>
                </button>
            </div>
</li>}
        </div>
     );
}

export default Todos;