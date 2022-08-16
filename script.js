const password = document.getElementById("pw");
const confirmPassword = document.getElementById("pw2");
const pwErrorMessage = document.getElementById("pw-error-message");
const pwCheck1 = document.getElementById("pw-check1");
const pwCheck2 = document.getElementById("pw-check2");

function displayError () {
    pwErrorMessage.textContent = "*Passwords do not match";
    pwErrorMessage.style.color = "red";         
    pwCheck2.innerHTML = "<img src=crossred.png height=20px width=20px>";
    pwCheck1.innerHTML = "<img src=crossred.png height=20px width=20px>";
    password.style.border = "2px solid red";
    confirmPassword.style.border = "2px solid red";
}

function displayValid () {
    pwErrorMessage.textContent = "*Passwords match";
    pwErrorMessage.style.color = "green";
    pwCheck1.innerHTML = "<img src=greencheckicon.png height=20px width=20px>";
    pwCheck2.innerHTML = "<img src=greencheckicon.png height=20px width=20px>";
    password.style.border = "";
    confirmPassword.style.border = "";
}

// activate validation message only when confirm password input has been filled
function passwordCheck () {
    if (confirmPassword.value) {
        if (password.value !== confirmPassword.value) {
            displayError();
        } else if 
        (password.value === confirmPassword.value) {
            displayValid();
        };
    }
}

confirmPassword.addEventListener('keyup', passwordCheck);
password.addEventListener('keyup', passwordCheck);
