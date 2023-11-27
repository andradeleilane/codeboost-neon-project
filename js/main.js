var swiper = new Swiper(".js-slide-review", {
    slidesPerView: 3,
    spaceBetween: 32,
    pagination: {
      el: ".s-review .top .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 16,
      },
      600: {
        slidesPerView: 2.3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
      }
    }
});

AOS.init({
  duration: 1000,
  once: true
});