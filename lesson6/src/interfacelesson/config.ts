import {Shape} from "./interface/shape"
import {Circle} from "./implementation/circle"
import {Rectangle} from "./implementation/rectangle"
import {Triangle} from "./implementation/triangle"
import {IrregularShape} from "./implementation/irregularshape"
import {Dimension} from "./interface/dimension"

export interface InterfaceLessonPanelConfig{
    invokeBtnId:string;
    selectShapeBtn:string;
    messagePanelId:string;
    canvasId:string
}

export class InterfaceLessonPanelBootstrap {

    private config: InterfaceLessonPanelConfig;
    private targetObject: Shape;
    private prospectTargetName:string;
    private dom:Document;

    constructor(private window:Window){
        this.dom = window.document;
    }

    public initialize = (config:InterfaceLessonPanelConfig) => {
        this.config = config;
        this.updateCanvas();
        this.bindInvokeDrawBtnHandler();
        this.bindShapeSelectorHandler();
        this.bindWindowResizeHandler();
    }

    private bindInvokeDrawBtnHandler = ():void => {
        this.dom.getElementById(this.config.invokeBtnId)
            .addEventListener('click', this.btnHandler)
    }

    private bindShapeSelectorHandler = ():void => {
        this.dom.getElementById(this.config.selectShapeBtn)
            .addEventListener('change', this.selectHandler)
    }

    private bindWindowResizeHandler = ():void => {
        this.window.addEventListener('resize', this.windowResizeHandler);
    }

    private windowResizeHandler = ():void => {
        if(this.targetObject){
            this.updateCanvas();
            this.executeDrawing();
        }     
    }

    private btnHandler = ():void => {
        this.targetObject = ShapeRegistry.getShape(this.prospectTargetName);
        this.executeDrawing();
        this.issueMessage();
    }

    private selectHandler = (select:any) =>{
        this.prospectTargetName = select.target.value;
    }

    private executeDrawing = ():void => {

        let canvas: HTMLCanvasElement = this.getCanvas();
        let twoDContext:CanvasRenderingContext2D = canvas.getContext("2d");    

        this.targetObject.draw2D(twoDContext);
    }

    private issueMessage = (): void => {
        this.dom.getElementById(this.config.messagePanelId).innerHTML = this.getMessage();
    }

    private getMessage = ():string => {
        let nameGetter: () => string= this.targetObject.getName;
        return !!nameGetter ? 
            `I see! You specified a ${nameGetter()}.`: 
            'What the? I guess Shape.getName() is just optional..';
    }

    private getCanvas = ():HTMLCanvasElement => {
        let canvasId:string = this.config.canvasId;
        return <HTMLCanvasElement><any>this.dom.getElementById(canvasId);
    }

    private updateCanvas = ():void => {
        let canvas: HTMLCanvasElement = this.getCanvas();
        let containerDimension: Dimension = this.getCanvasContainerDimensions(canvas);
        this.updateCanvasDimensions(canvas, containerDimension);
    }

    private getCanvasContainerDimensions = (canvas:HTMLCanvasElement):Dimension => {
        let parentStyle: ClientRect = canvas.parentElement.getBoundingClientRect()
        
        return {
            width: parentStyle.width,
            height: parentStyle.height
        }
    }

    private updateCanvasDimensions = (canvas:HTMLCanvasElement, dimension:Dimension):void => {
        canvas.width = dimension.width;
        canvas.height = dimension.height;
    }

}

class ShapeRegistry {
    public static getShape(shapeName:string): Shape {
        let returnValue:Shape;
        switch(shapeName){
            case 'Circle': returnValue = new Circle(); break;
            case 'Rectangle': returnValue = new Rectangle(); break;
            case 'Triangle': returnValue = new Triangle(); break;
            case 'IrregularShape': returnValue = new IrregularShape(); break;
            default: returnValue = new Circle(); break;
        }
        return returnValue;
    }
}