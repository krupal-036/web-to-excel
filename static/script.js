document.getElementById('email').addEventListener('input', function () {
    this.value = this.value.toLowerCase();
});


function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}


window.onload = function () {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
};


function validateForm() {
    var fullName = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var altMobile = document.getElementById("altMobile").value;
    var address = document.getElementById("address").value;
    var birthdate = document.getElementById("birthdate").value;

    if (fullName === "" || age === "" || email === "" || mobile === "" || address === "") {
        alert("Please fill all required fields");
        return false;
    }

    if (age > 100) {
        alert("Age cannot be greater than 100");
        return false;
    }

    if (mobile.length !== 10) {
        alert("Mobile number must be exactly 10 digits");
        return false;
    }

    if (altMobile.length !== 10 && altMobile !== "") {
        alert("Alternate mobile number must be exactly 10 digits");
        return false;
    }

    if (!birthdate) {
        alert("Please enter your birthdate");
        return false;
    }

    alert("Successful entry");
    return true;
}


function copyMobile() {
    var mobile = document.getElementById("mobile").value;
    var altMobile = document.getElementById("altMobile");

    if (document.getElementById("sameAsMobile").checked) {
        altMobile.value = mobile;
        altMobile.setAttribute("readonly", "true");
    } else {
        altMobile.value = "";
        altMobile.removeAttribute("readonly");
    }
}