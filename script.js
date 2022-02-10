let navBar = document.getElementById("navigationBar");
let containerNav = document.getElementById("containerForNav");
let line1 = document.getElementById("line-1");
let line2 = document.getElementById("line-2");
let line3 = document.getElementById("line-3");
let lines = document.getElementsByClassName("lines");
let hamburger = document.getElementById("hamburger");
let headerLogo = document.getElementById("headerLogo");
let mainContainer = document.getElementById("container");

function BurgerOn() {
    line1.style.backgroundColor = "whitesmoke";
    line1.style.transform = "translate(0, 9px) rotate(45deg)";
    line1.style.transition = "0.3s ease-in-out";
    line1.style.width = "30px";    
    
    line2.style.width = "0";
    line2.style.backgroundColor = "whitesmoke";
    line2.style.transition = "0.3s ease-in-out";
    
    line3.style.transform = "translate(0, -9px) rotate(-45deg)"
    line3.style.transition = "0.3s ease-in-out";
    line3.style.backgroundColor = "whitesmoke";
    line3.style.width = "30px";    
}
function BurgerOff() {
    line1.style.transform = "translate(0) rotate(0deg)";
    line1.style.backgroundColor = "#c83200";
    line1.style.width = "28px";    
    
    line2.style.width = "28px";
    line2.style.backgroundColor = "#c83200";
    
    line3.style.transform = "translate(0) rotate(0deg)"
    line3.style.backgroundColor = "#c83200";
    line3.style.width = "28px";    
}

let onClick = false;
hamburger.addEventListener("click", ()=>{
    if (!onClick) {
        navBar.style.height = "100vh";
        navBar.style.transition = "0.3s ease-in-out";

        containerNav.style.display = "flex";

        // mainContainer.style.display = "none";
        mainContainer.style.height = "0";
        
        BurgerOn();
        onClick = true;
    }
    else{
        navBar.style.height = "0";
        
        containerNav.style.display = "none";
        
        // mainContainer.style.display = "block";
        mainContainer.style.height = "100%";
        
        BurgerOff();
        onClick = false;
    }
})

