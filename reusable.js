const pin = 1234;

//functions to get input values
function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}

function getInputValue(id){
    const inputField = document.getElementById('id');
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}



//add money feature

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    const bank = getInputValue('bank');
    
    const accountNumber = getInputValue('account-number');

    const amount = getInputValueNumber('add-amount');

    const addPin = getInputValueNumber('add-pin');


    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(accountNumber.length < 11){
        alert('Your account number is wrong');
        return;
    }

    if (addPin !== pin){
        alert("Your pin is wrong")
        return;
    }

    const availableAndAddAmount = availableBalance + amount;

    document.getElementById('available-balance').innerText = availableAndAddAmount; 
});

// cashout money feature

document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();

    const withdrawAmount = getInputValueNumber('withdraw-amount')

    const agentNumber = getInputValue('agent-number');
    
    const pin = 1234
    const pinNumber = getInputValueNumber('pin-number');

    if(agentNumber.length < 11){
        alert('please enter your correct account number');
        return;
    }
    if(pinNumber !== pin){
        alert('your pin is incorrect');
        return;
    }

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    const totalWithdraw = availableBalance - withdrawAmount;

    document.getElementById('available-balance').innerText = totalWithdraw;
})

//toggling feature

document.getElementById('cash-out-button').addEventListener('click', function(e){
    document.getElementById('cash-out-parent').style.display= 'block';
    document.getElementById('add-money-parent').style.display= 'none';
})

document.getElementById('add-button').addEventListener('click', function(e){
    document.getElementById('cash-out-parent').style.display= 'none';
    document.getElementById('add-money-parent').style.display= 'block';
})