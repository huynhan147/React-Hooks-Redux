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

export const appendData = (data) => ({
   type: userConstants.APPEND_DATA,
    payload: {data}
});

export const editUser = (id, name, avatar) => ({
    type: userConstants.EDIT_USER,
    payload: {id, name, avatar}
});