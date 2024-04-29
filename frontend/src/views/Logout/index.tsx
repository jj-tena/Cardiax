import React from "react";
import LogoutStyles from "./Logout.styles";
import useLogout from "./Logout";

const Logout = () => {

    const {} = useLogout();

    return (
        <div style={LogoutStyles.main}>
            <h1>Logout</h1>
        </div>
    )
}

export default Logout;