# Grade Management App

## Project Overview
    - Develop a web application with three screens: Log In, Grade View, and Add Grade.
    - Each screen serves specific functionalities related to managing student grades.
    - The application enforces username and password requirements for login, allows users to view and add grades, and provides validation for grade input.

## Log In Screen
    - This is the initial screen displayed to users upon opening the webpage.
    - Users must input "cool" as the username and "password" as the password in respective input fields.
    - The password input field should be masked as a password.
    - Users can attempt to sign in by clicking a "Log In" button.
    - If the username/password is correct, the user is redirected to the Grade View screen.
    - If the username/password is incorrect, appropriate error messaging is displayed, allowing users to fix the mistake and retry.

## Grade View Screen
    - Lists all the grades that have been added from the "Add Grade" menu.
    - Provides an option for users to navigate to the "Add Grade" menu to input new grades.

## Add Grade Screen
    - Allows users to add a new grade to the Grade View.
    - A grade entry consists of:
        - A student's name (a string value).
        - A student's grade (a number within the range 0-100). Note that number input fields cannot be used.
    - A grade can only be submitted if it meets the specified criteria.
    - Users submit a grade by clicking a "Submit" button.
    - If the submission is correct, the user is directed to the Grade View menu, listing all the grades they have added.
    - If the submission is incorrect, the user is notified about incomplete or incorrect information, and they must rectify the error before resubmission.

## Application State
    - Maintain application state variables, including login status and a list of grades.

## Implementation Steps
    - Create HTML elements for the Log In, Grade View, and Add Grade screens.
    - Implement JavaScript functions to manage user interactions and application logic.
    - Validate user input, handle transitions between screens, and display grade information.
    - Enforce security by checking the correctness of the provided username and password.

## User Feedback
    - Provide error messages and feedback to users when they input incorrect data or make mistakes during login or grade submission.
    - Notify users about successful actions, such as successfully adding a grade or logging in.

## Testing and Validation
    - Thoroughly test the application to ensure that all functionalities work as expected.
    - Verify that the login system and grade submission process operate securely and reliably.
    - Check for edge cases, such as invalid inputs, and handle them gracefully.

## Conclusion
    - The Grade Management App allows users to log in securely, view existing grades, and add new grades with validation.
    - The application ensures data integrity and provides clear feedback to users throughout their interactions.