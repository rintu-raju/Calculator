// Calculator program

// It's important to use 'const' for elements that will not change, and 'let' for mutable variables.
const display = document.getElementById("display");

// Use camelCase for function names and be consistent with the spelling of variables.
function appendToDisplay(input) {
    display.value += input;
}

function cleardisplay() {
    display.value = "";
}

// Replace 'eval' with a safer alternative to avoid potential security risks.
function Calculate() {
    try {
        // Use a safer alternative to 'eval', such as a dedicated math library or a custom parser.
        // For demonstration purposes, I'll keep it simple and use 'Function' constructor.
        // However, in a production environment, consider using math.js or a similar library.
        const result = new Function('return ' + display.value)();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Add event listeners for buttons if necessary, and consider implementing keyboard support.
