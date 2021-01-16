import { createReducer } from '@reduxjs/toolkit';
import * as marsActions from './actions';

const initialState = {
    items: []
};

const tasks = createReducer(initialState, {
    [marsActions.createTask]: (state, action) => ({...state, ...{items: [action.payload, ...state.items]}}),
    [marsActions.deleteTask]: (state, action) => ({...state, ...{items: state.items.filter(item => item.title!==action.payload)}})
})

export default tasks;