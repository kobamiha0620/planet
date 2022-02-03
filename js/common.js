
//ブラウザサイズによってコンテンツの高さ＝FVに変更


$(window).on('load resize', function(){
    let $brand = $('#js-brand');
    let $content = $('#js-main');
    let $wrapper = $('#js-wrapper');
    let $bg = $('#js-bodyinner');
    let sH = document.documentElement.clientHeight;
    $content.height(sH + 'px');
    $wrapper.height(sH + 'px');
    $bg.height(sH + 'px');

    $brand.css('padding-top', sH);
    scroll();
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    setTimeout(function(){
        $('h1').addClass('fadein');
   },500);
});


function scroll(){
    $(window).on('scroll', function(){
        let $brandInnner = $('#js-brandInner').offset().top;
        let $brandInnner02 = $('#js-brandInner02').offset().top;
        let scroll = $(this).scrollTop();
        let $wrapper = $('#js-wrapper');
        let $brand = $('#js-brand');
        let $footer = $('#footer').offset().top;
        let $bg = $('#js-bodyinner');
        let sH = document.documentElement.clientHeight;
        $bg.height(sH + 50 + 'px');

        if(scroll > ($brandInnner - 700)){
            $wrapper.addClass('opacity');
        }else{
            $wrapper.removeClass('opacity');
        }


        if(scroll > ($brandInnner - 400)){
            $wrapper.css('display', 'none');
        }else{
            $wrapper.css('display', 'block');
        }


        if(scroll > ($brandInnner02)){
            $brand.addClass('opacity');
        }else{
            $brand.removeClass('opacity');
        }

        if(scroll > ($footer - 400) ){
            $brand.addClass('none');
        }else{
            $brand.removeClass('none');
        }

        let dot = $('#js-dot');
        dot.addClass('active');
    });
}
// 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
let vh = window.innerHeight * 0.01;
// カスタム変数--vhの値をドキュメントのルートに設定
document.documentElement.style.setProperty('--vh', `${vh}px`);

var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'diagonal',
    isPausedWhenNotInView: true,

    states : {
        "default-state": {
            gradients: [
                ['#6795d3', '#88aec9'],
                ['#e2d5d5', '#e0e4e3']
            ],
            transitionSpeed: 1700
        }
    }
});