import React from "react";
import AddAnalyticStyles from "./AddAnalytic.styles";
import useAddAnalytic from "./AddAnalytic";

const AddAnalytic = () => {

    const {} = useAddAnalytic();

    return (
        <div style={AddAnalyticStyles.main}>
            <h1>AddAnalytic</h1>
        </div>
    )
}

export default AddAnalytic;