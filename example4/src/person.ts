export class Person {
    name:string;

    constructor(name:string){
        this.name = name;
    }

    public getIntroduction = ():string =>{
        return `Hello. My name is ${this.name}`;
    }
}