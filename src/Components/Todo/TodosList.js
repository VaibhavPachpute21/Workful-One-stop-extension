import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from '../../actions/todoActions'

const TodosList = () => {
    const dispacth = useDispatch();
    const todos = useSelector((state) => state.todoReducer)
    useEffect(() => {
      console.log(todos)
    }, [todos])
  return (
    <>
    {todos.todos.map((todo)=>{
        return <div className='p-2'>
            <span><strong>{todo}</strong> <button className='btn border btn-danger'
            onClick={()=>{dispacth(removeTodo(todo))}} 
            ><i className="bi bi-trash"></i></button></span>
        </div>
    })}
    </>
  )
}

export default TodosList