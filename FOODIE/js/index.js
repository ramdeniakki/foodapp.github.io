let memu = document.querySelector("#menu-icon");
let navabar = document.querySelector(".navbar");

menu.addEventListener("click", function(){
    navabar.classList.toggle("active");
});

window.onscroll =() =>{
    navabar.classList.remove("active");
}