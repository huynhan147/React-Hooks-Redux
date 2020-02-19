import * as userConstants from '../constants/user';

const initialState = {
    users: [],
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
            dataUsers.push(newUser);
            return {
                ...state,
                users: dataUsers
            };
        default:
            return state;
    }
};

export default reducer;
