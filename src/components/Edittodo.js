import React,{Fragment,useState} from 'react';
import axios from 'axios';
const Edittodo = ({todo})=>{
    const [description,setDescription] = useState(todo.description);
    const updateDesc = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5000/todos/${todo.todo_id}`,{description})
        .then(res=>{
            console.log(res);
        });
        window.location = "/";
    }
    return(
       <Fragment>
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target={`#id${todo.todo_id}`}>Edit</button>
<div id={`id${todo.todo_id}`} class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={()=>setDescription(todo.description)}>&times;</button>
        
      </div>
      <div class="modal-body">
        <input type="text" class="form-control" value={description} onChange={e=>setDescription(e.target.value)}/>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-warning" onClick={(e)=>updateDesc(e)} data-dismiss="modal">Edit</button>  
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>setDescription(todo.description)}>Close</button>
      </div>
    </div>

  </div>
  </div>
       </Fragment>
    );
}
export default Edittodo;