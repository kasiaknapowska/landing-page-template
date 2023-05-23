import './styles/main.scss'
import { Form } from './js/form'
import logo from './assets/logo.png'

const logoImg = document.getElementById('logo');
logoImg.src = logo;


const form = document.querySelector("form");

if (form) {
    const fields = ["name", "phone", "email", "message", "acceptdata", "acceptpolicy"];
    const validator = new Form(form, fields)
}