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
