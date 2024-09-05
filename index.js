const responses =["b", "c", "b", "b", "d", "c", "b", "c", "c", "b", ]
const form = document.querySelector(".form");
const questionDivs = document.querySelectorAll('.question-div');
const resultsDiv = document.querySelector('.results-div');
const submitButton = document.querySelector('.submit-button');
const results =[];
const radioButtons = document.querySelectorAll("input[type='radio']:checked")

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    const radioButtons = document.querySelectorAll("input[type='radio']:checked");
    radioButtons.forEach((radioButton, index) => {
        const questionDiv = questionDivs[index];
        if (radioButton.value === responses[index]) {
            results.push(true);
            questionDiv.style.backgroundColor = "lightgreen";

        } else {
            results.push(false);
            questionDiv.style.backgroundColor = "lightcoral";
        }
    });
    const score = results.filter(result => result === true).length;
    displayResults(score);
}

function displayResults(score){
    resultsDiv.classList.remove('display-none')
    submitButton.classList.remove('display-block')
    resultsDiv.classList.add("display-block")
    submitButton.classList.add("display-none")
    resultsDiv.textContent = `Your score is: ${score}/${responses.length}`;
}
