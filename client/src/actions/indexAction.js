import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
} from './types.js';

export const login = ({ username, password }, callback) => async (dispatch) => {
  try {
    const response = await axios.post('/api/users/login', { username, password });
    dispatch({ type: AUTH_USER, payload: response.data });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('role', response.data.role);
    localStorage.setItem('username', response.data.username);
    localStorage.setItem('schoolId', response.data.fk_school);
    localStorage.setItem('subId', response.data.fk_sub);
    localStorage.setItem('adminId', response.data.fk_admin);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid username or password.' });
  }
};

export const logout = () => {
  localStorage.clear();
  return {
    type: AUTH_USER,
    payload: '',
  };
};
