// greeting.js

/**
 * Generates a personalized greeting message.
 * @param {string} name .
 * @returns {string} The greeting message.
 */
function greetUser(name = 'Snil n Amol') {
    return `Hello, ${name}! Welcome back.`;
}

// Example usage:
console.log(greetUser('Atharva here')); 
console.log(greetUser());        
