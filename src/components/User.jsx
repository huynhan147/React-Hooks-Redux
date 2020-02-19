import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { compose, bindActionCreators } from "redux";
import Axios from "axios";
import Item from "./Item";
import Form from "./Form";
import * as UserAction from '../actions/user'

function Container({ users, userActionCreators}) {
    const { fetchUsers } =userActionCreators;
    function renderUser() {
        return users.map(user => <Item key={user.id} userItem={user} />)
    }
    useEffect( () => {
        async function fetchData() {
            const {data} = await Axios.get('https://5e15ea6821f9c90014c3d8a0.mockapi.io/users');
            fetchUsers(data);
        }
        fetchData();
    }, []);

    return (
        <div className="container">
            <div>
            <Form/>
            </div>
            <div className="col-md-3 mb-3 mt-3">
                <input type="text" className="form-control"/>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Avatar</th>
                    <th scope="col">Name</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                { users.length && renderUser() }
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = (state) => ({
    users: state.user.users,
});


const mapDispatchToProps = (dispatch) => ({
    userActionCreators:bindActionCreators(UserAction, dispatch),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Container);