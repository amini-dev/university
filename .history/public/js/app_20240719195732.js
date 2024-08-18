jQuery(function () {
    $("#lang").select2();
});

// Get the checkbox
const checkbox = document.querySelector(".theme-controller");

// Function to save to local storage
function saveToLocalStorage() {
    localStorage.setItem("checkboxState", checkbox.checked);
}

// Listen for changes and save the state
checkbox.addEventListener("change", saveToLocalStorage);

// To load the state from local storage
function loadFromLocalStorage() {
    const savedState = localStorage.getItem("checkboxState");
    if (savedState === "true") {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
}
// Load the state when the page loads
window.addEventListener("load", loadFromLocalStorage);

const savedState = localStorage.getItem("checkboxState");
if (savedState === "true") {
    checkbox.checked = true;
} else {
    checkbox.checked = false;
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
    },
});
