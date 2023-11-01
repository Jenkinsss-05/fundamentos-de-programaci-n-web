document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        if (username === 'cenfo' && password === '123') {
            // link de cenfotec
            window.location.href = 'https://www.ucenfotec.ac.cr';
        } else {
            errorMessage.classList.remove('hidden');
        }
    });
});
