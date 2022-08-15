const password = document.getElementById("pw");
const confirmPassword = document.getElementById("pw2");
const pwErrorMessage = document.getElementById("pw-error-message");
const pwCheck1 = document.getElementById("pw-check1");
const pwCheck2 = document.getElementById("pw-check2");


// activate validation message only when confirm password input has been filled
function passwordCheck () {
    if (confirmPassword.value) {
        if (password.value !== confirmPassword.value) {
            pwErrorMessage.textContent = "*Passwords do not match";
            pwErrorMessage.style.color = "red";         
            pwCheck2.innerHTML = "<img src=crossred.png height=20px width=20px>";
            pwCheck1.innerHTML = "<img src=crossred.png height=20px width=20px>";
        } else if 
        (password.value === confirmPassword.value) {
            pwErrorMessage.textContent = "*Passwords match";
            pwErrorMessage.style.color = "green";
            pwCheck1.innerHTML = "<img src=greencheckicon.png height=20px width=20px>";
            pwCheck2.innerHTML = "<img src=greencheckicon.png height=20px width=20px>";
        };
    }
}

confirmPassword.addEventListener('keyup', passwordCheck);
password.addEventListener('keyup', passwordCheck);
