import React from "react";
import AnalyticsStyles from "./Analytics.styles";
import useAnalytics from "./Analytics";

const Analytics = () => {

    const {} = useAnalytics();

    return (
        <div style={AnalyticsStyles.main}>
            <h1>Analytics</h1>
        </div>
    )
}

export default Analytics;