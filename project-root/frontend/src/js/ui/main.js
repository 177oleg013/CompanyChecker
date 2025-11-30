const themeChangerButton = document.getElementById("themeChangerButton");
const howToUseBtn = document.getElementById("howToUseButton");
const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModal");
const modalWindow = document.getElementById("modalWindow");
let isLightTheme = 1;

themeChangerButton.addEventListener("click", (e)=> {
    e.preventDefault();
    const ourBtn = e.currentTarget;

    if (isLightTheme == 1) {
        ourBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        isLightTheme = 0;
    }
    else {
        ourBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        isLightTheme = 1;
    }
});

// Відкрити
howToUseBtn.addEventListener("click", () => {
    modalBackdrop.style.display = "flex";
});

// Закрити по кнопці ×
closeModalBtn.addEventListener("click", () => {
    modalBackdrop.style.display = "none";
});

modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
        modalBackdrop.style.display = "none";
    }
});