//Events must be read/learn :- Type, Timestamp, PreventDefault, Target, toElement, srcElement, Currenttarget, ClientX, 
// ClientY,ScreenX, ScreenY, altKey,ctrlKey,shiftKey, keyCode

//Event Propagation :- Bubble Up/ Event Bubbling ! Event will work down to up like bubble do. (When you pass false)
//Capturing Event :- Its work up to down (When you pass true)

//So these event work according to scenario/case

document.getElementById('ID_Name').addEventListener ('click', function (e){
    console.log("Cliked inside the url");
    e.stopPropagation() //it will stop bubblig 
}, false)
document.getElementById('ID_Name').addEventListener ('click', function (e){
    console.log("Cliked on anyother");
}, true)