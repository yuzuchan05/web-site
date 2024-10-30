/* ハンバーガーメニュー
-----------------------------------------*/
$(".hamburger__icon").on("click", function (e) {
  $(".hamburger__nav").slideToggle();
});

// ハンバーガーメニューを閉じる
$('.hamburger__nav a[href^="#"]').click(function () {
  $(".hamburger__nav").slideUp();
});