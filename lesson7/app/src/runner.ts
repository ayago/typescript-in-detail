import {QoutesServiceFactory, DaysInAWeek} from './service/index'

document.onreadystatechange = function(){
    if(document.readyState === "complete"){
        alert(QoutesServiceFactory.generateDefaultInstance().generateQoute(DaysInAWeek.Tuesday, "PM"))
    }
}