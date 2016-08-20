import {InterfaceLessonPanelConfig} from "./interfacelesson/config"
import {InterfaceLessonPanelBootstrap} from "./interfacelesson/config"

export class Bootstrap {

    constructor(private window:Window){
    }

    public initializeInterfacePanel = (config:InterfaceLessonPanelConfig):Bootstrap => {
        let bootstrap: InterfaceLessonPanelBootstrap = 
            new InterfaceLessonPanelBootstrap(this.window);
        bootstrap.initialize(config);
        return this;
    }
}
