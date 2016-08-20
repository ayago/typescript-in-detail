import {ShapeImpl} from "./shape.impl"
import {CartesianPoint} from "../interface/point"
import {Shape} from "../interface/shape"

export class Triangle extends ShapeImpl implements Shape{
    constructor(){
        super("Triangle")
    };

    public getName = ():string => {
        return this.name;
    }

    public draw2D = (context: CanvasRenderingContext2D):void => {
        this.clearCanvas(context);
        context.beginPath();
        
        let canvas:HTMLCanvasElement = context.canvas;
        let startingPoint: CartesianPoint = this.getStartingPoint(canvas);
        context.moveTo(startingPoint.x, startingPoint.y);
        context.lineTo(canvas.width * 0.95, startingPoint.y);
        context.lineTo(canvas.width * 0.5,canvas.height * 0.05);       
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