const bmiText = document.getElementById('bmi');
const descText = document.getElementById('desc');
const form = document.querySelector('form');
const waterIntakeElement = document.getElementById('water')

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
    bmiText.textContent = 0;
    bmiText.className = "";
    descText.textContent = "N/A";
    waterIntakeElement.textContent = "-";
}

function onFormSubmit(e){
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);

    if(isNaN(weight)||isNaN(height)||weight <=0 ||height <=  0){
        alert("Please enter a valid height and weight")
        return;
    }
    const heightInMeters = height/100;
    const bmi = weight/(heightInMeters**2);
    const desc = interpretBMI(bmi);
    const waterIntakeValue = calculateWaterIntake(bmi); 

    bmiText.textContent = bmi.toFixed(2);
    bmiText.className = desc;
    descText.innerHTML = `You are <strong>${desc}</strong>`;
    waterIntakeElement.textContent = `Drink ${waterIntakeValue} Liters per day to stay healthy `; 
}

function interpretBMI(bmi) {
    if(bmi < 18.5){
        return "underweight";
    }
    else if(bmi < 25){
        return "healthy";
    }
    else if(bmi < 30){
        return "overweight";
    }
    else {
        return "obese";
    }
}

function calculateWaterIntake(bmi) {
    if(bmi < 18.5){
        return 3;
    }
    else if(bmi < 25){
        return 2;
    }
    else if(bmi < 30){
        return 2.5;
    }
    else {
        return 3;
    }
}