document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (verificarCredenciales(username, password)) {
        window.location.href = "landing.html";
    } else {
        message.textContent = "Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
        message.style.color = "red";
    }
});

function verificarCredenciales(username, password) {
    return username === "cenfo" && password === "123";
}
