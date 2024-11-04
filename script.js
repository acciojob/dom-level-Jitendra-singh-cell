//your JS code here. If required.
// Function to calculate the DOM level of an element with a specific id
function findDOMLevel() {
  // Get the element with id 'level'
  let element = document.getElementById('level');
  let level = 0;

  // Traverse up the DOM tree until we reach the <html> element (the root)
  while (element) {
    level++;
    element = element.parentElement; // Move to the parent element
  }

  // Show the DOM level in an alert
  alert(`The level of the element is: ${level}`);
}

// Call the function to calculate the DOM level
findDOMLevel();

