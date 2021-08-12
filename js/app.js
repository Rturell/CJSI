
///Swiper///

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    speed: 200,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        },
         992: {
             slidesPerView: 4,
             spaceBetween: 10
         }
    }
});

///ESCONDER MENÚ AL HACER CLICK///

$(document).on('click', function () {
    $('.collapse').collapse('hide');
})


$('.carousel').carousel({
    interval: 1000
})