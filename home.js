const pin = 1234;

//add money feature

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById('account-number').value

    const amount = parseInt(document.getElementById('add-amount').value)

    const addPin = parseInt(document.getElementById('add-pin').value);

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

    const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);

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