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
//ダイアログ透過
/*jQuery(document).ready(function ($){
    $('div[data-role="dialog"]').live('pagebeforeshow', function(e, ui) {
    ui.prevPage.addClass("ui-dialog-background ");
    });
 
    $('div[data-role="dialog"]').live('pagehide', function(e, ui) {
    $(".ui-dialog-background ").removeClass("ui-dialog-background ");
    });
});*/