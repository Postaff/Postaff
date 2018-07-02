import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer.js';

export default combineReducers({
  auth,
  form: formReducer
})