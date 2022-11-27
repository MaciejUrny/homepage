console.log("Witam na mojej stronie.");
console.log("Mam nadzieję, że o niczym nie zapomniałem.");
console.log("Dziękuję za sprawdzenie pracy.");
let button = document.querySelector(".js-button");
let photo = document.querySelector(".js-image");

button.addEventListener("click", () => {
    photo.classList.toggle("hidden");
    button.innerText = photo.classList.contains("hidden") ?
        "Pokaż zdjęcie." : "Ukryj zdjęcie.";
});

let tableButton = document.querySelector(".js-tableButton");
let tHeader = document.querySelectorAll("th");

tableButton.addEventListener("click", () => {
    for (let i = 0; i < tHeader.length; i++) {
        tHeader[i].classList.toggle("table__cell--headerHighlighted");
    }
});

let data = new Date();
let day = data.getDay();

switch (day) {
    case (0): console.log("Jest niedziela. Koniec weekendu :[");
        break;
    case (1): console.log("Jest poniedziałek. Weź się do pracy :P");
        break;
    case (2): console.log("Jest wtorek. Trzymaj się.");
        break;
    case (3): console.log("Jest środa. Czuć zapach weekendu.");
        break;
    case (4): console.log("Jest czwartek. Zbliża się weekend");
        break;
    case (5): console.log("Jest piątek. Weekendu początek.");
        break;
    default: console.log("Jest sobota. Baw się puki możesz.");
};
