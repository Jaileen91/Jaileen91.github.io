function separateNumbers() {
  const evenNumbers = [];
  const oddNumbers = [];
  
  function classifyNumber(number) {
    if (number === 0) {
      displayResults();
      return;
    }
    
    if (isNaN(number)) {
      alert("Please enter a valid number.");
      return;
    }
    
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
    
    const userInput = prompt("Enter another number (or 0 to finish):");
    classifyNumber(parseInt(userInput));
  }
  
  function displayResults() {
    console.log("Even numbers:", evenNumbers.join(', '));
    console.log("Odd numbers:", oddNumbers.join(', '));
  }
  
  const firstInput = prompt("Enter a number (or 0 to finish):");
  classifyNumber(parseInt(firstInput));
}

separateNumbers();