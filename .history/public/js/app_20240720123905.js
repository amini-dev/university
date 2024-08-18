jQuery(function () {
    $("#lang").select2();
});

// Get the checkbox
const checkbox = document.querySelector(".theme-controller");

// Listen for changes and save the state
checkbox.addEventListener("change", () => {
    if(localStorage)
    localStorage.setItem("theme", "dark");
});

// To load the state from local storage

if (localStorage.theme === "dark") {
    checkbox.checked = "light";
} else {
    checkbox.checked = "dark";
}

// Load the state when the page loads
// window.addEventListener("load", loadFromLocalStorage);

// const savedState = localStorage.getItem("theme");
// if (savedState === "true") {
//     checkbox.checked = true;
// } else {
//     checkbox.checked = false;
// }
if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark")
} else {
    document.documentElement.classList.remove("dark")
}
// // import swiper js
// import Swiper from "swiper";
// // import swiper styles
// import "swiper/css";

const swiper = new Swiper(".head-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    effect: "fade",

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});
