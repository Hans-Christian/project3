// Create a namespace object.
const workout = {};

// Initialize each option will be nested in an array inside of an object.
    // const exercises = [bodypart: `biceps`, "exercise name": `bicep curls`, sets: 4, reps: 10, instructions:...]
const exercises = [
    {bodypart:`chest`, exerciseName:`Dumbbell Bench Press`, sets:`3-4`, reps:`6-10 reps`}, {bodypart:`chest`, exerciseName:`Incline Dumbbell Press`, sets:`3-4`, reps:`6-10 reps`}, {bodypart:`chest`, exerciseName:`Pushups`, sets:`3-4`, reps:`as many as you can do`},

    {bodypart:`back`, exerciseName:`Barbell Deadlifts`, sets:`3-4`, reps:`6-10 reps`}, {bodypart:`back`, exerciseName:`Chin-Ups`, sets:`3-4`, reps:`6-10 reps`}, {bodypart:`back`, exerciseName:`Pullups`, sets:`3-4`, reps:`6-10 reps`}, {bodypart:`back`, exerciseName:`Bent Over Barbell Rows`, sets:`3-4`, reps:`6-10 reps`},
    
    {bodypart:`legs`, exerciseName:`Dumbbell Squats`, sets:`3-4`, reps:`6-10 reps`}, {bodypart:`legs`, exerciseName:`Bodyweight Squats`, sets:`3-4`, reps:`as many as you can do`}, {bodypart:`legs`, exerciseName:`Dumbbell Lunges`, sets:`3-4`, reps:`8-12 reps`},
    
    {bodypart:`abs`, exerciseName:`V Sit-Ups`, sets:`3-4`, reps:`as many as you can do`}, {bodypart:`abs`, exerciseName:`Mountain Climbers`, sets:`3-4`, reps:`as many as you can do`}, {bodypart:`abs`, exerciseName:`Hanging Knee Raises`, sets:`3-4`, reps:`as many as you can do`},
    
    {bodypart:`arms`, exerciseName:`Dips (Triceps Version)`, sets:`3-4`, reps:`6-10 reps`}, {bodypart:`arms`, exerciseName:`Diamond Pushups`, sets:`3-4`, reps:`as many as you can do`}, {bodypart:`arms`, exerciseName:`Bench Dips`, sets:`3-4`, reps:`as many as you can do`},
    
    {bodypart:`delts`, exerciseName:`Dumbbell Shoulder Press`, sets:`3-4`, reps:`6-10 reps`}, {bodypart:`delts`, exerciseName:`Side Lateral Raises`, sets:`3-4`, reps:`6-12 reps`}, {bodypart:`delts`, exerciseName:`Wall Walks`, sets:`3-4`, reps:`as many as you can do`},
]

// Display the return value on the page.
workout.displayExercise = function(generatedExercise){

    const displayOnPage = `Do ${generatedExercise.sets} sets of: <span>${generatedExercise.exerciseName}</span> for ${generatedExercise.reps}.`
    $(`.displayExercise`).html(displayOnPage);
}

// Create a function that will take in an argument from the user’s input which will return exercises related to the muscle the user selected.
workout.getExercise = function(selectedMuscle){

    // Filter exercises based on user selection.
    const filteredExercises = exercises.filter(function(exercise){
        return exercise.bodypart === `${selectedMuscle}`;
    })

    // Use Math.floor() to generate a random exercise.
        // Store random exercise in variable.
    let randomExercise = filteredExercises[Math.floor(Math.random() * filteredExercises.length)];

    // Pass in randomExercise as an argument.
    workout.displayExercise(randomExercise);
}

workout.chosenMuscle = function(){

    // Attach an event listener to the form that will execute a function once the input[type="submit"] is clicked.
    $(`form`).on(`submit`, function(e){

        // Prevent browser refresh.
        e.preventDefault();

        // The user will have to choose a body part they wish to exercise. For example, arms, legs, back, etc.
            // Store whatever the user selects inside of a variable.
        const userSelection = $(`input[type="radio"]:checked`).val();

        // Pass in userSelection as an argument.
        workout.getExercise(userSelection);
    })
}

// Create an init function which will fire off the initial instructions.
workout.init = function () {

    workout.chosenMuscle();
}

// Check if page successfully loaded.
$(function(){

    // Call init function.
    workout.init();
})