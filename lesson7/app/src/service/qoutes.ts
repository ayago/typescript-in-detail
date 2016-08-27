export interface QoutesService{
    generateQoute: (days: string|number, timeOfDay: "AM"|"PM") => string;
}



