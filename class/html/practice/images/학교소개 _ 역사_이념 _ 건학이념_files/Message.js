

function AllCbx_ALL(obj) {
    var affectvalue = obj.checked;
    if (typeof (document.all.ms) == "undefined") {
        return;
    }
    if (typeof (document.all.ms.length) == "undefined") {
        document.all.ms.checked = affectvalue;
    } else {
        for (i = 0; i < document.all.ms.length; i++) {
            document.all.ms[i].checked = affectvalue;
        }
    }
}
function alterString(str, before, after) {

    var returnStr = "";

    for (i = 0; i < str.length; i++) {

        value = str.charAt(i);

        index = before.indexOf(value);

        if (index >= 0) value = after.charAt(index);

        returnStr += value;

    }

    return returnStr;

}



function KeyUpEvent(obj) {
    var bytecontrol = document.getElementById("txt_Mconent");
    ByteView(bytecontrol);
}
function ByteView(contentobj) {
    var len = 400;
    if (contentobj.value.length > len) {
        alert("내용은(는) " + len + "자까지 입력가능합니다.");
        contentobj.value = contentobj.value.substring(0, len);
    }
    document.getElementById("textlimit").value = contentobj.value.length;
}


function ToLower(arg) {


    var str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var str2 = "abcdefghijklmnopqrstuvwxyz";

    return alterString(arg, str1, str2);

}


function MM_openBrWindowMP(theURL, winName, features) { //v2.0
    window.open(theURL, winName, features);
}
function MM_openBrWindowMP2(theURL, winName, features) { //v2.0
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
}

String.prototype.trim = function() { return this.replace(/(^\s*)|(\s*$)/g, ""); }


String.prototype.replaceAll = function(str1, str2) {
    var temp_str = "";
    if (this.trim() != "" && str1 != str2) {

        temp_str = this.trim();
        while (temp_str.indexOf(str1) > -1) {
            temp_str = temp_str.replace(str1, str2);
        }
    }
    return temp_str;
}
String.prototype.replaceAll2 = function(str1, str2) {
    var temp_str = this.trim();
    temp_str = temp_str.replace(eval("/" + str1 + "/gi"), str2);
    return temp_str;
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

var remain_remain = '';
function CheckStrLen(nametxt, maxlen) {
    var temp; //들어오는 문자값...
    var msglen;
    msglen = maxlen * 2;

    l = nametxt.value.length;
    tmpstr = "";

    if (l == 0)
        remain_remain = maxlen * 2;
    else {
        for (k = 0; k < l; k++) {
            temp = nametxt.value.charAt(k);

            if (escape(temp).length > 4)
                msglen -= 2;
            else
                msglen--;

            if (msglen < 0) {
                alert("총 영문 " + (maxlen * 2) + "자 한글 " + maxlen + "자 까지 가능합니다.");
                nametxt.value = tmpstr;
                break;
            }
            else {
                remain_remain = msglen;
                tmpstr += temp;
            }
        }
    }
}
var Msg_PAGE = new Array('msg_box.aspx', 'msg_box_get.aspx', 'msg_box_send.aspx', 'msg_send.aspx');

var Message_Submit = 0;
var Message = {

    obj: null,
    OPEN: function(e1, e2) {
        if (typeof (e2) == "undefined") {
            e2 = "";
        }
        var OPEN_tr = true;
        var locat = ToLower(location.href);
        for (var NN = 0; NN < Msg_PAGE.length; NN++) {
            if (locat.indexOf(Msg_PAGE[NN]) > -1) {
                OPEN_tr = false;
            }
        }




        if (e1 == "GETBOX") {/*받은쪽지함 */
            if (OPEN_tr == true) {
                MM_openBrWindowMP2('/COMMON/Message/msg_box_get.aspx', 'NwdMsg01', 'width=600,height=650');
            }
            else {
                location.href = '/COMMON/Message/msg_box_get.aspx';
            }
        }
        else if (e1 == "SENDBOX") {/*보낸쪽지함*/
            if (OPEN_tr == true) {
                MM_openBrWindowMP2('/COMMON/Message/msg_box_send.aspx', 'NwdMsg01', 'width=600,height=650');
            }
            else {
                location.href = '/COMMON/Message/msg_box_send.aspx';
            }
        }
        else if (e1 == "MSGBOX") { /*쪽지보관함*/
            if (OPEN_tr == true) {
                MM_openBrWindowMP2('/COMMON/Message/msg_box.aspx', 'NwdMsg01', 'width=600,height=650');
            }
            else {
                location.href = '/COMMON/Message/msg_box.aspx';
            }
        }
        else if (e1 == "SEND") { /*쪽지보내기*/
            if (OPEN_tr == true) {
                if (e2 == "") { MM_openBrWindowMP2('/COMMON/Message/msg_send.aspx', 'NwdMsg01', 'width=600,height=650'); }
                else { MM_openBrWindowMP2('/COMMON/Message/msg_send.aspx?id=' + e2, 'NwdMsg01', 'width=600,height=650'); }
            }
            else {
                if (e2 == "") { location.href = '/COMMON/Message/msg_send.aspx'; }
                else { location.href = '/COMMON/Message/msg_send.aspx?id=' + e2; }
            }
        }
        else if (e1 == "FINDMEM") {/*회원검색*/
            MM_openBrWindowMP2('/COMMON/Message/search_mem.aspx', 'NwdMsg02', 'width=400,height=400');
        }
        else if (e1 == "READ") {/*쪽지읽기*/
            MM_openBrWindowMP2('/COMMON/Message/msg_read.aspx?sn=' + e2, 'NwdMsg03', 'width=600,height=450');
        }
    },
    FINDMEM: function() {
        var key__ = document.getElementById("txt_key").value;
        if (key__ == "") {
            alert("검색어을 입력하여 주십시오.");
            return;
        }
        document.forms[0].submit();
    },
    FINDMEMIN: function() {
        var m_levels = GetSelectValue_Plus(0, "ms");
        if (m_levels == "") { alert("선택하여 주십시요."); }
        else {
            try { window.opener.Message.FINDTXT(m_levels); } catch (err) { }
            try { window.close(); } catch (err) { }
        }
    },
    FINDTXT: function(e) {
        try {
            var arr1 = e.split('↓');
            var arr2 = document.getElementById("txt_member").value.split(',');
            for (var nn = 0; nn < arr2.length; nn++) {
                if (arr2[nn] != "") {
                    for (var nn2 = 0; nn2 < arr1.length; nn2++) {
                        if (arr2[nn] == arr1[nn2]) {
                            arr1[nn2] = '';
                        }
                    }
                }
            }
            for (var nn = 0; nn < arr2.length; nn++) {
                for (var nn2 = nn + 1; nn2 < arr2.length; nn2++) {
                    if (arr2[nn] == arr2[nn2]) {
                        arr2[nn] = '';
                        break;
                    }
                }
            }
            var TEMP_ = '';

            for (var nn = 0; nn < arr1.length; nn++) {

                if (arr1[nn] != "") {
                    if (TEMP_ != "") {
                        TEMP_ += ",";
                    }
                    TEMP_ += arr1[nn];
                }
            }
            for (var nn = 0; nn < arr2.length; nn++) {

                if (arr2[nn] != "") {
                    if (TEMP_ != "") {
                        TEMP_ += ",";
                    }
                    TEMP_ += arr2[nn];
                }
            }
            document.getElementById("txt_member").value = TEMP_;

        } catch (err) { }
    },
    Send: function() {
        if (document.getElementById("txt_member").value.trim() == "") {
            alert("받는사람을 입력하여 주십시요.");
            document.getElementById("txt_member").focus();
            return false;
        }
        if (document.getElementById("txt_title").value.trim() == "") {
            alert("제목을 입력하여 주십시요.");
            document.getElementById("txt_title").focus();
            return false;
        }
        if (document.getElementById("txt_Mconent").value.trim() == "") {
            alert("내용을 입력하여 주십시요.");
            document.getElementById("txt_Mconent").focus();
            return false;
        }
        if (Message_Submit != 0) {
            return false;
        }
        Message_Submit++;
        if (ifrFileUpload.sUploadSize.innerHTML != "0 Byte") {
            ifrFileUpload.NfUpload.FileUpload();
            return false;
        }
        return true;
    },
    Send3: function() {
        document.forms[0].submit(); 
    },
    READ: function(e1) {
        Message.OPEN('READ', e1);
    },
    SEND2: function(e1) {
        Message.OPEN('SEND', e1);
    },
    LINK: function(e1, e2) {
        if (e1 == "SAVE") {
            location.href = 'msg_read.aspx?sn=' + e2 + '&p=1';
        }
        else if (e1 == "DEL") {
            location.href = 'msg_read.aspx?sn=' + e2 + '&p=2';
        }
    },
    DELLIST: function() {
        var m_levels = GetSelectValue_Plus(0, "ms");
        if (m_levels == "") { alert("선택하여 주십시요."); return; }

        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }

        if (confirm('정말로 삭제하겠습니까?')) {
            location.href = m_page + '?del=' + m_levels + "&ret=" + (location.href).replaceAll("?", "*").replaceAll("&", "^");
        }
    },
    SAVELIST: function() {
        var m_levels = GetSelectValue_Plus(0, "ms");
        if (m_levels == "") { alert("선택하여 주십시요."); return; }
        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        location.href = m_page + '?save=' + m_levels + "&ret=msg_box.aspx";
    },
    FILESDOWNS: function(e, e1) /*파일 관련*/
    {
        location.href = "/COMMON/NFUpload/FILELOAD.aspx?Docid=" + e1 + "&Num=" + e;
    }
}


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

function msgposit4(event) {
    message_fnn();
    if (document.all) {
        message_pop.style.posLeft = event.x + 4 + document.documentElement.scrollLeft;
        message_pop.style.posTop = event.y + 10 + document.documentElement.scrollTop;
        if (fs_absolutePositionY != null) {
            message_pop.style.posTop = fs_absolutePositionY + 30;
        }
    }
    else {
        document.getElementById("message_pop").style.left = (event.clientX + 4 + document.documentElement.scrollLeft) + "px";
        document.getElementById("message_pop").style.top = (event.clientY + 10 + document.documentElement.scrollTop) + "px";
    }
}
function msghide4() {
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
        document.body.appendChild(blankdiv);
    } 
}