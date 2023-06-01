import "./styles/main.scss";
import { Form } from "./js/form";
import { ScrollToTop } from "./js/scrollToTop";
import logo from "./assets/logo.png";
import facebook from "./assets/icon-fb.svg";
import instagram from "./assets/icon-insta.svg";
import youtube from "./assets/icon-yt.svg";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  //icons
  const logoImg = document.getElementById("logo");
  logoImg.src = logo;
  const fbIcon = document.getElementById("fb");
  fbIcon.src = facebook;
  const inIcon = document.getElementById("in");
  inIcon.src = instagram;
  const ytIcon = document.getElementById("yt");
  ytIcon.src = youtube;

  //form
  const form = document.querySelector("#contact-form");
  const fields = [
    "name",
    "phone",
    "email",
    "message",
    "acceptdata",
    "acceptpolicy",
  ];
  const validator = new Form(form, fields);

  //scroll to top button
  const scrollToTopBtn = document.querySelector("#scrollToTop");
  const top = new ScrollToTop(scrollToTopBtn);

  //tooltips

  if (window.innerWidth < 900) {
    const tooltips = Array.from(document.getElementsByClassName("tooltip"));

    tooltips.forEach((tooltip) => {
      tooltip.nextElementSibling.addEventListener("click", (e) => {
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = 1;
      });
    });

    tooltips.forEach((tooltip) => {
      document.addEventListener("click", (e) => {
        const isOutside = !e.target.closest(".checkbox-container");

        if (isOutside || e.target === tooltip) {
          tooltip.style.visibility = "hidden";
          tooltip.style.opacity = 0;
        }
      });
    });
  }
});
