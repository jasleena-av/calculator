function displaycontent(content){
    calcscreen.value +=
    content

}
function allclear(){
    calcscreen.value =''
}
function evaluateexp(){
    calcscreen.value=eval(calcscreen.value)
}
function removelast(){
    calcscreen.value=calcscreen.value.slice(0,-1)
}