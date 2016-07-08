var BoardSubmit = 0;


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
String.prototype.trim = function () { return this.replace(/(^\s*)|(\s*$)/gi, ""); }
String.prototype.replaceAll = function (str1, str2) { var temp_str = ""; if (this.trim() != "" && str1 != str2) { temp_str = this.trim(); while (temp_str.indexOf(str1) > -1) { temp_str = temp_str.replace(str1, str2); } } return temp_str; }
String.prototype.replaceAll2 = function (str1, str2) { var temp_str = this.trim(); temp_str = temp_str.replace(eval("/" + str1 + "/gi"), str2); return temp_str; }
function createRequestObject() { if (window.XMLHttpRequest) { return xmlhttprequest = new XMLHttpRequest(); } else if (window.ActiveXObject) { return xmlhttprequest = new ActiveXObject("Microsoft.XMLHTTP"); } }






var Consult_TYPE1 = new Array();
var Consult_TYPE2 = new Array();
var Consult_TYPE3 = new Array();
var Consult_TYPE4 = new Array();
var Consult_TYPE5 = new Array();
var Consult_TYPE6 = new Array();
var Consult_TYPE7 = new Array();
var Consult_TYPE8 = new Array();
var Consult_TYPE9 = new Array();
var Consult_TYPE10 = new Array();
var nummm_Consult = 0;
var Seed_Consult_n = false;

var Consult_Ncode = new Array();
var Consult_title = new Array();
var Consult_url = new Array();
var Consult_Align = new Array();
var Consult_Twidth = new Array();
var Consult_message = new Array();
var Consult_Docid = new Array();
var Consult_FileUpUsed = new Array();
var Consult_FileUpSize = new Array();
var Consult_FileUpCount = new Array();
var Consult_FileUpType = new Array();
var Consult_SpamUsed = new Array();
var Consult_bg = new Array();
var Consult_bgcolor = new Array();
var Consult_bgimage = new Array();
var Consult_titlebg = new Array();
var Consult_titlefontcolor = new Array();
var Consult_line = new Array();
var Consult_linecolor = new Array();
var Consult_lineimage = new Array();
var Consult_SaveBTN = new Array();
var Consult_CancelBTN = new Array();
var Consult_TopHTML = new Array();
var Consult_FotHTML = new Array();
var Consult_Link = new Array();

var Consult_SaveBTN_W = new Array();
var Consult_CancelBTN_W = new Array();
var Consult_SaveBTN_H = new Array();
var Consult_CancelBTN_H = new Array();




var Consult_COll = new Array("Ncode", "title", "url", "Align", "Twidth", "message", "Docid", "FileUpUsed"
, "FileUpSize", "FileUpCount", "FileUpType", "SpamUsed", "bg", "bgcolor", "bgimage", "titlebg"
, "titlefontcolor", "line", "linecolor", "lineimage", "SaveBTN", "CancelBTN", "SaveBTN_W", "CancelBTN_W"
, "SaveBTN_H", "CancelBTN_H", "TopHTML", "FotHTML", "Link");

var Consult_COll_BTN = new Array("SaveBTN", "CancelBTN");


var Consult = {
    obj: null,
    none: "none",
    MAKE: function (e, e1, e2) /*보드 리스트*/
    {
        if (e == 'LOAD' || e == 'MAIN') {
            for (var nn = 0; nn < Consult_Seed.length; nn++) {
                if (Consult_Seed[nn] == e1) {
                    Seed_Consult_n = true;
                    break;
                }
            }

            if (Seed_Consult_n) {
                nummm_Consult++;

                for (NCO = 0; NCO < Consult_COll.length; NCO++) {
                    var NN_obj1 = eval("Consult_" + e1 + "_" + Consult_COll[NCO]);
                    var NN_obj2 = eval("Consult_" + Consult_COll[NCO]);
                    NN_obj2[nummm_Consult] = NN_obj1;
                }

                Consult_TYPE1[nummm_Consult] = RequestS.T;
                Consult_TYPE3[nummm_Consult] = "false";

                var temp_style = '';
                for (NCO = 0; NCO < Consult_COll_BTN.length; NCO++) {
                    var NN_obj1 = eval("Consult_" + Consult_COll_BTN[NCO]);
                    var NN_obj2 = eval("Consult_" + Consult_COll_BTN[NCO] + "_W");
                    var NN_obj3 = eval("Consult_" + Consult_COll_BTN[NCO] + "_H");

                    temp_style += ".Consult_" + Consult_COll_BTN[NCO] + "_" + nummm_Consult + "_VN"
                    temp_style += "{top:" + parseInt(NN_obj3[nummm_Consult] / 2 + 1) + "px;";
                    temp_style += " padding:" + (NN_obj3[nummm_Consult]) + "px 0px 0px " + (NN_obj2[nummm_Consult]) + "px;";
                    temp_style += "	cursor: hand; position:relative;";
                    temp_style += "	background-image: url(" + NN_obj1[nummm_Consult] + ") ;  ";
                    temp_style += "	background-repeat:no-repeat;";
                    temp_style += "	height:" + NN_obj3[nummm_Consult] + "px;";
                    temp_style += "	width:" + NN_obj2[nummm_Consult] + "px;font-size:1px;";
                    temp_style += "}";
                }
                if (Consult_line[nummm_Consult] == 0) {
                    temp_style += ".SPAN_Consult_" + nummm_Consult + "_line{"
                    + "background-color:" + Consult_linecolor[nummm_Consult] + "; "
                    + "}";
                }
                else if (Consult_line[nummm_Consult] == 1) {
                    temp_style += ".SPAN_Consult_" + nummm_Consult + "_line{"
                    + "background:url(" + Consult_lineimage[nummm_Consult] + ") repeat 0 0; "
                    + "}";
                }
                temp_style += ".SPAN_Consult_" + nummm_Consult + "_title{"
                    + "background-color:" + Consult_titlebg[nummm_Consult] + ";"
                    + "color:" + Consult_titlefontcolor[nummm_Consult] + ";"
                    + "}";
                document.write('<style>' + temp_style + '</style>');

                if (Consult_TopHTML[nummm_Consult].indexOf("{link}") > -1) {
                    if (typeof ("PageBaseInfo") != "undefined") {
                        Consult_TopHTML[nummm_Consult] = Consult_TopHTML[nummm_Consult].replaceAll("{link}", PageBaseInfo.link);
                    }
                }
                if (Consult_FotHTML[nummm_Consult].indexOf("{link}") > -1) {
                    if (typeof ("PageBaseInfo") != "undefined") {
                        Consult_FotHTML[nummm_Consult] = Consult_FotHTML[nummm_Consult].replaceAll("{link}", PageBaseInfo.link);
                    }
                }

                if (e == "LOAD") {
                    document.write("" + Consult_TopHTML[nummm_Consult]
                + "<div class=\"TBoardRound0\" align=\"" + Consult_Align[nummm_Consult] + "\" style=\"width:100%;\">"
	            + "<div class=\"TBoardRound1\" style=\"width:" + Consult_Twidth[nummm_Consult] + "px; table-layout:fixed;\">"
                + "<div id=\"SPAN_Consult_" + nummm_Consult + "_back\">"
                + "<span id=\"SPAN_Consult_" + nummm_Consult + "_01\"></span>"
                + "<span id=\"SPAN_Consult_" + nummm_Consult + "_02\"></span>"
                + "<span id=\"SPAN_Consult_" + nummm_Consult + "_03\"></span>"
                + "<span id=\"SPAN_Consult_" + nummm_Consult + "_04\"></span>"
                + "<span id=\"SPAN_Consult_" + nummm_Consult + "_05\"></span>"
                + "<span id=\"SPAN_Consult_" + nummm_Consult + "_06\"></span>"
                + "<span id=\"SPAN_Consult_" + nummm_Consult + "_07\"></span>"
                + "<span id=\"SPAN_Consult_" + nummm_Consult + "_08\"></span>"
                + "<span id=\"SPAN_Consult_" + nummm_Consult + "_09\"></span>"
                + "<span id=\"SPAN_Consult_" + nummm_Consult + "_10\"></span>"
                + "<span id=\"SPAN_Consult_" + nummm_Consult + "_11\"></span>"
                + "</div></div></div>" + Consult_FotHTML[nummm_Consult]);
                }
                else {
                    document.write(""
                    + "<span id=\"SPAN_Consult_" + nummm_Consult + "_back\">"
                    + "<span id=\"SPAN_Consult_" + nummm_Consult + "_01\"></span>"
                    + "<span id=\"SPAN_Consult_" + nummm_Consult + "_02\"></span>"
                    + "<span id=\"SPAN_Consult_" + nummm_Consult + "_03\"></span>"
                    + "<span id=\"SPAN_Consult_" + nummm_Consult + "_04\"></span>"
                    + "<span id=\"SPAN_Consult_" + nummm_Consult + "_05\"></span>"
                    + "<span id=\"SPAN_Consult_" + nummm_Consult + "_06\"></span>"
                    + "<span id=\"SPAN_Consult_" + nummm_Consult + "_07\"></span>"
                    + "<span id=\"SPAN_Consult_" + nummm_Consult + "_08\"></span>"
                    + "<span id=\"SPAN_Consult_" + nummm_Consult + "_09\"></span>"
                    + "<span id=\"SPAN_Consult_" + nummm_Consult + "_10\"></span>"
                    + "<span id=\"SPAN_Consult_" + nummm_Consult + "_11\"></span>"
                    + "</span>");
                }

                Consult_TYPE2[nummm_Consult] = temp_style;


                if (Consult_TYPE1[nummm_Consult] == "") { Consult_TYPE1[nummm_Consult] = "W"; }


                var Span_Obj1 = document.getElementById("SPAN_Consult_" + nummm_Consult + "_01");
                var Span_Obj2 = document.getElementById("SPAN_Consult_" + nummm_Consult + "_02");
                var Span_Obj3 = document.getElementById("SPAN_Consult_" + nummm_Consult + "_03");
                var Span_Obj4 = document.getElementById("SPAN_Consult_" + nummm_Consult + "_04");
                var Span_Obj5 = document.getElementById("SPAN_Consult_" + nummm_Consult + "_05");
                var Span_Obj6 = document.getElementById("SPAN_Consult_" + nummm_Consult + "_06");
                var Span_Obj7 = document.getElementById("SPAN_Consult_" + nummm_Consult + "_07");
                var Span_Obj8 = document.getElementById("SPAN_Consult_" + nummm_Consult + "_08");
                var Span_Obj9 = document.getElementById("SPAN_Consult_" + nummm_Consult + "_09");
                var Span_Obj10 = document.getElementById("SPAN_Consult_" + nummm_Consult + "_10");
                var Span_Obj11 = document.getElementById("SPAN_Consult_" + nummm_Consult + "_11");

                Consult_TYPE8[nummm_Consult] = e;
                Consult_TYPE9[nummm_Consult] = e2;

                Span_Obj1.innerHTML = '<iframe title="' + Consult_title[nummm_Consult] + ' 저장기능 관련 입니다." id="ifr_Consult_N_' + nummm_Consult + '" style="display: ' + this.none + ';" '
                + ' name="ifr_Consult_N_' + nummm_Consult + '" src="/common/Consult/ConsultPass.aspx'
                + '?Ncode=' + Consult_Ncode[nummm_Consult] + '&type=' + Consult_TYPE1[nummm_Consult]
                + '&Num=' + nummm_Consult + '&NumP=' + RequestS.Num + '&ps=' + notice_getcookie2("pwd" + RequestS.Num)
                + '&EX=' + RequestS.EX + '&w=' + RequestS.w + '&MAIN=' + e + '&LINK=' + e2 + "&pdn=" + XncodeUR(PageBaseInfo.domain)
                + '" frameborder=0 marginwidth=0 width=100% height=300 scrolling=yes></iframe>';

            }
            else {
                document.write("<a href=\"#\">[" + e1 + "]존재하지 않는 상담게시판입니다.</a>");
            }

        }
    },
    INPUT: function (e, e1) /*입력*/
    {

        var Span_Obj1 = document.getElementById("SPAN_Consult_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Consult_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Consult_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Consult_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Consult_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Consult_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Consult_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Consult_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Consult_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Consult_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Consult_" + e1 + "_11");
        var ifr;
        ifr = document.getElementById("ifr_Consult_N_" + e1).contentWindow;

        var HTMLDL = ''
        + '<div class="divTable" style="width:100%; height:18px;"><div class="divRow"><div class="divColumn" style="width:100%;text-align:right;height:15px;">(*표시는 필수 입력사항입니다.)</div></div></div>'

        + '<table id="input_TABD" name="input_TABD"  width="100%" border="0" cellspacing="0" cellpadding="4" summary="' + Consult_title[e1] + ' 글내용을 작성하는 페이지 입니다.">'
        + '<caption class="dcaption" >' + Consult_title[e1] + ' 글내용을 작성하는 페이지 입니다.</caption>'
        + '<thead class="dcaption" ><th scope="col">컬럼명</th><th scope="col">등록 내용</th></thead><tbody>'
        + '<tr><td colspan="2" bgcolor="#818181" class="pad0"><div class="dheight_1"></div></td></tr>'
        + '<tr><td colspan="2" bgcolor="#f0f0f0" class="pad0 SPAN_Consult_' + e1 + '_line" ><div class="dheight_2"></div></td></tr>'

        + '<tr style="display:none;"><td width="20%" align="left" bgcolor="#f8f8f8" class="padL15 SPAN_Consult_' + nummm_Consult + '_title">작성자*</td>'
        + '<td align="left" class="padL15">'
        + '<label class="dcaption" for="txt_write_id" >작성자 아이디</label>'
        + '<input name="txt_write_id" type="text" id="txt_write_id" readOnly="true" style="display:none;" title="작성자 아이디" />'
        + '<label class="dcaption" for="txt_write_name" >작성자 이름</label>'
        + '<input name="txt_write_name" type="text" id="txt_write_name" readOnly="true"  maxlength="15" onblur="CheckHangulN(this);"  title="작성자 이름" />'
        + '<label class="dcaption" for="txt_write_nick" >작성자 닉네임</label>'
        + '<input name="txt_write_nick" type="text" id="txt_write_nick" readOnly="true" style="display:none;"  title="작성자 닉네임"/>'
        + '<label class="dcaption" for="txt_write_ip" >작성자 아이피</label>'
        + '<input name="txt_write_ip" type="text" id="txt_write_ip" readOnly="true" style="display:none;" title="작성자 아이피" />'
        + '<span class="helptxt"> (예:홍길동)</span></td></tr>'
        + '<tr  style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="pad0 SPAN_Consult_' + e1 + '_line"  ><div class="dheight_1"></div></td></tr>';



        for (var Un = 1; Un <= 20; Un++) {
            HTMLDL += ''
            + '<tr id="tr_PlusField' + Un + '_1" name="tr_PlusField' + Un + '_1" style="display:none;">'
            + '<td align="left" bgcolor="#f8f8f8" class="padL15 SPAN_Consult_' + nummm_Consult + '_title"  >'
            + '<label id="td_PlusField' + Un + '_1" name="td_PlusField' + Un + '_1" for="TEXT_INP' + Un + '" ></label>'
            //            + '<label class="dcaption" for="TEXT_INP' + Un + '_1" ></label>'
            //            + '<label class="dcaption" for="TEXT_INP' + Un + '_2" ></label>'
            //            + '<label class="dcaption" for="TEXT_INP' + Un + '_3" ></label>'
            //            + '<label class="dcaption" for="DDL_INP' + Un + '" ></label>' 
            + '</td>'
            + '<td align="left" class="padL15"  id="td_PlusField' + Un + '_2" name="td_PlusField' + Un + '_2" ></td></tr>'
            + '<tr id="tr_PlusField' + Un + '_2" name="tr_PlusField' + Un + '_2" style="display:none;" >'
            + '<td colspan="2" bgcolor="#d9d9d9" class="pad0 SPAN_Consult_' + e1 + '_line"><div class="dheight_1"></div></td></tr>';
        }




        HTMLDL += ''
        + '<tr id="tr_FileUpUsed1" style="display:none;" ><td  colspan="2" id="iframe_N"></td></tr>'
        + '<tr id="tr_SpamUsed0" style="display:none;" ><td colspan="2" bgcolor="#d9d9d9" class="pad0 SPAN_Consult_' + e1 + '_line" ><div class="dheight_1"></div></td></tr>'
        + '<tr id="tr_SpamUsed1" style="display:none;"><td align="left" bgcolor="#f8f8f8" class="padL15 SPAN_Consult_' + nummm_Consult + '_title"><label for="TEXT_COMT">자동글방지*</label></td>'
        + '<td align="left" class="padL15"><span id="SPAM_COMT_0" name="SPAM_COMT_0" >' + RENDOMS() + '</span>'

            + '<label class="dcaption" for="TEXT_COMT" >자동글방지 [' + SPAM_str + ']을 입력하여 주십시요</label>'
        + '<input title="자동글방지 [' + SPAM_str + ']을 입력하여 주십시요" maxlength="4" onkeydown="if(event.keyCode ==13){return false}" value2="' + SPAM_str + '"  size="10" id="TEXT_COMT" name="TEXT_COMT" type="text" /><span class="helptxt">'
            + '<label class="dcaption" for="TEXT_COMT_2" >자동글방지 참고 저장용</label>'
        + '<input title="자동글방지 참고 저장용" value="' + SPAM_str + '"  size="10" id="TEXT_COMT_2" name="TEXT_COMT_2" type="hidden" /> '

        + ' * 대소문자를 구분하여 <font color="#ff0000">빨간글자만</font> 순서대로 입력하세요.</span></td></tr>'
        + '<tr id="tr_SpamUsed2" style="display:none;"  ><td colspan="2" bgcolor="#d9d9d9" class="pad0 SPAN_Consult_' + e1 + '_line"><div class="dheight_1"></div></td></tr>'
        + '</table></td></tr>'
        + '<tr><td align="center">'
            + '<label class="dcaption" for="txt_idx" >콘텐츠 정보 저장용</label>'
        + '<input name="txt_idx" id="txt_idx" type="text" style="display:none;" />'
            + '<label class="dcaption" for="txt_Docid" >콘텐츠 정보 저장용</label>'
        + '<input name="txt_Docid" id="txt_Docid" type="text" style="display:none; width:100%;"    />'
            + '<label class="dcaption" for="txt_hid_submit" >콘텐츠 정보 저장용</label>'
        + '<input name="txt_hid_submit" id="txt_hid_submit" type="text" style="display:none;width:100%;"    />'
        + '<img id="btn_OK_' + e1 + '_1" onclick="Consult.INPUTSUBMIT(\'' + e + '\',\'' + e1 + '\');"  style="cursor:pointer;display:none;" src="' + PageBaseInfo.BF + Consult_SaveBTN[e1] + '" alt="저장"  hspace="2" />'
        + '<img id="btn_OK_' + e1 + '_3" onclick="history.back();"  style="cursor:pointer;display:none;" src="' + PageBaseInfo.BF + Consult_CancelBTN[e1] + '" alt="취소"    hspace="2" />'
        + '</td>'
        + '</tr>'
        + '</tbody>'
        + '</table>';
        Span_Obj2.innerHTML = HTMLDL;




        if (Consult_FileUpUsed[e1] == 1) {
            document.getElementById("tr_FileUpUsed1").style.display = "";
        }


        if (Consult_SpamUsed[e1] == 1) {
            document.getElementById("tr_SpamUsed0").style.display = "";
            document.getElementById("tr_SpamUsed1").style.display = "";
            document.getElementById("tr_SpamUsed2").style.display = "";
        }


        if (RequestS.EX == "") {

            document.getElementById("iframe_N").innerHTML = '<iframe title="첩부화일관련" id="ifrFileUpload" name="ifrFileUpload" src="/COMMON/NFUpload/nfupload_ifr3.aspx?Docid=' + ifr.document.getElementById('txt_USER12').value + "&Num=" + e1 + '"  frameborder=0 marginwidth=0 width=100% height=115 scrolling=no></iframe>';
            document.getElementById("txt_Docid").value = ifr.document.getElementById('txt_USER12').value;
            document.getElementById("txt_idx").value = "0";
            document.getElementById("txt_write_id").value = ifr.document.getElementById('txt_USER06').value;
            document.getElementById("txt_write_name").value = ifr.document.getElementById('txt_USER07').value;
            document.getElementById("txt_write_nick").value = ifr.document.getElementById('txt_USER08').value;

            if (Consult_Docid[e1] != "") { DATEOP_Docid2(Consult_Docid[e1], ifr.document.getElementById('txt_USER01').value.trim(), e1); }


            document.getElementById("btn_OK_" + e1 + "_1").style.display = "";
            document.getElementById("btn_OK_" + e1 + "_3").style.display = "";
        }
    },
    INPUTSUBMIT: function (e, e1) /*입력*/
    {
        var MMx = CHKE_Consult(e, e1);

        if (MMx == false) {
            return;
        }

        if (Consult_TYPE3[e1] == "false") return;

        var Span_Obj1 = document.getElementById("SPAN_Consult_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Consult_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Consult_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Consult_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Consult_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Consult_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Consult_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Consult_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Consult_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Consult_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Consult_" + e1 + "_11");
        var ifr;
        ifr = document.getElementById("ifr_Consult_N_" + e1).contentWindow;

        var pwd_____ = "";
        var phone_____ = "";
        var email_____ = "";
        var title_____ = "";
        var Docid_____ = "";
        var WRITER____ = "";
        var RES_ = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");

        for (var NNX = 1; NNX <= 20; NNX++) {
            if (document.getElementById("tr_PlusField" + NNX + "_1").style.display == "") {
                var VAR__01 = document.getElementById("td_PlusField" + NNX + "_1").value;
                //var VAR__02 = document.getElementById("td_PlusField" + NNX + "_1").value2;
                //var VAR__022 = document.getElementById("td_PlusField" + NNX + "_1").value3;
                var VAR__02 = document.getElementById("td_PlusField" + NNX + "_1").help.split(':')[0];
                var VAR__022 = document.getElementById("td_PlusField" + NNX + "_1").help.split(':')[1];
                var VAR__03 = document.getElementById("td_PlusField" + NNX + "_1").innerHTML.replaceAll("*", "");

                RES_[NNX] = GetValue(NNX + '', 'INP' + NNX + '');
                if (VAR__02 == "PASS" && pwd_____ == "" && VAR__022 == "1") {
                    pwd_____ = RES_[NNX];
                }
                else if (VAR__02 == "TEXTAREA" && title_____ == "" && VAR__022 == "1") {
                    title_____ = RES_[NNX];
                }
                else if (VAR__02 == "TEXT" && title_____ == "" && VAR__022 == "1") {
                    WRITER____ = RES_[NNX];

                }
                else if (VAR__02 == "PHONE" && phone_____ == "" && VAR__022 == "1") {
                    phone_____ = RES_[NNX];
                }
                else if (VAR__02 == "EMAIL" && email_____ == "" && VAR__022 == "1") {
                    email_____ = RES_[NNX];
                }
                /*
                alert("VAR__02 :" + VAR__02 + "\r\n"
                + "VAR__022 :" + VAR__022 + "\r\n"
                + "VAR__03 :" + VAR__03 + "\r\n"
                + "RES_[" + NNX + "]:" + RES_[NNX]); 
                */
            }
        }
        //이름  이메일  연락처
        /*
        alert(phone_____ + "\r\n"
        + "," + email_____ + "\r\n"
        + "," + title_____);
        return;
        */

        document.getElementById("txt_write_name").value = WRITER____;
        if (document.getElementById("txt_write_id").value == "") {
            document.getElementById("txt_write_nick").value = document.getElementById("txt_write_name");
        }
        /*
        document.getElementById("txt_write_name").value == ""
        if (document.getElementById("txt_write_name").value == "") {
        alert("작성자을 선택하여 주십시요.");
        document.getElementById("txt_write_name").focus();
        return false;
        }
        if (document.getElementById("txt_write_id").value == "") {
        document.getElementById("txt_write_nick").value = document.getElementById("txt_write_name");
        }
        */
        if (BoardSubmit > 0) { return; }
        BoardSubmit++;
        Docid_____ = document.getElementById("txt_Docid").value;

        ifr.document.getElementById('txt_BOX01').value = Consult_Ncode[e1];
        ifr.document.getElementById('txt_BOX02').value = document.getElementById('txt_write_id').value;
        ifr.document.getElementById('txt_BOX03').value = document.getElementById('txt_write_name').value;
        ifr.document.getElementById('txt_BOX04').value = document.getElementById('txt_write_nick').value;
        ifr.document.getElementById('txt_BOX05').value = "";
        ifr.document.getElementById('txt_BOX06').value = pwd_____;
        ifr.document.getElementById('txt_BOX07').value = phone_____;
        ifr.document.getElementById('txt_BOX08').value = email_____;
        ifr.document.getElementById('txt_BOX09').value = title_____;
        ifr.document.getElementById('txt_BOX10').value = Docid_____;

        ifr.document.getElementById('txt_BOX11').value = RES_[1];
        ifr.document.getElementById('txt_BOX12').value = RES_[2];
        ifr.document.getElementById('txt_BOX13').value = RES_[3];
        ifr.document.getElementById('txt_BOX14').value = RES_[4];
        ifr.document.getElementById('txt_BOX15').value = RES_[5];
        ifr.document.getElementById('txt_BOX16').value = RES_[6];
        ifr.document.getElementById('txt_BOX17').value = RES_[7];
        ifr.document.getElementById('txt_BOX18').value = RES_[8];
        ifr.document.getElementById('txt_BOX19').value = RES_[9];
        ifr.document.getElementById('txt_BOX20').value = RES_[10];
        ifr.document.getElementById('txt_BOX21').value = RES_[11];
        ifr.document.getElementById('txt_BOX22').value = RES_[12];
        ifr.document.getElementById('txt_BOX23').value = RES_[13];
        ifr.document.getElementById('txt_BOX24').value = RES_[14];
        ifr.document.getElementById('txt_BOX25').value = RES_[15];
        ifr.document.getElementById('txt_BOX26').value = RES_[16];
        ifr.document.getElementById('txt_BOX27').value = RES_[17];
        ifr.document.getElementById('txt_BOX28').value = RES_[18];
        ifr.document.getElementById('txt_BOX29').value = RES_[19];
        ifr.document.getElementById('txt_BOX30').value = RES_[20];

        ifr.document.getElementById('submitBTN').click();
        /*alert("INPUTSUBMIT:" + Consult_Ncode[e1]);*/
    },
    NOUSED: function (e, e1) /*입력*/
    {
        var Span_Obj1 = document.getElementById("SPAN_Consult_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Consult_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Consult_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Consult_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Consult_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Consult_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Consult_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Consult_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Consult_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Consult_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Consult_" + e1 + "_11");
        //Span_Obj2.innerHTML = '<br /><br /><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#d9d9d9"><div class="dheight_1"></div></td></tr><tr><td align="center"><img src="/img/none_power.gif" /></td></tr><tr><td bgcolor="#d9d9d9"><div class="dheight_1"></div></td></tr></table><br />';

        Span_Obj2.innerHTML = ''
+ '<br /><br />'
+ '<table width="100%" border="0" cellspacing="0" cellpadding="0">'
+ '<tr><td bgcolor="#d9d9d9"><div class="dheight_1"></div></td></tr>'
+ '<tr><td align="center"><img src="/dbimage/Design/default/none_power.gif" border="0" usemap="#msgbt" />'
+ '<map name="msgbt" id="msgbt"><area shape="rect" coords="245,99,301,127" href="javascript:Next_Url_LD(\'MemLogin\');location.href=Next_Url+\'?preurl=\'+location.href.replaceAll(\'?\',\'^\') ;" /></map>'
+ '</td></tr>'
+ '<tr><td bgcolor="#d9d9d9"><div class="dheight_1"></div></td></tr>'
+ '</table><br /><br />';
    },
    NOUSED2: function (e, e1) /*입력*/
    {
        var Span_Obj1 = document.getElementById("SPAN_Consult_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Consult_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Consult_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Consult_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Consult_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Consult_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Consult_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Consult_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Consult_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Consult_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Consult_" + e1 + "_11");
        /*Span_Obj2.innerHTML = '<br /><br /><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#d9d9d9"><div class="dheight_1"></div></td></tr><tr><td align="center"><img src="/img/res_none.gif" /></td></tr><tr><td bgcolor="#d9d9d9"><div class="dheight_1"></div></td></tr></table><br />';*/
        alert("읽기권한이 없습니다.");
    },
    LINK: function (e, e1, e2, e3) /*링크*/
    {
        var Span_Obj1 = document.getElementById("SPAN_Consult_" + e1 + "_01");
        var Span_Obj2 = document.getElementById("SPAN_Consult_" + e1 + "_02");
        var Span_Obj3 = document.getElementById("SPAN_Consult_" + e1 + "_03");
        var Span_Obj4 = document.getElementById("SPAN_Consult_" + e1 + "_04");
        var Span_Obj5 = document.getElementById("SPAN_Consult_" + e1 + "_05");
        var Span_Obj6 = document.getElementById("SPAN_Consult_" + e1 + "_06");
        var Span_Obj7 = document.getElementById("SPAN_Consult_" + e1 + "_07");
        var Span_Obj8 = document.getElementById("SPAN_Consult_" + e1 + "_08");
        var Span_Obj9 = document.getElementById("SPAN_Consult_" + e1 + "_09");
        var Span_Obj10 = document.getElementById("SPAN_Consult_" + e1 + "_10");
        var Span_Obj11 = document.getElementById("SPAN_Consult_" + e1 + "_11");

        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }

        if (e2 == 'END') {
            Span_Obj1.style.display = 'none';
            Span_Obj2.style.display = 'none';
            Span_Obj3.style.display = 'none';
            Span_Obj4.style.display = 'none';
            Span_Obj5.style.display = 'none';
            Span_Obj6.style.display = 'none';
            Span_Obj7.style.display = 'none';
            Span_Obj8.style.display = 'none';
            Span_Obj9.style.display = 'none';
            Span_Obj10.style.display = 'none';

            if (Consult_Link[e1] == 0) {
                Span_Obj11.innerHTML = ''
+ '<br /><br />'
+ '<table width="100%" border="0" cellspacing="0" cellpadding="0">'
+ '<tr><td bgcolor="#d9d9d9"><div class="dheight_1"></div></td></tr>'
+ '<tr><td align="center"><img src="/dbimage/Design/default/req_none.gif" border="0" usemap="#msgbt" />'
+ '<map name="msgbt" id="msgbt"><area shape="rect" coords="245,99,301,127" href="/" /></map>'
+ '</td></tr>'
+ '<tr><td bgcolor="#d9d9d9"><div class="dheight_1"></div></td></tr>'
+ '</table><br /><br />';
            }
            else if (Consult_Link[e1] == 1) {
                Span_Obj11.innerHTML = ''
+ '<br /><br />'
+ '<table width="100%" border="0" cellspacing="0" cellpadding="0">'
+ '<tr><td bgcolor="#d9d9d9"><div class="dheight_1"></div></td></tr>'
+ '<tr><td align="center"><img src="/img/req_none.gif" border="0" usemap="#msgbt" />'
+ '<map name="msgbt" id="msgbt"><area shape="rect" coords="245,99,301,127" href="javascript:location.href=location.href;" /></map>'
+ '</td></tr>'
+ '<tr><td bgcolor="#d9d9d9"><div class="dheight_1"></div></td></tr>'
+ '</table><br /><br />';
            }
            else if (Consult_Link[e1] == 2) {
                Span_Obj11.innerHTML = ''
+ '<br /><br />'
+ '<table width="100%" border="0" cellspacing="0" cellpadding="0">'
+ '<tr><td bgcolor="#d9d9d9"><div class="dheight_1"></div></td></tr>'
+ '<tr><td align="center"><img src="/img/req_none.gif" border="0" usemap="#msgbt" />'
+ '<map name="msgbt" id="msgbt"><area shape="rect" coords="245,99,301,127" href="javascript:window.close();" /></map>'
+ '</td></tr>'
+ '<tr><td bgcolor="#d9d9d9"><div class="dheight_1"></div></td></tr>'
+ '</table><br /><br />';
            }

        }
        else if (e2 == 'END2') {
            alert('이미 등록되어 있습니다.');
            BoardSubmit = 0;
        }
        else if (e2 == 'END3') {
            alert('시스탬에 문제가 발생하였습니다.\\n관리자에게 문의하여 주십시요.');
        }
    }
}
function CHKE_Consult(e, e1) {
    /*
    document.getElementById("txt_write_name").value == ""
    if (document.getElementById("txt_write_name").value == "") {
    alert("작성자을 선택하여 주십시요.");
    document.getElementById("txt_write_name").focus();
    return false;
    }
    if (document.getElementById("txt_write_id").value == "") {
    document.getElementById("txt_write_nick").value = document.getElementById("txt_write_name");
    }
    */


    for (var NNX = 1; NNX <= 20; NNX++) {
        if (document.getElementById("tr_PlusField" + NNX + "_1").style.display == "") {
            var VAR__01 = document.getElementById("td_PlusField" + NNX + "_1").value;
            //var VAR__02 = document.getElementById("td_PlusField" + NNX + "_1").value2;
            //var VAR__022 = document.getElementById("td_PlusField" + NNX + "_1").value3;
            var VAR__02 = document.getElementById("td_PlusField" + NNX + "_1").help.split(":")[0];
            var VAR__022 = document.getElementById("td_PlusField" + NNX + "_1").help.split(":")[1];
            var VAR__03 = document.getElementById("td_PlusField" + NNX + "_1").innerHTML.replaceAll("*", "");
            if (VAR__01 == "*") {
                var Nx = chk_form_OP(VAR__02, "INP" + NNX, VAR__03, true);

                if (Nx == false) return false;
            }
            else {
                var Nx = chk_form_OP(VAR__02, "INP" + NNX, VAR__03, false);

                if (Nx == false) return false;
            }
        }
    }


    if (Consult_SpamUsed[e1] == 1) {
        if (document.getElementById('TEXT_COMT').value.trim() == '') {
            alert('자동글방지을 입력하여 주십시요.');
            try { document.getElementById('TEXT_COMT').focus(); } catch (err) { }
            return false;
        }
        if (document.getElementById('TEXT_COMT').value.trim() != document.getElementById('TEXT_COMT_2').value) {
            alert('자동글방지가 정확하지 않습니다.\n 다시입력하여 주십시요.');
            try { document.getElementById('TEXT_COMT').value = ''; } catch (err) { }
            try { document.getElementById('TEXT_COMT').focus(); } catch (err) { }
            return false;
        }
    }

    Consult_TYPE3[e1] = "true";
    Consult_TYPE4[e1] = RequestS.EX;
    Consult_TYPE5[e1] = e;

    if (Consult_FileUpUsed[e1] == 1) {
        var submitObj = document.getElementById("txt_hid_submit");
        if (submitObj.value == "ok") {
            return true;
        }
        if (ifrFileUpload.sUploadSize.innerHTML == "0 Byte" && ifrFileUpload.delIdx == "") {
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


function DATEOP_Docid2(Docid, root_s_, e1) {
    var ifr;
    ifr = document.getElementById("ifr_Consult_N_" + e1).contentWindow;
    try {
        var obj__n = eval("ConsultListItem_" + Docid);

        for (mm_ = 1; mm_ <= obj__n.length; mm_++) {
            if (mm_ > 20) continue;
            mm_Op = obj__n[mm_ - 1].split(':');
            if (mm_Op[1] == "0") {
                document.getElementById("tr_PlusField" + mm_ + "_1").style.display = "";
                document.getElementById("tr_PlusField" + mm_ + "_2").style.display = "";
            }
            else if (mm_Op[1] == "1") {
                if (root_s_ == "-1") {
                    document.getElementById("tr_PlusField" + mm_ + "_1").style.display = "";
                    document.getElementById("tr_PlusField" + mm_ + "_2").style.display = "";
                }
            }
            if (mm_Op[2] == "1") {
                document.getElementById("td_PlusField" + mm_ + "_1").innerHTML = mm_Op[0];
                document.getElementById("td_PlusField" + mm_ + "_1").value = "";
                //document.getElementById("td_PlusField" + mm_ + "_1").value2 = mm_Op[4];
                document.getElementById("td_PlusField" + mm_ + "_1").help = mm_Op[4];
            } else {
                document.getElementById("td_PlusField" + mm_ + "_1").innerHTML = mm_Op[0] + "*";
                document.getElementById("td_PlusField" + mm_ + "_1").value = "*";
                //document.getElementById("td_PlusField" + mm_ + "_1").value2 = mm_Op[4];
                document.getElementById("td_PlusField" + mm_ + "_1").help = mm_Op[4];
            }
            //document.getElementById("td_PlusField" + mm_ + "_1").value3 = mm_Op[8];
            document.getElementById("td_PlusField" + mm_ + "_1").help += ":" + mm_Op[8];

            document.getElementById("td_PlusField" + mm_ + "_2").innerHTML = MAKE_INPUT_TYPE_OP(mm_Op[4], "INP" + mm_, " " + mm_Op[3], mm_Op[5], mm_Op[6], mm_Op[7], mm_Op[0]);


            if (mm_Op[4] == "TEXT" && mm_Op[6] != "") {
                if (mm_Op[6] != "0") {
                    CHKPLUS("TEXT_INP" + mm_, "txt", parseInt(mm_Op[6]));
                }
            }
            else if (mm_Op[4] == "ADDRESS" && mm_Op[6] != "") {

                if (mm_Op[6] == "1") {
                    jQuery("#td_PlusField" + mm_ + "_1").attr("for", "txt_INP" + mm_ + "_zipcode1");
                    var ColumnName = "INP" + mm_;
                    var M__HTML_RET = ''
                    + ' <input id="txt_' + ColumnName + '_zipcode1" size="3" name="txt_' + ColumnName + '_zipcode1" type="text" readOnly="readOnly" /> - '
                    + ' <input id="txt_' + ColumnName + '_zipcode2" size="3" name="txt_' + ColumnName + '_zipcode2" type="text"  readOnly="readOnly" /> '
                    + ' <a href="#" onclick="MM_openBrWindow2(\'/COMMON/Address/Address.aspx?txt=' + ColumnName + '\',\'NwdAddress\',\'width=500,height=450\');return false;" >'
                    + '<img style="cursor:pointer" height="23" alt="우편번호검색" width="90" align="absMiddle" src="/img/bt_search_addr.gif" /></a><br/>'
                    + ' <input id="txt_' + ColumnName + '_addr1" style="width: 250px" name="txt_' + ColumnName + '_addr1" type="text" readOnly="readOnly" /><br/>'
                    + ' <input id="txt_' + ColumnName + '_addr2" style="width: 250px" name="txt_' + ColumnName + '_addr2" type="text" /> ';
                    document.getElementById("td_PlusField" + mm_ + "_2").innerHTML = M__HTML_RET;
                }

            }

            if (mm_Op[4] == "PHONE" && mm_Op[8] == "1") {
                var phone__ = ifr.document.getElementById('txt_USER05').value;
                var phone___ = phone__.split('-'); if (phone___.length > 2) {
                    document.getElementById("TEXT_INP" + mm_ + "_1").value = phone___[0];
                    document.getElementById("TEXT_INP" + mm_ + "_2").value = phone___[1];
                    document.getElementById("TEXT_INP" + mm_ + "_3").value = phone___[2];
                }
                jQuery("#td_PlusField" + mm_ + "_1").attr("for", "TEXT_INP" + mm_ + "_1");
            }
            else if (mm_Op[4] == "TEXT" && mm_Op[8] == "1") {
                document.getElementById("TEXT_INP" + mm_).value = ifr.document.getElementById('txt_USER07').value;
            }
            else if (mm_Op[4] == "EMAIL" && mm_Op[8] == "1") {
                jQuery("#td_PlusField" + mm_ + "_1").attr("for", "TEXT_INP" + mm_ + "_1");

                if (ifr.document.getElementById('txt_USER06').value.trim() != "") {
                    var email__ = ifr.document.getElementById('txt_USER04').value;
                    var email___ = email__.split('@');
                    if (email___.length > 1) {
                        document.getElementById("TEXT_INP" + mm_ + "_1").value = email___[0];
                        Teldd(document.getElementById("DDL_INP" + mm_ + ""), email___[1]);
                        if (document.getElementById("DDL_INP" + mm_ + "").value == '') {
                            document.getElementById("TEXT_INP" + mm_ + "_2").value = email___[1];
                            Teldd(document.getElementById("DDL_INP" + mm_ + ""), 'etc');
                            document.getElementById("TEXT_INP" + mm_ + "_2").style.display = '';
                        }
                        else {
                            Teldd(document.getElementById("DDL_INP" + mm_), email___[1]);
                        }
                    }
                }
            }
        }
    } catch (err) { }
}
function FILES_go_Consult(Num) {
    if (Consult_TYPE4[Num] == "") {
        Consult.INPUTSUBMIT(Consult_TYPE5[Num], Num);
    }
}
 