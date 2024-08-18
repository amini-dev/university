jQuery(function () {
    $("#lang").select2();
});

// Get the switchTheme
const switchTheme = document.querySelector(".theme-controller");

// Listen for changes and save the state
switchTheme.addEventListener("change", function () {
    if (localStorage.theme === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
    }
});

// To load the state from local storage

// if (localStorage.theme === "dark") {
//     switchTheme.checked = true;
//     document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
// } else {
//     switchTheme.checked = false;
//     document.getElementsByTagName("html")[0].setAttribute("data-theme", "light")
// }

// Load the state when the page loads
// window.addEventListener("load", loadFromLocalStorage);

// const savedState = localStorage.getItem("theme");
// if (savedState === "true") {
//     switchTheme.checked = true;
// } else {
//     switchTheme.checked = false;
// }


const head_slider = new Swiper(".head-slider", {
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

const education_group_slider = new Swiper(".education-group-slider",{
    // Optional parameters
    slidesPerView:4,
    loop:true,
    direction: "horizontal",
    loop: true,
    effect: "fade",

    // If we need pagination
    pagination: {
        el: ".educ-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".educ-button-next",
        prevEl: ".educ-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: ".educ-scrollbar",
    //     hide: true,
    // },
})