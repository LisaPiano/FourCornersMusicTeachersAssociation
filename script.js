



 /* Toggle between adding and removing the "change" and "done" classes to the "hide" element when the user clicks on the hamburger*/
//  This allows the nav links to appear and disappear on the click


    let hamburger = document.querySelector("#fa");
    let hide = document.querySelectorAll(".hide");
    let change = document.querySelectorAll(".change");
    
     hamburger.addEventListener("click", () => { 

        for(let num = 0; num < change.length; num++){
            if (hide[num].classList.contains("change")){
                hide[num].classList.remove("change");
                change[num].classList +=(" done");
            } else {
                hide[num].classList.remove("done");
                change[num].classList +=(" change");
            }
        }  
    });
    
  
       