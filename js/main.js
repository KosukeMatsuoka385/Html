// jsを記述する際はここに記載していく

// window.onload = function() {
//   const spinner = document.getElementById('loading');
//   spinner.classList.add('loaded');
// }




/*Dropdown Menu*/
$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
  $(this).parents('.dropdown').find('span').text($(this).text());
  $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
    msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
});

// Params
var sliderSelector = '.swiper-container',
  options = {
    init: false,
    loop: true,
    speed: 800,
    slidesPerView: 2, // or 'auto'
    // spaceBetween: 10,
    centeredSlides: true,
    effect: 'coverflow', // 'cube', 'fade', 'coverflow',
    coverflowEffect: {
      rotate: 50, // Slide rotate in degrees
      stretch: 0, // Stretch space between slides (in px)
      depth: 100, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multipler
      slideShadows: true, // Enables slides shadows
    },
    grabCursor: true,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // breakpoints: {
    //   1023: {
    //     slidesPerView: 1,
    //     spaceBetween: 0
    //   }
    // },
    // Events

    // autoplay: {
    //   delay: 5000,
    // },
    on: {
      imagesReady: function () {
        this.el.classList.remove('loading');
      }
    }
  };
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();

const target1 = document.getElementById('target1');
const target2 = document.getElementById('target2');
const target3 = document.getElementById('target3');

//ON
target1.addEventListener('mouseover', () => {
  target1.style.color = "red";
  target1.style.fontWeight = "bold";
}, false);

//OUT
target1.addEventListener('mouseout', () => {
  target1.style.color = "#222222";
  target1.style.fontWeight = "normal";
}, false);

//ON
target2.addEventListener('mouseover', () => {
  target2.style.color = "blue";
  target2.style.fontWeight = "bold";
}, false);

//OUT
target2.addEventListener('mouseout', () => {
  target2.style.color = "#222222";
  target2.style.fontWeight = "normal";
}, false);

//ON
target3.addEventListener('mouseover', () => {
  target3.style.color = "green";
  target3.style.fontWeight = "bold";
}, false);

//OUT
target3.addEventListener('mouseout', () => {
  target3.style.color = "#222222";
  target3.style.fontWeight = "normal";
}, false);


$(function(){

  var effect_btm = 300; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 50; // どのぐらい要素を動かすか(px)
  var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

  //親要素と子要素のcssを定義
  $('.scroll-fade-row').css({
      opacity: 0
  });
  $('.scroll-fade-row').children().each(function(){
      $(this).css({
          opacity: 0,
          transform: 'translateY('+ effect_move +'px)',
          transition: effect_time + 'ms'
      });
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      var effect_pos = scroll_btm - effect_btm;

      //エフェクトが発動したとき、子要素をずらしてフェードさせる
      $('.scroll-fade-row').each( function() {
          var this_pos = $(this).offset().top;
          if ( effect_pos > this_pos ) {
              $(this).css({
                  opacity: 1,
                  transform: 'translateY(0)'
              });
              $(this).children().each(function(i){
                  $(this).delay(100 + i*200).queue(function(){
                      $(this).css({
                          opacity: 1,
                          transform: 'translateY(0)'
                      }).dequeue();
                  });
              });
          }
      });
  });

});

$('.rippleria').rippleria({
  // aniamtion speed
  duration: 750,
  // custom easing effect
  easing: 'ease-in'
});

$('.rippleria').click(function(e) {
  e.preventDefault();

  var randInt = function (min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
};

$(this).rippleria('changeColor',
      'rgba('+randInt(0,200)+','+randInt(0,200)+','+randInt(0,200)+',0.'+randInt(3,5));
});