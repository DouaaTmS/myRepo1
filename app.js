const NavList = document.querySelector(".nav-list");
const openNav = document.querySelector(".open-icon");
const closeNav = document.querySelector(".close-icon");

openNav.addEventListener("click",()=>{
    NavList.classList.toggle("showNav");
})

closeNav.addEventListener("click",()=>{
    NavList.classList.toggle("showNav");
})

/*----------- Questions ----------*/

const questions = document.querySelectorAll(".question-item");

questions.forEach(item=> {
    item.addEventListener("click",()=>{
        item.classList.toggle("show-question");
    })
})

/*----------- scroll to the top -----------*/

const scrollUp = document.querySelector(".scroll-up");

window.onscroll = () =>{
    console.log(window.pageYOffset);
    if(window.pageYOffset > 1580) {
        scrollUp.classList.add("show");
    }
    else {
        scrollUp.classList.remove("show");
    }
}

scrollUp.addEventListener("click",()=>{
    window.scroll(0, 0);
})

/*---------- dark theme ----------*/

const darkTheme = document.querySelector(".ri-moon-line");

darkTheme.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("html").classList.toggle("dark");
})

/*------- scroll Reveal --------*/

const sr = ScrollReveal({
    origin: "top",
    distance:"60px",
    duration: 1500,
    reset: true
})

sr.reveal(".section-data, .footer-container");
sr.reveal(".home-image", {delay:500});
sr.reveal(".home-sideTitle", {origin: "right"})
sr.reveal(".about-data, .contact-info", {origin:"left"})
sr.reveal(".about-image, form", {origin: "right"})
sr.reveal(".service", {
    interval: 100
})

sr.reveal(".product-item", {
    interval: 200
})

sr.reveal(".question-item", {
    interval: 150
})