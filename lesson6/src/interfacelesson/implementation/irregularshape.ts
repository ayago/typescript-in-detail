import {ShapeImpl} from "./shape.impl"
import {CartesianPoint} from "../interface/point"
import {Shape} from "../interface/shape"

export class IrregularShape extends ShapeImpl implements Shape{
    constructor(){
        super("Irregular Shape")
    };

    public draw2D = (context: CanvasRenderingContext2D):void => {
        this.clearCanvas(context);
        context.beginPath();
        
        let canvas: HTMLCanvasElement = context.canvas;
        let startingPoint: CartesianPoint = this.getStartingPoint(canvas);
        context.moveTo(startingPoint.x, startingPoint.y);
        context.lineTo(canvas.width * 0.95, startingPoint.y);
        context.lineTo(canvas.width * 0.95,canvas.height * 0.55);
        context.lineTo(canvas.width * 0.65,canvas.height * 0.75);  
        context.lineTo(canvas.width * 0.35, canvas.height * 0.35);
        context.closePath();

        context.lineWidth = 2;
        context.stroke();
    }

    private getStartingPoint = (canvas:HTMLCanvasElement):CartesianPoint => {
        return {
            x: canvas.width * 0.05,
            y: canvas.height * 0.95
        }
    }

}