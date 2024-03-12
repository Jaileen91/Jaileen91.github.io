function addition() {
    let firstNumber = document.getElementById("firstNumTxt").value;
    let secondNumber =  document.getElementById("secondNumTxt").value;
    console.log("first number: "+ firstNumber);
    console.log("second number: "+ secondNumber);

    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    console.log("total : "+ sum);
    document.getElementById("totalTxt").value = parseInt(sum);
  }
  function subtraction() {
    let firstNumber = document.getElementById("firstNumTxt").value;
    let secondNumber =  document.getElementById("secondNumTxt").value;
    console.log("first number: "+ firstNumber);
    console.log("second number: "+ secondNumber);

    let diff = parseInt(firstNumber) - parseInt(secondNumber);
    console.log("total : "+ diff);
    document.getElementById("totalTxt").value = parseInt(diff);
  }
  function multiplication() {
    let firstNumber = document.getElementById("firstNumTxt").value;
    let secondNumber =  document.getElementById("secondNumTxt").value;
    console.log("first number: "+ firstNumber);
    console.log("second number: "+ secondNumber);

    let prod = parseInt(firstNumber) * parseInt(secondNumber);
    console.log("total : "+ prod);
    document.getElementById("totalTxt").value = parseInt(prod);
  }
  function division() {
    let firstNumber = document.getElementById("firstNumTxt").value;
    let secondNumber =  document.getElementById("secondNumTxt").value;
    console.log("first number: "+ firstNumber);
    console.log("second number: "+ secondNumber);

    let quo = parseInt(firstNumber) / parseInt(secondNumber);
    console.log("total : "+ quo);
    document.getElementById("totalTxt").value = parseInt(quo);
  }