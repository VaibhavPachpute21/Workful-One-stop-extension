export const addTodo=(todo)=>(dispacth)=>{
    dispacth({type:"ADD_TODO",payload:todo})
}

export const removeTodo=(todo)=>(dispacth)=>{
    dispacth({type:"REMOVE_TODO",payload:todo })

    
}
