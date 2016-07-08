var FEX = {
    LOAD: function () {
        if (jQuery("#txt_Mcontent").next("iframe").contents().find("#se2_iframe").length) {
            jQuery("#txt_Mcontent").next("iframe").contents().find("#se2_iframe").attr({ "title": "ESC키를 누르시면 에디터를 빠져 나오실 수 있습니다." });
            jQuery("#txt_Mcontent").next("iframe").contents().find("#se2_iframe").contents().keydown(function (e) {
                if (e.keyCode == 27) {
                    if (jQuery("#BTNN_01", parent.parent.document).length) jQuery("#BTNN_01", parent.parent.document).focus();
                    if (jQuery("#BTNN_02", parent.parent.document).length) jQuery("#BTNN_02", parent.parent.document).focus();
                    if (jQuery("#BTNN_03", parent.parent.document).length) jQuery("#BTNN_03", parent.parent.document).focus();
                }
            });
        }
    }
};
var Board = {
    obj: null,
    ListTitleColorOff: "",
    ListTitleColorOn: "",
    none: "none",
    tr_view: 0,
    PopWin: function (Url, Xsize, Ysize, Scroll)/* 새 창 띄우기 */{
        var opt = "toolbar=0,location=0,directories=0,status=0,menubar=0,resizable=0,copyhistory=1,";
        if (Xsize == null) Xsize = 500; if (Ysize == null) Ysize = 400; if (Scroll == null) Scroll = 1;
        opt += "width=" + Xsize + ",height=" + Ysize + ",scrollbars=" + Scroll;
        var newWindow = window.open(Url, 'popSub', opt); newWindow.focus()
    },
    Movie2go: 0,
    Movie2: function (e1, e2) {
        if (e1 > 0) this.Movie2go = e1;
        if (e2 == 'load') {
            if (document.getElementById("txt_board_plusfield1_") && document.getElementById("txt_board_plusfield1_" + this.Movie2go)) { document.getElementById("txt_board_plusfield1_").innerHTML = document.getElementById("txt_board_plusfield1_" + this.Movie2go).value; }
            if (document.getElementById("txt_board_plusfield2_") && document.getElementById("txt_board_plusfield2_" + this.Movie2go)) { document.getElementById("txt_board_plusfield2_").innerHTML = document.getElementById("txt_board_plusfield2_" + this.Movie2go).value; }
            if (document.getElementById("txt_board_title_") && document.getElementById("txt_board_title_" + this.Movie2go)) { document.getElementById("txt_board_title_").innerHTML = document.getElementById("txt_board_title_" + this.Movie2go).value; }
            if (document.getElementById("txt_board_mcontent_") && document.getElementById("txt_board_mcontent_" + this.Movie2go)) { document.getElementById("txt_board_mcontent_").innerHTML = document.getElementById("txt_board_mcontent_" + this.Movie2go).value; }
            try {
                if (document.getElementById("btn_move2_edit") && this.Movie2go > 0)
                    document.getElementById("btn_move2_edit").style.display = "";
                else
                    document.getElementById("btn_move2_edit").style.display = "none";
            } catch (err) { }

            if (this.Movie2go > 0 && document.getElementById("txt_board_plusfield10_" + this.Movie2go) && document.getElementById("txt_Docid_" + this.Movie2go)) {
                if (document.getElementById("txt_board_plusfield10_" + this.Movie2go).value == "") {
                    document.getElementById("btn_move2_down").style.display = "none";
                    mmx.go("");
                } else {
                    document.getElementById("btn_move2_down").style.display = "";
                    setTimeout("mmx.go(document.getElementById(\"txt_board_plusfield10_\" + Board.Movie2go).value);", 500);
                }
            }
            else {
                document.getElementById("btn_move2_down").style.display = "none";
                mmx.go("");
            }
        }
        else if (e2 == 'edit') {
            if (this.Movie2go > 0 && document.getElementById("txt_link_" + this.Movie2go)) {
                location.href = document.getElementById("txt_link_" + this.Movie2go).value;
            }
        }
        else if (e2 == 'down') {
            if (this.Movie2go > 0 && document.getElementById("txt_board_plusfield8_" + this.Movie2go) && document.getElementById("txt_Docid_" + this.Movie2go)) {
                Board.FILESDOWNS(document.getElementById("txt_board_plusfield8_" + this.Movie2go).value, document.getElementById("txt_Docid_" + this.Movie2go).value);
            }
        }
    },
    ViewTRE: function (e) {

        if (Board.tr_view == e) return;
        var span_ = document.getElementById("span_" + e);
        if (span_) span_.style.display = "";
        var span_2 = document.getElementById("spant_" + e);
        if (span_2) span_2.style.display = "";
        var span_3 = document.getElementById("span_" + Board.tr_view);
        if (span_3) span_3.style.display = "none";
        var span_4 = document.getElementById("spant_" + Board.tr_view);
        if (span_4) span_4.style.display = "none";

        Board.tr_view = e;
    },
    FViewSid: "",
    FView: function (e) {

        if (Board.FViewSid != "") {
            var objex2 = document.getElementById("silverlight_T_" + Board.FViewSid);
            if (objex2) objex2.style.display = "none";

            try {
                var slCtl = document.getElementById("silverlight_o_" + Board.FViewSid);
                slCtl.Content.SLPLAYERE.Stop();
            } catch (err) { }
        }

        var objex = document.getElementById("silverlight_T_" + e);
        if (objex) objex.style.display = ""
        setTimeout("try{document.getElementById(\"silverlight_o_" + e + "\").Content.SLPLAYERE.Play();}catch (err) { }", 500);
        Board.FViewSid = e;
    },
    DelContentS: function (t1) {
        var boardms = GetSelectValue_Plus2(0, "boardms");
        if (boardms == "") {
            alert("게시물을 선택하여 주십시요.");
            return;
        }

        if (!confirm("정말로 삭제하겠습니까?")) {
            return;
        }

        jQuery.ajax({
            type: "POST",                   //타입 GET , POST
            datatype: "html",               //데이타타입 html, xml 등등
            url: "/common/board/boardPlus.aspx",     //경로
            data: "T=DelContentS" + "&T1=" + encodeURIComponent(t1) + "&T3=" + encodeURIComponent(boardms) + "&pdn=" + XncodeUR(PageBaseInfo.domain),
            async: false,                   //비동기 사용여부 true : 비동기, false : 동기
            success: function (data) {
                if (data.trim() == "1") {
                    alert("성공적으로 삭제되었습니다.");
                    setTimeout("location.reload();", 100);
                }
                else {
                    alert("삭제에 실패하였습니다.");
                }
            },    //성공시 실행할 함수
            error: function () {
                return false;
            }             //에러발생시 실행할 함수
        });
    },
    MAKE: function (e, e1) /*보드 리스트*/
    {
        if (e == 'LOAD') {
            var Seed_n = false;
            for (var nn = 0; nn < Board_Seed.length; nn++) {
                if (Board_Seed[nn] == e1) {
                    Seed_n = true;
                    break;
                }
            }


            if (Seed_n == true) {

                nummm_baord++;
                BOARD_BACK_GROUNDS(e1, TEMPLATE.LOAD(e1, "bgint"), TEMPLATE.LOAD(e1, "bgcolor"), TEMPLATE.LOAD(e1, "bgimage"));
                var BTN_STYLE = Array("WriteBTN", "LIstBTN", "EditeBTN", "DeleteBTN", "CommentBTN", "SaveBTN", "CancelBTN", "FindBTN", "FindCancelBTN", "CommentInputBTN", "CommentDeleteBTN", "CommentEditeBTN", "CommentShowBTN", "RecommendBTN", "DetailedBTN", "VacantBTN", "CommentCountBTN", "SelectListViewBTN", "HiddenBTN", "Point5BTN", "Point4BTN", "Point3BTN", "Point2BTN", "Point1BTN");
                var temp_style = '';
                for (var nn = 0; nn < BoardTEMPP.length; nn++) { try { var obj11 = eval("BoardTEMP_" + BoardTEMPP[nn]); var obj22 = eval("Board_" + e1 + "_" + BoardTEMPP[nn]); obj11[nummm_baord] = obj22; } catch (err) { }; };
                var temp_s = TEMPLATE.LOAD(e1, "ListCommentFontColor");
                if (temp_s.trim() != "")/*댓글카운터글자색상*/{ temp_style += ".ListCommentFontColor_VN {color: " + temp_s.trim() + ";}"; } else { temp_style += ".ListCommentFontColor_VN {color: #f59392;}"; }

                Board.ListTitleColorOff = TEMPLATE.LOAD(e1, "ListTitleColorOff").trim();
                Board.ListTitleColorOn = TEMPLATE.LOAD(e1, "ListTitleColorOn").trim();
                temp_style += ".BOARD_BODY_" + e1 + " a {" + (Board.ListTitleColorOff == "" ? "" : "color:" + Board.ListTitleColorOff) + "}";
                temp_style += ".BOARD_BODY_" + e1 + " a:visited	{" + (Board.ListTitleColorOff == "" ? "" : "color:" + Board.ListTitleColorOff) + "}";
                temp_style += ".BOARD_BODY_" + e1 + " a:hover	{" + (Board.ListTitleColorOn == "" ? "" : "color:" + Board.ListTitleColorOn) + "}";
                temp_style += ".BOARD_BODY_" + e1 + " a:active	{" + (Board.ListTitleColorOn == "" ? "" : "color:" + Board.ListTitleColorOn) + "}";

                for (var V_ = 0; V_ < BTN_STYLE.length; V_++) {
                    temp_style += "." + BTN_STYLE[V_] + "_VN"
                    temp_style += "{";
                    temp_style += "	cursor: pointer; position: relative; ";
                    temp_style += "	width:" + TEMPLATE.LOAD(e1, BTN_STYLE[V_] + "_W") + "px; ";
                    temp_style += "	height:" + TEMPLATE.LOAD(e1, BTN_STYLE[V_] + "_H") + "px;";
                    temp_style += "}";
                    temp_style += "." + BTN_STYLE[V_] + "_VN img"
                    temp_style += "{";
                    temp_style += "	width:" + TEMPLATE.LOAD(e1, BTN_STYLE[V_] + "_W") + "px; ";
                    temp_style += "	height:" + TEMPLATE.LOAD(e1, BTN_STYLE[V_] + "_H") + "px;";
                    temp_style += "	background-image: url(" + TEMPLATE.LOAD(e1, BTN_STYLE[V_]) + ")  ;";
                    temp_style += "	background-repeat:no-repeat;background-position: center;";
                    temp_style += "}";
                }

                if (BoardTEMP_NewMark[nummm_baord] != "") {
                    if (BoardTEMP_NewMarkUsed[nummm_baord] == 1) {
                        temp_style += ".NewMark_" + BoardTEMP_Ncode[nummm_baord].replaceAll("{", "").replaceAll("}", "") + "_VN";
                        temp_style += "{";
                        temp_style += "	cursor: pointer; position: relative; ";
                        temp_style += "	width:" + BoardTEMP_NewMark_W[nummm_baord] + "px;";
                        temp_style += "	height:" + BoardTEMP_NewMark_H[nummm_baord] + "px;";
                        temp_style += "}";
                        temp_style += ".NewMark_" + BoardTEMP_Ncode[nummm_baord].replaceAll("{", "").replaceAll("}", "") + "_VN img";
                        temp_style += "{";
                        temp_style += "	width:" + BoardTEMP_NewMark_W[nummm_baord] + "px;";
                        temp_style += "	height:" + BoardTEMP_NewMark_H[nummm_baord] + "px;";
                        temp_style += "	background-image: url(" + BoardTEMP_NewMark[nummm_baord] + ")  ;";
                        temp_style += "	background-repeat:no-repeat;background-position: center;";
                        temp_style += "}";
                    }
                    else {
                        temp_style += ".NewMark_" + BoardTEMP_Ncode[nummm_baord].replaceAll("{", "").replaceAll("}", "") + "_VN"
                        temp_style += "{";
                        temp_style += "	display:none ;";
                        temp_style += "}";
                    }
                }

                if (BoardTEMP_HotMark[nummm_baord] != "") {
                    if (BoardTEMP_HotMakrUsed[nummm_baord] == 1) {
                        temp_style += ".HotMark_" + BoardTEMP_Ncode[nummm_baord].replaceAll("{", "").replaceAll("}", "") + "_VN";
                        temp_style += "{";
                        temp_style += "	cursor: pointer; position: relative; ";
                        temp_style += "	width:" + BoardTEMP_HotMark_W[nummm_baord] + "px;";
                        temp_style += "	height:" + BoardTEMP_HotMark_H[nummm_baord] + "px;";
                        temp_style += "}"
                        temp_style += ".HotMark_" + BoardTEMP_Ncode[nummm_baord].replaceAll("{", "").replaceAll("}", "") + "_VN img";
                        temp_style += "{ ";
                        temp_style += "	width:" + BoardTEMP_HotMark_W[nummm_baord] + "px;";
                        temp_style += "	height:" + BoardTEMP_HotMark_H[nummm_baord] + "px;";
                        temp_style += "	background-image: url(" + BoardTEMP_HotMark[nummm_baord] + ")  ;";
                        temp_style += "	background-repeat:no-repeat;background-position: center;";
                        temp_style += "}";
                    }
                    else {
                        temp_style += ".HotMark_" + BoardTEMP_Ncode[nummm_baord].replaceAll("{", "").replaceAll("}", "") + "_VN"
                        temp_style += "{";
                        temp_style += "	display:none ;";
                        temp_style += "}";
                    }
                }


                if (BoardTEMP_AdminDevice[nummm_baord] == 1) {
                    temp_style += ".ADMIN1_VN{display:none;}.ADMIN2_VN{}";
                } else {
                    if (v_board_Admin == 0) {
                        temp_style += ".ADMIN1_VN{display:none;}.ADMIN2_VN{}";
                    }
                    else {
                        temp_style += ".ADMIN1_VN{cursor: pointer; position:"
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
                }
                /*listint*/

                var listbgcolor = Array("listbgcolor1", "listbgcolor2", "listbgcolor3", "BoardHrColor");
                var listbgcolor2 = Array("#818181", "", "#818181", "#d9d9d9");
                /*ListTopFontColor*/
                temp_style += ".BoardHrColor2_TOP{background-color:efefef;}";
                for (var V_ = 0; V_ < listbgcolor.length; V_++) {
                    temp_style += "." + listbgcolor[V_] + "_TOP"
                    temp_style += "{";
                    var t_color = TEMPLATE.LOAD(e1, listbgcolor[V_]).trim();
                    if (t_color != "")
                        temp_style += "	background-color:" + t_color + "; ";
                    else
                        temp_style += "	background-color:" + listbgcolor2[V_] + "; ";
                    temp_style += "}";
                }

                var t_color_ListTopFontColor = TEMPLATE.LOAD(e1, "ListTopFontColor").trim();
                if (t_color_ListTopFontColor != "") {
                    temp_style += ".ListTopFontColor_TOP{color:" + t_color_ListTopFontColor + ";}";
                }

                var list_Ngo = TEMPLATE.LOAD(e1, "listint");

                if (list_Ngo == 1) {

                    var listbgimage_1 = TEMPLATE.LOAD(e1, "listbgimage");
                    var listbgimage_2 = TEMPLATE.LOAD(e1, "listbgimage_W");
                    var listbgimage_3 = TEMPLATE.LOAD(e1, "listbgimage_H");

                    if (listbgimage_1.length > 20) {
                        temp_style += ".listbgcolor1_TOPN{background-color:#;display:none;}";
                        temp_style += ".listbgcolor2_TOPN{background-color:#;display:none;}";
                        temp_style += ".listbgcolor3_TOPN{background-color:#;display:none;}";
                        temp_style += ".listbgcolorN_TOPN{background-color:#; height:" + listbgimage_3 + "px;}";
                        temp_style += ".listbgimage_VN"
                        temp_style += "{";
                        temp_style += "	position: relative; ";
                        temp_style += "	width:" + listbgimage_2 + "px; ";
                        temp_style += "	height:" + listbgimage_3 + "px;";
                        temp_style += "}";
                        temp_style += ".listbgimage_VN img"
                        temp_style += "{";
                        temp_style += "	width:" + listbgimage_2 + "px; ";
                        temp_style += "	height:" + listbgimage_3 + "px;";
                        temp_style += "	background-image: url(" + listbgimage_1 + ")  ;";
                        temp_style += "	background-repeat:no-repeat;background-position: center;";
                        temp_style += "}";
                    }
                    else {
                        temp_style += ".listbgcolorN_TOPN{display:none;height:0px;}";
                        temp_style += ".listbgimage_VN{display:none;height:0px;}";
                        temp_style += ".listbgimage_VN img{display:none;height:0px;}";
                    }
                }
                else {
                    temp_style += ".listbgcolorN_TOPN{display:none;height:0px;}";
                    temp_style += ".listbgimage_VN{display:none;height:0px;}";
                    temp_style += ".listbgimage_VN img{display:none;height:0px;}";
                }


                document.write('<style>' + temp_style
                + 'p.focusMessage a {background: rgb(245, 245, 245); width: 1px; height: 1px; text-align: center; color: rgb(0, 0, 0); overflow: hidden; margin-bottom: -1px; display: block; white-space: nowrap;}\r\n'
                + 'p.focusMessage a:focus {background: rgb(255, 255, 255); padding: 0px; width: auto; height: 32px; color: rgb(102, 102, 102); line-height: 32px; font-size: 11px; display: block;}\r\n'
                + 'p.focusMessage a:active {background: rgb(255, 255, 255); padding: 0px; width: auto; height: 32px; color: rgb(102, 102, 102); line-height: 32px; font-size: 11px; display: block;}\r\n'
                + '</style>');

                var al_align = "";
                if (BoardTEMP_Align[nummm_baord] == 0) {
                    al_align = "left";
                }
                else if (BoardTEMP_Align[nummm_baord] == 1) {
                    al_align = "center";
                }
                else if (BoardTEMP_Align[nummm_baord] == 2) {
                    al_align = "right";
                }
                var T_HTML = BoardTEMP_TopHTML[nummm_baord];
                var F_HTML = BoardTEMP_FotHTML[nummm_baord];
                if (BoardTEMP_Twidth[nummm_baord] != 0) {
                    T_HTML = T_HTML + "<div class=\"TBoardRound0\" align=\"" + al_align + "\" style=\"width:100%;\" >"
                    + "<div class=\"TBoardRound1\" style=\"width:" + BoardTEMP_Twidth[nummm_baord] + "px;\" >";
                    F_HTML = "</div></div>" + F_HTML;
                }
                if (T_HTML.indexOf("{link}") > -1) {
                    if (typeof ("PageBaseInfo") != "undefined") {
                        T_HTML = T_HTML.replaceAll("{link}", PageBaseInfo.link);
                    }
                }
                if (F_HTML.indexOf("{link}") > -1) {
                    if (typeof ("PageBaseInfo") != "undefined") {
                        F_HTML = F_HTML.replaceAll("{link}", PageBaseInfo.link);
                    }
                }


                document.write(T_HTML);
                document.write("<div class=\"bbs_baord_css\"><div id='span0001_" + e1 + "' class='BOARD_BODY_" + e1 + "'  ></div><div id='span0002_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></div><div id='span0003_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></div><div id='span0004_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></div><div id='span0005_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></div><div id='span0006_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></div><div id='span0007_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></div><div id='span0008_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></div><div id='span0009_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></div><div id='span0010_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></div><div id='span0011_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></div><div id='span0012_" + e1 + "'   ></div></div>");
                //document.write("<span class=\"bbs_baord_css\"><span id='span0001_" + e1 + "' class='BOARD_BODY_" + e1 + "'  ></span><span id='span0002_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></span><span id='span0003_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></span><span id='span0004_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></span><span id='span0005_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></span><span id='span0006_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></span><span id='span0007_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></span><span id='span0008_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></span><span id='span0009_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></span><span id='span0010_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></span><span id='span0011_" + e1 + "' class='BOARD_BODY_" + e1 + "' ></span><span id='span0012_" + e1 + "'   ></span></span>");
                document.write(F_HTML);

                BoardTEMP_TYPE10 = e1;

                var obj_100001 = document.getElementById("span0001_" + e1);
                var obj_100002 = document.getElementById("span0002_" + e1);
                var obj_100003 = document.getElementById("span0003_" + e1);
                var obj_100004 = document.getElementById("span0004_" + e1);
                var obj_100005 = document.getElementById("span0005_" + e1);
                var obj_100006 = document.getElementById("span0006_" + e1);
                var obj_100007 = document.getElementById("span0007_" + e1);
                var obj_100008 = document.getElementById("span0008_" + e1);
                var obj_100009 = document.getElementById("span0009_" + e1);
                var obj_100010 = document.getElementById("span0010_" + e1);
                var obj_100011 = document.getElementById("span0011_" + e1);


                BoardTEMP_TYPE1[nummm_baord] = RequestS.T; if (BoardTEMP_TYPE1[nummm_baord] == "") { BoardTEMP_TYPE1[nummm_baord] = "L"; }


                var m_page = location.href;
                if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
                if (m_page.indexOf('/') > -1) { m_page = m_page.substring(m_page.lastIndexOf('/') + 1); }


                if (BoardTEMP_TypeView[nummm_baord] == "movie2") /*동영상01*/
                {
                    document.write('<SCRIPT type="text/javascript" src="/_js/Board2/play2_1.js" ></SCRIPT>');
                    document.write('<SCRIPT type="text/javascript" src="/_js/Board2/play2_2.js" event="PlayStateChange(OldState,NewState)" for="MediaPlayer"></SCRIPT>');
                }

                /*alert("get22");*/

                document.write("<span id='span00030_" + e1 + "'  name='span00030_" + e1 + "'  style=\"display:" + Board.none + ";\"   >"
                + "<iframe id=\"ifr00030_" + e1 + "\" name=\"ifr00030_" + e1 + "\" title=\"보드 기능 관련\" "
                + " src=\"/common/Board/Board.aspx"
                + "?T=" + BoardTEMP_TYPE1[nummm_baord]
                + "&w=" + encodeURIComponent(RequestS.w)
                + "&c=" + encodeURIComponent(RequestS.c)
                + "&c1=" + RequestS.c1
                + "&c2=" + RequestS.c2
                + "&c3=" + RequestS.c3
                + "&sn=" + RequestS.sn
                + "&page=" + RequestS.page
                + "&EX=" + encodeURIComponent(RequestS.EX)
                + "&EX2=" + encodeURIComponent(m_page)
                + "&Num=" + RequestS.Num
                + "&Num2=" + RequestS.Num2
                + "&Num3=" + nummm_baord
                + "&Ncode=" + encodeURIComponent(BoardTEMP_Ncode[nummm_baord].replaceAll("{", "").replaceAll("}", ""))
                + "&pdn=" + XncodeUR(PageBaseInfo.domain)
                /*+ "&pwd=" + encodeURIComponent(notice_getcookie2("pwd" + RequestS.sn))*/
                + "\" frameborder='1' marginwidth='1' width='100%' height='300' scrolling='yes'></iframe></span>");
            }
            else {
                document.write("[" + e1 + "]존재하지 않는 보드입니다.");
            }
        }
    },
    LIST: function (e, e1, Board_Num) /*보드 리스트*/
    {
        var obj_100001 = document.getElementById("span0001_" + e1);
        var obj_100002 = document.getElementById("span0002_" + e1);
        var obj_100003 = document.getElementById("span0003_" + e1);
        var obj_100004 = document.getElementById("span0004_" + e1);
        var obj_100005 = document.getElementById("span0005_" + e1);
        var obj_100006 = document.getElementById("span0006_" + e1);
        var obj_100007 = document.getElementById("span0007_" + e1);
        var obj_100008 = document.getElementById("span0008_" + e1);
        var obj_100009 = document.getElementById("span0009_" + e1);
        var obj_100010 = document.getElementById("span0010_" + e1);
        var obj_100011 = document.getElementById("span0011_" + e1);
        if (e == 'LOAD') {
            var CATE_LIST = '';
            if (BoardTEMP_CateUsed[Board_Num] == 1) {
                var temp = BoardTEMP_CateItem[Board_Num].split('↑');
                var temp__0001 = "";
                var temp__0002 = "";
                var temp_NUM = 0;
                for (var N1 = 0; N1 < temp.length; N1++) {
                    if (temp[N1] == "") { continue; }


                    temp_NUM++;
                    var MPPEtemp = temp[N1].split('↓');
                    temp__0001 += "<td class=\"bbs6\"><a href=\"javascript:Board.FIND1('" + e + "','" + e1 + "'," + Board_Num + ",'" + MPPEtemp[0] + "')\" title=\"검색\" ><img src=\"/img_bbs/ico_dot_02.gif\" width=\"8\" height=\"3\" align=\"middle\" alt=\"검색 [" + MPPEtemp[0] + "]\"/> " + MPPEtemp[0] + "</a></td>";
                    if (temp_NUM % 4 == 0) temp__0001 += "</tr><tr>";
                    temp__0002 += "<option value=\"" + MPPEtemp[0] + "\" value2=\"" + temp[N1] + "\" help=\"" + temp[N1] + "\">" + MPPEtemp[0] + "</option>";
                }
                if (temp_NUM % 4 != 0) { temp__0001 += "<td colapsn=\"" + (4 - (temp_NUM % 4)) + "\"> "; }
                temp__0001 = '<br/><br/><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="10" align="left"><img src="/img/box02_01.gif" width="10" height="32" /></td><td align="center" background="/img/box02_02.gif"><table border="0" cellspacing="0" cellpadding="0"><tr>' + temp__0001 + '</tr></table></td><td width="10" align="right"><img src="/img/box02_03.gif" width="10" height="31" /></td></tr></table><br/><br/>';

                if (BoardTEMP_CateViewType[Board_Num] == 0) {
                    if (BoardTEMP_CateItem3Used[Board_Num] == 1) {
                        CATE_LIST = "<select name=\"cate_" + e1 + "\" id=\"cate_" + e1 + "\" "
                    + " onchange=\"Board.FIND3('" + e + "','" + e1 + "'," + Board_Num + ",1);\" >"
                    + "<option value=\"\" value2=\"\">선택</option>" + temp__0002 + "</select>"
                    + " <select name=\"cate2_" + e1 + "\" id=\"cate2_" + e1 + "\" "
                    + " onchange=\"Board.FIND3('" + e + "','" + e1 + "'," + Board_Num + ",2);\" >"
                    + "<option value=\"\" value2=\"\">선택</option></select>";
                    }
                    else {
                        CATE_LIST = "<select name=\"cate_" + e1 + "\" id=\"cate_" + e1 + "\" "
                    /*+ " onchange=\"Board.FIND3('" + e + "','" + e1 + "'," + Board_Num + ",0);\" "*/
                    + " >"
                    + "<option value=\"\" value2=\"\">선택</option>" + temp__0002 + "</select>"
                    + "<label for=\"cate2_" + e1 + "\" style=\"display:none;\">분류선택2차</label>"
                    + " <select name=\"cate2_" + e1 + "\" id=\"cate2_" + e1 + "\" style=\"display:none;\" "
                    + " onchange=\"Board.FIND3('" + e + "','" + e1 + "'," + Board_Num + ",0);\" >"
                    + "<option value=\"\" value2=\"\">선택</option></select>";
                    }
                }
                else if (BoardTEMP_CateViewType[Board_Num] == 1) {
                    obj_100001.innerHTML = temp__0001;
                }
            }
            obj_100002.innerHTML = "<div class=\"BOARD_BODY_" + e1 + "\"  >"
            + "<div class=\"tListB\"  >"
            + "<div align=\"left\" class=\"bold\" name=\"items1_" + e1 + "\" id=\"items1_" + e1 + "\" class=\"tListL\" ></div>"
            + "<div align=\"right\" class=\"FontVer\" name=\"items2_" + e1 + "\" id=\"items2_" + e1 + "\" class=\"tListR\"  ></div>"
            + "</div>"
            + "<div name=\"items3_" + e1 + "\" id=\"items3_" + e1 + "\"  ></div>"
            + "<div name=\"items4_" + e1 + "\" id=\"items4_" + e1 + "\"  align=\"right\" class=\"tListW\"   ></div>"
            + "<div id=\"items7_" + e1 + "\" name=\"items7_" + e1 + "\" class=\"tListB\"  >"
            + "<div align=\"left\"	name=\"items5_" + e1 + "\" id=\"items5_" + e1 + "\" class=\"tListL\" ></div>"
            + "<div align=\"right\"	name=\"items6_" + e1 + "\" id=\"items6_" + e1 + "\" class=\"tListR\" ></div>"
            + "</div>"
            + "</div>";

            if (BoardTEMP_TypeView[Board_Num] == "snap") /*포토스냅형*/
            {
                if (document.getElementById("items7_" + e1)) document.getElementById("items7_" + e1).style.display = "none";
                if (document.getElementById("items4_" + e1)) document.getElementById("items4_" + e1).style.display = "none";

            }

            /*if (CATE_LIST != ""){ document.getElementById("items1_" + e1).innerHTML = '<img src="/img_bbs/ico_pg.gif" width="10" height="9" align="absmiddle" alt="분류선택" /> 분류선택<div class="ico_arr"></div>' + CATE_LIST; }*/
            if (CATE_LIST != "")/*분류선택*/{
                document.getElementById("items1_" + e1).innerHTML = ''
                + '<div class="ico_pg"></div> <label for ="cate_' + e1 + '">분류선택</label><div class="ico_arr"></div>' + CATE_LIST
                + (BoardTEMP_CateViewType[Board_Num] == 0 && BoardTEMP_CateItem3Used[Board_Num] == 0 ? ''
                + '<input type="botton" onclick="Board.FIND3(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',0);return false;" title="분류선택 이동하기" value="이동"  '
                + '  align="middle" style="border:none;margin:0 0 0 0; padding:0 0 0 0;" />' : '');
            }
            var BoardAuthorityVV = BoardAuthorityB(e1);

            if (RequestS.c != "") {
                var m_RequestS_c__ = RequestS.c.split('↑');
                if (m_RequestS_c__.length > 1) {
                    try { Teldd(document.getElementById("cate_" + e1), m_RequestS_c__[0]); } catch (err) { }
                    if (BoardTEMP_CateItem3Used[Board_Num] == 1) {
                        try {
                            var obj_1 = document.getElementById("cate_" + e1);
                            var obj_2 = document.getElementById("cate2_" + e1);
                            var MX__1 = obj_2.length;
                            for (var NNX_ = 1; NNX_ < MX__1; NNX_++) {
                                obj_2.remove(1);
                            }

                            var now_seq = obj_1.selectedIndex;
                            var mm_1 = obj_1[now_seq].value2;
                            var mm_1__ = mm_1.split('↓');
                            if (mm_1__.length > 1) {
                                for (var NNX_ = 1; NNX_ < mm_1__.length; NNX_++) {
                                    obj_2.options[NNX_] = new Option(mm_1__[NNX_], mm_1__[NNX_]);
                                }
                                if (BoardTEMP_CateItem3Used[Board_Num] == 1) {
                                    obj_2.style.display = "";
                                }
                            }
                            else {
                                obj_2.style.display = "none";
                            }
                            try { Teldd(document.getElementById("cate2_" + e1), m_RequestS_c__[1]); } catch (err) { }
                        } catch (err) { }
                    }
                }
                else {
                    try { Teldd(document.getElementById("cate_" + e1), m_RequestS_c__[0]); } catch (err) { }
                }
            }


            var ifr = document.getElementById("ifr00030_" + e1).contentWindow;

            var root1 = ifr.document.getElementById("AREA_0").value;
            var root2 = ifr.document.getElementById("AREA_1").value;
            var root3 = ifr.document.getElementById("AREA_2").value;
            var root4 = ifr.document.getElementById("AREA_3").value;

            if (root1 == "NO USE") {
                obj_100001.style.display = "none";
                obj_100002.style.display = "none";
                obj_100003.style.display = "none";
                obj_100004.style.display = "none";
                obj_100005.style.display = "none";
                obj_100006.style.display = "none";
                obj_100007.style.display = "none";
                obj_100008.style.display = "none";
                obj_100009.style.display = "none";
                obj_100010.style.display = "none";
                obj_100011.style.display = "none";
                obj_100008.style.display = "";
                obj_100008.innerHTML = '<br /><br /><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#d9d9d9" class="BoardHrColor_TOP"><div class="dheight_1"></div></td></tr><tr><td align="center"><img src="/img/res_none.gif" alt="게시글 열람 권한이 없습니다." /></td></tr><tr><td bgcolor="#d9d9d9" class="BoardHrColor_TOP"><div class="dheight_1"></div></td></tr></table><br />';
            }
            else {
                document.getElementById('items3_' + e1).innerHTML = root1;
                document.getElementById('items5_' + e1).innerHTML = root2;
                document.getElementById('items2_' + e1).innerHTML = root3;
                document.getElementById('items6_' + e1).innerHTML = ''
                + '<div   style="float:right;">'
                + '<div style="float:left;" >'
                + '<input class="input_no" id="chk_C001" type="checkbox" name="chk_C001" checked="checked" /><label for="chk_C001">제목</label>'
                + '<input class="input_no" id="chk_C002" type="checkbox" name="chk_C002" /><label for="chk_C002">내용</label>'
                + '<input class="input_no" id="chk_C003" type="checkbox" name="chk_C003" /><label for="chk_C003">이름</label></span>'
                + '</div>'
                + '<div style="float:left;" >'
                + '<label class="dcaption"  for="txt_keyword">검색어을 입력하여 주십시요.</label>'
                + '<input title="검색어을 입력하여 주십시요." style="width:100px;" name="txt_keyword" type="text" id="txt_keyword" onkeydown="if (event.keyCode ==13){Board.FIND2(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ');return false;}"  />'
                + '</div>'
                + '<div class="FindBTN_VN" alt="검색" style="float:left;">'
                + '<a href="" onclick="Board.FIND2(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ');return false;"  title="검색"><img src="/img/blank.gif" width="0" height="0" alt="검색" /></a>'
                + '</div>'
                + '<div class="FindCancelBTN_VN" alt="취소"  style="float:left;"  >'
                + '<a href="" onclick="Board.MainGo();return false;" title="취소" ><img src="/img/blank.gif" width="0" height="0" alt="취소" ></a>'
                + '</div>'
                + '</div >';



                if (RequestS.c1 == "1") { document.getElementById("chk_C001").checked = true; } else if (RequestS.c1 == "0") { document.getElementById("chk_C001").checked = false; }
                if (RequestS.c2 == "1") { document.getElementById("chk_C002").checked = true; } else if (RequestS.c2 == "0") { document.getElementById("chk_C002").checked = false; }
                if (RequestS.c3 == "1") { document.getElementById("chk_C003").checked = true; } else if (RequestS.c3 == "0") { document.getElementById("chk_C003").checked = false; }
                if (RequestS.w != "") { document.getElementById("txt_keyword").value = RequestS.w; }
            }


            if (BoardAuthorityVV[6] == "1") {
                if (BoardTEMP_TypeView[Board_Num] == "snap") /*포토스냅형*/{ if (document.getElementById("span_btn_w_" + e1)) document.getElementById("span_btn_w_" + e1).innerHTML = "<a href=\"\" onclick=\"Board.LINK('" + e + "','" + e1 + "'," + Board_Num + ",'Write');return false;\" title=\"글쓰기\" ><img style=\"cursor:pointer;\"  src=\"" + TEMPLATE.LOAD(e1, "WriteBTN") + "\" alt=\"글쓰기\" /></a>"; }
                else { document.getElementById("items4_" + e1).innerHTML = "<a href=\"\" onclick=\"Board.LINK('" + e + "','" + e1 + "'," + Board_Num + ",'Write');return false;\" title=\"글쓰기\" ><img style=\"cursor:pointer;\"  src=\"" + TEMPLATE.LOAD(e1, "WriteBTN") + "\" alt=\"글쓰기\" /></a>"; }
            }
            else {
                try {
                    if (BoardTEMP_WriteBtnGo[Board_Num] == 1) {
                        if (ifr.document.getElementById("BoardAuthority0").value == "") {
                            if (BoardTEMP_TypeView[Board_Num] == "snap") /*포토스냅형*/{ if (document.getElementById("span_btn_w_" + e1)) document.getElementById("span_btn_w_" + e1).innerHTML = "<img style=\"cursor:pointer;\" onclick=\"Board.LINK('" + e + "','" + e1 + "'," + Board_Num + ",'LOGIN')\"  src=\"" + TEMPLATE.LOAD(e1, "WriteBTN") + "\" alt=\"글쓰기\" />"; }
                            else { document.getElementById("items4_" + e1).innerHTML = "<img style=\"cursor:pointer;\" onclick=\"Board.LINK('" + e + "','" + e1 + "'," + Board_Num + ",'LOGIN')\"  src=\"" + TEMPLATE.LOAD(e1, "WriteBTN") + "\" alt=\"글쓰기\" />"; }
                        }
                        else {
                            if (BoardTEMP_TypeView[Board_Num] == "snap") /*포토스냅형*/{ if (document.getElementById("span_btn_w_" + e1)) document.getElementById("span_btn_w_" + e1).innerHTML = "<img style=\"cursor:pointer;\" onclick=\"Board.LINK('" + e + "','" + e1 + "'," + Board_Num + ",'LOGINOUT')\"  src=\"" + TEMPLATE.LOAD(e1, "WriteBTN") + "\" alt=\"글쓰기\" />"; }
                            else { document.getElementById("items4_" + e1).innerHTML = "<img style=\"cursor:pointer;\" onclick=\"Board.LINK('" + e + "','" + e1 + "'," + Board_Num + ",'LOGINOUT')\"  src=\"" + TEMPLATE.LOAD(e1, "WriteBTN") + "\" alt=\"글쓰기\" />"; }
                        }
                    }
                } catch (err) { }
            }



            if (BoardTEMP_TypeView[Board_Num] == "general")/*일반형*/
            {
            }
            else if (BoardTEMP_TypeView[Board_Num] == "summary") /*요약형*/
            {
            }
            else if (BoardTEMP_TypeView[Board_Num] == "webzine") /*웹진형*/
            {
            }
            else if (BoardTEMP_TypeView[Board_Num] == "faq") /*FAQ형*/
            {
            }
            else if (BoardTEMP_TypeView[Board_Num] == "gallery") /*갤러리형*/
            {
                setTimeout("PostimgResizing2P();", 1000);
            }
            else if (BoardTEMP_TypeView[Board_Num] == "photo") /*포토앨범형*/
            {
                setTimeout("PostimgResizing2P();", 1000);
                document.getElementById('items5_' + e1).style.display = "none";
                document.getElementById('items6_' + e1).style.display = "none";
            }
            else if (BoardTEMP_TypeView[Board_Num] == "blog") /*블로그형*/
            {
                setTimeout("PostimgResizing();", 1000);
            }
            else if (BoardTEMP_TypeView[Board_Num] == "event") /*이밴트형*/
            {
            }

        }
    },
    LOCKLINK: function (e, e1) /*파일 관련*/
    {
        var obj_100001 = document.getElementById("span0001_" + e1);
        var obj_100002 = document.getElementById("span0002_" + e1);
        var obj_100003 = document.getElementById("span0003_" + e1);
        var obj_100004 = document.getElementById("span0004_" + e1);
        var obj_100005 = document.getElementById("span0005_" + e1);
        var obj_100006 = document.getElementById("span0006_" + e1);
        var obj_100007 = document.getElementById("span0007_" + e1);
        var obj_100008 = document.getElementById("span0008_" + e1);
        var obj_100009 = document.getElementById("span0009_" + e1);
        var obj_100010 = document.getElementById("span0010_" + e1);
        var obj_100011 = document.getElementById("span0011_" + e1);
        obj_100001.style.display = 'none';
        obj_100002.style.display = 'none';
        obj_100003.style.display = 'none';
        obj_100004.style.display = 'none';
        obj_100005.style.display = 'none';
        obj_100006.style.display = 'none';
        obj_100007.style.display = 'none';
        obj_100008.style.display = 'none';
        obj_100009.style.display = 'none';
        obj_100010.style.display = 'none';
        obj_100011.style.display = 'none';

        obj_100006.innerHTML = '<br/><br/>'
+ '<table width="100%" border="0" cellspacing="0" cellpadding="5">'
+ '<tr><td   class="BoardHrColor2_TOP BoardHrColor2_TOP pad0"><div class="dheight_3"></div></td></tr>'
+ '<tr><td class="pad0"><div class="dheight_2"></div></td></tr>'
+ '<tr><td height="40" align="center" valign="bottom" bgcolor="#f7f7f7" class="bold">수정,삭제,비밀글읽기를 위해서는 글작성시 등록한 비밀번호(로그인 암호)를 입력하셔야합니다.</td></tr>'
+ '<tr><td align="center" bgcolor="#f7f7f7" class="bold">비밀번호 : <input name="txt_passwdN" type="password" id="txt_passwdN" title="수정,삭제,비밀글읽기를 위해서는 글작성시 등록한 비밀번호(로그인 암호)를 입력하셔야합니다." onkeydown="if(event.keyCode ==13){Board.LOCKLINK2(\'' + e + '\',\'' + e1 + '\');return false;}" /> <font color="blue" id="MSG_DELSE" name="MSG_DELSE"></font></td></tr>'
+ '<tr><td height="40" align="center" valign="top" bgcolor="#f7f7f7" class="colorbf0101">데이터를 삭제할 경우 복구가 불가능합니다. 신중히 확인하시고 삭제하세요.</td></tr>'
+ '<tr><td class="pad0"><div class="dheight_2"></div></td></tr>'
+ '<tr><td   class="BoardHrColor2_TOP BoardHrColor2_TOP pad0"><div class="dheight_3"></div></td></tr>'
+ '<tr><td align="center">'
+ '<img style="cursor:pointer;" onclick="Board.LOCKLINK2(\'' + e + '\',\'' + e1 + '\')" src="/img_bbs/bt_cause.gif" alt="확인" width="66" height="23" hspace="2" />'
+ '<img style="cursor:pointer;" onclick="Board.PASSWORD2(\'\',\'' + e1 + '\',1,\'\',2)" src="/img_bbs/bt_cancel.gif" alt="취소" width="66" height="23" hspace="2" /></td></tr>'
+ '</table> ';
        obj_100006.style.display = '';
        document.getElementById("txt_passwdN").focus();
    },
    LOCKLINK2: function (e, e1) /*파일 관련*/
    {
        if (document.getElementById("txt_passwdN").value.trim() == "") {
            alert("비밀번호을 입력하여 주십시요. ");
        }
        /*notice_setcookie2("pwd" + e, document.getElementById("txt_passwdN").value.trim(), 1);*/
        /*alert("set22");*/


        var today = new Date();
        var mppp = today.getYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + Math.round(100 * Math.random());

        jQuery.ajax({
            type: "POST",                   //타입 GET , POST
            datatype: "html",               //데이타타입 html, xml 등등
            url: "/common/board/boardPlus.aspx",     //경로
            data: "T=PASSWORD&T1=" + e + "&T2=" + encodeURIComponent(Base64.encode(document.getElementById("txt_passwdN").value.trim())) + "&T3=Edit&d=" + mppp + "&pdn=" + XncodeUR(PageBaseInfo.domain),
            async: false,                   //비동기 사용여부 true : 비동기, false : 동기
            success: function (data) {
                var MO = data.trim();
                if (MO == "") {
                    document.getElementById("MSG_DELSE").innerHTML = "비밀번호가 일치하지 않습니다.";
                }
                else {
                    var m_page = location.href;
                    if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
                    var m_page2 = m_page + '?T=C&c=' + encodeURIComponent(RequestS.c) + '&c1=' + RequestS.c1 + '&c2=' + RequestS.c2 + '&c3=' + RequestS.c3 + '&w=' + encodeURIComponent(RequestS.w) + '&sn=' + e;
                    location.href = (m_page2);
                }
            },    //성공시 실행할 함수
            error: function () {
                return false;
            }             //에러발생시 실행할 함수
        });


    },
    CONTENT: function (e, e1, Board_Num) /*보드 내용*/
    {
        var obj_100001 = document.getElementById("span0001_" + e1);
        var obj_100002 = document.getElementById("span0002_" + e1);
        var obj_100003 = document.getElementById("span0003_" + e1);
        var obj_100004 = document.getElementById("span0004_" + e1);
        var obj_100005 = document.getElementById("span0005_" + e1);
        var obj_100006 = document.getElementById("span0006_" + e1);
        var obj_100007 = document.getElementById("span0007_" + e1);
        var obj_100008 = document.getElementById("span0008_" + e1);
        var obj_100009 = document.getElementById("span0009_" + e1);
        var obj_100010 = document.getElementById("span0010_" + e1);
        var obj_100011 = document.getElementById("span0011_" + e1);
        if (e == 'LOAD') {
            var MPMP = RENDOMS_PLUS();
            obj_100002.innerHTML = ''

+ '<div class="c_wrap">'
+ '<div class="c_left bold FontSize8pt "  ><img src="/img_bbs/ico_pg.gif" width="10" height="9" align="absmiddle" alt="No" /> No. <span name=\"items014_' + e1 + '\" id=\"items014_' + e1 + '\"></span></div>'
+ '<div class="c_right"  >'
+ '<div class="divTable" style="width:140px;" ><div class="divRow" >'
+ '<div class="divColumn" style="width:20px;"><a href="확대" onclick="Board.BTN(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'P\');return false;" title="확대"><img src="/img_bbs/ico_plus.gif" alt="확대" width="18" height="14" /></a></div>'
+ '<div class="divColumn" style="width:20px;"><a href="축소" onclick="Board.BTN(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'M\');return false;" title="축소"><img   src="/img_bbs/ico_minus.gif" alt="축소" width="18" height="14" /></a></div>'
+ '<div class="divColumn" style="width:20px;"><a href="인쇄" onclick="Board.BTN(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'PRINT\');return false;" title="인쇄"><img src="/img_bbs/ico_print.gif" alt="인쇄" width="18" height="14" /></a></div>'

+ '<div class="divColumn" style="width:20px;"><a href="색상변화 기본값" onclick="Board.BTN(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'C0\');return false;"   title="색상변화 기본값"><span style="height:14px;width:18px;border:1px #0001ff solid; color:#000099;" >C</span></a></div>'
+ '<div class="divColumn" style="width:20px;"><a href="색상변화 반전" onclick="Board.BTN(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'C1\');return false;"    title="색상변화 반전"><span style="height:14px;width:18px;border:1px #0001ff solid; color:#000099;background-color:rgb(102, 204, 255);" >C</span></a></div>'
+ '<div class="divColumn" style="width:20px;"><a href="색상변화 고대비" onclick="Board.BTN(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'C2\');return false;"   title="색상변화 고대비"><span style="height:14px;width:18px;border:1px #0001ff solid; color:#ffff00;background-color:rgb(0, 0, 0);" >C</span></a></div>'
+ '<div class="divColumn" style="width:20px;"><a href="색상변화 고대비2" onclick="Board.BTN(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'C3\');return false;" title="색상변화 고대비2"><span style="height:14px;width:18px;border:1px #0001ff solid; color:#000099;background-color:rgb(204, 204, 153);" >C</span></a></div>'

+ '</div></div>'
+ '</div></div>'


+ '<span name=\"items0_' + e1 + '\" id=\"items0_' + e1 + '\" ></span>'

+ '<div bgcolor="#818181" class="pad0"><div class="dheight_1"></div></div>'
+ '<div class="BoardHrColor2_TOP pad0"><div class="dheight_2"></div></div>'
+ '<div align="center" id="tr_replyUsed00"></div>'

+ '<div  id="tr_replyUsed1" style="display:none;">'
    + '<div id="tr_replyUsed2" style="display:none;">'
                    + '<div class="divTable" style="height:40px;">'
                        + '<div class="divRow">'
                            + '<div  class="divColumn" style="width:20%;" >'
                                + '<div>Name : '
                                + '<label class="dcaption" for="txt_e_num">순번 참조용</label>'
                                + '<input name="txt_e_num" type="hidden" id="txt_e_num" title="순번"/>'
                                + '<label class="dcaption" for="txt_write_id">작성자 아이디</label>'
                                + '<input name="txt_write_id" type="text" id="txt_write_id" style="width:90px;display:none;" title="아이디"/>'
                                + '<label class="dcaption" for="txt_write_name">작성자 이름</label>'
                                + '<input name="txt_write_name" type="text" id="txt_write_name" style="width:90px;display:none;" title="이름"/>'
                                + '<label class="dcaption" for="txt_write_nick">작성자 닉네임</label>'
                                + '<input name="txt_write_nick" type="text" id="txt_write_nick" style="width:90px;" onkeyup="CheckStrLen(this,15);" onblur="CheckStrLen(this,15);"  onkeydown="if(event.keyCode ==13){return false}"   title="닉네임"/></div>'
                                + '<div id="tr_replyUsed5">Password : '
                                + '<label class="dcaption" for="txt_pwd">암호을 입력하여 주십시요</label>'
                                + '<input title="암호을 입력하여 주십시요" name="txt_pwd" type="password" id="txt_pwd" type="password" style="width:90px;" onkeyup="check_eng(this);CheckStrLen(this,5);" onblur="CheckStrLen(this,5);"  onkeydown="if(event.keyCode ==13){return false}"   /></div>'
                                + '<div id="tr_replyUsed6" style="height:23px;display:none;"></div>'
                            + '</div>'
                            + '<div class="divColumn"  style="width:70%;text-align:left;"  >'
                            + '<label class="dcaption" for="txt_Mcontent">코멘트을 입력하여 주십시요</label>'
                            + '<textarea title="코멘트을 입력하여 주십시요" name="txt_Mcontent" rows="3" cols="20" id="txt_Mcontent" style="width:97%;" onkeyup="CheckStrLen(this,700);" onblur="CheckStrLen(this,700);"  ></textarea></div>'
                            + '<div class="divColumn"  style="width:10%;text-align:left;vertical-align:top;" >'
                                + '<a href="" onclick="Board.COMMENT(\'NEW\',\'' + e1 + '\',' + Board_Num + ');return false;" title="코멘트입력"  id="tr_replyUsed8" style="position:absolute;" ><img src="' + TEMPLATE.LOAD(e1, "CommentInputBTN") + '" '
                                + 'alt="코멘트입력"  /></a>'
                                + '<a href="" onclick="Board.COMMENT(\'EDIT\',\'' + e1 + '\',' + Board_Num + ');return false;" title="코멘트수정" id="tr_replyUsed9" style="position:absolute;visibility:hidden;" ><img src="' + TEMPLATE.LOAD(e1, "CommentInputBTN") + '" '
                                + 'alt="코멘트수정"  /></a></div>'
                        + '</div>'
                    + '</div>'



                    + '<div id="tr_replyUsed7" class="divTable"  style="display:none;height:20px;" >'
                        + '<div class="divRow" >'
                            + '<div class="divColumn"  style="width:20%;" id="SPAM_COMT_0" name="SPAM_COMT_0" ><label for="TEXT_COMT">' + MPMP[1] + '</label></div>'
                            + '<div class="divColumn"  style="width:80%;text-align:left;" >'
                                + '<input maxlength="4" onkeydown="if(event.keyCode ==13){return false}" value2="' + MPMP[0] + '"  size="10" id="TEXT_COMT" name="TEXT_COMT" type="text" title="[' + MPMP[0] + '] 자동글방지에 사용되는 것입니다." />'
                                + '<input maxlength="4" value="' + MPMP[0] + '"  id="TEXT_COMT_2" name="TEXT_COMT_2" type="hidden" title="자동글방지에 확인에 사용되는 것입니다." />'
                                + '<label class="dcaption" for="TEXT_COMT">[' + MPMP[0] + '] 자동글방지에 사용되는 것입니다.</label>'
                                + '<label class="dcaption" for="TEXT_COMT_2">자동글방지에 확인에 사용되는 것입니다.</label>'
                                + '<span class="helptxt">* 대소문자를 구분하여 <font color="#FF0000">빨간글자만</font> 순서대로 입력하세요.</span>'
                            + '</div>'
                        + '</div>'
                    + '</div>'

                    + '<div id="tr_replyUsed3"  class="divTable" style="display:none;margin-top: 10px;height:1px"  ><div class="divRow" ><div class="divColumn BoardHrColor_TOP pad0" style="width:100%;height:1px" ></div></div></div>'

                    + '<div class="divTable" id="tr_replyUsed4"  style="display:none;height:30px;" >'
                        + '<div class="divRow" >'
                            + '<div class="divColumn" style="width:90%;text-align:left;">&nbsp;&nbsp;&nbsp;추천하기'
                                + '<label class="dcaption" for="RecommendUsed' + e1 + '_1">추천하기 포인트 1점</label>'
                                + '<span class="input_no"><input title="추천하기 포인트:1" id="RecommendUsed' + e1 + '_1" type="radio" name="RecommendUsed' + e1 + '" value="1" help="' + e + ':' + e1 + ':' + Board_Num + '" value2="' + e + '" value3="' + e1 + '" value4="' + Board_Num + '"  /></span> '
                                + '<img src="' + TEMPLATE.LOAD(e1, "Point1BTN") + '" align="absmiddle" alt="추천하기 포인트:1" />'
                                + '<label class="dcaption" for="RecommendUsed' + e1 + '_2">추천하기 포인트 2점</label>'
                                + '<span class="input_no"><input title="추천하기 포인트:2" id="RecommendUsed' + e1 + '_2" type="radio" name="RecommendUsed' + e1 + '" value="2" help="' + e + ':' + e1 + ':' + Board_Num + '" value2="' + e + '" value3="' + e1 + '" value4="' + Board_Num + '"  /></span> '
                                + '<img src="' + TEMPLATE.LOAD(e1, "Point2BTN") + '" align="absmiddle" alt="추천하기 포인트:2" />'
                                + '<label class="dcaption" for="RecommendUsed' + e1 + '_3">추천하기 포인트 3점</label>'
                                + '<span class="input_no"><input title="추천하기 포인트:3" id="RecommendUsed' + e1 + '_3" type="radio" name="RecommendUsed' + e1 + '" value="3" help="' + e + ':' + e1 + ':' + Board_Num + '" value2="' + e + '" value3="' + e1 + '" value4="' + Board_Num + '"  /></span> '
                                + '<img src="' + TEMPLATE.LOAD(e1, "Point3BTN") + '" align="absmiddle" alt="추천하기 포인트:3" />'
                                + '<label class="dcaption" for="RecommendUsed' + e1 + '_4">추천하기 포인트 4점</label>'
                                + '<span class="input_no"><input title="추천하기 포인트:4" id="RecommendUsed' + e1 + '_4" type="radio" name="RecommendUsed' + e1 + '" value="4" help="' + e + ':' + e1 + ':' + Board_Num + '" value2="' + e + '" value3="' + e1 + '" value4="' + Board_Num + '"  /></span> '
                                + '<img src="' + TEMPLATE.LOAD(e1, "Point4BTN") + '" align="absmiddle" alt="추천하기 포인트:4" />'
                                + '<label class="dcaption" for="RecommendUsed' + e1 + '_5">추천하기 포인트 5점</label>'
                                + '<span class="input_no"><input title="추천하기 포인트:5" id="RecommendUsed' + e1 + '_5" type="radio" name="RecommendUsed' + e1 + '" value="5" help="' + e + ':' + e1 + ':' + Board_Num + '" value2="' + e + '" value3="' + e1 + '" value4="' + Board_Num + '"  /></span> '
                                + '<img src="' + TEMPLATE.LOAD(e1, "Point5BTN") + '" align="absmiddle" alt="추천하기 포인트:5" /></div>'
                            + '<div class="divColumn" style="width:10%"><a href="추천하기" onclick="Board.RecommendUsed(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'PRINT\');return false;" title="추천하기" ><img src="' + TEMPLATE.LOAD(e1, "RecommendBTN") + '" alt="추천하기"  hspace="12" align="absmiddle" /></a></div>'
                        + '</div>'
                    + '</div>'
        + '</div>'
    + '</div>'
+ '</div>'

+ '<div class="divTable" style="height:50px;">'
    + '<div class="divRow">'
        + '<div class="divColumn" style="width:100%;text-align:left;">'
            + '<div id="items12_' + e1 + '"></div>'
        + '</div>'
    + '</div>'
+ '</div>'

+ '<div class="divTable" style="height:30px;" >'
    + '<div class="divRow">'
        + '<div class="divColumn" style="width:100%;text-align:right;">'
        + '<span id="span_LinkBoard" name="span_LinkBoard"></span>'
        + '<a href="" id="BTN__0001" style="cursor:pointer;visibility:hidden;" onclick="Board.BTN(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'Repley\');return false;" title="답글달기"><img src="' + TEMPLATE.LOAD(e1, "CommentBTN") + '" alt="답글달기"  hspace="1" /></a>'
        + '<a href="" id="BTN__0002" style="cursor:pointer;visibility:hidden;" onclick="Board.BTN(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'Del\');return false;"    title="삭제하기"><img src="' + TEMPLATE.LOAD(e1, "DeleteBTN") + '" alt="삭제하기"  hspace="1" /></a>'
        + '<a href="" id="BTN__0003" style="cursor:pointer;visibility:hidden;" onclick="Board.BTN(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'Edit\');return false;"   title="글수정"><img src="' + TEMPLATE.LOAD(e1, "EditeBTN") + '" alt="글수정" hspace="1" /></a>'
        + '<a href="" id="BTN__0004" style="cursor:pointer;"              onclick="Board.BTN(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'List\');return false;"   title="글목록"><img src="' + TEMPLATE.LOAD(e1, "LIstBTN") + '" alt="글목록" hspace="1" /></a>'
        + '</div>'
    + '</div>'
+ '</div>';

            var tr_replay_oo1 = document.getElementById("tr_replyUsed1");
            var tr_replay_oo2 = document.getElementById("tr_replyUsed2");
            var tr_replay_oo3 = document.getElementById("tr_replyUsed3");
            var tr_replay_oo4 = document.getElementById("tr_replyUsed4");
            /*
            if (BoardTEMP_replyUsed[Board_Num] == 1 && BoardTEMP_RecommendUsed[Board_Num] == 1) { tr_replay_oo1.style.display = ""; tr_replay_oo2.style.display = ""; tr_replay_oo3.style.display = ""; tr_replay_oo4.style.display = ""; }
            else if (BoardTEMP_replyUsed[Board_Num] == 1) { tr_replay_oo1.style.display = ""; tr_replay_oo2.style.display = ""; }
            else if (BoardTEMP_RecommendUsed[Board_Num] == 1) { tr_replay_oo1.style.display = ""; tr_replay_oo4.style.display = ""; }
            */
            if (BoardTEMP_replyUsed[Board_Num] == 1) { tr_replay_oo2.style.display = ""; }
            if (BoardTEMP_RecommendUsed[Board_Num] == 1) { tr_replay_oo4.style.display = ""; }


            if (BoardTEMP_SpanReplay[Board_Num] == 1) {
                document.getElementById("tr_replyUsed7").style.display = "";
            }

            obj_100003.innerHTML = ""
            + "<div class=\"divTable\">"
                + "<div class=\"divRow\">"
                    + "<div style=\"text-align:left;width:50%;margin-top:2px;margin-bottom:2px;\" class=\"divColumn bold\" name=\"items1_" + e1 + "\" id=\"items1_" + e1 + "\" ></div>"
                    + "<div style=\"text-align:right;width:50%;margin-top:2px;margin-bottom:2px;\" class=\"divColumn FontVer\" name=\"items2_" + e1 + "\" id=\"items2_" + e1 + "\"></div>"
                + "</div>"
                + "<div class=\"divRow\"><div class=\"divColumn\" style=\"width:100%;margin-top:2px;margin-bottom:2px;\" name=\"items3_" + e1 + "\" id=\"items3_" + e1 + "\"></div></div>"
                + "<div class=\"divRow\"><div class=\"divColumn\" style=\"text-align:right;width:100%;margin-top:2px;margin-bottom:2px;\" name=\"items4_" + e1 + "\" id=\"items4_" + e1 + "\"></div></div>"
                + "<div class=\"divRow\">"
                    + "<div class=\"divColumn\" style=\"text-align:left;width:50%;margin-top:2px;margin-bottom:10px;\" name=\"items5_" + e1 + "\" id=\"items5_" + e1 + "\"></div>"
                    + "<div class=\"divColumn\" style=\"text-align:right;width:50%;margin-top:2px;margin-bottom:10px;\" name=\"items6_" + e1 + "\" id=\"items6_" + e1 + "\"></div>"
                + "</div>"
            + "</div>";

            var eNUM = E_MEM(Board_Num);

            if (eNUM[8] == "1" && BoardTEMP_AnswerUsed[Board_Num] == 1) {
                document.getElementById("BTN__0001").style.visibility = "visible";
            }
            if (eNUM[6] == "1") {
                document.getElementById("BTN__0002").style.visibility = "visible";
            }
            if (eNUM[6] == "1") {
                document.getElementById("BTN__0003").style.visibility = "visible";
            }
            /*notice_setcookie2("pwd" + RequestS.sn, "", 0);*/
            /*alert("set33_초기화");*/



            var ifr = document.getElementById("ifr00030_" + e1).contentWindow;
            var root1 = ifr.document.getElementById("AREA_0").value;
            var root2 = ifr.document.getElementById("AREA_1").value;
            var root3 = ifr.document.getElementById("AREA_2").value;
            var root4 = ifr.document.getElementById("AREA_3").value;
            var root5 = ifr.document.getElementById("AREA_4").value;
            var root6 = ifr.document.getElementById("AREA_5").value;

            var root11 = ifr.document.getElementById("AREA_10").value;
            var root12 = ifr.document.getElementById("AREA_11").value;
            var root13 = ifr.document.getElementById("AREA_12").value;
            var root14 = ifr.document.getElementById("AREA_13").value;


            try { document.getElementById("txt_write_id").value = root11; } catch (err) { }
            try { document.getElementById("txt_write_name").value = root12; } catch (err) { }
            try { document.getElementById("txt_write_nick").value = root13; } catch (err) { }
            try { if (root13 == "") { document.getElementById("txt_write_nick").value = root12; } } catch (err) { }
            try { if (root14 == "1" && BoardTEMP_replyUsed[Board_Num] == 1) { tr_replay_oo2.style.display = ""; } else { tr_replay_oo2.style.display = "none"; } } catch (err) { }

            if (root11.trim() != "") {
                document.getElementById("txt_write_id").readOnly = true;
                document.getElementById("txt_write_name").readOnly = true;
                document.getElementById("txt_write_nick").readOnly = true;
                document.getElementById("tr_replyUsed5").style.display = "none";
                document.getElementById("tr_replyUsed6").style.display = "";
            }
            else {
                if (BoardTEMP_MemOley[Board_Num] == 1)
                { tr_replay_oo4.style.display = "none"; }
                /*if (BoardTEMP_MemOley2[Board_Num] == 1){ tr_replay_oo2.style.display = "none"; }*/
            }

            if (root1 == "NO USED") {
                obj_100001.style.display = 'none';
                obj_100002.style.display = 'none';
                obj_100003.style.display = 'none';
                obj_100004.style.display = 'none';
                obj_100005.style.display = 'none';
                obj_100006.style.display = 'none';
                obj_100007.style.display = 'none';
                obj_100008.style.display = 'none';
                obj_100009.style.display = 'none';
                obj_100010.style.display = 'none';
                obj_100011.style.display = 'none';
                obj_100008.style.display = "";
                obj_100008.innerHTML = '<br /><br /><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td bgcolor="#d9d9d9" class="BoardHrColor_TOP"><div class="dheight_1"></div></td></tr><tr><td align="center"><img src="/img/res_none.gif" alt="게시글 열람 권한이 없습니다." /></td></tr><tr><td bgcolor="#d9d9d9" class="BoardHrColor_TOP"><div class="dheight_1"></div></td></tr></table><br />';
            }
            else {
                document.getElementById('items0_' + e1).innerHTML = root1;
                document.getElementById('items12_' + e1).innerHTML = root3;

                document.getElementById('items014_' + e1).innerHTML = root4;
                document.getElementById('items3_' + e1).innerHTML = root5;
                document.getElementById('items5_' + e1).innerHTML = root6;
                if (root5 != "") {
                    document.getElementById('items6_' + e1).innerHTML = ''
+ '<div   style="float:right;">'
+ '<div style="float:left;" >'
+ '<input class="input_no" id="chk_C001" type="checkbox" name="chk_C001" checked="checked" /><label for="chk_C001">제목</label>'
+ '<input class="input_no" id="chk_C002" type="checkbox" name="chk_C002" /><label for="chk_C002">내용</label>'
+ '<input class="input_no" id="chk_C003" type="checkbox" name="chk_C003" /><label for="chk_C003">이름</label></span>'
+ '</div>'
+ '<div style="float:left;" >'
+ '<label class="dcaption" for="txt_keyword">검색어을 입력하여 주십시요.</label>'
+ '<input title="검색어을 입력하여 주십시요." style="width:100px;" name="txt_keyword" type="text" id="txt_keyword" onkeydown="if (event.keyCode ==13){Board.FIND2(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ');return false;}"  />'
+ '</div>'
+ '<div class="FindBTN_VN" alt="검색" style="float:left;">'
+ '<a href="" onclick="Board.FIND2(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ');return false;"  title="검색"><img src="/img/blank.gif" width="0" height="0" alt="검색" /></a>'
+ '</div>'
+ '<div class="FindCancelBTN_VN" alt="취소"  style="float:left;"  >'
+ '<a href="" onclick="Board.MainGo();return false;" title="취소" ><img src="/img/blank.gif" width="0" height="0" alt="취소" ></a>'
+ '</div>'
+ '</div >';
                    if (RequestS.c1 == "1") { document.getElementById("chk_C001").checked = true; } else if (RequestS.c1 == "0") { document.getElementById("chk_C001").checked = false; }
                    if (RequestS.c2 == "1") { document.getElementById("chk_C002").checked = true; } else if (RequestS.c2 == "0") { document.getElementById("chk_C002").checked = false; }
                    if (RequestS.c3 == "1") { document.getElementById("chk_C003").checked = true; } else if (RequestS.c3 == "0") { document.getElementById("chk_C003").checked = false; }
                    if (RequestS.w != "") { document.getElementById("txt_keyword").value = RequestS.w; }
                }
            }
            if (BoardTEMP_replyUsed[Board_Num] == 1) {
                Board.COMMENT('LIST', e1, Board_Num);
            }

            if (tr_replay_oo2.style.display == "" | tr_replay_oo4.style.display == "") {
                tr_replay_oo1.style.display = "";
            }
            if (tr_replay_oo2.style.display == "" && tr_replay_oo4.style.display == "")
            { tr_replay_oo3.style.display = ""; }
            DATEOP_DocidNX(BoardTEMP_Docid[Board_Num], false);
            default_imgwidth = BoardTEMP_Twidth[Board_Num] - 50;
            setTimeout("PostimgResizing();", 1000);


            if (notice_getcookie("CFONT") != null) {
                var int_font = parseInt(notice_getcookie("CFONT"), 10);
                if (int_font != null && int_font > 5) {
                    jQuery("#bbs_content,#bbs_content a,#bbs_content p,#bbs_content span,#bbs_content td,#bbs_content li,#bbs_content ul,#bbs_content font").css({ 'font-size': int_font + 'px' });
                }
            }
            if (notice_getcookie("CCOLOR") != null) {
                var int_color = notice_getcookie("CCOLOR");
                if (int_color == 'C1') {
                    notice_setcookie("CCOLOR", "C1", 1);
                    jQuery("#bbs_content,#bbs_content a,#bbs_content p,#bbs_content span,#bbs_content td,#bbs_content li,#bbs_content ul,#bbs_content font").css({ "background-color": "rgb(102, 204, 255)", "color": "#616161" });
                }
                else if (int_color == 'C2') {
                    notice_setcookie("CCOLOR", "C2", 1);
                    jQuery("#bbs_content,#bbs_content a,#bbs_content p,#bbs_content span,#bbs_content td,#bbs_content li,#bbs_content ul,#bbs_content font").css({ "background-color": "rgb(0, 0, 0)", "color": "#ffff00" });
                }
                else if (int_color == 'C3') {
                    notice_setcookie("CCOLOR", "C3", 1);
                    jQuery("#bbs_content,#bbs_content a,#bbs_content p,#bbs_content span,#bbs_content td,#bbs_content li,#bbs_content ul,#bbs_content font").css({ "background-color": "rgb(204, 204, 153)", "color": "#616161" });
                }
            }

        }
    },
    RecommendUsed: function (e, e1, Board_Num, T_NUM_) {
        var obj_1 = document.getElementById("RecommendUsed" + e1 + "_1");
        var obj_2 = document.getElementById("RecommendUsed" + e1 + "_2");
        var obj_3 = document.getElementById("RecommendUsed" + e1 + "_3");
        var obj_4 = document.getElementById("RecommendUsed" + e1 + "_4");
        var obj_5 = document.getElementById("RecommendUsed" + e1 + "_5");
        var m_point = -1;
        if (obj_1.checked == true) { m_point = 1; }
        else if (obj_2.checked == true) { m_point = 2; }
        else if (obj_3.checked == true) { m_point = 3; }
        else if (obj_4.checked == true) { m_point = 4; }
        else if (obj_5.checked == true) { m_point = 5; }

        if (BoardTEMP_RecommendUsed[Board_Num] == 1) {
            if (m_point == -1)
            { alert("추천하기을 선택하여 주십시요."); }
            else {
                var today = new Date();
                var mppp = today.getYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + Math.round(100 * Math.random());

                jQuery.ajax({
                    type: "POST",                   //타입 GET , POST
                    datatype: "html",               //데이타타입 html, xml 등등
                    url: "/common/board/boardPlus.aspx",     //경로
                    data: "T=Recommend" + "&T2=" + BoardTEMP_Ncode[Board_Num] + "&T3=" + RequestS.sn + "&T4=" + m_point + "&d=" + mppp + "&pdn=" + XncodeUR(PageBaseInfo.domain),
                    async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                    success: function (data) {
                        var root1_ = data.trim();
                        if (root1_ == "1") /*사용불가*/
                        {
                            alert("추천하기가 사용불가로 설정되어 있습니다.");
                        }
                        else if (root1_ == "2") /*비회원 사용불가*/
                        {
                            alert("로그인후 사용하여 주십시요.");
                        }
                        else if (root1_ == "3") /*이미하였습니다.*/
                        {
                            alert("이미 추천하였습니다.");
                        }
                        else if (root1_ == "4") /*정상적으로 완료.*/
                        {
                            location.reload();
                        }

                    },    //성공시 실행할 함수
                    error: function () {
                        return false;
                    }             //에러발생시 실행할 함수
                });

            }
        }
    },
    GoSite: function (gtype, e1, Board_Num, e2, e3) {
        var mzzz_1 = document.getElementById(e2);
        var mzzz_2 = document.getElementById(e3);
        var obj__1 = document.getElementById("DIV_TableBoard01");
        var obj__2 = document.getElementById("DIV_TableBoard02");
        var obj__3 = document.getElementById("HID_TableBoard03");

        if (gtype == "LOAD") {
            if (mzzz_2) {
                var MUNND = 0;
                for (var mml = 0; mml < Board_Seed.length; mml++) {
                    var mll11 = eval("Board_" + Board_Seed[mml] + "_title");
                    var mll22 = eval("Board_" + Board_Seed[mml] + "_Ncode");
                    if (BoardTEMP_Ncode[Board_Num] == mll22) { continue; }
                    MUNND++; mzzz_2.options[MUNND] = new Option(mll11, mll22);
                }
            }
            if (mzzz_1) {
                var ifr = document.getElementById("ifr00030_" + e1).contentWindow;

                if (ifr) {
                    var MUNND = 0;
                    var GoSite_ = ifr.document.getElementById("TXT_GoSite").value.split("\n");
                    for (var n = 0; n < GoSite_.length; n++) {
                        if (GoSite_[n].split(":").length > 1) {
                            MUNND++; mzzz_1.options[MUNND] = new Option(GoSite_[n].split(":")[1], GoSite_[n].split(":")[0]);
                        }
                    }
                    if (MUNND > 0) {
                        mzzz_2.style.display = ""; obj__1.style.display = "none"; obj__2.style.display = "none";
                        with (obj__1.style) {
                            position = "absolute";
                            cursor = "default";
                            width = "120px";
                            border = "1px solid #c3c3c3";
                            backgroundColor = "#ffffff";
                        }
                        with (obj__2.style) {
                            marginLeft = "120px";
                            position = "absolute";
                            cursor = "default";
                            width = "160px";
                            border = "1px solid #c3c3c3";
                            backgroundColor = "#ffffff";
                        }
                    }
                    else {
                        mzzz_1.style.display = "none"; obj__1.style.display = "none"; obj__2.style.display = "none";
                    }
                }
            }
        }
        else if (gtype == "CHANGE") {
            OPTION.CLEAR3(mzzz_2);
            if (mzzz_1.value == "") {
                var MUNND = 0;
                for (var mml = 0; mml < Board_Seed.length; mml++) {
                    var mll11 = eval("Board_" + Board_Seed[mml] + "_title");
                    var mll22 = eval("Board_" + Board_Seed[mml] + "_Ncode");
                    if (BoardTEMP_Ncode[Board_Num] == mll22) { continue; }
                    MUNND++; mzzz_2.options[MUNND] = new Option(mll11, mll22);
                }
                mzzz_2.style.display = "";
                obj__1.style.display = "none";
                obj__2.style.display = "none";
                if (obj__3) obj__3.value = "";
            }
            else {
                mzzz_2.style.display = "none";
                obj__1.style.display = "";
                obj__2.style.display = "";
                var m_e = "type=linksite&site=" + mzzz_1.value;


                /*window.open("/COMMON/Board/BoardSite.aspx?" + m_e);*/

                jQuery.ajax({
                    type: "POST",                   //타입 GET , POST
                    datatype: "html",               //데이타타입 html, xml 등등
                    url: "/COMMON/Board/BoardSite.aspx",     //경로
                    data: m_e,
                    async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                    success: function (result) {
                        obj__1.innerHTML = result;
                    },    //성공시 실행할 함수
                    error: function () {
                        return false;
                    }             //에러발생시 실행할 함수
                });
                this.GoSiteE("reload");
            }
        }
    },
    ArrGoSite01: new Array(),
    ArrGoSite02: new Array(),
    ArrGoSite03: new Array(),
    ArrGoSite04: new Array(),
    GoSiteE: function (type_, e1, e2, e3) {
        if (type_ == "chk") {
            var chk = -1; for (var k = 0; k < this.ArrGoSite01.length; k++) { if (this.ArrGoSite01[k] == e1.value) { chk = k; break; } }
            if (e1.checked) { if (chk == -1) { var numm = this.ArrGoSite01.length; this.ArrGoSite01[numm] = e1.value; this.ArrGoSite02[numm] = e2; this.ArrGoSite03[numm] = e3; this.ArrGoSite04[numm] = 1; } else { this.ArrGoSite04[chk] = 1; } }
            else { if (chk > -1) this.ArrGoSite04[chk] = 0; }
            this.GoSiteE("reload");
        }
        else if (type_ == "reload") {
            var Nhtml = ""; var Ntxt = "";
            for (var n = 0; n < this.ArrGoSite01.length; n++) {
                if (this.ArrGoSite04[n] == 1) {
                    Ntxt += (Ntxt == "" ? "" : ",") + this.ArrGoSite01[n];
                    Nhtml += (Nhtml == "" ? "" : "<br/>") + "<img style=\"cursor:pointer;\" onclick=\"Board.GoSiteE('del','" + this.ArrGoSite01[n] + "');\" src=\"/img/poll_per_x.gif\"> " + this.ArrGoSite02[n] + "(" + this.ArrGoSite03[n] + ")";
                    if (document.getElementById("n_chkid_" + this.ArrGoSite01[n])) document.getElementById("n_chkid_" + this.ArrGoSite01[n]).checked = true;
                }
            }
            var obj__2 = document.getElementById("DIV_TableBoard02");
            var obj__3 = document.getElementById("HID_TableBoard03");
            if (obj__2) obj__2.innerHTML = Nhtml; if (obj__3) obj__3.value = Ntxt;
            if (obj__2 && obj__2.innerHTML != "") { obj__2.style.display = ""; } else { obj__2.style.display = "none"; }
        }
        else if (type_ == "del") {
            var chk = -1; for (var k = 0; k < this.ArrGoSite01.length; k++) { if (this.ArrGoSite01[k] == e1) { chk = k; break; } }
            if (document.getElementById("n_chkid_" + e1)) { document.getElementById("n_chkid_" + e1).checked = false; }
            if (chk > -1) this.ArrGoSite04[chk] = 0;
            this.GoSiteE("reload");
        }
    },
    COMMENT: function (e, e1, Board_Num, T_NUM_) {
        if (e == "LIST") { /* alert("list"); */
            var ifr = document.getElementById("ifr00030_" + e1).contentWindow;
            document.getElementById("tr_replyUsed00").innerHTML = ifr.document.getElementById("TXT_COMMENT").value;
            document.getElementById("txt_write_id").value = ifr.document.getElementById("BoardAuthority0").value;
            document.getElementById("txt_write_name").value = ifr.document.getElementById("BoardAuthority1").value;
            document.getElementById("txt_write_nick").value = ifr.document.getElementById("BoardAuthority2").value;

            var tr_replay_oo1 = document.getElementById("tr_replyUsed1");
            var tr_replay_oo2 = document.getElementById("tr_replyUsed2");
            var tr_replay_oo3 = document.getElementById("tr_replyUsed3");
            var tr_replay_oo4 = document.getElementById("tr_replyUsed4");


            if (BoardTEMP_WriterDevice[Board_Num] == 0) {
                if (document.getElementById("txt_write_nick").value == "") {
                    document.getElementById("txt_write_nick").value = document.getElementById("txt_write_name").value;
                }
            }
            else if (BoardTEMP_WriterDevice[Board_Num] == 1)
            { document.getElementById("txt_write_nick").value = document.getElementById("txt_write_id").value; }
            else if (BoardTEMP_WriterDevice[Board_Num] == 2)
            { document.getElementById("txt_write_nick").value = document.getElementById("txt_write_name").value; }

            if (ifr.document.getElementById("BoardAuthority0").value.trim() != "") {
                document.getElementById("txt_write_id").readOnly = true;
                document.getElementById("txt_write_name").readOnly = true;
                document.getElementById("txt_write_nick").readOnly = true;
                document.getElementById("tr_replyUsed5").style.display = "none";
                document.getElementById("tr_replyUsed6").style.display = "";
            }
            else {
                document.getElementById("txt_write_id").readOnly = false;
                document.getElementById("txt_write_name").readOnly = false;
                document.getElementById("txt_write_nick").readOnly = false;
                if (BoardTEMP_MemOley[Board_Num] == 1)
                { tr_replay_oo4.style.display = "none"; }
                document.getElementById("tr_replyUsed5").style.display = "";
                document.getElementById("tr_replyUsed6").style.display = "none";
            }
        }
        else if (e == "NEW") {

            var Mcontent__ = document.getElementById("txt_Mcontent").value;
            var pwd__ = document.getElementById("txt_pwd").value;
            var write_id__ = document.getElementById("txt_write_id").value;
            var write_name__ = document.getElementById("txt_write_name").value;
            var write_nick__ = document.getElementById("txt_write_nick").value;
            if (write_nick__ == "") write_nick__ = write_name__;
            if (write_name__ == "") write_name__ = write_nick__;

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
            if (BoardTEMP_SpanReplay[Board_Num] == 1) {
                if (document.getElementById('TEXT_COMT').value.trim() == '') {
                    alert('자동글방지을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_COMT').focus(); } catch (err) { }
                    return;
                }
                if (document.getElementById('TEXT_COMT').value.trim() != document.getElementById('TEXT_COMT_2').value) {
                    alert('자동글방지가 정확하지 않습니다.\n다시입력하여 주십시요.');
                    try { document.getElementById('TEXT_COMT').value = ''; } catch (err) { }
                    try { document.getElementById('TEXT_COMT').focus(); } catch (err) { }
                    return;
                }
            }
            document.getElementById("txt_Mcontent").value = "";
            document.getElementById("TEXT_COMT").value = "";
            document.getElementById("txt_pwd").value = "";
            if (write_id__ == "") {
                document.getElementById("txt_write_name").value = "";
                document.getElementById("txt_write_nick").value = "";
            }

            var ifr = document.getElementById("ifr00030_" + e1).contentWindow;
            ifr.document.getElementById("TXT_Ncode").value = BoardTEMP_Ncode[Board_Num];
            ifr.document.getElementById("TXT_idx").value = RequestS.sn;
            ifr.document.getElementById("TXT_Mcontent").value = Mcontent__;
            ifr.document.getElementById("TXT_pwd").value = pwd__;
            ifr.document.getElementById("TXT_write_id").value = write_id__;
            ifr.document.getElementById("TXT_write_name").value = write_name__;
            ifr.document.getElementById("TXT_write_nick").value = write_nick__;
            ifr.document.getElementById("TXT_Docid").value = "INPUT";
            ifr.document.forms[0].submit();

            var MPMP = RENDOMS_PLUS();
            document.getElementById("SPAM_COMT_0").innerHTML = MPMP[1];
            document.getElementById("TEXT_COMT_2").value = MPMP[0];
        }
        else if (e == "DEL") {

            var passwd = "";
            var MK_Pass = false;
            try { passwd = document.getElementById("txt_passwdN").value; } catch (err) { MK_Pass = true; }

            if (passwd == "") {
                if (!confirm("정말로 삭제하겠습니까?")) {
                    return;
                }
            }
            var today = new Date();
            var mppp = today.getYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + Math.round(100 * Math.random());


            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "html",               //데이타타입 html, xml 등등
                url: "/common/board/boardPlus.aspx",     //경로
                data: "T=CDEL" + "&T2=" + encodeURIComponent(RequestS.sn) + "&T3=" + T_NUM_ + "&T5=" + encodeURIComponent(passwd) + "&d=" + mppp + "&pdn=" + XncodeUR(PageBaseInfo.domain),
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                success: function (data) {



                    var obj_100001 = document.getElementById("span0001_" + e1);
                    var obj_100002 = document.getElementById("span0002_" + e1);
                    var obj_100003 = document.getElementById("span0003_" + e1);
                    var obj_100004 = document.getElementById("span0004_" + e1);
                    var obj_100005 = document.getElementById("span0005_" + e1);
                    var obj_100006 = document.getElementById("span0006_" + e1);
                    var obj_100007 = document.getElementById("span0007_" + e1);
                    var obj_100008 = document.getElementById("span0008_" + e1);
                    var obj_100009 = document.getElementById("span0009_" + e1);
                    var obj_100010 = document.getElementById("span0010_" + e1);
                    var obj_100011 = document.getElementById("span0011_" + e1);

                    if (MK_Pass == true) {
                        if (data.trim() == "1") {
                            obj_100001.style.display = '';
                            obj_100002.style.display = '';
                            obj_100003.style.display = '';
                            obj_100004.style.display = '';
                            obj_100005.style.display = '';
                            obj_100006.style.display = '';
                            obj_100007.style.display = '';
                            obj_100008.style.display = '';
                            obj_100009.style.display = '';
                            obj_100010.style.display = '';
                            obj_100011.style.display = '';

                            obj_100006.style.display = 'none';
                            obj_100006.innerHTML = '';

                            var ifr = document.getElementById("ifr00030_" + e1).contentWindow;
                            ifr.document.getElementById("TXT_Docid").value = "RELOAD";
                            ifr.document.forms[0].submit();
                            return;
                        }
                        else {
                            obj_100001.style.display = 'none';
                            obj_100002.style.display = 'none';
                            obj_100003.style.display = 'none';
                            obj_100004.style.display = 'none';
                            obj_100005.style.display = 'none';
                            obj_100006.style.display = 'none';
                            obj_100007.style.display = 'none';
                            obj_100008.style.display = 'none';
                            obj_100009.style.display = 'none';
                            obj_100010.style.display = 'none';
                            obj_100011.style.display = 'none';

                            obj_100006.innerHTML = '<br/><br/>'
                            + '<table width="100%" border="0" cellspacing="0" cellpadding="5">'
                            + '<tr><td   class="BoardHrColor2_TOP pad0"><div class="dheight_3"></div></td></tr>'
                            + '<tr><td class="pad0"><div class="dheight_2"></div></td></tr>'
                            + '<tr><td height="40" align="center" valign="bottom" bgcolor="#f7f7f7" class="bold">수정,삭제,비밀글읽기를 위해서는 글작성시 등록한 비밀번호(로그인 암호)를 입력하셔야합니다.</td></tr>'
                            + '<tr><td align="center" bgcolor="#f7f7f7" class="bold">비밀번호 : <input name="txt_passwdN" type="password" id="txt_passwdN" title="수정,삭제,비밀글읽기를 위해서는 글작성시 등록한 비밀번호(로그인 암호)를 입력하셔야합니다." onkeydown="if(event.keyCode ==13){Board.COMMENT(\'DEL\',\'' + e1 + '\',' + Board_Num + ',\'' + T_NUM_ + '\');return false;}" /> <font color="blue" id="MSG_DELSE" name="MSG_DELSE"></font></td></tr>'
                            + '<tr><td height="40" align="center" valign="top" bgcolor="#f7f7f7" class="colorbf0101">데이터를 삭제할 경우 복구가 불가능합니다. 신중히 확인하시고 삭제하세요.</td></tr>'
                            + '<tr><td class="pad0"><div class="dheight_2"></div></td></tr>'
                            + '<tr><td   class="BoardHrColor2_TOP pad0"><div class="dheight_3"></div></td></tr>'
                            + '<tr><td align="center">'
                            + '<img style="cursor:pointer;" onclick="Board.COMMENT(\'DEL\',\'' + e1 + '\',' + Board_Num + ',\'' + T_NUM_ + '\');" src="/img_bbs/bt_cause.gif" alt="확인" width="66" height="23" hspace="2" />'
                            + '<img style="cursor:pointer;" onclick="Board.PASSWORD2(\'\',\'' + e1 + '\',1,\'\',2)" src="/img_bbs/bt_cancel.gif" alt="취소" width="66" height="23" hspace="2" /></td></tr>'
                            + '</table> ';
                            obj_100006.style.display = '';
                            document.getElementById("txt_passwdN").focus();
                        }
                    }
                    else {
                        if (data.trim() == "1") {
                            obj_100001.style.display = '';
                            obj_100002.style.display = '';
                            obj_100003.style.display = '';
                            obj_100004.style.display = '';
                            obj_100005.style.display = '';
                            obj_100006.style.display = '';
                            obj_100007.style.display = '';
                            obj_100008.style.display = '';
                            obj_100009.style.display = '';
                            obj_100010.style.display = '';
                            obj_100011.style.display = '';
                            obj_100006.style.display = 'none';
                            obj_100006.innerHTML = '';
                            var ifr = document.getElementById("ifr00030_" + e1).contentWindow;
                            ifr.document.getElementById("TXT_Docid").value = "RELOAD";
                            ifr.document.forms[0].submit();
                            return;
                        }
                        else {
                            obj_100006.style.display = '';
                            document.getElementById("txt_passwdN").focus();
                            document.getElementById("MSG_DELSE").innerHTML = "비밀번호가 일치하지 않습니다.";
                        }
                    }

                },    //성공시 실행할 함수
                error: function () {
                    return false;
                }             //에러발생시 실행할 함수
            });

        }
        else if (e == "EDIT") {

            var Mcontent__ = document.getElementById("txt_Mcontent").value;
            var pwd__ = document.getElementById("txt_pwd").value;
            var write_id__ = document.getElementById("txt_write_id").value;
            var write_name__ = document.getElementById("txt_write_name").value;
            var write_nick__ = document.getElementById("txt_write_nick").value;

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
            if (BoardTEMP_SpanReplay[Board_Num] == 1) {
                if (document.getElementById('TEXT_COMT').value.trim() == '') {
                    alert('자동글방지을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_COMT').focus(); } catch (err) { }
                    return;
                }
                if (document.getElementById('TEXT_COMT').value.trim() != document.getElementById('TEXT_COMT_2').value) {
                    alert('자동글방지가 정확하지 않습니다.\n 다시입력하여 주십시요.');
                    try { document.getElementById('TEXT_COMT').value = ''; } catch (err) { }
                    try { document.getElementById('TEXT_COMT').focus(); } catch (err) { }
                    return;
                }
            }
            var e_num__ = document.getElementById("txt_e_num").value;
            document.getElementById("txt_Mcontent").value = "";
            document.getElementById("TEXT_COMT").value = "";
            document.getElementById("txt_pwd").value = "";
            if (write_id__ == "") {
                document.getElementById("txt_write_name").value = "";
                document.getElementById("txt_write_nick").value = "";
            }

            var ifr = document.getElementById("ifr00030_" + e1).contentWindow;
            ifr.document.getElementById("TXT_idx").value = RequestS.sn;
            ifr.document.getElementById("TXT_Mcontent").value = Mcontent__;
            ifr.document.getElementById("TXT_pwd").value = pwd__;
            ifr.document.getElementById("TXT_fk_idx").value = e_num__;
            ifr.document.getElementById("TXT_Docid").value = "EDIT";
            ifr.document.forms[0].submit();

            var MPMP = RENDOMS_PLUS();
            document.getElementById("SPAM_COMT_0").innerHTML = MPMP[1];
            document.getElementById("TEXT_COMT_2").value = MPMP[0];
        }
        else if (e == "EDIT2") {
            var passwd = "";
            var MK_Pass = false;
            try { passwd = document.getElementById("txt_passwdN").value; } catch (err) { MK_Pass = true; }



            var today = new Date();
            var mppp = today.getYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + Math.round(100 * Math.random());

            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "html",               //데이타타입 html, xml 등등
                url: "/common/board/boardPlus.aspx",     //경로
                data: "T=CEDIT" + "&T2=" + encodeURIComponent(RequestS.sn) + "&T3=" + T_NUM_ + "&T5=" + encodeURIComponent(passwd) + "&d=" + mppp + "&pdn=" + XncodeUR(PageBaseInfo.domain),
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                success: function (data) {



                    var obj_100001 = document.getElementById("span0001_" + e1);
                    var obj_100002 = document.getElementById("span0002_" + e1);
                    var obj_100003 = document.getElementById("span0003_" + e1);
                    var obj_100004 = document.getElementById("span0004_" + e1);
                    var obj_100005 = document.getElementById("span0005_" + e1);
                    var obj_100006 = document.getElementById("span0006_" + e1);
                    var obj_100007 = document.getElementById("span0007_" + e1);
                    var obj_100008 = document.getElementById("span0008_" + e1);
                    var obj_100009 = document.getElementById("span0009_" + e1);
                    var obj_100010 = document.getElementById("span0010_" + e1);
                    var obj_100011 = document.getElementById("span0011_" + e1);
                    var obj_100012 = document.getElementById("span0012_" + e1);
                    obj_100012.style.display = 'none';

                    obj_100012.innerHTML = data;
                    if (MK_Pass == true) {
                        if (document.getElementById("C_AREA_1").value == "1") {
                            Board.PASSWORD2('', e1, 1, '', 2);
                            document.getElementById("txt_Mcontent").value = document.getElementById("C_AREA_2").value;
                            document.getElementById("txt_Mcontent").focus();
                            document.getElementById("txt_write_name").value = document.getElementById("C_AREA_3").value;
                            document.getElementById("txt_write_nick").value = document.getElementById("C_AREA_4").value;
                            document.getElementById("txt_e_num").value = T_NUM_;

                            document.getElementById("txt_write_id").readOnly = true;
                            document.getElementById("txt_write_name").readOnly = true;
                            document.getElementById("txt_write_nick").readOnly = true;
                            document.getElementById("txt_pwd").value = passwd;
                            /*
                            document.getElementById("tr_replyUsed8").style.display = "none";
                            document.getElementById("tr_replyUsed9").style.display = "";
                            */
                            document.getElementById("tr_replyUsed8").style.visibility = "hidden";
                            document.getElementById("tr_replyUsed9").style.visibility = "visible";
                            return;
                        } else {
                            obj_100001.style.display = 'none';
                            obj_100002.style.display = 'none';
                            obj_100003.style.display = 'none';
                            obj_100004.style.display = 'none';
                            obj_100005.style.display = 'none';
                            obj_100006.style.display = 'none';
                            obj_100007.style.display = 'none';
                            obj_100008.style.display = 'none';
                            obj_100009.style.display = 'none';
                            obj_100010.style.display = 'none';
                            obj_100011.style.display = 'none';

                            obj_100006.innerHTML = '<br/><br/>'
                            + '<table width="100%" border="0" cellspacing="0" cellpadding="5">'
                            + '<tr><td   class="BoardHrColor2_TOP pad0"><div class="dheight_3"></div></td></tr>'
                            + '<tr><td class="pad0"><div class="dheight_2"></div></td></tr>'
                            + '<tr><td height="40" align="center" valign="bottom" bgcolor="#f7f7f7" class="bold">수정,삭제,비밀글읽기를 위해서는 글작성시 등록한 비밀번호(로그인 암호)를 입력하셔야합니다.</td></tr>'
                            + '<tr><td align="center" bgcolor="#f7f7f7" class="bold">비밀번호 : <input name="txt_passwdN" type="password" id="txt_passwdN" title="수정,삭제,비밀글읽기를 위해서는 글작성시 등록한 비밀번호(로그인 암호)를 입력하셔야합니다." onkeydown="if(event.keyCode ==13){Board.COMMENT(\'EDIT2\',\'' + e1 + '\',' + Board_Num + ',\'' + T_NUM_ + '\');return false;}" /> <font color="blue" id="MSG_DELSE" name="MSG_DELSE"></font></td></tr>'
                            + '<tr><td height="40" align="center" valign="top" bgcolor="#f7f7f7" class="colorbf0101">데이터를 삭제할 경우 복구가 불가능합니다. 신중히 확인하시고 삭제하세요.</td></tr>'
                            + '<tr><td class="pad0"><div class="dheight_2"></div></td></tr>'
                            + '<tr><td   class="BoardHrColor2_TOP pad0"><div class="dheight_3"></div></td></tr>'
                            + '<tr><td align="center">'
                            + '<img style="cursor:pointer;" onclick="Board.COMMENT(\'EDIT2\',\'' + e1 + '\',' + Board_Num + ',\'' + T_NUM_ + '\');" src="/img_bbs/bt_cause.gif" alt="확인" width="66" height="23" hspace="2" />'
                            + '<img style="cursor:pointer;" onclick="Board.PASSWORD2(\'\',\'' + e1 + '\',1,\'\',2)" src="/img_bbs/bt_cancel.gif" alt="취소" width="66" height="23" hspace="2" /></td></tr>'
                            + '</table> ';
                            obj_100006.style.display = '';
                            document.getElementById("txt_passwdN").focus();
                        }
                    } else {
                        if (document.getElementById("C_AREA_1").value == "1") {
                            Board.PASSWORD2('', e1, 1, '', 2);
                            document.getElementById("txt_Mcontent").value = document.getElementById("C_AREA_2").value;
                            document.getElementById("txt_Mcontent").focus();
                            document.getElementById("txt_write_name").value = document.getElementById("C_AREA_3").value;
                            document.getElementById("txt_write_nick").value = document.getElementById("C_AREA_4").value;
                            document.getElementById("txt_e_num").value = T_NUM_;

                            document.getElementById("txt_write_id").readOnly = true;
                            document.getElementById("txt_write_name").readOnly = true;
                            document.getElementById("txt_write_nick").readOnly = true;
                            document.getElementById("txt_pwd").value = passwd;
                            /*
                            document.getElementById("tr_replyUsed8").style.display = "none";
                            document.getElementById("tr_replyUsed9").style.display = "";
                            */
                            document.getElementById("tr_replyUsed8").style.visibility = "hidden";
                            document.getElementById("tr_replyUsed9").style.visibility = "visible";
                            return;
                        } else {
                            obj_100006.style.display = '';
                            document.getElementById("txt_passwdN").focus();
                            document.getElementById("MSG_DELSE").innerHTML = "비밀번호가 일치하지 않습니다.";
                        }
                    }
                },    //성공시 실행할 함수
                error: function () {
                    return false;
                }             //에러발생시 실행할 함수
            });



        }
    },
    LINK: function (e, e1, Board_Num, value) {
        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        if (value == "Write") {
            location.href = m_page + '?T=I&EX=NEW';
        }
        else if (value == "List") {
            location.href = m_page + '?T=L';
        }
        else if (value == "View") {
            location.href = m_page + '?T=C';
        }
        else if (value == "LOGIN") {
            if (confirm("회원 로그인 후 작성 가능합니다.\n로그인하시겠습니까?")) {
                Next_Url_LD('MemLogin');
                location.href = Next_Url + '?preurl=' + location.href.replaceAll('?', '^');
            }
        }
        else if (value == "LOGINOUT") {
            alert("작성권한이 없습니다.");
        }
    },
    INPUT: function (e, e1, Board_Num, b_sms, nphones) /*보드 입력폼*/
    {
        var obj_100001 = document.getElementById("span0001_" + e1);
        var obj_100002 = document.getElementById("span0002_" + e1);
        var obj_100003 = document.getElementById("span0003_" + e1);
        var obj_100004 = document.getElementById("span0004_" + e1);
        var obj_100005 = document.getElementById("span0005_" + e1);
        var obj_100006 = document.getElementById("span0006_" + e1);
        var obj_100007 = document.getElementById("span0007_" + e1);
        var obj_100008 = document.getElementById("span0008_" + e1);
        var obj_100009 = document.getElementById("span0009_" + e1);
        var obj_100010 = document.getElementById("span0010_" + e1);
        var obj_100011 = document.getElementById("span0011_" + e1);


        var CATE_LIST = '';
        var tr_CateItem = "";
        if (BoardTEMP_CateUsed[Board_Num] == 1) {
            var temp = BoardTEMP_CateItem[Board_Num].split('↑');
            var temp__0002 = "";
            for (var N1 = 0; N1 < temp.length; N1++) {
                if (temp[N1] == "") { continue; }

                var temp_OP_ = temp[N1].split('↓');
                temp__0002 += "<option value=\"" + temp_OP_[0] + "\" value2=\"" + temp[N1] + "\" help=\"" + temp[N1] + "\" title=\"" + temp[N1] + "\">" + temp_OP_[0] + "</option>";
            }

            if (BoardTEMP_CateViewType[Board_Num] == 0 || BoardTEMP_CateViewType[Board_Num] == 1 || BoardTEMP_CateViewType[Board_Num] == 2) {
                CATE_LIST = "<select title=\"분류1차\" name=\"Board_CateItem\" id=\"Board_CateItem\" onchange=\"cate_IME(" + BoardTEMP_CateItem3Used[Board_Num] + ")\" ><option value=\"\" value2=\"\" help=\"\">선택</option>" + temp__0002 + "</select>"
                + "<select title=\"분류2차\" name=\"Board_CateItem2\" style=\"display:none;\" id=\"Board_CateItem2\" ><option value=\"\">선택</option></select>";
            }
        }
        if (CATE_LIST == "") {
            CATE_LIST = "<select title=\"분류\" name=\"Board_CateItem\" id=\"Board_CateItem\" onchange=\"cate_IME(" + BoardTEMP_CateItem3Used[Board_Num] + ")\" ><option value=\"\" value2=\"\" help=\"\">선택</option></select>"
                + "<select title=\"분류\" name=\"Board_CateItem2\" style=\"display:none;\" id=\"Board_CateItem2\" ><option value=\"\">선택</option></select>";
            tr_CateItem = " style=\"display:none;\"; ";
        }
        var MPMP = RENDOMS_PLUS();
        var m_HTML = ''
+ '<div class="divTable" style="width:100%;"><div class="divRow"><div class="divColumn" style="width:100%;text-align:right;height:15px;">(*표시는 필수 입력사항입니다.)</div></div></div>'

+ '<table width="100%" border="0" cellspacing="0" cellpadding="4"  summary="' + BoardTEMP_title[Board_Num] + ' 등록 및 수정 : 글내용을 작성하거나 수정하는 페이지 입니다." >'
+ '<caption class="dcaption" >글내용을 작성하거나 수정하는 페이지 입니다.</caption>'
+ '<thead class="dcaption" ><th scope="col">컬럼명</th><th scope="col">등록 내용</th></thead><tbody>'
+ '<tr><td colspan="2" bgcolor="#818181" class="pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr><td colspan="2" bgcolor="#f0f0f0" class="pad0"><div class="dheight_2"></div></td></tr>'
+ '<tr id="tr_CateItem1" name="tr_CateItem1" ' + tr_CateItem + ' ><td width="20%" align="left" class="padL15 bbs13"><label for="Board_CateItem">분류*</label><label for="Board_CateItem2" class="dcaption">2차 분류</label></td><td align="left" class="padL15">' + CATE_LIST + ' <span class="helptxt">(등록하고자 하는 해당 분류를 선택해 주세요)</span></td></tr>'
+ '<tr id="tr_CateItem2" name="tr_CateItem2" ' + tr_CateItem + ' ><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr><td align="left" class="padL15 bbs13"><label for="txt_write_name">작성자*</label></td><td align="left" class="padL15">'
+ '<input name="txt_write_id" type="text" id="txt_write_id" readOnly="true" style="display:none;" title="작성자 아이디"/><label class="dcaption" for="txt_write_id">작성자 아이디</label>'
+ '<input name="txt_write_name" type="text" id="txt_write_name" readOnly="true"  maxlength="15" onblur="CheckHangulN(this);" title="작성자 이름"  />'
+ '<input name="txt_write_nick" type="text" id="txt_write_nick" readOnly="true" style="display:none;" title="작성자 닉네임" /><label class="dcaption" for="txt_write_nick">작성자 닉네임</label>'
+ '<input name="txt_write_ip" type="text" id="txt_write_ip" readOnly="true" style="display:none;" title="작성자 정보" /><label class="dcaption" for="txt_write_ip">작성자 닉네임</label>'
+ '<span class="helptxt"> (예:홍길동)</span></td></tr>'
+ '<tr><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr><td align="left" class="padL15 bbs13"><label for="txt_pwd">비밀번호*</label></td><td align="left" class="padL15">'
+ '<input title="비밀번호" type="password" name="txt_pwd" id="txt_pwd"  maxlength="15" onkeyup="check_eng(this);CheckStrLen(this,15);" onblur="CheckStrLen(this,15);"  onkeydown="if(event.keyCode ==13){return false}"  maxlength="4"  />'
+ '<input type="password" name="txt_pwd2" id="txt_pwd2" style="display:none;" /><label class="dcaption" for="txt_pwd2">등록 및 수정에 사용되는 부분입니다.</label>'
+ '<span id="span_pwd"></span><span class="helptxt"> (수정 및 삭제시 필요합니다)</span></td></tr>\<tr><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_ContactAddress1" style="display:none;"><td align="left" class="padL15 bbs13" ><label for="txt_phone1">연락처</label>'
        //+ '<label class="dcaption" for="txt_phone2">연락처 중간 4자리 입력하여 주십시요.</label>'
        //+ '<label class="dcaption" for="txt_phone3">연락처 뒤 4자리 입력하여 주십시요.</label>'
+ '</td><td align="left" class="padL15">'
+ '<input title="연락처 앞 자리 입력하여 주십시요." name="txt_phone1" id="txt_phone1" type="text" size="4" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4"  /> - '
+ '<input title="연락처 중간 자리 입력하여 주십시요." name="txt_phone2" id="txt_phone2" type="text" size="4" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4"  /> - '
+ '<input title="연락처 뒤 자리 입력하여 주십시요." name="txt_phone3" id="txt_phone3" type="text" size="4" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4"  /> '
+ '<span class="helptxt"> (예:02-1234-1234)</span></td></tr>'
+ '<tr id="tr_ContactAddress2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'

+ '<tr style="display:' + (b_sms == 1 & e != 'REPLY' ? "" : "none") + ';"><td align="left" class="padL15 bbs13" ><label for="txt_Nphone1">핸드폰번호*</label>'
        //+ '<label class="dcaption" for="txt_Nphone2">핸드폰번호 중간 4자리 입력하여 주십시요.</label>'
        //+ '<label class="dcaption" for="txt_Nphone3">핸드폰번호 뒤 4자리 입력하여 주십시요.</label>'
+ '</td>'
+ '<td align="left" class="padL15">'
+ '<select title="핸드폰번호 앞 자리 입력하여 주십시요." name="txt_Nphone1" id="txt_Nphone1">'
+ '<option value="010">010</option>'
+ '<option value="011">011</option>'
+ '<option value="016">016</option>'
+ '<option value="017">017</option>'
+ '<option value="018">018</option>'
+ '<option value="019">019</option>'
+ '</select>'
+ ' - <input title="핸드폰번호 중간 자리 입력하여 주십시요." name="txt_Nphone2" id="txt_Nphone2" type="text" size="4" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4"  />'
+ ' - <input title="핸드폰번호 뒤 자리 입력하여 주십시요." name="txt_Nphone3" id="txt_Nphone3" type="text" size="4" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4"  />'
+ '<input name="txt_Nphone4" id="txt_Nphone4" type="hidden" value="' + (e == 'REPLY' ? 0 : b_sms) + '" title="hidden:핸드폰번호저장에 사용되는 것입니다."  />'
+ '<span class="helptxt"> 답변시 메세지로 안내되므로 정확히 작성해주십시오.</span></td></tr>'
+ '<tr style="display:' + (b_sms == 1 & e != 'REPLY' ? "" : "none") + ';"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr style="display:' + (b_sms == 1 & e == 'REPLY' & nphones != "" ? "" : "none") + ';"><td align="left" class="padL15 bbs13" >안내발신번호*</td>'
+ '<td align="left" class="helptxt">'
+ nphones + ' (문의자에게 답변완료 멘트가 발송됩니다.)'
+ '</td></tr>'
+ '<tr style="display:' + (b_sms == 1 & e == 'REPLY' & nphones != "" ? "" : "none") + ';"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'



+ '<tr id="tr_EmailWrite1" style="display:none;"><td align="left" class="padL15 bbs13"><label for="TEXT_email_1">이메일</label>'
+ '<label class="dcaption" for="TEXT_email_2">이메일@에 뒤 자리(직접입력시) 입력하여 주십시요.</label>'
+ '<label class="dcaption" for="DDL_email">이메일@에 뒤 자리 선택하여 주십시요.</label>'
+ '</td><td align="left" class="padL15"> '
+ '<input title="이메일 @에 앞 자리 입력하여 주십시요." maxlength="30" onkeyup="CheckStrLen(this,30);" onblur="CheckStrLen(this,30);" onkeydown="if(event.keyCode ==13){return false}"  id="TEXT_email_1" name="TEXT_email_1"  type="text" />  @ '
+ '<input title="이메일 @에 뒤 자리(직접입력시) 입력하여 주십시요." maxlength="50" onkeyup="CheckStrLen(this,50);" onblur="CheckStrLen(this,50);" onkeydown="if(event.keyCode ==13){return false}"  id="TEXT_email_2" name="TEXT_email_2" style="display:none;" type="text" /> '
+ '<select title="이메일 @에 뒤 자리 선택하여 주십시요." name="DDL_email" id="DDL_email" class="input" onchange="if(this.value==\'etc\'){document.getElementById(\'TEXT_email_2\').style.display=\'\';} else{document.getElementById(\'TEXT_email_2\').style.display=\'none\';}">'
+ '<option value="">선택하세요</option><option value="etc">직접입력</option><option value="naver.com">naver.com</option><option value="chol.com">chol.com</option><option value="dreamwiz.com">dreamwiz.com</option><option value="empal.com">empal.com</option><option value="freechal.com">freechal.com</option><option value="gmail.com">gmail.com</option><option value="hanafos.com">hanafos.com</option><option value="hanmail.net">hanmail.net</option><option value="hanmir.com">hanmir.com</option><option value="hitel.net">hitel.net</option><option value="hotmail.com">hotmail.com</option><option value="korea.com">korea.com</option><option value="lycos.co.kr">lycos.co.kr</option><option value="nate.com">nate.com</option><option value="netian.com">netian.com</option><option value="paran.com">paran.com</option><option value="yahoo.com">yahoo.com</option><option value="yahoo.co.kr">yahoo.co.kr</option></select></td></tr><tr><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr><td align="left" class="padL15 bbs13"><label for="txt_title">제목*</label></td><td align="left" class="padL15">'
+ '<input title="글제목" name="txt_title" id="txt_title" type="text" style="width:320px;ime-mode:active;"  maxlength="100" '
+ 'onkeyup="CheckStrLen(this,200);" onblur="CheckStrLen(this,200);" '
+ 'onkeydown="if(event.keyCode ==13){return false}"  />'

+ '<span id="span_vacant" style="display:none;"><input id="chk_vacant" name="chk_vacant" type="checkbox" class="input_no" value="1" /><label for="chk_vacant">공지글</label>'
+ '<label class="dcaption" for="TXT_vacantn">공지글 설정 일자</label><input title="공지글 설정 일자" id="TXT_vacantn" name="TXT_vacantn" size="10" type="date" maxlength="10" onclick="callCalPop(\'TXT_vacantn\', \'yyyy-mm-dd\');return false;"  />'
+ '<a nohref onclick="callCalPop(\'TXT_vacantn\', \'yyyy-mm-dd\');return false;" title="달력 세창"><img align="absMiddle" alt="달력 세창" src="/_js/calener/ico_calendar.gif"></a>&nbsp;'
+ '</span>'


+ '<span id="span_isLock" style="display:none;"><input id="chk_isLock" name="chk_isLock" type="checkbox" class="input_no" value="1" /><label for="chk_isLock">비밀글</label></span>'
+ '</td></tr>'
+ '<tr id="tr_EmailWrite2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_TitleWrite1"><td align="left" class="padL15 bbs13"><label for="ddl_title_effect1" >제목효과</label>'
+ '<label class="dcaption" for="ddl_title_effect2" >제목 글자크기</label>'
+ '<label class="dcaption" for="ddl_title_effect3" >제목 글자굵기</label>'
+ '</td> <td align="left" class="padL15"> '
+ '<select title="제목 글자색 효과을 선택하여 주십시요." name="ddl_title_effect1" id="ddl_title_effect1"> <option value="">제목 글자색</option> <option value="#000000" style="color:#000000" >검정</option> <option value="#7F7F7F" style="color:#7F7F7F" >회색</option> <option value="#FFA300" style="color:#FFA300" >노랑</option> <option value="#FF600F" style="color:#FF600F" >주황</option> <option value="#ff0000" style="color:#ff0000" >빨강</option> <option value="#A03F00" style="color:#A03F00" >갈색</option> <option value="#FF08A0" style="color:#FF08A0" >분홍</option> <option value="#5000AF" style="color:#5000AF" >보라</option> <option value="#B0008F" style="color:#B0008F" >자주</option> <option value="#7FC700" style="color:#7FC700" >연두</option> <option value="#009FAF" style="color:#009FAF" >청녹</option> <option value="#0000ff" style="color:#0000ff" >파랑</option> </select> '
+ '<select title="제목 글자크기 효과을 선택하여 주십시요." name="ddl_title_effect2" id="ddl_title_effect2"> <option value="">제목 글자크기</option> <option value="8px" >아주작게 [8px]</option> <option value="10px" >작게 [10px]</option> <option value="12px" >보통 [12px]</option> <option value="18px" >크게 [18px]</option> <option value="24px" >아주 크게 [24px]</option> </select> '
+ '<select title="제목 글자굵기 효과을 선택하여 주십시요." name="ddl_title_effect3" id="ddl_title_effect3"> <option value="">제목 글자굵기</option> <option value="default" >보통</option> <option value="bold" >굵게</option> </select> </td> </tr>'
+ '<tr id="tr_TitleWrite2"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'

+ '<tr id="tr_dadate1" style="display:none;"><td align="left" class="padL15 bbs13"><label for="txt_dadate1">게시글관리</label></td><td align="left" class="padL15"><label for="txt_dadate1">등록일</label>'
+ '<label for="txt_dadate2">등록일 일자</label>'
+ '<input title="등록일 날자" name="txt_dadate1" type="text" value="" size="8" id="txt_dadate1" />'
+ '<input title="등록일 일자" name="txt_dadate2" type="text" value="" size="5" id="txt_dadate2" />'
+ ' <label for="txt_readnum">조회수</label>'
+ '<input title="조회수" name="txt_readnum" type="text" value="0" id="txt_readnum" style="width:35px;" />'
+ '<span id="RadioButtonList1" class="input_no"  >'
+ '<br/>'
+ '<input id="ddl_TableBoard1_0" type="radio" name="ddl_TableBoard2" value="0" checked="checked" />'
+ '<label for="ddl_TableBoard1_0">게시글이동</label>'
+ '<input id="ddl_TableBoard1_1" type="radio" name="ddl_TableBoard2" value="1" />'
+ '<label for="ddl_TableBoard1_1">게시글복사</label></span>'
+ '<label class="dcaption" for="ddl_SiteBoard">게시글복사 사이트 선택</label>'
+ '<select title="게시글복사" name="ddl_SiteBoard" id="ddl_SiteBoard" onChange="Board.GoSite(\'CHANGE\',\'' + e1 + '\',' + Board_Num + ',\'ddl_SiteBoard\',\'ddl_TableBoard\');" ><option value="">기본사이트</option></select>'
+ '<label class="dcaption" for="ddl_TableBoard">게시글복사 보드 선택</label>'
+ '<select title="게시글복사" name="ddl_TableBoard" id="ddl_TableBoard"><option value="">선택</option></select>'
+ '<span style="width:10px;position:absolute;"><div id="DIV_TableBoard01" name="DIV_TableBoard01"></div>'
+ '<div id="DIV_TableBoard02" name="DIV_TableBoard02"></div></span>'
+ '<input type="hidden" id="HID_TableBoard03" name="HID_TableBoard03" title="hidden:글내용 이전 및 복사시에 사용되는 것입니다.">'
+ '</td></tr>'
+ '<tr id="tr_dadate2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'

+ '<tr id="tr_PlusField1_1" name="tr_PlusField1_1" style="display:none;"><td align="left" class="padL15 bbs13" ><label id="td_PlusField1_1" name="td_PlusField1_1" ></label></td><td align="left" class="padL15"  id="td_PlusField1_2" name="td_PlusField1_2" ></td></tr><tr id="tr_PlusField1_2" name="tr_PlusField1_2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_PlusField2_1" name="tr_PlusField2_1" style="display:none;"><td align="left" class="padL15 bbs13" ><label id="td_PlusField2_1" name="td_PlusField2_1" ></label></td><td align="left" class="padL15"  id="td_PlusField2_2" name="td_PlusField2_2" ></td></tr><tr id="tr_PlusField2_2" name="tr_PlusField2_2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_PlusField3_1" name="tr_PlusField3_1" style="display:none;"><td align="left" class="padL15 bbs13" ><label id="td_PlusField3_1" name="td_PlusField3_1" ></label></td><td align="left" class="padL15"  id="td_PlusField3_2" name="td_PlusField3_2" ></td></tr><tr id="tr_PlusField3_2" name="tr_PlusField3_2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_PlusField4_1" name="tr_PlusField4_1" style="display:none;"><td align="left" class="padL15 bbs13" ><label id="td_PlusField4_1" name="td_PlusField4_1" ></label></td><td align="left" class="padL15"  id="td_PlusField4_2" name="td_PlusField4_2" ></td></tr><tr id="tr_PlusField4_2" name="tr_PlusField4_2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_PlusField5_1" name="tr_PlusField5_1" style="display:none;"><td align="left" class="padL15 bbs13" ><label id="td_PlusField5_1" name="td_PlusField5_1" ></label></td><td align="left" class="padL15"  id="td_PlusField5_2" name="td_PlusField5_2" ></td></tr><tr id="tr_PlusField5_2" name="tr_PlusField5_2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_PlusField6_1" name="tr_PlusField6_1" style="display:none;"><td align="left" class="padL15 bbs13" ><label id="td_PlusField6_1" name="td_PlusField6_1" ></label></td><td align="left" class="padL15"  id="td_PlusField6_2" name="td_PlusField6_2" ></td></tr><tr id="tr_PlusField6_2" name="tr_PlusField6_2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_PlusField7_1" name="tr_PlusField7_1" style="display:none;"><td align="left" class="padL15 bbs13" ><label id="td_PlusField7_1" name="td_PlusField7_1" ></label></td><td align="left" class="padL15"  id="td_PlusField7_2" name="td_PlusField7_2" ></td></tr><tr id="tr_PlusField7_2" name="tr_PlusField7_2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_PlusField8_1" name="tr_PlusField8_1" style="display:none;"><td align="left" class="padL15 bbs13" ><label id="td_PlusField8_1" name="td_PlusField8_1" ></label></td><td align="left" class="padL15"  id="td_PlusField8_2" name="td_PlusField8_2" ></td></tr><tr id="tr_PlusField8_2" name="tr_PlusField8_2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_PlusField9_1" name="tr_PlusField9_1" style="display:none;"><td align="left" class="padL15 bbs13" ><label id="td_PlusField9_1" name="td_PlusField9_1" ></label></td><td align="left" class="padL15"  id="td_PlusField9_2" name="td_PlusField9_2" ></td></tr><tr id="tr_PlusField9_2" name="tr_PlusField9_2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_PlusField10_1" name="tr_PlusField10_1" style="display:none;"><td align="left" class="padL15 bbs13" id="td_PlusField10_1" name="td_PlusField10_1" ></td><td align="left" class="padL15"  id="td_PlusField10_2" name="td_PlusField10_2" ></td></tr><tr id="tr_PlusField10_2" name="tr_PlusField10_2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr><td align="left" class="pad0" colspan="2">'
+ '<p class="focusMessage"><a href="#." onclick="return false;">글을 편집할 수 있는 에디터 영역입니다. ESC키를 누르시면 에디터를 빠져 나오실 수 있습니다.</a></p>'
+ '<label class="dcaption" for="txt_Mcontent">글본문 내용</label>'
+ '<textarea title="글본문 내용" id="txt_Mcontent" name="txt_Mcontent" rows="20"  style="width:100%;height:320px;"  ></textarea></td></tr>'
+ '<tr><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_FileUpUsed1" style="display:none;"><td align="left" colspan="2" id="iframe_N"></td></tr>'
+ '<tr id="tr_FileUpUsed2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '<tr id="tr_SpamUsed1" style="display:none;"><td align="left" class="padL15 bbs13"><label for="TEXT_COMT">자동글방지*</label></td><td align="left" class="padL15">'

+ '<span id="SPAM_COMT_0" name="SPAM_COMT_0" >' + MPMP[1] + '</span>'
+ '<input maxlength="4" onkeydown="if(event.keyCode ==13){return false}" size="10" '
+ ' id="TEXT_COMT" name="TEXT_COMT" type="text" value2="' + MPMP[0] + '" title="자동글방지 (' + MPMP[0] + ')을 입력하여 주십시요."   />'
+ '<input maxlength="4" onkeydown="if(event.keyCode ==13){return false}" size="10" '
+ ' id="TEXT_COMT_2" name="TEXT_COMT_2" type="hidden" value="' + MPMP[0] + '" title="hidden:자동글방지에 사용되는 것입니다."   />'

+ '<span class="helptxt"> * 대소문자를 구분하여 <font color="#ff0000">빨간글자만</font> 순서대로 입력하세요.</span></td></tr>'
+ '<tr id="tr_SpamUsed2" style="display:none;"><td colspan="2" bgcolor="#d9d9d9" class="BoardHrColor_TOP pad0"><div class="dheight_1"></div></td></tr>'
+ '</table></td></tr></tbody></table>';
        var m_HTML2 = ''
+ '<div class="divTable" style="width:100%;" ><div class="divRow"><div class="divColumn" style="text-align:center;width:100%;height:20px;">'
+ '<input name="txt_idx" id="txt_idx" type="hidden"  title="등록및 수정에 사용됩니다."   />'
+ '<input name="txt_repidx" id="txt_repidx" type="hidden" title="등록및 수정에 사용됩니다."/>'
+ '<input name="txt_Docid" id="txt_Docid" type="hidden" title="등록및 수정에 사용됩니다."/>'
+ '<input name="txt_hid_submit" id="txt_hid_submit" type="hidden" title="등록및 수정에 사용됩니다."/>'
+ '<input name="txt_hid_type"   id="txt_hid_type"   type="hidden" title="등록및 수정에 사용됩니다."/>'

+ (e == 'NEW' ? '<a href="" style="display:none;" id="BTNN_01" onclick="Board.INPUT_SUBMIT(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'INPUT\');return false;" ><img src="' + TEMPLATE.LOAD(e1, "SaveBTN") + '" alt="저장" hspace="2" /></a>' : '')
+ (e == 'EDITE' ? '<a href="" style="display:none;" id="BTNN_02" onclick="Board.UPDATE_SUBMIT(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'INPUT\');return false;" ><img src="' + TEMPLATE.LOAD(e1, "SaveBTN") + '" alt="저장" hspace="2" /></a>' : '')
+ (e == 'REPLY' ? '<a href="" style="display:none;" id="BTNN_03" onclick="Board.REPLY_SUBMIT(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'INPUT\');return false;" ><img src="' + TEMPLATE.LOAD(e1, "SaveBTN") + '" alt="저장" hspace="2" /></a>' : '')
+ '<a href="" style="display:none;" id="BTNN_04" onclick="history.back();return false;"  title="취소" ><img src="' + TEMPLATE.LOAD(e1, "CancelBTN") + '" alt="취소" hspace="2" /></a>'
+ '</div></div></div>';
        obj_100001.innerHTML = m_HTML;
        obj_100005.innerHTML = m_HTML2;


        JIK_EVENNTS(Board_Num);

        if (BoardTEMP_SpamUsed[Board_Num] == 1) {
            document.getElementById("tr_SpamUsed1").style.display = "";
            document.getElementById("tr_SpamUsed2").style.display = "";
        }
        if (BoardTEMP_FileUpUsed[Board_Num] == 1) {
            document.getElementById("tr_FileUpUsed1").style.display = "";
            document.getElementById("tr_FileUpUsed2").style.display = "";
        }
        if (BoardTEMP_ContactAddress[Board_Num] == 1) {
            document.getElementById("tr_ContactAddress1").style.display = "";
            document.getElementById("tr_ContactAddress2").style.display = "";
            if (BoardTEMP_ContactAddress2[Board_Num] == 1) {
                document.getElementById("tr_ContactAddress1").getElementsByTagName('TD')[0].innerHTML += "*";
            }
        }
        if (BoardTEMP_EmailWrite[Board_Num] == 1) {
            document.getElementById("tr_EmailWrite1").style.display = "";
            document.getElementById("tr_EmailWrite2").style.display = "";
            if (BoardTEMP_EmailWrite2[Board_Num] == 1) {
                document.getElementById("tr_EmailWrite1").getElementsByTagName('TD')[0].innerHTML += "*";
            }
        }

        if (
            BoardTEMP_TitleWrite[Board_Num] == 0
            && BoardTEMP_TitleWrite2[Board_Num] == 0
            && BoardTEMP_TitleWrite3[Board_Num] == 0) {
            document.getElementById("tr_TitleWrite1").style.display = "none";
            document.getElementById("tr_TitleWrite2").style.display = "none";
        }
        else {
            if (BoardTEMP_TitleWrite[Board_Num] == 1)
            { document.getElementById("ddl_title_effect1").style.display = ""; }
            else { document.getElementById("ddl_title_effect1").style.display = "none"; }
            if (BoardTEMP_TitleWrite2[Board_Num] == 1)
            { document.getElementById("ddl_title_effect2").style.display = ""; }
            else { document.getElementById("ddl_title_effect2").style.display = "none"; }
            if (BoardTEMP_TitleWrite3[Board_Num] == 1)
            { document.getElementById("ddl_title_effect3").style.display = ""; }
            else { document.getElementById("ddl_title_effect3").style.display = "none"; }
        }
        if (BoardTEMP_Editer[Board_Num] == 1) {
            jQuery(document).ready(function () {
                try {
                    oFCKeditor = new FCKeditor('txt_Mcontent');
                    oFCKeditor.Height = 370;
                    oFCKeditor.ReplaceTextarea();
                    jQuery(".focusMessage").click(function () {
                        setTimeout(function () { oEditors[0].exec("FOCUS", []); }, 50);
                    });
                    jQuery(".focusMessage a").keydown(function (e) {
                        if (e.shiftKey && e.keyCode == 9) { }
                        else if (e.keyCode == 9) {
                            jQuery(this).trigger("click");
                        }
                    });
                    setTimeout(function () { FEX.LOAD(); }, 1000);
                } catch (err) { }
            });
        }

        var ifr = document.getElementById("ifr00030_" + e1).contentWindow;

        var root1 = ifr.document.getElementById("BoardAuthority0").value;
        var root2 = ifr.document.getElementById("BoardAuthority1").value;
        var root3 = ifr.document.getElementById("BoardAuthority2").value;
        var root4 = ifr.document.getElementById("BoardAuthority3").value;
        var root5 = ifr.document.getElementById("BoardAuthority4").value;
        var root6 = ifr.document.getElementById("BoardAuthority5").value;
        var root7 = ifr.document.getElementById("BoardAuthority6").value;
        var root8 = ifr.document.getElementById("BoardAuthority7").value;
        var root9 = ifr.document.getElementById("BoardAuthority8").value;
        var root10 = ifr.document.getElementById("BoardAuthority9").value;
        var root11 = ifr.document.getElementById("BoardAuthority10").value;
        var root12 = ifr.document.getElementById("BoardAuthority11").value;
        var root13 = ifr.document.getElementById("BoardAuthority12").value;
        var root14 = ifr.document.getElementById("BoardAuthority13").value;

        if (e == 'NEW') /*새글 작성*/
        {
            document.getElementById("txt_hid_type").value = "NEW";

            document.getElementById("txt_Docid").value = root11;
            /*글쓰기*/
            if (root13 != "") {

                if (BoardTEMP_CopywriterUsed3[Board_Num] == 1) {
                    var phone__ = root13;
                    var phone___ = phone__.split('-'); if (phone___.length > 2) { document.getElementById("txt_phone1").value = phone___[0]; document.getElementById("txt_phone2").value = phone___[1]; document.getElementById("txt_phone3").value = phone___[2]; }
                }
            }
            if (root12 != "") {

                if (BoardTEMP_CopywriterUsed3[Board_Num] == 1) {
                    var email__ = root12;
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
            }
            if (root1 != "") {
                document.getElementById("txt_pwd").style.display = "none";
                document.getElementById("span_pwd").innerHTML = "로그인암호가 자동적용됩니다. ";
            }
            else {
                if (root4 == "-1") {
                    document.getElementById("txt_write_name").readOnly = false;
                }
            }

            if (root1 == "-1") {
                document.getElementById("txt_write_name").readOnly = false;
            }
            else {
                if (BoardTEMP_CopywriterUsed[Board_Num] == 1) {
                    document.getElementById("txt_write_name").readOnly = false;
                }
            }

            if (root14 == '1') {
                document.getElementById("span_vacant").style.display = "";
            }
            if (BoardTEMP_SecretUsed[Board_Num] == 1) {
                document.getElementById("span_isLock").style.display = "";
                if (BoardTEMP_SecretUsed2[Board_Num] == 1) {
                    document.getElementById("chk_isLock").checked = true;
                    document.getElementById("span_isLock").disabled = true;
                }
            }

            if (BoardTEMP_TypeView[Board_Num] == "gallery" || BoardTEMP_TypeView[Board_Num] == "photo" || BoardTEMP_TypeView[Board_Num] == "gallery" || BoardTEMP_TypeView[Board_Num] == "blog" || BoardTEMP_TypeView[Board_Num] == "event") {
                document.getElementById("span_vacant").style.display = "none";
                document.getElementById("span_isLock").style.display = "none";
            }

            if (BoardTEMP_Docid[Board_Num] != "") { DATEOP_Docid(BoardTEMP_Docid[Board_Num], root1, ""); }

            document.getElementById("txt_write_id").value = root1;
            if (BoardTEMP_CopywriterUsed3[Board_Num] == 1) {
                document.getElementById("txt_write_name").value = root2;
                document.getElementById("txt_write_nick").value = root3;
            }
            /*
            if (root1 == "-1") {
            document.getElementById("txt_write_name").value = v_board_Admin_txt;
            document.getElementById("txt_write_nick").value = v_board_Admin_txt;
            }
            */


            if (root7 == "1") {
                document.getElementById("BTNN_01").style.display = "";
                document.getElementById("BTNN_04").style.display = "";
            }
            else { document.getElementById("BTNN_04").style.display = ""; }


            document.getElementById("iframe_N").innerHTML = '<iframe title="첩부화일관련" id="ifrFileUpload" name="ifrFileUpload" src="/COMMON/NFUpload/nfupload_ifr.aspx?Docid=' + document.getElementById('txt_Docid').value + "&Num=" + Board_Num + '" frameborder=0 marginwidth=0 width=100% height=115 scrolling=no></iframe>';
        }
        else if (e == 'REPLY') {
            document.getElementById("txt_hid_type").value = "REPLY";


            document.getElementById("txt_Docid").value = root11;
            if (root13 != "") {
                if (BoardTEMP_CopywriterUsed3[Board_Num] == 1) {
                    var phone__ = root13;
                    var phone___ = phone__.split('-'); if (phone___.length > 2) { document.getElementById("txt_phone1").value = phone___[0]; document.getElementById("txt_phone2").value = phone___[1]; document.getElementById("txt_phone3").value = phone___[2]; }
                }
            }

            try { var Nphone___ = nphones.split('-'); if (Nphone___.length > 2) { Teldd(document.getElementById("txt_Nphone1"), Nphone___[0]); document.getElementById("txt_Nphone2").value = Nphone___[1]; document.getElementById("txt_Nphone3").value = Nphone___[2]; } } catch (err) { }


            if (root12 != "") {
                if (BoardTEMP_CopywriterUsed3[Board_Num] == 1) {
                    var email__ = root12;
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
            }

            document.getElementById("txt_Docid").value = root11;
            document.getElementById("txt_write_id").value = root1;

            if (BoardTEMP_CopywriterUsed3[Board_Num] == 1) {
                document.getElementById("txt_write_name").value = root2;
                document.getElementById("txt_write_nick").value = root3;
            }


            if (root1 != "") {
                document.getElementById("txt_pwd").style.display = "none";
                document.getElementById("span_pwd").innerHTML = "로그인암호가 자동적용됩니다. ";
            }
            else {
                if (root4 == "-1") {
                    document.getElementById("txt_write_name").readOnly = false;
                }
            }
            if (root1 == "-1") {
                document.getElementById("txt_write_name").readOnly = false;
            }
            else {
                if (BoardTEMP_CopywriterUsed[Board_Num] == 1) {
                    document.getElementById("txt_write_name").readOnly = false;
                }
            }

            if (root14 == '1') {
                document.getElementById("span_vacant").style.display = "";
            }
            if (BoardTEMP_SecretUsed[Board_Num] == 1) {
                document.getElementById("span_isLock").style.display = "";
                if (BoardTEMP_SecretUsed2[Board_Num] == 1) {
                    document.getElementById("chk_isLock").checked = true;
                    document.getElementById("span_isLock").disabled = true;
                }
                else {
                    try {
                        var secret__ = "0"; secret__ = ifr.document.getElementById("TXT_secret").value;
                        if (secret__ == "1") { document.getElementById("chk_isLock").checked = true; }
                    } catch (err) { }
                }
            }
            if (BoardTEMP_TypeView[Board_Num] == "gallery" || BoardTEMP_TypeView[Board_Num] == "photo" || BoardTEMP_TypeView[Board_Num] == "gallery" || BoardTEMP_TypeView[Board_Num] == "blog" || BoardTEMP_TypeView[Board_Num] == "event") {
                document.getElementById("span_vacant").style.display = "none";
                document.getElementById("span_isLock").style.display = "none";
            }
            if (BoardTEMP_Docid[Board_Num] != "") { DATEOP_Docid(BoardTEMP_Docid[Board_Num], root1, ""); }

            if (root9 == "1") {
                document.getElementById("BTNN_03").style.display = "";
                document.getElementById("BTNN_04").style.display = "";
            }
            else
            { document.getElementById("BTNN_04").style.display = ""; }



            document.getElementById("txt_repidx").value = RequestS.sn;
            document.getElementById("iframe_N").innerHTML = '<iframe title=\"보드 권한 관련\" id="ifrFileUpload" name="ifrFileUpload" \
            src="/COMMON/NFUpload/nfupload_ifr.aspx?Docid=' + document.getElementById('txt_Docid').value + "&Num=" + Board_Num + '" \
            frameborder=0 marginwidth=0 width=100% height=115 scrolling=no></iframe>';

            var root1xx = ifr.document.getElementById("TXT_title").value;
            var root2xx = ifr.document.getElementById("TXT_Mcontent").value;
            var root3xx = ifr.document.getElementById("TXT_PlusField1").value;
            var CateItem__ = ifr.document.getElementById("TXT_CateItem").value;
            var CateItem2__ = ifr.document.getElementById("TXT_CateItem2").value;

            document.getElementById("txt_title").value = root1xx;
            if (BoardTEMP_Editer[Board_Num] == 1) {
                document.getElementById("txt_Mcontent").value = root2xx;
            }
            else
            { document.getElementById("txt_Mcontent").value = "\r\n\r\n\r\n\r\n" + root3xx.replaceAll2("<br/>", ""); }

            try { if (CateItem__ != "") { Teldd(document.getElementById("Board_CateItem"), CateItem__); }; } catch (err) { }
            try { cate_IME(BoardTEMP_CateItem3Used[Board_Num]); } catch (err) { }
            try { if (CateItem2__ != "") { Teldd(document.getElementById("Board_CateItem2"), CateItem2__); }; } catch (err) { }
        }
        else if (e == 'EDITE') /*수정*/
        {
            document.getElementById("txt_hid_type").value = "EDITE";

            document.getElementById("BTNN_02").style.display = "";
            document.getElementById("BTNN_04").style.display = "";

            if (root1 != "") {
                document.getElementById("txt_pwd").style.display = "none";
                document.getElementById("span_pwd").innerHTML = "로그인암호가 자동적용됩니다. ";
            }
            /*if (root1 == "-1" && BoardTEMP_CopywriterUsed[Board_Num] == 1) { document.getElementById("txt_write_name").readOnly = false; }*/
            if (root1 == "-1") {
                document.getElementById("txt_write_name").readOnly = false;
            }
            else {
                if (BoardTEMP_CopywriterUsed[Board_Num] == 1) {
                    document.getElementById("txt_write_name").readOnly = false;
                }
            }
            /*
            if (root1 == "-1") {
            document.getElementById("span_vacant").style.display = "";
            }
            */
            if (root14 == '1') {
                document.getElementById("span_vacant").style.display = "";
            }

            if (BoardTEMP_SecretUsed[Board_Num] == 1) {
                document.getElementById("span_isLock").style.display = "";
                if (BoardTEMP_SecretUsed2[Board_Num] == 1) {
                    document.getElementById("chk_isLock").checked = true;
                    document.getElementById("span_isLock").disabled = true;
                }
            }
            if (BoardTEMP_Docid[Board_Num] != "") { DATEOP_Docid(BoardTEMP_Docid[Board_Num], root1, ""); }

            if (BoardTEMP_TypeView[Board_Num] == "gallery" || BoardTEMP_TypeView[Board_Num] == "photo" || BoardTEMP_TypeView[Board_Num] == "gallery" || BoardTEMP_TypeView[Board_Num] == "blog" || BoardTEMP_TypeView[Board_Num] == "event") {
                document.getElementById("span_vacant").style.display = "none";
                document.getElementById("span_isLock").style.display = "none";
            }
            /*
            var mzzz_ = document.getElementById("ddl_TableBoard");
            var MUNND = 0;
            for (var mml = 0; mml < Board_Seed.length; mml++) {
            var mll11 = eval("Board_" + Board_Seed[mml] + "_title");
            var mll22 = eval("Board_" + Board_Seed[mml] + "_Ncode");
            if (BoardTEMP_Ncode[Board_Num] == mll22) { continue; }
            MUNND++;
            mzzz_.options[MUNND] = new Option(mll11, mll22);
            }
            */
            Board.GoSite("LOAD", e1, Board_Num, "ddl_SiteBoard", "ddl_TableBoard");


            try { var CateItem__ = ""; CateItem__ = ifr.document.getElementById("TXT_CateItem").value; if (CateItem__ != "") { Teldd(document.getElementById("Board_CateItem"), CateItem__); }; } catch (err) { }
            try { cate_IME(BoardTEMP_CateItem3Used[Board_Num]); } catch (err) { }
            try { var CateItem2__ = ""; CateItem2__ = ifr.document.getElementById("TXT_CateItem2").value; if (CateItem2__ != "") { Teldd(document.getElementById("Board_CateItem2"), CateItem2__); }; } catch (err) { }
            try { var write_id__ = ifr.document.getElementById("TXT_write_id").value; document.getElementById("txt_write_id").value = write_id__; } catch (err) { }
            try { var write_name__ = ifr.document.getElementById("TXT_write_name").value; document.getElementById("txt_write_name").value = write_name__; } catch (err) { }
            try { var write_nick__ = ifr.document.getElementById("TXT_write_nick").value; document.getElementById("txt_write_nick").value = write_nick__; } catch (err) { }
            try { var pwd__ = ifr.document.getElementById("TXT_pwd").value; document.getElementById("txt_pwd").value = pwd__; } catch (err) { }
            try { var pwd__ = ifr.document.getElementById("TXT_pwd").value; document.getElementById("txt_pwd").value = pwd__; } catch (err) { }
            try { var phone__ = ifr.document.getElementById("TXT_phone").value; var phone___ = phone__.split('-'); if (phone___.length > 2) { document.getElementById("txt_phone1").value = phone___[0]; document.getElementById("txt_phone2").value = phone___[1]; document.getElementById("txt_phone3").value = phone___[2]; } } catch (err) { }
            try { var Nphone__ = ifr.document.getElementById("TXT_Nphone").value; var Nphone___ = Nphone__.split('-'); if (Nphone___.length > 2) { document.getElementById("txt_Nphone1").value = Nphone___[0]; document.getElementById("txt_Nphone2").value = Nphone___[1]; document.getElementById("txt_Nphone3").value = Nphone___[2]; } } catch (err) { }
            try {
                var email__ = ifr.document.getElementById("TXT_email").value;
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
            } catch (err) { }
            try { var title__ = ifr.document.getElementById("TXT_title").value; document.getElementById("txt_title").value = title__; } catch (err) { }
            try { vacant__ = ifr.document.getElementById("TXT_vacant").value; if (vacant__ == "1") { document.getElementById("chk_vacant").checked = true; } } catch (err) { }
            try { var vacantn__ = ifr.document.getElementById("TXT_vacantn").value; document.getElementById("TXT_vacantn").value = vacantn__; } catch (err) { }
            try { secret__ = ifr.document.getElementById("TXT_secret").value; if (secret__ == "1") { document.getElementById("chk_isLock").checked = true; } } catch (err) { }
            try { var title_effect1__ = ifr.document.getElementById("TXT_title_effect1").value; Teldd(document.getElementById("ddl_title_effect1"), title_effect1__); } catch (err) { }
            try { var title_effect2__ = ifr.document.getElementById("TXT_title_effect2").value; Teldd(document.getElementById("ddl_title_effect2"), title_effect2__); } catch (err) { }
            try { var title_effect3__ = ifr.document.getElementById("TXT_title_effect3").value; Teldd(document.getElementById("ddl_title_effect3"), title_effect3__); } catch (err) { }
            var isadmin__ = "";
            try { isadmin__ = ifr.document.getElementById("BoardAuthority0").value; } catch (err) { }
            try { if (ifr.document.getElementById("BoardAuthority13").value == "1") { isadmin__ = "-1"; } } catch (err) { }
            if (isadmin__ == "-1") {
                try { document.getElementById("tr_dadate1").style.display = ""; document.getElementById("tr_dadate2").style.display = ""; } catch (err) { }
                try {
                    var dadate__ = ifr.document.getElementById("TXT_dadate").value;
                    var dadate___ = dadate__.split(' '); if (dadate___.length > 1) { document.getElementById("txt_dadate1").value = dadate___[0]; document.getElementById("txt_dadate2").value = dadate___[1]; }
                } catch (err) { }
                try { var readnum__ = ifr.document.getElementById("TXT_readnum").value; document.getElementById("txt_readnum").value = readnum__; } catch (err) { }
            }
            try {
                var Mcontent__ = ifr.document.getElementById("TXT_Mcontent").value;
                if (BoardTEMP_Editer[Board_Num] != 1) { Mcontent__ = Mcontent__.replaceAll2("<br/>", ""); }
                document.getElementById("txt_Mcontent").value = Mcontent__;
            } catch (err) { }
            try { var idx__ = ifr.document.getElementById("TXT_idx").value; document.getElementById("txt_idx").value = idx__; } catch (err) { }
            try {
                var Docid__ = ifr.document.getElementById("TXT_Docid").value;
                document.getElementById("txt_Docid").value = Docid__;
            } catch (err) { }
            if (document.getElementById("txt_Docid").value == "") {
                document.getElementById("txt_Docid").value = root11;
            }
            for (var NNX2 = 1; NNX2 <= 10; NNX2++) {
                var PlusField_ = "";
                try { PlusField_ = ifr.document.getElementById("TXT_PlusField" + NNX2).value; } catch (err) { }
                if (PlusField_ != "") {
                    PutValue(NNX2 + '', 'INP' + NNX2, PlusField_);
                }
            }




            if (root1 == "-1") {/*작성자명수정설정 [관리자]*/
                if (BoardTEMP_CopywriterUsed[Board_Num] == 1) {
                    document.getElementById("txt_write_name").readOnly = false;
                    document.getElementById("txt_write_nick").readOnly = false;
                    document.getElementById("txt_phone1").readOnly = false;
                    document.getElementById("txt_phone2").readOnly = false;
                    document.getElementById("txt_phone3").readOnly = false;
                    document.getElementById("TEXT_email_1").readOnly = false;
                    document.getElementById("TEXT_email_2").readOnly = false;
                    document.getElementById("DDL_email").disabled = false;
                }
                else {
                    document.getElementById("txt_write_name").readOnly = true;
                    document.getElementById("txt_write_nick").readOnly = true;
                    document.getElementById("txt_phone1").readOnly = true;
                    document.getElementById("txt_phone2").readOnly = true;
                    document.getElementById("txt_phone3").readOnly = true;
                    document.getElementById("TEXT_email_1").readOnly = true;
                    document.getElementById("TEXT_email_2").readOnly = true;
                    document.getElementById("DDL_email").disabled = true;
                }
            }
            else { /*작성자명수정설정 [사용자]*/
                if (BoardTEMP_CopywriterUsed2[Board_Num] == 1) {
                    document.getElementById("txt_write_name").readOnly = false;
                    document.getElementById("txt_write_nick").readOnly = false;
                    document.getElementById("txt_phone1").readOnly = false;
                    document.getElementById("txt_phone2").readOnly = false;
                    document.getElementById("txt_phone3").readOnly = false;
                    document.getElementById("TEXT_email_1").readOnly = false;
                    document.getElementById("TEXT_email_2").readOnly = false;
                    document.getElementById("DDL_email").disabled = false;
                }
                else {
                    document.getElementById("txt_write_name").readOnly = true;
                    document.getElementById("txt_write_nick").readOnly = true;
                    document.getElementById("txt_phone1").readOnly = true;
                    document.getElementById("txt_phone2").readOnly = true;
                    document.getElementById("txt_phone3").readOnly = true;
                    document.getElementById("TEXT_email_1").readOnly = true;
                    document.getElementById("TEXT_email_2").readOnly = true;
                    document.getElementById("DDL_email").disabled = true;
                }
            }

            document.getElementById("iframe_N").innerHTML = '<iframe title="첩부화일관련" id="ifrFileUpload" name="ifrFileUpload" \
            src="/COMMON/NFUpload/nfupload_ifr.aspx?Docid=' + document.getElementById('txt_Docid').value + "&Num=" + Board_Num + '" \
            frameborder=0 marginwidth=0 width=100% height=115 scrolling=no></iframe>';
        }
    },
    INPUT_SUBMIT: function (e, e1, Board_Num, value) {
        if (value == "INPUT") {
            if (chk_EVENNTS(Board_Num) == false) { return; }
            document.getElementById("DDL_email").disabled = false;

            var Ncode__ = BoardTEMP_Ncode[Board_Num];
            var repidx__ = 0;
            var CateItem__ = document.getElementById("Board_CateItem").value;
            var CateItem2__ = document.getElementById("Board_CateItem2").value;
            var write_id__ = document.getElementById("txt_write_id").value;
            var write_name__ = document.getElementById("txt_write_name").value;
            var write_nick__ = document.getElementById("txt_write_nick").value;
            var pwd__ = document.getElementById("txt_pwd").value;
            var phone__ = document.getElementById("txt_phone1").value + "-" + document.getElementById("txt_phone2").value + "-" + document.getElementById("txt_phone3").value;
            var Nphone__ = document.getElementById("txt_Nphone1").value + "-" + document.getElementById("txt_Nphone2").value + "-" + document.getElementById("txt_Nphone3").value;
            var email__ = "";
            var title__ = document.getElementById("txt_title").value;
            var vacant__ = 0;
            var vacantn__ = document.getElementById("TXT_vacantn").value;
            var secret__ = 0;
            var title_effect1__ = document.getElementById("ddl_title_effect1").value;
            var title_effect2__ = document.getElementById("ddl_title_effect2").value;
            var title_effect3__ = document.getElementById("ddl_title_effect3").value;
            var Mcontent__ = document.getElementById("txt_Mcontent").value;
            var PlusField1__ = GetValue('1', 'INP1');
            var PlusField2__ = GetValue('2', 'INP2');
            var PlusField3__ = GetValue('3', 'INP3');
            var PlusField4__ = GetValue('4', 'INP4');
            var PlusField5__ = GetValue('5', 'INP5');
            var PlusField6__ = GetValue('6', 'INP6');
            var PlusField7__ = GetValue('7', 'INP7');
            var PlusField8__ = GetValue('8', 'INP8');
            var PlusField9__ = GetValue('9', 'INP9');
            var PlusField10__ = GetValue('10', 'INP10');
            var Docid__ = document.getElementById("txt_Docid").value.trim();

            if (write_id__ == '') {
                write_nick__ = write_name__;
            }

            email__ = document.getElementById("TEXT_email_1").value + "@";
            if (document.getElementById("DDL_email").value == "etc")
            { email__ += document.getElementById("TEXT_email_2").value; }
            else { email__ += document.getElementById("DDL_email").value; }

            if (BoardTEMP_Editer[Board_Num] == 0)
            { Mcontent__ = Mcontent__.replaceAll2("\n", "<br/>"); }
            else {
                Mcontent__ = FCKeditor.prototype.innerHTML("txt_Mcontent"); //FCKeditorAPI.GetInstance('txt_Mcontent').GetXHTML(true);
            }

            if (BoardSubmit > 0) { return; }
            BoardSubmit++;

            if (document.getElementById("chk_vacant").checked == true) { vacant__ = 1; }
            if (document.getElementById("chk_isLock").checked == true) { secret__ = 1; }



            var ifr = document.getElementById("ifr00030_" + e1).contentWindow;
            ifr.document.getElementById("TXT_BoardZ").value = BoardZ_C.BoardZ_GET(Ncode__);

            ifr.document.getElementById("TXT_Ncode").value = Ncode__;
            ifr.document.getElementById("TXT_x_ref").value = repidx__;
            ifr.document.getElementById("TXT_CateItem").value = CateItem__;
            ifr.document.getElementById("TXT_CateItem2").value = CateItem2__;
            ifr.document.getElementById("TXT_write_id").value = write_id__;
            ifr.document.getElementById("TXT_write_name").value = write_name__;
            ifr.document.getElementById("TXT_write_nick").value = write_nick__;
            ifr.document.getElementById("TXT_pwd").value = pwd__;
            ifr.document.getElementById("TXT_phone").value = phone__;
            ifr.document.getElementById("TXT_Nphone").value = Nphone__;
            ifr.document.getElementById("TXT_email").value = email__;
            ifr.document.getElementById("TXT_title").value = title__;
            ifr.document.getElementById("TXT_vacant").value = vacant__;
            ifr.document.getElementById("TXT_vacantn").value = vacantn__;
            ifr.document.getElementById("TXT_secret").value = secret__;
            ifr.document.getElementById("TXT_title_effect1").value = title_effect1__;
            ifr.document.getElementById("TXT_title_effect2").value = title_effect2__;
            ifr.document.getElementById("TXT_title_effect3").value = title_effect3__;
            ifr.document.getElementById("TXT_Mcontent").value = Mcontent__;
            ifr.document.getElementById("TXT_PlusField1").value = PlusField1__;
            ifr.document.getElementById("TXT_PlusField2").value = PlusField2__;
            ifr.document.getElementById("TXT_PlusField3").value = PlusField3__;
            ifr.document.getElementById("TXT_PlusField4").value = PlusField4__;
            ifr.document.getElementById("TXT_PlusField5").value = PlusField5__;
            ifr.document.getElementById("TXT_PlusField6").value = PlusField6__;
            ifr.document.getElementById("TXT_PlusField7").value = PlusField7__;
            ifr.document.getElementById("TXT_PlusField8").value = PlusField8__;
            ifr.document.getElementById("TXT_PlusField9").value = PlusField9__;
            ifr.document.getElementById("TXT_PlusField10").value = PlusField10__;
            ifr.document.getElementById("TXT_Docid").value = Docid__;
            ifr.document.forms[0].submit();
        }
    },
    UPDATE_SUBMIT: function (e, e1, Board_Num, value) {
        if (value == "INPUT") {
            if (chk_EVENNTS(Board_Num) == false) { return; }
            document.getElementById("DDL_email").disabled = false;

            var Ncode__ = BoardTEMP_Ncode[Board_Num];
            var repidx__ = 0;
            var CateItem__ = document.getElementById("Board_CateItem").value;
            var CateItem2__ = document.getElementById("Board_CateItem2").value;
            var write_id__ = document.getElementById("txt_write_id").value;
            var write_name__ = document.getElementById("txt_write_name").value;
            var write_nick__ = document.getElementById("txt_write_nick").value;
            var pwd__ = document.getElementById("txt_pwd").value;
            var phone__ = document.getElementById("txt_phone1").value + "-" + document.getElementById("txt_phone2").value + "-" + document.getElementById("txt_phone3").value;
            var Nphone__ = document.getElementById("txt_Nphone1").value + "-" + document.getElementById("txt_Nphone2").value + "-" + document.getElementById("txt_Nphone3").value;
            var email__ = "";
            var title__ = document.getElementById("txt_title").value;
            var vacant__ = 0;
            var vacantn__ = document.getElementById("TXT_vacantn").value;
            var secret__ = 0;
            var title_effect1__ = document.getElementById("ddl_title_effect1").value;
            var title_effect2__ = document.getElementById("ddl_title_effect2").value;
            var title_effect3__ = document.getElementById("ddl_title_effect3").value;
            var Mcontent__ = document.getElementById("txt_Mcontent").value;
            var PlusField1__ = GetValue('1', 'INP1');
            var PlusField2__ = GetValue('2', 'INP2');
            var PlusField3__ = GetValue('3', 'INP3');
            var PlusField4__ = GetValue('4', 'INP4');
            var PlusField5__ = GetValue('5', 'INP5');
            var PlusField6__ = GetValue('6', 'INP6');
            var PlusField7__ = GetValue('7', 'INP7');
            var PlusField8__ = GetValue('8', 'INP8');
            var PlusField9__ = GetValue('9', 'INP9');
            var PlusField10__ = GetValue('10', 'INP10');
            var Docid__ = document.getElementById("txt_Docid").value.trim();


            email__ = document.getElementById("TEXT_email_1").value + "@";
            if (document.getElementById("DDL_email").value == "etc")
            { email__ += document.getElementById("TEXT_email_2").value; }
            else { email__ += document.getElementById("DDL_email").value; }

            if (BoardTEMP_Editer[Board_Num] == 0)
            { Mcontent__ = Mcontent__.replaceAll2("\n", "<br/>"); }
            else {
                Mcontent__ = FCKeditor.prototype.innerHTML("txt_Mcontent"); //FCKeditorAPI.GetInstance('txt_Mcontent').GetXHTML(true);
            }

            if (document.getElementById("chk_vacant").checked == true) { vacant__ = 1; }
            if (document.getElementById("chk_isLock").checked == true) { secret__ = 1; }

            var dadate____ = "";
            dadate____ += document.getElementById("txt_dadate1").value + " ";
            dadate____ += document.getElementById("txt_dadate2").value;


            var readnum__ = document.getElementById("txt_readnum").value;

            if (BoardSubmit > 0) { return; }
            BoardSubmit++;



            var ifr = document.getElementById("ifr00030_" + e1).contentWindow;
            ifr.document.getElementById("TXT_BoardZ").value = BoardZ_C.BoardZ_GET(Ncode__);

            ifr.document.getElementById("TXT_idx").value = RequestS.sn;
            ifr.document.getElementById("TXT_pwd").value = pwd__;
            ifr.document.getElementById("TXT_dadate").value = dadate____;
            ifr.document.getElementById("TXT_readnum").value = readnum__;
            ifr.document.getElementById("TXT_CateItem").value = CateItem__;
            ifr.document.getElementById("TXT_CateItem2").value = CateItem2__;
            ifr.document.getElementById("TXT_write_name").value = write_name__;
            ifr.document.getElementById("TXT_write_nick").value = write_nick__;
            ifr.document.getElementById("TXT_phone").value = phone__;
            ifr.document.getElementById("TXT_Nphone").value = Nphone__;
            ifr.document.getElementById("TXT_email").value = email__;
            ifr.document.getElementById("TXT_title").value = title__;
            ifr.document.getElementById("TXT_vacant").value = vacant__;
            ifr.document.getElementById("TXT_vacantn").value = vacantn__;
            ifr.document.getElementById("TXT_secret").value = secret__;
            ifr.document.getElementById("TXT_title_effect1").value = title_effect1__;
            ifr.document.getElementById("TXT_title_effect2").value = title_effect2__;
            ifr.document.getElementById("TXT_title_effect3").value = title_effect3__;
            ifr.document.getElementById("TXT_Mcontent").value = Mcontent__;
            ifr.document.getElementById("TXT_PlusField1").value = PlusField1__;
            ifr.document.getElementById("TXT_PlusField2").value = PlusField2__;
            ifr.document.getElementById("TXT_PlusField3").value = PlusField3__;
            ifr.document.getElementById("TXT_PlusField4").value = PlusField4__;
            ifr.document.getElementById("TXT_PlusField5").value = PlusField5__;
            ifr.document.getElementById("TXT_PlusField6").value = PlusField6__;
            ifr.document.getElementById("TXT_PlusField7").value = PlusField7__;
            ifr.document.getElementById("TXT_PlusField8").value = PlusField8__;
            ifr.document.getElementById("TXT_PlusField9").value = PlusField9__;
            ifr.document.getElementById("TXT_PlusField10").value = PlusField10__;
            ifr.document.getElementById("TXT_Docid").value = Docid__;



            var TableBoard__ = document.getElementById("ddl_TableBoard").value;
            var gomove = 0; if (document.getElementById("ddl_TableBoard1_0").checked == false) { gomove = 1; }

            if (TableBoard__ != "") {
                if (gomove == 0) {
                    ifr.document.getElementById("TXT_BoardMOVE").value = TableBoard__;
                }
                else {
                    ifr.document.getElementById("TXT_BoardCOPY").value = TableBoard__;
                }
            }
            if (ifr.document.getElementById("HID_TableBoard03") && document.getElementById("HID_TableBoard03") && document.getElementById("HID_TableBoard03").value != "")
                ifr.document.getElementById("HID_TableBoard03").value = gomove + ":" + document.getElementById("HID_TableBoard03").value;
            ifr.document.forms[0].submit();

        }
    },
    REPLY_SUBMIT: function (e, e1, Board_Num, value) {
        if (value == "INPUT") {
            if (chk_EVENNTS(Board_Num) == false) { return; }
            document.getElementById("DDL_email").disabled = false;

            var Ncode__ = BoardTEMP_Ncode[Board_Num];
            var repidx__ = document.getElementById("txt_repidx").value;
            var CateItem__ = document.getElementById("Board_CateItem").value;
            var CateItem2__ = document.getElementById("Board_CateItem2").value;
            var write_id__ = document.getElementById("txt_write_id").value;
            var write_name__ = document.getElementById("txt_write_name").value;
            var write_nick__ = document.getElementById("txt_write_nick").value;
            var pwd__ = document.getElementById("txt_pwd").value;
            var phone__ = document.getElementById("txt_phone1").value + "-" + document.getElementById("txt_phone2").value + "-" + document.getElementById("txt_phone3").value;
            var Nphone__ = document.getElementById("txt_Nphone1").value + "-" + document.getElementById("txt_Nphone2").value + "-" + document.getElementById("txt_Nphone3").value;
            var email__ = "";
            var title__ = document.getElementById("txt_title").value;
            var vacant__ = 0;
            var vacantn__ = document.getElementById("TXT_vacantn").value;
            var secret__ = 0;
            var title_effect1__ = document.getElementById("ddl_title_effect1").value;
            var title_effect2__ = document.getElementById("ddl_title_effect2").value;
            var title_effect3__ = document.getElementById("ddl_title_effect3").value;
            var Mcontent__ = document.getElementById("txt_Mcontent").value;
            var PlusField1__ = GetValue('1', 'INP1');
            var PlusField2__ = GetValue('2', 'INP2');
            var PlusField3__ = GetValue('3', 'INP3');
            var PlusField4__ = GetValue('4', 'INP4');
            var PlusField5__ = GetValue('5', 'INP5');
            var PlusField6__ = GetValue('6', 'INP6');
            var PlusField7__ = GetValue('7', 'INP7');
            var PlusField8__ = GetValue('8', 'INP8');
            var PlusField9__ = GetValue('9', 'INP9');
            var PlusField10__ = GetValue('10', 'INP10');
            var Docid__ = document.getElementById("txt_Docid").value.trim();


            email__ = document.getElementById("TEXT_email_1").value + "@";
            if (document.getElementById("DDL_email").value == "etc")
            { email__ += document.getElementById("TEXT_email_2").value; }
            else { email__ += document.getElementById("DDL_email").value; }
            if (BoardTEMP_Editer[Board_Num] == 0)
            { Mcontent__ = Mcontent__.replaceAll2("\n", "<br/>"); }
            else {
                Mcontent__ = FCKeditor.prototype.innerHTML("txt_Mcontent"); //FCKeditorAPI.GetInstance('txt_Mcontent').GetXHTML(true);
            }

            if (BoardSubmit > 0) { return; }
            BoardSubmit++;

            if (document.getElementById("chk_vacant").checked == true) { vacant__ = 1; }
            if (document.getElementById("chk_isLock").checked == true) { secret__ = 1; }

            var ifr = document.getElementById("ifr00030_" + e1).contentWindow;
            ifr.document.getElementById("TXT_BoardZ").value = BoardZ_C.BoardZ_GET(Ncode__);

            ifr.document.getElementById("TXT_Ncode").value = Ncode__;
            ifr.document.getElementById("TXT_x_ref").value = repidx__;
            ifr.document.getElementById("TXT_CateItem").value = CateItem__;
            ifr.document.getElementById("TXT_CateItem2").value = CateItem2__;
            ifr.document.getElementById("TXT_write_id").value = write_id__;
            ifr.document.getElementById("TXT_write_name").value = write_name__;
            ifr.document.getElementById("TXT_write_nick").value = write_nick__;
            ifr.document.getElementById("TXT_pwd").value = pwd__;
            ifr.document.getElementById("TXT_phone").value = phone__;
            ifr.document.getElementById("TXT_Nphone").value = Nphone__;
            ifr.document.getElementById("TXT_email").value = email__;
            ifr.document.getElementById("TXT_title").value = title__;
            ifr.document.getElementById("TXT_vacant").value = vacant__;
            ifr.document.getElementById("TXT_vacantn").value = vacantn__;
            ifr.document.getElementById("TXT_secret").value = secret__;
            ifr.document.getElementById("TXT_title_effect1").value = title_effect1__;
            ifr.document.getElementById("TXT_title_effect2").value = title_effect2__;
            ifr.document.getElementById("TXT_title_effect3").value = title_effect3__;
            ifr.document.getElementById("TXT_Mcontent").value = Mcontent__;
            ifr.document.getElementById("TXT_PlusField1").value = PlusField1__;
            ifr.document.getElementById("TXT_PlusField2").value = PlusField2__;
            ifr.document.getElementById("TXT_PlusField3").value = PlusField3__;
            ifr.document.getElementById("TXT_PlusField4").value = PlusField4__;
            ifr.document.getElementById("TXT_PlusField5").value = PlusField5__;
            ifr.document.getElementById("TXT_PlusField6").value = PlusField6__;
            ifr.document.getElementById("TXT_PlusField7").value = PlusField7__;
            ifr.document.getElementById("TXT_PlusField8").value = PlusField8__;
            ifr.document.getElementById("TXT_PlusField9").value = PlusField9__;
            ifr.document.getElementById("TXT_PlusField10").value = PlusField10__;
            ifr.document.getElementById("TXT_Docid").value = Docid__;
            ifr.document.forms[0].submit();
        }
    },
    BTN: function (e, e1, Board_Num, value) {

        if (value == 'P') {
            var int_font = parseInt(jQuery("#bbs_content").css("font-size"));
            int_font += 3; jQuery("#bbs_content,#bbs_content a,#bbs_content p,#bbs_content span,#bbs_content td,#bbs_content li,#bbs_content ul,#bbs_content font").css({ 'font-size': int_font + 'px' });
            notice_setcookie("CFONT", int_font > 10 && int_font < 20 ? "" : int_font + "", 1);
        } else if (value == 'M') {
            var int_font = parseInt(jQuery("#bbs_content").css("font-size"));
            int_font -= 3; if (int_font <= 5) int_font = 5; jQuery("#bbs_content,#bbs_content a,#bbs_content p,#bbs_content span,#bbs_content td,#bbs_content li,#bbs_content ul,#bbs_content font").css({ 'font-size': int_font + 'px' });
            notice_setcookie("CFONT", int_font > 10 && int_font < 20 ? "" : int_font + "", 1);
        } else if (value == 'PRINT') {
            var oWindow = window.open('', 'wnd_report_print', 'scrollbars=yes,width=750,height=600,top=0,left=0');
            var nu = false; try { if (document.getElementById("divblankfrmXXblankfrm").id.length > 0) nu = true; } catch (err) { }
            if (!nu) {
                var blankdiv = document.createElement("DIV");
                blankdiv.id = "divblankfrmXXblankfrm";
                blankdiv.style.display = "none";
                blankdiv.style.zIndex = 9998;

                var iframes = '';
                iframes += '<form name="blankfrm" id="blankfrm" method="post">'
                + '<input type="hidden" name="NHTML1" id="NHTML1" title="hidden:PRINT에 사용되는 것입니다.">'
                + '<input type="hidden" name="NHTML2" id="NHTML2" title="hidden:PRINT에 사용되는 것입니다.">'
                + '<input type="hidden" name="NHTML3" id="NHTML3" title="hidden:PRINT에 사용되는 것입니다.">'
                + '<input type="hidden" name="NHTML4" id="NHTML4" title="hidden:PRINT에 사용되는 것입니다.">'
                + '</form>';
                blankdiv.innerHTML = iframes;
                document.body.appendChild(blankdiv);
            }

            if (document.getElementById("NHTML1")) document.getElementById("NHTML1").value = ""
            + "<span class=\"bold\">" + document.getElementById("bbs_title").innerHTML + "</span>"
            + "<hr/>"
            + "<img src=\"/img_bbs/ico_dot_02.gif\" align=\"middle\" alt=\"작성일:" + document.getElementById("bbs_dadate").innerHTML + "\" />작성일 :" + document.getElementById("bbs_dadate").innerHTML
            + "<img src=\"/img_bbs/ico_dot_02.gif\" align=\"middle\" alt=\"작성자:" + document.getElementById("bbs_writer").innerHTML + "\" />작성자 :" + document.getElementById("bbs_writer").innerHTML
            + "<hr/>"
            + document.getElementById("bbs_content").innerHTML
            ;

            var hidfrm = document.getElementById("blankfrm");
            if (hidfrm) {
                try {
                    hidfrm.action = "/COMMON/Print/nwd_print.aspx";
                    hidfrm.target = "wnd_report_print";
                    hidfrm.submit();
                    hidfrm.focus();
                } catch (err) { }
            }


        } else if (value == 'Repley') {
            var root1_ = ""; var ifr = document.getElementById("ifr00030_" + e1).contentWindow;
            if (document.getElementById("txt_Mcontent_") && ifr) { root1_ = ifr.document.getElementById("TXT_STAT").value; };
            if (root1_ == "YES") { Board.StatGO('SAVE', e1, Board_Num); }
            else {
                var m_page = location.href;
                if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
                var m_page1 = m_page + '?T=I&c=' + encodeURIComponent(RequestS.c) + '&c1=' + RequestS.c1 + '&c2=' + RequestS.c2 + '&c3=' + RequestS.c3 + '&w=' + encodeURIComponent(RequestS.w) + '&page=' + RequestS.page + '&EX=REPLY&sn=' + RequestS.sn;
                location.href = m_page1;
            };
        }
        else if (value == 'Del') {
            Board.PASSWORD(e, e1, Board_Num, 'Del');
        }
        else if (value == 'Edit') {
            Board.PASSWORD(e, e1, Board_Num, 'Edit');
        }
        else if (value == 'List') {
            var m_page = location.href;
            if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
            var m_page1 = m_page + '?T=L&c=' + encodeURIComponent(RequestS.c) + '&c1=' + RequestS.c1 + '&c2=' + RequestS.c2 + '&c3=' + RequestS.c3 + '&w=' + encodeURIComponent(RequestS.w) + '&page=' + RequestS.page;
            location.href = m_page1;
        }
        else if (value == 'C0') {
            notice_setcookie("CCOLOR", "", 1);
            jQuery("#bbs_content,#bbs_content a,#bbs_content p,#bbs_content span,#bbs_content td,#bbs_content li,#bbs_content ul,#bbs_content font").css({ "background-color": "rgb(255, 255, 255)", "color": "#616161" });
        }
        else if (value == 'C1') {
            notice_setcookie("CCOLOR", "C1", 1);
            jQuery("#bbs_content,#bbs_content a,#bbs_content p,#bbs_content span,#bbs_content td,#bbs_content li,#bbs_content ul,#bbs_content font").css({ "background-color": "rgb(102, 204, 255)", "color": "#616161" });
        }
        else if (value == 'C2') {
            notice_setcookie("CCOLOR", "C2", 1);
            jQuery("#bbs_content,#bbs_content a,#bbs_content p,#bbs_content span,#bbs_content td,#bbs_content li,#bbs_content ul,#bbs_content font").css({ "background-color": "rgb(0, 0, 0)", "color": "#ffff00" });
        }
        else if (value == 'C3') {
            notice_setcookie("CCOLOR", "C3", 1);
            jQuery("#bbs_content,#bbs_content a,#bbs_content p,#bbs_content span,#bbs_content td,#bbs_content li,#bbs_content ul,#bbs_content font").css({ "background-color": "rgb(204, 204, 153)", "color": "#616161" });
        }
    },
    BTN2X: function (e, value) {
        var int_font = parseInt(document.getElementById("bbs_content" + e).value);
        if (value == "P") {
            int_font += 3;
            document.getElementById("bbs_content" + e).value = int_font;
            document.getElementById("bbs_content" + e).style.fontSize = int_font + 'px';
        }
        else if (value == "M") {
            int_font -= 3;
            if (int_font <= 5) int_font = 5;
            document.getElementById("bbs_content" + e).value = int_font;
            document.getElementById("bbs_content" + e).style.fontSize = int_font + 'px';
        }
        else if (value == "PRINT") {
            var oWindow = window.open('', 'wnd_report_print', 'scrollbars=yes,width=750,height=600,top=0,left=0');
            var nu = false; try { if (document.getElementById("divblankfrmXXblankfrm").id.length > 0) nu = true; } catch (err) { }
            if (!nu) {
                var blankdiv = document.createElement("DIV");
                blankdiv.id = "divblankfrmXXblankfrm";
                blankdiv.style.display = "none";
                blankdiv.style.zIndex = 9998;

                var iframes = '';
                iframes += '<form name="blankfrm" id="blankfrm" method="post">'
                + '<input type="hidden" name="NHTML1" id="NHTML1" title="hidden:PRINT에 사용되는 것입니다.">'
                + '<input type="hidden" name="NHTML2" id="NHTML2" title="hidden:PRINT에 사용되는 것입니다.">'
                + '<input type="hidden" name="NHTML3" id="NHTML3" title="hidden:PRINT에 사용되는 것입니다.">'
                + '<input type="hidden" name="NHTML4" id="NHTML4" title="hidden:PRINT에 사용되는 것입니다.">'
                + '</form>';
                blankdiv.innerHTML = iframes;
                document.body.appendChild(blankdiv);
            }
            document.getElementById("NHTML1").value = ""
            + "<span class=\"bold\">" + document.getElementById("bbs_title").innerHTML + "</span>"
            + "<hr/>"
            + "<img src=\"/img_bbs/ico_dot_02.gif\" align=\"middle\" alt=\"작성일 :" + document.getElementById("bbs_dadate" + e).innerHTML + "\"/>작성일 :" + document.getElementById("bbs_dadate" + e).innerHTML
            + "<img src=\"/img_bbs/ico_dot_02.gif\" align=\"middle\" alt=\"작성자 :" + document.getElementById("bbs_writer" + e).innerHTML + "\"/>작성자 :" + document.getElementById("bbs_writer" + e).innerHTML
            + "<hr/>"
            + document.getElementById("bbs_content" + e).innerHTML;


            var hidfrm = document.getElementById("blankfrm");
            if (hidfrm) {
                try {
                    hidfrm.action = "/COMMON/Print/nwd_print.aspx";
                    hidfrm.target = "wnd_report_print";
                    hidfrm.submit();
                    hidfrm.focus();
                } catch (err) { }
            }
        }
    },
    FIND1: function (e, e1, Board_Num, value) {
        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        var m_page1 = m_page + '?T=L&c=' + encodeURIComponent(value) + '&c1=' + RequestS.c1 + '&c2=' + RequestS.c2 + '&c3=' + RequestS.c3 + '&w=' + encodeURIComponent(RequestS.w);
        location.href = m_page1;
    },
    FIND2: function (e, e1, Board_Num) {
        if (document.getElementById("chk_C001").checked == true) { RequestS.c1 = "1"; } else { RequestS.c1 = "0"; }
        if (document.getElementById("chk_C002").checked == true) { RequestS.c2 = "1"; } else { RequestS.c2 = "0"; }
        if (document.getElementById("chk_C003").checked == true) { RequestS.c3 = "1"; } else { RequestS.c3 = "0"; }

        RequestS.w = document.getElementById("txt_keyword").value.trim();
        if (RequestS.w == "") {
            alert("검색어을 입력하여 주십시오.");
            return;
        }

        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        var m_page1 = m_page + '?T=L&c=' + encodeURIComponent(RequestS.c)
        + '&c1=' + RequestS.c1
        + '&c2=' + RequestS.c2
        + '&c3=' + RequestS.c3
        + '&w=' + encodeURIComponent(RequestS.w);
        location.href = m_page1;
    },
    FIND3: function (e, e1, Board_Num, T_NUM_) {
        var obj_1 = document.getElementById("cate_" + e1);
        var obj_2 = document.getElementById("cate2_" + e1);
        if (T_NUM_ == 0) {
            Board.FIND1(e, e1, Board_Num, document.getElementById("cate_" + e1).value);
        }
        else if (T_NUM_ == 1) {
            if (obj_1.selectedIndex == -1) {
                var MX__1 = obj_2.length;
                for (var NNX_ = 1; NNX_ < MX__1; NNX_++) {
                    obj_.remove(1);
                }
                obj_2.style.display = "none";
            }
            else {

                var MX__1 = obj_2.length;
                for (var NNX_ = 1; NNX_ < MX__1; NNX_++) {
                    obj_2.remove(1);
                }
                var now_seq = obj_1.selectedIndex;
                var mm_1 = obj_1[now_seq].value2;
                var mm_1__ = mm_1.split('↓');
                if (mm_1__.length > 1) {

                    for (var NNX_ = 1; NNX_ < mm_1__.length; NNX_++) {
                        obj_2.options[NNX_] = new Option(mm_1__[NNX_], mm_1__[NNX_]);
                    }
                    if (BoardTEMP_CateItem3Used[Board_Num] == 1) {
                        obj_2.style.display = "";
                    } else { Board.FIND1(e, e1, Board_Num, document.getElementById("cate_" + e1).value); }
                }
                else {
                    obj_2.style.display = "none";
                }
            }
        }
        else if (T_NUM_ == 2) {
            Board.FIND1(e, e1, Board_Num, obj_1.value + '↑' + obj_2.value);
        }
    },
    ResultS: function (e, e1, Board_Num, value) {
        var today = new Date();
        var mppp = today.getYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + Math.round(100 * Math.random());

        jQuery.ajax({
            type: "POST",                   //타입 GET , POST
            datatype: "html",               //데이타타입 html, xml 등등
            url: "/common/board/boardPlus.aspx",     //경로
            data: "T=PASSWORD&T1=" + RequestS.sn + "&T2=&T3=" + value + "&T4=yes&d=" + mppp + "&pdn=" + XncodeUR(PageBaseInfo.domain),
            async: false,                   //비동기 사용여부 true : 비동기, false : 동기
            success: function (data) {
                var m_page = location.href;
                if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
                var m_page1 = m_page + '?T=L&c=' + encodeURIComponent(RequestS.c) + '&c1=' + RequestS.c1 + '&c2=' + RequestS.c2 + '&c3=' + RequestS.c3 + '&w=' + encodeURIComponent(RequestS.w) + '&page=' + RequestS.page;
                location.href = m_page1;
            },
            error: function () {
                return false;
            }
        });
    },
    PASSWORD: function (e, e1, Board_Num, value) /*파일 관련*/
    {
        var obj_100001 = document.getElementById("span0001_" + e1);
        var obj_100002 = document.getElementById("span0002_" + e1);
        var obj_100003 = document.getElementById("span0003_" + e1);
        var obj_100004 = document.getElementById("span0004_" + e1);
        var obj_100005 = document.getElementById("span0005_" + e1);
        var obj_100006 = document.getElementById("span0006_" + e1);
        var obj_100007 = document.getElementById("span0007_" + e1);
        var obj_100008 = document.getElementById("span0008_" + e1);
        var obj_100009 = document.getElementById("span0009_" + e1);
        var obj_100010 = document.getElementById("span0010_" + e1);
        var obj_100011 = document.getElementById("span0011_" + e1);
        var chk_ = false;

        var NIL = "";
        var today = new Date();
        var mppp = today.getYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + Math.round(100 * Math.random());
        jQuery.ajax({
            type: "POST",                   //타입 GET , POST
            datatype: "html",               //데이타타입 html, xml 등등
            url: "/common/board/boardPlus.aspx",     //경로
            data: "T=PASSWORD&T1=" + RequestS.sn + "&T2=" + encodeURIComponent(NIL.trim()) + "&T3=" + value + "&T4=no&d=" + mppp + "&pdn=" + XncodeUR(PageBaseInfo.domain),
            async: false,                   //비동기 사용여부 true : 비동기, false : 동기
            success: function (data) {

                var MO = data.trim();
                if (MO != "") {
                    if (value == "Del" && NIL == "") {
                        if (confirm("정말로 삭제하겠습니까?")) {
                            Board.ResultS(e, e1, Board_Num, 'Del');
                            chk_ = false;
                            return chk_;
                        }
                        else {
                            chk_ = false;
                            return chk_;
                        }
                    }
                    else {
                        chk_ = true;
                    }
                }
                else {
                    chk_ = false;
                }

                if (chk_ == false) {
                    obj_100001.style.display = 'none';
                    obj_100002.style.display = 'none';
                    obj_100003.style.display = 'none';
                    obj_100004.style.display = 'none';
                    obj_100005.style.display = 'none';
                    obj_100006.style.display = 'none';
                    obj_100007.style.display = 'none';
                    obj_100008.style.display = 'none';
                    obj_100009.style.display = 'none';
                    obj_100010.style.display = 'none';
                    obj_100011.style.display = 'none';
                    obj_100006.innerHTML = ''
+ '<br/>'
+ '<br/>'
+ '<table width="100%" border="0" cellspacing="0" cellpadding="5">'
+ '  <tr><td   class="BoardHrColor2_TOP pad0"><div class="dheight_3"></div></td></tr>'
+ '  <tr><td class="pad0"><div class="dheight_2"></div></td></tr>'
+ '  <tr><td height="40" align="center" valign="bottom" bgcolor="#f7f7f7" class="bold">수정,삭제,비밀글읽기를 위해서는 글작성시 등록한 비밀번호(로그인 암호)를 입력하셔야합니다.</td></tr>'
+ '  <tr><td align="center" bgcolor="#f7f7f7" class="bold">비밀번호 : <input name="txt_passwdN" type="password" id="txt_passwdN" title="수정,삭제,비밀글읽기를 위해서는 글작성시 등록한 비밀번호(로그인 암호)를 입력하셔야합니다." onkeydown="if(event.keyCode ==13){Board.PASSWORD2(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'' + value + '\',1);return false;}" /> <font color="blue" id="MSG_DELSE" name="MSG_DELSE"></font></td></tr>'
+ '  <tr><td height="40" align="center" valign="top" bgcolor="#f7f7f7" class="colorbf0101">데이터를 삭제할 경우 복구가 불가능합니다. 신중히 확인하시고 삭제하세요.</td></tr>'
+ '  <tr><td class="pad0"><div class="dheight_2"></div></td></tr>'
+ '  <tr><td   class="BoardHrColor2_TOP pad0"><div class="dheight_3"></div></td></tr>'
+ '  <tr><td align="center">'
+ '  <img style="cursor:pointer;" onclick="Board.PASSWORD2(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'' + value + '\',1)" src="/img_bbs/bt_cause.gif" alt="확인" width="66" height="23" hspace="2" />'
+ '  <img style="cursor:pointer;" onclick="Board.PASSWORD2(\'' + e + '\',\'' + e1 + '\',' + Board_Num + ',\'' + value + '\',2)" src="/img_bbs/bt_cancel.gif" alt="취소" width="66" height="23" hspace="2" /></td></tr>'
+ '</table> ';
                    obj_100006.style.display = '';
                    document.getElementById("txt_passwdN").focus();
                }
                if (value == "Edit") {
                    if (chk_ == false) return;
                    var m_page = location.href;
                    if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
                    var m_page1 = m_page + '?T=I&c=' + encodeURIComponent(RequestS.c) + '&c1=' + RequestS.c1 + '&c2=' + RequestS.c2 + '&c3=' + RequestS.c3 + '&w=' + encodeURIComponent(RequestS.w) + '&page=' + RequestS.page + '&EX=EDITE&sn=' + RequestS.sn;
                    location.href = m_page1;
                }
                else if (value == "Del") {
                    if (chk_ == false) return;
                    var m_page = location.href;
                    if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
                    var m_page1 = m_page + '?T=L&c=' + encodeURIComponent(RequestS.c) + '&c1=' + RequestS.c1 + '&c2=' + RequestS.c2 + '&c3=' + RequestS.c3 + '&w=' + encodeURIComponent(RequestS.w) + '&page=' + RequestS.page;
                    location.href = m_page1;
                }

            },    //성공시 실행할 함수
            error: function () {
                return false;
            }             //에러발생시 실행할 함수
        });


    },
    PASSWORD2: function (e, e1, Board_Num, value, Ns) /*파일 관련*/
    {
        if (Ns == 2) {
            var obj_100001 = document.getElementById("span0001_" + e1);
            var obj_100002 = document.getElementById("span0002_" + e1);
            var obj_100003 = document.getElementById("span0003_" + e1);
            var obj_100004 = document.getElementById("span0004_" + e1);
            var obj_100005 = document.getElementById("span0005_" + e1);
            var obj_100006 = document.getElementById("span0006_" + e1);
            var obj_100007 = document.getElementById("span0007_" + e1);
            var obj_100008 = document.getElementById("span0008_" + e1);
            var obj_100009 = document.getElementById("span0009_" + e1);
            var obj_100010 = document.getElementById("span0010_" + e1);
            var obj_100011 = document.getElementById("span0011_" + e1);
            obj_100001.style.display = '';
            obj_100002.style.display = '';
            obj_100003.style.display = '';
            obj_100004.style.display = '';
            obj_100005.style.display = '';
            obj_100006.style.display = 'none';
            obj_100007.style.display = '';
            obj_100008.style.display = '';
            obj_100009.style.display = '';
            obj_100010.style.display = '';
            obj_100011.style.display = '';
            obj_100006.innerHTML = '';
        }
        else {
            if (document.getElementById("txt_passwdN").value.trim() == "") {
                alert("비밀번호을 입력하여 주십시요. ");
            }

            var today = new Date();
            var mppp = today.getYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + Math.round(100 * Math.random());

            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "html",               //데이타타입 html, xml 등등
                url: "/common/board/boardPlus.aspx",     //경로
                data: "T=PASSWORD&T1=" + RequestS.sn + "&T2=" + encodeURIComponent(Base64.encode(document.getElementById("txt_passwdN").value.trim())) + "&T3=" + value + "&T4=yes&d=" + mppp + "&pdn=" + XncodeUR(PageBaseInfo.domain),
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                success: function (data) {

                    var MO = data.trim();
                    if (MO != "") {
                        if (value == "Edit") {
                            Board.BTN(e, e1, Board_Num, value);
                        }
                        else if (value == "Del") {
                            var m_page = location.href;
                            if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
                            var m_page1 = m_page + '?T=L&c=' + encodeURIComponent(RequestS.c) + '&c1=' + RequestS.c1 + '&c2=' + RequestS.c2 + '&c3=' + RequestS.c3 + '&w=' + encodeURIComponent(RequestS.w) + '&page=' + RequestS.page;
                            location.href = m_page1;
                        }
                    }
                    else { document.getElementById("MSG_DELSE").innerHTML = "비밀번호가 일치하지 않습니다."; }

                },    //성공시 실행할 함수
                error: function () {
                    return false;
                }             //에러발생시 실행할 함수
            });
        }
    },
    NOUSED: function (e, e1) /*파일 관련*/
    {
        var obj_100001 = document.getElementById("span0001_" + e1);
        obj_100001.innerHTML = ''
+ '<br /><br />'
+ '<table width="100%" border="0" cellspacing="0" cellpadding="0">'
+ '<tr><td bgcolor="#d9d9d9" class="BoardHrColor_TOP"><div class="dheight_1"></div></td></tr>'
+ '<tr><td align="center"><img src="/dbimage/Design/default/none_power.gif" border="0" usemap="#msgbt" />'
+ '<map name="msgbt" id="msgbt"><area shape="rect" coords="245,99,301,127" href="javascript:Next_Url_LD(\'MemLogin\');location.href=Next_Url+\'?preurl=\'+location.href.replaceAll(\'?\',\'^\') ;" /></map>'
+ '</td></tr>'
+ '<tr><td bgcolor="#d9d9d9" class="BoardHrColor_TOP"><div class="dheight_1"></div></td></tr>'
+ '</table><br /><br />';
    },
    MainGo: function () /*승인관련*/
    {
        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        var m_page1 = m_page + '?T=L';
        location.href = m_page1;
    },
    FILESDOWNS: function (e, e1) /*파일 관련*/
    {
        /*location.href = "/COMMON/NFUpload/FILELOAD.aspx?Docid=" + e1 + "&Num=" + e;*/
        var URELS_FILES = "/COMMON/NFUpload/FILELOAD.aspx?Docid=" + e1 + "&Num=" + e;
        if (!document.getElementById("ifr_file_ifr")) {
            var iframe_ = document.createElement('iframe');
            iframe_.id = "ifr_file_ifr";
            iframe_.name = "ifr_file_ifr";
            iframe_.style.display = "none";
            iframe_.src = URELS_FILES;
            document.forms[0].appendChild(iframe_);
        }
        else {
            document.getElementById("ifr_file_ifr").src = URELS_FILES;
        }
    },
    ISOPEN: function (e, e1) /*승인관련*/
    {
        var today = new Date();
        var mppp = today.getYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + Math.round(100 * Math.random());
        jQuery.ajax({
            type: "POST",                   //타입 GET , POST
            datatype: "html",               //데이타타입 html, xml 등등
            url: "/common/board/boardPlus.aspx",     //경로
            data: "T=iSOPEN&T1=" + e + "&T2=" + e1 + "&d=" + mppp + "&pdn=" + XncodeUR(PageBaseInfo.domain),
            async: false,                   //비동기 사용여부 true : 비동기, false : 동기
            success: function (data) {

                if (data.trim() == "1") {
                    if (e1 == "0") {
                        alert("[공개]로 변경되었습니다.");
                    }
                    else {
                        alert("[비공개]로 변경되었습니다.");
                    }
                }

            },    //성공시 실행할 함수
            error: function () {
                return false;
            }             //에러발생시 실행할 함수
        });
    },
    FILESGO: function (e, e_) /*파일 관련*/
    {
        if (e == 'go') {
            var mm_txt = document.getElementById("txt_hid_type").value;
            var Ncode_ = BoardTEMP_Ncode[e_].replaceAll("{", "").replaceAll("}", "");
            if (mm_txt == "NEW") {
                setTimeout("Board.INPUT_SUBMIT('" + RequestS.EX + "','" + Ncode_ + "'," + e_ + ", 'INPUT');", 10);
            }
            else if (mm_txt == "REPLY") {
                setTimeout("Board.REPLY_SUBMIT('" + RequestS.EX + "','" + Ncode_ + "'," + e_ + ", 'INPUT');", 10);
            }
            else if (mm_txt == "EDITE") {
                setTimeout("Board.UPDATE_SUBMIT('" + RequestS.EX + "','" + Ncode_ + "'," + e_ + ", 'INPUT');", 10);
            }
            else if (mm_txt == "STATUS") {
                setTimeout("Board.StatGO('SAVE','" + Ncode_ + "'," + e_ + ");", 10);
            }
        }
        else if (e == 'chk1') {
            var submitObj = document.getElementById("txt_hid_submit");
            submitObj.value = "ok";
            ifrFileUpload.NfUpload.FileUpload();
        }
        else if (e == 'chk2') {
            var submitObj = document.getElementById("txt_hid_submit");
            if (submitObj.value == "ok") {
                return true;
            }

            var Byte__ = "";
            var delIdx__ = "";
            try {
                var ifrfile = document.getElementById("ifrFileUpload").contentWindow;
                Byte__ = ifrfile.document.getElementById("sUploadSize").innerHTML;
                delIdx__ = ifrfile.delIdx;
            } catch (err) { }

            if (Byte__ == "0 Byte" && delIdx__ == "") {
                submitObj.value = "ok";
                return true;
            }
            else {
                Board.FILESGO('chk1');
                return false;
            }
        }
    },
    StatGO: function (e, e1, Board_Num) {
        var ifr = document.getElementById("ifr00030_" + e1).contentWindow;
        if (e == "LOAD") {
            if (document.getElementById("txt_Mcontent_") && ifr) {
                try {
                    var root1_ = ifr.document.getElementById("TXT_STAT").value;
                    if (root1_ == "YES") {

                        var root1 = ifr.document.getElementById("BoardAuthority0").value;
                        var root2 = ifr.document.getElementById("BoardAuthority1").value;
                        var root3 = ifr.document.getElementById("BoardAuthority2").value;


                        document.getElementById("txt_write_id_").value = root1;
                        if (BoardTEMP_CopywriterUsed3[Board_Num] == 1) {
                            document.getElementById("txt_write_name_").value = root2;
                            document.getElementById("txt_write_nick_").value = root3;
                        }
                        if (root1 == "-1") {
                            document.getElementById("txt_write_name_").value = v_board_Admin_txt;
                            document.getElementById("txt_write_nick_").value = v_board_Admin_txt;
                        }
                        if (root1 == "-1") {
                            document.getElementById("txt_write_name_").readOnly = false;
                        }
                        else {
                            if (BoardTEMP_CopywriterUsed[Board_Num] == 1) {
                                document.getElementById("txt_write_name_").readOnly = false;
                            }
                        }


                        var agt = navigator.userAgent.toLowerCase();
                        if (agt.indexOf("msie") > -1) {
                            oFCKeditor = new FCKeditor('txt_Mcontent_');
                            oFCKeditor.Height = 370;
                            oFCKeditor.ReplaceTextarea();
                        }
                        else {
                            oFCKeditor = new FCKeditor('txt_Mcontent_');
                            oFCKeditor.Height = 370;
                            oFCKeditor.ReplaceTextarea();
                        }

                        if (BoardTEMP_FileUpUsed[Board_Num] == 1) {
                            document.getElementById("tr_FileUpUsed1_").style.display = "";
                            document.getElementById("tr_FileUpUsed2_").style.display = "";
                        }

                    }
                } catch (err) { }
            }
        }
        else if (e == "BG") {
            var dd_statuste = ""; var pwd_ = "";
            var obj_status = document.getElementsByName("ddl_Writer"); var obj_pwd = document.getElementById("txt_WriterPwd");
            if (obj_status) { for (var cf = 0; cf < obj_status.length; cf++) { if (obj_status[cf].checked) { dd_statuste = obj_status[cf].value; } } };
            if (obj_pwd && obj_pwd.style.display == "") { pwd_ = obj_pwd.value; if (obj_pwd.value.trim() == "") { alert("암호을입력하여 주십시요."); obj_pwd.focus(); return; } };
            if (obj_status == "") { alert("답변만족도을 선택하여 주십시요."); return; }

            var Ncode__ = BoardTEMP_Ncode[Board_Num];
            ifr.document.getElementById("TXT_Ncode").value = Ncode__;
            ifr.document.getElementById("TXT_Docid").value = "BGX";
            ifr.document.getElementById("TXT_write_id").value = dd_statuste;
            ifr.document.getElementById("TXT_pwd").value = pwd_;
            ifr.document.forms[0].submit();
        }
        else if (e == "SAVE") {

            var dd_statuste = "";
            var obj_status = document.getElementsByName("ddl_status");
            if (obj_status) { for (var cf = 0; cf < obj_status.length; cf++) { if (obj_status[cf].checked) { dd_statuste = obj_status[cf].value; } } };
            if (Board.StatGO("CHK", e1, Board_Num) == false) { return; };

            var Ncode__ = BoardTEMP_Ncode[Board_Num];
            var write_id__ = document.getElementById("txt_write_id_").value;
            var write_name__ = document.getElementById("txt_write_name_").value;
            var write_nick__ = document.getElementById("txt_write_nick_").value;
            var Mcontent__ = FCKeditor.prototype.innerHTML("txt_Mcontent_"); //FCKeditorAPI.GetInstance('txt_Mcontent_').GetXHTML(true);
            var Docid__ = document.getElementById("txt_Docid_").value.trim();

            ifr.document.getElementById("TXT_BoardZ").value = BoardZ_C.BoardZ_GET(Ncode__);

            ifr.document.getElementById("TXT_Ncode").value = Ncode__;
            ifr.document.getElementById("TXT_write_id").value = write_id__;
            ifr.document.getElementById("TXT_write_name").value = write_name__;
            ifr.document.getElementById("TXT_write_nick").value = write_nick__;
            ifr.document.getElementById("TXT_Mcontent").value = Mcontent__;
            ifr.document.getElementById("TXT_Docid").value = "STATUS";
            ifr.document.getElementById("TXT_PlusField10").value = Docid__;
            ifr.document.getElementById("TXT_pwd").value = dd_statuste;



            ifr.document.forms[0].submit();
        }
        else if (e == "CHK") {

            var oEditor = FCKeditorAPI.GetInstance('txt_Mcontent_');
            if (oEditor) {
                try {
                    var editContents = FCKeditor.prototype.innerTEXT("txt_Mcontent_"); //oEditor.EditorDocument.body.innerText;
                    if (editContents.split(" ").join("") == "") { alert("내용을 입력하세요."); try { oEditor.EditorDocument.body.focus(); } catch (err) { } return false; }
                    var M_HTML = oEditor.GetXHTML(true);
                    if (M_HTML != "") {
                        if (BoardTEMP_BadnessWordUsed[Board_Num] == 1 && BoardTEMP_BadnessWord[Board_Num] != "") {
                            var m_retx = CHE_BADWORD(M_HTML, BoardTEMP_BadnessWord[Board_Num]);
                            if (m_retx != "") { alert("[" + m_retx + "]을 불량단어로 등록되어있어서 \n\n저장이 불가하므로 변경해 주십시오."); try { oEditor.EditorDocument.body.focus(); } catch (err) { } return false; }
                        }
                    }
                } catch (err) { }
            }

            var Byte__ = ""; try { var ifrfile = document.getElementById("ifrFileUpload").contentWindow; Byte__ = ifrfile.document.getElementById("sUploadSize").innerHTML; } catch (err) { }
            if (BoardTEMP_FileUpUsed[Board_Num] == 1) { return Board.FILESGO('chk2'); ; } else { return true; }
        }
    }
};



var BoardLinkS = {
    twitter_ID: "",
    LINK: function (e1, e2) {
        if (e2 == null) e2 = "";
        var url = ""; /*경로*/
        var msg = ""; /*제목*/
        var tag = ""; /*Tag*/
        var summary = ""; /*요약글*/
        var writer = ""; /*작성자*/
        var thumbnail = ""; /*미리보기*/
        url = (location.port == "" || location.port == 80 ? "http://" : "https://") + location.hostname + PageBaseInfo.Auction + "?T=C&sn=" + RequestS.sn;

        if (document.getElementById("SNS_TITLE")) msg = document.getElementById("SNS_TITLE").value;
        if (document.getElementById("SNS_TAG")) tag = document.getElementById("SNS_TAG").value;
        if (document.getElementById("SNS_SUMMARY")) summary = document.getElementById("SNS_SUMMARY").value;
        if (document.getElementById("SNS_WRITER")) writer = document.getElementById("SNS_WRITER").value;
        if (document.getElementById("SNS_THUMBNAIL")) thumbnail = document.getElementById("SNS_THUMBNAIL").value;

        if (e1 == "t") {
            BoardLinkS.twitter_ID = e2;
            if (BoardLinkS.twitter_ID == "") {
                href = "http://twitter.com/home?status=" + encodeURIComponent(msg) + " " + encodeURIComponent(url);
                var a = window.open(href, 'twitter', '');
                if (a) {
                    a.focus();
                }
            }
            else {
                href = "http://twitter.com/share?url=" + encodeURIComponent(url) + "&via=" + BoardLinkS.twitter_ID + "&text=" + encodeURIComponent(url);
                var a = window.open(href, 'twitter', '');
                if (a) {
                    a.focus();
                }
            }
        }
        else if (e1 == "f") { /*facebook : /img_bbs/img_link/f.gif */
            href = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(url) + "&t=" + encodeURIComponent(msg);
            var a = window.open(href, 'facebook', '');
            if (a) {
                a.focus();
            }
        }
        else if (e1 == "me") { /*me2day : /img_bbs/img_link/m.gif */
            href = "http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(msg) + " \"" + encodeURIComponent(url) + "\":" + encodeURIComponent(url) + "&new_post[tags]=" + encodeURIComponent(tag);
            var a = window.open(href, 'me2Day', '');
            if (a) {
                a.focus();
            }
        }
        else if (e1 == "cy") { /*cyworld : /img_bbs/img_link/ico_clog.gif */
            href = "http://csp.cyworld.com/bi/bi_recommend_pop.php?url=" + encodeURIComponent(url) + "&thumbnail=" + encodeURIComponent(thumbnail)
            + "&summary=" + encodeURIComponent(summary)
            + "&writer=" + encodeURIComponent(writer);
            var a = window.open(href, 'clog', 'width=400, height=364, scrollbars=no, resizable=no');
            if (a) {
                a.focus();
            }
        }
        else if (e1 == "g") { /*google+ : /img_bbs/img_link/g.gif */
            href = "http://www.google.com/bookmarks/mark?op=add&title=" + encodeURIComponent(msg) + "&bkmk=" + encodeURIComponent(url);
            var a = window.open(href, 'google', '');
            if (a) {
                a.focus();
            }
        }

    }
};