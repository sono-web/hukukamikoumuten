

// f&q アコーディオン
$(function(){
  $(".faq__f").on("click", function() {
  $(this).next().slideToggle();
  });
  });// f&q アコーディオン




// swiper 制作実績
 var mySwiper = new Swiper('.swiper-container', {

  loop: true,　// ループ処理
  slidesPerView: 'auto',　// ※※※重要　無限ループ※※※ （''内をautoにすると1番目から始まる。）
  centeredSlides : true,
  

	autoplay: {　　// 自動再生
		delay: 5000,　// 5秒
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
}); // swiper 制作実績


// 必須を入力しないと送信ボタン押せないようにする記述
$(document).ready(function () {

    const $submitBtn = $('#js-submit')
    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="mail"]').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #privacyCheck').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
  
      } else {
        $submitBtn.prop('disabled', true);
      }
    });
  });// 必須を入力しないと送信ボタン押せないようにする記述


// ハンバーガーメニュー
  $('.burger-btn').on('click',function(){
    $('.header__nav').fadeToggle(300);
    $(this).toggleClass('cross');
    // $('body').toggleClass('noscroll');
  });// ハンバーガーメニュー

 



if (window.matchMedia( "(max-width: 960px)" ).matches) {
  //960px以下の場のみ、下記を動作させる

 // ナビゲーションをクリックしたらスムーススクロールしてナビゲーションが閉じる
 $('.header__list a').on('click', function(){
  $('.header__nav').fadeOut(300);
  $('.burger-btn').removeClass('cross');　// ×が消えハンバーガーメニーに戻る
});

}


// スムーススクロール
$(function(){
  $("a[href^='#']").click(function() {
  // #で始まるアンカーをクリックした場合に処理

      
     var speed = 500; // ミリ秒
     // スクロールスピード

     var href= $(this).attr("href");
     // アンカーの値を取得

     var target = $(href == "#" || href == "" ? 'html' : href);
     // 移動先取得

     var position = target.offset().top + -100;　/*上に-100ずらしている*/
     // 移動先を数値で取得

     $('body,html').animate({scrollTop:position}, speed, 'swing');
     // スムーススクロール実行

     return false;
  });
});　// スムーススクロール


// スムースするとふわっと
$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});　// スムースするとふわっと



// formの送信後の画面、まだわからないので未完成
  $(document).ready(function () {

    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfLaf5zq69oy9VCnfrrgFGLnhYC4nWZG_vSC7OvJPYIUoxRaw/viewform?usp=sf_link",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".end-message").slideDown();
            $(".submit-btn").fadeOut();
            //window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });



  // fvのスライドショー
  function sliderStart() {

    const slide = document.getElementById('slide_wrap');      //スライダー親
    const slideItem = slide.querySelectorAll('.slide_item');   //スライド要素
    const totalNum = slideItem.length - 1;                     // スライドの枚数を取得
    const FadeTime = 2000;                                     //フェードインの時間
    const IntarvalTime = 5000;                                 //クロスフェードさせるまでの間隔
    let actNum = 0;                                            //現在アクティブな番号
    let nowSlide;                                              //現在表示中のスライド
    let NextSlide;                                             //次に表示するスライド

    // DOM読み込み時にスライドの1枚目をフェードイン
    slideItem[0].classList.add('show_', 'zoom_');

    // 処理を繰り返す
    setInterval(() => {
        if (actNum < totalNum) {
          
            nowSlide = slideItem[actNum];
            NextSlide = slideItem[++actNum];

            //.show_削除でフェードアウト
            nowSlide.classList.remove('show_');
            // と同時に、次のスライドがズームしながらフェードインする
            NextSlide.classList.add('show_', 'zoom_');
            //フェードアウト完了後、.zoom_削除
            setTimeout(() => {
                nowSlide.classList.remove('zoom_');
            }, FadeTime);


        } else {

            nowSlide = slideItem[actNum];
            NextSlide = slideItem[actNum = 0];

            //.show_削除でフェードアウト
            nowSlide.classList.remove('show_');
            // と同時に、次のスライドがズームしながらフェードインする
            NextSlide.classList.add('show_', 'zoom_');
            //フェードアウト完了後、.zoom_削除
            setTimeout(() => {
                nowSlide.classList.remove('zoom_');
            }, FadeTime);

        };
    }, IntarvalTime);

}