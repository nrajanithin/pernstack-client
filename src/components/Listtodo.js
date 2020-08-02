import React,{Fragment,useEffect,useState} from 'react';
import axios from 'axios';
import Edittodo from './Edittodo';
const Listtodo = ()=>{
    const [todos,setTodos] = useState([])
    const deleteTodo = (e)=>{
        axios.delete(`http://localhost:5000/todos/${e}`)
        .then(res=>console.log(res));
        setTodos(todos.filter(todo=> todo.todo_id!==e));
    }
    const gettodos = ()=>{
        try{
            axios.get('http://localhost:5000/todos')
            .then(res=>{
                setTodos(res.data);
            })
        }
        catch(err)
        {
            console.log(err);
        }

    }
    useEffect(()=>{
        gettodos();
    },[])
    return(
        <Fragment>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo=>(
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td><Edittodo todo={todo}/></td>
                                <td><button class="btn btn-danger" onClick={()=>deleteTodo(todo.todo_id)}>Delete</button></td>
                            </tr>
                        ))
                    }           
                </tbody>
            </table>
        </Fragment>
    )
}
export default Listtodo;