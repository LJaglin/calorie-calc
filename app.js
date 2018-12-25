//Listener for submit
const sub = document.querySelector('#calorie-form').addEventListener('submit', function(e) {
    calculateResults();
    e.preventDefault();
});

//Calculate daily calorie requirements
function calculateResults() {
    //UI vars
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const age = document.querySelector('#age').value;
    const sex = document.querySelector('#sex').value;
    const activity = document.querySelector('#activity').value;

    //Output vars
    const dailyCalorieRequirements = document.querySelector('#dailyCalorie');


    //calculating basal metabolic rate
    const bmr = ((10 * weight) + (6.25 * height) - (5 * age)) + parseFloat(sex);
 
    if (isFinite(bmr)) {
        let dailyCalorie = bmr * parseFloat(activity);
        dailyCalorieRequirements.value = Math.round(dailyCalorie);
    } else {
        console.log('Wrong numbers...')
    }
}

//Function returns amount of macronutrient in grams
function getAmountOfMacronutrient(dailyCalorie, procent, macro) {
    let caloriePerGram;
    if (macro === 'p' || macro === 'c') {
        caloriePerGram = 4;
    } else if (macro === 'f') {
        caloriePerGram = 9;
    }
    return (dailyCalorie * (procent / 100)) / caloriePerGram;
}
