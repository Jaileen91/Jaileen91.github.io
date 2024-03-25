let weight = parseFloat(prompt("enter your weight: "));
let height = parseFloat(prompt("enter your height: "));
console.log("weight: ",weight);
console.log("height: ",height);

let bmi = weight /(height*height);
console.log("BMI: "+ bmi);

if(bmi<16){
console.log("BMI: Severley Underweight"); 
}
 if(bmi>=16 && bmi <=18.4){
console.log("BMI: Underweight");  
}if(bmi>=18.5 && bmi <=24.9){
    console.log("BMI: Normal weight");  
}if(bmi>=25.0 && bmi <=29.9){
    console.log("BMI: Overweight");  
}if(bmi>=30.0 && bmi<=34.9){
    console.log("BMI: Moderately Obese");  
}
if(bmi>=35.0 && bmi <=39.9){
    console.log("BMI: Severley Obese");  
}
if(bmi>40){
    console.log("BMI: Morbidly Obese");  
}



