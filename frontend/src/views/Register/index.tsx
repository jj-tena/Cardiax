import React from "react";
import RegisterStyles from "./Register.styles";
import useRegister from "./Register";

const Register = () => {

    const {} = useRegister();

    return (
        <div style={RegisterStyles.main}>
            <h1>Register</h1>
        </div>
    )
}

export default Register;