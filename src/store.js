import {createStore, combineReducers, applyMiddleware } from 'redux'
import {todoReducer} from './reducers/todoReducers'
import thunk from 'redux-thunk'

const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];


const rootReducer=combineReducers({
    todoReducer:todoReducer
})

const initialState={
    todoReducer:{
        todos:todos

    }
}

const store=createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

export default store;
