// Create a namespace object.
const workout = {};

// Initialize each option will be nested in an array inside of an object.
    // const exercises = [bodypart: `biceps`, "exercise name": `bicep curls`, sets: 4, reps: 10, instructions:...]
const exercises = [
    {bodypart:`chest`, exerciseName:`Dumbbell Bench Press`, sets:`3-4`, reps:`6-10`}, {bodypart:`chest`, exerciseName:`Incline Dumbbell Press`, sets:`3-4`, reps:`6-10`}, {bodypart:`chest`, exerciseName:`Pushups`, sets:`3-4`, reps:`to failure`},

    {bodypart:`back`, exerciseName:`Barbell Deadlift`, sets:`3-4`, reps:`6-10`}, {bodypart:`back`, exerciseName:`Chin-Ups`, sets:`3-4`, reps:`6-10`}, {bodypart:`back`, exerciseName:`Pullups`, sets:`3-4`, reps:`6-10`}, {bodypart:`back`, exerciseName:`Bent Over Barbell Row`, sets:`3-4`, reps:`6-10`},
    
    {bodypart:`legs`, exerciseName:`Dumbbell Squat`, sets:`3-4`, reps:`6-10`}, {bodypart:`legs`, exerciseName:`Bodyweight Squat`, sets:`3-4`, reps:`to failure`}, {bodypart:`legs`, exerciseName:`Dumbbell Lunges`, sets:`3-4`, reps:`8-12`},
    
    {bodypart:`abs`, exerciseName:`V Sit-Ups`, sets:`3-4`, reps:`to failure`}, {bodypart:`abs`, exerciseName:`Mountain Climbers`, sets:`3-4`, reps:`to failure`}, {bodypart:`abs`, exerciseName:`Hanging Knee Raise`, sets:`3-4`, reps:`to failure`},
    
    {bodypart:`arms`, exerciseName:`Dips (Triceps Version)`, sets:`3-4`, reps:`6-10`}, {bodypart:`arms`, exerciseName:`Diamond Pushups`, sets:`3-4`, reps:`to failure`}, {bodypart:`arms`, exerciseName:`Bench Dips`, sets:`3-4`, reps:`to failure`},
    
    {bodypart:`delts`, exerciseName:`Dumbbell Shoulder Press`, sets:`3-4`, reps:`6-10`}, {bodypart:`delts`, exerciseName:`Side Lateral Raise`, sets:`3-4`, reps:6-12}, {bodypart:`delts`, exerciseName:`Wall Walk`, sets:`3-4`, reps:`to failure`},
]

// Create a function that will take in an argument from the user’s input which will return exercises related to the muscle the user selected.
workout.getExercises = function(selectedMuscle){
    console.log(`Onto the next step!`);
    // console.log(exercises);
    const filteredExercises = exercises.filter(function(exercise){
        return exercise.bodypart === `${selectedMuscle}`;
    })
    console.log(filteredExercises);

    
}

workout.chosenMuscle = function(){
    console.log(`Is this thing working?!`);
    // Attach an event listener to the form that will execute a function once the input[type="submit"] is clicked.
    $(`form`).on(`submit`, function(e){
        // Prevent the default browser refresh with e.preventDefault().
        e.preventDefault();
        console.log(`You submitted the form!`);

        // The user will have to choose a body part they wish to exercise. For example, arms, legs, back, etc.
            // Store whatever the user selects inside of a variable.
        const userSelection = $(`input[type="radio"]:checked`).val();
        console.log(userSelection);
        
        // Pass in userSelection as an argument.
        workout.getExercises(userSelection);
    })
}



    // Call randomizer exercise function, then assign the return value to a variable.
    // Display the return value to the specific div.


// Filter exercises based on user selection.

// Generate a random number using the Math.floor(), based on the exercise array.
    // Return exercise.


    
// Create an init function which will fire off the initial instructions.
workout.init = function () {
    console.log(`Goodnight Moon!`);
    workout.chosenMuscle();
}

// Use $(function(){}).
$(function(){
    // Call init function.
    workout.init();
})

// Callback: is passed as an argument for another function. Has a variable name.
// Anonymous: a function that does not have a name. Is only used once.