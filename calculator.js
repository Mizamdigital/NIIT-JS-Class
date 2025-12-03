let display = document.getElementById("display"); //show input
let displayType = document.getElementById("displayType"); //show output

let currentInput = "";
let lastOperator = "";

function appendNumber(number) {
        if (currentInput === "0") {
          currentInput = number;
        } else {
          currentInput += number;
        }
        displayType.innerText = "";
        updateOutput();
      }

      function appendOperator(operator) {
        if (currentInput === "") return;
        currentInput += operator;
        displayType.innerText = "";
        updateOutput();
      }

      function appendDecimal() {
        if (!currentInput.includes(".")) {
          currentInput += ".";
        }
        updateOutput();
      }

      function squareRoot(){
        let result = Math.sqrt(eval(currentInput));
        currentInput = result.toString();
        updateOutput();
         }

      function power(){
        let result = Math.pow(eval(currentInput),2);
        currentInput = result.toString();
        updateOutput();
      }

      function clearDisplay() {
        currentInput = "";
        display.innerText = "0";
        displayType.innerText = "";
        updateOutput();
      }

      function deleteDisplay() {
        currentInput = currentInput.slice(0, -1);
        updateOutput();
      }

      function calculate() {
        // Show what the user typed on the top
       displayType.innerText = currentInput;

       // Calculate
       let result = eval(currentInput);

       // Show result on the main display
        currentInput = result.toString();
        updateOutput();
      }

      function updateOutput(){
        display.innerText = currentInput || "0";
      }
