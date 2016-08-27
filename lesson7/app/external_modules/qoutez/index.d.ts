

declare module qoute {
    type Days = string | number;
    type MerrideanTime = "AM" | "PM";
    export function generateQoute(day: Days, timeOfDay: MerrideanTime);
}


declare module "qoutez"{
    export = qoute;
}







