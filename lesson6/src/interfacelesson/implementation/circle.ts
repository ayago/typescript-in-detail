import {Shape} from "../interface/shape"
import {CartesianPoint} from "../interface/point"
import {ShapeImpl} from "./shape.impl"

export class Circle extends ShapeImpl implements Shape {

    constructor(){
        super("Circle");
    };

    public getName = ():string => {
        return this.name;
    }

    public draw2D = (context: CanvasRenderingContext2D):void => {
        this.clearCanvas(context);
        let canvas: HTMLCanvasElement = context.canvas;
        let center: CartesianPoint = this.getCenterPoint(canvas);
        var radius = this.getRadius(canvas);
        
        context.beginPath();
        context.arc(center.x, center.y, radius, 0, 2 * Math.PI, false);
        context.lineWidth = 2;
        context.stroke();
    }

    private getCenterPoint = (canvas: HTMLCanvasElement): CartesianPoint => {
        let centerX: number = canvas.width / 2;
        let centerY: number = canvas.height / 2;

        return {x: centerX, y: centerY}
    }

    private getRadius = (canvas: HTMLCanvasElement): number => {
        const fortyFivePercent: number = 0.45;
        let canvasWidth:number = canvas.width;
        let canvasHeight:number = canvas.height;
        return (canvasWidth > canvasHeight ? canvasHeight : canvasWidth) * fortyFivePercent;
    }
}