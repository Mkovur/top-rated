const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
 
  loop: true,
   grabCursor:true,
   spaceBetween:30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints: {
    0: {
        slidesPerView: 3
    },
    768: {
        slidesPerView: 3
    }, 
    980: {
        slidesPerView: 4
    }, 
  }
  
 
 
 
});
