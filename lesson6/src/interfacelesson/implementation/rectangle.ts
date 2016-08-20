import {Shape} from "../interface/shape"
import {CartesianPoint} from "../interface/point"
import {Dimension} from "../interface/dimension"
import {ShapeImpl} from "./shape.impl"

export class Rectangle extends ShapeImpl implements Shape {

    constructor(){
        super("Rectangle")
    };

    public getName = ():string => {
        return this.name;
    }

    public draw2D = (context: CanvasRenderingContext2D):void => {
        this.clearCanvas(context);
        let startingPoint: CartesianPoint = this.getStartingPoint(context.canvas);
        let twoDDimension: Dimension = this.getDimensions(context.canvas);
        context.beginPath();
        context.rect(startingPoint.x,startingPoint.y,twoDDimension.width,twoDDimension.height);
        context.lineWidth = 2;
        context.stroke();
    }

    private getStartingPoint = (canvas: HTMLCanvasElement):CartesianPoint => {
        const fivePercent:number = 0.05;
        const tenPercent: number = 0.2;
        let x: number = canvas.width * fivePercent;
        let y: number = canvas.height * tenPercent;

        return {x: x, y:y};
    }

    private getDimensions = (canvas: HTMLCanvasElement):Dimension => {
        const ninetyPercent: number = 0.9;
        const sixtyPercent: number = 0.6;
        let width: number = canvas.width * ninetyPercent;
        let height: number = canvas.height * sixtyPercent;

        return {width: width, height:height};
    }
    
}

