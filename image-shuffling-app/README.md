# Image Shuffling Web Application

## Project Overview
    - Develop a web application that dynamically displays and manipulates images based on user inputs and interactions.
    - The application will create three divs: "top," "middle," and "bottom," and populate them with images based on user-provided range criteria.

## User Interface
    - Create two textboxes, "first" and "last," for specifying the image range.
    - Add a button with the id "go" to trigger image loading and manipulation.
    - Display the "top," "middle," and "bottom" divs for image placement.

## User Input Validation
    - Validate user inputs in the "first" and "last" textboxes.
    - Ensure that both textboxes contain a single letter (alphabet character).
    - Handle incorrect inputs, such as digits, symbols, empty fields, or multiple characters.

## Image Loading and Display
    - When the "Go" button is clicked, load and display images whose filenames fall within the range specified by the "first" and "last" inputs.
    - Populate the "top" div with images, ensuring no more than eight images per div.
    - Dynamically create and display image elements within the appropriate divs.

## Image Movement
    - Implement the `moveMe()` function to allow users to move images left when double-clicked.
    - If an image in the "top" div is double-clicked, it moves one position to the left within the "top" div.
    - If an image in the "middle" div is double-clicked, it moves to the "bottom" div, becoming the last element.
    - If an image in the "bottom" div is double-clicked, it moves to the "middle" div, becoming the last element.

## Letter Highlighting and Movement (Keyboard Interaction)
    - Allow users to interact with images using keyboard inputs.
    - When a letter key within the specified range is pressed, highlight the corresponding image with a colored border.
    - If another letter is already highlighted, remove its border.

## Correct Order and Wrapping
    - Ensure that the "first" input letter is alphabetically before the "last" input letter. If not, display an error message and highlight both input fields with a yellow background.
    - Implement wrapping, so when the last image in a div is moved down, it wraps around to the next div (e.g., from "bottom" to "top").

## Testing and Validation
    - Thoroughly test the application to verify that it correctly handles various user inputs, image loading, movement, and keyboard interactions.
    - Ensure the application adheres to the specified requirements and provides appropriate error handling and feedback.

## Conclusion
    - The Image Shuffling Web Application allows users to specify a range of images, move images left or down within the divs, and ensures correct order and wrapping of images.
    - The application provides an interactive and dynamic image manipulation experience.