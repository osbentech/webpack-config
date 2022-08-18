import './styles/main.css';

import joke from './joke.js';

const jokes = document.querySelector('.joke');
jokes.innerHTML = joke();
