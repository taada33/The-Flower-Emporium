const register = async () => {
    event.preventDefault();
    const username = document.querySelector('#reg-name').value.trim();
    const email = document.querySelector('#reg-email').value.trim();
    const password = document.querySelector('#reg-password').value.trim();

    
    
    const response = await fetch('api/users/', {
        method: 'POST',
        body: JSON.stringify({ username: username, email: email, password: password}),
        headers: {'Content-Type': 'application/json'},
    })
    document.location.pathname = '/';
}

const login = async () => {
    event.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    const response = await fetch('api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email: email, password: password}),
        headers: {'Content-Type': 'application/json'},
    })
    document.location.pathname = '/';
}

const registerBtn = document.querySelector('#register-btn')
registerBtn.addEventListener('click', register);

const loginFormBtn = document.querySelector('#login-btn');
loginFormBtn.addEventListener('click', login);