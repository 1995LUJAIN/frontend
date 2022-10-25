

function calc(){
    let firstnumber = document.getElementById("first-number");
    let secondnumber = document.getElementById("second-number");
    let result= document.getElementById("result");
    let opesum = document.getElementById("sum");
    let opemin = document.getElementById("min");
    let opemult = document.getElementById("mult");
    let opediv = document.getElementById("div");

    if(opesum.checked){
    result.innerHTML=parseInt(firstnumber.value) +parseInt(secondnumber.value) ;}
    if(opemin.checked){
        result.innerHTML=parseInt(firstnumber.value) -parseInt(secondnumber.value) ;}

        if(opemult.checked){
            result.innerHTML=parseInt(firstnumber.value) *parseInt(secondnumber.value) ;}

            if(opediv.checked){
                result.innerHTML=parseInt(firstnumber.value) /parseInt(secondnumber.value) ;}
            

}
