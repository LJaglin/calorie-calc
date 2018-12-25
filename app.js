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

    //calculating basal metabolic rate
    const bmr = ((10 * weight) + (6.25 * height) - (5 * age)) + parseFloat(sex);
    
}
