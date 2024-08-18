jQuery(function () {
    $("#lang").select2();
});

const head_slider = new Swiper(".head-slider", {
    // Optional parameters
    direction: "horizontal",
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
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    //     hide: true,
    // },
});

const education_group_slider = new Swiper(".education-group-slider", {
    // Optional parameters
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    },
    direction: "horizontal",
    // effect:"cards",
    // cardsEffect: {
    //     rotate: 50,
    //     slideShadows: false,
    // },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const educational_calendar_slider = new Swiper(".educational-calendar-slider", {
    // Optional parameters
    spaceBetween: 0,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
    direction: "horizontal",
    loop: false,

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
        dragSize: "100%",
        hide: false,
    },
});

// change theme dark and light
const themeSwitcher = document.querySelectorAll(".mobile__theme-switcher");
themeSwitcher.forEach((button) => {
    button.onclick = () => {
        if (localStorage.theme === "dark") {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        }
    }
});

// open and close sidebar functionality
const mobile_sidebar = document.querySelector("#mobile__sidebar");
const mobile_sidebar_close_btn = document.querySelector(
    "#mobile__sidebar__close-btn"
);

mobile_sidebar_close_btn.onclick = function () {
    if (mobile_sidebar.classList.contains("hidden")) {
        mobile_sidebar.classList.remove("hidden");
    } else {
        mobile_sidebar.classList.add("hidden");
    }
};
