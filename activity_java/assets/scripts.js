// let FullName = "Enter your full name";
// let newHeadingText = "Good Afternoon";

alert("Your message here");
//Contatenation
let btnMorning = document.getElementById("btn-morning");
btnMorning.addEventListener('click', function() {

   
    let FullName = document.getElementById("txt-fullname").value;
    document.getElementById("p-output").innerHTML = FullName;
     
    let Prefix = "Good";
    let concatenated = Prefix + " Morning,"
    document.getElementById("h-good").innerHTML = concatenated;
    
});



let btnAfternoon = document.getElementById("btn-afternoon");
btnAfternoon.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
     
    document.getElementById("p-output").innerHTML = FullName;

    let Prefix = "Good";
    let concatenated = Prefix + " Afternoon,"
    document.getElementById("h-good").innerHTML = concatenated;

    
});

let btnEvening = document.getElementById("btn-evening");
btnEvening.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
     
    document.getElementById("p-output").innerHTML = FullName;

    let Prefix = "Good";
    let concatenated = Prefix + " Evening,"
    document.getElementById("h-good").innerHTML = concatenated;

    
});