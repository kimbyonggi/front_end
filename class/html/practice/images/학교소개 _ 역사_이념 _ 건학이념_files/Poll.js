
///var banner_1_mouseEvent = 1;
/* banner_roll("div태그 id", 배너1개높이, 딜레이, 1칸이동속도, 0);*/
function banner_roll2(div_id, banner_height, banner_delay, banner_speed, this_height) {
    try {
        var obj_mm = document.getElementById(div_id + "_mouseEvent").value;
        if (obj_mm == "1") {
            var div_tag = document.getElementById(div_id);
            var a_tag, i;
            this_height += banner_speed;
            if (this_height < banner_height) {
                div_tag.style.top = -this_height;
                setTimeout("banner_roll2('" + div_id + "', " + banner_height + ", " + banner_delay + ", " + banner_speed + ", " + this_height + ");", banner_speed);
            }
            else {
                a_tag = div_tag.getElementsByTagName("TABLE");
                div_tag.appendChild(a_tag[0]);
                div_tag.style.top = 0;
                setTimeout("banner_roll2('" + div_id + "', " + banner_height + ", " + banner_delay + ", " + banner_speed + ", 0);", banner_delay);
            }
        }
        else {
            setTimeout("banner_roll2('" + div_id + "', " + banner_height + ", " + banner_delay + ", " + banner_speed + ", " + this_height + ");", banner_speed);
        }
    } catch (err) { }
    return true;
}


var NUMMM_Poll = 0;
var Poll_COMMENT_submit = 0;
var Poll = {
    obj: null,
    none: "none",
    MAKE: function(e1, e2, e3) {
        if (typeof (e2) == "undefined") {
            e2 = "";
        }
        if (typeof (e3) == "undefined") {
            e3 = "";
        }

        if (e1 == 'MAIN') {
                document.write(""
                + "<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width:100%; table-layout:fixed;\"><tr><td >"
	            + "<div id=\"SPAN_Poll_back\" class=\"SPAN_Poll_back\">"
                + "<span id=\"SPAN_Poll_01\"></span>"
                + "<span id=\"SPAN_Poll_02\"></span>"
                + "<span id=\"SPAN_Poll_03\"></span>"
                + "<span id=\"SPAN_Poll_04\"></span>"
                + "<span id=\"SPAN_Poll_05\"></span>"
                + "<span id=\"SPAN_Poll_06\"></span>"
                + "<span id=\"SPAN_Poll_07\"></span>"
                + "<span id=\"SPAN_Poll_08\"></span>"
                + "<span id=\"SPAN_Poll_09\"></span>"
                + "<span id=\"SPAN_Poll_10\"></span>"
                + "<span id=\"SPAN_Poll_11\"></span>"

                + "<span id=\"SPAN_Poll_12\">"
                + "<iframe id=\"ifr_Poll\" style=\"display:" + Poll.none + ";\"  "
                + " name=\"ifr_Poll\" src=\"/common/poll/poll.aspx"
                + "?T=M&w=" + encodeURIComponent(e2) + "&Num="+e3
                + "\"  "
                + " frameborder=0 marginwidth=0 width=100% height=300 scrolling=yes></iframe>"
                + "</span>"

                + "</div>"
                + "</td></tr></table>" );
        }
        else if (e1 == 'LOAD') 
        {
            var BTN_STYLE = Array("LIstBTN", "VoteBTN", "FindBTN", "FindCancelBTN", "CommentInputBTN", "CommentDeleteBTN", "CommentEditeBTN", "ShowBTN");
            var temp_style = '';



            if (PollSetup_N_bgint == 0) {
                if (PollSetup_N_bgcolor != "") {
                    temp_style += '.SPAN_Poll_back{background:' + PollSetup_N_bgcolor + ';}';
                }
            }
            else {
                if (PollSetup_N_bgimage != "") {
                    temp_style += '.SPAN_Poll_back{background: url(' + http_https() + location.host + PageBaseInfo.BF + PollSetup_N_bgimage + ') ' + PollSetup_N_bgcolor + '; }';
                }
            }

            if (PollSetup_N_listint == 0) {
                if (PollSetup_N_listbgcolor1 != "") {
                    temp_style += '.Poll_TOP1{background:' + PollSetup_N_listbgcolor1 + ';}';
                }
                if (PollSetup_N_listbgcolor2 != "") {
                    temp_style += '.Poll_TOP2{background:' + PollSetup_N_listbgcolor2 + ';}';
                }
                if (PollSetup_N_listbgcolor3 != "") {
                    temp_style += '.Poll_TOP3{background:' + PollSetup_N_listbgcolor3 + ';}';
                }
            }
            else {
                if (PollSetup_N_listbgimage != "") {
                    temp_style += '.Poll_TOP2{background: url(' + http_https() + location.host + PageBaseInfo.BF + PollSetup_N_listbgimage + ') ' + PollSetup_N_listbgcolor2 + '; }';
                }
                temp_style += '.Poll_TOP1{display:' + Poll.none + ';}';
                temp_style += '.Poll_TOP3{display:' + Poll.none + ';}';
            }


            if (PollSetup_N_ListTopFontColor != "") {
                temp_style += '.Poll_TopFontColor{color:' + PollSetup_N_ListTopFontColor + ';}';
            }

            if (PollSetup_N_BoardHrColor != "") {
                temp_style += '.Poll_BoardHrColor {background:' + PollSetup_N_BoardHrColor + ';}';
            }

            if (PollSetup_N_ListTitleColor != "") {
                temp_style += '.Poll_ListTitleColor {color:' + PollSetup_N_ListTitleColor + ';}';
                temp_style += '.Poll_ListTitleColor A:link {color:' + PollSetup_N_ListTitleColor + ';}';
                temp_style += '.Poll_ListTitleColor A:visited {color:' + PollSetup_N_ListTitleColor + ';}';
                temp_style += '.Poll_ListTitleColor A:active {color:' + PollSetup_N_ListTitleColor + ';}';
                temp_style += '.Poll_ListTitleColor A:hover {color:' + PollSetup_N_ListTitleColor + ';}';
            }

            for (var V_ = 0; V_ < BTN_STYLE.length; V_++) {
                temp_style += ".Poll_" + BTN_STYLE[V_] + "_VN"
                temp_style += "{";
                temp_style += "	cursor: hand; position: relative; ";
                temp_style += "	width:" + eval("PollSetup_N_" + BTN_STYLE[V_] + "_W") + "px; ";
                temp_style += "	height:" + eval("PollSetup_N_" + BTN_STYLE[V_] + "_H") + "px;";
                temp_style += "}";
                temp_style += ".Poll_" + BTN_STYLE[V_] + "_VN img"
                temp_style += "{";
                temp_style += "	width:" + eval("PollSetup_N_" + BTN_STYLE[V_] + "_W") + "px; ";
                temp_style += "	height:" + eval("PollSetup_N_" + BTN_STYLE[V_] + "_H") + "px;";
                temp_style += "	background-image: url(" + eval("PollSetup_N_" + BTN_STYLE[V_]) + ")  ;";
                temp_style += "	background-repeat:no-repeat;background-position: center;";
                temp_style += "}";
            }

            document.write('<style>' + temp_style + '</style>');
            /*alert(temp_style);*/

            var m_page = location.href;
            if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }

            if (RequestS.T == "") { RequestS.T = "L"; }
            if (RequestS.page == "") { RequestS.page = "1"; }
            document.write("" + PollSetup_N_TopHTML
                + "<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width:100%; table-layout:fixed;\"><tr><td align=\"center\">"
	            + "<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width:100%; table-layout:fixed;\"><tr><td >"
	            + "<div id=\"SPAN_Poll_back\" class=\"SPAN_Poll_back\">"
                + "<span id=\"SPAN_Poll_01\"></span>"
                + "<span id=\"SPAN_Poll_02\"></span>"
                + "<span id=\"SPAN_Poll_03\"></span>"
                + "<span id=\"SPAN_Poll_04\"></span>"
                + "<span id=\"SPAN_Poll_05\"></span>"
                + "<span id=\"SPAN_Poll_06\"></span>"
                + "<span id=\"SPAN_Poll_07\"></span>"
                + "<span id=\"SPAN_Poll_08\"></span>"
                + "<span id=\"SPAN_Poll_09\"></span>"
                + "<span id=\"SPAN_Poll_10\"></span>"
                + "<span id=\"SPAN_Poll_11\"></span>"

                + "<span id=\"SPAN_Poll_12\">"
                + "<iframe id=\"ifr_Poll\" style=\"display:" + Poll.none + ";\"  "
                + " name=\"ifr_Poll\" src=\"/common/poll/poll.aspx"
                + "?T=" + RequestS.T
                + "&w=" + encodeURIComponent(RequestS.w)
                + "&sn=" + RequestS.sn
                + "&page=" + RequestS.page
                + "&Num=" + RequestS.Num
                + "&Num2=" + RequestS.Num2
                + "&Npage=" + m_page
                + "\"  "
                + " frameborder=0 marginwidth=0 width=100% height=300 scrolling=yes></iframe>"
                + "</span>"

                + "</div>"
                + "</td></tr></table></td></tr></table>" + PollSetup_N_FotHTML);
        }
    },
    LIST: function() {
        var Span_Obj1 = document.getElementById("SPAN_Poll_01");
        var Span_Obj2 = document.getElementById("SPAN_Poll_02");
        var Span_Obj3 = document.getElementById("SPAN_Poll_03");
        var Span_Obj4 = document.getElementById("SPAN_Poll_04");
        var Span_Obj5 = document.getElementById("SPAN_Poll_05");
        var Span_Obj6 = document.getElementById("SPAN_Poll_06");
        var Span_Obj7 = document.getElementById("SPAN_Poll_07");
        var Span_Obj8 = document.getElementById("SPAN_Poll_08");
        var Span_Obj9 = document.getElementById("SPAN_Poll_09");
        var Span_Obj10 = document.getElementById("SPAN_Poll_10");
        var Span_Obj11 = document.getElementById("SPAN_Poll_11");
        var ifr = document.getElementById("ifr_Poll").contentWindow;
        Span_Obj1.innerHTML = ifr.document.getElementById("AREA_AG2").value;
        try {
            if (RequestS.w != "") document.getElementById("txt_keyword").value = RequestS.w;
        } catch (err) { }
        try {
            if (RequestS.Num != "") Teldd(document.getElementById("ddl_Num"), RequestS.Num);
        } catch (err) { }
    },
    CONENT: function() {
        var Span_Obj1 = document.getElementById("SPAN_Poll_01");
        var Span_Obj2 = document.getElementById("SPAN_Poll_02");
        var Span_Obj3 = document.getElementById("SPAN_Poll_03");
        var Span_Obj4 = document.getElementById("SPAN_Poll_04");
        var Span_Obj5 = document.getElementById("SPAN_Poll_05");
        var Span_Obj6 = document.getElementById("SPAN_Poll_06");
        var Span_Obj7 = document.getElementById("SPAN_Poll_07");
        var Span_Obj8 = document.getElementById("SPAN_Poll_08");
        var Span_Obj9 = document.getElementById("SPAN_Poll_09");
        var Span_Obj10 = document.getElementById("SPAN_Poll_10");
        var Span_Obj11 = document.getElementById("SPAN_Poll_11");
        var ifr = document.getElementById("ifr_Poll").contentWindow;
        Span_Obj1.innerHTML = ifr.document.getElementById("AREA_AG2").value;
        Poll_COMMENT_submit = 0;
    },
    Poll: function(e1) {
        var rbl_list_value = "";
        for (in_ = 0; in_ < e1; in_++) {
            if (document.getElementById("rbl_list_" + in_).checked == true) {
                rbl_list_value = document.getElementById("rbl_list_" + in_).value;
            }
        }
        if (rbl_list_value != "" && NUMMM_Poll == 0) {
            NUMMM_Poll++;
            var m_page = location.href;
            if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }

            if (RequestS.T == "") { RequestS.T = "L"; }
            if (RequestS.page == "") { RequestS.page = "1"; }

            var ifr = document.getElementById("ifr_Poll");
            ifr.src = "/common/poll/poll.aspx"
                + "?T=" + RequestS.T
                + "&w=" + encodeURIComponent(RequestS.w)
                + "&sn=" + RequestS.sn
                + "&page=" + RequestS.page
                + "&Num=" + RequestS.Num
                + "&Num2=" + RequestS.Num2
                + "&Num3=" + rbl_list_value
                + "&Npage=" + m_page;
        }
    },
    GOLIST: function() {
        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        m_page = m_page + '?T=L&w=' + encodeURIComponent(RequestS.w)
        + "&sn=" + RequestS.sn
        + "&page=" + RequestS.page
        + "&Num=" + RequestS.Num
        + "&Num2=" + RequestS.Num2;
        location.href = m_page;
    },
    FIND: function() {

        RequestS.Num = document.getElementById("ddl_Num").value;
        RequestS.w = document.getElementById("txt_keyword").value.trim();
        if (RequestS.w == "") {
            alert("검색어을 입력하여 주십시오.");
            return;
        }
        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        m_page = m_page + '?T=L&w=' + encodeURIComponent(RequestS.w) + "&Num=" + RequestS.Num;
        location.href = m_page;
    },
    FIND2: function() {

        RequestS.Num = document.getElementById("ddl_Num").value;
        RequestS.w = "";
        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        m_page = m_page + '?T=L&w=' + encodeURIComponent(RequestS.w) + "&Num=" + RequestS.Num;
        location.href = m_page;
    },
    FINDCANCEL: function() {
        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        location.href = m_page;
    },
    COMMENT: function(e1, e2) {
        var ifr = document.getElementById("ifr_Poll").contentWindow;
        var Mcontent__ = document.getElementById("txt_Mcontent").value;
        var pwd__ = document.getElementById("txt_pwd").value;
        var write_id__ = document.getElementById("txt_write_id").value;
        var write_name__ = document.getElementById("txt_write_name").value;
        var write_nick__ = document.getElementById("txt_write_nick").value;
        if (write_nick__ == "") write_nick__ = write_name__;

        if (e1 == "NEW" || e1 == "EDIT") {
            if (document.getElementById("tr_replyUsed5").style.display == "") {
                if (document.getElementById("txt_write_nick").value.trim() == "") {
                    document.getElementById("txt_write_nick").focus();
                    alert("작성자을 입력하여 주십시오."); return;
                }
                write_name__ = write_nick__;
                if (document.getElementById("txt_pwd").value.trim() == "") {
                    document.getElementById("txt_pwd").focus();
                    alert("암호을 입력하여 주십시오."); return;
                }
            }

            if (document.getElementById("txt_Mcontent").value.trim() == "") {
                document.getElementById("txt_Mcontent").focus();
                alert("코멘트 내용을 입력하여 주십시오."); return;
            }
        }
        if (e1 == "LOAD") {
            if (ifr.document.getElementById("txt_write_id").value != "") {
                document.getElementById("txt_write_id").value = ifr.document.getElementById("txt_write_id").value;
                document.getElementById("txt_write_name").value = ifr.document.getElementById("txt_write_name").value;
                document.getElementById("txt_write_nick").value = ifr.document.getElementById("txt_write_nick").value;
                document.getElementById("txt_write_id").readOnly = true;
                document.getElementById("txt_write_name").readOnly = true;
                document.getElementById("txt_write_nick").readOnly = true;
                document.getElementById("tr_replyUsed5").style.display = Poll.none;
                document.getElementById("tr_replyUsed6").style.display = "";
            }
        }
        else if (e1 == "NEW") {
            ifr.document.getElementById("txt_TYPE").value = "CNEW";
            if (Poll_COMMENT_submit != 0) return;
            Poll_COMMENT_submit++;
            ifr.document.getElementById("txt_Mcontent").value = Mcontent__;
            ifr.document.getElementById("txt_pwd").value = pwd__;
            ifr.document.getElementById("txt_write_id").value = write_id__;
            ifr.document.getElementById("txt_write_name").value = write_name__;
            ifr.document.getElementById("txt_write_nick").value = write_nick__;

            document.getElementById("txt_Mcontent").value = "";
            document.getElementById("TEXT_COMT").value = "";
            document.getElementById("txt_pwd").value = "";
            ifr.document.getElementById("submits").click();
        }
        else if (e1 == "EDIT") {
            ifr.document.getElementById("txt_TYPE").value = "CEDIT";
            if (Poll_COMMENT_submit != 0) return;
            Poll_COMMENT_submit++;
            ifr.document.getElementById("txt_Mcontent").value = Mcontent__;
            ifr.document.getElementById("txt_pwd").value = pwd__;
            ifr.document.getElementById("txt_write_id").value = write_id__;
            ifr.document.getElementById("txt_write_name").value = write_name__;
            ifr.document.getElementById("txt_write_nick").value = write_nick__;
            document.getElementById("txt_Mcontent").value = "";
            document.getElementById("TEXT_COMT").value = "";
            document.getElementById("txt_pwd").value = "";

            ifr.document.getElementById("submits").click();
        }
        else if (e1 == "DEL") {
            ifr.document.getElementById("txt_TYPE").value = "CDEL";
            var passwd = "";
            try { passwd = document.getElementById("txt_passwdN").value; } catch (err) { }

            if (passwd == "") {
                if (!confirm("정말로 삭제하겠습니까?")) {
                    return;
                }
            }
            ifr.document.getElementById("txt_idx").value = e2;
            ifr.document.getElementById("txt_pwd").value = passwd;
            ifr.document.getElementById("submits").click();
        }
        else if (e1 == "DEL2") {
            var Span_Obj1 = document.getElementById("SPAN_Poll_01");
            var Span_Obj2 = document.getElementById("SPAN_Poll_02");
            var Span_Obj3 = document.getElementById("SPAN_Poll_03");
            var Span_Obj4 = document.getElementById("SPAN_Poll_04");
            var Span_Obj5 = document.getElementById("SPAN_Poll_05");
            var Span_Obj6 = document.getElementById("SPAN_Poll_06");
            var Span_Obj7 = document.getElementById("SPAN_Poll_07");
            var Span_Obj8 = document.getElementById("SPAN_Poll_08");
            var Span_Obj9 = document.getElementById("SPAN_Poll_09");
            var Span_Obj10 = document.getElementById("SPAN_Poll_10");
            var Span_Obj11 = document.getElementById("SPAN_Poll_11");
            Span_Obj1.style.display = Poll.none;
            Span_Obj2.style.display = Poll.none;
            Span_Obj3.style.display = Poll.none;
            Span_Obj4.style.display = Poll.none;
            Span_Obj5.style.display = Poll.none;
            Span_Obj6.style.display = Poll.none;
            Span_Obj7.style.display = Poll.none;
            Span_Obj8.style.display = Poll.none;
            Span_Obj9.style.display = Poll.none;
            Span_Obj10.style.display = Poll.none;
            Span_Obj11.style.display = Poll.none;

            Span_Obj6.innerHTML = '\
<br/>\
<br/>\
<table width="100%" border="0" cellspacing="0" cellpadding="5">\
  <tr><td bgcolor="#efefef" class="pad0"><img src="/img/blank.gif" width="10" height="3" /></td></tr>\
  <tr><td class="pad0"><img src="../img/blank.gif" width="10" height="2" /></td></tr>\
  <tr><td height="40" align="center" valign="bottom" bgcolor="#f7f7f7" class="bold">수정,삭제,비밀글읽기를 위해서는 글작성시 등록한 비밀번호(로그인 암호)를 입력하셔야합니다.</td></tr>\
  <tr><td align="center" bgcolor="#f7f7f7" class="bold">비밀번호 : <input name="txt_passwdN" type="password" id="txt_passwdN" /> <font color="blue" id="MSG_DELSE" name="MSG_DELSE"></font></td></tr>\
  <tr><td height="40" align="center" valign="top" bgcolor="#f7f7f7" class="colorbf0101">데이터를 삭제할 경우 복구가 불가능합니다. 신중히 확인하시고 삭제하세요.</td></tr>\
  <tr><td class="pad0"><img src="../img/blank.gif" width="10" height="2" /></td></tr>\
  <tr><td bgcolor="#efefef" class="pad0"><img src="/img/blank.gif" width="10" height="3" /></td></tr>\
  <tr><td align="center">\
  <img style="cursor:pointer;" onclick="Poll.COMMENT(\'DEL\',\'' + e2 + '\');" src="/img_bbs/bt_cause.gif" alt="확인" width="66" height="23" hspace="2" />\
  <img style="cursor:pointer;" onclick="Poll.COMMENT(\'PASSWORD\')" src="/img_bbs/bt_cancel.gif" alt="취소" width="66" height="23" hspace="2" /></td></tr>\
</table> ';
            Span_Obj6.style.display = '';
            document.getElementById("txt_passwdN").focus();
            if (passwd != "")
            { document.getElementById("MSG_DELSE").innerHTML = "비밀번호가 일치하지 않습니다."; }

        }
        else if (e1 == "EDIT2") {
            ifr.document.getElementById("txt_TYPE").value = "CEDIT2";
            var passwd = "";
            try { passwd = document.getElementById("txt_passwdN").value; } catch (err) { }

            ifr.document.getElementById("txt_idx").value = e2;
            ifr.document.getElementById("txt_pwd").value = passwd;
            ifr.document.getElementById("submits").click();
        }
        else if (e1 == "EDIT3") {
            var Span_Obj1 = document.getElementById("SPAN_Poll_01");
            var Span_Obj2 = document.getElementById("SPAN_Poll_02");
            var Span_Obj3 = document.getElementById("SPAN_Poll_03");
            var Span_Obj4 = document.getElementById("SPAN_Poll_04");
            var Span_Obj5 = document.getElementById("SPAN_Poll_05");
            var Span_Obj6 = document.getElementById("SPAN_Poll_06");
            var Span_Obj7 = document.getElementById("SPAN_Poll_07");
            var Span_Obj8 = document.getElementById("SPAN_Poll_08");
            var Span_Obj9 = document.getElementById("SPAN_Poll_09");
            var Span_Obj10 = document.getElementById("SPAN_Poll_10");
            var Span_Obj11 = document.getElementById("SPAN_Poll_11");
            Span_Obj1.style.display = Poll.none;
            Span_Obj2.style.display = Poll.none;
            Span_Obj3.style.display = Poll.none;
            Span_Obj4.style.display = Poll.none;
            Span_Obj5.style.display = Poll.none;
            Span_Obj6.style.display = Poll.none;
            Span_Obj7.style.display = Poll.none;
            Span_Obj8.style.display = Poll.none;
            Span_Obj9.style.display = Poll.none;
            Span_Obj10.style.display = Poll.none;
            Span_Obj11.style.display = Poll.none;

            Span_Obj6.innerHTML = '\
<br/>\
<br/>\
<table width="100%" border="0" cellspacing="0" cellpadding="5">\
  <tr><td bgcolor="#efefef" class="pad0"><img src="/img/blank.gif" width="10" height="3" /></td></tr>\
  <tr><td class="pad0"><img src="../img/blank.gif" width="10" height="2" /></td></tr>\
  <tr><td height="40" align="center" valign="bottom" bgcolor="#f7f7f7" class="bold">수정,삭제,비밀글읽기를 위해서는 글작성시 등록한 비밀번호(로그인 암호)를 입력하셔야합니다.</td></tr>\
  <tr><td align="center" bgcolor="#f7f7f7" class="bold">비밀번호 : <input name="txt_passwdN" type="password" id="txt_passwdN" /> <font color="blue" id="MSG_DELSE" name="MSG_DELSE"></font></td></tr>\
  <tr><td height="40" align="center" valign="top" bgcolor="#f7f7f7" class="colorbf0101">데이터를 삭제할 경우 복구가 불가능합니다. 신중히 확인하시고 삭제하세요.</td></tr>\
  <tr><td class="pad0"><img src="../img/blank.gif" width="10" height="2" /></td></tr>\
  <tr><td bgcolor="#efefef" class="pad0"><img src="/img/blank.gif" width="10" height="3" /></td></tr>\
  <tr><td align="center">\
  <img style="cursor:pointer;" onclick="Poll.COMMENT(\'EDIT2\',\'' + e2 + '\');" src="/img_bbs/bt_cause.gif" alt="확인" width="66" height="23" hspace="2" />\
  <img style="cursor:pointer;" onclick="Poll.COMMENT(\'PASSWORD\')" src="/img_bbs/bt_cancel.gif" alt="취소" width="66" height="23" hspace="2" /></td></tr>\
</table> ';
            Span_Obj6.style.display = '';
            document.getElementById("txt_passwdN").focus();
            if (passwd != "")
            { document.getElementById("MSG_DELSE").innerHTML = "비밀번호가 일치하지 않습니다."; }
        }
        else if (e1 == "EDIT4") {
            document.getElementById("txt_Mcontent").value = ifr.document.getElementById("txt_Mcontent").value;
            document.getElementById("txt_Mcontent").focus();
            document.getElementById("txt_write_name").value = ifr.document.getElementById("txt_write_name").value;
            document.getElementById("txt_write_nick").value = ifr.document.getElementById("txt_write_nick").value;

            document.getElementById("txt_write_id").readOnly = true;
            document.getElementById("txt_write_name").readOnly = true;
            document.getElementById("txt_write_nick").readOnly = true;
            document.getElementById("txt_pwd").value = ifr.document.getElementById("txt_pwd").value;
            document.getElementById("tr_replyUsed8").style.display = Poll.none;
            document.getElementById("tr_replyUsed9").style.display = "";
        }
        else if (e1 == "PASSWORD") {
            var Span_Obj1 = document.getElementById("SPAN_Poll_01");
            var Span_Obj2 = document.getElementById("SPAN_Poll_02");
            var Span_Obj3 = document.getElementById("SPAN_Poll_03");
            var Span_Obj4 = document.getElementById("SPAN_Poll_04");
            var Span_Obj5 = document.getElementById("SPAN_Poll_05");
            var Span_Obj6 = document.getElementById("SPAN_Poll_06");
            var Span_Obj7 = document.getElementById("SPAN_Poll_07");
            var Span_Obj8 = document.getElementById("SPAN_Poll_08");
            var Span_Obj9 = document.getElementById("SPAN_Poll_09");
            var Span_Obj10 = document.getElementById("SPAN_Poll_10");
            var Span_Obj11 = document.getElementById("SPAN_Poll_11");
            Span_Obj1.style.display = '';
            Span_Obj2.style.display = '';
            Span_Obj3.style.display = '';
            Span_Obj4.style.display = '';
            Span_Obj5.style.display = '';
            Span_Obj6.style.display = '';
            Span_Obj7.style.display = '';
            Span_Obj8.style.display = '';
            Span_Obj9.style.display = '';
            Span_Obj10.style.display = '';
            Span_Obj11.style.display = '';
            Span_Obj6.innerHTML = '';
        }
    }
}

