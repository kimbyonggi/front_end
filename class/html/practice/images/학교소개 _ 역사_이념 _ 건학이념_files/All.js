var FOCUS = {
	TOP: function(e1,e2){
	},
	LEFT: function(e1,e2){	
		var $a0 = jQuery("#lnb_sub > ul > li a") ;
		var href = "" ;
		var Cnt  = 0 ;
		jQuery.each($a0 , function (){
			href = jQuery(this).attr("href") != null ? jQuery(this).attr("href") : "" ;
			if(href != "" && href.indexOf(e1) > -1 )
			{
				jQuery(this).addClass("on");
				jQuery(this).parent().addClass("on");
				var $ul = jQuery(this).next("ul") ; if($ul .length )$ul .show () ; 
				jQuery(this).parent().parent().show () ;
				var $li = jQuery(this).parent().parent().parent();
				if($li.length)$li.addClass("on");
				Cnt  ++ ;
			};
		});
		if(Cnt == 0 && e2 < 4 && e1.indexOf ('_') > -1)
		{
			e1= e1.indexOf("_") > -1 ? e1.substring(0 , e1.lastIndexOf("_") ) : e1;
			e2++ ; FOCUS.LEFT(e1,e2);
		};
	},
	TAB: function(e1){
		var $tabmenu = jQuery(".tabmenu > ul > li > span > a" );
		var Cnt = 0 ,href ="" ;
		jQuery.each($tabmenu , function(i,v){
			href = jQuery(this).attr("href") != null ? jQuery(this).attr("href") : "" ;
			if(href == e1 ){ Cnt ++ ;};
		});
		if(Cnt  == 1 )
		{
			var $on = jQuery(".tabmenu > ul > li.on"); if($on .length )$on .removeClass("on") ;
			jQuery.each($tabmenu , function(i,v){
				href = jQuery(this).attr("href") != null ? jQuery(this).attr("href") : "" ;
				if(href == e1 ){
					jQuery(this).parent().parent().addClass("on");  
					return true ;
				};
			});
		};
	},
	RESET: function(){
		var $a0 = jQuery("#lnb_sub > ul > li.on"); if($a0.length){$a0.removeClass("on");};
		var $a1 = jQuery("#lnb_sub > ul > li > ul > li.on"); if($a1.length){$a1.removeClass("on");};
		var $a2 = jQuery("#lnb_sub > ul > li > ul > li > a.on"); if($a2.length){$a2.removeClass("on");};
	}
};


var TOPC_EX = {
    obj_DDL: 'PortalSearch',
    obj_TXT: '',
    obj_num: 0,
    Next : "/CmsHome/Etc08.aspx",
	FIND2 : function (){    
		var $q = jQuery(TOPC_EX.obj_TXT) ;
		if( $q.length)
		{
			TOPC_EX.obj_TXT = jQuery.trim($q.val());		
			if (TOPC_EX.obj_TXT == "" || TOPC_EX.obj_TXT == "통합검색") {
				alert("검색어을 입력하여 주십시오."); 
				$q.val("");
				$q.focus(); 
				return  false ;
			}
			TOPC_EX.obj_num++; 
			 
			if( TOPC_EX.obj_num== 1 ) TOPC_EX.GO();
		} 
	},
    GO: function() {   
	location.href = TOPC_EX.Next + "?w=" + encodeURI(encodeURIComponent(TOPC_EX.obj_TXT));
    }
};

jQuery(document).ready(function(){
		/*start 파일 다운로드 관련*/
		var $D  = jQuery("a.download") ;
		if($D.length )
		{
			$D.each(function(i,v){
				var href = jQuery(this).attr("href");
				if(href != null )
				{ 
					if(href.indexOf('/') > -1 && href.split('/')[1].toLowerCase()== "dbimage" )
					{
						jQuery(this) .click(function(){  

		var href2 = jQuery(this).attr("href"); 
		var params0 = href2.substring( href2 .indexOf('/') + 1, href2 .lastIndexOf('/')) ;
		params0 = params0.indexOf('/') > -1  ? params0.substring( params0 .indexOf('/')+ 1 , params0.length) : params0;
		params0 = params0.indexOf('/') > -1  ? params0.substring( params0 .indexOf('/')+ 1 , params0.length) : params0;
		var params1 = href2.substring( href2 .lastIndexOf('/')+1 ,href2.length);
		var locat ="/COMMON/downloadstream.aspx?folder=" 
		+ encodeURIComponent(params0) 
		+"&sfname="+encodeURIComponent( params1 )
		+"&fname="+ encodeURIComponent( params1 ); 
		location.href = (locat); 

							return false;
						});
					}; 
				};
			});
		};
		/*end 파일 다운로드 관련*/




		/* start left menu slider */
		var $a0 = jQuery("#lnb_sub > ul > li > a"); 
			jQuery.each( $a0 ,function(i,v) { 
			if( jQuery(this).next("ul").length  )
			{ 
				jQuery(this).click(function(){
					var $ul = jQuery(this).next("ul");
					var classS= $ul .attr("class") != null ?$ul .attr("class")  :""  ; 
					if( classS .indexOf("on") > -1)
					{
						$ul.slideUp();$ul .removeClass("on");
					}
					else
					{
						$ul.slideDown();$ul .addClass("on");
					};
					var $ul_on = jQuery("#lnb_sub > ul > li > ul.on").not ($ul ); 
					if($ul_on.length){
						$ul_on.removeClass("on");
						$ul_on.slideUp();
					};
					return false;
				}); 
				var $ul2 = jQuery(this).next("ul");
				$ul2.hide();

			};
		});
		/* end left menu slider */



		/* start sub tob menu*/
		var AuctionB = PageBaseInfo.Auction ; 
		AuctionB = AuctionB .indexOf(".") > -1 ? AuctionB.substring(0 , AuctionB .indexOf(".") ) : AuctionB ;
		
		 
		FOCUS.RESET();
		FOCUS.TOP(AuctionB,0);
		FOCUS.LEFT(AuctionB,0);
		FOCUS.TAB(PageBaseInfo.Auction);
		/* end sub tob menu*/





		/* start history focus */
		if( jQuery(".history").length ) {
			var $dt  = jQuery(".history > dt") ;
			var class_ = "" ;
			jQuery.each($dt  , function(i,v){
					class_  = jQuery(this).attr("class") != null ?jQuery(this).attr("class")  : "" ;
					if(class_   .indexOf ("opened") > - 1) 
					{
							
					}
					else{
						var $dd = jQuery(this).next("dd") ;
						if($dd .length ){
							$dd .hide() ;
						};
					};
			});


			var $dt2  = jQuery(".history > dt > a") ;
			jQuery.each($dt2  , function(i,v){
				jQuery(this).click(function(){
					var $dt3  = jQuery(".history > dt.opened").not(jQuery(this).parent()) ;
					if($dt3.length )
					{
						jQuery.each($dt3  , function(i2,v2){
							jQuery(this).removeClass("opened");
							if(jQuery(this).next("dd").length ){
								jQuery(this).next("dd").slideUp();
							};
						});
					};
					class_  = jQuery(this).parent().attr("class") != null ?jQuery(this).parent().attr("class")  : "" ;
 
					var $dd_ = jQuery(this).parent().next("dd") ;
					if(class_   .indexOf ("opened") > - 1) 
					{
							jQuery(this).parent().removeClass("opened");
							if($dd_.length )$dd_.slideUp();
					}
					else{ 
							jQuery(this).parent().addClass("opened");
							if($dd_.length )$dd_.slideDown();
					};


					return false;
				});
			});
		};
		/* end history focus */






	
		TOPC_EX.obj_TXT = "#topquery";
		var $q = jQuery(TOPC_EX.obj_TXT );
		if($q.length)
		{
			$q .focusout(function (event) {
				if(jQuery.trim(jQuery(this).val()) == "" )
				{
					if(jQuery(this).prev("label").length)jQuery(this).prev("label").show();
				}
			}).focus(function (event) {
				if(jQuery(this).prev("label").length)jQuery(this).prev("label").hide();
			}).keydown(function (event) {
				if (event.which == 10 || event.which == 13) {   
					if(jQuery.trim(jQuery(this).val())== "" )
					{ 
						theText.prev("label").show();
					}
					else
					{
						TOPC_EX.FIND2();
					} 
					return false ; 
				} 
			});
	
			$q .next("a").click(function(){
				TOPC_EX.FIND2();
				return false;
			}); 
	
			$q .next("input[type=button]").click(function(){
				TOPC_EX.FIND2();
				return false;
			}); 
	
		};


	var resize_ein = {
		load: function(){
				var $vx = jQuery(".lnbWrap") ;
				if( $vx .length ) {
					if( $( window ).width() > 1024 )
					{
						if( $vx.css("position")  == null || $vx.css("position") != "absolute" ) $vx.css({"position":"absolute"});
					}
					else
					{
						if( $vx.css("position")  != null || $vx.css("position") != "relative" ) $vx.css({"position":"relative"});
					};
				};

		}
	}; 
	if ($.browser.msie && jQuery.browser.version <= 8.0) {   
			$( window ).resize(	function() {  
				resize_ein.load();
			});
			resize_ein.load();
	}; 


	/* start 대학/대학원 대학명칭으로 변경 기능 */
	if( PageBaseInfo.Auction.indexOf("Uversity") > -1  )
	{
		if( PageBaseInfo.Auction.indexOf("Uversitylife") > -1  ){
		}
		else{
			var VBX_2 ="" ,VBX_3 ="";
			if( RequestS.DATAE != null && RequestS.DATAE . length > 2 )
			{
				jQuery.each( RequestS.DATAE , function(i,v){
					jQuery.each( v , function(i2,v2){if(i2 == "sub_2" ){VBX_2 = v2 ;}else if(i2 == "sub_3" ){VBX_3 = v2 ;} ; });
				});
			};
			if(VBX_2 != "" ){jQuery("#pageTitle").html(VBX_2);};
		};
	};
	/* end 대학/대학원 대학명칭으로 변경 기능 */
});





























