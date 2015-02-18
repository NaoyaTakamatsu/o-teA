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
/*$(document).ready( function() {
	//初期状態は0申請無し
	var sinsei_jyoutai=0;
        $("#sinsei_button").click(function(){
            //alert('申請します!!');
            //申請済みは1
            $("#sinsei_condition").html("さんの申請状態を選択してください");
            $(".friend_list").html("<p id="sinseizumi">申請済み</p>");
	var sinsei_jyoutai=1;
        });
        $("#torikeshi_button").click(function(){
            //alert('取り消します!!');
            //申請済みは0
            $("#sinsei_condition").html("さんの申請状態を選択してください");
	var sinsei_jyoutai=0;
        });
        $("#closed").click(function(){
            //alert('閉じます');
            //申請済みは0
	//var sinsei_jyoutai=0;
	$("#sinsei_condition").html("さんの申請状態を選択してください");
        });
    });*/

//申請ボタンの処理
$(function() {
$(".friend_list").click(function () {
//申請時のダイアログ表示時の名前入れの処理
  var $name=$(this).find('h3').text();
  var $condition=$(this).find('p');
  //var $condition_id=$(this).find('p id');
  var $idname = $(this).find('p').attr("id"); 
  $("#sinsei_condition").prepend($name);
 
  var sinsei_jyoutai=0;
  //申請ボタン
        $("#sinsei_button").click(function(){
            //alert($idname);
            //申請済みは1
            $("#sinsei_condition").html("さんの申請状態を選択してください");
            //$(this).find('p').removeAttr('p');
            //$condition.html(null);
            $condition.text('申請済み');
            $condition.css({"background":"#326779","border-color":"#326779"});
            //$condition.html('<p id="sinseizumi" style="font-size:1.0em;">申請済み</p>');
            //$idname="sinseizumi";
            /*if($idname=="ryouomoi"){
            	//$idname="ryouomoi";
            	$(this).find('p').html('<p id="ryouomoi">両想い</p>');
            	//$condition.html('<p id="ryouomoi">両想い</p>');
            }
            else if($idname=="sinseimae"||"sinseizumi"){
            	$(this).find('p').html('<p id="sinseizumi">申請済み</p>');
            	//$condition.html('<p id="sinseizumi">申請済み</p>');
            }*/
            /*if($idname=="sinseimae"){
		$condition.html('<p id="sinseizumi">申請済み</p>');
		//$idname="sinseizumi";
            }*/
            /*else if($idname=="sinseizumi"){
            	//$idname="sinseizumi";

            }
            else if($idname=="ryouomoi"){
            	//$idname="ryouomoi";
            }*/
            //$(".friend_list").html("<p id="sinseizumi">申請済み</p>");
	var sinsei_jyoutai=1;
        });
    //取り消しボタン
        $("#torikeshi_button").click(function(){
            //alert('取り消します!!');
            //申請済みは0
            $("#sinsei_condition").html("さんの申請状態を選択してください");
            $condition.text('申請前');
            $condition.css({"background":"#34D298","border-color":"#34D298"});
            //$condition.html('<p id="sinseimae">申請前</p>');
            /*if($idname=="sinseizumi"){
		$condition.html('<p id="sinseimae">申請前</p>');
		//$idname="sinseimae";
            }
            else if($idname=="ryouomoi"){
            	$condition.html('<p id="sinseimae">申請前</p>');
            	//$idname="sinseimae";
            }*/
            /*else if($idname=="sinseimae"){
            	//$idname="sinseimae";
            }*/
	var sinsei_jyoutai=0;
        });
     //閉じるボタン
        $("#closed").click(function(){
            //alert('閉じます');
            //申請済みは0
	//var sinsei_jyoutai=0;
	$("#sinsei_condition").html("さんの申請状態を選択してください");
        });
});
});