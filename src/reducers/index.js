import { combineReducers } from 'redux';
import appdataReducer from './appdata.reducer.js';

const allReducers = combineReducers({ appdataReducer });

export default allReducers;