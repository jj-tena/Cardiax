import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from 'context/AuthContext';
import { useHistory } from 'react-router-dom';

const useAddAnalytic = () => {

    const { jwt } = useAuth();

    const history = useHistory();

    const [highBP, setHighBP] = useState('');
    const [highChol, setHighChol] = useState('');
    const [cholCheck, setCholCheck] = useState('');
    const [imc, setImc] = useState('');
    const [smoker, setSmoker] = useState('');
    const [stroke, setStroke] = useState('');
    const [diabetes, setDiabetes] = useState('');
    const [physActivity, setPhysActivity] = useState('');
    const [fruits, setFruits] = useState('');
    const [veggies, setVeggies] = useState('');
    const [hvyAlcoholConsump, setHvyAlcoholConsump] = useState('');
    const [anyHealthcare, setAnyHealthcare] = useState('');
    const [noDocbcCost, setNoDocbcCost] = useState('');
    const [genHlth, setGenHlth] = useState('');
    const [menthlth, setMenthlth] = useState('');
    const [physHlth, setPhysHlth] = useState('');
    const [diffWalk, setDiffWalk] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [education, setEducation] = useState('');
    const [income, setIncome] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/analytics/add/', { 
                highBP, 
                highChol, 
                cholCheck, 
                imc, 
                smoker, 
                stroke, 
                diabetes, 
                physActivity, 
                fruits, 
                veggies, 
                hvyAlcoholConsump, 
                anyHealthcare, 
                noDocbcCost, 
                genHlth, 
                menthlth, 
                physHlth, 
                diffWalk, 
                sex, 
                age, 
                education, 
                income 
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

    return {highBP, setHighBP, highChol, setHighChol, cholCheck, setCholCheck, imc, setImc,
        smoker, setSmoker, stroke, setStroke, diabetes, setDiabetes, physActivity, setPhysActivity,
        fruits, setFruits, veggies, setVeggies, hvyAlcoholConsump, setHvyAlcoholConsump, 
        anyHealthcare, setAnyHealthcare, noDocbcCost, setNoDocbcCost, genHlth, setGenHlth,
        menthlth, setMenthlth, physHlth, setPhysHlth, diffWalk, setDiffWalk, sex, setSex,
        age, setAge, education, setEducation, income, setIncome, handleSubmit
    };
}

export default useAddAnalytic;