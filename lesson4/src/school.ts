import {Person} from "./person";

export class School {
    private faculty: Person[];

    constructor(){
        this.faculty = [];
    }

    public addMember = (member:Person):void => {
        this.faculty.push(member);
    }

    public rollCall = (outputHandler:(introduction:string) => any):void => {
        this.faculty.forEach((member:Person) => {
            outputHandler(member.getIntroduction());
        })
    }
}
