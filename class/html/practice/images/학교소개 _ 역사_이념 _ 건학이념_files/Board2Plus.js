var BoardSubmit = 0;

var BoardTEMP_title = new Array();
var BoardTEMP_Ncode = new Array();
var BoardTEMP_TypeView = new Array();
var BoardTEMP_Align = new Array();
var BoardTEMP_Twidth = new Array();
var BoardTEMP_TemplateNcode = new Array();
var BoardTEMP_WriterDevice = new Array();
var BoardTEMP_AdminDevice = new Array();
var BoardTEMP_NoticeDevice = new Array();
var BoardTEMP_CateUsed = new Array();
var BoardTEMP_CateItem = new Array();
var BoardTEMP_CateItem2 = new Array();
var BoardTEMP_TitleCut = new Array();
var BoardTEMP_Page = new Array();
var BoardTEMP_NewMarkUsed = new Array();
var BoardTEMP_NewMarkTime = new Array();
var BoardTEMP_NewMark = new Array();
var BoardTEMP_NewMark_W = new Array();
var BoardTEMP_NewMark_H = new Array();
var BoardTEMP_HotMakrUsed = new Array();
var BoardTEMP_HotMarkCount = new Array();
var BoardTEMP_HotMark = new Array();
var BoardTEMP_HotMark_W = new Array();
var BoardTEMP_HotMark_H = new Array();
var BoardTEMP_NoticePrint = new Array();
var BoardTEMP_ItemHide = new Array();
var BoardTEMP_ImgCutDownWidth = new Array();
var BoardTEMP_ImgCutDownHight = new Array();
var BoardTEMP_CateViewType = new Array();
var BoardTEMP_PostSort = new Array();
var BoardTEMP_CommentSort = new Array();
var BoardTEMP_PaperUsed = new Array();
var BoardTEMP_FootViewType = new Array();
var BoardTEMP_RelationUsed = new Array();
var BoardTEMP_IpUsed = new Array();
var BoardTEMP_EmailUsed = new Array();
var BoardTEMP_AnswerUsed = new Array();
var BoardTEMP_replyUsed = new Array();
var BoardTEMP_RecommendUsed = new Array();
var BoardTEMP_SecretUsed = new Array();
var BoardTEMP_SecretUsed2 = new Array();
var BoardTEMP_CopywriterUsed = new Array();
var BoardTEMP_ContactAddress = new Array();
var BoardTEMP_ContactAddress2 = new Array();
var BoardTEMP_EmailWrite = new Array();
var BoardTEMP_EmailWrite2 = new Array();
var BoardTEMP_TitleWrite = new Array();
var BoardTEMP_TitleWrite2 = new Array();
var BoardTEMP_TitleWrite3 = new Array();
var BoardTEMP_Editer = new Array();
var BoardTEMP_FileUpUsed = new Array();
var BoardTEMP_FileUpSize = new Array();
var BoardTEMP_FileUpCount = new Array();
var BoardTEMP_FileUpType = new Array();
var BoardTEMP_BadnessWordUsed = new Array();
var BoardTEMP_BadnessWord = new Array();
var BoardTEMP_SpamUsed = new Array();
var BoardTEMP_PointUsed = new Array();
var BoardTEMP_PointInput = new Array();
var BoardTEMP_PointDel = new Array();
var BoardTEMP_PointCInput = new Array();
var BoardTEMP_PointCDel = new Array();
var BoardTEMP_PostWriterSmsUsed = new Array();
var BoardTEMP_PostWriterSmsPhone = new Array();
var BoardTEMP_PostWriterSmsPost = new Array();
var BoardTEMP_PostCWriterSmsUsed = new Array();
var BoardTEMP_PostCWriterSmsPhone = new Array();
var BoardTEMP_PostCWriterSmsPost = new Array();
var BoardTEMP_TopHTML = new Array();
var BoardTEMP_FotHTML = new Array();
var BoardTEMP_url = new Array();
var BoardTEMP_Docid = new Array();
var BoardTEMP_SpanReplay = new Array();
var BoardTEMP_MemOley = new Array();
var BoardTEMP_CateItem3Used = new Array();
var BoardTEMP_MemOley2 = new Array();
var BoardTEMP_CopywriterUsed2 = new Array();
var BoardTEMP_CopywriterUsed3 = new Array();
var BoardTEMP_WriteBtnGo = new Array();
var BoardTEMP_TYPE1 = new Array();
var BoardTEMP_TYPE2 = new Array();
var BoardTEMP_TYPE3 = new Array();
var BoardTEMP_TYPE4 = new Array();
var BoardTEMP_TYPE5 = new Array();
var BoardTEMP_TYPE6 = new Array();
var BoardTEMP_TYPE7 = new Array();
var BoardTEMP_TYPE8 = new Array();
var BoardTEMP_TYPE9 = new Array();
var BoardTEMP_TYPE10 = new Array();

var BoardTEMPP = new Array();
BoardTEMPP[0] = "title";
BoardTEMPP[1] = "Ncode";
BoardTEMPP[2] = "TypeView";
BoardTEMPP[3] = "Align";
BoardTEMPP[4] = "Twidth";
BoardTEMPP[5] = "TemplateNcode";
BoardTEMPP[6] = "WriterDevice";
BoardTEMPP[7] = "AdminDevice";
BoardTEMPP[8] = "NoticeDevice";
BoardTEMPP[9] = "CateUsed";
BoardTEMPP[10] = "CateItem";
BoardTEMPP[11] = "CateItem2";
BoardTEMPP[12] = "TitleCut";
BoardTEMPP[13] = "Page";
BoardTEMPP[14] = "NewMarkUsed";
BoardTEMPP[15] = "NewMarkTime";
BoardTEMPP[16] = "NewMark";
BoardTEMPP[17] = "NewMark_W";
BoardTEMPP[18] = "NewMark_H";
BoardTEMPP[19] = "HotMakrUsed";
BoardTEMPP[20] = "HotMarkCount";
BoardTEMPP[21] = "HotMark";
BoardTEMPP[22] = "HotMark_W";
BoardTEMPP[23] = "HotMark_H";
BoardTEMPP[24] = "NoticePrint";
BoardTEMPP[25] = "ItemHide";
BoardTEMPP[26] = "ImgCutDownWidth";
BoardTEMPP[27] = "ImgCutDownHight";
BoardTEMPP[28] = "CateViewType";
BoardTEMPP[29] = "PostSort";
BoardTEMPP[30] = "CommentSort";
BoardTEMPP[31] = "PaperUsed";
BoardTEMPP[32] = "FootViewType";
BoardTEMPP[33] = "RelationUsed";
BoardTEMPP[34] = "IpUsed";
BoardTEMPP[35] = "EmailUsed";
BoardTEMPP[36] = "AnswerUsed";
BoardTEMPP[37] = "replyUsed";
BoardTEMPP[38] = "RecommendUsed";
BoardTEMPP[39] = "SecretUsed";
BoardTEMPP[40] = "SecretUsed2";
BoardTEMPP[41] = "CopywriterUsed";
BoardTEMPP[42] = "ContactAddress";
BoardTEMPP[43] = "ContactAddress2";
BoardTEMPP[44] = "EmailWrite";
BoardTEMPP[45] = "EmailWrite2";
BoardTEMPP[46] = "TitleWrite";
BoardTEMPP[47] = "TitleWrite2";
BoardTEMPP[48] = "TitleWrite3";
BoardTEMPP[49] = "Editer";
BoardTEMPP[50] = "FileUpUsed";
BoardTEMPP[51] = "FileUpSize";
BoardTEMPP[52] = "FileUpCount";
BoardTEMPP[53] = "FileUpType";
BoardTEMPP[54] = "BadnessWordUsed";
BoardTEMPP[55] = "BadnessWord";
BoardTEMPP[56] = "SpamUsed";
BoardTEMPP[57] = "PointUsed";
BoardTEMPP[58] = "PointInput";
BoardTEMPP[59] = "PointDel";
BoardTEMPP[60] = "PointCInput";
BoardTEMPP[61] = "PointCDel";
BoardTEMPP[62] = "PostWriterSmsUsed";
BoardTEMPP[63] = "PostWriterSmsPhone";
BoardTEMPP[64] = "PostWriterSmsPost";
BoardTEMPP[65] = "PostCWriterSmsUsed";
BoardTEMPP[66] = "PostCWriterSmsPhone";
BoardTEMPP[67] = "PostCWriterSmsPost";
BoardTEMPP[68] = "TopHTML";
BoardTEMPP[69] = "FotHTML";
BoardTEMPP[70] = "url";
BoardTEMPP[71] = "Docid";
BoardTEMPP[72] = "SpanReplay";
BoardTEMPP[73] = "MemOley";
BoardTEMPP[74] = "CateItem3Used";
BoardTEMPP[75] = "MemOley2";
BoardTEMPP[76] = "CopywriterUsed2";
BoardTEMPP[77] = "CopywriterUsed3";
BoardTEMPP[78] = "WriteBtnGo";



function JIK_EVENNTS(Board_Num) {
    if (BoardTEMP_CateUsed[Board_Num] == 1) {
    }
    if (BoardTEMP_ContactAddress[Board_Num] == 1) {
        document.getElementById("tr_ContactAddress1").style.display = "";
        document.getElementById("tr_ContactAddress2").style.display = "";
    }
}
function chk_EVENNTS(Board_Num) {
    if (BoardTEMP_CateUsed[Board_Num] == 1) {
        if (document.getElementById("Board_CateItem").value == "") {
            alert("분류을 선택하여 주십시요.");
            document.getElementById("Board_CateItem").focus();
            return false;
        }
        try {
            if (document.getElementById("Board_CateItem2").style.display == "") {
                if (document.getElementById("Board_CateItem2").value == "") {
                    alert("분류을 선택하여 주십시요.");
                    document.getElementById("Board_CateItem2").focus();
                    return false;
                }
            }
        } catch (err) { }
    }

    if (document.getElementById("txt_write_name").value == "") {
        alert("작성자을 선택하여 주십시요.");
        document.getElementById("txt_write_name").focus();
        return false;
    }
    if (document.getElementById("txt_write_id").value == "") {
        if (document.getElementById("txt_pwd").value == "") {
            alert("비밀번호을 선택하여 주십시요.");
            try { document.getElementById("txt_pwd").focus(); } catch (err) { }
            return false;
        }
    }

    if (BoardTEMP_ContactAddress2[Board_Num] == 1) {
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
    if (document.getElementById("txt_Nphone4").value == "1") {
        if (document.getElementById("txt_Nphone1").value.trim() == "") {
            alert("핸드폰번호을 입력하여 주십시요.");
            document.getElementById("txt_Nphone1").focus();
            return false;
        }
        if (document.getElementById("txt_Nphone2").value.trim() == "") {
            alert("핸드폰번호을 입력하여 주십시요.");
            document.getElementById("txt_Nphone2").focus();
            return false;
        }
        if (document.getElementById("txt_Nphone3").value.trim() == "") {
            alert("핸드폰번호을 입력하여 주십시요.");
            document.getElementById("txt_Nphone3").focus();
            return false;
        }
    }
    if (BoardTEMP_EmailWrite2[Board_Num] == 1) {
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
    if (BoardTEMP_BadnessWordUsed[Board_Num] == 1 && BoardTEMP_BadnessWord[Board_Num] != "") {
        var m_retx = CHE_BADWORD(document.getElementById("txt_title").value, BoardTEMP_BadnessWord[Board_Num]);
        if (m_retx != "") {

            alert("[" + m_retx + "]을 불량단어로 등록되어있어서 \n\n저장이 불가하므로 변경해 주십시오.");
            document.getElementById("txt_title").focus();
            return false;
        }
    }

    for (var NNX = 1; NNX <= 10; NNX++) {
        if (document.getElementById("tr_PlusField" + NNX + "_1").style.display == "") {
            var VAR__01 = document.getElementById("td_PlusField" + NNX + "_1").value;
            var VAR__02 = document.getElementById("td_PlusField" + NNX + "_1").value2;
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


    if (BoardTEMP_Editer[Board_Num] == 1) {
        var oEditor = FCKeditorAPI.GetInstance('txt_Mcontent');
        if (oEditor) {
            try {
                //var editContents = FCKeditor.prototype.innerTEXT("txt_Mcontent"); // oEditor.EditorDocument.body.innerText;
                var editContents = FCKeditor.prototype.innerHTML("txt_Mcontent"); // oEditor.EditorDocument.body.innerText;
                if (editContents.split(" ").join("") == "") {
                    alert("내용을 입력하세요.");
                    try { oEditor.EditorDocument.body.focus(); } catch (err) { }
                    return false;
                }
                var M_HTML = oEditor.GetXHTML(true);
                if (M_HTML != "") {
                    if (BoardTEMP_BadnessWordUsed[Board_Num] == 1 && BoardTEMP_BadnessWord[Board_Num] != "") {
                        var m_retx = CHE_BADWORD(M_HTML, BoardTEMP_BadnessWord[Board_Num]);
                        if (m_retx != "") {

                            alert("[" + m_retx + "]을 불량단어로 등록되어있어서 \n\n저장이 불가하므로 변경해 주십시오.");
                            try { oEditor.EditorDocument.body.focus(); } catch (err) { }
                            return false;
                        }
                    }
                }
            } catch (err) { }
        }
    }
    else {
        if (BoardTEMP_BadnessWordUsed[Board_Num] == 1 && BoardTEMP_BadnessWord[Board_Num] != "") {
            var m_retx = CHE_BADWORD(document.getElementById("txt_Mcontent").value, BoardTEMP_BadnessWord[Board_Num]);
            if (m_retx != "") {

                alert("[" + m_retx + "]을 불량단어로 등록되어있어서 \n\n저장이 불가하므로 변경해 주십시오.");
                document.getElementById("txt_Mcontent").focus();
                return false;
            }
        }
    }

    if (BoardTEMP_SpamUsed[Board_Num] == 1) {
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

    /*
    if (BoardTEMP_TypeView[Board_Num] == "gallery" || BoardTEMP_TypeView[Board_Num] == "photo" || BoardTEMP_TypeView[Board_Num] == "event") {
    try {
    if (ifrFileUpload.sUploadSize.innerHTML == "0 Byte") {
    alert("해당 게시판은 이미지 파일 1개이상을\n\n필수로 등록하셔야 합니다.");
    return false;
    }
    } catch (err) { }
    }
    */

    var Byte__ = "";
    try {
        if (document.getElementById("ifrFileUpload")) {
            var ifrfile = document.getElementById("ifrFileUpload").contentWindow;
            Byte__ = ifrfile.document.getElementById("sUploadSize").innerHTML;
        }
    } catch (err) { }

    if (BoardTEMP_TypeView[Board_Num] == "gallery" || BoardTEMP_TypeView[Board_Num] == "photo" || BoardTEMP_TypeView[Board_Num] == "event") {
        try {
            if (Byte__ == "0 Byte") {
                alert("해당 게시판은 이미지 파일 1개이상을\n\n필수로 등록하셔야 합니다.");
                return false;
            }
        } catch (err) { }
    }
    else if (BoardTEMP_TypeView[Board_Num] == "movie") {
        try {
            if (Byte__ == "0 Byte") {
                alert("해당 게시판은 동영상 파일 1개을\n\n필수로 등록하셔야 합니다.");
                return false;
            }
        } catch (err) { }
    }
    else if (BoardTEMP_TypeView[Board_Num] == "movie2") {
        try {
            if (Byte__ == "0 Byte") {
                alert("해당 게시판은 동영상 파일 1개와 이미지 파일 1개을\n\n필수로 등록하셔야 합니다.");
                return false;
            }
        } catch (err) { }
    }
    else if (BoardTEMP_TypeView[Board_Num] == "pdf") {
        try {
            if (Byte__ == "0 Byte") {
                alert("해당 게시판은 PDF 파일 1개와 이미지 파일 1개을\n\n필수로 등록하셔야 합니다.");
                return false;
            }
        } catch (err) { }
    }

    if (BoardTEMP_FileUpUsed[Board_Num] == 1) {
        return Board.FILESGO('chk2'); ;
    }
    else {
        return true;
    }
}

function REPLACES(e) {
    e = e + '';
    return "<![CDATA[" + e + "]]>";
}



function CHE_BADWORD(e_html, b_word) {

    var M_RET = '';
    var bard_ = b_word.split(',');


    for (var b_ = 0; b_ < bard_.length; b_++) {
        bard_[b_] = bard_[b_].trim();
        if (bard_[b_].trim() == "") continue;

        if (e_html.indexOf(bard_[b_]) > -1) {
            if (M_RET != "") M_RET += ",";
            M_RET += bard_[b_];
        }
    }


    return M_RET;
}



var SPAM_str = "";

function RENDOMS() {
    var RENDOMS_OP = new Array();
    var RENDOMS_OP2 = new Array();

    var str = "abcdefghijklmnopqrstuvwxyz1234567890";
    for (var Nx = 0; Nx < 10; Nx++) {
        RENDOMS_OP[Nx] = str.charAt(Math.round(Math.random() * str.length));
        RENDOMS_OP2[Nx] = "";
    };
    var MM_str22 = "";
    while ((MM_str22).length < 4) {
        for (var Nx2 = 0; Nx2 < 10; Nx2++)
            MM_str22 += RENDOMS_OP2[Nx2]; RENDOMS_OP2[Math.round(Math.random() * (RENDOMS_OP.length - 1))] = "T";
    }
    var MM_str = "";
    var MM_str2 = "";
    for (var Nx = 0; Nx < 10; Nx++) {
        if (RENDOMS_OP2[Nx] == "T") {
            MM_str += RENDOMS_OP[Nx]; MM_str2 += '<span class="Pw2"><b><font color="red" class="Pw2" >' + RENDOMS_OP[Nx] + '</font></b></span>';
        }
        else { MM_str2 += '<span class="Pw1"><font class="Pw1"  >' + RENDOMS_OP[Nx] + '</font></span>'; }
    } SPAM_str = MM_str; return MM_str2;
}


function RENDOMS_PLUS() {

    var RENDOMS_ret = new Array("", "");
    var RENDOMS_OP = new Array();
    var RENDOMS_OP2 = new Array();

    var str = "abcdefghijklmnopqrstuvwxyz1234567890";
    for (var Nx = 0; Nx < 10; Nx++) {
        RENDOMS_OP[Nx] = str.charAt(Math.round(Math.random() * str.length));
        RENDOMS_OP2[Nx] = "";
    };
    var MM_str22 = "";
    while ((MM_str22).length < 4) {
        for (var Nx2 = 0; Nx2 < 10; Nx2++)
            MM_str22 += RENDOMS_OP2[Nx2]; RENDOMS_OP2[Math.round(Math.random() * (RENDOMS_OP.length - 1))] = "T";
    }
    var MM_str = "";
    var MM_str2 = "";
    for (var Nx = 0; Nx < 10; Nx++) {
        if (RENDOMS_OP2[Nx] == "T") {
            MM_str += RENDOMS_OP[Nx]; MM_str2 += '<span class="Pw2"><b><font color="red" class="Pw2"  >' + RENDOMS_OP[Nx] + '</font></b></span>';
        }
        else { MM_str2 += '<span class="Pw1"><font class="Pw1"  >' + RENDOMS_OP[Nx] + '</font></span>'; }
    }
    RENDOMS_ret[0] = MM_str;
    RENDOMS_ret[1] = MM_str2;
    return RENDOMS_ret;
}
/*
function CHECKBOX_CHECK(e1, e2) { var temp_ = ""; for (var NUM = 0; NUM < e2; NUM++) { if (document.getElementById(e1 + "_" + NUM).checked == true) { if (temp_ != "") { temp_ += ","; } temp_ += document.getElementById(e1 + "_" + NUM).value; } } document.getElementById("TEXT_" + e1).value = temp_; }
function TXT_membusiness(e) { document.getElementById("TEXT_" + e).value = document.getElementById("TEXT_" + e + "_1").value + "↑" + document.getElementById("TEXT_" + e + "_2").value + "↑" + document.getElementById("TEXT_" + e + "_3").value + "↑" + document.getElementById("TEXT_" + e + "_4").value + "↑" + document.getElementById("TEXT_" + e + "_5").value + "↑" + document.getElementById("TEXT_" + e + "_6").value + "↑" + document.getElementById("TEXT_" + e + "_7").value; }
*/

function http_https() { if (location.href.indexOf("https://") == 0) { return "https://"; } else { return "http://"; } }
String.prototype.trim = function () { return this.replace(/(^\s*)|(\s*$)/gi, ""); }
String.prototype.replaceAll = function (str1, str2) { var temp_str = ""; if (this.trim() != "" && str1 != str2) { temp_str = this.trim(); while (temp_str.indexOf(str1) > -1) { temp_str = temp_str.replace(str1, str2); } } return temp_str; }
String.prototype.replaceAll2 = function (str1, str2) { var temp_str = this.trim(); temp_str = temp_str.replace(eval("/" + str1 + "/gi"), str2); return temp_str; }
function createRequestObject() { if (window.XMLHttpRequest) { return xmlhttprequest = new XMLHttpRequest(); } else if (window.ActiveXObject) { return xmlhttprequest = new ActiveXObject("Microsoft.XMLHTTP"); } }

function sleep(msecs) {

    var start = new Date().getTime();
    var cur = start
    while (cur - start < msecs) {
        cur = new Date().getTime();
    }

}


function DATEOP_Docid(Docid, root_s_) {
    try {
        var obj__n = eval("BoardListItem_" + Docid);

        for (mm_ = 1; mm_ <= obj__n.length; mm_++) {
            if (mm_ > 10) continue;
            mm_Op = obj__n[mm_ - 1].split(':');
            if (mm_Op[1] == "0") {
                document.getElementById("tr_PlusField" + mm_ + "_1").style.display = "";
                document.getElementById("tr_PlusField" + mm_ + "_2").style.display = "";
            }
            else if (mm_Op[1] == "1") {
                /*if (root_s_ == "-1") */
                {
                    document.getElementById("tr_PlusField" + mm_ + "_1").style.display = "";
                    document.getElementById("tr_PlusField" + mm_ + "_2").style.display = "";
                }
            }
            if (mm_Op[2] == "1") {
                document.getElementById("td_PlusField" + mm_ + "_1").innerHTML = mm_Op[0];
                document.getElementById("td_PlusField" + mm_ + "_1").value = "";
                document.getElementById("td_PlusField" + mm_ + "_1").value2 = mm_Op[4];
                document.getElementById("td_PlusField" + mm_ + "_1").help = mm_Op[4];
            } else {
                document.getElementById("td_PlusField" + mm_ + "_1").innerHTML = mm_Op[0] + "*";
                document.getElementById("td_PlusField" + mm_ + "_1").value = "*";
                document.getElementById("td_PlusField" + mm_ + "_1").value2 = mm_Op[4];
                document.getElementById("td_PlusField" + mm_ + "_1").help = mm_Op[4];
            }
            var Type = mm_Op[4];
            if (Type == "TEXT") {
                jQuery("#td_PlusField" + mm_ + "_1").attr("for", "TEXT_INP" + mm_);
            }
            else if (Type == "JUMIN" || Type == "EMAIL" || Type == "PHONE") {
                jQuery("#td_PlusField" + mm_ + "_1").attr("for", "TEXT_INP" + mm_ + "_1");
            }
            else if (Type == "RADIO") {
                jQuery("#td_PlusField" + mm_ + "_1").attr("for", "RADIO_INP" + mm_ + "_0");
            }
            else if (Type == "ADDRESS") {
                jQuery("#td_PlusField" + mm_ + "_1").attr("for", "txt_INP" + mm_ + "_zipcode1");
            }
            else if (Type == "FILE") {
                jQuery("#td_PlusField" + mm_ + "_1").attr("for", "FILE_INP" + mm_ + "");
            }
            else if (Type == "CHECKBOX") {
                jQuery("#td_PlusField" + mm_ + "_1").attr("for", "INP" + mm_ + "_0");
            }
            else if (Type == "SELECTBOX") {
                jQuery("#td_PlusField" + mm_ + "_1").attr("for", "DDL_INP" + mm_ + "");
            }
            else {
                jQuery("#td_PlusField" + mm_ + "_1").attr("for", "TEXT_INP" + mm_);
            }

            document.getElementById("td_PlusField" + mm_ + "_2").innerHTML = MAKE_INPUT_TYPE_OP(mm_Op[4], "INP" + mm_, " " + mm_Op[3], mm_Op[5], mm_Op[6], mm_Op[7], mm_Op[0]);
        }
    } catch (err) { }
}

function DATEOP_DocidNX(Docid, View_) {
    try {
        var obj__n = eval("BoardListItem_" + Docid);
        for (mm_ = 1; mm_ <= obj__n.length; mm_++) {
            if (mm_ > 10) continue;
            if (document.getElementById("SPANMM_OP" + mm_ + "_2").innerHTML == "") continue;
            mm_Op = obj__n[mm_ - 1].split(':');
            if (mm_Op[4] == 'SPAM') {
                continue;
            }
            else if (mm_Op[4] == 'ADDRESS') {
                document.getElementById("SPANMM_OP" + mm_ + "_2").innerHTML = document.getElementById("SPANMM_OP" + mm_ + "_2").innerHTML.replaceAll("↑", " ");
            }
            if (mm_Op[1] == "0") {
                document.getElementById("trMM_OP" + mm_ + "_1").style.display = "";
                document.getElementById("trMM_OP" + mm_ + "_2").style.display = "";
            }
            else if (mm_Op[1] == "1") {
                if (View_ == true) {
                    document.getElementById("trMM_OP" + mm_ + "_1").style.display = "";
                    document.getElementById("trMM_OP" + mm_ + "_2").style.display = "";
                }
            }
            document.getElementById("SPANMM_OP" + mm_ + "_1").innerHTML = mm_Op[0];
        }
    } catch (err) { }
}

function MAKE_INPUT_TYPE_OP(Type, ColumnName, Memo, Twidth, THeight, MEMUS, Title) {
    var HTML_RET = '';
    var HTML_RET_P1 = ''; var HTML_RET_P2 = ''; var HTML_RET_P3 = ''; var HTML_RET_P4 = ''; var HTML_RET_P5 = ''; var HTML_RET_P6 = '';
    Title = Title == null ? "" : Title;
    if (Type == "TEXT") {
        if (ColumnName == "membusiness") {
            HTML_RET = '<input  id="TEXT_' + ColumnName + '" name="TEXT_' + ColumnName + '" style="display:none;" type="text" title="' + Title + ' 저장용" />'
        + '<table cellspacing="0" cellpadding="1" width="100%" border="0"><tbody><tr><td width="60"><label for="TEXT_' + ColumnName + '_1">상호명</label></td><td width="170">'
        + '<input title="' + Title + ' 상호명" onblur="TXT_membusiness(\'' + ColumnName + '\');" id="TEXT_' + ColumnName + '_1" name="TEXT_' + ColumnName + '_1" type="text" /></td>'
        + '<td width="70"><label for="TEXT_' + ColumnName + '_2">사업자번호</label></td><td><input onblur="TXT_membusiness(\'' + ColumnName + '\');" id="TEXT_' + ColumnName + '_2" name="TEXT_' + ColumnName + '_2" type="text" /></td></tr>'
        + '<tr><td><label for="TEXT_' + ColumnName + '_3">대표자명</label></td><td><input title="' + Title + ' 대표자명" onblur="TXT_membusiness(\'' + ColumnName + '\');" id="TEXT_' + ColumnName + '_3" name="TEXT_' + ColumnName + '_3" type="text" /></td>'
        + '<td><label for="TEXT_' + ColumnName + '_4">팩스번호</label></td><td><input onblur="TXT_membusiness(\'' + ColumnName + '\');" id="TEXT_' + ColumnName + '_4" name="TEXT_' + ColumnName + '_4" type="text" /></td></tr>'
        + '<tr><td><label for="TEXT_' + ColumnName + '_5">업태</label></td><td><input title="' + Title + ' 업태" onblur="TXT_membusiness(\'' + ColumnName + '\');" id="TEXT_' + ColumnName + '_5" name="TEXT_' + ColumnName + '_5" type="text" /></td>'
        + '<td><label for="TEXT_' + ColumnName + '_6">종목</label></td><td><input onblur="TXT_membusiness(\'' + ColumnName + '\');" id="TEXT_' + ColumnName + '_6" name="TEXT_' + ColumnName + '_6" type="text" /></td></tr>'
        + '<tr><td><label for="TEXT_' + ColumnName + '_7">주소</label></td><td colspan="3"><input title="' + Title + ' 주소" onblur="TXT_membusiness(\'' + ColumnName + '\');" id="TEXT_' + ColumnName + '_7" style="width: 95%" name="TEXT_' + ColumnName + '_7" type="text" /></td></tr></tbody></table>';
        }
        else if (ColumnName == "memid") {
            HTML_RET = '<input  title="' + Title + '을 입력하여 주십시요."  ' + HTML_RET_P1 + ' id="TEXT_' + ColumnName + '" name="TEXT_' + ColumnName + '" style="width:'
				+ (Twidth != "" ? "width:" + Twidth + (Twidth.indexOf('%') > -1 ? ";" : "px;") : "")
				+ '" type="text" />';
        }
        else if (ColumnName == "memnick") {
            HTML_RET = '<input title="' + Title + '을 입력하여 주십시요."  ' + HTML_RET_P1 + ' id="TEXT_' + ColumnName + '" name="TEXT_' + ColumnName + '" style="width:'
				+ (Twidth != "" ? "width:" + Twidth + (Twidth.indexOf('%') > -1 ? ";" : "px;") : "")
				+ '" type="text" />';
        }
        else {
            HTML_RET = '<input title="' + Title + '을 입력하여 주십시요."  ' + HTML_RET_P1 + ' id="TEXT_' + ColumnName + '" name="TEXT_' + ColumnName + '" style="width:'
				+ (Twidth != "" ? "width:" + Twidth + (Twidth.indexOf('%') > -1 ? ";" : "px;") : "")
				+ '" type="text" />';
        }
    }
    else if (Type == "PASS") {
        HTML_RET = '<input title="' + Title + '을 입력하여 주십시요."   ' + HTML_RET_P1 + ' id="TEXT_' + ColumnName + '" name="TEXT_' + ColumnName + '" style="width:' + Twidth + '" type="password"  /> \
         확인 <input ' + HTML_RET_P1 + ' id="TEXT_' + ColumnName + '_2" name="TEXT_' + ColumnName + '_2" style="width:' + Twidth + '" type="password" />';
    }
    else if (Type == "JUMIN") { HTML_RET = '<input title="' + Title + '"  ' + HTML_RET_P1 + ' id="TEXT_' + ColumnName + '_1" name="TEXT_' + ColumnName + '_1" type="text" size="10" maxlength="6"  /> - <input ' + HTML_RET_P2 + ' id="TEXT_' + ColumnName + '_2" name="TEXT_' + ColumnName + '_2" type="password"  size="10"  maxlength="7" />'; }
    else if (Type == "EMAIL") {
        HTML_RET = '<input title="' + Title + '  @에 앞 자리 입력하여 주십시요."  maxlength="30" onkeyup="CheckStrLen(this,30);" onblur="CheckStrLen(this,30);" onkeydown="if(event.keyCode ==13){return false}"  id="TEXT_' + ColumnName + '_1" name="TEXT_' + ColumnName + '_1"  type="text" />';
        HTML_RET += ' @ <input title="' + Title + ' @에 뒤 자리(직접입력시) 입력하여 주십시요."  maxlength="50" onkeyup="CheckStrLen(this,50);" onblur="CheckStrLen(this,50);" onkeydown="if(event.keyCode ==13){return false}"  id="TEXT_' + ColumnName + '_2" name="TEXT_' + ColumnName + '_2" style="display:none;" type="text" />';
        HTML_RET += ' <select title="' + Title + ' @에 뒤 자리 선택하여 주십시요."   name="DDL_' + ColumnName + '" id="DDL_' + ColumnName + '" class="input" '
        + '        onchange="if(this.value==\'etc\'){document.getElementById(\'TEXT_' + ColumnName + '_2\').style.display=\'\';}'
        + '        else{document.getElementById(\'TEXT_' + ColumnName + '_2\').style.display=\'none\';}">'
        + '        <option value="">선택하세요</option>'
        + '        <option value="etc">직접입력</option>'
        + '        <option value="naver.com">naver.com</option>'
        + '        <option value="chol.com">chol.com</option>'
        + '        <option value="dreamwiz.com">dreamwiz.com</option>'
        + '        <option value="empal.com">empal.com</option>'
        + '        <option value="freechal.com">freechal.com</option>'
        + '        <option value="gmail.com">gmail.com</option>'
        + '        <option value="hanafos.com">hanafos.com</option>'
        + '        <option value="hanmail.net">hanmail.net</option>'
        + '        <option value="hanmir.com">hanmir.com</option>'
        + '        <option value="hitel.net">hitel.net</option>'
        + '        <option value="hotmail.com">hotmail.com</option>'
        + '        <option value="korea.com">korea.com</option>'
        + '        <option value="lycos.co.kr">lycos.co.kr</option>'
        + '        <option value="nate.com">nate.com</option>'
        + '        <option value="netian.com">netian.com</option>'
        + '        <option value="paran.com">paran.com</option>'
        + '        <option value="yahoo.com">yahoo.com</option>'
        + '        <option value="yahoo.co.kr">yahoo.co.kr</option>'
        + '</select>';
    }
    else if (Type == "RADIO") {

        var TEMP_VALUE = MEMUS.split('↑');
        HTML_RET = '<input  title="' + Title + ' 선택 결과"  id="TEXT_' + ColumnName + '" name="TEXT_' + ColumnName + '" style="display:none;" type="text" value2="' + MEMUS + '" value="' + TEMP_VALUE[0] + '" />';
        HTML_RET += "<span  class=\"input_no\"  >";
        if (TEMP_VALUE.length <= 4) {
            for (var NUM = 0; NUM < TEMP_VALUE.length; NUM++) {
                HTML_RET_P1 = ""; if (TEMP_VALUE[NUM].trim() == "") { continue; }
                if (NUM == 0) HTML_RET_P1 = " checked=\"checked\" ";
                HTML_RET += "<input title=\"" + Title + " 선택하여 주십시요.\"  " + HTML_RET_P1 + " id=\"RADIO_" + ColumnName + "_" + NUM + "\" type=\"radio\" "
                + " onclick=\"document.getElementById('TEXT_" + ColumnName + "').value =this.value;\" "
                + " name=\"RADIO_" + ColumnName + "\" value=\"" + TEMP_VALUE[NUM] + "\" value2=\"" + TEMP_VALUE.length + "\"  />"
                + "<label for=\"RADIO_" + ColumnName + "_" + NUM + "\">" + TEMP_VALUE[NUM] + "</label>";
            };
        }
        else {
            HTML_RET += '<table cellspacing="0" cellpadding="1" width="100%" border="0"><tbody> ';
            for (var NUM = 0; NUM < TEMP_VALUE.length; NUM++) {
                if ((NUM + 1) % 4 == 1) HTML_RET += '<tr>';
                HTML_RET += '<td>';
                HTML_RET_P1 = ""; if (TEMP_VALUE[NUM].trim() == "") { continue; }
                if (NUM == 0) HTML_RET_P1 = " checked=\"checked\" ";
                HTML_RET += "<input title=\"" + Title + " 선택하여 주십시요.\"  " + HTML_RET_P1 + " id=\"RADIO_" + ColumnName + "_" + NUM + "\" type=\"radio\" "
                + " onclick=\"document.getElementById('TEXT_" + ColumnName + "').value =this.value;\" "
                + " name=\"RADIO_" + ColumnName + "\" value=\"" + TEMP_VALUE[NUM] + "\" /><label for=\"RADIO_" + ColumnName + "_" + NUM + "\">" + TEMP_VALUE[NUM] + "</label>";
                HTML_RET += '</td>';
                if ((NUM + 1) % 4 == 0) HTML_RET += '</tr>';
            };
            HTML_RET += '</table>';
        }
        HTML_RET += "</span>";
    }
    else if (Type == "PHONE") {
        HTML_RET = '<input title="' + Title + ' 앞 자리 입력하여 주십시요." id="TEXT_' + ColumnName + '_1" name="TEXT_' + ColumnName + '_1" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4" size="4" type="text" />'
        + ' - <input title="' + Title + ' 중간 자리 입력하여 주십시요." id="TEXT_' + ColumnName + '_2" name="TEXT_' + ColumnName + '_2" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4" size="4" type="text" />'
        + ' - <input title="' + Title + ' 뒤 자리 입력하여 주십시요." id="TEXT_' + ColumnName + '_3" name="TEXT_' + ColumnName + '_3" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4" size="4" type="text" />';
    }
    else if (Type == "ADDRESS") {
        HTML_RET = ''
        + '<input title="' + Title + ' 우편번호 앞 세자리 선택하여 주십시요." id="txt_' + ColumnName + '_zipcode1" size="3" name="txt_' + ColumnName + '_zipcode1" type="text" readOnly="readOnly" /> - '
        + '<input title="' + Title + ' 우편번호 뒤 세자리 선택하여 주십시요." id="txt_' + ColumnName + '_zipcode2" size="3" name="txt_' + ColumnName + '_zipcode2" type="text"  readOnly="readOnly" /> '
        + '<a href="#" onclick="MM_openBrWindow7(\'/COMMON/Address/Address2.aspx?txt=' + ColumnName + '\',\'NwdAddress\',\'width=500,height=450\');return false;" >'
        + '<img height="23" alt="우편번호검색" width="90" align="absMiddle" src="/img/bt_search_addr.gif" /></a> <br/>'
        + '<input title="' + Title + ' 주소 앞 자리 입력하여 주십시요." id="txt_' + ColumnName + '_addr1" style="width: 250px" name="txt_' + ColumnName + '_addr1" type="text" readOnly="readOnly" /><br/>'
        + '<input title="' + Title + ' 주소 뒤 자리 입력하여 주십시요." id="txt_' + ColumnName + '_addr2" style="width: 250px" name="txt_' + ColumnName + '_addr2" type="text" /> ';
    }
    else if (Type == "DATE") {
        HTML_RET = '<input title="' + Title + ' 선택하여 주십시요. " ' + HTML_RET_P1 + ' id="TEXT_' + ColumnName + '" name="TEXT_' + ColumnName + '" size="10" type="text" readOnly="readOnly" '
        + ' onclick="callCalPop(TEXT_' + ColumnName + ', \'yyyy-mm-dd\');" />'
        + '<a href="#" onclick="callCalPop(TEXT_' + ColumnName + ', \'yyyy-mm-dd\');return false;"  ><img align="absMiddle" src="/_js/calener/ico_calendar.gif"></a>';
    }
    else if (Type == "FILE") {
        HTML_RET = ''
        + '        <input title="' + Title + ' 첩부화일 선택하여 주십시요." id="FILE_' + ColumnName + '" name="FILE_' + ColumnName + '" value2="jpg,gif,png,ico" type="file" /> '
        + '        <span id="SPAN_' + ColumnName + '" name="SPAN_' + ColumnName + '"  style="display:none;" class="input_no" hidefocus="hidefocus" style="selector-dummy: true">'
        + '        <span id="SPANF1_' + ColumnName + '" name="SPANF1_' + ColumnName + '" ></span>'
        + '        <span id="SPANF_' + ColumnName + '" name="SPANF_' + ColumnName + '" ></span>'
        + '        <input title="' + Title + ' 화일 정보" id="TEXT_' + ColumnName + '" name="TEXT_' + ColumnName + '" size="4" style="display:none;" type="text"  />'
        + '        <input title="' + Title + ' 화일 삭제" id="DEL_' + ColumnName + '" hidefocus="hidefocus" style="selector-dummy: true" type="checkbox" name="DEL_' + ColumnName + '" value="1" />'
        + '        <label for="DEL_' + ColumnName + '">삭제</label></span>';
    }
    else if (Type == "CHECKBOX") {
        HTML_RET = '<input title="' + Title + ' 선택정보"  id="TEXT_' + ColumnName + '" name="TEXT_' + ColumnName + '" style="display:none;" type="text" value2="' + MEMUS + '" />';
        var TEMP_VALUE = MEMUS.split('↑');
        if (TEMP_VALUE.length <= 4) {
            for (var NUM = 0; NUM < TEMP_VALUE.length; NUM++) {
                if (TEMP_VALUE[NUM].trim() == "") { continue; }
                HTML_RET += '<input title="' + Title + ' 선택하여 주십시요."  id="' + ColumnName + '_' + NUM + '" name="' + ColumnName + '_' + NUM + '" '
        + '        onclick="CHECKBOX_CHECK(\'' + ColumnName + '\',' + TEMP_VALUE.length + ')" '
        + '        hidefocus="hidefocus" style="selector-dummy: true"  class="input_no" type="checkbox" value="' + TEMP_VALUE[NUM] + '" />'
        + '        <label for="' + ColumnName + '_' + NUM + '">' + TEMP_VALUE[NUM] + '</label>';
            }
        }
        else {
            HTML_RET += '';
            for (var NUM = 0; NUM < TEMP_VALUE.length; NUM++) {
                if (TEMP_VALUE[NUM].trim() == "") { continue; }
                HTML_RET += '<input title="' + Title + ' 선택하여 주십시요."  id="' + ColumnName + '_' + NUM + '" name="' + ColumnName + '_' + NUM + '" '
        + '        onclick="CHECKBOX_CHECK(\'' + ColumnName + '\',' + TEMP_VALUE.length + ')" '
        + '        hidefocus="hidefocus" style="selector-dummy: true"  class="input_no" type="checkbox" value="' + TEMP_VALUE[NUM] + '" />'
        + '        <label for="' + ColumnName + '_' + NUM + '">' + TEMP_VALUE[NUM] + '</label>';
                if ((NUM + 1) % 4 == 0) HTML_RET += '<br/>';
            }
        }
    }
    else if (Type == "SELECTBOX") {
        var TEMP_VALUE = MEMUS.split('↑'); HTML_RET = "<select  title=\"" + Title + " 선택하여 주십시요.\"  " + HTML_RET_P1 + " id=\"DDL_" + ColumnName + "\" name=\"DDL_" + ColumnName + "\" ><option value=\"\" selected=\"selected\">선택하세요</option>";
        for (var NUM = 0; NUM < TEMP_VALUE.length; NUM++) { if (TEMP_VALUE[NUM].trim() == "") { continue; } HTML_RET += "<option value=\"" + TEMP_VALUE[NUM] + "\">" + TEMP_VALUE[NUM] + "</option >"; }; HTML_RET += "</select >";
    }
    else if (Type == "TEXTAREA") {
        var RTHeight = 3;
        if (THeight != "") {
            try {
                RTHeight = parseInt(THeight);
                RTHeight = RTHeight / 14;
            } catch (err) { }
        }
        HTML_RET = '<textarea  title="' + Title + ' 입력하여 주십시요." ' + HTML_RET_P1 + ' id="TEXT_' + ColumnName + '" name="TEXT_' + ColumnName + '" style="'
        + (Twidth != "" ? "width:" + Twidth + (Twidth.indexOf('%') > -1 ? ";" : "px;") : "")
        + (THeight != "" ? "height:" + THeight + (Twidth.indexOf('%') > -1 ? ";" : "px;") : "")
        + '" rows="' + RTHeight + '" ></textarea>';
    }
    else if (Type == "SPAM") {
        HTML_RET = '<span id="SPAM_' + ColumnName + '_0" name="SPAM_' + ColumnName + '_0" >' + RENDOMS() + '</span>';
        HTML_RET += '<input  title="' + Title + ' (' + SPAM_str + ')을 입력하여 주십시요."  maxlength="4" onkeydown="if(event.keyCode ==13){return false}" value2="' + SPAM_str + '"  size="10" id="TEXT_' + ColumnName + '" name="TEXT_' + ColumnName + '" type="text" />'
        + '<input maxlength="4" value="' + SPAM_str + '"  size="10" id="TEXT_' + ColumnName + '_2" name="TEXT_' + ColumnName + '_2" type="hidden" />'
        + '<span class="helptxt"> * 대소문자를 구분하여 <font color="#ff0000">빨간글자만</font> 순서대로 입력하세요.</span>';
    }

    HTML_RET += '<span id="SPAN_' + ColumnName + '" name="SPAN_' + ColumnName + '" ></span>';
    if (Memo != "") { HTML_RET += '<span class="helptxt">' + Memo + '</span>'; }
    return HTML_RET;
}

function chk_form_OP(Type, ColumnName, FildName, chker) {
    var chk = true;
    {
        if (Type == "FILE") {
            if (document.getElementById('FILE_' + ColumnName).value.trim() != "") {
                if (chkfiles(document.getElementById('FILE_' + ColumnName)) == false) {
                    alert("[" + document.getElementById('FILE_' + ColumnName).value2 + "]파일을 선택하세요");
                    chk = false; return chk;
                }
            }
        }
        if (Type == "JUMIN") {
            if (document.getElementById('TEXT_' + ColumnName + '_1').value.trim() == '') {
                alert(FildName + '을 입력하여 주십시요.');
                try { document.getElementById('TEXT_' + ColumnName + '_1').focus(); } catch (err) { }
                chk = false; return chk;
            }
            if (document.getElementById('TEXT_' + ColumnName + '_2').value.trim() == '') {
                alert(FildName + '을 입력하여 주십시요.');
                try { document.getElementById('TEXT_' + ColumnName + '_2').focus(); } catch (err) { }
                chk = false; return chk;
            }
            var JUMIN__ = document.getElementById('TEXT_' + ColumnName + '_1').value.trim() + document.getElementById('TEXT_' + ColumnName + '_2').value.trim();
            if (isValidJuminNo(JUMIN__) == false) {
                alert(FildName + '가 정확하지 않습니다.');
                try { document.getElementById('TEXT_' + ColumnName + '_1').focus(); } catch (err) { }
                chk = false; return chk;
            }
        }
        if (chker == true) {

            if (Type == "TEXT") {
                if (document.getElementById('TEXT_' + ColumnName).value.trim() == '') {
                    alert(FildName + '을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + ColumnName).focus(); } catch (err) { }
                    chk = false; return chk;
                }
            }
            else if (Type == "PASS") {
                if (document.getElementById('TEXT_' + ColumnName).value.trim() == '') {
                    alert(FildName + '을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + ColumnName).focus(); } catch (err) { }
                    chk = false; return chk;
                }
                if (document.getElementById('TEXT_' + ColumnName + '_2').value.trim() == '') {
                    alert(FildName + '확인을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + ColumnName + '_2').focus(); } catch (err) { }
                    chk = false; return chk;
                }
                if (document.getElementById('TEXT_' + ColumnName).value.trim() != document.getElementById('TEXT_' + ColumnName + '_2').value.trim()) {
                    alert(FildName + '가 일치하지 않습니다.');
                    try { document.getElementById('TEXT_' + ColumnName).focus(); } catch (err) { }
                    chk = false; return chk;
                }
            }
            else if (Type == "EMAIL") {
                if (document.getElementById('TEXT_' + ColumnName + '_1').value.trim() == '') {
                    alert(FildName + '을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + ColumnName + '_1').focus(); } catch (err) { }
                    chk = false; return chk;
                }
                if (document.getElementById('DDL_' + ColumnName).value != 'etc') {
                    if (document.getElementById('DDL_' + ColumnName).value.trim() == '') {
                        alert(FildName + '을 선택하여 주십시요.');
                        try { document.getElementById('DDL_' + ColumnName).focus(); } catch (err) { }
                        chk = false; return chk;
                    }
                }
                else {
                    if (document.getElementById('TEXT_' + ColumnName + '_2').value.trim() == '') {
                        alert(FildName + '을 입력하여 주십시요.');
                        try { document.getElementById('TEXT_' + ColumnName + '_2').focus(); } catch (err) { }
                        chk = false; return chk;
                    }
                }
            }
            else if (Type == "RADIO") { }
            else if (Type == "PHONE") {
                if (document.getElementById('TEXT_' + ColumnName + '_1').value.trim() == '') {
                    alert(FildName + '을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + ColumnName + '_1').focus(); } catch (err) { }
                    chk = false; return chk;
                }
                if (document.getElementById('TEXT_' + ColumnName + '_2').value.trim() == '') {
                    alert(FildName + '을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + ColumnName + '_2').focus(); } catch (err) { }
                    chk = false; return chk;
                }
                if (document.getElementById('TEXT_' + ColumnName + '_3').value.trim() == '') {
                    alert(FildName + '을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + ColumnName + '_3').focus(); } catch (err) { }
                    chk = false; return chk;
                }
            }
            else if (Type == "ADDRESS") {
                if (document.getElementById('txt_' + ColumnName + '_zipcode1').value.trim() == '') {
                    alert(FildName + '을 입력하여 주십시요.');
                    chk = false; return chk;
                }
                if (document.getElementById('txt_' + ColumnName + '_zipcode2').value.trim() == '') {
                    alert(FildName + '을 입력하여 주십시요.');
                    chk = false; return chk;
                }
                if (document.getElementById('txt_' + ColumnName + '_addr1').value.trim() == '') {
                    alert(FildName + '을 입력하여 주십시요.');
                    chk = false; return chk;
                }
                if (document.getElementById('txt_' + ColumnName + '_addr2').value.trim() == '') {
                    alert(FildName + '을 입력하여 주십시요.');
                    try { document.getElementById('txt_' + ColumnName + '_addr2').focus(); } catch (err) { }
                    chk = false; return chk;
                }
            }
            else if (Type == "DATE") {
                if (ColumnName == "memmarridate") {
                    if (document.getElementById('TEXT_' + ColumnName + '_1').value.trim() == '') {
                        alert(FildName + '을 입력하여 주십시요.');
                        try { document.getElementById('TEXT_' + ColumnName + '_1').focus(); } catch (err) { }
                        chk = false; return chk;
                    }
                    if (document.getElementById('TEXT_' + ColumnName + '_2').value.trim() == '') {
                        alert(FildName + '을 입력하여 주십시요.');
                        try { document.getElementById('TEXT_' + ColumnName + '_2').focus(); } catch (err) { }
                        chk = false; return chk;
                    }
                }
                else {
                    if (document.getElementById('TEXT_' + ColumnName).value.trim() == '') {
                        alert(FildName + '을 입력하여 주십시요.');
                        try { document.getElementById('TEXT_' + ColumnName).focus(); } catch (err) { }
                        chk = false; return chk;
                    }
                }
            }
            else if (Type == "FILE") {
                if (document.getElementById('SPAN_' + ColumnName).style.display == 'none') {
                    if (document.getElementById('FILE_' + ColumnName).value.trim() == '') {
                        alert(FildName + '을 입력하여 주십시요.');
                        try { document.getElementById('TEXT_' + ColumnName).focus(); } catch (err) { }
                        chk = false; return chk;
                    }
                }
            }
            else if (Type == "CHECKBOX") {
                if (document.getElementById('TEXT_' + ColumnName).value.trim() == '') {
                    alert(FildName + '을 선택하여 주십시요.');
                    chk = false; return chk;
                }
            }
            else if (Type == "SELECTBOX") {
                if (document.getElementById('DDL_' + ColumnName).value.trim() == '') {
                    alert(FildName + '을 선택하여 주십시요.');
                    chk = false; return chk;
                }
            }
            else if (Type == "TEXTAREA") {
                if (document.getElementById('TEXT_' + ColumnName).value.trim() == '') {
                    alert(FildName + '을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + ColumnName).focus(); } catch (err) { }
                    chk = false; return chk;
                }
            }
            else if (Type == "SPAM") {
                if (document.getElementById('TEXT_' + ColumnName).value.trim() == '') {
                    alert(FildName + '을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + ColumnName).focus(); } catch (err) { }
                    chk = false; return chk;
                }
                if (document.getElementById('TEXT_' + ColumnName).value.trim() != document.getElementById('TEXT_' + ColumnName + '_2').value2) {
                    alert(FildName + '이 정확하지 않습니다.\n다시입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + ColumnName).value = ''; } catch (err) { }
                    try { document.getElementById('TEXT_' + ColumnName).focus(); } catch (err) { }
                    chk = false; return chk;
                }
            }
        }
    }

    return chk;
}
function GetValue(trName, ColumnName) {
    var ret = "";

    var value2__ = document.getElementById("td_PlusField" + trName + "_1").value2;
    if (value2__ == null && document.getElementById("td_PlusField" + trName + "_1").help != null) value2__ = document.getElementById("td_PlusField" + trName + "_1").help.split(":")[0];
    if (value2__ == "JUMIN") {
        ret = document.getElementById('TEXT_' + ColumnName + '_1').value.trim() + "-" + document.getElementById('TEXT_' + ColumnName + '_2').value.trim();
    }
    else if (value2__ == "EMAIL") {
        ret = document.getElementById('TEXT_' + ColumnName + '_1').value.trim() + '@';
        if (document.getElementById('DDL_' + ColumnName).value != 'etc') {
            ret += document.getElementById('DDL_' + ColumnName).value.trim();
        }
        else {
            ret += document.getElementById('TEXT_' + ColumnName + '_2').value.trim();
        }
    }
    else if (value2__ == "TEXT") {
        ret = document.getElementById('TEXT_' + ColumnName).value.trim();
    }
    else if (value2__ == "PASS") {
        ret = document.getElementById('TEXT_' + ColumnName).value.trim();
    }
    else if (value2__ == "RADIO") {
        /*고민중...*/
        /*
        var TEMP_VALUE = document.getElementById('TEXT_' + ColumnName).value.split('↑');
        for (var NUM = 0; NUM < TEMP_VALUE.length; NUM++) {

        if (document.getElementById("RADIO_" + ColumnName + "_" + NUM + "").checked == true) {
        ret = document.getElementById("RADIO_" + ColumnName + "_" + NUM + "").value;
        break;
        }
        }
        */
        ret = document.getElementById('TEXT_' + ColumnName).value.trim();
    }
    else if (value2__ == "PHONE") {
        ret = document.getElementById('TEXT_' + ColumnName + "_1").value.trim() + "-" + document.getElementById('TEXT_' + ColumnName + "_2").value.trim() + "-" + document.getElementById('TEXT_' + ColumnName + "_3").value.trim();
    }
    else if (value2__ == "ADDRESS") {
        ret = document.getElementById('txt_' + ColumnName + "_addr1").value.trim() + "↑" + document.getElementById('txt_' + ColumnName + "_addr2").value.trim() + " (" + document.getElementById('txt_' + ColumnName + "_zipcode1").value.trim() + "-" + document.getElementById('txt_' + ColumnName + "_zipcode2").value.trim() + ")";
    }
    else if (value2__ == "DATE") {
        ret = document.getElementById('TEXT_' + ColumnName).value.trim();
    }
    else if (value2__ == "FILE") {
        /*고민중...*/
    }
    else if (value2__ == "CHECKBOX") {
        ret = document.getElementById('TEXT_' + ColumnName).value.trim();
    }
    else if (value2__ == "SELECTBOX") {
        ret = document.getElementById('DDL_' + ColumnName).value.trim();
    }
    else if (value2__ == "TEXTAREA") {
        ret = document.getElementById('TEXT_' + ColumnName).value.trim();
    }
    else if (value2__ == "SPAM") {
        ret = document.getElementById('TEXT_' + ColumnName).value.trim();
    }
    return ret;
}
function PutValue(trName, ColumnName, PlusField_) {
    var ret = "";

    var value2__ = document.getElementById("td_PlusField" + trName + "_1").value2;
    if (value2__ == "JUMIN") {
        try {
            var JUMIN__ = PlusField_.split('-');
            if (JUMIN__.length > 1) {
                document.getElementById('TEXT_' + ColumnName + '_1').value = JUMIN__[0];
                document.getElementById('TEXT_' + ColumnName + '_1').value = JUMIN__[1];
            }
        } catch (err) { }
    }
    else if (value2__ == "EMAIL") {
        var mmm_emal = PlusField_;
        var EMAIL__ = mmm_emal.split('@');
        if (EMAIL__.length > 1) {
            document.getElementById('TEXT_' + ColumnName + '_1').value = EMAIL__[0];
            document.getElementById('TEXT_' + ColumnName + '_2').value = EMAIL__[1];
            Teldd(document.getElementById('DDL_' + ColumnName), EMAIL__[1]);
            if (document.getElementById('DDL_' + ColumnName).selectedIndex == 0) {
                document.getElementById('TEXT_' + ColumnName + '_2').style.display = "";
                Teldd(document.getElementById('DDL_' + ColumnName), "etc");
            }
        }
    }
    else if (value2__ == "TEXT") {
        try { document.getElementById('TEXT_' + ColumnName).value = PlusField_; } catch (err) { }
    }
    else if (value2__ == "PASS") {
        try { document.getElementById('TEXT_' + ColumnName).value = PlusField_; } catch (err) { }
        try { document.getElementById('TEXT_' + ColumnName + '_2').value = PlusField_; } catch (err) { }
    }
    else if (value2__ == "RADIO") {
        TelddR(document.getElementsByName('RADIO_' + ColumnName), PlusField_);
    }
    else if (value2__ == "PHONE") {
        var PHONE__ = PlusField_.split('-');
        if (PHONE__.length > 2) {
            document.getElementById('TEXT_' + ColumnName + '_1').value = PHONE__[0];
            document.getElementById('TEXT_' + ColumnName + '_2').value = PHONE__[1];
            document.getElementById('TEXT_' + ColumnName + '_3').value = PHONE__[2];
        }
    }
    else if (value2__ == "ADDRESS") {

        try {
            if (PlusField_.lastIndexOf('(') > -1) {
                var ADDRESS__ = PlusField_;
                var ADDRESS__01 = ADDRESS__.substring(0, ADDRESS__.lastIndexOf('('));
                var ADDRESS__02 = ADDRESS__.substring(ADDRESS__.lastIndexOf('('));
                ADDRESS__02 = ADDRESS__02.replaceAll("(", "").replaceAll(")", "");
                var ADDRESS__01_ = ADDRESS__02.split('-');
                var ADDRESS__02_ = ADDRESS__01.split('↑');
                if (ADDRESS__02_.length > 1) {
                    document.getElementById('txt_' + ColumnName + '_addr1').value = ADDRESS__02_[0];
                    document.getElementById('txt_' + ColumnName + '_addr2').value = ADDRESS__02_[1];
                }
                if (ADDRESS__01_.length > 1) {
                    document.getElementById('txt_' + ColumnName + '_zipcode1').value = ADDRESS__01_[0];
                    document.getElementById('txt_' + ColumnName + '_zipcode2').value = ADDRESS__01_[1];
                }
            }
        } catch (err) { }
    }
    else if (value2__ == "DATE") {
        try { document.getElementById('TEXT_' + ColumnName).value = PlusField_; } catch (err) { }
    }
    else if (value2__ == "FILE") {
        /*고민중...*/
        var FILE__ = document.getElementById('textarea_' + ColumnName).value;
        if (FILE__ != "" && FILE__.indexOf('/') > -1) {
            var FILE__01 = FILE__.substring(FILE__.lastIndexOf('/') + 1);
            document.getElementById('TEXT_' + ColumnName).value = FILE__;
            document.getElementById('SPAN_' + ColumnName).style.display = "";
            document.getElementById('SPANF_' + ColumnName).innerHTML = FILE__01;
            document.getElementById('SPANF1_' + ColumnName).innerHTML = '<img src="' + PageBaseInfo.BF + FILE__ + '" />';
        }
    }
    else if (value2__ == "CHECKBOX") {
        try { document.getElementById('TEXT_' + ColumnName).value = PlusField_; } catch (err) { }


        var TEMP_VALUE = document.getElementById('TEXT_' + ColumnName).value2.split('↑');
        var TEMP_VALUE2 = document.getElementById('TEXT_' + ColumnName).value.split(',');

        for (var NUM = 0; NUM < TEMP_VALUE.length; NUM++) {
            if (TEMP_VALUE[NUM].trim() == "") { continue; }
            var TEMP_VALUE3 = document.getElementById(ColumnName + '_' + NUM).value;

            for (var NUM2 = 0; NUM2 < TEMP_VALUE2.length; NUM2++) {
                if (TEMP_VALUE2[NUM2] == TEMP_VALUE3) {
                    document.getElementById(ColumnName + '_' + NUM).checked = true;
                    break;
                }
            }
        }
    }
    else if (value2__ == "SELECTBOX") {
        Teldd(document.getElementById('DDL_' + ColumnName), PlusField_);
    }
    else if (value2__ == "TEXTAREA") {
        try { document.getElementById('TEXT_' + ColumnName).value = PlusField_; } catch (err) { }
    }
    else if (value2__ == "SPAM") {
    }
}


function NEWVIEW(obj) {
    if (obj.innerHTML.indexOf("더보기") > -1) {
        var nextNode0 = obj.parentNode.parentNode.nextSibling;
        nextNode0.style.display = "";
        obj.parentNode.parentNode.childNodes[0].style.display = "none";
        obj.parentNode.parentNode.childNodes[1].style.display = "";
    }
    else {
        var nextNode0 = obj.parentNode.parentNode.nextSibling;
        nextNode0.style.display = "none";
        obj.parentNode.parentNode.childNodes[0].style.display = "";
        obj.parentNode.parentNode.childNodes[1].style.display = "none";
    }
}



function BOARD_MENUOPEN(obj) {
    var nextNode0 = obj.parentNode.parentNode.nextSibling.nextSibling;
    var nextNode2 = obj.parentNode.parentNode.nextSibling.nextSibling.nextSibling;
    if (nextNode0.style.display == "") {
        nextNode0.style.display = "none";
        nextNode2.style.display = "none";
    }
    else {
        nextNode0.style.display = "";
        nextNode2.style.display = "";
    }
}

function BOARD_MENUOPEN2(e1) {
    var obj1 = document.getElementById("hid_B_obj_" + e1 + "_0"); var obj2 = document.getElementById("hid_B_obj_" + e1 + "_1");
    if (obj1.style.display == "") { obj1.style.display = "none"; obj2.style.display = "none"; } else { obj1.style.display = ""; obj2.style.display = ""; }
}

var default_imgwidth = 600;
function PostimgResizing() {

    var h, s;
    jQuery('#bbs_content,.bbs5').find('img').not(".bbs5_X").each(function () {

        if (jQuery(this).width() > default_imgwidth) {
            h = jQuery(this).height() / jQuery(this).width() * default_imgwidth;
            jQuery(this).attr({ height: h });
            jQuery(this).attr({ width: default_imgwidth });

            // 부모 노드가 a태그를 포함하고 있다면 임시 클래스를 부여하고 다시 랩을 씌우자
            if (this.parentNode.tagName == "A") {
                this.className = "tmplinkchg";

                s = "<a href='" + this.parentNode.getAttribute("href") + "' target=_blank ></a>";
                jQuery(this).wrap(s);

            }
            else {
                s = "<a href='" + jQuery(this).attr("src") + "' ></a>";
                jQuery(this).wrap(s);
            }
        }
        if (this.parentNode.tagName == "A") {
            this.className = "tmplinkchg";

            s = "<a href='" + this.parentNode.getAttribute("href") + "' target=_blank ></a>";
            jQuery(this).wrap(s);
        }
    });

    jQuery('#bbs_content,.bbs5').find('img').not(".bbs5_X").each(function () {
        if (jQuery(this).width() > default_imgwidth) {
            h = jQuery(this).height() / jQuery(this).width() * default_imgwidth;
            jQuery(this).attr({ height: h });
            jQuery(this).attr({ width: default_imgwidth });
            s = "<a href='" + jQuery(this).attr("src") + "' ></a>";
            jQuery(this).wrap(s);
        }
    }).lightBox().css("cursor", "pointer");


}

function PostimgResizing2P() {

    var h, s;
    jQuery('#bbs_content,.bbs5_2').find('img').not(".bbs5_X").each(function () {
        if (jQuery(this).width() > default_imgwidth) {
            h = jQuery(this).height() / jQuery(this).width() * default_imgwidth;
            jQuery(this).attr({ height: h });
            jQuery(this).attr({ width: default_imgwidth });
            s = "<a href='" + jQuery(this).attr("src") + "' ></a>";
            jQuery(this).wrap(s);
        }
    }).lightBox().css("cursor", "pointer");

}


function PHOTOE_VIEW(e) {
    for (var NNX = 0; NNX < 20; NNX++) {
        try { document.getElementById("photo_num_" + NNX + "_1").style.display = "none"; } catch (err) { }
        try { document.getElementById("photo_num_" + NNX + "_2").style.display = "none"; } catch (err) { }
        try { document.getElementById("photo_num_" + NNX + "_3").style.display = "none"; } catch (err) { }
    }
    try { document.getElementById("photo_num_" + e + "_1").style.display = ""; } catch (err) { }
    try { document.getElementById("photo_num_" + e + "_2").style.display = ""; } catch (err) { }
    try { document.getElementById("photo_num_" + e + "_3").style.display = ""; } catch (err) { }
}


/********** 배경 지정 ********************************************************************************************/
function BOARD_BACK_GROUNDS(color_name, color_img, background_color, background_image) {
    if (color_img != 5) {
        ASITEINFO.COLOR_IMG = color_img;
        ASITEINFO.BACKGROUND_COLOR = background_color;
        ASITEINFO.BACKGROUND_IMAGE = background_image;
    }

    if (ASITEINFO.COLOR_IMG == 0) {
        if (ASITEINFO.BACKGROUND_COLOR != "") {
            document.write('<style>.BOARD_BODY_' + color_name + '{background:' + ASITEINFO.BACKGROUND_COLOR + ';}</style>');
        }
    }
    else {
        if (ASITEINFO.BACKGROUND_IMAGE != "") {
            document.write('<style>.BOARD_BODY_' + color_name + '{background: url(' + http_https() + location.host + PageBaseInfo.BF + ASITEINFO.BACKGROUND_IMAGE + ') ' + ASITEINFO.BACKGROUND_COLOR + '; }</style>');
        }
    }
}
/********** 배경 지정 ********************************************************************************************/

function cate_IME(num____) {
    var obj_1 = document.getElementById("Board_CateItem"); var obj_2 = document.getElementById("Board_CateItem2");

    if (obj_1.selectedIndex == -1) { var MX__1 = obj_2.length; for (var NNX_ = 1; NNX_ < MX__1; NNX_++) { obj_.remove(1); } obj_2.style.display = "none"; }
    else {

        var MX__1 = obj_2.length;
        for (var NNX_ = 1; NNX_ < MX__1; NNX_++) { obj_2.remove(1); }
        var now_seq = obj_1.selectedIndex; var mm_1 = obj_1[now_seq].value2; if (mm_1 == null) { mm_1 = obj_1[now_seq].help; }; if (mm_1 == null) { mm_1 = obj_1[now_seq].title; }; if (mm_1 == null) { mm_1 = ""; };
        var mm_1__ = mm_1.split('↓');
        if (mm_1__.length > 1) {
            for (var NNX_ = 1; NNX_ < mm_1__.length; NNX_++) { obj_2.options[NNX_] = new Option(mm_1__[NNX_], mm_1__[NNX_]); }
            if (num____ == 1) { obj_2.style.display = ""; } else { obj_2.style.display = "none"; }
        }
        else { obj_2.style.display = "none"; }
    }
}

function CheckHangulN(obj_) {
    var str = obj_.value;
    strarr = new Array(str.length);
    schar = new Array(' ', '[', ']', '{', '}', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '/', '.', '>', '<', ',', '?', '}', '{', ' ', '\\', '|', '(', ')', '+', '=');
    flag = true;
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < schar.length; j++) {
            if (schar[j] == str.charAt(i)) {
                flag = false;
            }
        }
        strarr[i] = str.charAt(i)
        //        if ((strarr[i] >= 0) && (strarr[i] <= 9)) {
        //            flag = false;
        //        } else if ((strarr[i] >= 'a') && (strarr[i] <= 'z')) {
        //            flag = false;
        //        } else if ((strarr[i] >= 'A') && (strarr[i] <= 'Z')) {
        //            flag = false;
        //        } else 
        if ((escape(strarr[i]) > '%60') && (escape(strarr[i]) < '%80')) {
            flag = false;
        }
    }
    if (!flag) {
        obj_.value = "";
    }

}
var nummm_baord = 0;

var TEMPLATE = {
    obj: null,
    LOAD: function (e, e1) /*보드 리스트*/
    {
        if (e1 == "") return "";
        var TemplateNcode = eval("Board_" + e + "_TemplateNcode");
        var TEMPLATE_t = false;

        if (TemplateNcode == "") {
            TEMPLATE_t = false;
        }
        else {
            for (var nn = 0; nn < Board_Seed_Template.length; nn++) {
                if (Board_Seed_Template[nn] == TemplateNcode) {
                    TEMPLATE_t = true;
                    break;
                }
            }
        }
        var ret;
        if (TEMPLATE_t == true) {
            try { var oesse = eval("Template_" + TemplateNcode + "_" + e1); ret = oesse; } catch (err) { }
        }
        else {
            if (Board_Seed_Template.length > 0) {
                try { var oesse = eval("Template_" + Board_Seed_Template[0] + "_" + e1); ret = oesse; } catch (err) { }
            }
        }
        return ret;
    }
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

function BoardAuthorityB(e1) {
    var ifr = document.getElementById("ifr00030_" + e1).contentWindow;
    var BoardAuthorityBL = new Array();
    for (NN = 0; NN < 13; NN++) {
        BoardAuthorityBL[NN] = ifr.document.getElementById("BoardAuthority" + NN).value;
    }
    return BoardAuthorityBL;
}

function E_MEM(Board_Num) {
    return BoardAuthorityB(BoardTEMP_Ncode[Board_Num].replaceAll("{", "").replaceAll("}", ""));
}