console.log("Navbar Script Running...");

let navbar = document.querySelector('header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};
console.log("Navbar Script Running End...");
