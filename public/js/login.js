const login = async () => {
    event.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(email && password){
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password}),
            headers: {'Content-Type': 'application/json'},
        })
        setTimeout(document.location.pathname = '/', 1500);
    }else{
        alert('Missing Login form input(s)')
    }
    
}


const loginFormBtn = document.querySelector('#login-btn');
loginFormBtn.addEventListener('click', login);


const registerBtn = document.querySelector('#signup-btn');

registerBtn.addEventListener('click', () => {
    document.location.assign('/register')
})