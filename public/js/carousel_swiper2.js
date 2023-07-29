var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 10,
    /* pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, */
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      }
    },
  });