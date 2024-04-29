import React from "react";
import LoginStyles from "./Login.styles";
import useLogin from "./Login";

const Login = () => {

    const {} = useLogin();

    return (
        <div style={LoginStyles.main}>
            <h1>Login</h1>
        </div>
    )
}

export default Login;