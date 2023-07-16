var swiper = new Swiper(".swiper", {
  initialSlide: 1,
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
  },
});
