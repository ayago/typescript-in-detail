import {Bootstrap} from "./bootstrap"

document.onreadystatechange = function(){
    if(document.readyState === "complete"){
        new Bootstrap(document)
            .initializeInterfacePanel({
                invokeBtnId: 'invokeButton',
                selectShapeBtn: 'shapeImpl',
                canvasId: 'shapeCanvasArea'
            })
    }
}