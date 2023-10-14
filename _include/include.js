/* ハンバーガーメニュー */
$('.sp-button').click(function() {
  $('.bt-bar1').toggleClass('bt-bar1-on'),
  $('.bt-bar2').toggleClass('bt-bar2-on'),
  $('.bt-bar3').toggleClass('bt-bar3-on'),
  $('.nav-sp').toggleClass('open');
});

/* 画面の横サイズによってヘッダーの表示を変更 */
$(window).on('load', function(){
  $('.container').addClass('loaded').delay(0).queue(function(){
    $('.header').addClass('h-load').dequeue();
  });
});

/* ページ内リンクを踏んだ時、滑らかに移動 */
$('.nav a[href*="#"], .top-bt a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top;
	$('body,html').animate({scrollTop: pos}, 500);
	return false;
});

(jQuery);

/* マーカーラインのアニメーション */
window.addEventListener('scroll',function() {
  const height = window.innerHeight;
  const scroll = this.scrollY;
  const marker = document.querySelectorAll('.marker');
  const value = scroll - height + 300;
  marker.forEach(function(element){
      if (scroll > element.getBoundingClientRect().top + value) {
          element.classList.add('on')
      }
  });
})
