import './styles/main.scss'
import add from './func'
import logo from './assets/logo.png'

console.log(add(2, 4))

const logoImg = document.getElementById('logo');
logoImg.src = logo;