//スライドショー
$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",	//アニメーション　"slide" or "fade"
		slideshow:true,		//オートスライドありなし
		slideshowSpeed:6000,	//オートスライドスピード
		controlNav:true		//コントロールナビありなし
	});
});


//ページトップへ
$(document).ready(function(){
	$('.pagetop a[href^=#]').tap(function() {
		var speed = 500;
	       	var href= $(this).attr("href");
	       	var target = $(href == "#" || href == "" ? 'html' : href);
	       	var position = target.offset().top;
		$('html, body').animate({ scrollTop: position } , speed, 'swing');
	       	return false;
	});
});

//新着確認後の処理
jQuery(function ($){
	$("#modal-open").click(function() {
           	//alert("ようこそ！");
           	var news=0;
           	var sampleNode=document.getElementById("new_count");
        		sampleNode.innerHTML="";
           	//$("#new_count").remove(); 
	});
});
//申請ボタンの処理
$(document).ready( function() {
	//初期状態は0申請無し
	var sinsei_jyoutai=0;
        $("#sinsei_button").click(function(){
            alert('申請します!!');
            //申請済みは1
	var sinsei_jyoutai=1;
        });
        $("#torikeshi_button").click(function(){
            alert('取り消します!!');
            //申請済みは0
	var sinsei_jyoutai=0;
        });
    });