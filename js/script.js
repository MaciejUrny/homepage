{
    const welcome = () => {
        console.log("Witam na mojej stronie.");
        console.log("Mam nadzieję, że o niczym nie zapomniałem.");
        console.log("Dziękuję za sprawdzenie pracy.");
    };

    const onHiddenPhoto = () => {
        const button = document.querySelector(".js-button");
        const photo = document.querySelector(".js-image");

        photo.classList.toggle("hidden");
        button.innerText = photo.classList.contains("hidden") ?
            "Pokaż zdjęcie." : "Ukryj zdjęcie.";
    };

    const onChangeTableBackground = () => {
        const tHeader = document.querySelectorAll("th");

        for (let i = 0; i < tHeader.length; i++) {
            tHeader[i].classList.toggle("table__cell--headerHighlighted");
        }
    };

    const message = () => {
        const data = new Date();
        const day = data.getDay();

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
    };

    const init = () => {
        const hiddenPhotoButton = document.querySelector(".js-hiddenPhotoButton");
        const tableButton = document.querySelector(".js-tableButton");

        hiddenPhotoButton.addEventListener("click", onHiddenPhoto);
        tableButton.addEventListener("click", onChangeTableBackground);

        welcome();
        message();
    };

    init();
};