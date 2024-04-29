import React from "react";
import EvolutionStyles from "./Evolution.styles";
import useEvolution from "./Evolution";

const Evolution = () => {

    const {} = useEvolution();

    return (
        <div style={EvolutionStyles.main}>
            <h1>Evolution</h1>
        </div>
    )
}

export default Evolution;