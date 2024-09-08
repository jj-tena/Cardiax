import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from 'context/AuthContext';
import { useHistory } from 'react-router-dom';

const useAddAnalytic = () => {

    const { jwt } = useAuth();

    const history = useHistory();

    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [chestPainType, setChestPainType] = useState('');
    const [restingBloodPressure, setRestingBloodPressure] = useState('');
    const [serumCholestoral, setSerumCholestoral] = useState('');
    const [fastingBloodSugar, setFastingBloodSugar] = useState('');
    const [restingElectrocardiographicResults, setRestingElectrocardiographicResults] = useState('');
    const [maximumHeartRateAchieved, setMaximumHeartRateAchieved] = useState('');
    const [exerciseInducedAngina, setExerciseInducedAngina] = useState('');
    const [oldpeak, setOldpeak] = useState('');
    const [slopeOfThePeakExercise, setSlopeOfThePeakExercise] = useState('');
    const [numberOfMajorVessels, setNumberOfMajorVessels] = useState('');
    const [thal, setThal] = useState('');
    const [timestamp, setTimestamp] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/analytics/add/', { 
                heartDisease: 1,
                sex, 
                age,  
                chestPainType, 
                restingBloodPressure, 
                serumCholestoral, 
                fastingBloodSugar, 
                restingElectrocardiographicResults, 
                maximumHeartRateAchieved, 
                exerciseInducedAngina, 
                oldpeak, 
                slopeOfThePeakExercise, 
                numberOfMajorVessels, 
                thal,
                timestamp
            }, 
            { 
                headers: {
                    Authorization: jwt
                }
            });
            console.log('Respuesta del servidor:', response.data);
            history.push('/analytics');
            window.location.reload();
        } catch (error) {
            console.error('Error al agregar análitica:', error);
        }
    };

    return {sex, setSex, age, setAge, chestPainType, setChestPainType,
        restingBloodPressure, setRestingBloodPressure, serumCholestoral, setSerumCholestoral,
        fastingBloodSugar, setFastingBloodSugar, restingElectrocardiographicResults, 
        setRestingElectrocardiographicResults, maximumHeartRateAchieved, setMaximumHeartRateAchieved,
        exerciseInducedAngina, setExerciseInducedAngina, oldpeak, setOldpeak,
        slopeOfThePeakExercise, setSlopeOfThePeakExercise, numberOfMajorVessels, setNumberOfMajorVessels,
        thal, setThal, timestamp, setTimestamp, handleSubmit
    };
}

export default useAddAnalytic;