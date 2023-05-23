import './styles/main.scss';
import { Form } from './js/form';
import logo from './assets/logo.png';
import facebook from './assets/icon-fb.svg';
import instagram from './assets/icon-insta.svg';

const logoImg = document.getElementById('logo');
logoImg.src = logo;
const fbIcon = document.getElementById('fb');
fbIcon.src = facebook;
const inIcon = document.getElementById('in');
inIcon.src = instagram;




const form = document.querySelector("form");

if (form) {
    const fields = ["name", "phone", "email", "message", "acceptdata", "acceptpolicy"];
    const validator = new Form(form, fields);
}