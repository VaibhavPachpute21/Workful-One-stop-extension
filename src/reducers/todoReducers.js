export const todoReducer=(state={todos:[]},action)=>{
    switch (action.type){
        case "ADD_TODO":
            return {
            ...state,
            todos:[...state.todos,action.payload]
            }
        case "REMOVE_TODO":
            return {
                ...state,
                todos:state.todos.filter((items)=>items!==action.payload)
            }
        default:
            return state;
    }

}