export interface Shape {
    getName?: () => string;
    draw2D: (canvas: HTMLCanvasElement) => void;
}