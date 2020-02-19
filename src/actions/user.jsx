import * as userConstants from '../constants/user';

export const fetchUsers = (data) => ({
    type: userConstants.FETCH_USERS,
    payload: data,
});

export const deleteUser = (id) => ({
    type: userConstants.DELETE_USER,
    payload: { id }
});

export const addUser = (name, avatar) => ({
   type: userConstants.ADD_USER,
   payload: { name, avatar }
});