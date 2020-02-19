import React from "react";
import { Provider } from "react-redux";
import configStore from "../configStore";
import User from "../components/User";

const store = configStore();

function userProvider() {
    return (
        <Provider store={store} >
            <User/>
        </Provider>
    );
}
export default userProvider;
