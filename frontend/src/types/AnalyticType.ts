export type AnalyticType = {
    timestamp: any;
    id: string;
    heartDiseaseorAttack: string;
    highBP: string;
    highChol: string;
    cholCheck: string;
    imc: string;
    smoker: string;
    stroke: string;
    diabetes: string;
    physActivity: string;
    fruits: string;
    veggies: string;
    hvyAlcoholConsump: string;
    anyHealthcare: string;
    noDocbcCost: string;
    genHlth: string;
    menthlth: string;
    physHlth: string;
    diffWalk: string;
    sex: string;
    age: string;
    education: string;
    income: string;
};

export type DataPoint = {
    x: number;
    y: number;
}