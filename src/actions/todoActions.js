export const addTodo=(todo)=>(dispacth,getState)=>{
    dispacth({type:"ADD_TODO",payload:todo})
    localStorage.setItem(
        "todos",JSON.stringify(getState().todoReducer.todos))
}

export const removeTodo=(todo)=>(dispacth,getState)=>{
    dispacth({type:"REMOVE_TODO",payload:todo })
    const todos = getState().todoReducer.todos;
    localStorage.setItem("todos", JSON.stringify(todos))


    
}
