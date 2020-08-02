import React,{Fragment,useState} from 'react';
import axios from 'axios';
const Inputtodo = ()=>{
    const [description,setDescription] = useState('');
    const onFormSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/todos',{description})
        .then(res => {
            console.log(res);
            setDescription('');
        });
        window.location="/";
    }
    return(
        <Fragment>
            <h1 class="text-center mt-5">PERN Todo List</h1>
            <form class="d-flex mt-5" onSubmit={e=>onFormSubmit(e)}>
                <input type="text" class="form-control" value={description} onChange={e=>setDescription(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
}
export default Inputtodo;