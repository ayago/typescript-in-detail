export interface Shape {
    getName?: () => string;
    draw2D: (context: CanvasRenderingContext2D) => void;
}