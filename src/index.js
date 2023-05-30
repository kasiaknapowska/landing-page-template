import './styles/main.scss';
import { Form } from './js/form';
import { ScrollToTop } from './js/scrollToTop';
import logo from './assets/logo.png';
import facebook from './assets/icon-fb.svg';
import instagram from './assets/icon-insta.svg';
import youtube from './assets/icon-yt.svg';

const logoImg = document.getElementById('logo');
logoImg.src = logo;
const fbIcon = document.getElementById('fb');
fbIcon.src = facebook;
const inIcon = document.getElementById('in');
inIcon.src = instagram;
const ytIcon = document.getElementById('yt');
ytIcon.src = youtube;



const form = document.querySelector("#contact-form");

if (form) {
    const fields = ["name", "phone", "email", "message", "acceptdata", "acceptpolicy"];
    const validator = new Form(form, fields);
}

const scrollToTopBtn = document.querySelector("#scrollToTop");

if (scrollToTopBtn) {
    const top = new ScrollToTop(scrollToTopBtn);
}