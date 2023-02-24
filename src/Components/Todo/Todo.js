import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from '../../actions/todoActions'
import TodosList from "./TodosList";
// import './Todo.css'

const Todo = () => {
    const dispacth = useDispatch();
    const [todoTitle, setTodoTitle] = useState('')

    const todos = useSelector((state) => state.todoReducer)
    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (<div className="todo-card">
        <div className="text-center">
            <div className="input-group mb-3">
                <input type="text" id="todoInput" value={todoTitle} className="form-control border" placeholder="Task Name" onChange={(e) => { setTodoTitle(e.target.value) }} />
                <button className="btn" type="button"
                    onClick={() => { dispacth(addTodo(todoTitle)); setTodoTitle('') }}
                >Add</button>
            </div>
            <TodosList />
        </div>
    </div>
    );
}

export default Todo