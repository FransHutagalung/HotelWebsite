document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("header");
  var prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-50px"; // Adjust this value to match the height of your navbar
    }

    prevScrollPos = currentScrollPos;
  };
});

// $(document).ready(function(){
//   $(".counter").counterUp({
//     delay :10 ,
//     time :1200 
//   });
// });


var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,    
  },
  navigation: {
    nextEl: '.kanan-btn',
    prevEl: '.kiri-btn',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});