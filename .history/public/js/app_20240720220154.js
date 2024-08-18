jQuery(function () {
    $("#lang").select2();
});

// Get the switchTheme
const switchTheme = document.querySelector(".theme-controller");

// Listen for changes and save the state
switchTheme.addEventListener("change", function () {
    if (localStorage.theme === "dark") {
        document.documentElement.classList.remove("dark");
        document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        document.getElementsByTagName("html")[0].setAttribute("data-theme", "light")
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

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  };
  
  function setDarkTheme() {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  };
  
  function setLightTheme() {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  };
  
  function onThemeSwitcherItemClick(event) {
    const theme = event.target.dataset.theme;
  
    if (theme === "system") {
      localStorage.removeItem("theme");
      setSystemTheme();
    } else if (theme === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };
  
  const themeSwitcherItems = document.querySelectorAll("#theme-switcher");
  themeSwitcherItems.forEach((item) => {
    item.addEventListener("click", onThemeSwitcherItemClick);
  });