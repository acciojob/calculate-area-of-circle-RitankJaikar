function calculateArea() {
  // Get the radius from the user using the prompt() function
  let radius = parseFloat(prompt("Enter the radius of the circle:"));

  // Check if the input is valid
  if (radius > 0) {
    // Calculate the area of the circle
    const area = Math.PI * Math.pow(radius, 2);

    // Round the result to two decimal places
    const roundedArea = area.toFixed(2);

    // Display the result to the user
    alert(`The area of the circle with radius ${radius} is ${roundedArea}`);
  } else {
    // Handle invalid input
    alert("Please enter a valid positive number for the radius.");
  }
}

calculateArea();