import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { AnalyticType } from 'types/AnalyticType';
import { useAuth } from 'context/AuthContext';

const useAnalytics = () => {

    const { jwt } = useAuth();

    const [analytics, setAnalytics] = useState<AnalyticType[]>([]);

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/users/analytics/', {
                headers: {
                    Authorization: jwt
                }
            });
            setAnalytics(response.data);
        } catch (error) {
            console.error('Error fetching analytics:', error);
        }
    };

    return {analytics};
}

export default useAnalytics;