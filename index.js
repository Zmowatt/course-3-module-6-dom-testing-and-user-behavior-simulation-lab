// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

//Step 1
function simulateClick(containerId, message) {
  console.log("simulateClick fired with:", message);
  clearError();
  addElementToDOM(containerId, message);
}


//Step 2
function addElementToDOM(containerId, text) {
  console.log("Adding element to:", containerId, "with text:", text);
  const container = document.getElementById(containerId);
  if (container) {
    const p = document.createElement("p");
    p.textContent = text;
    container.appendChild(p);
  } else {
    console.log("Container not found:", containerId);
  }
}

function removeElementFromDOM(elementId) {
  console.log("Removing element:", elementId);
  const element = document.getElementById(elementId);
  if (element) {
    element.remove();
  } else {
    console.log("Element not found for removal:", elementId);
  }
}

//Step 3
function showError(message) {
  const error = document.getElementById("error-message");
  error.textContent = message;
  error.classList.remove("hidden");
  console.log("Error shown:", message);
}

function clearError() {
  const error = document.getElementById("error-message");
  error.textContent = "";
  error.classList.add("hidden");
}

//Step 4
function handleFormSubmit(formId, containerId) {
  const input = document.getElementById("user-input");
  const value = input.value.trim();

  console.log("Form submitted with value:", value);

  clearError();

  if (!value) {
    // inline error for empty input (realistic beginner approach)
    const error = document.getElementById("error-message");
    error.textContent = "Input cannot be empty";
    error.classList.remove("hidden");
    console.log("Form error: empty input");
    return;
  }

  addElementToDOM(containerId, value);
  input.value = "";
  console.log("Form successfully added value to DOM");
}

if (typeof module !== "undefined") {
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
  };
}