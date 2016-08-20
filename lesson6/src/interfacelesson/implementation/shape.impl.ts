export class ShapeImpl {
    protected name:string;

    constructor(name:string) {
        this.name = name;
    }
    protected clearCanvas = (context: CanvasRenderingContext2D):void => {
        let canvas: HTMLCanvasElement = context.canvas;
        context.clearRect(0,0,canvas.width, canvas.height);
    }
}