/* ハンバーガーメニュー
-----------------------------------------*/
$(document).ready(function () {
    $(".hamburger").hide();

    $(".header__hamburger-icon").on("click", function (e) {
        $(".hamburger").slideToggle();
    });

    // ハンバーガーメニューを閉じる
    $('.hamburger a[href^="#"]').click(function () {
        $(".hamburger").slideUp();
    });
});