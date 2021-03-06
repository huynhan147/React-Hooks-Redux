import * as userConstants from '../constants/user';
import { cloneDeep } from 'lodash'

const initialState = {
    users: [],
    form: {
        avatar: "",
        name: "",
        id: "",
    }
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.FETCH_USERS:
            return {
                ...state,
                users:action.payload,
            };
        case userConstants.DELETE_USER:
            const idUser = action.payload.id;
            let users = state.users;
            // console.log(users);
            const newUsers = users.filter(user => user.id !== idUser);
            return {
                ...state,
                users: newUsers
            };
        case userConstants.ADD_USER:
            const newUser = {
                id: "" + (state.users.length + 1),
                createdAt: '2020-02-07T19:39:41.929Z',
                name: action.payload.name,
                avatar: action.payload.avatar
            };
            const dataUsers = state.users;
            return {
                ...state,
                users: [...dataUsers, newUser]
            };
        case userConstants.APPEND_DATA:
            return {
                ...state,
                form: action.payload.data,
            };
        case userConstants.EDIT_USER:
            const usersOrigin  = cloneDeep(state.users);
            const data = action.payload;
            const foundIndex = usersOrigin.findIndex(user => user.id == data.id);
            usersOrigin[foundIndex].name = data.name;
            usersOrigin[foundIndex].avatar = data.avatar;
            return {
                ...state,
                users: usersOrigin
            };

        default:
            return state;
    }
};

export default reducer;
