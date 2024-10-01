function fn() {
    var passwordInput = document.querySelector('.password');
    var passwordButton = document.querySelector('button');


    if (passwordInput.type === 'password') {
        passwordButton.textContent = 'Hide Password';
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
        passwordButton.textContent = 'Show Password';
    }
}