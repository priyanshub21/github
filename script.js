// Clear the display
function clearDisplay() {
    document.getElementById("display").value = "";  // This clears the display
}

// Append a value to the display
function appendValue(value) {
    document.getElementById("display").value += value;  // Adds numbers/operators to the input
}

// Calculate and show the result
function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);  // Evaluates the expression
        document.getElementById("display").value = result;  // Displays the result
    } catch (error) {
        document.getElementById("display").value = "Error";  // Shows 'Error' if invalid input
    }
}
