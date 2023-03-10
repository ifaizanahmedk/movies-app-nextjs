import { createStore } from 'redux';
import rootReducers from './reducers/movies';
import middleware from './middleware';

const initialState = {};

const store = createStore(rootReducers, initialState, middleware);

export default store;
