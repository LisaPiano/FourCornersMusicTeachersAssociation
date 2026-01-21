



    
  /* =========================================
   1. HEADER OVERLAY FADE-IN
   ========================================= */
window.addEventListener("load", function () {
    const header = document.querySelector("header");
    if (header) {
        header.classList.add("loaded");
    }
});


  /* =========================================
   2. 
   ========================================= */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
});


       