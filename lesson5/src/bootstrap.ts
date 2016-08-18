import {UnnamedPerson} from "./person";

export class Bootstrap {
    private static PROPERLY: boolean = true;
    private person: UnnamedPerson;
    private outputWriter: (message:string) => void;

    constructor(private dom:Document){
        this.person = new UnnamedPerson();
    }

    public setOutputWriter = (outputWriter: (message:string) => void):Bootstrap => {
        this.outputWriter = outputWriter;
        return this;
    }

    public applyDomEventHandlers = (properBtnId:string, incorrectBtnId:string): void => {
        this.bindBtnClickEventHandlers(properBtnId, this.clickEventHandlerForProperBtn);
        this.bindBtnClickEventHandlers(incorrectBtnId, this.clickEventHandlerForIncorrectBtn);
    }

    private bindBtnClickEventHandlers = (btnId:string, eventHandler: () => void) => {
        this.dom.getElementById(btnId).addEventListener('click', eventHandler);
    }

    private clickEventHandlerForProperBtn = ():void => {
        this.outputWriter(this.person.tellMyAge(Bootstrap.PROPERLY))
    }

    private clickEventHandlerForIncorrectBtn = ():void => {
        this.outputWriter(this.person.tellMyAge(!Bootstrap.PROPERLY))
    }
}