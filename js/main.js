'use strict';

$(function(){

// ハンバーガーメニュー

$('.toggle_btn').on('click', function () {
  if ($('#header').hasClass('open')) {
    $('#header').removeClass('open');
  } else {
    $('#header').addClass('open');
  }
});

$('#mask').on('click', function () {
  $('#header').removeClass('open');
});

$('#navi a').on('click', function () {
  $('#header').removeClass('open');
});


// スムーススクロール

// ページ内リンクのイベント
$('a[href^="#"]').click(function () {
  // リンクを取得
  let href = $(this).attr("href");
  // ジャンプ先のid名をセット
  let target = $(href == "#" || href == "" ? 'html' : href);
  // トップからジャンプ先の要素までの距離を取得
  let position = target.offset().top;
  // animateでスムーススクロールを行う
  // 600はスクロール速度で単位はミリ秒
  $("html, body").animate({ scrollTop: position }, 600, "swing");
  return false;
});

// ピックアップ

$('.slick-area').slick({  // slick-area という場所に、スライドショーを作って
  arrows: false,  // 左右の矢印ボタンを出さない
  centerMode: true,  // 真ん中の画像をメインに見せるモード
  centerPadding: '100px',  // 真ん中の横に余白（すきま）を作る
  slidesToShow: 3,  // 画面に3枚見せる
  responsive: [    // スマホなど小さい画面のときは設定を変える
    {
      breakpoint: 768,      // 画面の横幅が768pxより小さくなったら(スマホサイズ)
      settings: {
        centerPadding: '50px',
        slidesToShow: 1
        // スマホのときは「余白 → 50px」「表示 → 1枚」
      }
    }
  ]
});

// Feature

// スクロール時のイベント
$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $('.fadein').each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      $(this).css('opacity', '1');
      $(this).css('transform', 'translateY(0)');
    }
  });
});
});






