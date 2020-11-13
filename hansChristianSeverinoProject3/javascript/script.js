// Create a namespace object.
const workout = {};

// Create an init function which will fire off the initial instructions.
workout.init = function(){
    console.log(`Goodnight Moon!`);
    workout.getExercise();
}

workout.getExercise = function(){
    console.log(`Is this thing working?!`);
}

// Attach an event listener to the form that will execute a function once the input[type="submit"] is clicked.
    // Prevent the default browser refresh with e.preventDefault().
    // Call randomizer exercise function, then assign the return value to a variable.
    // Display the return value to the specific div.

// The user will have to choose a body part they wish to exercise. For example, arms, legs, back, etc.

// Initialize each option will be nested in an array inside of an object.
    // const exercises = [bodypart: `biceps`, "exercise name": `bicep curls`, sets: 4, reps: 10, instructions:...]

// Use if/else statements. Will handle invalid inputs.

// Based on the user's choice, create a function that will take in an argument from the user’s input which will generate a random exercise, along with reps, and sets.

// Filter exercises based on user selection.

// Generate a random number using the Math.floor(), based on the exercise array.
    // Return exercise.

// Use $(function(){}).
$(function(){
    // Call init function.
    workout.init();
})

// Callback: is passed as an argument for another function. Has a variable name.
// Anonymous: a function that does not have a name. Is only used once.