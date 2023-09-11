# Dragon Damage Calculator

## Project Overview
    - Create a function that calculates damage inflicted on a dragon.
    - The function takes two parameters: 'damage' and 'attack type'.
    - The dragon's damage should be visible to the user.
    - Implement this function for three separate buttons, each representing a different attack type.
    - Include a "Reset Game" button to restart the game.

## Function Details
    - Function Name: `calculateDragonDamage(damage, attackType)`
    - Parameters:
        - `damage` (integer): The base damage value dealt to the dragon.
        - `attackType` (string): The type of attack (fire, ice, or poison).

## Function Logic
    - If the attack type is 'fire', reduce the damage by 1.
    - If the attack type is 'ice', increase the damage by 1.
    - If the attack type is 'poison', no change to damage.
    - Update and display the dragon's current damage to the user.

## User Interface
    - Implement three buttons with the following characteristics:
        - Button 1: Fire Attack
            - Deals 3 damage to the dragon.
        - Button 2: Ice Attack
            - Deals 1 damage to the dragon.
        - Button 3: Poison Attack
            - Deals 4 damage to the dragon.
    - Include a "Reset Game" button to reset the dragon's damage to 0.

## Winning Condition
    - Check the dragon's damage after each attack.
    - If the dragon's damage reaches 10 or more, notify the user that they have won and provide an option to reset the game.

## User Feedback
    - Provide user feedback after each attack, displaying the dragon's updated damage and whether they have won.

## Implementation Steps
    - Define the attackDragon function with appropriate logic.
    - Create the user interface with buttons for attacks and a reset button "OK" in alert box.
    - Implement event handlers for each button to calculate and display damage.
    - Check for the winning condition and notify the user when met.
    - Implement the resetGame function to reset the game when the button is clicked "OK" in alert box.

## Testing and Validation
    - Test the functionality of the buttons and damage calculation.
    - Verify that the winning condition is working correctly.
    - Ensure that the dragon's damage is reset to 0 when the game is restarted.

## Conclusion
    - This project aims to create a simple game where the user can choose different attack types to damage a dragon, with varying effects based on the attack type.
    - The user wins when the dragon's damage reaches 10 or more and allowing users to start a new game after winning.