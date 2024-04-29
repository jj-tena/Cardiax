import React from "react";
import HomeStyles from "./Home.styles";
import useHome from "./Home";

const Home = () => {

    const {} = useHome();

    return (
        <div style={HomeStyles.main}>
            <h1>Home</h1>
        </div>
    )
}

export default Home;