



var BOARD_MAIN_TYPE1 = new Array();
var BOARD_MAIN_TYPE2 = new Array();
var BOARD_MAIN_TYPE3 = new Array();
var BOARD_MAIN_TYPE4 = new Array();
var BOARD_MAIN_TYPE5 = new Array();
var BOARD_MAIN_TYPE6 = new Array();
var BOARD_MAIN_TYPE7 = new Array();
var nummm_BOARD_MAIN = 0;
var BoardMain = {
    obj: null,
    Load: function(e1, e2, e3, e4, e5) {
        var Seed_n = false;
        for (var nn = 0; nn < Board_Seed.length; nn++) {
            if (Board_Seed[nn] == e1) {
                Seed_n = true;
                break;
            }
        }
        if (Seed_n == true) {

            nummm_BOARD_MAIN++;
            BOARD_BACK_GROUNDS(e1, TEMPLATE.LOAD(e1, "bgint"), TEMPLATE.LOAD(e1, "bgcolor"), TEMPLATE.LOAD(e1, "bgimage"));
            var BTN_STYLE = Array("WriteBTN", "LIstBTN", "EditeBTN", "DeleteBTN", "CommentBTN", "SaveBTN", "CancelBTN", "FindBTN", "FindCancelBTN", "CommentInputBTN", "CommentDeleteBTN", "CommentEditeBTN", "CommentShowBTN", "RecommendBTN", "DetailedBTN", "VacantBTN", "CommentCountBTN", "SelectListViewBTN", "HiddenBTN", "Point5BTN", "Point4BTN", "Point3BTN", "Point2BTN", "Point1BTN");
            var temp_style = '';

            for (var nn = 0; nn < BoardTEMPP.length; nn++) {
                var obj11 = eval("BoardTEMP_" + BoardTEMPP[nn])
                var obj22 = eval("Board_" + e1 + "_" + BoardTEMPP[nn]);
                obj11[nummm_BOARD_MAIN] = obj22;
            }

            var temp_s = TEMPLATE.LOAD(e1, "ListCommentFontColor");
            if (temp_s.trim() != "")/*댓글카운터글자색상*/{ temp_style += ".ListCommentFontColor_VN {color: " + temp_s.trim() + ";}"; } else { temp_style += ".ListCommentFontColor_VN {color: #f59392;}"; }

            for (var V_ = 0; V_ < BTN_STYLE.length; V_++) {
                temp_style += "." + BTN_STYLE[V_] + "_VN"
                temp_style += "{";
                temp_style += "	cursor: hand; position: relative; ";
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

            if (BoardTEMP_NewMark[nummm_BOARD_MAIN] != "") {
                if (BoardTEMP_NewMarkUsed[nummm_BOARD_MAIN] == 1) {
                    temp_style += ".NewMark_" + BoardTEMP_Ncode[nummm_BOARD_MAIN].replaceAll("{", "").replaceAll("}", "") + "_VN";
                    temp_style += "{";
                    temp_style += "	cursor: hand; position: relative; ";
                    temp_style += "	width:" + BoardTEMP_NewMark_W[nummm_BOARD_MAIN] + "px;";
                    temp_style += "	height:" + BoardTEMP_NewMark_H[nummm_BOARD_MAIN] + "px;";
                    temp_style += "}";
                    temp_style += ".NewMark_" + BoardTEMP_Ncode[nummm_BOARD_MAIN].replaceAll("{", "").replaceAll("}", "") + "_VN img";
                    temp_style += "{";
                    temp_style += "	width:" + BoardTEMP_NewMark_W[nummm_BOARD_MAIN] + "px;";
                    temp_style += "	height:" + BoardTEMP_NewMark_H[nummm_BOARD_MAIN] + "px;";
                    temp_style += "	background-image: url(" + BoardTEMP_NewMark[nummm_BOARD_MAIN] + ")  ;";
                    temp_style += "	background-repeat:no-repeat;background-position: center;";
                    temp_style += "}";
                }
                else {
                    temp_style += ".NewMark_" + BoardTEMP_Ncode[nummm_BOARD_MAIN].replaceAll("{", "").replaceAll("}", "") + "_VN"
                    temp_style += "{";
                    temp_style += "	display:none ;";
                    temp_style += "}";
                }
            }

            if (BoardTEMP_HotMark[nummm_BOARD_MAIN] != "") {
                if (BoardTEMP_HotMakrUsed[nummm_BOARD_MAIN] == 1) {
                    temp_style += ".HotMark_" + BoardTEMP_Ncode[nummm_BOARD_MAIN].replaceAll("{", "").replaceAll("}", "") + "_VN";
                    temp_style += "{";
                    temp_style += "	cursor: hand; position: relative; ";
                    temp_style += "	width:" + BoardTEMP_HotMark_W[nummm_BOARD_MAIN] + "px;";
                    temp_style += "	height:" + BoardTEMP_HotMark_H[nummm_BOARD_MAIN] + "px;";
                    temp_style += "}"
                    temp_style += ".HotMark_" + BoardTEMP_Ncode[nummm_BOARD_MAIN].replaceAll("{", "").replaceAll("}", "") + "_VN img";
                    temp_style += "{ ";
                    temp_style += "	width:" + BoardTEMP_HotMark_W[nummm_BOARD_MAIN] + "px;";
                    temp_style += "	height:" + BoardTEMP_HotMark_H[nummm_BOARD_MAIN] + "px;";
                    temp_style += "	background-image: url(" + BoardTEMP_HotMark[nummm_BOARD_MAIN] + ")  ;";
                    temp_style += "	background-repeat:no-repeat;background-position: center;";
                    temp_style += "}";
                }
                else {
                    temp_style += ".HotMark_" + BoardTEMP_Ncode[nummm_BOARD_MAIN].replaceAll("{", "").replaceAll("}", "") + "_VN"
                    temp_style += "{";
                    temp_style += "	display:none ;";
                    temp_style += "}";
                }
            }


            if (BoardTEMP_AdminDevice[nummm_BOARD_MAIN] == 1) {
                temp_style += ".ADMIN1_VN{display:none;}.ADMIN2_VN{}";
            } else {
                if (v_board_Admin == 0) {
                    temp_style += ".ADMIN1_VN{display:none;}.ADMIN2_VN{}";
                }
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
            }


            document.write('<style>' + temp_style + '</style>');


            BOARD_MAIN_TYPE1[nummm_BOARD_MAIN] = e1;
            BOARD_MAIN_TYPE2[nummm_BOARD_MAIN] = e2;
            BOARD_MAIN_TYPE3[nummm_BOARD_MAIN] = e3;
            BOARD_MAIN_TYPE4[nummm_BOARD_MAIN] = e4;
            BOARD_MAIN_TYPE5[nummm_BOARD_MAIN] = e5;
            BOARD_MAIN_TYPE6[nummm_BOARD_MAIN] = nummm_BOARD_MAIN;
            BOARD_MAIN_TYPE7[nummm_BOARD_MAIN] = 1;
            var TEMP_LIL = '';
            TEMP_LIL += BOARD_MAIN_TYPE1[nummm_BOARD_MAIN] + ":";
            TEMP_LIL += BOARD_MAIN_TYPE2[nummm_BOARD_MAIN] + ":";
            TEMP_LIL += BOARD_MAIN_TYPE3[nummm_BOARD_MAIN] + ":";
            TEMP_LIL += BOARD_MAIN_TYPE4[nummm_BOARD_MAIN] + ":";
            TEMP_LIL += BOARD_MAIN_TYPE5[nummm_BOARD_MAIN] + ":";
            TEMP_LIL += BOARD_MAIN_TYPE6[nummm_BOARD_MAIN] + ":";

            document.write("<span id='span0001_" + e1 + "_" + nummm_BOARD_MAIN + "' ></span>");
            document.write("<span id=\"span0001_" + e1 + "_" + nummm_BOARD_MAIN + "_M\" >"
                + "<iframe title=\"매인 페이지 보드 관련\" "
                + "   id=\"ifr_Schedule_DATA_" + nummm_BOARD_MAIN + "\" style=\"display:none;\" "
                + " name=\"ifr_Schedule_DATA_" + nummm_BOARD_MAIN + "\" src=\"/common/Main/Board.aspx?CODE=" + TEMP_LIL + "&pdn=" + XncodeUR(PageBaseInfo.domain) + "\""
                + " frameborder=\"0\" marginwidth=\"0\" width=\"100%\" height=\"300\" scrolling=\"yes\"></iframe></span>");
            document.write("<span id='span0002_" + e1 + "_" + nummm_BOARD_MAIN + "' ></span>");
        }
        else {
            document.write("[" + e1 + "]존재하지 않는 보드입니다.");
        }
    },
    MAKEFRAME: function() {
        var TEMP_LIL = "";
        for (var NN = 1; NN <= nummm_BOARD_MAIN; NN++) {
            TEMP_LIL += BOARD_MAIN_TYPE1[NN] + ":";
            TEMP_LIL += BOARD_MAIN_TYPE2[NN] + ":";
            TEMP_LIL += BOARD_MAIN_TYPE3[NN] + ":";
            TEMP_LIL += BOARD_MAIN_TYPE4[NN] + ":";
            TEMP_LIL += BOARD_MAIN_TYPE5[NN] + ":";
            TEMP_LIL += BOARD_MAIN_TYPE6[NN] + ":";
        }

        if (nummm_BOARD_MAIN > 1 && TEMP_LIL != "") {
            var obj_100001 = document.getElementById("span0001_" + BOARD_MAIN_TYPE1[1] + "_1_M");

            obj_100001.innerHTML = '<iframe title=\"매인 페이지 일정 관련\"  id="ifr_Schedule_DATA" style="display:none;" '
                + ' name="ifr_Schedule_DATA" src="/common/Main/Board.aspx'
                + '?CODE=' + TEMP_LIL + "&pdn=" + XncodeUR(PageBaseInfo.domain)
                + '" frameborder=0 marginwidth=0 width=100% height=300 scrolling=yes></iframe>';
        }
    },
    LOADTABLE: function() {
        ifr = document.getElementById("ifr_Schedule_DATA").contentWindow;
        for (var NN = 1; NN <= nummm_BOARD_MAIN; NN++) {
            document.getElementById("span0001_" + BOARD_MAIN_TYPE1[NN] + "_" + NN + "").innerHTML = ""
            + ifr.document.getElementById("AREA_" + NN).value;
        }
    },
    LOADTABLE2: function(e1) {
        try {
            ifr = document.getElementById("ifr_Schedule_DATA_" + e1).contentWindow;
            document.getElementById("span0001_" + BOARD_MAIN_TYPE1[e1] + "_" + e1 + "").innerHTML = ""
            + ifr.document.getElementById("AREA_" + e1).value;
        } catch (err) {   
        }
    },
    LOADTABLE3: function(e1) {
        try {
            ifr = document.getElementById("ifr_Schedule_DATA_" + e1).contentWindow;
            singletext = ifr.document.getElementById("AREA_" + e1).value.split("¡"); 
            var vInnerHTML = "";
            if (document.all) {
                vInnerHTML = '<div align=center onmouseover="sstep=0;" onmouseout="sstep=' + sstep_tmp + ';" style="position:absolute;width:' + (swidth * show_items) + 'px;height:' + (sheight) + 'px;clip:rect(0px, ' + (swidth * show_items) + 'px, ' + (sheight) + 'px, 0px); ">';

                var tleft = 0
                for (i = 0; i <= show_items; i++) { 

                    var vLeft = i * swidth;


                    vInnerHTML += '<div align="center" id="slider_' + i + '" style="position:absolute;left:' + vLeft + 'px;width:100px;top:1px;">';
                    vInnerHTML += singletext[i];
                    vInnerHTML += '</div>';

                }

                vInnerHTML += '</div>';
            }

            document.getElementById("span0002_" + BOARD_MAIN_TYPE1[e1] + "_" + e1 + "").innerHTML = vInnerHTML;
            /*window.onload = move_left_start;*/
            setTimeout("move_left_start()",  stop_time);

        } catch (err) {
            alert(err);
        }
    }
}




var swidth = 112;
var sheight = 100;
var show_items = 4;

var stop_time = 2000;
var sspeed = 2;
var sstep = 1;

var new_item = show_items;
var sstep_tmp = sstep;


function move_left_start() {
    for (i = 0; i <= show_items; i++)
        setTimeout("move_left(" + i + ", " + swidth + ")", stop_time)
}


function move_left(id, cnt) {
    obj = document.getElementById('slider_' + id)
    if (obj) {
        obj.style.pixelLeft -= sstep
        cnt -= sstep
        if (cnt > 0) {
            setTimeout("move_left(" + id + ", " + cnt + ")", sspeed)
        }
        else if (obj.style.pixelLeft < -sstep) {
            obj.style.pixelLeft = show_items * swidth
            new_item++
            if (new_item == (singletext.length - 1)) new_item = 0

            if (typeof singletext[new_item] == null) {
                new_item = 0;
            }
            obj.innerHTML = singletext[new_item]
            move_left_start()

        }
    }
}





var ContentMain = {
    MAIN_TYPE1: new Array(),
    MAIN_TYPE2: new Array(),
    MAIN_TYPE3: new Array(),
    Load: function(e1, e2, e3) {
        var NUMM = ContentMain.MAIN_TYPE1.length;
        ContentMain.MAIN_TYPE1[NUMM] = e1;
        ContentMain.MAIN_TYPE2[NUMM] = e2;
        ContentMain.MAIN_TYPE3[NUMM] = e3;

        var TEMP_LIL = '';
        TEMP_LIL += ContentMain.MAIN_TYPE1[NUMM] + ":";
        TEMP_LIL += ContentMain.MAIN_TYPE2[NUMM] + ":";
        TEMP_LIL += ContentMain.MAIN_TYPE3[NUMM] + ":";
        TEMP_LIL += NUMM + ":";

        document.write("<span id='ContentMain1_" + NUMM + "' ></span>");
        document.write("<span id='ContentMain2_" + NUMM + "' >"
        + "<iframe "
        + "   id=\"ContentMain3_" + NUMM + "\" style=\"display:none;\" "
        + " name=\"ContentMain3_" + NUMM + "\" src=\"/common/CMain/CBoard.aspx?CODE=" + TEMP_LIL + "&pdn=" + XncodeUR(PageBaseInfo.domain) + "\""
        + " frameborder=\"0\" marginwidth=\"0\" width=\"100%\" height=\"300\" scrolling=\"yes\"></iframe></span>");
        document.write("<span id='ContentMain4_" + NUMM + "' ></span>");
    },
    LOADTABLE: function(e1) {
        try {
            ifr = document.getElementById("ContentMain3_" + e1).contentWindow;
            sXingletext = ifr.document.getElementById("AREA_1").value.split("¡");
            var vInnerHTML = "";
            if (document.all) {
                vInnerHTML = '<div align=center onmouseover="sXstep=0;" onmouseout="sXstep=' + sXstep_tmp + ';" style="position:absolute;width:' + (sXwidth * sXhow_items) + 'px;height:' + (sXheight) + 'px;clip:rect(0px, ' + (sXwidth * sXhow_items) + 'px, ' + (sXheight) + 'px, 0px); ">';

                var tleft = 0
                for (i = 0; i <= sXhow_items; i++) {

                    var vLeft = i * sXwidth;


                    vInnerHTML += '<div align="center" id="sXlider_' + i + '" style="position:absolute;left:' + vLeft + 'px;width:100px;top:1px;">';
                    vInnerHTML += sXingletext[i];
                    vInnerHTML += '</div>';

                }

                vInnerHTML += '</div>';
            }

            document.getElementById("ContentMain1_"+e1).innerHTML = vInnerHTML;
            /*window.onload = move_left2_start;*/
            setTimeout("move_left2_start()",  sXtop_time);

        } catch (err) {
            alert(err);
        }
    }
}



var sXwidth = 112;
var sXheight = 120;
var sXhow_items = 4;

var sXtop_time = 2000;
var sXspeed = 2;
var sXstep = 1;

var new_item = sXhow_items;
var sXstep_tmp = sXstep;


function move_left2_start() {
    for (i = 0; i <= sXhow_items; i++)
        setTimeout("move_left2(" + i + ", " + sXwidth + ")", sXtop_time)
}


function move_left2(id, cnt) {
    obj = document.getElementById('sXlider_' + id)
    if (obj) {
        obj.style.pixelLeft -= sXstep
        cnt -= sXstep
        if (cnt > 0) {
            setTimeout("move_left2(" + id + ", " + cnt + ")", sXspeed)
        }
        else if (obj.style.pixelLeft < -sXstep) {
            obj.style.pixelLeft = sXhow_items * sXwidth
            new_item++
            if (new_item == (sXingletext.length - 1)) new_item = 0

            if (typeof sXingletext[new_item] == null) {
                new_item = 0;
            }
            obj.innerHTML = sXingletext[new_item]
            move_left2_start()
        }
    }
}





var MainINFO = {
    obj_sp1: "",
    obj_sp2: "",
    obj_sp3: "",
    obj_sp4: null,
    obj_sp5: null,
    week: Array("일", "월", "화", "수", "목", "금", "토", "일"),
    Load: function(e1) {
        if (MainINFO.obj_sp1 == "") {
            MainINFO.obj_sp1 = RequestS.MEMMSG1;
            MainINFO.obj_sp2 = RequestS.MEMMSG2;
            MainINFO.obj_sp3 = RequestS.MEMMSG3;
        }
        if (e1 == "sp1") {
            document.write("<span id='Main_sp1'>" + MainINFO.obj_sp2 + "</span>");
        }
        else if (e1 == "sp2") {
            var m_s = MainINFO.obj_sp1.split('-');
            MainINFO.obj_sp4 = new Date((m_s[0]), (m_s[1]) - 1, (m_s[2]), (m_s[3]), (m_s[4]), (m_s[5]));
            MainINFO.obj_sp1 = MainINFO.TimeRET(MainINFO.obj_sp4);

            document.write("<span id='Main_sp2'>" + MainINFO.obj_sp1 + "</span>");
        }
        else if (e1 == "sp3") {
            var m_s = MainINFO.obj_sp3.split('-');
            MainINFO.obj_sp5 = new Date((m_s[0]), (m_s[1]) - 1, (m_s[2]), (m_s[3]), (m_s[4]), (m_s[5]));

            MainINFO.obj_sp3 = MainINFO.TimeRET2(MainINFO.obj_sp5);
            document.write("<span id='Main_sp3'>" + MainINFO.obj_sp3 + "</span>");
            setTimeout("MainINFO.Load2();", 1000);
        }
    },
    Load2: function() {
        MainINFO.obj_sp5.setTime((MainINFO.obj_sp5.getTime()) + 1000);
        MainINFO.obj_sp3 = MainINFO.TimeRET2(MainINFO.obj_sp5);
        document.getElementById("Main_sp3").innerHTML = MainINFO.obj_sp3;
        setTimeout("MainINFO.Load2();", 1000);
    },
    TimeRET: function(today) {
        var hours, minutes, seconds, ap;
        var intHours, intMinutes, intSeconds;
        //var basedate = today.getYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
        var basedate = today.getYear() + "/";
        if ((today.getMonth() + 1) < 10)
            basedate += "0";
        basedate += (today.getMonth() + 1);
        basedate += "/";
        if ((today.getDate()) < 10)
            basedate += "0";
        basedate += today.getDate();


        intHours = today.getHours();
        intMinutes = today.getMinutes();
        intSeconds = today.getSeconds();

        switch (intHours) {
            case 0:
                intHours = 12;
                hours = intHours + ":";
                ap = "A.M.";
                break;
            case 12:
                hours = intHours + ":";
                ap = "P.M.";
                break;
            case 24:
                intHours = 12;
                hours = intHours + ":";
                ap = "A.M.";
                break;
            default:
                if (intHours > 12) {
                    intHours = intHours - 12;
                    hours = intHours + ":";
                    ap = "오후 ";
                    break;
                }
                if (intHours < 12) {
                    hours = intHours + ":";
                    ap = "오전 ";
                }
        }
        if (parseInt(hours) < 10)
            hours = "0" + hours + "";


        if (intMinutes < 10) {
            minutes = "0" + intMinutes + ":";
        } else {
            minutes = intMinutes + ":";
        }

        if (intSeconds < 10) {
            seconds = "0" + intSeconds + " ";
        } else {
            seconds = intSeconds + " ";
        }


        timeString = "" + basedate + "(" + MainINFO.week[today.getDay()] + ") <br/>" + ap + hours + minutes + seconds + "";
        return timeString;
    },
    TimeRET2: function(today) {
        var hours, minutes, seconds, ap;
        var intHours, intMinutes, intSeconds;
        //var basedate = today.getYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        var basedate = today.getYear() + "/";
        if ((today.getMonth() + 1) < 10)
            basedate += "0";
        basedate += (today.getMonth() + 1);
        basedate += "/";
        if ((today.getDate()) < 10)
            basedate += "0";
        basedate += today.getDate();

        intHours = today.getHours();
        intMinutes = today.getMinutes();
        intSeconds = today.getSeconds();
        switch (intHours) {
            case 0:
                intHours = 12;
                hours = intHours + ":";
                ap = "A.M.";
                break;
            case 12:
                hours = intHours + ":";
                ap = "P.M.";
                break;
            case 24:
                intHours = 12;
                hours = intHours + ":";
                ap = "A.M.";
                break;
            default:
                if (intHours > 12) {
                    intHours = intHours - 12;
                    hours = intHours + ":";
                    ap = "오후 ";
                    break;
                }
                if (intHours < 12) {
                    hours = intHours + ":";
                    ap = "오전 ";
                }
        }
        if (parseInt(hours) < 10)
            hours = "0" + hours + "";


        if (intMinutes < 10) {
            minutes = "0" + intMinutes + ":";
        } else {
            minutes = intMinutes + ":";
        }

        if (intSeconds < 10) {
            seconds = "0" + intSeconds + " ";
        } else {
            seconds = intSeconds + " ";
        }

        timeString = "<strong>" + ap + hours + minutes + seconds + "</strong>" + basedate + " (" + MainINFO.week[today.getDay()] + ")";
        return timeString;
    }
}