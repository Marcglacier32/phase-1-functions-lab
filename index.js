// Function 1: distanceFromHqInBlocks
// Returns the number of blocks from Scuber's headquarters at 42nd Street
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Returns the absolute difference in blocks
  }
  
  // Function 2: distanceFromHqInFeet
  // Converts the number of blocks to feet (each block is 264 feet long)
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue); // Get the number of blocks
    return blocks * 264; // Convert blocks to feet
  }
  
  // Function 3: distanceTravelledInFeet
  // Calculates the distance in feet between two blocks (start and destination)
  function distanceTravelledInFeet(start, destination) {
    const blockDifference = Math.abs(start - destination); // Difference in blocks
    return blockDifference * 264; // Convert to feet
  }
  
  // Function 4: calculatesFarePrice
  // Calculates the fare price based on the distance travelled (using the rules provided)
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Get the distance in feet
  
    if (distance <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // If the distance exceeds 2500 feet
    }
  }
  