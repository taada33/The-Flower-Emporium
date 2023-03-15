const socket = io.connect('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('message', (message) => {
  const chat = document.getElementById('chat');
  const p = document.createElement('p');
  p.innerText = message;
  chat.appendChild(p);
});

const form = document.createElement('form');
const input = document.createElement('input');
input.setAttribute('autocomplete', 'off');
input.setAttribute('placeholder', 'Type your message');
const button = document.createElement('button');
button.innerText = 'Send';

form.appendChild(input);
form.appendChild(button);

document.getElementById('chat').appendChild(form);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = input.value.trim();
  if (message) {
    socket.emit('message', message);
    input.value = '';
  }
});