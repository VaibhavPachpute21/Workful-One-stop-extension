import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from '../../actions/todoActions'
import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai'

const TodosList = () => {
  const dispacth = useDispatch();
  const todos = useSelector((state) => state.todoReducer)
  useEffect(() => {
    console.log(todos)
  }, [todos])
  return (
    <>
      {todos.todos.map((todo,idx) => {
        return <div key={idx} style={{
          marginTop:'2px',
          
          }}>
          <div style={{
            display:'flex'
          }}>
            <input readOnly={true} type={'text'} value={todo.title} style={{
              width: '90%',
              border: '1px solid black',
              padding: '5px',
              fontSize: '16px',
              fontFamily:'serif',
              textTransform: 'capitalize',
            }}
            
            />
            <button onClick={() => {dispacth(removeTodo(todo)) }}
            style={{
              border: 'solid 1px #001c52',
                  backgroundColor: '#333333',
                  color: 'white',
                  padding: '5px',
                  fontSize: '16px',
            }}>
            <AiOutlineDelete/>
            </button>
            
          </div>
        </div>
      })}
    </>
  )
}

export default TodosList