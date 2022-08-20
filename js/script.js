window.onload = function() {
  let activitiesSwiper = new Swiper('.activities__swiper', {
     loop: true,
     slidesPerView: 4,
     autoplay: {
       delay: 3000,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
      breakpoints: {
        0: { 
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
           slidesPerView: 2,
           spaceBetween: 20,
        },
        767: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1440: {
         slidesPerView: 4,
         spaceBetween: 25,
        },
      },
  });
  
  let exploreSwiper = new Swiper('.explore__swiper', {
     loop: true,
     autoplay: {
       delay: 3000,
     },
     pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
     },
  });
  
  // Menu burger
  let html = document.querySelector('html');
  let menuBurger = document.querySelector(".header__burger");
  let headerMenu = document.querySelector(".header__menu");
  menuBurger.addEventListener("click", function(){
     menuBurger.classList.toggle("active");
     headerMenu.classList.toggle("active");
     html.classList.toggle("lock");
  });
};