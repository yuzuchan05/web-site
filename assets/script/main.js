/* ハンバーガーメニュー
-----------------------------------------*/
$(document).ready(function () {
    $(".header__hamburger-icon").on("click", function (e) {
        $(".hamburger").fadeToggle();
    });

    // ハンバーガーメニューを閉じる
    $('.hamburger a[href^="#"]').click(function () {
        $(".hamburger").fadeOut();
    });
});


/* 手動slider
-----------------------------------------*/
var mySwiper = new Swiper(".swiper", {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 76,
    centeredSlides: false,
    watchOverflow: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 70,
        },
    },
});


/* acordion
-----------------------------------------*/
$('.faq__item').on('click',function() {
    $(this).parent().toggleClass("open");
    $(this).next().slideToggle();
});