import {QoutesService} from '../qoutes';
import {generateQoute} from 'qoutez'

export class ExternalQoutesService implements QoutesService{
    public generateQoute(day: number| string | DaysInAWeek, timeOfDay: "AM" | "PM"): string{
        return generateQoute(day, timeOfDay);
    }
}

export enum DaysInAWeek {
    Sunday = 1,
    Monday = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thursday = 5,
    Friday = 6,
    Saturday = 7
}
