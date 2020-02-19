import React, { useState } from "react";
import {bindActionCreators, compose} from "redux";
import * as UserAction from "../actions/user";
import {connect} from "react-redux";


function Form({userActionCreators}) {
    const { addUser } = userActionCreators;
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    function submit(evt) {
        evt.preventDefault();
        setAvatar("");
        setName("");
        addUser(avatar, name);
    }
    return (
        <form onSubmit= { submit }>
            <div className="form-row align-items-center">
                <div className="col-sm-3 my-1">
                    <label className="sr-only" htmlFor="inlineFormInputName">Avatar</label>
                    <input type="text" value={avatar} className="form-control"  placeholder="Avatar" onChange={e => setAvatar(e.target.value)} />
                </div>
                <div className="col-sm-3 my-1">
                    <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Name</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                        </div>
                        <input type="text" value={name} className="form-control" placeholder="Name" onChange={e => setName(e.target.value)} />
                    </div>
                </div>
                <div className="col-auto my-1">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    );
}
const mapDispatchToProps = (dispatch) => ({
    userActionCreators: bindActionCreators(UserAction, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Form);