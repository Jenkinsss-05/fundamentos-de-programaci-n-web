var universitySelection = document.getElementById("universitySelection");
var loginForm = document.getElementById("loginForm");
var selectUniversityButton = document.getElementById("selectUniversityButton");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("loginButton");

selectUniversityButton.addEventListener("click", function() {
    var selectedUniversity = document.getElementById("university").value;

    if (selectedUniversity === "ucenfotec") {
        universitySelection.style.display = "none";
        loginForm.style.display = "block";
    } else {
        alert("Por favor, selecciona UCENFOTEC para iniciar sesión.");
    }
});

loginButton.addEventListener("click", function() {
    var username = usernameInput.value;
    var password = passwordInput.value;

    if (username === "cenfo" && password === "123") {
        window.location.href = "https://www.ucenfotec.ac.cr";
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
});
