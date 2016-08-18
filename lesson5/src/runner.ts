import {Bootstrap} from "./bootstrap";

document.onreadystatechange = function(){
    if(document.readyState === 'complete'){
        new Bootstrap(document)
            .setOutputWriter((message:string):void => {
                alert(message)
            })
            .applyDomEventHandlers('btn2','btn1');
    }
}
