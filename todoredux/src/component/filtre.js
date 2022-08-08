import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { MdCancelPresentation,MdFreeCancellation } from "react-icons/md";
import {FilterByAll} from "../redux/todoSlice";
import{FilterByComplted} from "../redux/todoSlice";
import{FilterByUndone} from "../redux/todoSlice";
import {useDispatch} from "react-redux";


function FilterTodo() {
    let dispatch= useDispatch()
    return ( 
        <div className="filter">
                <button className="button-All task-button" onClick={()=>dispatch(FilterByAll())}>
                <MdFreeCancellation></MdFreeCancellation>
                </button>
                <button className="button-Done task-button" onClick={()=>dispatch(FilterByComplted())}>
                <FiCheckSquare></FiCheckSquare>
                </button>
                <button className="button-Undone task-button" onClick={()=>dispatch(FilterByUndone())}>
                <MdCancelPresentation></MdCancelPresentation>
                </button>

        </div>
     );
}

export default FilterTodo;