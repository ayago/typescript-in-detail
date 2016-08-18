
export class UnnamedPerson {
    private static DEFAULT_AGE: number = 42;

    private age: number;

    constructor(){
        this.age = UnnamedPerson.DEFAULT_AGE;
    }

    private getAge():number{
        return this.age;
    }

    private getAgeProperly = ():number => {
        return this.age;
    }

    public tellMyAge = (properly:boolean):string => {
        let ageGetter: () => number = properly ? this.getAgeProperly : this.getAge;

        let returnValue: string = "";

        try{
            returnValue = `Hi! I am ${ageGetter()} years old.`
        }catch(error){
            returnValue = error.message;
        }

        return returnValue;
    }
}