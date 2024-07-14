const display = document.getElementById('display');
function button(input){
    display.value+=input;

}
function clearbutton(){
    display.value="";
}
function equalto(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }

}