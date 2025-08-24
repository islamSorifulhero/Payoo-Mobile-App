const pin = 1234;

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    const bankSelect = document.getElementById('bank').value;

    const accountNumber = document.getElementById('account-number').value

    const addAmount = parseInt(document.getElementById('add-amount').value)

    const addPin = parseInt(document.getElementById('add-pin').value);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(accountNumber < 11){
        alert('Your account number is wrong');
        return;
    }

    if (pin !== addPin){
        alert("Your pin is wrong")
        return;
    }

    const availableAndAddAmount = availableBalance + addAmount;

    document.getElementById('available-balance').innerText = availableAndAddAmount;

    
})