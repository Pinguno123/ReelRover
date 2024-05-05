var swiper = new Swiper(".Slider1", {
    slidesPerView: 4,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    loop: true,
        fade: true,
    spaceBetween: 10,
    grabCursor: false,
    allowTouchMove: false,
    keyboard: {
        enabled: false,
    },
    breakpoints: {
        // 769: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        // },
    },
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
});