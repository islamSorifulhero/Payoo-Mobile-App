//login button functionality
document.getElementById("loginButton").addEventListener('click', function(e){
    e.preventDefault()

    const mobileNumber = 12345678910;
    const pin = 1234;

    const mobileNumberValue = document.getElementById('mobile-number').value;

    const mobileNumberConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value;

    const pinNumberValueConverted = parseInt(pinNumberValue);

    if(mobileNumberConverted === mobileNumber && pinNumberValueConverted === pin){
        window.location.href = "./home.html"
    }
    else{
        alert("Invalid Credentials!")
    }
})