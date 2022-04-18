const Field = document.getElementById('Field');
const Button = document.getElementById('submit-btn');
let WonMsg = document.getElementById('won-msg');
let showAttempt = document.getElementById('Attempt');
let ErrorField = document.getElementById('error');
const ResetButton = document.getElementById('reset');
let RandomValue = document.getElementById('random-value-holder');

let Attempts = 5;


Button.addEventListener('click', function(){
    let FieldValue = Field.value;
    const RandomNum = Math.floor(Math.random() * 10) + 1;
    RandomValue.textContent = `Value is : ${RandomNum}`;
    if(FieldValue === ''){
        ErrorField.textContent = 'Enter The Number! :)';
    }

   else if(parseInt(FieldValue) === RandomNum) {
        WonMsg.textContent = 'You Guessed a Correct Number! :)';
        showAttempt.textContent = '';
        Field.value = '';
        setTimeout(() => {
            location.reload();
        },2000);
    }
    
    else if(parseInt(FieldValue) > 10){
        ErrorField.textContent = 'Number Should be under 10!';
    }
    else if(Attempts === 0){
        showAttempt.textContent = 'Reset And Try Again';
    }
    else {
        showAttempt.textContent = `Couldn't Match!.Attempts remaining ${Attempts--} only!`;
    }
});

ResetButton.addEventListener('click', function() {
    Field.value = '';
    showAttempt.textContent = location.reload();
});