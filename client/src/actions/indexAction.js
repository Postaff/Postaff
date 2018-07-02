import axios from 'axios';
import { 
  AUTH_USER,
  AUTH_ERROR,
} from './types.js';

export const login = ({username, password}, callback) => async dispatch => {
  try {
    const response = await axios.post('/api/users/login', { username, password });
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch(e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid username or password.' });
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: '',
  };
}
