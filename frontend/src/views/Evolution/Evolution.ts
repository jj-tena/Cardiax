import { useState, useEffect } from 'react';

import axios from 'axios';
import { AnalyticType, DataPoint } from 'types/AnalyticType';
import { useAuth } from 'context/AuthContext';

const useEvolution = () => {

    const { jwt } = useAuth();

     
    const [analytics, setAnalytics] = useState<DataPoint[]>([]);

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/users/evolution/', {
                headers: {
                    Authorization: jwt
                }
            });
            const formattedData = response.data.map((analytic: AnalyticType) => ({
                x: analytic.timestamp,
                y: analytic.heartDisease
            }));
            setAnalytics(formattedData);
        } catch (error) {
            console.error('Error fetching analytics:', error);
        }
    };
    
    
    
    const groupedData: { [date: string]: number[] } = {};
    analytics.forEach((point) => {
        const dateKey = new Date(point.x).toDateString();
        if (!groupedData[dateKey]) {
            groupedData[dateKey] = [];
        }
        groupedData[dateKey].push(point.y);
    });
    
    const formattedData: DataPoint[] = [];
    for (const date in groupedData) {
        if (groupedData.hasOwnProperty(date)) {
            const dateInMilliseconds = new Date(date).getTime();
            const average = groupedData[date].reduce((acc, val) => acc + val, 0) / groupedData[date].length;
            formattedData.push({ x: dateInMilliseconds, y: average });
        }
    }    

    return {formattedData};
}

export default useEvolution;