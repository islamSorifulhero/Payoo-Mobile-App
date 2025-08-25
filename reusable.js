const pin = 1234;
const transactionData = []

//functions to get input values
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}

function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

//funtion to get innertext
function getInnerText(id) {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}

//function to set innerText
function setInnerText(value) {
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value;
}

//function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName('form')
    for (const form of forms) {
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}

//function to toggle buttons
function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName('form-btn')

    for (const btn of formBtns) {
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }

    document.getElementById(id).classList.remove('border-gray-300')
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
}



//add money feature

document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const bank = getInputValue('bank');

    const accountNumber = getInputValue('account-number');

    const amount = getInputValueNumber('add-amount');

    const addPin = getInputValueNumber('add-pin');


    const availableBalance = getInnerText('available-balance');

    if (accountNumber.length < 11) {
        alert('Your account number is wrong');
        return;
    }

    if (addPin !== pin) {
        alert("Your pin is wrong")
        return;
    }

    const availableAndAddAmount = availableBalance + amount;

    setInnerText(availableAndAddAmount);

    const data = {
        name: 'Add Money',
        data: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
    console.log(transactionData);

});

// cashout money feature

document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const withdrawAmount = getInputValueNumber('withdraw-amount')

    const agentNumber = getInputValue('agent-number');

    const pin = 1234
    const pinNumber = getInputValueNumber('pin-number');

    if (withdrawAmount <= 0 || withdrawAmount > availableBalance) {
        alert('invalid amount');
        return;
    }

    if (agentNumber.length < 11) {
        alert('please enter your correct account number');
        return;
    }
    if (pinNumber !== pin) {
        alert('your pin is incorrect');
        return;
    }

    const availableBalance = getInnerText('available-balance');

    const totalWithdraw = availableBalance - withdrawAmount;

    setInnerText(totalWithdraw);

    const data = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString();
    }

    transactionData.push(data)
    console.log(transactionData);
})


//transaction

document.getElementById("transactions-button").addEventListener("click", function () {
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText = ""

    for (const data of transactionData) {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
              <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                  </div>
                  <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                  </div>
              </div>
      
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `
        transactionContainer.appendChild(div)
    }
})

//toggling feature

document.getElementById('add-button').addEventListener('click', function (e) {
    handleToggle('add-money-parent')

    handleButtonToggle('add-button')
})

document.getElementById('cash-out-button').addEventListener('click', function (e) {
    handleToggle('cash-out-parent')

    handleButtonToggle('cash-out-button')
})

document.getElementById("transfer-button").addEventListener("click",function(){

    handleToggle("transfer-money-parent")
    handleButtonToggle("transfer-button")
})
document.getElementById("bonus-button").addEventListener("click",function(){
    handleToggle("get-bonus-parent")
    handleButtonToggle("bonus-button")
})
document.getElementById("bill-button").addEventListener("click",function(){
    handleToggle("pay-bill-parent")
    handleButtonToggle("bill-button")
})
document.getElementById("transactions-button").addEventListener("click",function(){
    handleToggle("transactions-parent")
    handleButtonToggle("transactions-button")
})