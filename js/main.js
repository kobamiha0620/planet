// $("#headerMenu").hover(function () {
//   $(this).toggleClass("active");
//   //   setTimeout(function () {
//   //     $("#headerMenu").removeClass("active");
//   //   }, 2000);
// });

$(window).scroll(function () {
  if ($(window).scrollTop() > 20) {
    $(".rocketR").addClass("active");
    $(".borderR").addClass("active");
  } else {
    $(".rocketR").removeClass("active");
    $(".borderR").removeClass("active");
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 80) {
    $(".rocketL").addClass("active");
    $(".borderL").addClass("active");
    $("#js-menu").addClass('active');
  } else {
    $(".rocketL").removeClass("active");
    $(".borderL").removeClass("active");
    $("#js-menu").removeClass('active');

  }
});

// ページ内リンクのみ取得
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
});


$(function () {
  $('#openModal').click(function(){
      $('#modalArea').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea').fadeOut();
  });
});



$(function () {
  $('#openModal2').click(function(){
      $('#modalArea2').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea2').fadeOut();
  });
});

