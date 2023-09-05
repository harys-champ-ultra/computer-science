// Define a function named asciiArt that takes two parameters: word (the input text) and character (the character to use for ASCII art)
const asciiArt = (word, character) => {
    // Convert the input word to uppercase to ensure consistency
    word = word.toUpperCase();

    // Check if the character is not a single character, display an error message, and return false
    if (character.length !== 1) {
        console.log("Please enter a single character.");
        return false;
    }

    // Define an object 'letters' that contains ASCII art representations for various uppercase letters
    const letters = {
        A:
            `
          ${character}${character}${character}${character}${character}
         ${character}     ${character}
        ${character}       ${character}
        ${character}       ${character}
        ${character}${character}${character}${character}${character}${character}${character}${character}${character}
        ${character}       ${character}
        ${character}       ${character}
        `,
        B:
            `
        ${character}${character}${character}${character}${character}${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}${character}${character}${character}${character}${character}${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}${character}${character}${character}${character}${character}
        `,
        C:
            `
         ${character}${character}${character}${character}${character}${character}
        ${character}       ${character}
        ${character}       
        ${character}       
        ${character}       
        ${character}       ${character}
         ${character}${character}${character}${character}${character}${character}        
        `,
        D:
            `
        ${character}${character}${character}${character}${character}${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}${character}${character}${character}${character}${character}
        `,
        E:
            `
        ${character}${character}${character}${character}${character}${character}${character}
        ${character}        
        ${character}        
        ${character}${character}${character}${character}${character}${character}${character}
        ${character}        
        ${character}        
        ${character}${character}${character}${character}${character}${character}${character}
        `,
        F:
            `
        ${character}${character}${character}${character}${character}${character}${character}
        ${character}        
        ${character}        
        ${character}${character}${character}${character}${character}${character}${character}
        ${character}        
        ${character}        
        ${character}        
        `,
        G:
            `
         ${character}${character}${character}${character}${character}${character}
        ${character}      ${character}
        ${character}       
        ${character}       
        ${character}   ${character}${character}${character} 
        ${character}      ${character}
         ${character}${character}${character}${character}${character}${character}
        `,
        H:
            `
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}${character}${character}${character}${character}${character}${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        `,
        I:
            `
        ${character}${character}${character}${character}${character}${character}${character}
           ${character}    
           ${character}    
           ${character}    
           ${character}    
           ${character}    
        ${character}${character}${character}${character}${character}${character}${character}
        `,
        J:
            `
           ${character}${character}${character}${character}
              ${character}
              ${character}
              ${character}
              ${character}
        ${character}     ${character}
         ${character}${character}${character}${character}${character}${character}
        `,
        K:
            `
        ${character}     ${character}
        ${character}    ${character} 
        ${character}  ${character}   
        ${character}${character}    
        ${character}  ${character}   
        ${character}    ${character} 
        ${character}     ${character}   
        `,
        L:
            `
        ${character}    
        ${character}    
        ${character}    
        ${character}    
        ${character}    
        ${character}    
        ${character}${character}${character}${character}${character}${character}   
        `,
        M:
            `
        ${character}     ${character}
        ${character}${character}   ${character}${character}
        ${character} ${character} ${character} ${character}
        ${character}  ${character}  ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}   
        `,
        N:
            `
        ${character}     ${character}
        ${character}${character}    ${character}
        ${character} ${character}   ${character}
        ${character}  ${character}  ${character}
        ${character}   ${character} ${character}
        ${character}    ${character}${character}
        ${character}     ${character}   
        `,
        O:
            `
         ${character}${character}${character}${character}${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
         ${character}${character}${character}${character}${character}   
        `,
        P:
            `
        ${character}${character}${character}${character}${character}${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}${character}${character}${character}${character}${character}
        ${character}
        ${character}
        ${character}
        `,
        Q:
            `
         ${character}${character}${character}${character}${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}   ${character} ${character}
         ${character} ${character} ${character} ${character}
              ${character} ${character}
        `,
        R:
            `
        ${character}${character}${character}${character}${character}${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}${character}${character}${character}${character}${character} 
        ${character}   ${character} 
        ${character}    ${character}
        ${character}     ${character}   
        `,
        S:
            `
         ${character}${character}${character}${character}${character}
        ${character}     ${character}
        ${character}
         ${character}${character}${character}${character}${character}
              ${character}
        ${character}     ${character}
         ${character}${character}${character}${character}${character}   
        `,
        T:
            `
        ${character}${character}${character}${character}${character}${character}${character}
           ${character}   
           ${character}   
           ${character}   
           ${character}   
           ${character}   
           ${character}
        `,
        U:
            `
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
         ${character}${character}${character}${character}${character}
        `,
        V:
            `
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
         ${character}   ${character}  
           ${character}
        `,
        W:
            `
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
        ${character}  ${character}  ${character}
        ${character} ${character} ${character} ${character}
        ${character}${character}   ${character}${character}
        ${character}     ${character}
        `,
        X:
            `
        ${character}     ${character}
        ${character}     ${character}
         ${character}   ${character}
           ${character}   
         ${character}   ${character}
        ${character}     ${character}
        ${character}     ${character}
        `,
        Y:
            `
        ${character}     ${character}
        ${character}     ${character}
        ${character}     ${character}
         ${character}   ${character} 
           ${character}   
           ${character}   
           ${character}
        `,
        Z:
            `
        ${character}${character}${character}${character}${character}${character}${character}
             ${character}
            ${character}
           ${character}
          ${character}
         ${character}     
        ${character}${character}${character}${character}${character}${character}${character}
        `
    }

    // Initialize a variable 'asciiArtText' to store the final ASCII art
    let asciiArtText = '';

    // Loop through each letter in the input word
    for (const letter of word) {
        // If the letter exists in the 'letters' object, add its ASCII art representation to 'asciiArtText'
        if (letters[letter]) {
            asciiArtText += letters[letter];
        } else {
            // If the letter is not found, add spaces as a placeholder
            console.log(`Letter '${letter}' not found in the ASCII art database.`);
            asciiArtText += '   ';
        }
    }

    // Print the final ASCII art to the console
    console.log(asciiArtText);
}

// Define the input word and character
const word = "ASCII";
const character = "#";

// Call the asciiArt function with the specified word and character
asciiArt(word, character);