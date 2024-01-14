const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "bx bx-x" : "bx bx-menu"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove('open'); // Fix: use 'open' as a string
    menuBtnIcon.setAttribute("class", "bx bx-menu");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_content .header_btn", {
    ...scrollRevealOption,
    delay: 1000,
});

//about container
ScrollReveal().reveal(".about_content.section_header",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".about_content .section_description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about_content .about_btn", {
    ...scrollRevealOption,
    delay: 1000,
});

//skills container

ScrollReveal().reveal(".skills_card", {
    ...scrollRevealOption,
    interval:500,
});

//portfolio container

ScrollReveal().reveal(".portfolio_card", {
    ...scrollRevealOption,
    duration:1000,
    interval:500,
});
