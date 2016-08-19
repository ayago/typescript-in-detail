import {Shape} from "../interface/shape"
import {CartesianPoint} from "../interface/point"

export class Circle implements Shape {
    private name:string;

    constructor(){this.name = "Circle"};

    public getName = ():string => {
        return this.name;
    }

    public draw2D = (canvas: HTMLCanvasElement):void => {
        let context:CanvasRenderingContext2D = canvas.getContext("2d")

        let center: CartesianPoint = this.getCenterPoint(canvas);
        var radius = 70;
        
        context.beginPath();
        context.arc(center.x, center.y, radius, 0, 2 * Math.PI, false);
        context.lineWidth = 2;
        context.stroke();
    }

    private getCenterPoint = (canvas: HTMLCanvasElement): CartesianPoint => {
        let centerX: number = canvas.width / 2;
        let centerY: number = canvas.height / 2;
        console.log(`x: ${centerX}, y: ${centerY}`)
        return {x: centerX, y: centerY}
    }
}