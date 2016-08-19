import {InterfaceLessonPanelConfig} from "./interfacelesson/config"
import {Shape} from "./interfacelesson/interface/shape"
import {Circle} from "./interfacelesson/implementation/circle"

export class Bootstrap {
    private targetObject: Shape;
    private configRegistry:ConfigRegistry;  

    constructor(private dom:Document){
        this.configRegistry = {};
    }

    public initializeInterfacePanel = (config:InterfaceLessonPanelConfig) => {
        this.bindInvokeDrawBtnHandler(config.invokeBtnId);
        this.bindShapeSelectorHandler(config.selectShapeBtn);
        this.configRegistry.interfaceLessonPanel = config;
    }

    private bindInvokeDrawBtnHandler = (btnId:string):void => {
        this.dom.getElementById(btnId).addEventListener('click', this.btnHandler)
    }

    private bindShapeSelectorHandler = (selectId:string):void => {
        this.dom.getElementById(selectId).addEventListener('change', this.selectHandler)
    }

    private btnHandler = ():void => {
        let canvasId:string = this.configRegistry.interfaceLessonPanel.canvasId;
        let canvas: HTMLCanvasElement = <HTMLCanvasElement><any>this.dom.getElementById(canvasId);
            
        this.targetObject.draw2D(canvas)
    }

    private selectHandler = (select:any) =>{
        this.targetObject = ShapeRegistry.getShape(select.target.value);
    }
}

interface ConfigRegistry {
    interfaceLessonPanel?: InterfaceLessonPanelConfig;
}

class ShapeRegistry {
    public static getShape(shapeName:string): Shape {
        let returnValue:Shape;
        switch(shapeName){
            case 'Circle': returnValue = new Circle(); break;
            default:returnValue = new Circle(); break;
        }
        return returnValue;
    }
}