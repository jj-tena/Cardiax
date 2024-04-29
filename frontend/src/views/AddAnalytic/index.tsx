import React from "react";
import AddAnalyticStyles from "./AddAnalytic.styles";
import useAddAnalytic from "./AddAnalytic";
import { Container, Typography } from "@mui/material";
import Header from "components/Header";

const AddAnalytic = () => {

    const {} = useAddAnalytic();

    return (
        <Container>
            <Header/>
            <Container style={AddAnalyticStyles.main}>
                <Typography>AddAnalytic</Typography>
            </Container>
        </Container>
    )
}

export default AddAnalytic;