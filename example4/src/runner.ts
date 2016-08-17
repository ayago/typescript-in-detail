import {School} from "./school";
import {Person} from "./person";

class Runner {
    execute = () => {
        let school:School = new School();
        school.addMember(new Person('Charmaine'));
        school.addMember(new Person('Lisa'));
        school.addMember(new Person('Maine'));
        school.addMember(new Person('Jessy'));
        school.rollCall(this.outputHandler);
    }

    private outputHandler = (memberIntro:string):void => {
        alert(memberIntro);
    }
}

new Runner().execute();