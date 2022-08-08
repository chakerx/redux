import {ChangeTask,toggleUpdate} from '../redux/todoSlice'
import {useDispatch} from "react-redux";
import { useState } from 'react';
const UpdateForm = ({id,updateData}) => {
  let dispatch = useDispatch()
  const [update,setupdate]=useState('')
  const HandleUpdate=()=>{
    dispatch(ChangeTask({id:id,task:update}))
    dispatch(toggleUpdate(id))
  }
  
  const HandleCancel=()=>{
    dispatch(toggleUpdate(id))
  }
    return(
      <div className="updateform">
        <div >
          <div >
            <input className="upinput"
              defaultValue={updateData && updateData.task}
              onChange={(e)=>{const f=e.target.value ;setupdate(f)}}/>
          </div>
          <div className="bu">
            <button className="update"
              onClick={HandleUpdate}>Update</button>
            <button className="cancel"
              onClick={HandleCancel}>Cancel</button>
          </div>
        </div>
        <br />  
      </div>
    )
  }
  
  export default UpdateForm;