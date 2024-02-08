// ------HAMBURGER MENU--------

// tvorba premenných
const menuIcon = document.querySelector(`.menu-icon`)

const menuList = document.querySelector("nav")

const hamburgerIcon = document.querySelector(".fa-solid")

// prepínanie classov z hamburger menu na krížik a naopak
menuIcon.addEventListener(`click`, () => {
    if (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.toggle("fa-xmark")
        hamburgerIcon.classList.remove("fa-bars")
        menuList.style.display = "block";
    } else {
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-xmark");
        menuList.style.display = "none"
    }
})




// ----------DARK vs LIGHT MODE ------------

//vyskakovacie okno - dark/light mode?
// const mode = prompt("Dark / Light mode?");

//vytiahnutie elementov z html
// const body = document.querySelector("body");
// const aboutUs = document.querySelector("#about-us");
// const ourWork = document.querySelector("#our-work");
// const ourWorkTable = document.querySelector("#our-work table");
// const footer = document.querySelector("#footer");
// const contacts = document.querySelector("#contacts");

//IF ELSE
// if (mode === "dark" || mode === "dark mode") {
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//     aboutUs.style.color = "white";
//     ourWork.style.color = "white";
//     ourWorkTable.style.color = "black";
//     footer.style.backgroundColor = "grey";
//     contacts.style.border = "1px solid white";
// } else if (mode === "light" || mode === "light mode") {
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
// } else {
//     prompt("Zadajte prosím znova, či chcete tmavý alebo svetlý režim webu zadaním buď `dark` alebo `light`");
// }


// -------- SCROLL UP BUTTON -----------

//vytiahnutie elementov z html
const myBtn = document.querySelector("#myBtn")

// funkcia - po odscrollovaní 1200px zhora webu sa užívateľovi zobrazí button
window.addEventListener(`scroll`, () => {
    if (window.scrollY >= 1200) {
         myBtn.style.display = "block";
    } else {
         myBtn.style.display = "none";
    }
 })

// funkcia - keď užívateľ klikne na button, automaticky ho scrollne na vrch webu
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

