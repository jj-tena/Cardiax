export type AnalyticType = {
    timestamp: any;
    id: string;
    heartDisease: string;
    age: string;
    sex: string;
    chestPainType: string;
    restingBloodPressure: string;
    serumCholestoral: string;
    fastingBloodSugar: string;
    restingElectrocardiographicResults: string;
    maximumHeartRateAchieved: string;
    exerciseInducedAngina: string;
    oldpeak: string;
    slopeOfThePeakExercise: string;
    numberOfMajorVessels: string;
    thal: string;
};

export type DataPoint = {
    x: number;
    y: number;
}