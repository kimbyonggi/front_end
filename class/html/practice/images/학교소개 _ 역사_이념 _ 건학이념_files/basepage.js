document.write('<scr' + 'ipt src="/_js/Member/Member.js" type="text/javascript"></scr' + 'ipt>');
document.write('<scr' + 'ipt src="/_js/Member/MemberV2.js" type="text/javascript"></scr' + 'ipt>');
document.write('<scr'+'ipt src="/_js/calener/calpopup_new.js" type="text/javascript"></scr'+'ipt>');
document.write('<scr' + 'ipt src="/_js/Board/Schedule.js" type="text/javascript"></scr' + 'ipt>'); 
/*lightboxZoom*/
document.write('<link rel="stylesheet" type="text/css" href="/_css/jquery.lightbox-0.5.css" media="screen" />');
document.write('<scr' + 'ipt type="text/javascript" src="/_js/jquery/jquery.lightboxZoom-0.5.js"></scri' + 'pt>');
/*보드2*/ 
document.write('<scr' + 'ipt src="/_js/Board2/Board2Plus.js" type="text/javascript"></scr' + 'ipt>');
document.write('<scr' + 'ipt src="/_js/Board2/Board2.js" type="text/javascript"></scr' + 'ipt>');
document.write('<scr' + 'ipt src="/_js/Board2/BoardZ.js" type="text/javascript"></scr' + 'ipt>');
/*FCK editor*/
document.write('<scr' + 'ipt type="text/javascript" src="/common/WebEditor/fckeditor.js"></scr' + 'ipt>');
/*상담접수*/
document.write('<scr' + 'ipt src="/_js/Consult/Consult.js" type="text/javascript"></scr' + 'ipt>');
/*메인 보드*/
document.write('<scr' + 'ipt src="/_js/Board/Board_Main.js" type="text/javascript"></scr' + 'ipt>');
/*북마크리스트 */
document.write('<scr' + 'ipt src="/_js/Bookmark/Bookmark.js" type="text/javascript"></scr' + 'ipt>');
/*온라인투표*/
document.write('<scr' + 'ipt src="/_js/Poll/Poll.js" type="text/javascript"></scr' + 'ipt>');
/*Message*/
document.write('<scr' + 'ipt src="/_js/Message/Message.js" type="text/javascript"></scr' + 'ipt>');
/*Base64*/
document.write('<scr' + 'ipt src="/_js/Base64.js" type="text/javascript"></scr' + 'ipt>');
/*LeftMenu*/
document.write('<scr' + 'ipt src="/_js/LeftMenu/LeftMenu.js" type="text/javascript"></scr' + 'ipt>');
/*참여도*/
document.write('<scr' + 'ipt src="/_js/Board2/PageSatisfaction.js" type="text/javascript"></scr' + 'ipt>');
document.write('<scr' + 'ipt type="text/javascript" src="/_js/Silverlight.js"></scr' + 'ipt>');
document.write('<link href="/_js/datepick/css/jquery.datepick.css" rel="stylesheet" type="text/css" />');
document.write('<scr' + 'ipt src="/_js/datepick/js/jquery.datepick.js" type="text/javascript"></scr' + 'ipt>'); 

function Request(valuename)  
{
    var rtnval = "";
    var nowAddress = unescape(location.href);
    var parameters = (nowAddress.slice(nowAddress.indexOf("?")+1,nowAddress.length)).split("&");
    
    for(var i = 0 ; i < parameters.length ; i++){
        var varName = parameters[i].split("=")[0];
        if(varName.toUpperCase() == valuename.toUpperCase())
        {
            rtnval = parameters[i].split("=")[1];
            break;
        }
    }
    return rtnval;
}


/****************************************************************************************************************/
String.prototype.trim = function() {return this.replace(/(^\s*)|(\s*$)/g, "");}

 
String.prototype.replaceAll = function(str1, str2) {
    var temp_str = "";
    if (this.trim() != "" && str1 != str2) {

        temp_str = this.trim();
        while (temp_str.indexOf(str1) > -1){
            temp_str = temp_str.replace(str1, str2);
        }
    }
    return temp_str;
}
String.prototype.replaceAll2 = function(str1, str2)
{
  var temp_str = this.trim();
  temp_str = temp_str.replace(eval("/" + str1 + "/gi"), str2);
  return temp_str;
}

function MakeTopMenu(Flash_File ,Xml_File ,Flash_Height ,Flash_Width  )
{ 
    Flash_File = Flash_File.replaceAll(".swf","");
	AC_FL_RunContent( 'codebase','http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0'
	,'width',Flash_Width,'height',Flash_Height
	,'src',Flash_File+'?xmlRoute='+Xml_File,'quality','high'
	,'pluginspage','http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash'
	,'movie',Flash_File+'?xmlRoute='+Xml_File 
	,'wmode','transparent'); //end AC code
}




function MM_img(e, num )
{ 
    if(num== 1 ){e.src = e.src1;} else{e.src = e.src2;}
}
/****************************************************************************************************************/

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
function MM_openBrWindow2(theURL,winName,features) { //v2.0
    var arr = features.replace(/=/ig,',').split(',');
    var childWidth, childHeight;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i].trim().toLowerCase() == "width")
        {
            childWidth = eval(arr[i+1].replaceAll("px","")) ;
        }
        if(arr[i].trim().toLowerCase() == "height")
        {
            childHeight = eval(arr[i+1].replaceAll("px",""));
        }
    }
    var childTop = (screen.height-childHeight)/2;
    var childLeft = (screen.width-childWidth)/2;
    features += ',top='+childTop+',left='+childLeft;
    var NewWindow =  window.open(theURL,winName,features);
    NewWindow.focus();
}

function MM_openBrWindow2P(theURL, winName, features) { //v2.0
    var arr = features.replace(/=/ig, ',').split(',');
    var childWidth, childHeight;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].trim().toLowerCase() == "width") {
            childWidth = eval(arr[i + 1].replaceAll("px", ""));
        }
        if (arr[i].trim().toLowerCase() == "height") {
            childHeight = eval(arr[i + 1].replaceAll("px", ""));
        }
    }
    var childTop = (screen.height - childHeight) / 2;
    var childLeft = (screen.width - childWidth) / 2;
    features += ',top=' + childTop + ',left=' + childLeft;
    var NewWindow = window.open(theURL, winName, features);
    NewWindow.focus();
    return NewWindow;
}

/****************************************************************************************************************/









//v1.7
// Flash Player Version Detection
// Detect Client Browser type
// Copyright 2005-2007 Adobe Systems Incorporated.  All rights reserved.
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;

function ControlVersion()
{
	var version;
	var axo;
	var e;

	// NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

	try {
		// version will be set for 7.X or greater players
		axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		version = axo.GetVariable("$version");
	} catch (e) {
	}

	if (!version)
	{
		try {
			// version will be set for 6.X players only
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
			
			// installed player is some revision of 6.0
			// GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
			// so we have to be careful. 
			
			// default to the first public version
			version = "WIN 6,0,21,0";

			// throws if AllowScripAccess does not exist (introduced in 6.0r47)		
			axo.AllowScriptAccess = "always";

			// safe to call for 6.0r47 or greater
			version = axo.GetVariable("$version");

		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 4.X or 5.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = axo.GetVariable("$version");
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 3.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = "WIN 3,0,18,0";
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 2.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			version = "WIN 2,0,0,11";
		} catch (e) {
			version = -1;
		}
	}
	
	return version;
}

// JavaScript helper required to detect Flash Player PlugIn version information
function GetSwfVer(){
	// NS/Opera version >= 3 check for Flash plugin in plugin array
	var flashVer = -1;
	
	if (navigator.plugins != null && navigator.plugins.length > 0) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
			var descArray = flashDescription.split(" ");
			var tempArrayMajor = descArray[2].split(".");			
			var versionMajor = tempArrayMajor[0];
			var versionMinor = tempArrayMajor[1];
			var versionRevision = descArray[3];
			if (versionRevision == "") {
				versionRevision = descArray[4];
			}
			if (versionRevision[0] == "d") {
				versionRevision = versionRevision.substring(1);
			} else if (versionRevision[0] == "r") {
				versionRevision = versionRevision.substring(1);
				if (versionRevision.indexOf("d") > 0) {
					versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
				}
			}
			var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
		}
	}
	// MSN/WebTV 2.6 supports Flash 4
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
	// WebTV 2.5 supports Flash 3
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
	// older WebTV supports Flash 2
	else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
	else if ( isIE && isWin && !isOpera ) {
		flashVer = ControlVersion();
	}	
	return flashVer;
}

// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision)
{
	versionStr = GetSwfVer();
	if (versionStr == -1 ) {
		return false;
	} else if (versionStr != 0) {
		if(isIE && isWin && !isOpera) {
			// Given "WIN 2,0,0,11"
			tempArray         = versionStr.split(" "); 	// ["WIN", "2,0,0,11"]
			tempString        = tempArray[1];			// "2,0,0,11"
			versionArray      = tempString.split(",");	// ['2', '0', '0', '11']
		} else {
			versionArray      = versionStr.split(".");
		}
		var versionMajor      = versionArray[0];
		var versionMinor      = versionArray[1];
		var versionRevision   = versionArray[2];

        	// is the major.revision >= requested major.revision AND the minor version >= requested minor
		if (versionMajor > parseFloat(reqMajorVer)) {
			return true;
		} else if (versionMajor == parseFloat(reqMajorVer)) {
			if (versionMinor > parseFloat(reqMinorVer))
				return true;
			else if (versionMinor == parseFloat(reqMinorVer)) {
				if (versionRevision >= parseFloat(reqRevision))
					return true;
			}
		}
		return false;
	}
}

function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
  var str = '';
  if (isIE && isWin && !isOpera)
  {
    str += '<object ';
    for (var i in objAttrs)
    {
      str += i + '="' + objAttrs[i] + '" ';
    }
    str += '>';
    for (var i in params)
    {
      str += '<param name="' + i + '" value="' + params[i] + '" /> ';
    }
    str += '</object>';
  }
  else
  {
    str += '<embed ';
    for (var i in embedAttrs)
    {
      str += i + '="' + embedAttrs[i] + '" ';
    }
    str += '> </embed>';
  }

  document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
     , null
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
      case "id":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}


/****************************************************************************************************************/


/*********** Popup   ********************************************************************************************/
function http_https() {if( location.href.indexOf("https://")  == 0  ) {return "https://";}else{return "http://";}}
function createRequestObject() {if (window.XMLHttpRequest) {return xmlhttprequest = new XMLHttpRequest();}else if (window.ActiveXObject) {return xmlhttprequest = new ActiveXObject("Microsoft.XMLHTTP");}}  
function NOWS_() {var today = new Date();return "&now=" +today.getYear() +(today.getMonth()+1)+ today.getDate() +today.getHours() +today.getMinutes() +today.getSeconds()+Math.round(100*Math.random())  ;}

document.write('<sc'+'ript language="javascript" src="/_js/poplayer/zPopup.js"></scr'+'ipt>');
document.write('<scr'+'ipt language="javascript" src="/_js/poplayer/dom-drag.js"></scr'+'ipt>');
document.write('<li'+'nk rel="stylesheet" media="screen" type="text/css" href="/_js/poplayer/zPopup.css" />');


var POP_NUM= 0 ;

String.prototype.replaceAll = function(str1, str2) {
    var temp_str = "";
    if (this.trim() != "" && str1 != str2) {

        temp_str = this.trim();
        while (temp_str.indexOf(str1) > -1){
            temp_str = temp_str.replace(str1, str2);
        }
    }
    return temp_str;
}
String.prototype.replaceAll2 = function(str1, str2)
{
  var temp_str = this.trim();
  temp_str = temp_str.replace(eval("/" + str1 + "/gi"), str2);
  return temp_str;
}


function POP_LOAD (url,Window,Width,Height,Top,Left,Scrol)
{ 
    POP_NUM++;
    var Nurl = url.replaceAll("Popup/","");
    if( notice_getcookie(Nurl) != "done" )
    {
        var p_url = "?w="+Window+"&n="+POP_NUM;
        if(Window== "0") /*일반팝업창*/
        {
            if(Scrol == '1' ) {Scrol= 'yes';}else {Scrol= 'no';}
            window.open(http_https() + location.host +"/"+ASITEINFO.CLIENT_FOLDER+"/"+url+p_url , 'hwndPopup'+POP_NUM, 'left='+Left+',Top='+Top+',width='+Width+',height='+Height+',scrollbars='+Scrol+'' ) ;
        }
        else if(Window== "1") /*이동레이어*/
        {
            /*zpoplib.ShowPopup("&nbsp;&nbsp;",http_https() + location.host +"/"+ASITEINFO.CLIENT_FOLDER+"/"+url,Width,Height,Top,Left);*/
            zpoplib.ShowPopupNameAdd("pop_"+POP_NUM ,"&nbsp;&nbsp;",http_https() + location.host +"/"+ASITEINFO.CLIENT_FOLDER+"/"+url+p_url ,Width,Height,Top,Left);
        }
        else if(Window== "2") /*고정레이어*/
        {
            /*zpoplib.ShowPopup("&nbsp;",http_https() + location.host +"/"+ASITEINFO.CLIENT_FOLDER+"/"+url,Width,Height,Top,Left);*/
            zpoplib.ShowPopupNameAdd("pop_"+POP_NUM ,"&nbsp;",http_https() + location.host +"/"+ASITEINFO.CLIENT_FOLDER+"/"+url+p_url ,Width,Height,Top,Left);
        }
    }
}

function notice_getcookie( name ){
    var nameOfcookie = name + "=";
    var x = 0;
    while ( x <= document.cookie.length )
    {
            var y = (x+nameOfcookie.length);
            if ( document.cookie.substring( x, y ) == nameOfcookie ) {
                    if ( (endOfcookie=document.cookie.indexOf( ";", y )) == -1 )
                            endOfcookie = document.cookie.length;
                    return unescape( document.cookie.substring( y, endOfcookie ) );
            }
            x = document.cookie.indexOf( " ", x ) + 1;
            if ( x == 0 )
                    break;
    }
    return "";
}   


function notice_setcookie( name, value, expiredays )
{
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
} 
/*********** Popup   ********************************************************************************************/


/********** 배경 지정 ********************************************************************************************/
function BACK_GROUNDS(color_img,background_color,background_image)
{
    if(color_img != 5 )
    {
        ASITEINFO.COLOR_IMG = color_img ; 
        ASITEINFO.BACKGROUND_COLOR = background_color ;
        ASITEINFO.BACKGROUND_IMAGE = background_image ;
    }
    
    if(ASITEINFO.COLOR_IMG ==0 )
    {
        if(ASITEINFO.BACKGROUND_COLOR!="")
        {
            document.write('<style>BODY{background:'+ASITEINFO.BACKGROUND_COLOR+';}</style>');
        }
    }
    else
    {
        if (ASITEINFO.BACKGROUND_IMAGE != "") {
            document.write('<style>BODY{background: url(' + http_https() + location.host + ASITEINFO.BACKGROUND_IMAGE + ');background-color: ' + ASITEINFO.BACKGROUND_COLOR + '; }</style>');
        }
        else if (ASITEINFO.BACKGROUND_COLOR.trim() != "") {
            document.write('<style>BODY{background-color: ' + ASITEINFO.BACKGROUND_COLOR + '; }</style>');
        }
    }
    
    if(document.body.style.textAlign=="left"||document.body.style.textAlign=="")
    {
        document.write('<style>BODY{margin-left:'+ASITEINFO.MARGIN_LEFT+'px; }</style>');
    }
}
/********** 배경 지정 ********************************************************************************************/

/********** favicon  ********************************************************************************************/
if (ASITEINFO.FAVICON_img != "" && ASITEINFO.FAVICON == 'True') { 
    document.write('<link rel="shortcut icon" href="' + ASITEINFO.FAVICON_IMG + '?cls=res" type="image/x-ico" sizes="32x32" />');
    jQuery(document).ready(function () {
        jQuery('link[rel$=icon]').replaceWith(''); jQuery('head').append(jQuery('<link rel="shortcut icon" type="image/x-icon"/>').attr('href', ASITEINFO.FAVICON_IMG));
    });
}
/********** favicon  ********************************************************************************************/
/********** Title_Bar *******************************************************************************************/
if(ASITEINFO.TITLE_BAR != "" ){document.title=ASITEINFO.TITLE_BAR;}
/********** Title_Bar *******************************************************************************************/
/********** meta Keyword ****************************************************************************************/
if(ASITEINFO.SITEKEYWORD != "" ) {  document.write ( '<meta HTTP-EQUIV="Keyword" CONTENT="'+ASITEINFO.SITEKEYWORD+'">') ;}
/********** meta Keyword ****************************************************************************************/

/**********  사이트 컨텐츠보호 **********************************************************************************/
var message=""; // 경고 메세지를 넣으려면 여기에 입력하면 됩니다.
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if (document.layers||(document.getElementById&&!document.all)) {if (e.which==2||e.which==3) {(message);return false;}}}
var allowDrag = ["input","textarea","select"];allowDrag = allowDrag.join("|");
function disableselect(e){ if(allowDrag.indexOf(e.target.tagName.toLowerCase())==-1){return false; }} 
function reEnable(){ return true;}  
function unlock(){document.onselectstart = null;}
function lock(){document.onselectstart = function() {return false;};}
if( ASITEINFO.SECURITYON =='True')
{
    window.onload = function()
    {
        if (document.layers) {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
        else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

        document.oncontextmenu=new Function("return false");
        if(typeof(document.onselectstart)!="undefined")
        {
            document.onselectstart=new Function ("return false")  
        }
        else
        {
            document.onmousedown=disableselect 
            document.onclick=reEnable 
        }
        var ipText = document.getElementsByTagName("input");
        var ipArea = document.getElementsByTagName("textarea");
        
        for(var i=0;i<ipText.length;i++)
        {
            if(ipText[i].type=="text")
            {
                ipText[i].onmousemove=unlock;
                ipText[i].onmouseout=lock;
            }
        }
        
        for(var i=0;i<ipArea.length;i++)
        {
            ipArea[i].onmousemove=unlock;
            ipArea[i].onmouseout=lock;
        }
    }
} 
/**********  사이트 컨텐츠보호 **********************************************************************************/

/**********  URL주소 표시방식  **********************************************************************************/
/*function MAIN_LINK_GO(url_link) { if (ASITEINFO.SITELINKVIEW == '0') { location.href = url_link; } else { document.write("<frameset rows=\"*\" border=\"0\" frameSpacing=\"0\" frameBorder=\"0\"><frame src=\"" + url_link + "\" marginwidth=\"0\" marginheight=\"15\" scrolling=\"auto\" noresize></frameset>"); } }*/
function MAIN_LINK_GO(url_link) { if (ASITEINFO.SITELINKVIEW == '0') { location.href = url_link; } else { document.write("<frameset rows=\"0,*\" border=\"0\" frameSpacing=\"0\" frameBorder=\"0\"><frame src=\"/common/music/music.aspx\" marginwidth=\"0\" marginheight=\"15\" scrolling=\"auto\" noresize><frame src=\"" + url_link + "\" marginwidth=\"0\" marginheight=\"15\" scrolling=\"auto\" noresize></frameset>"); } }
/**********  URL주소 표시방식  **********************************************************************************/


/**********  msgposit방식  **********************************************************************************/

function absolutePosition(el) {
    var sLeft = 0, sTop = 0;
    var isDiv = /^div$/i.test(el.tagName);
    if (isDiv && el.scrollLeft) {
        sLeft = el.scrollLeft;
    }
    if (isDiv && el.scrollTop) {
        sTop = el.scrollTop;
    }
    var r = { x: el.offsetLeft - sLeft, y: el.offsetTop - sTop };
    if (el.offsetParent) {
        var tmp = absolutePosition(el.offsetParent);
        r.x += tmp.x;
        r.y += tmp.y;
    }
    return r;
}; 

function msgposit4(event)
{
    message_fnn(); 
    if (document.all) {
        document.getElementById("message_pop").style.posLeft = event.x + 4 + document.documentElement.scrollLeft;
        document.getElementById("message_pop").style.posTop = event.y + 10 + document.documentElement.scrollTop;
        if (fs_absolutePositionY != null) {
            document.getElementById("message_pop").style.posTop = fs_absolutePositionY + 30;
        }
    }
    else {
        document.getElementById("message_pop").style.left = (event.clientX + 4 + document.documentElement.scrollLeft) + "px";
        document.getElementById("message_pop").style.top = (event.clientY + 10 + document.documentElement.scrollTop) + "px";
    }
}
function msghide4(){
    message_fnn();
    document.getElementById("message_pop").innerHTML = '';
}
function pop_inputs(str, str2) {
    fs_absolutePositionY = null; 
    message_fnn();
    var text
    /*text = '<div align="center" style="width:50px; margin: 0px;padding: 0px;background-color:#ffffff; border:solid 1px #dec7b2">' + str2 + '</div>';*/
    text = '<table cellpadding=0 cellspacing=0 border=0 width=160 align=center><tr height=1><td rowspan=3 width=1></td><td width=1></td><td width=1></td><td bgcolor=#000000></td><td width=1></td><td width=1></td><td rowspan=3 width=1></td></tr><tr height=1><td colspan=2 bgcolor=#000000></td><td bgcolor=#FFFFFF></td><td colspan=2 bgcolor=#000000></td></tr><tr height=1><td bgcolor=#000000></td><td colspan=3 bgcolor=#FFFFFF></td><td bgcolor=#000000></td></tr></table><table cellpadding=0 cellspacing=0 border=0 bgcolor=#FFFFFF width=160 align=center><tr><td width=1 bgcolor=#000000></td><td valign=top> <table width=100% border=0 cellspacing=0 cellpadding=0><tr><td width=8 ></td><td>'
    text += '<font color=black style=font-size:11px align=left>' + str2
    text += '</td><td width=3 ></td></tr></table></td><td width=1 bgcolor=#000000></td></tr></table><table cellpadding=0 cellspacing=0 border=0 width=160 align=center><tr height=1> <td rowspan=3 width=1></td><td rowspan=2 width=1 bgcolor=#000000></td><td colspan=3 bgcolor=#FFFFFF></td><td rowspan=2 width=1 bgcolor=#000000></td><td rowspan=3 width=1></td></tr><tr height=1> <td width=1 bgcolor=#000000></td><td bgcolor=#FFFFFF></td><td width=1 bgcolor=#000000></td></tr><tr height=1> <td colspan=2></td><td bgcolor=#000000></td><td colspan=2></td></tr></table>'
    document.getElementById("message_pop").innerHTML = text
}
var fs_absolutePositionY = null; 
function pop_inputs_P(e, str, str2) {
    fs_absolutePositionY = absolutePosition(e).y
    message_fnn();
    var text
    /*text = '<div align="center" style="width:50px; margin: 0px;padding: 0px;background-color:#ffffff; border:solid 1px #dec7b2">' + str2 + '</div>';*/
    text = '<table cellpadding=0 cellspacing=0 border=0 width=160 align=center><tr height=1><td rowspan=3 width=1></td><td width=1></td><td width=1></td><td bgcolor=#000000></td><td width=1></td><td width=1></td><td rowspan=3 width=1></td></tr><tr height=1><td colspan=2 bgcolor=#000000></td><td bgcolor=#FFFFFF></td><td colspan=2 bgcolor=#000000></td></tr><tr height=1><td bgcolor=#000000></td><td colspan=3 bgcolor=#FFFFFF></td><td bgcolor=#000000></td></tr></table><table cellpadding=0 cellspacing=0 border=0 bgcolor=#FFFFFF width=160 align=center><tr><td width=1 bgcolor=#000000></td><td valign=top> <table width=100% border=0 cellspacing=0 cellpadding=0><tr><td width=8 ></td><td>'
    text += '<font color=black style=font-size:11px align=left>' + str2
    text += '</td><td width=3 ></td></tr></table></td><td width=1 bgcolor=#000000></td></tr></table><table cellpadding=0 cellspacing=0 border=0 width=160 align=center><tr height=1> <td rowspan=3 width=1></td><td rowspan=2 width=1 bgcolor=#000000></td><td colspan=3 bgcolor=#FFFFFF></td><td rowspan=2 width=1 bgcolor=#000000></td><td rowspan=3 width=1></td></tr><tr height=1> <td width=1 bgcolor=#000000></td><td bgcolor=#FFFFFF></td><td width=1 bgcolor=#000000></td></tr><tr height=1> <td colspan=2></td><td bgcolor=#000000></td><td colspan=2></td></tr></table>'
    document.getElementById("message_pop").innerHTML = text
}
function message_fnn() {
    var nu = false;
    try { if (document.getElementById("message_pop").id.length > 0) nu = true; } catch (err) { }
    if (!nu) {
        var blankdiv = document.createElement("DIV");
        blankdiv.id = "message_pop";
        blankdiv.style.zIndex = 1;
        blankdiv.style.borderLeft = "1px";
        blankdiv.style.borderTop = "1px";
        blankdiv.style.borderRight = "1px";
        blankdiv.style.borderbottom = "1px";
        blankdiv.style.position = "absolute";
        blankdiv.style.top = 0;
        blankdiv.style.left = 0;
        document.body.appendChild(blankdiv);
    } 
}
/*
style="cursor: pointer;"
onmouseover=\"pop_inputs('','"+temps.replaceAll("\"", "\\'").replaceAll("'", "’")+"')\" 
onmouseout=\"msghide4()\" 
onmousemove=\"msgposit4(event)\" 
*/
/**********  msgposit방식  **********************************************************************************/


/**********  CHKPLUS  ********************************************************************************************/

var remain_remain  = '';
function CheckStrLen(nametxt,maxlen)
{
	var temp; //들어오는 문자값...
	var msglen;
	msglen = maxlen*2;
	
	l = nametxt.value.length;
	tmpstr = "" ;

	if (l == 0)  
		remain_remain  = maxlen*2;
	else 
	{
		for(k=0;k<l;k++)
		{
			temp = nametxt.value.charAt(k);

			if (escape(temp).length > 4)
				msglen -= 2;
			else
				msglen--;
		
			if(msglen < 0) 
			{
				alert("총 영문 "+(maxlen*2)+"자 한글 " + maxlen + "자 까지 가능합니다.");
				nametxt.value = tmpstr;
				break;
			}
			else 
			{
				remain_remain  = msglen;
				tmpstr += temp;
			}
		}
	}
}
function CheckStrLen2(nametxt,maxlen)
{	
	if( nametxt.value.length  > maxlen)
	{
	    nametxt.value =nametxt.value.substring (0,maxlen );
	}  
}

function onlyNumber_2()
{
    var e1 = event.srcElement;
    var num = ".0123456789";
    event.returnValue = true;
    for(var i=0; i<e1.value.length; i++)
    {
    if(-1 == num.indexOf(e1.value.charAt(i)))
    event.returnValue = false;
    }
    if(!event.returnValue)
    e1.value="";
}
function onlyNumber_4() {
    var e1 = event.srcElement;
    var num = ".0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
    event.returnValue = true;
    for (var i = 0; i < e1.value.length; i++) {
        if (-1 == num.indexOf(e1.value.charAt(i)))
            event.returnValue = false;
    }
    if (!event.returnValue)
        e1.value = "";
    /*if( e1.value.indexOf('*') > -1 ){e1.value="*";}else{if(e1.value !=''){temp_NUMM = parseInt(e1.value );if(temp_NUMM  > 256 ) {e1.value = '0';}}}*/
}


/*적용할 텍스트 필드(id=no)의  키 동작 함수 호출*/
/*document.getElementById("no").onkeypress = onlynumber; */

function onlynumber(e) {
    var code = (window.event) ? event.keyCode : e.which;
    if ((code < 48) || (code > 57)) {
        return false;
    } else {
        return true;
    }
}

function NumericCheck(obj) {
    var nowvar = obj.value;
    var fixvar = nowvar.replace(/,/gi, "");

    obj.value = fixvar;


    if (obj.value != "") {
        if (!checknumber(obj.value)) {
            obj.focus();
        }
    }

}

function checknumber(evar) {
    var r = isNaN(evar.replace(/-/gi, ""));
    if (r) {
        alert("숫자만 입력 하세요");
        return false;
    } else {
        return true;
    }
}

function CHKPLUS (e_name , e_type , e_num )
{
    if(e_name != "" )
    {
        var Text_In = document.getElementById(e_name);

        if (Text_In) {
            if (e_type == "txt") {
                Text_In.onkeyup = function() { CheckStrLen(this, e_num); };
                Text_In.onblur = function() { CheckStrLen(this, e_num); };
                Text_In.onkeydown = function() { if (event.keyCode == 13) { return false; }; };
            }
            else if (e_type == "txt2") {
                Text_In.onkeyup = function() { CheckStrLen(this, e_num); onlyNumber_4(); };
                Text_In.onblur = function() { CheckStrLen(this, e_num); onlyNumber_4(); };
                Text_In.onkeydown = function() { if (event.keyCode == 13) { return false; }; };
                if (e_num > 0) Text_In.maxlength = e_num;
            }
            else if (e_type == "int") {
                if (document.all) {

                    Text_In.onkeyup = function() { onlyNumber_2(); };
                    Text_In.onblur = function() { NumericCheck(this); };
                    Text_In.onkeydown = function() { if (event.keyCode == 13) { return false; }; };
                    if (e_num != 0) Text_In.maxLength = e_num;
                }
                else {
                    Text_In = onlynumber;
                    if (e_num != 0)
                        Text_In.maxLength = e_num;
                }
            }

        }
    }
}
/**********  CHKPLUS  ********************************************************************************************/


/*로그아웃 링크*/
function log_out(e)
{
    if(e == null)
    {
        location.href='/xbin/LOGOUT.aspx';
    }
    else
    {
        location.href='/xbin/LOGOUT.aspx?url=/'+e;
    }
}



/*********** Popup   ********************************************************************************************/

var POP_NUM= 0 ;  
function MM_openBrWindow4(theURL,winName,features) { //v2.0
    var arr = features.replace(/=/ig,',').split(',');
    var childWidth, childHeight;
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i].trim().toLowerCase() == "width")
        {
            childWidth = eval(arr[i+1].replaceAll("px","")) ;
        }
        if(arr[i].trim().toLowerCase() == "height")
        {
            childHeight = eval(arr[i+1].replaceAll("px",""));
        }
    }
    
	/*** 백그라운드 레이어 ***/
	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		left = 0;
		top = 0;
		width = "100%";
		height = document.body.scrollHeight;
		backgroundColor = "#ffffff";
		filter = "Alpha(Opacity=50)";
		zIndex = 200;
	}
	obj.id = "objPopupLayerBg";
	document.body.appendChild(obj);
    POP_NUM++; 
    
    var childTop2 = (screen.height-childHeight)/2;
    var childLeft2 = (screen.width-childWidth)/2;
    
    if(theURL.indexOf('?') >-1) {theURL += "&n="+POP_NUM; } else {theURL += "?n="+POP_NUM; }
    zpoplib.ShowPopupNameAdd("pop_"+POP_NUM ,"&nbsp;&nbsp;",http_https() + location.host +theURL ,childWidth,childHeight ,childLeft2,childTop2,null,1);
}


function CLOSE_LAER( n )
{
    document.getElementById('objPopupLayerBg').removeNode(true);
    zpoplib.HideLayer('pop_'+n);
}
 

function POP_LOAD2 (url,Window,Width,Height,Top,Left,Scrol)
{  
    POP_NUM++;
    var Nurl = url.replaceAll("Popup/","");  
        
    var p_url = "?w="+Window+"&n="+POP_NUM; 
    if(Window== "0") /*일반팝업창*/
    {
        if(Scrol == '1' ) {Scrol= 'yes';}else {Scrol= 'no';}
        window.open(http_https() + location.host +"/"+ASITEINFO.CLIENT_FOLDER+"/"+url+p_url , 'hwndPopup'+POP_NUM, 'left='+Left+',Top='+Top+',width='+Width+',height='+Height+',scrollbars='+Scrol+'' ) ;
    }
    else if(Window== "1") /*이동레이어*/
    {
        zpoplib.ShowPopupNameAdd("pop_"+POP_NUM ,"&nbsp;&nbsp;",http_https() + location.host +"/"+ASITEINFO.CLIENT_FOLDER+"/"+url+p_url ,Width,Height,Top,Left);
    }
    else if(Window== "2") /*고정레이어*/
    {
        zpoplib.ShowPopupNameAdd("pop_"+POP_NUM ,"&nbsp;",http_https() + location.host +"/"+ASITEINFO.CLIENT_FOLDER+"/"+url+p_url ,Width,Height,Top,Left);
    } 
} 


/*********** Popup   ********************************************************************************************/

function MM_openBrWindow8(theURL, winName, features) { //v2.0
    var arr = features.replace(/=/ig, ',').split(',');
    var childWidth, childHeight;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() == "width")
            childWidth = eval(arr[i + 1]);
        if (arr[i].toLowerCase() == "height")
            childHeight = eval(arr[i + 1]);
    }
    var childTop = (screen.height - childHeight) / 2;
    var childLeft = (screen.width - childWidth) / 2
    features += ',top=' + childTop + ',left=' + childLeft; 
    var NewWindow = window.open(theURL, winName, features);
    NewWindow.focus();
    return NewWindow;
}
/********** UNLOAD       ****************************************************************************************/
function UNLOADESSPMM() {
    var today = new Date();
    var mppp = today.getYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + Math.round(100 * Math.random());
    jQuery.ajax({
        type: "POST",                   //타입 GET , POST
        datatype: "html",               //데이타타입 html, xml 등등
        url: "/xbin/UNLOAD.aspx",     //경로
        data: "d=" + mppp,
        async: false,                   //비동기 사용여부 true : 비동기, false : 동기
        success: function (data) {
        },    //성공시 실행할 함수
        error: function () {
            return false;
        }             //에러발생시 실행할 함수
    });
}
function LOADESPMM() {
    var today = new Date();
    var mppp = today.getYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + Math.round(100 * Math.random());
    jQuery.ajax({
        type: "POST",                   //타입 GET , POST
        datatype: "html",               //데이타타입 html, xml 등등
        url: "/xbin/LOAD.aspx",     //경로
        data: "d=" + mppp,
        async: false,                   //비동기 사용여부 true : 비동기, false : 동기
        success: function (data) {
        },    //성공시 실행할 함수
        error: function () {
            return false;
        }             //에러발생시 실행할 함수
    });
}
/********** UNLOAD       ****************************************************************************************/


/********** TOPC  ****************************************************************************************/
var TOPC =
{
    obj_DDL: 'PortalSearch',
    obj_TXT: '',
    obj_num: 0,
    DDL: function (e) {
        TOPC.obj_DDL = e.value.trim();
    },
    FIND: function (e) {
        TOPC.obj_TXT = e.value.trim();
        if (TOPC.obj_TXT == "") {
            alert("검색어을 입력하여 주십시오.");
            e.value = '';
            e.focus();
            return;
        }
        TOPC.obj_num++;
        if (TOPC.obj_num == 1) TOPC.GO();
    },
    FIND2: function (e) {
        if (document.getElementById("submit_settype")) { document.getElementById("submit_settype").value = "TOPC.FIND"; }
        TOPC.obj_TXT = e.value.trim();
        if (TOPC.obj_TXT == "") {
            alert("검색어을 입력하여 주십시오."); e.value = ''; e.focus();
            if (document.getElementById("submit_settype")) { document.getElementById("submit_settype").value = ""; }
            return false;
        }
        TOPC.GO();
        return true;
    },
    GO: function () {
        jQuery.ajax({
            type: "POST",                   //타입 GET , POST
            datatype: "html",               //데이타타입 html, xml 등등
            url: "/Common/MyPage/URL.aspx",     //경로
            data: "url=" + encodeURIComponent(TOPC.obj_DDL),
            async: false,                   //비동기 사용여부 true : 비동기, false : 동기
            success: function (data) {
                if (data.trim() != "") {
                    location.href = data + "?w=" + encodeURIComponent(TOPC.obj_TXT);
                }
            },    //성공시 실행할 함수
            error: function () {
                return false;
            }             //에러발생시 실행할 함수
        });
    }
}
/********** TOPC  ****************************************************************************************/


/********** Auto_Logout ****************************************************************************************/
function ETC_Auto_Logout() {
    if (notice_getcookie("USERID") != "") {
        if (ASITEINFO.ETC_AUTO_LOGOUT != 0) {
            setTimeout("ETC_Auto_Logout2()", 60000);
        }
    }
}
var ETC_Auto_Logout2_cnt = 0;
function ETC_Auto_Logout2() {
    ASITEINFO.ETC_AUTO_LOGOUT--;
    if (ASITEINFO.ETC_AUTO_LOGOUT == 0 && ETC_Auto_Logout2_cnt ==0 ) {
        ETC_Auto_Logout2_cnt++;
        log_out('');
    }
    if (ASITEINFO.ETC_AUTO_LOGOUT > 0) {
        setTimeout("ETC_Auto_Logout2()", 60000);
    }
}
ETC_Auto_Logout();
/********** Auto_Logout ****************************************************************************************/



function FlashLink(url, target) {
    if (target == "_blank") {
        window.open(url, "");
    }
    else if (target == "_self") {
        location.href = url;
    }
}
/********** ZOOM ****************************************************************************************/
var nowZoom = 1.0; /* 현재비율*/
var maxZoom = 1.5; /* 최대비율(500으로하면 5배 커진다)*/
var minZoom = 0.5; /* 최소비율*/

/*화면 키운다.*/
function zoomIn() {
    if (nowZoom < maxZoom) {
        nowZoom += 0.1; /*25%씩 커진다.*/
    }
    else {
        return;
    }
    var OS = navigator.appName;

    if (OS.indexOf("Microsoft") > -1) {
        document.body.style.zoom = nowZoom;
    } else {
        jQuery('body').css('-webkit-transform', 'scale(' + (nowZoom) + ')');
        jQuery('body').css('-webkit-transform-origin', '0 0');
        jQuery('body').css('-moz-transform', 'scale(' + (nowZoom) + ')');
        jQuery('body').css('-moz-transform-origin', '0 0');
        jQuery('body').css('-o-transform', 'scale(' + (nowZoom) + ')');
        jQuery('body').css('-o-transform-origin', '0 0');
    }
}


/*화면 줄인다.*/
function zoomOut() {
    if (nowZoom > minZoom) {
        nowZoom -= 0.1; /*25%씩 작아진다.*/
    }
    else {
        return;
    }
    var OS = navigator.appName;
    if (OS.indexOf("Microsoft") > -1) {
        document.body.style.zoom = nowZoom;
    } else {
        jQuery('body').css('-webkit-transform', 'scale(' + (nowZoom) + ')');
        jQuery('body').css('-webkit-transform-origin', '0 0');
        jQuery('body').css('-moz-transform', 'scale(' + (nowZoom) + ')');
        jQuery('body').css('-moz-transform-origin', '0 0');
        jQuery('body').css('-o-transform', 'scale(' + (nowZoom) + ')');
        jQuery('body').css('-o-transform-origin', '0 0');
    }
}

/*화면 원래대로*/
function zoomDefault() {
    nowZoom = 100;
    //document.body.style.zoom = nowZoom + "%";
    document.body.style.zoom = (nowZoom) / 100;
}
/********** ZOOM ****************************************************************************************/




/********** 내용에 숫자치환용 *********************************************************************************/
function parseIntZ(e) {
    var isNumber = 0;
    try { isNumber = parseInt(e, 10); } catch (err) { }
    if (isNaN(isNumber)) { isNumber = 0; }
    return isNumber;
}
function parseIntZ2(e) {
    var isNumber = 0;
    try { isNumber = parseFloat(e); } catch (err) { }
    if (isNaN(isNumber)) { isNumber = 0; }
    return isNumber;
}
/********** 내용에 숫자치환용 *********************************************************************************/


/********** OPTION *********************************************************************************/
var OPTION = {
    name: "",
    CLEAR: function(e) {
        OPTION.name = e;
        var obj_ = document.getElementById(OPTION.name);
        for (i = obj_.options.length; i >= 1; i--) {
            obj_.options.remove(i);
        }
    },
    CLEAR2: function(e) {
        var obj_ = document.getElementById(e);
        for (i = obj_.options.length; i >= 1; i--) {
            obj_.options.remove(i);
        }
    },
    CLEAR3: function(e) {
        var obj_ = e;
        for (i = obj_.options.length; i >= 1; i--) {
            obj_.options.remove(i);
        }
    },
    ADD: function(e1, e2) {
        var obj_ = document.getElementById(OPTION.name);
        var new_option = new Option(e2, e1);
        obj_.options.add(new_option);
    },
    ADD2: function(e0, e1, e2) {
        var obj_ = document.getElementById(e0);
        var new_option = new Option(e2, e1);
        obj_.options.add(new_option);
    },
    ADD3: function(e0, e1, e2) {
        var obj_ = e0;
        var new_option = new Option(e2, e1);
        obj_.options.add(new_option);
    }
}
/********** OPTION *********************************************************************************/

/********** SUBMIT *********************************************************************************/
var SUBMIT = {
    NUM: 0,
    SUBMITP: function() {
        SUBMIT.NUM++;
    },
    SUBMIT_CHK: function() {
        return (SUBMIT.NUM == 0 ? true : false);
    },
    SUBMIT_RESET: function() {
        SUBMIT.NUM = 0;
    }
}
/*
SUBMIT.SUBMITP();
return SUBMIT.SUBMIT_CHK();
*/
/********** SUBMIT *********************************************************************************/
/********** ROUNDS / FLOORS *********************************************************************************/
function ROUNDS(e1, e2) {
    var ret = e1;
    for (var n = 0; n < e2; n++) {
        ret = ret * 0.1;
    }
    ret = Math.round(ret);
    if (ret > 0) {
        for (var n = 0; n < e2; n++) {
            ret = ret * 10;
        }
    }
    return ret;
}

function FLOORS(e1, e2) {
    var ret = e1;
    for (var n = 0; n < e2; n++) {
        ret = ret * 0.1;
    }
    ret = Math.floor(ret);
    if (ret > 0) {
        for (var n = 0; n < e2; n++) {
            ret = ret * 10;
        }
    }
    return ret;
}
/********** ROUNDS / FLOORS *********************************************************************************/

/********** flashWrite  *************************************************************************************/
/* flashWrite(파일경로, 가로, 세로, 아이디, 배경색, 변수, 가로, 세로)*/
function flashWrite(url, w, h, id, bg, vars, w2, h2) {
    var over_html = "";
    if (w2 != null & h2 != null) {
        over_html = "onmouseover=\"this.width =" + w + ";this.height =" + h + ";"
        + " try{this.getElementsByTagName('EMBED')[0].style.width ='" + w + "px';this.getElementsByTagName('EMBED')[0].style.height ='" + h + "px';}catch(err){}"
        + "\" "
        + " onmouseout=\"this.width =" + w2 + ";this.height =" + h2 + ";"
        + " try{this.getElementsByTagName('EMBED')[0].style.width ='" + w2 + "px';this.getElementsByTagName('EMBED')[0].style.height ='" + h2 + "px';}catch(err){}"
        + "\" ";
        w = w2; h = h2;
    }

    /* 플래시 코드 정의*/
    var flashStr =
    "<object " + over_html + " classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='" + w + "' height='" + h + "' id='" + id + "' align='middle'>" +
    "<param name='allowScriptAccess' value='always' />" +
    "<param name='movie' value='" + url + "' />" +
    "<param name='FlashVars' value='" + vars + "' />" +
    "<param name='menu' value='false' />" +
    "<param name='quality' value='high' />" +
    "<param name='wmode' value='transparent' />"
    + "<embed src='" + url + "' FlashVars='" + vars + "' wmode='transparent' menu='false' quality='high'  "
    + " width='" + w + "' height='" + h + "' allowScriptAccess='always' "
    + " type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />"
    + "</object>";
    /* 플래시 코드 출력*/
    document.write(flashStr);
}
/********** flashWrite  *************************************************************************************/

/********** *GetSelectValue_Plus   **************************************************************************/
function AllCbx_ALL_Plus(ms, obj) {
    var affectvalue = obj.checked;
    if (typeof (eval("document.all." + ms)) == "undefined") {
        return;
    }
    var msms = eval("document.all." + ms);
    if (typeof (msms.length) == "undefined") {
        msms.checked = affectvalue;
    } else {
        for (i = 0; i < msms.length; i++) {
            msms[i].checked = affectvalue;
        }
    }
}
function GetSelectValue_Plus(arrno, ms) {
    var retval = "";

    if (typeof (eval("document.all." + ms)) == "undefined") {
        return retval;
    }
    var msms = eval("document.all." + ms);
    if (typeof (msms.length) == "undefined") {
        if (msms.checked) {
            var arr = msms.value.split('*');
            retval = arr[arrno] + "↓";
        }
    } else {
        for (i = 0; i < msms.length; i++) {
            if (msms[i].checked) {
                var arr = msms[i].value.split('*');
                retval += arr[arrno] + "↓";
            }
        }
    }
    return retval;
}
function GetSelectValue_Plus2(arrno, ms) {
    var retval = "";
    var msms = document.getElementsByName(ms);
    if (msms) {
        if (msms.length == 1) {
            if (msms[0].checked) retval += (retval == "" ? "" : ",") + msms[0].value.split('*')[arrno];
        }
        else {
            for (i = 0; i < msms.length; i++) { if (msms[i].checked) retval += (retval == "" ? "" : ",") + msms[i].value.split('*')[arrno]; }
        }
    }
    return retval;
}
/********** *GetSelectValue_Plus   **************************************************************************/

function MM_openBrWindow3(theURL, winName, features) { //v2.0
    var arr = features.replace(/=/ig, ',').split(',');
    var childWidth, childHeight;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].trim().toLowerCase() == "width") {
            childWidth = eval(arr[i + 1].replaceAll("px", ""));
        }
        if (arr[i].trim().toLowerCase() == "height") {
            childHeight = eval(arr[i + 1].replaceAll("px", ""));
        }
    }
    var childTop = (screen.height - childHeight) / 2;
    var childLeft = (screen.width - childWidth) / 2;
    features += ',top=' + childTop + ',left=' + childLeft;
    var NewWindow = window.open(theURL, winName, features);
    NewWindow.focus();
    return NewWindow;
}

var MENU_EX = {
    PRINT: function(e1) {

        var jsn_ = '';
        jsn_ += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n';
        jsn_ += '<html xmlns="http://www.w3.org/1999/xhtml">\r\n';
        jsn_ += '<meta http-equiv="X-UA-Compatible" content="IE=7" />\r\n';
        jsn_ += '<head>\r\n';
        jsn_ += '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\r\n';
        jsn_ += '<meta HTTP-EQUIV="imagetoolbar" CONTENT="no">\r\n';
        jsn_ += '<title>' + ASITEINFO.TITLE_BAR + '</title>\r\n';
        jsn_ += '<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">\r\n';
        jsn_ += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>\r\n';
        jsn_ += '<meta name="keywords" content="" />\r\n';

        /********** meta Keyword ****************************************************************************************/
        if (ASITEINFO.SITEKEYWORD != "") { jsn_ += ('<meta HTTP-EQUIV="Keyword" CONTENT="' + ASITEINFO.SITEKEYWORD + '">'); }
        /********** meta Keyword ****************************************************************************************/

        jsn_ += "<link href=\"/_css/common.css\" rel=\"stylesheet\" type=\"text/css\">";
        jsn_ += "<link href=\"" + RequestS.Dbimage + "CssJs/BasePage.css\" rel=\"stylesheet\" type=\"text/css\">";
        jsn_ += "<script type=\"text/javascript\" src=\"" + RequestS.Dbimage + "Menu/Site_info.js\"></script>";



//        jsn_ += ('<scr' + 'ipt src="/_js/Member/Member.js" type="text/javascript"></scr' + 'ipt>');
//        jsn_ += ('<scr' + 'ipt src="/_js/Member/MemberV2.js" type="text/javascript"></scr' + 'ipt>');
//        jsn_ += ('<scr' + 'ipt src="/_js/calener/calpopup_new.js" type="text/javascript"></scr' + 'ipt>');
//        jsn_ += ('<scr' + 'ipt src="/_js/Board/Schedule.js" type="text/javascript"></scr' + 'ipt>');


        /*보드2*/
        //jsn_ += ('<scr' + 'ipt src="/_js/prototype.js" type="text/javascript"></scr' + 'ipt>');
//        jsn_ += ('<scr' + 'ipt src="/_js/Board2/Board2Plus.js" type="text/javascript"></scr' + 'ipt>');
//        jsn_ += ('<scr' + 'ipt src="/_js/Board2/Board2.js" type="text/javascript"></scr' + 'ipt>');
//        /*FCK editor*/
//        jsn_ += ('<scr' + 'ipt type="text/javascript" src="/common/WebEditor/fckeditor.js"></scr' + 'ipt>');
//        /*상담접수*/
//        jsn_ += ('<scr' + 'ipt src="/_js/Consult/Consult.js" type="text/javascript"></scr' + 'ipt>');
//        /*메인 보드*/
//        jsn_ += ('<scr' + 'ipt src="/_js/Board/Board_Main.js" type="text/javascript"></scr' + 'ipt>');
//        /*북마크리스트 */
//        jsn_ += ('<scr' + 'ipt src="/_js/Bookmark/Bookmark.js" type="text/javascript"></scr' + 'ipt>');
//        /*온라인투표*/
//        jsn_ += ('<scr' + 'ipt src="/_js/Poll/Poll.js" type="text/javascript"></scr' + 'ipt>');
//        /*Message*/
//        jsn_ += ('<scr' + 'ipt src="/_js/Message/Message.js" type="text/javascript"></scr' + 'ipt>');
//        /*Base64*/
//        jsn_ += ('<scr' + 'ipt src="/_js/Base64.js" type="text/javascript"></scr' + 'ipt>');
//        /*LeftMenu*/
//        jsn_ += ('<scr' + 'ipt src="/_js/LeftMenu/LeftMenu.js" type="text/javascript"></scr' + 'ipt>');

        /********** favicon  ********************************************************************************************/
        if (ASITEINFO.FAVICON_img != "" && ASITEINFO.FAVICON == 'True') { jsn_ += ('<link rel="shortcut icon" href="' + ASITEINFO.FAVICON_img + '?cls=res" type="image/x-ico"/>'); }
        /********** favicon  ********************************************************************************************/


//        jsn_ += "<scr" + "ipt type=\"text/javascr" + "ipt\" src=\"" + RequestS.Dbimage + "CssJs/BasePage.js\"></scr" + "ipt>";
//        jsn_ += "<scr" + "ipt src=\"/_js/AC_RunActiveContent.js\" type=\"text/javascr" + "ipt\"></scr" + "ipt>";
//        jsn_ += "<scr" + "ipt src=\"" + RequestS.Dbimage + "Menu/Member_Seed.js\"  type=\"text/javascr" + "ipt\"></scr" + "ipt>";
//        jsn_ += "<scr" + "ipt src=\"" + RequestS.Dbimage + "Menu/Member_Agreement.js\"  type=\"text/javascr" + "ipt\"></scr" + "ipt>";
//        jsn_ += "<scr" + "ipt src=\"" + RequestS.Dbimage + "Menu/Site_Board.js\"  type=\"text/javascr" + "ipt\"></scr" + "ipt>";
//        jsn_ += "<scr" + "ipt src=\"" + RequestS.Dbimage + "Menu/Site_Board_Template.js\"  type=\"text/javascr" + "ipt\"></scr" + "ipt>";
//        jsn_ += "<scr" + "ipt src=\"" + RequestS.Dbimage + "Menu/Site_Schedule.js\"  type=\"text/javascr" + "ipt\"></scr" + "ipt>";
//        jsn_ += "<scr" + "ipt src=\"" + RequestS.Dbimage + "Menu/Site_Consult.js\"  type=\"text/javascr" + "ipt\"></scr" + "ipt>";
//        jsn_ += "<scr" + "ipt src=\"" + RequestS.Dbimage + "Menu/Site_Poll.js\"  type=\"text/javascr" + "ipt\"></scr" + "ipt>";
//        jsn_ += "<scr" + "ipt src=\"" + RequestS.Dbimage + "Menu/music.js\"  type=\"text/javascr" + "ipt\"></scr" + "ipt>";
        jsn_ += "<link href=\"" + RequestS.Dbimage + "CssJs/BasePage.css\" rel=\"stylesheet\" type=\"text/css\">";


        jsn_ += '<style>.noMore{position: absolute;right: 0;bottom: 0;width: 100%;padding:0;background-color: #f0f0f0;text-align: right;font-size: 11px;}</style>\r\n';


//        jsn_ += "<scr" + "ipt language=\"javascr" + "ipt\">";
//        jsn_ += "var RequestS.T=\"" + RequestS.T.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.c=\"" + RequestS.c.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.c1=\"" + RequestS.c1.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.c2=\"" + RequestS.c2.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.c3=\"" + RequestS.c3.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.w=\"" + RequestS.w.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.sn=\"" + RequestS.sn.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.page=\"" + RequestS.page.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.EX=\"" + RequestS.EX.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.Num=\"" + RequestS.Num.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.Num2=\"" + RequestS.Num2.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.MEMID=\"" + RequestS.MEMID.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.MEMMSG=\"" + RequestS.MEMMSG.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.MEMMSG1=\"" + RequestS.MEMMSG1.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.MEMMSG2=\"" + RequestS.MEMMSG2.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.MEMMSG3=\"" + RequestS.MEMMSG3.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var RequestS.Dbimage=\"" + RequestS.Dbimage.replaceAll2('"', '\\\"') + "\";";
//        jsn_ += "var PageBaseInfo={link:\"" + PageBaseInfo.link.replaceAll2('"', '\\\"') + "\"};";
//        jsn_ += "</scr" + "ipt>";



        jsn_ += "<scr" + "ipt type=\"text/javascr" + "ipt\" src=\"/_js/basepagePrint.js\"></scr" + "ipt>";
        jsn_ += '</head>\r\n';
        jsn_ += '<body class="preview">\r\n';
        jsn_ += '<div class="c_both">\r\n';
        jsn_ += '<div id="challengerVisual" class="LoutC" width="100%" valign="top"> '
        + document.getElementById("span_main_con").innerHTML.replaceAll2('script', 'noscript').replaceAll2('iframe', 'noiframe')
        + ' ';
        jsn_ += '</div>\r\n';
        jsn_ += '</div><sc' + 'ript language=javascr' + 'ipt>window.print();</sc' + 'ript>\r\n';
        jsn_ += '</body>\r\n';
        jsn_ += '</html>\r\n';
 
        var pr = MM_openBrWindow3("", "PRINT", "scrollbars=1,menubar=1,status=1,width=680,height=390,resizable=yes");
        pr.focus();
        pr.document.write(jsn_);
        pr.document.close();
    }
}


function onSilverlightError(sender, args) {
    var appSource = "";
    if (sender != null && sender != 0) {
        appSource = sender.getHost().Source;
    }

    var errorType = args.ErrorType;
    var iErrorCode = args.ErrorCode;

    if (errorType == "ImageError" || errorType == "MediaError") {
        return;
    }

    var errMsg = "Unhandled Error in Silverlight Application " + appSource + "\n";

    errMsg += "Code: " + iErrorCode + "    \n";
    errMsg += "Category: " + errorType + "       \n";
    errMsg += "Message: " + args.ErrorMessage + "     \n";

    if (errorType == "ParserError") {
        errMsg += "File: " + args.xamlFile + "     \n";
        errMsg += "Line: " + args.lineNumber + "     \n";
        errMsg += "Position: " + args.charPosition + "     \n";
    }
    else if (errorType == "RuntimeError") {
        if (args.lineNumber != 0) {
            errMsg += "Line: " + args.lineNumber + "     \n";
            errMsg += "Position: " + args.charPosition + "     \n";
        }
        errMsg += "MethodName: " + args.methodName + "     \n";
    }

    throw new Error(errMsg);
}



/*************** CARTE *************************************************************************************/
/* javascript:Wish.GO('MemLogin'); javascript:Wish.Logout('');*/
var Wish = {
    goNext: 0,
    Logout: function(e) {
        if (e == null) {
            location.href = '/xbin/LOGOUT.aspx';
        }
        else {
            location.href = '/xbin/LOGOUT.aspx?url=/' + e;
        }
    },
    GO: function(e1, e2) {
        e2 = (typeof (e2) == "undefined" ? "" : e2);
        e2 = (e2 == null ? "" : e2);

        if (Wish.goNext > 0) return;
        var remoteurl = "/COMMON/Board/NextGO.aspx";
        var remoteparams = "type=go&Next=" + e1 + "&pdn=" + XncodeUR(PageBaseInfo.domain)/*상품코드*/;
        Wish.goNext++; 

        jQuery.ajax({
            type: "POST",                   //타입 GET , POST
            datatype: "html",               //데이타타입 html, xml 등등
            url: remoteurl ,     //경로
            data: remoteparams,
            async: false,                   //비동기 사용여부 true : 비동기, false : 동기
            success: function (data) {
                try { 
                    location.href = data + e2;
                    Wish.goNext = 0;
                } catch (e) {
                    alert("Javascript Error -> " + e.description);
                }
            },    //성공시 실행할 함수
            error: function () {
                return false;
            }             //에러발생시 실행할 함수
        });
         
    },
    GOPop: function(e1, e2, Pname, wid, hig) {
        e2 = (typeof (e2) == "undefined" ? "" : e2);
        e2 = (e2 == null ? "" : e2);

        if (Wish.goNext > 0) return;
        var remoteurl = "/COMMON/Board/NextGO.aspx";
        var remoteparams = "type=go&Next=" + e1 + "&pdn=" + XncodeUR(PageBaseInfo.domain)/*상품코드*/
        Wish.goNext++;
         

        jQuery.ajax({
            type: "POST",                   //타입 GET , POST
            datatype: "html",               //데이타타입 html, xml 등등
            url: remoteurl ,     //경로
            data: remoteparams ,
            async: false,                   //비동기 사용여부 true : 비동기, false : 동기
            success: function (data) {
                try { 
                    zpoplib.ShowPopupNameAdd(Pname, "&nbsp;&nbsp;", http_https() + location.host + data + e2, wid, hig, null, null);
                    Wish.goNext = 0;
                } catch (e) {
                    alert("Javascript Error -> " + e.description);
                }
            },    //성공시 실행할 함수
            error: function () {
                return false;
            }             //에러발생시 실행할 함수
        });

         
    }
};
/*************** CARTE *************************************************************************************/
var z_row_color_over = "#f0f0f0";var z_row_color_out = "#ffffff";
function zRowaction(actiontype, obj) {
    if (actiontype == "over") {
        obj.style.backgroundColor = z_row_color_over;
    } else if (actiontype == "out") {
        obj.style.backgroundColor = z_row_color_out;
    }
} 


function DownloadStream(params,params1,params2)
{
    location.href="/COMMON/downloadstream.aspx?folder=" + params +"&sfname="+params1+"&fname="+params2;
}

function DownloadStream2(params,params1,params2)
{
    location.href="/COMMON/downloadstream.aspx?folder=" + encodeURIComponent(params) +"&sfname="+encodeURIComponent(params1 )+"&fname="+ encodeURIComponent( params2);
}
function DownloadStreamPX(params, params1) {
    location.href = "/COMMON/downloadstreampx.aspx?p1=" + encodeURIComponent(params) + "&p2=" + encodeURIComponent(params1)  ;
}





var main = {
    baind: function() {
        this.bainds("CODE=Board_0000180:5:1:45:/CmsHome/Community_01.aspx:80:55", "tab_board01");
        this.bainds("CODE=Board_0000181:5:1:45:/CmsHome/Community_03.aspx:80:55", "tab_board02");
        this.bainds("CODE=Board_0000327:3:3:45:/CmsHome/Community_02.aspx:102:70", "tab_board03");
        WuIpsiMain.Load();
    },
    bainds: function(str, obj_id) {
        var result;
        jQuery.ajax({
            type: "POST",                   //타입 GET , POST
            datatype: "html",               //데이타타입 html, xml 등등
            url: "/COMMON/Main/BoardV3.aspx",     //경로
            data: str + "&pdn=" + XncodeUR(PageBaseInfo.domain),
            async: false,                   //비동기 사용여부 true : 비동기, false : 동기
            success: function(data) {
                result = data;
                if (document.getElementById(obj_id)) {
                    if (obj_id != "tab_board03")
                        result = "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">" + result + "</table>";
                    else
                        result = "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"table-layout:fixed;\" ><tr>" + result + "</tr></table>";
                    document.getElementById(obj_id).innerHTML = result;
                }
            },    //성공시 실행할 함수
            error: function() {
                return false;
            }             //에러발생시 실행할 함수
        });

    }
};


/*------------------------------------ encodeURIComponent -----------------------------------------------*/
function XncodeUR(obj) {
    return encodeURI(encodeURIComponent(obj));
}
/*------------------------------------ encodeURIComponent -----------------------------------------------*/

/*************** WuIpsiMain *************************************************************************************/
var WuIpsiMain = {
    base: "/dbimage/WebData/Homeimg/",
    obj_img: new Array("btn_001", "btn_002"),
    obj_img_T: "img_tab3",
    tab_img: new Array("tab_board01", "tab_board02"),
    code: new Array("Board_0000180", "Board_0000181"),
    title: new Array("공지사항", "질문과답변"),
    linkgo: new Array("/CmsHome/Community_01.aspx", "/CmsHome/Community_03.aspx"),
    Move: true,
    Now: 0,
    Old: 0,
    Time: 3000,
    img1: new Array("main_bbs_title_on_01.gif", "main_bbs_title_on_02.gif"),
    img2: new Array("main_bbs_title_01.gif", "main_bbs_title_02.gif"),
    Load: function() {
        for (var k = 0; k < this.obj_img.length; k++) {
            var obj_1 = document.getElementById(this.obj_img[k]);
            if (obj_1) {
                with (obj_1.style) { cursor = "pointer"; };
                obj_1.onmouseover = function() {
                    WuIpsiMain.Move = false;
                    WuIpsiMain.ON(this.id, -1);
                }
                obj_1.onmouseout = function() {
                    WuIpsiMain.Move = true;
                }
                obj_1.onclick = function() {
                    WuIpsiMain.Linkg();
                }
            }
        }
        if (document.getElementById("btn_003")) {
            document.getElementById("btn_003").style.cursor = "pointer";
            document.getElementById("btn_003").onclick = function() {
                WuIpsiMain.Linkg();
            }
        }
    },
    ON: function(e, e2) {
        var numm = 0; if (e.length >= 5) numm = parseIntZ(e.substring(5)) - 1; else numm = e2;

        WuIpsiMain.Now = numm;
        var obj_3 = document.getElementById(WuIpsiMain.obj_img[WuIpsiMain.Now]);
        var obj_3_ = document.getElementById(WuIpsiMain.tab_img[WuIpsiMain.Now]);
        if (obj_3) { obj_3.src = this.base + this.img1[WuIpsiMain.Now]; };
        if (obj_3_) { obj_3_.style.display = ""; };
        if (WuIpsiMain.Now != WuIpsiMain.Old) {
            var obj_4 = document.getElementById(WuIpsiMain.obj_img[WuIpsiMain.Old]);
            var obj_4_ = document.getElementById(WuIpsiMain.tab_img[WuIpsiMain.Old]);
            if (obj_4) { obj_4.src = this.base + this.img2[WuIpsiMain.Old]; };
            if (obj_4_) { obj_4_.style.display = "none"; };
        }
        WuIpsiMain.Old = WuIpsiMain.Now;
    },
    OUT: function() { WuIpsiMain.Move = true; },
    GO: function(e) {
        if (WuIpsiMain.Move) { WuIpsiMain.ON("", WuIpsiMain.Now == (this.obj_img.length - 1) ? 0 : WuIpsiMain.Now + 1); }
        setTimeout("WuIpsiMain.GO();", WuIpsiMain.Time);
    },
    Linkg: function() {
        location.href = WuIpsiMain.linkgo[WuIpsiMain.Now];
    }
};
/*************** WuIpsiMain *************************************************************************************/

//===== UTIL ===========================================================================
var Helper = {
    Format: function (pStr, pArgs) {
        for (i = 0; i < pArgs.length; i++) {
            pStr = pStr.replaceAll("{P:" + i + "}", pArgs[i] + "");
        }
        return pStr;
    }
};
//===== UTIL ===========================================================================
//===== Cookies ===========================================================================
var DocCookies = {
    GetItem: function (sKey) {
        if (!sKey) { return null; }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    SetItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    RemoveItem: function (sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) { return false; }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },
    HasItem: function (sKey) {
        if (!sKey) { return false; }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    Keys: function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
        return aKeys;
    }
};
//===== Cookies ===========================================================================