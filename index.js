const responses =["b", "c", "b", "b", "d", "c", "b", "c", "c", "b", ]

const form = document.querySelector(".form");

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    const results =[];
    const radioButtons = document.querySelectorAll("input[type='radio']:checked")
    
    radioButtons.forEach((radioButton, index) => {
        if((radioButton.value) === responses[index]){
            results.push(true)
        }else{results.push(false)}
    }); 
    console.log(radioButtons);
    console.log(results)
}