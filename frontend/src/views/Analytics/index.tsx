import React from "react";
import AnalyticsStyles from "./Analytics.styles";
import useAnalytics from "./Analytics";
import { Container, Typography } from "@mui/material";
import Header from "components/Header";

const Analytics = () => {

    const {} = useAnalytics();

    return (
        <Container>
            <Header/>
            <Container style={AnalyticsStyles.main}>
                <Typography>Analytics</Typography>
            </Container>
        </Container>
    )
}

export default Analytics;