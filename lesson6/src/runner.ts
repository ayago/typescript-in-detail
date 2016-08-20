import {Bootstrap} from "./bootstrap"

document.onreadystatechange = function(){
    if(document.readyState === "complete"){
        new Bootstrap(window)
            .initializeInterfacePanel({
                invokeBtnId: 'invokeButton',
                selectShapeBtn: 'shapeImpl',
                canvasId: 'shapeCanvasArea',
                messagePanelId: 'invokersMessage'
            })
    }
}