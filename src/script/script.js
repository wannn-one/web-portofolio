//Link for github

document.getElementById("github").addEventListener("click", function(){
    location.href = 'https://github.com/wannn-one';
});

//projects link

document.getElementById("projectButton").addEventListener("click", function(){
    location.href = `./index.html#projects`;
});

//insta link

document.getElementById("insta").addEventListener("click", function(){
    location.href = `https://www.instagram.com/ikhwanulabiyu/`;
});

//Navbar

const navBar = document.querySelector("nav"),
        menuBtns = document.querySelectorAll(".menu-icon"),
        overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
});