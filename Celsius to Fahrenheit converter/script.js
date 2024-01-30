function converter(){
    let cmvalue = document.getElementById("input").value;
    let inchvalue = ((cmvalue* 1.8) + 32)
    let result = document.getElementById("result")
    result.innerHTML=inchvalue +" °F" 

}
