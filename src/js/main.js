function openMenu(){
    document.getElementById("mobileNav").classList.toggle("active");
}

var mySwiper = new Swiper('.swiper-container', {
loop :true,
slidesPerView: 2,
spaceBetween: 10,
variableWidth : true,
breakpoints: {
640: {
    slidesPerView: 2,
    spaceBetween: 12,
},
768: {
    slidesPerView: 3,
    spaceBetween: 15,
},
1024: {
    slidesPerView: 4,
    spaceBetween: 20,
},
},
pagination: {
    el: '.swiper-pagination',
    clickable : true,
},
});


var mySwiper = new Swiper('.swiper-container2', {
loop :true,
slidesPerView: 1,
breakpoints: {
640: {
    slidesPerView: 2,
},
768: {
    slidesPerView: 2,
},
1024: {
    slidesPerView: 1,
},
},
pagination: {
    el: '.swiper-pagination',
    clickable : true,
},
});

var swiper = new Swiper(".swiper-container3", {
    loop :true,
    slidesPerView: 2,
    breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 12,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 15,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 20,
    },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable : true,
    },
  });












