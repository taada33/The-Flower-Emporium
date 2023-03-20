
const register = async () => {
    event.preventDefault();
    const username = document.querySelector('#reg-name').value.trim();
    const email = document.querySelector('#reg-email').value.trim();
    const password = document.querySelector('#reg-password').value.trim();

    if(email && password && username){
        const response = await fetch('api/users/', {
            method: 'POST',
            body: JSON.stringify({ username: username, email: email, password: password}),
            headers: {'Content-Type': 'application/json'},
        })
        document.location.pathname = '/';
    }else{
        alert("Missing registration form input(s)")
    }
}

const registerBtn = document.querySelector('#register-btn')
registerBtn.addEventListener('click', register);