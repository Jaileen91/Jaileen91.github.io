let min = parseFloat(prompt("enter your min: "));
let max = parseFloat(prompt("enter your max: "));
console.log("min: ",min);
console.log("max: ",max);

if (min > max){
    alert("invalid");
}

for(var x = min; x <= max; x++){
    console.log(x)
}