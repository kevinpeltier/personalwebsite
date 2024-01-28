let homeIcon = document.getElementById("home-btn");
let aboutIcon = document.getElementById("about-btn");
let portfolioIcon = document.getElementById("portfolio-btn");
let contactIcon = document.getElementById("contact-btn");








homeIcon.addEventListener('click', (onclick) => {
    document.getElementById("home-page").style.display = "flex";
    document.getElementById('about-me-section').style.display = 'none';
    document.getElementById('portfolio-show-section').style.display = 'none';
    document.getElementById('contact-me-section').style.display = 'none';
})

aboutIcon.addEventListener('click', (onclick) => {
    document.getElementById("home-page").style.display = "none";
    document.getElementById('about-me-section').style.display = 'flex';
    document.getElementById('portfolio-show-section').style.display = 'none';
    document.getElementById('contact-me-section').style.display = 'none';
})

portfolioIcon.addEventListener('click', (onclick) => {
    document.getElementById("home-page").style.display = "none";
    document.getElementById('about-me-section').style.display = 'none';
    document.getElementById('portfolio-show-section').style.display = 'flex';
    document.getElementById('contact-me-section').style.display = 'none';
})

contactIcon.addEventListener('click', (onclick) => {
    document.getElementById("home-page").style.display = "none";
    document.getElementById('about-me-section').style.display = 'none';
    document.getElementById('portfolio-show-section').style.display = 'none';
    document.getElementById('contact-me-section').style.display = 'flex';
})







