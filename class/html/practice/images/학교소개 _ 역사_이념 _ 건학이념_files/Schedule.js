var BoardSubmit = 0;

///var banner_1_mouseEvent = 1;
/* banner_roll("div태그 id", 배너1개높이, 딜레이, 1칸이동속도, 0);*/
function banner_roll(div_id, banner_height, banner_delay, banner_speed, this_height) {
    try { 
        var obj_mm = document.getElementById(div_id + "_mouseEvent").value ;
        if (obj_mm == "1" ) {
            var div_tag = document.getElementById(div_id);
            var a_tag, i;
            this_height++;
            if (this_height < banner_height) {
                div_tag.style.top = -this_height;
                setTimeout("banner_roll('" + div_id + "', " + banner_height + ", " + banner_delay + ", " + banner_speed + ", " + this_height + ");", banner_speed);
            }
            else {
                a_tag = div_tag.getElementsByTagName("TABLE");
                div_tag.appendChild(a_tag[0]);
                div_tag.style.top = 0;
                setTimeout("banner_roll('" + div_id + "', " + banner_height + ", " + banner_delay + ", " + banner_speed + ", 0);", banner_delay);
            }
        }
        else {
            setTimeout("banner_roll('" + div_id + "', " + banner_height + ", " + banner_delay + ", " + banner_speed + ", " + this_height + ");", banner_speed);
        }
    } catch (err) { }
    return true;
}


function notice_getcookie2(name) {
    var nameOfcookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
        var y = (x + nameOfcookie.length);
        if (document.cookie.substring(x, y) == nameOfcookie) {
            if ((endOfcookie = document.cookie.indexOf(";", y)) == -1)
                endOfcookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfcookie));
        }
        x = document.cookie.indexOf(" ", x) + 1;
        if (x == 0)
            break;
    }
    return "";
}

function notice_setcookie2(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}


function http_https() { if (location.href.indexOf("https://") == 0) { return "https://"; } else { return "http://"; } }
String.prototype.trim = function() { return this.replace(/(^\s*)|(\s*$)/gi, ""); }
String.prototype.replaceAll = function(str1, str2) { var temp_str = ""; if (this.trim() != "" && str1 != str2) { temp_str = this.trim(); while (temp_str.indexOf(str1) > -1) { temp_str = temp_str.replace(str1, str2); } } return temp_str; }
String.prototype.replaceAll2 = function(str1, str2) { var temp_str = this.trim(); temp_str = temp_str.replace(eval("/" + str1 + "/gi"), str2); return temp_str; }
function createRequestObject() { if (window.XMLHttpRequest) { return xmlhttprequest = new XMLHttpRequest(); } else if (window.ActiveXObject) { return xmlhttprequest = new ActiveXObject("Microsoft.XMLHTTP"); } }


function REPLACES(e) {
    e = e + '';
    return "<![CDATA[" + e + "]]>";
}   
 
var Schedule_TYPE1 = new Array();
var Schedule_TYPE2 = new Array();
var Schedule_TYPE3 = new Array();
var Schedule_TYPE4 = new Array();
var Schedule_TYPE5 = new Array();
var Schedule_TYPE6 = new Array();
var Schedule_TYPE7 = new Array();
var Schedule_TYPE8 = new Array();
var Schedule_TYPE9 = new Array();
var Schedule_TYPE10 = new Array();
var nummm_Schedule = 0;
var Seed_Schedule_n = false;



var Schedule_title = new Array();
var Schedule_Ncode = new Array();
var Schedule_SkinType = new Array();
var Schedule_Align = new Array();
var Schedule_Twidth = new Array();
var Schedule_WriterDevice = new Array();
var Schedule_AdminDevice = new Array();
var Schedule_MiniUsed = new Array();
var Schedule_CopywriterUsed = new Array();
var Schedule_ContactAddress = new Array();
var Schedule_ContactAddress2 = new Array();
var Schedule_EmailWrite = new Array();
var Schedule_EmailWrite2 = new Array();
var Schedule_TitleWrite = new Array();
var Schedule_TitleWrite2 = new Array();
var Schedule_TitleWrite3 = new Array();
var Schedule_Editer = new Array();
var Schedule_FileUpUsed = new Array();
var Schedule_FileUpSize = new Array();
var Schedule_FileUpCount = new Array();
var Schedule_FileUpType = new Array();
var Schedule_BadnessWordUsed = new Array();
var Schedule_BadnessWord = new Array();
var Schedule_SpamUsed = new Array();
var Schedule_IpUsed = new Array();
var Schedule_EmailUsed = new Array();
var Schedule_bg = new Array();
var Schedule_bgcolor = new Array();
var Schedule_bgimage = new Array();
var Schedule_listint = new Array();
var Schedule_listbgcolor1 = new Array();
var Schedule_listbgcolor2 = new Array();
var Schedule_listbgcolor3 = new Array();
var Schedule_listbgimage = new Array();
var Schedule_ListTopFontColor = new Array();
var Schedule_BoardHrColor = new Array();
var Schedule_ListTitleColorOff = new Array();
var Schedule_ListTitleColorOn = new Array();

var Schedule_WriteBTN = new Array();
var Schedule_LIstBTN = new Array();
var Schedule_EditeBTN = new Array();
var Schedule_DeleteBTN = new Array();
var Schedule_CommentBTN = new Array();
var Schedule_SaveBTN = new Array();
var Schedule_CancelBTN = new Array();
var Schedule_preBTN = new Array();
var Schedule_nextBTN = new Array();
var Schedule_NpreBTN = new Array();
var Schedule_NnextBTN = new Array();

var Schedule_WriteBTN_W = new Array();
var Schedule_LIstBTN_W = new Array();
var Schedule_EditeBTN_W = new Array();
var Schedule_DeleteBTN_W = new Array();
var Schedule_CommentBTN_W = new Array();
var Schedule_SaveBTN_W = new Array();
var Schedule_CancelBTN_W = new Array();
var Schedule_preBTN_W = new Array();
var Schedule_nextBTN_W = new Array();
var Schedule_NpreBTN_W = new Array();
var Schedule_NnextBTN_W = new Array();

var Schedule_WriteBTN_H = new Array();
var Schedule_LIstBTN_H = new Array();
var Schedule_EditeBTN_H = new Array();
var Schedule_DeleteBTN_H = new Array();
var Schedule_CommentBTN_H = new Array();
var Schedule_SaveBTN_H = new Array();
var Schedule_CancelBTN_H = new Array();
var Schedule_preBTN_H = new Array();
var Schedule_nextBTN_H = new Array();
var Schedule_NpreBTN_H = new Array();
var Schedule_NnextBTN_H = new Array();


var Schedule_TNwidth = new Array();
var Schedule_TNbgcolor = new Array();
var Schedule_TopHTML = new Array();
var Schedule_FotHTML = new Array();

var Schedule_COll = new Array("title", "Ncode", "SkinType", "Align", "Twidth", "WriterDevice", "AdminDevice", "MiniUsed", "CopywriterUsed", "ContactAddress", "ContactAddress2", "EmailWrite", "EmailWrite2", "TitleWrite", "TitleWrite2", "TitleWrite3", "Editer", "FileUpUsed", "FileUpSize", "FileUpCount", "FileUpType", "BadnessWordUsed", "BadnessWord", "SpamUsed", "IpUsed", "EmailUsed", "bg", "bgcolor", "bgimage", "listint", "listbgcolor1", "listbgcolor2", "listbgcolor3", "listbgimage", "ListTopFontColor", "BoardHrColor", "ListTitleColorOff", "ListTitleColorOn"
, "WriteBTN", "LIstBTN", "EditeBTN", "DeleteBTN", "CommentBTN", "SaveBTN", "CancelBTN", "preBTN", "nextBTN", "NpreBTN", "NnextBTN"
, "WriteBTN_W", "LIstBTN_W", "EditeBTN_W", "DeleteBTN_W", "CommentBTN_W", "SaveBTN_W", "CancelBTN_W", "preBTN_W", "nextBTN_W", "NpreBTN_W", "NnextBTN_W"
, "WriteBTN_H", "LIstBTN_H", "EditeBTN_H", "DeleteBTN_H", "CommentBTN_H", "SaveBTN_H", "CancelBTN_H", "preBTN_H", "nextBTN_H", "NpreBTN_H", "NnextBTN_H"
, "TNwidth", "TNbgcolor", "TopHTML", "FotHTML");
var Schedule_COll_BTN = new Array("WriteBTN", "LIstBTN", "EditeBTN", "DeleteBTN", "CommentBTN", "SaveBTN", "CancelBTN", "preBTN", "nextBTN", "NpreBTN", "NnextBTN");

var PRINT = {
    obj: null,
    BTN: function(value) {
        var int_font = parseInt(document.getElementById("bbs_content").value);
        if (value == 'P') {
            int_font += 3;
            document.getElementById("bbs_content").value = int_font;
            document.getElementById("bbs_content").style.fontSize = int_font + 'px';
        } else if (value == 'M') {
            int_font -= 3;
            if (int_font <= 5) int_font = 5;
            document.getElementById("bbs_content").value = int_font;
            document.getElementById("bbs_content").style.fontSize = int_font + 'px';
        } else if (value == 'PRINT') {

            var oWindow = window.open('', 'wnd_report_print', 'scrollbars=yes,width=750,height=600,top=0,left=0');
            try {
                if (typeof (document.all.divblankfrm) == "undefined") {
                    var blankdiv = document.createElement("DIV");
                    blankdiv.id = "divblankfrm";
                    blankdiv.style.display = "none";
                    blankdiv.style.zIndex = 9998;
                    var htmls = '<form name="blankfrm" id="blankfrm" method="post">';
                    htmls += '<input type="hidden" name="NHTML1" id="NHTML1">';
                    htmls += '<input type="hidden" name="NHTML2" id="NHTML2">';
                    htmls += '<input type="hidden" name="NHTML3" id="NHTML3">';
                    htmls += '<input type="hidden" name="NHTML4" id="NHTML4">';
                    htmls += '</form>';
                    blankdiv.innerHTML = htmls;
                    document.body.appendChild(blankdiv);
                }
            } catch (e) { } 

            document.getElementById("NHTML1").value = "";
            document.getElementById("NHTML1").value += "<span class=\"bold\">" + document.getElementById("bbs_title").innerHTML + "</span>";
            document.getElementById("NHTML1").value += "<hr/>";
            document.getElementById("NHTML1").value += "<img src=\"/img_bbs/ico_dot_02.gif\" align=\"middle\" />작성일 :" + document.getElementById("bbs_dadate").innerHTML;
            document.getElementById("NHTML1").value += "<img src=\"/img_bbs/ico_dot_02.gif\" align=\"middle\" />작성자 :" + document.getElementById("bbs_writer").innerHTML;
            document.getElementById("NHTML1").value += "<hr/>";
            document.getElementById("NHTML1").value += document.getElementById("bbs_content").innerHTML;


            var hidfrm = document.blankfrm; //  document.forms["blankfrm"];
            hidfrm.action = "/COMMON/Print/nwd_print.aspx";
            hidfrm.target = "wnd_report_print";
            hidfrm.submit();
        }
    }
}


var Schedule = {
    obj: null,
    MM_: null,
    HTML: null,
    none:"none",
    MAKE: function(e, e1, e2) /*보드 리스트*/
    {
        if (e2 == null) e2 = "";
        if (e == 'LOAD' || e == 'MAIN') {
            for (var nn = 0; nn < Site_Schedule.length; nn++) {
                if (Site_Schedule[nn] == e1) {
                    Seed_Schedule_n = true;
                    break;
                }
            }
            Schedule.MM_ = e;

            if (Seed_Schedule_n) {
                nummm_Schedule++;

                for (NCO = 0; NCO < Schedule_COll.length; NCO++) {
                    var NN_obj1 = eval("Schedule_" + e1 + "_" + Schedule_COll[NCO]);
                    var NN_obj2 = eval("Schedule_" + Schedule_COll[NCO]);
                    NN_obj2[nummm_Schedule] = NN_obj1;
                }
                if (e == "LOAD") {
                    document.write("" + Schedule_TopHTML[nummm_Schedule]
                + "<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width:100%; table-layout:fixed;\"><tr><td align=\"" + Schedule_Align[nummm_Schedule] + "\">"
	            + "<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width:" + Schedule_Twidth[nummm_Schedule] + "px; table-layout:fixed;\"><tr><td >"
	            + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_back\">"
                + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_01\"></span>"
                + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_02\"></span>"
                + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_03\"></span>"
                + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_04\"></span>"
                + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_05\"></span>"
                + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_06\"></span>"
                + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_07\"></span>"
                + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_08\"></span>"
                + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_09\"></span>"
                + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_10\"></span>"
                + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_11\"></span>"
                + "</span>"
                + "</td></tr></table></td></tr></table>" + Schedule_FotHTML[nummm_Schedule]);
                }
                else {
                    document.write(""
                    + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_back\">"
                    + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_01\"></span>"
                    + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_02\"></span>"
                    + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_03\"></span>"
                    + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_04\"></span>"
                    + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_05\"></span>"
                    + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_06\"></span>"
                    + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_07\"></span>"
                    + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_08\"></span>"
                    + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_09\"></span>"
                    + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_10\"></span>"
                    + "<span id=\"SPAN_Schedule_" + nummm_Schedule + "_11\"></span>"
                    + "</span>");
                }

                Schedule_TYPE1[nummm_Schedule] = RequestS.T;
                Schedule_TYPE3[nummm_Schedule] = "false";

                var temp_style = '';
                for (NCO = 0; NCO < Schedule_COll_BTN.length; NCO++) {
                    var NN_obj1 = eval("Schedule_" + Schedule_COll_BTN[NCO]);
                    var NN_obj2 = eval("Schedule_" + Schedule_COll_BTN[NCO] + "_W");
                    var NN_obj3 = eval("Schedule_" + Schedule_COll_BTN[NCO] + "_H");

                    temp_style += ".Schedule_" + Schedule_COll_BTN[NCO] + "_" + nummm_Schedule + "_VN"
                    temp_style += "{top:" + parseInt(NN_obj3[nummm_Schedule] / 2 + 1) + "px;";
                    temp_style += " padding:" + (NN_obj3[nummm_Schedule]) + "px 0px 0px " + (NN_obj2[nummm_Schedule]) + "px;";
                    temp_style += "	cursor: hand; position:relative;";
                    temp_style += "	background-image: url(" + NN_obj1[nummm_Schedule] + ") ;  ";
                    temp_style += "	background-repeat:no-repeat;";
                    temp_style += "	height:" + NN_obj3[nummm_Schedule] + "px;";
                    temp_style += "	width:" + NN_obj2[nummm_Schedule] + "px;font-size:1px;";
                    temp_style += "}"; 
                }
                if (Schedule_bg[nummm_Schedule] == 0) {
                    temp_style += "#SPAN_Schedule_" + nummm_Schedule + "_back{"
                    + "background-color:" + Schedule_bgcolor[nummm_Schedule] + "; "
                    + "}";
                }
                else if (Schedule_bg[nummm_Schedule] == 1) {
                    temp_style += "#SPAN_Schedule_" + nummm_Schedule + "_back{"
                    + "background:url(" + Schedule_bgimage[nummm_Schedule] + ") repeat 0 0; "
                    + "}";
                }
                temp_style += "#SPAN_Schedule_" + nummm_Schedule + "_back "
                    + " A:link{ color:" + Schedule_ListTitleColorOff[nummm_Schedule] + "; } "
                    + "}";
                temp_style += "#SPAN_Schedule_" + nummm_Schedule + "_back "
                    + " A:visited{ color:" + Schedule_ListTitleColorOff[nummm_Schedule] + "; } "
                    + "}";
                temp_style += "#SPAN_Schedule_" + nummm_Schedule + "_back "
                    + " A:active{ color:" + Schedule_ListTitleColorOff[nummm_Schedule] + "; } "
                    + "}";
                temp_style += "#SPAN_Schedule_" + nummm_Schedule + "_back "
                    + " A:hover{ color:" + Schedule_ListTitleColorOn[nummm_Schedule] + "; } "
                    + "}";

                if (v_board_Admin == 0)
                { temp_style += ".ADMIN1_VN{display:none;}.ADMIN2_VN{}"; }
                else {
                    temp_style += ".ADMIN1_VN{cursor: hand; position:" 
                    + "width:" + v_board_Admin_img_W + "px;"
                    + "height:" + v_board_Admin_img_H + "px;"
                    + "}"
                    + ".ADMIN1_VN img{border: none;"
                    + " relative;background-image:"
                    + " url(" + v_board_Admin_img + ")  ;"
                    + "background-repeat:no-repeat;background-position: center;"
                    + "width:" + v_board_Admin_img_W + "px;"
                    + "height:" + v_board_Admin_img_H + "px;"
                    + "}"
                    + ".ADMIN2_VN{display:none;}";
                }

                Schedule_TYPE2[nummm_Schedule] = temp_style;

                document.write('<style>' + temp_style + '</style>');

                if (Schedule_TYPE1[nummm_Schedule] == "") { Schedule_TYPE1[nummm_Schedule] = "L"; }


                var Span_Obj1 = document.getElementById("SPAN_Schedule_" + nummm_Schedule + "_01");
                var Span_Obj2 = document.getElementById("SPAN_Schedule_" + nummm_Schedule + "_02");
                var Span_Obj3 = document.getElementById("SPAN_Schedule_" + nummm_Schedule + "_03");
                var Span_Obj4 = document.getElementById("SPAN_Schedule_" + nummm_Schedule + "_04");
                var Span_Obj5 = document.getElementById("SPAN_Schedule_" + nummm_Schedule + "_05");
                var Span_Obj6 = document.getElementById("SPAN_Schedule_" + nummm_Schedule + "_06");
                var Span_Obj7 = document.getElementById("SPAN_Schedule_" + nummm_Schedule + "_07");
                var Span_Obj8 = document.getElementById("SPAN_Schedule_" + nummm_Schedule + "_08");
                var Span_Obj9 = document.getElementById("SPAN_Schedule_" + nummm_Schedule + "_09");
                var Span_Obj10 = document.getElementById("SPAN_Schedule_" + nummm_Schedule + "_10");
                var Span_Obj11 = document.getElementById("SPAN_Schedule_" + nummm_Schedule + "_11");

                Schedule_TYPE8[nummm_Schedule] = e;
                Schedule_TYPE9[nummm_Schedule] = e2;

                Span_Obj1.innerHTML = '<iframe  title="일정관련" id="ifr_Schedule_N_' + nummm_Schedule + '" style="display:' + Schedule.none + ';" '
                + ' name="ifr_Schedule_N_' + nummm_Schedule + '" src="/common/Schedule/SchedulePass.aspx'
                + '?Ncode=' + Schedule_Ncode[nummm_Schedule] + '&type=' + Schedule_TYPE1[nummm_Schedule]
                + '&Num=' + nummm_Schedule + '&NumP=' + RequestS.Num + '&ps=' + notice_getcookie2("pwd" + RequestS.Num)
                + '&EX=' + RequestS.EX
                + '&w=' + RequestS.w
                + '&MAIN=' + e
                + '&LINK=' + e2 + "&pdn=" + XncodeUR(PageBaseInfo.domain)
                + '" frameborder=0 marginwidth=0 width=100% height=300 scrolling=yes></iframe>';

            }
            else {
                document.write("[" + e1 + "]존재하지 않는 일정게시판입니다.");
            }

        }
    },
    LIST: function(e, e1) /*리스트*/
    {
        var Span_Obj1 = document.getElementById("SPAN_Schedule_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Schedule_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Schedule_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Schedule_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Schedule_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Schedule_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Schedule_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Schedule_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Schedule_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Schedule_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Schedule_" + e1 + "_11");
        var ifr;
        ifr = document.getElementById("ifr_Schedule_N_" + e1).contentWindow;
        Span_Obj2.innerHTML = ifr.document.getElementById("txt_BOX00").value;
    },
    CONTENT: function(e, e1, e2) /*내용*/
    {

        var Span_Obj1 = document.getElementById("SPAN_Schedule_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Schedule_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Schedule_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Schedule_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Schedule_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Schedule_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Schedule_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Schedule_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Schedule_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Schedule_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Schedule_" + e1 + "_11");
        var ifr;
        ifr = document.getElementById("ifr_Schedule_N_" + e1).contentWindow;

        if (ifr.document.getElementById("txt_BOX02").value == "") return;

        try {
            if (typeof (document.all.divblankfrm) == "undefined") {
                var blankdiv = document.createElement("DIV");
                blankdiv.id = "divblankfrm";
                blankdiv.style.display = "none";
                blankdiv.style.zIndex = 9998;
                var htmls = '<form name="EDATAfrm" id="EDATAfrm" method="post">';
                htmls += '<input type="text" name="N1_num">';
                htmls += '<input type="text" name="N2_num">';
                htmls += '<input type="text" name="N3_num">';
                htmls += '<input type="text" name="N4_num">';
                htmls += '<input type="text" name="N5_num">';
                htmls += '<input type="text" name="N6_num">';
                htmls += '<input type="text" name="N7_num">';
                htmls += '<input type="text" name="N8_num">';
                htmls += '<input type="text" name="N9_num">';
                htmls += '<input type="text" name="N10_num">';
                htmls += '</form>';
                blankdiv.innerHTML = htmls;
                document.body.appendChild(blankdiv);
            }
        } catch (e) { }

        var bf = document.EDATAfrm;
        try {
            bf.N1_num.value = ifr.document.getElementById("txt_BOX02").value;
            bf.N2_num.value = Schedule_Ncode[e1];
            bf.N3_num.value = e1;
            bf.N4_num.value = e2;
            bf.N5_num.value = Schedule_TYPE2[e1];
            bf.N6_num.value = Schedule.MM_;
            bf.N7_num.value = ifr.document.getElementById('txt_USER14').value.trim();
            bf.N8_num.value = Schedule_DeleteBTN[e1];
            bf.N9_num.value = Schedule_EditeBTN[e1];
        } catch (e) { }

        try {
            var NewWindow = MM_openBrWindow8("", "DiaryDetail", "scrollbars=no,width=750,height=600,top=0,left=0");
            bf.target = "DiaryDetail";
            bf.action = "/common/Schedule/Schedule.aspx" + "?pdn=" + XncodeUR(PageBaseInfo.domain);
            bf.submit();
        } catch (e) { }

    },
    INPUT: function(e, e1) /*입력*/
    {

        var Span_Obj1 = document.getElementById("SPAN_Schedule_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Schedule_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Schedule_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Schedule_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Schedule_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Schedule_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Schedule_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Schedule_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Schedule_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Schedule_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Schedule_" + e1 + "_11");
        var ifr;
        ifr = document.getElementById("ifr_Schedule_N_" + e1).contentWindow;

        var MPMP = RENDOMS_PLUS();
        var HTMLDL = ''
        + '<table width="100%" border="0" cellspacing="0" cellpadding="3"><tr><td align="right">(*표시는 필수 입력사항입니다.)</td></tr>'
        + '<tr><td><table id="input_TABD" name="input_TABD"  width="100%" border="0" cellspacing="0" cellpadding="4"><tr><td colspan="2" bgcolor="#818181" class="pad0"><img src="/img/blank.gif" width="10" height="1" /></td></tr>'
        + '<tr><td colspan="2" bgcolor="#f0f0f0" class="pad0"><img src="/img/blank.gif" width="10" height="2" /></td></tr><tr><td width="20%" align="left" bgcolor="#f8f8f8" class="padL15">작성자*</td>'
        + '<td align="left" class="padL15">'
        + '<input name="txt_write_id" type="text" id="txt_write_id" readOnly="true" style="display:none;" />'
        + '<input name="txt_write_name" type="text" id="txt_write_name" readOnly="true"  maxlength="15" onblur="CheckHangulN(this);"  />'
        + '<input name="txt_write_nick" type="text" id="txt_write_nick" readOnly="true" style="display:none;" />'
        + '<input name="txt_write_ip" type="text" id="txt_write_ip" readOnly="true" style="display:none;" />'
        + '<span class="helptxt"> (예:홍길동)</span></td></tr>'
        + '<tr><td colspan="2" bgcolor="#d9d9d9" class="pad0"><img src="/img/blank.gif" width="10" height="1" /></td></tr>'
        + '<tr><td align="left" bgcolor="#f8f8f8" class="padL15">비밀번호*</td><td align="left" class="padL15">'


        + ' <input type="password" name="txt_pwd" id="txt_pwd"  maxlength="15" '
        + ' onkeyup="check_eng(this);CheckStrLen(this,15);" onblur="CheckStrLen(this,15);"  onkeydown="if(event.keyCode ==13){return false}"  '
        + ' maxlength="4"  />'
        + ' <input type="password" name="txt_pwd2" id="txt_pwd2" style="display:none;" />'
        + ' <span id="span_pwd"></span><span class="helptxt"> (수정 및 삭제시 필요합니다)</span>'

        + '</td></tr>'
        + '<tr><td colspan="2" bgcolor="#d9d9d9" class="pad0"><img src="/img/blank.gif" width="10" height="1" /></td></tr>'
        + '<tr><td align="left" bgcolor="#f8f8f8" class="padL15">연락처</td><td align="left" class="padL15">'

        + '<input name="txt_phone1" id="txt_phone1" type="text" size="4" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4"  /> - <input name="txt_phone2" id="txt_phone2" type="text" size="4" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4"  /> - <input name="txt_phone3" id="txt_phone3" type="text" size="4" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4"  /> '

        + '<span class="helptxt"> (예:02-1234-1234)</span></td></tr>'
        + '<tr><td colspan="2" bgcolor="#d9d9d9" class="pad0"><img src="/img/blank.gif" width="10" height="1" /></td></tr>'
        + '<tr><td align="left" bgcolor="#f8f8f8" class="padL15">이메일</td><td align="left" class="padL15">'
        + '<input maxlength="30" onkeyup="CheckStrLen(this,30);" onblur="CheckStrLen(this,30);" onkeydown="if(event.keyCode ==13){return false}"  id="TEXT_email_1" name="TEXT_email_1"  type="text" />  @ <input maxlength="50" onkeyup="CheckStrLen(this,50);" onblur="CheckStrLen(this,50);" onkeydown="if(event.keyCode ==13){return false}"  id="TEXT_email_2" name="TEXT_email_2" style="display:none;" type="text" /> <select name="DDL_email" id="DDL_email" class="input" onchange="if(this.value==\'etc\'){document.getElementById(\'TEXT_email_2\').style.display=\'\';} else{document.getElementById(\'TEXT_email_2\').style.display=\'none\';}">'
        + '<option value="">선택하세요</option><option value="etc">직접입력</option><option value="naver.com">naver.com</option><option value="chol.com">chol.com</option><option value="dreamwiz.com">dreamwiz.com</option><option value="empal.com">empal.com</option><option value="freechal.com">freechal.com</option><option value="gmail.com">gmail.com</option><option value="hanafos.com">hanafos.com</option><option value="hanmail.net">hanmail.net</option><option value="hanmir.com">hanmir.com</option><option value="hitel.net">hitel.net</option><option value="hotmail.com">hotmail.com</option><option value="korea.com">korea.com</option><option value="lycos.co.kr">lycos.co.kr</option><option value="nate.com">nate.com</option><option value="netian.com">netian.com</option><option value="paran.com">paran.com</option><option value="yahoo.com">yahoo.com</option><option value="yahoo.co.kr">yahoo.co.kr</option></select>    '

        + '<span class="helptxt">(예:test@testmail.com)</span></td></tr>'

        + '<tr><td colspan="2" bgcolor="#d9d9d9" class="pad0"><img src="/img/blank.gif" width="10" height="1" /></td></tr>'
        + '<tr><td align="left" bgcolor="#f8f8f8" class="padL15">제목*</td><td align="left" class="padL15">'

        + '<input name="txt_title" id="txt_title" type="text" style="width:400px;"  maxlength="100" '
        + ' onkeyup="CheckStrLen(this,200);" onblur="CheckStrLen(this,200);" '
        + ' onkeydown="if(event.keyCode ==13){return false}"  />'
        + '</td></tr>'

        + '<tr><td colspan="2" bgcolor="#d9d9d9" class="pad0"><img src="/img/blank.gif" width="10" height="1" /></td></tr>'
        + '<tr  id="tr_TitleWrite1"><td align="left" bgcolor="#f8f8f8" class="padL15">제목효과</td><td align="left" class="padL15">'

        + '<select name="ddl_title_effect1" id="ddl_title_effect1"> <option value="">제목 글자색</option> <option value="#000000" style="color:#000000" >검정</option> <option value="#7F7F7F" style="color:#7F7F7F" >회색</option> <option value="#FFA300" style="color:#FFA300" >노랑</option> <option value="#FF600F" style="color:#FF600F" >주황</option> <option value="#ff0000" style="color:#ff0000" >빨강</option> <option value="#A03F00" style="color:#A03F00" >갈색</option> <option value="#FF08A0" style="color:#FF08A0" >분홍</option> <option value="#5000AF" style="color:#5000AF" >보라</option> <option value="#B0008F" style="color:#B0008F" >자주</option> <option value="#7FC700" style="color:#7FC700" >연두</option> <option value="#009FAF" style="color:#009FAF" >청녹</option> <option value="#0000ff" style="color:#0000ff" >파랑</option> </select> '
        + '<select name="ddl_title_effect2" id="ddl_title_effect2"> <option value="">제목 글자크기</option> <option value="8px" >아주작게 [8px]</option> <option value="10px" >작게 [10px]</option> <option value="12px" >보통 [12px]</option> <option value="18px" >크게 [18px]</option> <option value="24px" >아주 크게 [24px]</option> </select> '
        + '<select name="ddl_title_effect3" id="ddl_title_effect3"> <option value="">제목 글자굵기</option> <option value="default" >보통</option> <option value="bold" >굵게</option> </select>'

        + '</td></tr>'
        + '<tr  id="tr_TitleWrite2"><td colspan="2" bgcolor="#d9d9d9" class="pad0"><img src="/img/blank.gif" width="10" height="1" /></td></tr>'
        + '<tr id="tr_dadate1" style="display:none;"><td align="left" bgcolor="#f8f8f8" class="padL15">게시글관리</td><td align="left" class="padL15">등록일<input name="txt_dadate1" type="text" value="" size="8" id="txt_dadate1" /><input name="txt_dadate2" type="text" value="" size="5" id="txt_dadate2" /> 조회수<input name="txt_readnum" type="text" value="0" id="txt_readnum" style="width:35px;" /></td></tr>'
        + '<tr id="tr_dadate2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="pad0"><img src="/img/blank.gif" width="10" height="1" /></td></tr>'
        + '<tr><td align="left" bgcolor="#f8f8f8" class="padL15">일정기간*</td>'
        + '<td align="left" class="padL15">'
        + '<input name="txt_Sdate" type="text" size="10" id="txt_Sdate" readOnly="readOnly" onclick="callCalPop(\'txt_Sdate\', \'yyyy-mm-dd\');" />'
        + '<img align="absMiddle" style="cursor: pointer;" onclick="callCalPop(\'txt_Sdate\', \'yyyy-mm-dd\');" src="/img_bbs/ico_calendar.gif" width="17" height="12" align="absmiddle" />          '
        + '<select name="ddl_Sdate1" id="ddl_Sdate1"><option value="">--</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option>option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option></select>'
        + '시'
        + '<select name="ddl_Sdate2" id="ddl_Sdate2"><option value="">--</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option>option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>'
        + '분 ~ '
        + '<input name="txt_Edate" type="text" size="10" id="txt_Edate" readOnly="readOnly" onclick="callCalPop(\'txt_Edate\', \'yyyy-mm-dd\');" />            '
        + '<img align="absMiddle" style="cursor: pointer;" onclick="callCalPop(\'txt_Edate\', \'yyyy-mm-dd\');" src="/img_bbs/ico_calendar.gif" width="17" height="12" align="absmiddle" />'
        + '<select name="ddl_Edate1" id="ddl_Edate1"><option value="">--</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option>option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option></select>'
        + '시'
        + '<select name="ddl_Edate2" id="ddl_Edate2"><option value="">--</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option>option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select>'
        + '분</td></tr>'
        + '<tr><td colspan="2" bgcolor="#d9d9d9" class="pad0"><img src="/img/blank.gif" width="10" height="1" /></td></tr>'

        + '<tr><td colspan="2" bgcolor="#d9d9d9" class="pad0"><textarea id="txt_Mcontent" name="txt_Mcontent" rows="20"  style="width:100%;height:320px;"  ></textarea></td></tr>'
        + '<tr><td colspan="2" bgcolor="#d9d9d9" class="pad0"><img src="/img/blank.gif" width="10" height="1" /></td></tr>'
        + '<tr id="tr_FileUpUsed1"><td colspan="2" id="iframe_N" ></td></tr>'
        + '<tr id="tr_SpamUsed0" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="pad0"><img src="/img/blank.gif" width="10" height="1" /></td></tr>'
        //        + '<tr id="tr_SpamUsed1" style="display:none;"><td align="left" bgcolor="#f8f8f8" class="padL15">자동글방지*</td><td align="left" class="padL15"><span id="SPAM_COMT_0" name="SPAM_COMT_0" >' + RENDOMS() + '</span><input maxlength="4" onkeydown="if(event.keyCode ==13){return false}" value2="' + SPAM_str + '"  size="10" id="TEXT_COMT" name="TEXT_COMT" type="text" /><span class="helptxt"> * 왼족의 글자중 <font color="#ff0000">빨간글자만</font> 순서대로 입력하세요.</span></td></tr>'
+ '<tr id="tr_SpamUsed1" style="display:none;"><td align="left" bgcolor="#f8f8f8" class="padL15">자동글방지*</td><td align="left" class="padL15">'

+ '<span id="SPAM_COMT_0" name="SPAM_COMT_0" >' + MPMP[1] + '</span>'
+ '<input maxlength="4" onkeydown="if(event.keyCode ==13){return false}" size="10" '
+ ' id="TEXT_COMT" name="TEXT_COMT" type="text" value2="' + MPMP[0] + '"   />'
+ '<input maxlength="4" onkeydown="if(event.keyCode ==13){return false}" size="10" '
+ ' id="TEXT_COMT_2" name="TEXT_COMT_2" type="hidden" value="' + MPMP[0] + '"   />'

+ '<span class="helptxt"> * 대소문자를 구분하여 <font color="#ff0000">빨간글자만</font> 순서대로 입력하세요.</span></td></tr>'

        + '<tr id="tr_SpamUsed2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="pad0"><img src="/img/blank.gif" width="10" height="1" /></td></tr>'
        + '</table></td></tr>'
        + '<tr><td align="center">'
        + '<input name="txt_idx" id="txt_idx" type="text" style="display:none;" />'
        + '<input name="txt_Docid" id="txt_Docid" type="text" style="display:none; width:100%;"    />'
        + '<input name="txt_hid_submit" id="txt_hid_submit" type="text" style="display:none;width:100%;"    />'
        + '<img id="btn_OK_' + e1 + '_1" onclick="Schedule.INPUTSUBMIT(\'' + e + '\',\'' + e1 + '\');"  style="cursor:pointer;display:none;" src="' + Schedule_SaveBTN[e1] + '" alt="저장"  hspace="2" />'
        + '<img id="btn_OK_' + e1 + '_2" onclick="Schedule.UPDATESUBMIT(\'' + e + '\',\'' + e1 + '\');"  style="cursor:pointer;display:none;" src="' + Schedule_SaveBTN[e1] + '" alt="저장"  hspace="2" />'
        + '<img id="btn_OK_' + e1 + '_3" onclick="history.back();"  style="cursor:pointer;display:none;" src="' + Schedule_CancelBTN[e1] + '" alt="취소"    hspace="2" />'
        + '</td>'
        + '</tr></table></td></tr></table>';
        Span_Obj2.innerHTML = HTMLDL;



        if (Schedule_FileUpUsed[e1] == 1) {
            document.getElementById("tr_FileUpUsed1").style.display = "";
        }


        if (
            Schedule_TitleWrite[e1] == 0
            && Schedule_TitleWrite2[e1] == 0
            && Schedule_TitleWrite3[e1] == 0) {
            document.getElementById("tr_TitleWrite1").style.display = "none";
            document.getElementById("tr_TitleWrite2").style.display = "none";
        }
        else {
            if (Schedule_TitleWrite[e1] == 1)
            { document.getElementById("ddl_title_effect1").style.display = ""; }
            else { document.getElementById("ddl_title_effect1").style.display = "none"; }
            if (Schedule_TitleWrite2[e1] == 1)
            { document.getElementById("ddl_title_effect2").style.display = ""; }
            else { document.getElementById("ddl_title_effect2").style.display = "none"; }
            if (Schedule_TitleWrite3[e1] == 1)
            { document.getElementById("ddl_title_effect3").style.display = ""; }
            else { document.getElementById("ddl_title_effect3").style.display = "none"; }
        }
        if (Schedule_SpamUsed[e1] == 1) {
            document.getElementById("tr_SpamUsed0").style.display = "";
            document.getElementById("tr_SpamUsed1").style.display = "";
            document.getElementById("tr_SpamUsed2").style.display = "";
        }


        if (Schedule_Editer[e1] == 1) { window.onload = function() { try { oFCKeditor = new FCKeditor('txt_Mcontent'); oFCKeditor.Height = 370; oFCKeditor.ReplaceTextarea(); } catch (err) { } } }



        if (ifr.document.getElementById('txt_USER06').value.trim() != "") {
            document.getElementById("txt_pwd").style.display = "none";
            document.getElementById("span_pwd").innerHTML = "로그인암호가 자동적용됩니다. ";
        }
        else {
            if (ifr.document.getElementById('txt_USER09').value == "-1") {
                document.getElementById("txt_write_name").readOnly = false;
            }
        }
        if (ifr.document.getElementById('txt_USER06').value == "-1" && Schedule_CopywriterUsed[e1] == 1) {
            document.getElementById("txt_write_name").readOnly = false;
        }


        if (RequestS.EX == "EDIT") {
            document.getElementById("txt_pwd").value = notice_getcookie2("pwd" + RequestS.Num);
            document.getElementById("txt_pwd").readOnly = true;
            document.getElementById("txt_write_name").readOnly = true;
            if (ifr.document.getElementById('txt_USER06').value == "-1") {
                if (Schedule_AdminDevice[e1] == 1) {
                    document.getElementById("txt_write_name").readOnly = false;
                }
            }
            var ifr;
            ifr = document.getElementById("ifr_Schedule_N_" + e1).contentWindow;
            if (ifr.document.getElementById('txt_BOX17').value == "") {
                document.getElementById("iframe_N").innerHTML = '<iframe title="일정관련 파일" id="ifrFileUpload" name="ifrFileUpload" src="/COMMON/NFUpload/nfupload_ifr2.aspx?Docid=' + ifr.document.getElementById('txt_USER12').value + "&Num=" + e1 + '"  frameborder=0 marginwidth=0 width=100% height=115 scrolling=no></iframe>';
                ifr.document.getElementById('txt_BOX17').value = ifr.document.getElementById('txt_USER12').value;
                document.getElementById('txt_Docid').value = ifr.document.getElementById('txt_USER12').value;
            }
            else {
                document.getElementById("iframe_N").innerHTML = '<iframe title="일정관련 파일" id="ifrFileUpload" name="ifrFileUpload" src="/COMMON/NFUpload/nfupload_ifr2.aspx?Docid=' + ifr.document.getElementById('txt_BOX17').value + "&Num=" + e1 + '"  frameborder=0 marginwidth=0 width=100% height=115 scrolling=no></iframe>';
                document.getElementById('txt_Docid').value = ifr.document.getElementById('txt_BOX17').value;
            }
            document.getElementById("txt_idx").value = RequestS.Num;

            document.getElementById("txt_write_id").value = ifr.document.getElementById('txt_BOX02').value;
            document.getElementById("txt_write_name").value = ifr.document.getElementById('txt_BOX01').value;
            document.getElementById("txt_write_nick").value = ifr.document.getElementById('txt_BOX03').value;


            var phone__ = ifr.document.getElementById('txt_BOX05').value;
            var phone___ = phone__.split('-'); if (phone___.length > 2) { document.getElementById("txt_phone1").value = phone___[0]; document.getElementById("txt_phone2").value = phone___[1]; document.getElementById("txt_phone3").value = phone___[2]; }

            var email__ = ifr.document.getElementById('txt_BOX06').value;
            var email___ = email__.split('@');
            if (email___.length > 1) {
                document.getElementById("TEXT_email_1").value = email___[0];
                Teldd(document.getElementById("DDL_email"), email___[1]);
                if (document.getElementById("DDL_email").value == '') {
                    document.getElementById("TEXT_email_2").value = email___[1];
                    Teldd(document.getElementById("DDL_email"), 'etc');
                    document.getElementById("TEXT_email_2").style.display = '';
                }
                else {
                    Teldd(document.getElementById("DDL_email"), email___[1]);
                }
            }

            if (ifr.document.getElementById('txt_USER06').value == "-1") {
                document.getElementById("tr_dadate1").style.display = "";
                document.getElementById("tr_dadate2").style.display = "";
            }

            var USER13__ = ifr.document.getElementById('txt_BOX15').value;
            var USER13___ = USER13__.split(' ');
            if (USER13___.length > 1) {
                document.getElementById("txt_Sdate").value = USER13___[0];
                var USER13____ = USER13___[1].split(':');
                if (USER13____.length > 1) {
                    Teldd(document.getElementById("ddl_Sdate1"), USER13____[0]);
                    Teldd(document.getElementById("ddl_Sdate2"), USER13____[1]);
                }
            }
            var USER13__ = ifr.document.getElementById('txt_BOX16').value;
            var USER13___ = USER13__.split(' ');
            if (USER13___.length > 1) {
                document.getElementById("txt_Edate").value = USER13___[0];
                var USER13____ = USER13___[1].split(':');
                if (USER13____.length > 1) {
                    Teldd(document.getElementById("ddl_Edate1"), USER13____[0]);
                    Teldd(document.getElementById("ddl_Edate2"), USER13____[1]);
                }
            }

            document.getElementById("txt_Mcontent").value = ifr.document.getElementById('txt_BOX11').value;

            document.getElementById("txt_dadate1").value = ifr.document.getElementById('txt_BOX21').value;
            document.getElementById("txt_dadate2").value = ifr.document.getElementById('txt_BOX22').value;
            document.getElementById("txt_readnum").value = ifr.document.getElementById('txt_BOX20').value;

            document.getElementById("txt_title").value = ifr.document.getElementById('txt_BOX07').value;

            document.getElementById("btn_OK_" + e1 + "_2").style.display = "";
            document.getElementById("btn_OK_" + e1 + "_3").style.display = "";
        }
        else if (RequestS.EX == "NEW") {
        document.getElementById("iframe_N").innerHTML = '<iframe title="일정관련 파일" id="ifrFileUpload" name="ifrFileUpload" src="/COMMON/NFUpload/nfupload_ifr2.aspx?Docid=' + ifr.document.getElementById('txt_USER12').value + "&Num=" + e1 + '"  frameborder=0 marginwidth=0 width=100% height=115 scrolling=no></iframe>';
            document.getElementById("txt_Docid").value = ifr.document.getElementById('txt_USER12').value;
            ifr.document.getElementById('txt_BOX17').value = ifr.document.getElementById('txt_USER12').value;
            document.getElementById("txt_idx").value = "0";
            document.getElementById("txt_write_id").value = ifr.document.getElementById('txt_USER06').value;
            document.getElementById("txt_write_name").value = ifr.document.getElementById('txt_USER07').value;
            document.getElementById("txt_write_nick").value = ifr.document.getElementById('txt_USER08').value;



            if (ifr.document.getElementById('txt_USER06').value.trim() != "") {
                var phone__ = ifr.document.getElementById('txt_USER05').value;
                var phone___ = phone__.split('-'); if (phone___.length > 2) { document.getElementById("txt_phone1").value = phone___[0]; document.getElementById("txt_phone2").value = phone___[1]; document.getElementById("txt_phone3").value = phone___[2]; }
            }


            if (ifr.document.getElementById('txt_USER06').value.trim() != "") {
                var email__ = ifr.document.getElementById('txt_USER04').value;
                var email___ = email__.split('@');
                if (email___.length > 1) {
                    document.getElementById("TEXT_email_1").value = email___[0];
                    Teldd(document.getElementById("DDL_email"), email___[1]);
                    if (document.getElementById("DDL_email").value == '') {
                        document.getElementById("TEXT_email_2").value = email___[1];
                        Teldd(document.getElementById("DDL_email"), 'etc');
                        document.getElementById("TEXT_email_2").style.display = '';
                    }
                    else {
                        Teldd(document.getElementById("DDL_email"), email___[1]);
                    }
                }
            }
            if (ifr.document.getElementById('txt_USER13').value.trim() != "") {
                var USER13__ = ifr.document.getElementById('txt_USER13').value;
                var USER13___ = USER13__.split(' ');
                if (USER13___.length > 1) {
                    document.getElementById("txt_Sdate").value = USER13___[0];
                    //                    document.getElementById("txt_Edate").value = USER13___[0];
                    //                    var USER13____ = USER13___[1].split(':');
                    //                    if (USER13____.length > 1) {
                    //                        Teldd(document.getElementById("ddl_Sdate1"), USER13____[0]);
                    //                        Teldd(document.getElementById("ddl_Sdate2"), USER13____[1]);
                    //                        Teldd(document.getElementById("ddl_Edate1"), USER13____[0]);
                    //                        Teldd(document.getElementById("ddl_Edate2"), USER13____[1]);
                    //                    }
                }
            }
            document.getElementById("btn_OK_" + e1 + "_1").style.display = "";
            document.getElementById("btn_OK_" + e1 + "_3").style.display = "";
        }
        CHKE_Schedule_DEF(e, e1);

    },
    INPUTSUBMIT: function(e, e1) /*입력*/
    {
        CHKE_Schedule(e, e1);
        if (Schedule_TYPE3[e1] == "false") return;

        var Span_Obj1 = document.getElementById("SPAN_Schedule_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Schedule_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Schedule_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Schedule_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Schedule_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Schedule_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Schedule_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Schedule_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Schedule_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Schedule_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Schedule_" + e1 + "_11");
        var ifr;
        ifr = document.getElementById("ifr_Schedule_N_" + e1).contentWindow;


        var email__ = document.getElementById("TEXT_email_1").value + "@";
        if (document.getElementById("DDL_email").value == "etc") { email__ += document.getElementById("TEXT_email_2").value; } else { email__ += document.getElementById("DDL_email").value; }
        var Mcontent__ = document.getElementById("txt_Mcontent").value;
        if (Schedule_Editer[e1] == 0)
        { Mcontent__ = Mcontent__.replaceAll("\n", "<br/>"); }
        else {
            Mcontent__ = FCKeditor.prototype.innerHTML("txt_Mcontent"); //FCKeditorAPI.GetInstance('txt_Mcontent').GetXHTML(true);
        }
        if (BoardSubmit > 0) { return; }
        BoardSubmit++;

        ifr.document.getElementById('txt_BOX01').value = document.getElementById('txt_write_id').value;
        ifr.document.getElementById('txt_BOX02').value = document.getElementById('txt_write_name').value;
        ifr.document.getElementById('txt_BOX03').value = document.getElementById('txt_write_nick').value;
        ifr.document.getElementById('txt_BOX04').value = document.getElementById('txt_pwd').value;
        ifr.document.getElementById('txt_BOX05').value = document.getElementById('txt_phone1').value + "-" + document.getElementById('txt_phone2').value + "-" + document.getElementById('txt_phone3').value;
        ifr.document.getElementById('txt_BOX06').value = email__;
        ifr.document.getElementById('txt_BOX07').value = document.getElementById('txt_title').value;
        ifr.document.getElementById('txt_BOX08').value = document.getElementById('ddl_title_effect1').value;
        ifr.document.getElementById('txt_BOX09').value = document.getElementById('ddl_title_effect2').value;
        ifr.document.getElementById('txt_BOX10').value = document.getElementById('ddl_title_effect3').value;
        ifr.document.getElementById('txt_BOX11').value = Mcontent__;
        ifr.document.getElementById('txt_BOX12').value = document.getElementById('txt_dadate1').value;
        ifr.document.getElementById('txt_BOX13').value = document.getElementById('txt_dadate2').value;
        ifr.document.getElementById('txt_BOX14').value = document.getElementById('txt_readnum').value;
        ifr.document.getElementById('txt_BOX15').value = document.getElementById('txt_Sdate').value + ' ' + document.getElementById('ddl_Sdate1').value + ':' + document.getElementById('ddl_Sdate2').value;
        ifr.document.getElementById('txt_BOX16').value = document.getElementById('txt_Edate').value + ' ' + document.getElementById('ddl_Edate1').value + ':' + document.getElementById('ddl_Edate2').value;
        ifr.document.getElementById('txt_BOX17').value = document.getElementById('txt_Docid').value;
        ifr.document.getElementById('txt_BOX18').value = document.getElementById('txt_idx').value;
        ifr.document.getElementById('txt_BOX19').value = Schedule_Ncode[e1]; 

        ifr.document.getElementById('submitBTN').click();
        /*alert("INPUTSUBMIT:" + Schedule_Ncode[e1]);*/
    },
    UPDATESUBMIT: function(e, e1) /*수정*/
    {
        CHKE_Schedule(e, e1);
        if (Schedule_TYPE3[e1] == "false") return;

        var Span_Obj1 = document.getElementById("SPAN_Schedule_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Schedule_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Schedule_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Schedule_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Schedule_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Schedule_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Schedule_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Schedule_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Schedule_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Schedule_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Schedule_" + e1 + "_11");
        var ifr;
        ifr = document.getElementById("ifr_Schedule_N_" + e1).contentWindow;


        var email__ = document.getElementById("TEXT_email_1").value + "@";
        if (document.getElementById("DDL_email").value == "etc") { email__ += document.getElementById("TEXT_email_2").value; } else { email__ += document.getElementById("DDL_email").value; }
        var Mcontent__ = document.getElementById("txt_Mcontent").value;
        if (Schedule_Editer[e1] == 0)
        { Mcontent__ = Mcontent__.replaceAll("\n", "<br/>"); }
        else {
            Mcontent__ = FCKeditor.prototype.innerHTML("txt_Mcontent"); //FCKeditorAPI.GetInstance('txt_Mcontent').GetXHTML(true);
        }
        if (BoardSubmit > 0) { return; }
        BoardSubmit++;

        ifr.document.getElementById('txt_BOX01').value = document.getElementById('txt_write_id').value;
        ifr.document.getElementById('txt_BOX02').value = document.getElementById('txt_write_name').value;
        ifr.document.getElementById('txt_BOX03').value = document.getElementById('txt_write_nick').value;
        ifr.document.getElementById('txt_BOX04').value = document.getElementById('txt_pwd').value;
        ifr.document.getElementById('txt_BOX05').value = document.getElementById('txt_phone1').value + "-" + document.getElementById('txt_phone2').value + "-" + document.getElementById('txt_phone3').value;
        ifr.document.getElementById('txt_BOX06').value = email__;
        ifr.document.getElementById('txt_BOX07').value = document.getElementById('txt_title').value;
        ifr.document.getElementById('txt_BOX08').value = document.getElementById('ddl_title_effect1').value;
        ifr.document.getElementById('txt_BOX09').value = document.getElementById('ddl_title_effect2').value;
        ifr.document.getElementById('txt_BOX10').value = document.getElementById('ddl_title_effect3').value;
        ifr.document.getElementById('txt_BOX11').value = Mcontent__;
        ifr.document.getElementById('txt_BOX12').value = document.getElementById('txt_dadate1').value;
        ifr.document.getElementById('txt_BOX13').value = document.getElementById('txt_dadate2').value;
        ifr.document.getElementById('txt_BOX14').value = document.getElementById('txt_readnum').value;
        ifr.document.getElementById('txt_BOX15').value = document.getElementById('txt_Sdate').value + ' ' + document.getElementById('ddl_Sdate1').value + ':' + document.getElementById('ddl_Sdate2').value;
        ifr.document.getElementById('txt_BOX16').value = document.getElementById('txt_Edate').value + ' ' + document.getElementById('ddl_Edate1').value + ':' + document.getElementById('ddl_Edate2').value;
        ifr.document.getElementById('txt_BOX17').value = document.getElementById('txt_Docid').value;
        ifr.document.getElementById('txt_BOX18').value = document.getElementById('txt_idx').value;
        ifr.document.getElementById('txt_BOX19').value = Schedule_Ncode[e1];


        ifr.document.getElementById("txt_BOX21").value = document.getElementById('txt_dadate1').value;
        ifr.document.getElementById("txt_BOX22").value = document.getElementById('txt_dadate2').value;
        ifr.document.getElementById("txt_BOX20").value = document.getElementById('txt_readnum').value;

        ifr.document.getElementById('submitBTN').click();
        /*alert("INPUTSUBMIT:" + Schedule_Ncode[e1]);*/
    },
    NOUSED: function(e, e1) /*입력*/
    {
        var Span_Obj1 = document.getElementById("SPAN_Schedule_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Schedule_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Schedule_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Schedule_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Schedule_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Schedule_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Schedule_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Schedule_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Schedule_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Schedule_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Schedule_" + e1 + "_11");
        Span_Obj2.innerHTML = '<br /><br /><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#d9d9d9"><img src="/img/blank.gif" width="10" height="1" /></td></tr><tr><td align="center"><img src="/img/res_none.gif" /></td></tr><tr><td bgcolor="#d9d9d9"><img src="/img/blank.gif" width="10" height="1" /></td></tr></table><br />';
    },
    NOUSED2: function(e, e1) /*입력*/
    {
        var Span_Obj1 = document.getElementById("SPAN_Schedule_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Schedule_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Schedule_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Schedule_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Schedule_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Schedule_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Schedule_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Schedule_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Schedule_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Schedule_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Schedule_" + e1 + "_11");
        /*Span_Obj2.innerHTML = '<br /><br /><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#d9d9d9"><img src="/img/blank.gif" width="10" height="1" /></td></tr><tr><td align="center"><img src="/img/res_none.gif" /></td></tr><tr><td bgcolor="#d9d9d9"><img src="/img/blank.gif" width="10" height="1" /></td></tr></table><br />';*/
        alert("읽기권한이 없습니다.");
    },
    LINK: function(e, e1, e2, e3) /*링크*/
    {
        var Span_Obj1 = document.getElementById("SPAN_Schedule_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Schedule_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Schedule_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Schedule_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Schedule_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Schedule_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Schedule_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Schedule_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Schedule_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Schedule_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Schedule_" + e1 + "_11");

        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }

        if (e2 == 'INPUT') {
            location.href = m_page + '?T=I&EX=NEW&w=' + RequestS.w;
        }
        else if (e2 == 'LIST') {
            location.href = m_page + '?T=L&w=' + RequestS.w;
        }
        else if (e2 == 'VIEW') {

            var ifr;
            ifr = document.getElementById("ifr_Schedule_N_" + e1);
            ifr.src = '/common/Schedule/SchedulePass.aspx?Ncode=' + Schedule_Ncode[e1] + '&type=C&Num=' + e1 + '&Num2=' + e3 + '&w=' + RequestS.w  + "&pdn=" + XncodeUR(PageBaseInfo.domain);
        }
        else if (e2 == 'EDIT') {
            Schedule_TYPE6[e1] = e3;
            Schedule_TYPE7[e1] = 0;
            Span_Obj2.style.display = 'none';

            var ifr;
            ifr = document.getElementById("ifr_Schedule_N_" + e1);

            if (Span_Obj11.innerHTML == "") {
                notice_setcookie2("pwd" + e3, "", 1);
                ifr.src = '/common/Schedule/SchedulePass.aspx?Ncode=' + Schedule_Ncode[e1] + '&type=Q&Num=' + e1 + '&Num2=' + e3 + '&w=' + "&pdn=" + XncodeUR(PageBaseInfo.domain);
            }
            else {
                notice_setcookie2("pwd" + e3, document.getElementById("txt_passwdN").value.trim(), 1);
                ifr.src = '/common/Schedule/SchedulePass.aspx?Ncode=' + Schedule_Ncode[e1] + '&type=Q&Num=' + e1 + '&Num2=' + e3 + '&w=' + document.getElementById("txt_passwdN").value + "&pdn=" + XncodeUR(PageBaseInfo.domain);
            }
        }
        else if (e2 == 'EDITGO') {
            location.href = m_page + '?T=I&EX=EDIT&w=' + RequestS.w + "&Num=" + e3;
        }
        else if (e2 == 'EDITGOT') {
            Span_Obj2.style.display = 'none';
            if (Span_Obj11.innerHTML == "") {
                Span_Obj11.innerHTML = ''
                + '<br/>'
                + '<br/>'
                + '<table width="100%" border="0" cellspacing="0" cellpadding="5">'
                + '  <tr><td bgcolor="#efefef" class="pad0"><img src="/img/blank.gif" width="10" height="3" /></td></tr>'
                + '  <tr><td class="pad0"><img src="/img/blank.gif" width="10" height="2" /></td></tr>'
                + '  <tr><td height="40" align="center" valign="bottom" bgcolor="#f7f7f7" class="bold">수정,삭제,비밀글읽기를 위해서는 글작성시 등록한 비밀번호(로그인 암호)를 입력하셔야합니다.</td></tr>'
                + '  <tr><td align="center" bgcolor="#f7f7f7" class="bold">비밀번호 : <input name="txt_passwdN" type="password" id="txt_passwdN" /> <font color="blue" id="MSG_DELSE" name="MSG_DELSE"></font></td></tr>'
                + '  <tr><td height="40" align="center" valign="top" bgcolor="#f7f7f7" class="colorbf0101">데이터를 삭제할 경우 복구가 불가능합니다. 신중히 확인하시고 삭제하세요.</td></tr>'
                + '  <tr><td class="pad0"><img src="/img/blank.gif" width="10" height="2" /></td></tr>'
                + '  <tr><td bgcolor="#efefef" class="pad0"><img src="/img/blank.gif" width="10" height="3" /></td></tr>'
                + '  <tr><td align="center">'
                + '  <img style="cursor:pointer;" onclick="Schedule.LINK(\'' + e + '\',\'' + e1 + '\',\'EDIT\',\'' + e3 + '\')" src="/img_bbs/bt_cause.gif" alt="확인" width="66" height="23" hspace="2" />'
                + '  <img style="cursor:pointer;" onclick="Schedule.LINK(\'' + e + '\',\'' + e1 + '\',\'UNDO\')" src="/img_bbs/bt_cancel.gif" alt="취소" width="66" height="23" hspace="2" /></td></tr>'
                + '</table> ';
            }
            else {
                document.getElementById("MSG_DELSE").innerHTML = "비밀번호가 일치하지 않습니다.";
            }
        }
        else if (e2 == 'DEL') {
            if (Span_Obj11.innerHTML == "") {
                if (!confirm("정말로 삭제하겠습니까?")) { return; }
            }

            Schedule_TYPE6[e1] = e3;
            Schedule_TYPE7[e1] = 0;
            Span_Obj2.style.display = 'none';

            var ifr;
            ifr = document.getElementById("ifr_Schedule_N_" + e1);

            if (Span_Obj11.innerHTML == "") {
                ifr.src = '/common/Schedule/SchedulePass.aspx?Ncode=' + Schedule_Ncode[e1] + '&type=D&Num=' + e1 + '&Num2=' + e3 + '&w=' + "&pdn=" + XncodeUR(PageBaseInfo.domain);
            }
            else {
                ifr.src = '/common/Schedule/SchedulePass.aspx?Ncode=' + Schedule_Ncode[e1] + '&type=D&Num=' + e1 + '&Num2=' + e3 + '&w=' + document.getElementById("txt_passwdN").value + "&pdn=" + XncodeUR(PageBaseInfo.domain);
            }
        }
        else if (e2 == 'DEL2') {
            Span_Obj2.style.display = 'none';
            if (Span_Obj11.innerHTML == "") {
                Span_Obj11.innerHTML = ''
                + '<br/>'
                + '<br/>'
                + '<table width="100%" border="0" cellspacing="0" cellpadding="5">'
                + '  <tr><td bgcolor="#efefef" class="pad0"><img src="/img/blank.gif" width="10" height="3" /></td></tr>'
                + '  <tr><td class="pad0"><img src="/img/blank.gif" width="10" height="2" /></td></tr>'
                + '  <tr><td height="40" align="center" valign="bottom" bgcolor="#f7f7f7" class="bold">수정,삭제,비밀글읽기를 위해서는 글작성시 등록한 비밀번호(로그인 암호)를 입력하셔야합니다.</td></tr>'
                + '  <tr><td align="center" bgcolor="#f7f7f7" class="bold">비밀번호 : <input name="txt_passwdN" type="password" id="txt_passwdN" /> <font color="blue" id="MSG_DELSE" name="MSG_DELSE"></font></td></tr>'
                + '  <tr><td height="40" align="center" valign="top" bgcolor="#f7f7f7" class="colorbf0101">데이터를 삭제할 경우 복구가 불가능합니다. 신중히 확인하시고 삭제하세요.</td></tr>'
                + '  <tr><td class="pad0"><img src="/img/blank.gif" width="10" height="2" /></td></tr>'
                + '  <tr><td bgcolor="#efefef" class="pad0"><img src="/img/blank.gif" width="10" height="3" /></td></tr>'
                + '  <tr><td align="center">'
                + '  <img style="cursor:pointer;" onclick="Schedule.LINK(\'' + e + '\',\'' + e1 + '\',\'DEL\',\'' + e3 + '\')" src="/img_bbs/bt_cause.gif" alt="확인" width="66" height="23" hspace="2" />'
                + '  <img style="cursor:pointer;" onclick="Schedule.LINK(\'' + e + '\',\'' + e1 + '\',\'UNDO\')" src="/img_bbs/bt_cancel.gif" alt="취소" width="66" height="23" hspace="2" /></td></tr>'
                + '</table> ';
            }
            else {
                document.getElementById("MSG_DELSE").innerHTML = "비밀번호가 일치하지 않습니다.";
            }
        }
        else if (e2 == 'UNDO') {
            Span_Obj2.style.display = '';
            Span_Obj11.innerHTML = '';
        }
        else if (e2 == 'GO') {
            location.href = m_page + '?T=L&w=' + e3;
        }
        else if (e2 == 'GO2') {
            //location.href = m_page + '?T=L&w=' + e3;
            var ifr;
            ifr = document.getElementById("ifr_Schedule_N_" + e1);

            ifr.src = '/common/Schedule/SchedulePass.aspx'
                + '?Ncode=' + Schedule_Ncode[e1] + '&type=' + Schedule_TYPE1[e1]
                + '&Num=' + nummm_Schedule + '&NumP=' + RequestS.Num + '&ps=&EX=' + RequestS.EX
                + '&w=' + e3
                + '&MAIN=' + Schedule_TYPE8[e1]
                + '&LINK=' + Schedule_TYPE9[e1] + "&pdn=" + XncodeUR(PageBaseInfo.domain);
        }
    }
}

function CHKE_Schedule_DEF(e, e1) {
    var table_OP_____ = document.getElementById("input_TABD");
//    alert(table_OP_____.getElementsByTagName('TR')[20].innerHTML); 
//    alert(table_OP_____.getElementsByTagName('TR')[21].innerHTML);
    if (Schedule_ContactAddress[e1] == 0) { /*연락처*/
        table_OP_____.getElementsByTagName('TR')[6].style.display = "none";
        table_OP_____.getElementsByTagName('TR')[7].style.display = "none";
    }
    if (Schedule_ContactAddress2[e1] == 1) {/*연락처*/
        table_OP_____.getElementsByTagName('TR')[6].getElementsByTagName('TD')[0].innerHTML +=  '*';
    }

    if (Schedule_EmailWrite[e1] == 0) { /*이메일*/
        table_OP_____.getElementsByTagName('TR')[8].style.display = "none";
        table_OP_____.getElementsByTagName('TR')[9].style.display = "none";
    }
    if (Schedule_EmailWrite2[e1] == 1) { /*이메일*/
        table_OP_____.getElementsByTagName('TR')[8].getElementsByTagName('TD')[0].innerHTML += '*';
    }
    
    
    if (Schedule_TitleWrite[e1] == 0 && Schedule_TitleWrite2[e1] == 0 && Schedule_TitleWrite3[e1] == 0) { /*제목효과*/
        table_OP_____.getElementsByTagName('TR')[12].style.display = "none";
        table_OP_____.getElementsByTagName('TR')[13].style.display = "none";
    }
    else {
        try {
            if (Schedule_TitleWrite[e1] == 0) {
                table_OP_____.getElementsByTagName('TR')[12].getElementsByTagName('TD')[1].getElementsByTagName('SELECT')[0].style.display = "none";
            }
            if (Schedule_TitleWrite2[e1] == 0) {
                table_OP_____.getElementsByTagName('TR')[12].getElementsByTagName('TD')[1].getElementsByTagName('SELECT')[1].style.display = "none";
            }
            if (Schedule_TitleWrite3[e1] == 0) {
                table_OP_____.getElementsByTagName('TR')[12].getElementsByTagName('TD')[1].getElementsByTagName('SELECT')[2].style.display = "none";
            }
        } catch (err) { }
    }
    if (Schedule_SpamUsed[e1] == 0) { /*자동글방지*/
        table_OP_____.getElementsByTagName('TR')[22].style.display = "none";
        table_OP_____.getElementsByTagName('TR')[23].style.display = "none";
    }
    if (Schedule_FileUpUsed[e1] == 0) { /*파일*/
        table_OP_____.getElementsByTagName('TR')[20].style.display = "none";
        table_OP_____.getElementsByTagName('TR')[21].style.display = "none";
    }
    if (Schedule_Editer[e1] == 0)
    { document.getElementById("txt_Mcontent").value = document.getElementById("txt_Mcontent").value.replaceAll("\n<br/>", "\n"); }
    
}
function CHKE_Schedule(e, e1) {
    document.getElementById("txt_write_name").value == ""
    if (document.getElementById("txt_write_name").value == "") {
        alert("작성자을 선택하여 주십시요.");
        document.getElementById("txt_write_name").focus();
        return false;
    }
    if (document.getElementById("txt_write_id").value == "") {
        document.getElementById("txt_write_nick").value = document.getElementById("txt_write_name");
    }
    if (document.getElementById("txt_write_id").value == "") {
        if (document.getElementById("txt_pwd").value == "") {
            alert("비밀번호을 선택하여 주십시요.");
            try { document.getElementById("txt_pwd").focus(); } catch (err) { }
            return false;
        }
    }
    if (Schedule_ContactAddress2[e1] == 1) {
        if (document.getElementById("txt_phone1").value.trim() == "") {
            alert("연락처을 입력하여 주십시요.");
            document.getElementById("txt_phone1").focus();
            return false;
        }
        if (document.getElementById("txt_phone2").value.trim() == "") {
            alert("연락처을 입력하여 주십시요.");
            document.getElementById("txt_phone2").focus();
            return false;
        }
        if (document.getElementById("txt_phone3").value.trim() == "") {
            alert("연락처을 입력하여 주십시요.");
            document.getElementById("txt_phone3").focus();
            return false;
        }
    }
    if (Schedule_EmailWrite2[e1] == 1) {
        if (document.getElementById("TEXT_email_1").value.trim() == "") {
            alert("이메일을 입력하여 주십시요.");
            document.getElementById("TEXT_email_1").focus();
            return false;
        }
        if (document.getElementById("DDL_email").value == "etc") {
            if (document.getElementById("TEXT_email_2").value.trim() == "") {
                alert("이메일을 입력하여 주십시요.");
                document.getElementById("TEXT_email_2").focus();
                return false;
            }
        }
        else if (document.getElementById("DDL_email").value.trim() == "") {
            alert("이메일을 선택하여 주십시요.");
            document.getElementById("DDL_email").focus();
            return false;
        }
    }
    if (document.getElementById("txt_title").value.trim() == "") {
        alert("제목을 입력하여 주십시요.");
        document.getElementById("txt_title").focus();
        return false;
    }

    if (Schedule_BadnessWordUsed[e1] == 1 && Schedule_BadnessWord[e1] != "") {
        var m_retx = CHE_BADWORD(document.getElementById("txt_title").value, Schedule_BadnessWord[e1]);
        if (m_retx != "") {

            alert("[" + m_retx + "]을 불량단어로 등록되어있어서 \n\n저장이 불가하므로 변경해 주십시오.");
            document.getElementById("txt_title").focus();
            return false;
        }
    } 
     
    if (Schedule_Editer[e1] == 1) {
        var oEditor = FCKeditorAPI.GetInstance('txt_Mcontent');
        if (oEditor) {
            var editContents = FCKeditor.prototype.innerTEXT("txt_Mcontent");// oEditor.EditorDocument.body.innerText;
            if (editContents.split(" ").join("") == "") {
                alert("내용을 입력하세요.");
                try { oEditor.EditorDocument.body.focus(); } catch (err) { }
                return false;
            }
            var M_HTML = oEditor.GetXHTML(true);
            if (M_HTML != "") {
                if (Schedule_BadnessWordUsed[e1] == 1 && Schedule_BadnessWord[e1] != "") {
                    var m_retx = CHE_BADWORD(M_HTML, Schedule_BadnessWord[e1]);
                    if (m_retx != "") {

                        alert("[" + m_retx + "]을 불량단어로 등록되어있어서 \n\n저장이 불가하므로 변경해 주십시오.");
                        try { oEditor.EditorDocument.body.focus(); } catch (err) { }
                        return false;
                    }
                }
            }
        }
    }
    else {
        if (Schedule_BadnessWordUsed[e1] == 1 && Schedule_BadnessWord[e1] != "") {
            var m_retx = CHE_BADWORD(document.getElementById("txt_Mcontent").value, Schedule_BadnessWord[e1]);
            if (m_retx != "") {

                alert("[" + m_retx + "]을 불량단어로 등록되어있어서 \n\n저장이 불가하므로 변경해 주십시오.");
                document.getElementById("txt_Mcontent").focus();
                return false;
            }
        }
    }
    if (Schedule_SpamUsed[e1] == 1) {
        if (document.getElementById('TEXT_COMT').value.trim() == '') {
            alert('자동글방지을 입력하여 주십시요.');
            try { document.getElementById('TEXT_COMT').focus(); } catch (err) { }
            return false;
        }
        if (document.getElementById('TEXT_COMT').value.trim() != document.getElementById('TEXT_COMT_2').value) {
            alert('자동글방지가 정확하지 않습니다.\n다시입력하여 주십시요.');
            try { document.getElementById('TEXT_COMT').value = ''; } catch (err) { }
            try { document.getElementById('TEXT_COMT').focus(); } catch (err) { }
            return false;
        } 
    } 
    Schedule_TYPE3[e1] = "true";
    Schedule_TYPE4[e1] = RequestS.EX;
    Schedule_TYPE5[e1] = e;
    
    if (Schedule_FileUpUsed[e1] == 1) {
        var submitObj = document.getElementById("txt_hid_submit");
        if (submitObj.value == "ok") {
            return true;
        }
        if (ifrFileUpload.sUploadSize.innerHTML == "0 Byte" && ifrFileUpload.delIdx == "")  {
            submitObj.value = "ok";
            return true;
        }
        else {
            var submitObj = document.getElementById("txt_hid_submit");
            submitObj.value = "ok";
            ifrFileUpload.NfUpload.FileUpload();
            return false;
        }
    }
    else {
        return true;
    }
}

function FILES_go_Schedule(Num) { 
    if (Schedule_TYPE4[Num] == "NEW") {
        Schedule.INPUTSUBMIT(Schedule_TYPE5[Num], Num); 
    }
    else if (Schedule_TYPE4[Num] == "EDITE") {
        Schedule.UPDATESUBMIT(Schedule_TYPE5[Num], Num);
    }
}