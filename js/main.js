
$(".gnb > li").hover(function () {
  $(this).find(".depth2").stop().slideToggle();
});

// search
$(".search").hide();

$(".btn_search").click(function () {
  $(".search").fadeIn();
  $("body").css({ "overflow": "hidden" });

});

$(".search_close").click(function () {
  $(".search").fadeOut();
  $("body").css({ "overflow": "auto" });

});




/* 비주얼 슬라이드 */
const main_visual = new Swiper('.main_visual', {
  /*   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }, */

  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  effect: "fade", // 페이드 효과
  fadeEffect: {
    crossFade: true
  },


});



$(".ham").click(function () {
  $(".dim").fadeIn();
  $(".mgnb_wrap").animate({
    "right": "0"

  })
});

$(".mgnb_close").click(function () {
  $(".dim").fadeOut();
  $(".mgnb_wrap").animate({
    "right": "-100%"

  })
});



$(".mgnb > li ").click(function () {
  $(this).find(".mdepth2 ").stop().slideToggle();
  $(this).siblings().find(".mdepth2 ").slideUp();

});





const Brand_Story_list = new Swiper('.Brand_Story_list', {


  effect: "fade", // 페이드 효과
  fadeEffect: {
    crossFade: true
  },

});


const Brand_Story_list_img = new Swiper('.Brand_Story_list_img', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },


});

Brand_Story_list.controller.control = Brand_Story_list_img;

Brand_Story_list_img.controller.control = Brand_Story_list;




const product_list = new Swiper('.product_list', {
  /*   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }, */
  centeredSlides: true,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: { // 모바일
      slidesPerView: 2,
    },
    768: {// 768픽셀 이상에서 - min-width / 테블릿
      slidesPerView: 2.5,

    },
    1200: { // 데스크탑
      slidesPerView: 4,
    },
  },

});


$(".meet ul li:nth-child(1)").addClass("active");

$(".meet ul li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

});

