// Initialize the dragon's damage
let dragonDamage = 0;

// Function to calculate and display dragon damage
const attackDragon = (attackType, damage) => {
    // Modify damage based on attack type
    if (attackType === "fire") {
        damage -= 1;
    } else if (attackType === "ice") {
        damage += 1;
    }

    // Update dragon's damage
    dragonDamage += damage;

    // Display dragon's updated damage
    document.getElementById("dragonDamage").textContent = dragonDamage;

    // Check for winning condition
    if (dragonDamage >= 10) {
        alert("Congratulations! You have defeated the dragon!");
        resetGame();
    }
}

// Function to reset the game
const resetGame = () => {
    dragonDamage = 0;
    document.getElementById("dragonDamage").textContent = dragonDamage;
}