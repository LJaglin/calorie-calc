//Listener for submit
const sub = document.querySelector('#calorie-form').addEventListener('submit', function(e) {
    calculateResults();
    e.preventDefault();
});

