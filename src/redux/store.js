import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import moviesReducer from './reducers/movies';

const preloadedState = {};

const rootReducers = combineReducers({
  movies: moviesReducer
});

const store = configureStore({
  devTools: true,
  reducer: rootReducers,
  middleware: [thunk],
  preloadedState
});

export default store;
