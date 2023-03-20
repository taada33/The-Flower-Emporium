//logo link to home
const homeLink = document.querySelector('.logo');

homeLink.addEventListener('click', () => {
    document.location.assign('/')
})

//categories menu dropdown
const flowersBtn = document.querySelector('#flowers');
const plantsBtn = document.querySelector('#plants');
const plantersBtn = document.querySelector('#planters');
const homeDecorBtn = document.querySelector('#homeDecor');


flowersBtn.addEventListener('click', () => {
    document.location.pathname = 'category/1'
})

plantsBtn.addEventListener('click', () => {
    document.location.pathname = 'category/2'
})

plantersBtn.addEventListener('click', () => {
    document.location.pathname = 'category/3'
})

homeDecorBtn.addEventListener('click', () => {
    document.location.pathname = 'category/4'
})

//cart
    
const cartBtn = document.querySelector('#cart');
    
cartBtn.addEventListener('click', () => {
    document.location.assign('/cart')
})
    
//about
    
const aboutBtn = document.querySelector('#about');

aboutBtn.addEventListener('click', () => {
    document.location.assign('/about')
})


//user login / logout
const loginBtn = document.querySelector('#login');
const logoutBtn = document.querySelector('#logout')

if(loginBtn !== null){
    loginBtn.addEventListener('click', () => {
        document.location.assign('/login')
    })
}

if(logoutBtn !== null){
    logoutBtn.addEventListener('click', async () => {
        const response = await fetch('api/users/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        })
        if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to log out');
          }
    })
}




