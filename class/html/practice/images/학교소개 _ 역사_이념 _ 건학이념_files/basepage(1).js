 jQuery(document).ready(function () {   


	/* 민원신청 및 확인 */
	if( RequestS.MEMID == "" ) 
	{
		var $hrefg = jQuery("a[href='/CmsHome/Uversitylife08_02.aspx'],a[href='/CmsHome/AboutSM01_05.aspx']") ;
		if($hrefg.length)
		{ 
			jQuery.each( $hrefg, function(){
				jQuery(this).off("click").click(function(){ 
					if( confirm("본 게시판은 작성자 본인의 게시물 리스트만 \n"
					+"열람이 가능하므로 본인이 작성한 \n"
					+"게시물을 열람하고 싶으실 경우 로그인이 필요합니다.\n"
					+"로그인하시겠습니까?") )
					{
						location.href = "/CmsHome/Etc01.aspx";
					}else{
						location.href= jQuery(this).attr("href");
					};
					return false;
				});
			});
		};
	};

	/*TAB MENU START*/
	var tabMenuB = {
		now:0 ,
		Load: function(){
			if(jQuery(".contTab > li > a").length)
			{
				jQuery(".contTab > li > a").each(function(index){
					jQuery(this).click(function(){
							jQuery(".contTab > .on").removeClass("on") ;
							jQuery(this).parent().addClass("on") ;
							tabMenuB.FOCUS(index);
							return false;
					});
					if(index == tabMenuB.now )
					{
						tabMenuB.FOCUS(index);
						jQuery(this).parent().addClass("on") ;
					}
					else
					{
						tabMenuB.HIDE(index);
						jQuery(this).parent().removeClass("on") ;
					}
				});
			}
		},
		HIDE: function(e1){
			var tnum = e1+1;
			var tnumE1 = "A" +  (tnum <10 ? "0" :"") +tnum ;
			var tnumE2 = "A" +   tnum ;
			if(jQuery("#" +tnumE1).length )jQuery("#" +tnumE1).hide();
			if(jQuery("#" +tnumE2).length )jQuery("#" +tnumE2).hide();
		},
		FOCUS: function(e1){ 
			if(tabMenuB.now!= e1)tabMenuB.HIDE(tabMenuB.now);
			tabMenuB.now = e1 ;
			var tnum = e1+1;
			var tnumE1 = "A" +  (tnum <10 ? "0" :"") +tnum ;
			var tnumE2 = "A" +   tnum ;
			if(jQuery("#" +tnumE1).length )jQuery("#" +tnumE1).show();
			if(jQuery("#" +tnumE2).length )jQuery("#" +tnumE2).show();
		}
	};
	tabMenuB.Load();
	/*TAB MENU END*/
});


var TopMenu = {
	OVER: false , 
	Hide: function(i ){
		var $dt3  = jQuery("#wrap .lnbArea > nav > ul > li > a"); 
		if($dt3.length )
		{
			jQuery.each($dt3  , function(i2,v2){
				if( i != null  && i == i2 )
				{
 				}
				else{
					jQuery(this).removeClass("on"); 
					jQuery(this).parent().removeClass("on"); 
					if(jQuery(this).next("div").length   ) {
						jQuery(this).next("div").hide();
					};
				};
			});
		};
	},
	Over: function(){
		if( TopMenu.OVER == false )
		{
			TopMenu.OVER = true ; 
			var $dtG  = jQuery("#wrap .lnbWrap" ) ;
			if($dtG.length )
			{ 
				$dtG.css({"position":"absolute"}).animate(
				{height: "510px"}
				, "fast"
				, function() {   
					var $dt3  = jQuery("#wrap .lnbArea > nav > ul > li > a"); 
					if($dt3.length )
					{
						jQuery.each($dt3  , function(i2,v2){ 
							var class_  = jQuery(this).parent().attr("class") != null ?jQuery(this).parent().attr("class")  : "" ; 
							if(jQuery(this).next("div").length && class_ .indexOf( "on" ) > -1 ){jQuery(this).next("div").show();};
						});
					};  
				});
			};  
		}
	},
	Leave: function(){

		if( TopMenu.OVER == true )
		{
			TopMenu.OVER = false;
			var $dt3  = jQuery("#wrap .lnbArea > nav > ul > li > a"); 
			if($dt3.length )
			{
				jQuery.each($dt3  , function(i2,v2){ 
					if(jQuery(this).next("div").length ){jQuery(this).next("div").hide();};
				});
			};  
			var $dtG  = jQuery("#wrap .lnbWrap" ) ;
			if($dtG.length )
			{  
				$dtG.animate(
				{height: "84px"}
				, "fast"
				, function() {   
				});
			};  
		}
	}
};


var TOP2C_EX = {
    obj_DDL: 'PortalSearch',
    obj_TXT: '',
    obj_num: 0,
    Next : "/CmsHome/Etc08.aspx",
	FIND2 : function (){     
		var $q = jQuery(TOP2C_EX.obj_TXT) ;
		if( $q.length)
		{ 
			TOP2C_EX.obj_TXT = jQuery.trim($q.val());		
			if (TOP2C_EX.obj_TXT == "" || TOP2C_EX.obj_TXT == "통합검색") {
				alert("검색어을 입력하여 주십시오."); 
				$q.val("");
				$q.focus(); 
				return  false ;
			}
			TOP2C_EX.obj_num++; 
			 
			if( TOP2C_EX.obj_num== 1 ) TOP2C_EX.GO();
		} 
	},
    GO: function() {    
		location.href = TOP2C_EX.Next + "?w=" + encodeURI(encodeURIComponent(TOP2C_EX.obj_TXT));
    }
};

jQuery(document).ready(function(){
	var $dt3  = jQuery("#wrap .lnbArea > nav > ul > li > a"); 
	if($dt3.length )
	{
		var temo_I = 0 ;
		if ( PageBaseInfo != null && PageBaseInfo.Page .indexOf ("Body_") > -1 )
		{
			var EX = (PageBaseInfo.Auction.indexOf("/") > -1  ? 
				PageBaseInfo.Auction.substring(  PageBaseInfo.Auction.lastIndexOf("/")  + 1 ) : PageBaseInfo.Auction ) ;

			EX = (EX.indexOf(".") > -1  ?  EX.substring(  0 , EX.lastIndexOf(".")  ) : EX ) ;
			EX = (EX.indexOf("_") > -1  ?  EX.substring(  0 ,  EX.indexOf("_")    ) : EX ) ; 

			jQuery.each($dt3  , function(i2,v2){ 
				if(jQuery(this).attr("href") != null && jQuery(this).attr("href").indexOf (EX) > -1  )
				{
					temo_I = i2 ;return false;
				};
			});
			if(temo_I == 0 ){
				EX = (EX.length > 6 ? EX.substring(  0 ,  EX.length -4   ) : EX ) ; 
				jQuery.each($dt3  , function(i2,v2){ 
					if(jQuery(this).attr("href") != null && jQuery(this).attr("href").indexOf (EX) > -1  )
					{
						temo_I = i2 ;return false;
					};
				});
			}
		};

		jQuery.each($dt3  , function(i2,v2){
			if(i2 == temo_I ){jQuery(this).addClass("on"); jQuery(this).parent().addClass("on");}
			else{jQuery(this).removeClass("on"); jQuery(this).parent().removeClass("on");};
			if(jQuery(this).next("div").length ){jQuery(this).next("div").hide();};
		});
		/*if(jQuery("#wrap .lnbWrap" ).length){jQuery("#wrap .lnbWrap" ).css({"position":"absolute"});};*/
	};  
	//var $dt7  = jQuery("#wrap .lnbArea > nav > ul > li > .innerWrap > .inner > .depth2"); 
	var $dt7  = jQuery("#wrap .lnbArea > nav > ul > li > .innerWrap > div > div");  
	if($dt7.length )
	{
			$dt7.css({"display":""});
	} ;

	//jQuery("#wrap .lnbWrap").mouseover(function(){TopMenu.Over();});
	jQuery("#wrap .lnbWrap").mouseleave(function(){
		TopMenu.Leave();
	});

    
	jQuery("#wrap nav > ul > li > a").each(function (index) {
			jQuery(this).off("click").off("mouseover").off("focusin").attr({"rollt" :index })
			.click(function () { 
				if( $( window ).width() > 850 ){
					TopMenu.Hide(jQuery(this).attr("rollt"));
					if( jQuery(this).next("div").length )
					{
							TopMenu.Over();
							var class_  = jQuery(this).attr("class") != null ? jQuery(this).attr("class")  : "" ;  
							var $dd_ = jQuery(this).next("div") ; 
							if(class_   .indexOf ("on") > - 1) 
							{
								if(jQuery(this).attr("href")  != null && jQuery(this).attr("href")  .length  > 5  ) 
								{
									location.href = jQuery(this).attr("href") ;
								};
							}
							else
							{ 
								jQuery(this).parent().addClass("on");
								jQuery(this).addClass("on");
								if($dd_.length )$dd_.show();
							};
							return false;
					};
				} 
				else{
					if(jQuery(this).attr("href") != null )location.href = jQuery(this).attr("href") ;
				};
			})
			.mouseover(function () { 
				if( $( window ).width() > 850 ){ 
					TopMenu.Over();
					TopMenu.Hide(jQuery(this).attr("rollt"));
					if( jQuery(this).next("div").length )
					{
							TopMenu.Over();
							var class_  = jQuery(this).attr("class") != null ? jQuery(this).attr("class")  : "" ;  
							var $dd_ = jQuery(this).next("div") ; 
							if(class_   .indexOf ("on") > - 1) { }
							else
							{ 
								jQuery(this).parent().addClass("on");
								jQuery(this).addClass("on");
								if($dd_.length )$dd_.show();
							};
							return false;
					} ;
				} ;
			})
			.focusin(function () { jQuery(this).trigger("mouseover"); });
	});


	
		/*  모바일 상단 검색 */
		var $Top = jQuery("#wrap > header > .lnbWrap > .lnbArea > .search");
		var $TopBtn = jQuery("#wrap > header > .lnbWrap > .lnbArea > span > .mSrchBtn");
		if($Top.length && $TopBtn.length )
		{
			$Top.hide () ;
			$TopBtn.attr({"roll":"off"}).off("click").click(function(){
				var rollE = jQuery(this).attr("roll") != null ? jQuery(this).attr("roll"): "" ;
				var $Top2 = jQuery("#wrap > header > .lnbWrap > .lnbArea > .search");
				if(rollE == "on" )
				{
					/*hide*/
					if($Top2.length)$Top2.slideUp();
				}
				else
				{
					/*show*/
					if($Top2.length)$Top2.slideDown();
				};
				jQuery(this).attr({"roll": rollE == "on" ? "off":"on" })
			});
		};
		TOP2C_EX.obj_TXT = "#wrap > header > .lnbWrap > .lnbArea > .search > p > input";
		var $q = jQuery(TOP2C_EX.obj_TXT ); 
		if($q.length)
		{
				var $topsearchbtn = jQuery("#wrap > header > .lnbWrap > .lnbArea > .search > input");
				if($topsearchbtn.length)
				{ 
					$q .focusout(function (event) {
						//if(jQuery.trim(jQuery(this).val()) == "" ){if(jQuery(this).prev("label").length)jQuery(this).prev("label").show();};
					}).focus(function (event) {
						//if(jQuery(this).prev("label").length)jQuery(this).prev("label").hide();
					}).keydown(function (event) {
						if (event.which == 10 || event.which == 13) {   
							if(jQuery.trim(jQuery(this).val())== "" ){ }else{TOP2C_EX.FIND2();};
							return false ; 
						} 
					});
			
					if($topsearchbtn.length){ 
						$topsearchbtn.off("click").click(function(){ 
							TOP2C_EX.FIND2();
							return false;
						});   
					};
				}; 
		}; 
		/*  모바일 상단 검색 */
});


jQuery(document).ready(function(){
	var $m_btn = jQuery("#wrap > header > .lnbWrap > .lnbArea > p > button") ;
	var $m_menu = jQuery("#wrap > header > .mobileMenu") ;
	$m_menu.css({"zIndex":"344"});
	var $button = jQuery("#wrap > header > .mobileMenu > div > button") ;  
	if( $m_btn .length && $m_menu.length && $button.length )
	{
		$m_btn.attr({"role":"off"}).off("click").click(function(){
			var $m_menuE = jQuery("#wrap > header > .mobileMenu") ;
			var role = jQuery(this).attr("role");
			if(role  == "off")
			{
				$m_menuE.show().css({"right":"-108px"}).animate({"right":"0px"},"fast",function(){
				});
			}
			else {
				$m_menuE.animate({"right":"-108px"},"fast",function(){
					jQuery(this).hide() ;
				});
			};
			jQuery(this).attr({"role":role  == "off" ? "on":"off"});
			return false ;
		});
		$button.off("click").click(function(){
			var $m_btn2 = jQuery("#wrap > header > .lnbWrap > .lnbArea > p > button") ;
			$m_btn2.trigger("click");
			return false ;
		});
	};


	var m_menuBX = {
		Hide: function(e1){
			var $m_menuB2 = jQuery("#wrap > header > .mobileMenu > ul > li > a");
			jQuery.each($m_menuB2, function(index2){
				if(jQuery(this).attr("roll") != null && jQuery(this).attr("roll") != e1)
				{
					jQuery(this).parent().removeClass("on");
					jQuery(this).removeClass("on");
					var $dd_2 = jQuery(this).next("ul") ; 
					if($dd_2.length )$dd_2.slideUp();
				};
			});
		}
	};


	var $m_menuB = jQuery("#wrap > header > .mobileMenu > ul > li > a") ;
	if($m_menuB.length)
	{ 
		jQuery.each($m_menuB, function(index){ 
				if( jQuery(this).next("ul").length )
				{ 
						
						jQuery(this).attr({"roll":index}).off("click").click(function () { 
								m_menuBX.Hide(jQuery(this).attr("roll"));
								var class_ = jQuery(this).attr("class") != null ? jQuery(this).attr("class")  : "" ;  
								var href  = jQuery(this).attr("href") != null ? jQuery(this).attr("href")  : "" ;  
								var $dd_ = jQuery(this).next("ul") ; 
								if(class_   .indexOf ("on") > - 1) 
								{ 
									jQuery(this).parent().removeClass("on");
									jQuery(this).removeClass("on");
									if($dd_.length )$dd_.slideUp();
								}
								else
								{ 
									jQuery(this).parent().addClass("on");
									jQuery(this).addClass("on");
									if($dd_.length )$dd_.slideDown();
								}; 
								return false;
						}) ;
				} ; 
		});
	};




	var m_menuBX2 = {
		Hide: function(e1){
			if($( window ).width() > 727 &&  $( window ).width() < 850 ) 
			{
			}
			else{
				var $m_menuB2 = jQuery("#wrap > header > .mobileMenu > ul > li > ul > li > a");
				jQuery.each($m_menuB2, function(index2){
					if(jQuery(this).attr("roll2") != null && jQuery(this).attr("roll2") != e1)
					{
						jQuery(this).parent().removeClass("on");
						jQuery(this).removeClass("on");
						var $dd_2 = jQuery(this).next("ul") ; 
						if($dd_2.length )$dd_2.slideUp();
					};
				});
			};
		}
	};

	var $m_menuB2 = jQuery("#wrap > header > .mobileMenu > ul > li > ul > li > a") ;
	if($m_menuB2.length)
	{
		jQuery.each($m_menuB2, function(index){ 
				if( jQuery(this).next("ul").length )
				{ 
						
						jQuery(this).attr({"roll2":index}).off("click").click(function () { 
								m_menuBX2.Hide(jQuery(this).attr("roll2"));
								var class_ = jQuery(this).attr("class") != null ? jQuery(this).attr("class")  : "" ;  
								var href  = jQuery(this).attr("href") != null ? jQuery(this).attr("href")  : "" ;  
								var $dd_ = jQuery(this).next("ul") ; 
								if(class_   .indexOf ("on") > - 1) 
								{ 
									jQuery(this).parent().removeClass("on");
									jQuery(this).removeClass("on");
									if($dd_.length )$dd_.slideUp();
								}
								else
								{ 
									jQuery(this).parent().addClass("on");
									jQuery(this).addClass("on");
									if($dd_.length )$dd_.slideDown();
								}; 
								return false;
						}) ;
				} ; 
		});
	};

 
	
  
	
	var resize_ein2 = {
		load2: function(){
			var $m_menuBG = jQuery("#wrap > header > .mobileMenu") ;
			if($m_menuBG.length &&  $( window ).width() > 850 ) $m_menuBG.hide(); 
			if($( window ).width() < 850 ) TopMenu.Leave();
			if($( window ).width() > 727 &&  $( window ).width() < 850 ) 
			{
				jQuery("#wrap > header > .mobileMenu > ul > li > ul > li > ul") .show();
			};
		}
	}; 
	
	$( window ).resize(	function() {  
		resize_ein2.load2();
	}); 
	 
	
 
});

