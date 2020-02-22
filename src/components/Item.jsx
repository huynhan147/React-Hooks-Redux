import React from "react";
import {connect} from "react-redux";
import * as UserAction from "../actions/user";
import {bindActionCreators, compose} from "redux";

function Item({userItem, userActionCreators}) {
    const { deleteUser } = userActionCreators;
    const { appendData } = userActionCreators;
    return(
        <tr>
            <th scope="row">{userItem.id}</th>
            <td>
                <img src={userItem.avatar} alt={userItem.avatar}/>
            </td>
            <td>{userItem.name}</td>
            <td>{userItem.createdAt}</td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteUser(userItem.id)} >Delete</button>
                <button className="btn btn-success" onClick={() => appendData(userItem)}>Edit</button>
            </td>
        </tr>
    );
}

const mapDispatchToProps = (dispatch) => ({
    userActionCreators: bindActionCreators(UserAction, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Item);