//Contatenation
let btnConcat = document.getElementById("btn-morning");
btnConcat.addEventListener('click', function() {

    let FullName = document.getElementById("txt-name").value;
     
    document.getElementById("h1-txt").innerText = "Good Morning! " + FullName;
    console.log(FullName);
});

let btnConcat1 = document.getElementById("btn-afternoon");
btnConcat1.addEventListener('click', function() {

    let FullName = document.getElementById("txt-name").value;
     
    document.getElementById("h1-txt").innerText = "Good Afternoon! " + FullName;
    console.log(FullName);
});
let btnConcat2 = document.getElementById("btn-evening");
btnConcat2.addEventListener('click', function() {

    let FullName = document.getElementById("txt-name").value;
     
    document.getElementById("h1-txt").innerText = "Good Evening! " + FullName;
    console.log(FullName);
});