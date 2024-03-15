var form = document.getElementById("form");
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");
var confirmPasswordInput = document.getElementById("confirm-password-input");
var errorMessage = document.getElementById("error-alert");
var successMessage = document.getElementById("success-alert");
var dateInput = document.getElementById("date-input");
var firstName = document.getElementById("firstname-input");
var lastName = document.getElementById("lastname-input");


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {

    if (password.length < 8) {
        return false;
    }

    const formatRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return formatRegex.test(password);
}

function createUserAccount(event) {
    event.preventDefault();
    var userFirstName = firstName.value;
    var userLastName = lastName.value;
    var email = emailInput.value;
    var password = passwordInput.value;
    var confirmedPassword = confirmPasswordInput.value;
    var date = dateInput.value;


    if (!userFirstName || !userLastName || !email || !password || !confirmedPassword || !date) {
        errorMessage.classList.remove("d-none");
        return (errorMessage.textContent = "All input fields are required")
    }

    if (!validateEmail(email)) {
        errorMessage.classList.remove("d-none");
        return (errorMessage.textContent = "Invalid email format.")
    }

    if (!validatePassword(password)) {
        errorMessage.classList.remove("d-none");
        return (errorMessage.textContent = "Password must contain at least one lowercase letter, one uppercase letter, and one digit.")
    }

    if (password !== confirmedPassword) {
        errorMessage.classList.remove("d-none");
        return (errorMessage.textContent = "Your Password and Confirm Password do not match.")
    }


    successMessage.classList.remove("d-none");
    return (successMessage.textContent = "Congratulations you are done filling your form!")


}

function clearErrorMessage() {
    errorMessage.classList.add("d-none");
}
emailInput.addEventListener("keypress", clearErrorMessage);
passwordInput.addEventListener("keypress", clearErrorMessage);
confirmPasswordInput.addEventListener("keypress", clearErrorMessage);



form.addEventListener('submit', createUserAccount);






