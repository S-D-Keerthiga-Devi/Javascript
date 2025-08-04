const form = document.querySelector('form')
// this usecase will giveyou empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "please give a valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "please give a valid weight"
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }

    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    
    if(bmi < 18.6){
        const message = document.querySelector('.message')
        message.innerHTML = `The given height ${height} and weight ${weight} has BMI ${bmi} is UNDER WEIGHT`
    }
    else if(bmi > 18.6 && bmi < 24.9){
        const message = document.querySelector('.message')
        message.innerHTML = `The given height ${height} and weight ${weight} has BMI ${bmi} is NORMAL RANGE`
    }
    else {
        const message = document.querySelector('.message')
        message.innerHTML = `The given height ${height} and weight ${weight} has BMI ${bmi} is OVERWEIGHT`
    }
})