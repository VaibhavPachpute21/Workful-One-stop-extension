import {createStore, combineReducers, applyMiddleware } from 'redux'
import {todoReducer} from './reducers/todoReducers'
import thunk from 'redux-thunk'

const rootReducer=combineReducers({
    todoReducer:todoReducer
})


const store=createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
