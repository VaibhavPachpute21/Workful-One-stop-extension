import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from '../../actions/todoActions'
import TodosList from "./TodosList";
// import './Todo.css'

const Todo = () => {
    const dispacth = useDispatch();
    const [todoTitle, setTodoTitle] = useState('')

    const todos = useSelector((state) => state.todoReducer)

    function addData() {
        var todo = {
            title: todoTitle,
            isDOne: false
        }
        dispacth(addTodo(todo));
    }


    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (
        <div style={{
            marginTop: '1.5px',
            border: '2px solid #002c80',
            display: 'flex',
            flexDirection: 'column',
            padding: '5px',
            borderRadius: '10px',
            width: '210px',
            fontFamily:'initial'
        }}
        >
            <span style={{
                fontSize: '14px',
                fontWeight: '600'

            }}>What's your main focus Today?</span>
            <div style={{ display: 'flex' }}>
                <input style={{
                    width: '100%',
                    border: '1px solid black',
                    padding: '5px',
                    fontSize: '16px'
                }}
                    type="text" value={todoTitle} placeholder="Task Name" onChange={(e) => { setTodoTitle(e.target.value) }} />
                <button style={{
                    border: 'solid 1px #001c52',
                    backgroundColor: '#333333',
                    color: 'white',
                    padding: '5px',
                    fontSize: '16px',
                }}
                    type="button" onClick={() => { addData(); setTodoTitle('') }}>Add</button>
            </div>
            <TodosList />
        </div>
    );
}

export default Todo