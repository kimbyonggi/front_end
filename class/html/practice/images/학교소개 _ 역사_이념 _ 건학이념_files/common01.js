var MobileUA = ( function () {
	var ua = navigator.userAgent.toLowerCase();
	var mua = {
			IOS: /ipod|iphone|ipad/.test(ua),                                //iOS
			IPHONE: /iphone/.test(ua),                                        //iPhone
			IPAD: /ipad/.test(ua),                                            //iPad
			ANDROID: /android/.test(ua),                                    //Android Device
			WINDOWS: /windows/.test(ua),                                    //Windows Device
			TOUCH_DEVICE: ('ontouchstart' in window) || /touch/.test(ua),    //Touch Device
			MOBILE: /mobile/.test(ua),                                        //Mobile Device (iPad 포함)
			IE: /msie/.test(ua),
			AND_4_1: /android 4.1/.test(ua),
			ANDROID_TABLET: false,                                            //Android Tablet
			WINDOWS_TABLET: false,                                            //Windows Tablet
			TABLET: false,                                                    //Tablet (iPad, Android, Windows)
			SMART_PHONE: false                                                //Smart Phone (iPhone, Android)
	};
	
	mua.ANDROID_IE = mua.AND_4_1 || mua.IE;
	mua.ANDROID_TABLET = mua.ANDROID && !mua.MOBILE;
	mua.WINDOWS_TABLET = mua.WINDOWS && /tablet/.test(ua);
	mua.TABLET = mua.IPAD || mua.ANDROID_TABLET || mua.WINDOWS_TABLET;
	mua.SMART_PHONE = mua.MOBILE && !mua.TABLET;
	mua.TABLET_PHONE = mua.MOBILE || mua.TABLET;

	return mua;
}());


		
$(document).ready(function(){

	

 if(MobileUA.IOS || MobileUA.ANDROID)
 {
  for(var i=0; i<document.getElementsByTagName("a").length; i++) 
  { 
/*
   document.getElementsByTagName("a")[i].onclick = function() 
   { 
    if(this.getAttribute("href") == 'http://contract.kr.or.kr:8080/apply_s_step.jsp?uid=null')
    {
     alert("모바일에서 지원하지 않는 메뉴입니다.");
     return false;
    }
   } 
*/
  } 
 }
 
 if(MobileUA.IOS || MobileUA.ANDROID)
 {
  if(document.getElementById("userWelcome") != null)
   document.getElementById("userWelcome").style.display = "none";
 }

	$('#wrap').append('<span class="line_top"></span>');
 	// header 스크롤
	var HEADER = (function(){
		var $target = $('.area_header'),
			$easing1 = 'easeOutQuad',
			$easing2 = 'easeInQuad',
			$topBtn = $('.btn_top_1 a'),
			$top,
			$hei = $( window ).height(),
			$winWidth = $( window ).width(),
			$footer = $('.area_footer').height(),
			$max = $('#wrap').height();
		if ($winWidth > 800 ){
			if (MobileUA.TABLET) {
				var $mLeft = $winWidth / 2 - 44;
				$topBtn.css({ top : $hei - 70 , marginLeft : $mLeft });
			} else {
				$topBtn.css({ top : $hei - 70 });
			}
		} else {
			$topBtn.css({ top : 'auto' });
		}
		$( window ).bind('scroll',function(){
			$top = $( window ).scrollTop(),
			$hei = $( window ).height() + $top - 70,
			$winWidth = $( window ).width();
			if ( $top != 0 ){
				$topBtn.css('display','block');
			} else {
				$topBtn.css('display','none');
			}
			if ($winWidth > 800 ){
				if ($hei > $max && !$('.ul_pr_history_1').length) {
					$hei = $max - 70;
				}
				$topBtn.stop().animate({ top : $hei });
			}
			if ( $winWidth > 560 ){
				if ( $top > 5 ) {
					$target.stop().animate({ top : '0' },300,$easing2);
				} else {
					$target.stop().animate({ top : '0' },300,$easing1);
				}
			};
		});
		$topBtn.bind('click',function(){
			$('body, html').animate({ scrollTop : 0 });
			return false;
		});
	}());
	// gnb
	var GNB = (function(){
		var $winWidth = $( window ).width(),
			$target = $('#ul_gnb_1 li'),
			$link = $('#ul_gnb_1 > li > a'),
			$bg = $('.bg_header_1'),
			$snb = $('.box_gnb_1'),
			$array = [],
			$flag = false,
			$easing1 = 'easeOutQuad',
			$easing2 = 'easeInQuad';
		// 모바일 용 변수
		var $webGnb = $('#ul_gnb_1'),
			$mainTarget = $('.box_mot_1'),
			$gnbTarget = $('#gnb');
		// tbl용 변수
		var $window = $( window ).width(),
			$tblTemp = 'off';
		// gnb 높이값 설정		
		gnbHeight()
		function gnbHeight(){
			$array = [];
			$bg.removeClass('on').css('height','0');
			$snb.each(function(){
				var $this = $(this);
				$this.css({visibility : 'hidden' , maxHeight :  'auto' });
				$array.push($this.height());
				$this.css({visibility : 'visible' , maxHeight :  '0' });
			});
		}
		// 웹용 gnb
		$(document).on('mouseenter focus','#ul_gnb_1:not(.ul_gnb_mo_1) > li > a',viewMenu);
		$(document).on('mouseleave blur','#ul_gnb_1:not(.ul_gnb_mo_1) > li > a',hideMenu);
		$(document).on('mouseover focus','.box_gnb_1:not(.ul_gnb_mo_2)',viewMenu1);
		$(document).on('mouseout blur','.box_gnb_1:not(.ul_gnb_mo_2)',hideMenu);
		$('.btn_gnb_close a').bind('click',function(){
			hideMenu();
		});
		function viewMenu(){
			var $this = $(this),
				$target = $this.parent(),
				$all_target = $('#ul_gnb_1 > li'),
				$all_box = $('.box_gnb_1'),
				$index = $target.index(),
				$box = $this.next('.box_gnb_1');
			boxHeight($index);
			$all_target.removeClass('on');
			$target.addClass('on');
			$bg.addClass('on').stop().animate({ height : $array[$index]},300,$easing1);
			flag = false;
		};
		function hideMenu(){
			flag = true;
			setTimeout(check,100);
		};
		function viewMenu1(){
			flag = false;
			setTimeout(check,100);
		};
		function check(){
			if (flag){
				$snb.stop().animate({ maxHeight : 0},300,$easing2);
				$bg.stop().removeClass('on').animate({ height : 0 },300,$easing2);
				$target.removeClass('on');
			}
		}
		function boxHeight(idx){
			 var $this = $('#ul_gnb_1 > li'),
				$target = $this.find('.box_gnb_1');
			$target.stop().css('maxHeight','0');
			$this.eq(idx).find('.box_gnb_1').stop().animate({ maxHeight : $array[idx]},300,$easing2);
		}

		// 모바일 gnb 열기 버튼
		$('.gnb_tit a').bind('click',function(){
			if (MobileUA.ANDROID_IE) {
				var $target_1 = $('.box_mot_1'),
					$target_2 = $('#ul_gnb_1, .li_mobile');
					$target_3 = $('.org_area');
				if ($target_1.hasClass('on')){
					$target_1.removeClass('on').stop(); //$target_1.removeClass('on').stop().animate({ left : '0'});
					$target_2.removeClass('on');
					$target_3.removeClass('on').stop().animate({ left : '0'});
				} else {
					$target_1.addClass('on').stop(); //$target_1.addClass('on').stop().animate({ left : '80%'});
					$target_2.addClass('on');
					$target_3.addClass('on').animate({ left : '82%'});
				}
			} else {
				viewMobile('.box_mot_1');
				viewMobile('.ul_gnb_mo_1');
			}
			return false;
		});
		// 타블렛 1뎁스 링크 제거
		$(document).on('click','#ul_gnb_1.ul_gnb_ta_1 > li > a',function(){
			return false;
		});
		// 모바일 사이즈 class 추가
		webGnb();
		$( window ).bind('resize',function(e){
			clearTimeout(resizeEvt);
			var resizeEvt = setTimeout(function() {
				$window = $( window ).width();
				webGnb();
				gnbHeight();
				moPazing($window);
				startResize($window);
			}, 50);
		});
		// 모바일 페이징 처리
		moPazing($window);
		function moPazing(size){
			var $target = $('.ul_paging_1 li');
				$except = $target.not('.li_prev10, .li_prev, .li_next, .li_next10');
				$except_left = $target.filter('.li_prev10, .li_prev');
				$size_1 = $target.filter('.li_prev10, .li_prev, .li_next, .li_next10').size();
				$size_left = $except_left.size();
				$size_2 = $target.size() - $size_1,
				$append = $('.box_board_1_1'),
				$on = $target.filter('.on').index() - $size_left + 1;
			if(size <= 960){
				$except.css('display','none');
				$append.prepend('<span class="txt_cur_add">' + $on + ' / ' + $size_2 + '</span>')
			} else {
				$except.css('display','');
				$('.txt_cur_add').remove();
			}
		}
		function webGnb(){
			$winWidth = $( window ).width();
			if ( $winWidth <= 1019 && $winWidth > 800 ){
				$webGnb.removeClass().addClass('ul_gnb_ta_1');
			} else if ( $winWidth <= 800 ){
				$webGnb.removeClass('ul_gnb_ta_1').addClass('ul_gnb_mo_1');
				$snb.addClass('ul_gnb_mo_2');
			} else {
				$webGnb.removeClass();
				$webGnb.children('li').removeClass('on');
				$snb.removeClass('ul_gnb_mo_2');
			}
		}
		// 모바일 서브메뉴 열기
		$( document ).on('click','.ul_gnb_mo_1 > li > a',function(){
			var $this = $(this),
				$target = $this.parent('li');
			if ($this.next('div').length){
				viewMobile($target, 1500,'only1');
				return false;
			}
		});
		// 모바일 2뎁스 서브메뉴 열기
		$( document ).on('click','.ul_gnb_mo_1 > li .ul_gnb_2 > li.row > a',function(){
			var $this = $(this),
				$target = $this.parent('li');
			viewMobile($target, 500,'only2');
			return false;
		});
		// 모바일 gnb 열기
		function viewMobile(target,hgt,sta){
			var $this = $(target),
				$all = $this.siblings(),
				$subTarget;
			if ($this.hasClass('on')){
				$this.removeClass('on');
			} else {
				$this.addClass('on');
				if (typeof sta != 'undefined'){
					$all.removeClass('on');
				}
			}
			if (sta == 'only1'){
				$subTarget = '.box_gnb_1';
			} else if (sta == 'only2'){
				$subTarget = '.ul_gnb_3';
			}
			if (typeof hgt != 'undefined' && $this.hasClass('on')){
				$all.find($subTarget).css({ maxHeight : 0 });
				$this.find($subTarget).css({ maxHeight : hgt });
			} else if (typeof hgt != 'undefined' && !$this.hasClass('on')){
				$this.find($subTarget).css({ maxHeight : 0 });
			}
		}
		// table type1 일반형태 및 tbody에 th 있는경우
		if ($('.tbl').length){
			startResize($window);
		}
		function startResize(width){
			$window = width;
			if ($window <= 560 ) {
				replaceTd(560);
			} else {
				replaceTd(800);
			}
		}
		// 테이블 모바일 변환
		function replaceTd(width) {
			var $tblSize = $('.tbl').size();
			for (var i = 0; i < $tblSize; i++){
				var $this = $('.tbl').eq(i),
					$arrTh = [],
					$arrTh1 = [],
					$th = $this.find('thead th'),
					$tr = $this.find('tbody tr'),
					$tf = $this.find('tfoot tr'),
					$tbodyTh = $this.find('tbody th'),
					$tfootTh = $this.find('tfoot th'),
					$td = $tr.find('td');
					$tfootTd = $this.find('tfoot td');
					$sizeTh = $th.size();
					$sizeTr = $tr.size();
				for (var j = 0; j < $sizeTh; j++){
					$arrTh.push($th.eq(j).text());
				}
				// tbody에 th 있을 경우 thead 첫번째 th 삭제
				if (typeof $tbodyTh.html() != 'undefined'){
					$arrTh.splice(0,1);
				}
				for (var j = 0; j < $sizeTr; j++){
					if ($tbodyTh.eq(j).attr('rowspan')){
						var $rowSpan = $tbodyTh.eq(j).attr('rowspan');
						for (var k = 0; k < $rowSpan; k++){
							$arrTh1.push($tbodyTh.eq(j).text());
						}
					} else {
						$arrTh1.push($tbodyTh.eq(j).text());
					}
				}
				if (width == 560 && $tblTemp == 'off'){
					for (var j = 0; j < $sizeTr; j++){
						var $td = $tr.eq(j).find('td');
						$td.prepend('<span class="th_span"></span>');
						for (var k = 0; k < $sizeTh; k++){
							$td.eq(k).find('.th_span').append($arrTh1[j]).append(' ' + $arrTh[k]);
						}
					}
					if (i + 1 == $tblSize){
						$tblTemp = 'on';
					}
				} else if (width != 560) {
					$td.find('.th_span').remove();
					$tblTemp = 'off';
				}
			};
		}
	}());
	
	// 라인맵
	var LINEMAP = (function(){
		var $btn = $('.box_line_map_2 > a'),
			$winWid = $(window).width();
		$btn.bind('click',function(){
			var $this = $(this),
				$target = $this.next('.box_snb_1'),
				$all_target = $target.closest('.box_line_map_1').find('.box_snb_1');
			if ($target.hasClass('on')){
				$target.removeClass('on').stop().animate({ maxHeight : '0' },function(){
					var $this = $(this);
					$this.css('display','none');
				});
			} else {
				$all_target.removeClass('on').stop().animate({ maxHeight : '0' },function(){
					var $this = $(this);
					$this.css('display','none');
				});
				$target.addClass('on').stop().css('display','block').animate({ maxHeight : '562px' });
			}
			return false;
		});
	}());

	// 상단 검색
	var TOPSEARCH = (function(){
		var $target = $('.box_search_2'),
			$layer = $('.box_search_2_1'),
			$btn = $('.box_search_1 .btn_search a');
		$btn.bind('click',function(){
			if ($target.hasClass('on')){
				hideSearch();
			} else {
				$target.addClass('on').css('display','block');
				$layer.stop().animate({ right : '0' },300,'easeInQuad');
			}
			return false;
		});
		$('.box_search_dim a').bind('click blur',function(){
			hideSearch();
			return false;
		});
		$(".box_search_2").click(function(e){
			var event = e || window.event;
			event.cancelBubble = true;
			if (event.stopPropagation){
				event.stopPropagation();
			}
		});
		$('body').click(function(){
			if ($target.is(':visible')){
				hideSearch();
			};
		});
		$('.box_search_2 button').bind('blur',function(){
			hideSearch();
		});
		function hideSearch(){
			$target.css('display','block');
			$layer.animate({ right : '-720px' },300,'easeInQuad',function(){
				$target.removeClass('on').css('display','none');
			});
		};
		// html5 input placeholder - ie7,8용
		if (!("placeholder" in document.createElement("input"))) {
			jQuery(':input[placeholder]').each(function(){
				var $this = jQuery(this),
					$val = $this.val(),
					$ph = jQuery(this).attr('placeholder'),
					$parent = jQuery(this).parent(),
					$span_txt;
				if ($this.val() == ''){
					$this.wrap('<p>');
					jQuery('<span class=\"span_placeholder\">' + $ph + '</span>').insertAfter($this).css({ position : 'absolute' , top : '7px' , left : '5px' , color : '#666' , fontSize : '12px' }).bind( 'click', function(){
						$this.focus();
					});
					jQuery(this).bind('focus blur',function(e){
						if (e.type == "focus"){
							$this.next().css('display','none');
						} else if (e.type == "blur" && $this.val() == ''){
							$this.next().css('display','block');
						}
					});
				}
			})
		};
	}());


	// iframe 관련
	$('iframe').each(function() {
		var url = $(this).attr("src");
		if(url != null)
		{
		if ($(this).attr("src").indexOf("?") > 0) {
			$(this).attr({
				"src" : url + "&wmode=transparent",
				"wmode" : "Opaque"
			});
		} else {
			$(this).attr({
				"src" : url + "?wmode=transparent",
				"wmode" : "Opaque"
			});
		}
		}
	});
});

function fnSiteSearch() {
	if ($.trim($("#topSearch").val()) == "") {
		alert("검색어를 입력해주세요.");
		return false;
	} else {
		return true;
	}
	
}


/* footer 링크 */

$(function () {
    $('#baseLink a').not('.blank').click(function(ev) {
        ev.preventDefault();
        var url = $(this).attr('href');
        $('#floatLink').hide();
    });
	
    $('.footBtn button, .footer_link button').click(function() {
        $(this).next().slideToggle(300);
    });

});

/* 컨텐츠 상단으로 이동 */












