



 /* Toggle between adding and removing the "change" and "done" classes to the "hide" element when the user clicks on the hamburger*/
//  This allows the nav links to appear and disappear on the click


    // let hamburger = document.querySelector("#fa");
    // let hide = document.querySelectorAll(".hide");
    // let change = document.querySelectorAll(".change");
    
    //  hamburger.addEventListener("click", () => { 

    //     for(let num = 0; num < change.length; num++) {
    //         if (hide[num].classList.contains("change")) {
    //             hide[num].classList.remove("change");
    //             change[num].classList +=(" done");
    //         } else {
    //             hide[num].classList.remove("done");
    //             change[num].classList +=(" change");
    //         }
    //     }  
    // });
    
    
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
   2. HAMBURGER MENU TOGGLE
   ========================================= */

const hamburger = document.querySelector("#fa");
const hide = document.querySelectorAll(".hide");
const change = document.querySelectorAll(".change");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        for (let i = 0; i < change.length; i++) {
            if (hide[i].classList.contains("change")) {
                hide[i].classList.remove("change");
                change[i].classList.add("done");
            } else {
                hide[i].classList.remove("done");
                change[i].classList.add("change");
            }
        }
    });
}

       