/*
실명인증
약관동의 
회원가입작성 
작성완료 
회원로그인
*/
var Now_num= 0; 

var chk_member= false ; /* 회원 중복 여부 확인용. */
function http_https() {if( location.href.indexOf("https://")  == 0  ) {return "https://";}else{return "http://";}}
String.prototype.trim = function(){return this.replace(/(^\s*)|(\s*$)/gi, "");}
String.prototype.replaceAll = function(str1, str2) {var temp_str = "";if (this.trim() != "" && str1 != str2) {temp_str = this.trim();while (temp_str.indexOf(str1) > -1){temp_str = temp_str.replace(str1, str2);}}return temp_str;}
String.prototype.replaceAll2 = function(str1, str2){var temp_str = this.trim();temp_str = temp_str.replace(eval("/" + str1 + "/gi"), str2);return temp_str;}
function createRequestObject() {if (window.XMLHttpRequest) {return xmlhttprequest = new XMLHttpRequest();}else if (window.ActiveXObject) {return xmlhttprequest = new ActiveXObject("Microsoft.XMLHTTP");}}  

var Next_Url = "";

var HTML_ = new Array();
HTML_ [0] = "B00005";
HTML_ [1] = "B00002";
HTML_ [2] = "B00003";
HTML_ [3] = "B00004";
var HTML_1 = new Array();
HTML_1[0] = "이용약관";
HTML_1[1] = "개인정보취급방침";
HTML_1[2] = "개인정보 제3자 제공 관련";
HTML_1[3] = "개인정보취급 위탁 관련"; 
var TEMP_OPPP = new Array();

function Next_Url_LD(url)
{
    if(Next_Url  != "" ){return Next_Url ;}
    else
    {
        if(Next_Url == "") {
            var str = "ajaxType=NEXT_URL" +
            	"&memid=" + (url.trim().replaceAll(">", "&gt;").replaceAll("<", "&lt;"));

            var result;
            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "html",               //데이타타입 html, xml 등등
                url: "/COMMON/Ajox.aspx",     //경로
                data: str,
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                success: function(data) {
                    result = data;
                },    //성공시 실행할 함수
                error: function() {
                    return false;
                }             //에러발생시 실행할 함수
            });
            var str = result.trim();
            Next_Url = (str);
        }
    
        if(Next_Url == "") Next_Url="/";
        return Next_Url;
    }
}

function Next_Url_LD_GO(url, purl) {
    if (purl == null) purl = "";
    if (Next_Url != "") { location.href = Next_Url; }
    else {

        if (Next_Url == "") {

            var remoteurl = "/Common/SHOPS/ProdCart/NextGO.aspx";
            var remoteparams = "type=" + url + "&pdn=" + XncodeUR(PageBaseInfo.domain);

            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "html",               //데이타타입 html, xml 등등
                url: remoteurl,     //경로
                data: remoteparams,
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                success: function (data) { 
                    try {
                        location.href = (data.trim() == "" ? "/" : data.trim() + purl);
                    } catch (e) {
                        alert("Javascript Error -> " + e.description);
                    } 
                },    //성공시 실행할 함수
                error: function () {
                    return false;
                }             //에러발생시 실행할 함수
            }); 
        }
        else {
            location.href = "/";
        }
    }
}
function Next_Url_LD_GET(url, purl) {
    if (purl == null) purl = "";
    if (Next_Url != "") { location.href = Next_Url; }
    else {

        if (Next_Url == "") {

            var remoteurl = "/Common/SHOPS/ProdCart/NextGO.aspx";
            var remoteparams = "type=" + url + "&pdn=" + XncodeUR(PageBaseInfo.domain);
            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "html",               //데이타타입 html, xml 등등
                url: remoteurl,     //경로
                data: remoteparams,
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                success: function (data) {
                    try { 
                        Next_Url = (data.trim() == "" ? "/" : data.trim() + purl);
                    } catch (e) {
                        alert("Javascript Error -> " + e.description);
                    }
                },    //성공시 실행할 함수
                error: function () {
                    return false;
                }             //에러발생시 실행할 함수
            }); 
        }
        else {
            Next_Url = "/";
        }
    }
}

function Next_Url_LD2(url) {
    var str = "ajaxType=NEXT_URL" + "&memid=" + (url.trim().replaceAll(">", "&gt;").replaceAll("<", "&lt;"));
    var result;
    jQuery.ajax({
        type: "POST",                   //타입 GET , POST
        datatype: "html",               //데이타타입 html, xml 등등
        url: "/COMMON/Ajox.aspx",     //경로
        data: str,
        async: false,                   //비동기 사용여부 true : 비동기, false : 동기
        success: function(data) {
            result = data;
        },    //성공시 실행할 함수
        error: function() {
            return "";
        }             //에러발생시 실행할 함수
    });
    return result.trim();    
}
function Make_STATE(e)
{
    var tdText_In2=document.createElement('input');
    tdText_In2.type="hidden"; 
    tdText_In2.name = 'TXT_Make_STATE';
    tdText_In2.id = 'TXT_Make_STATE';
    tdText_In2.value=e;
    document.forms[0].appendChild(tdText_In2);
    
    var tdText_In3=document.createElement('input');
    tdText_In3.type="hidden"; 
    tdText_In3.name = 'TXT_Make_STATE_URL';
    tdText_In3.id = 'TXT_Make_STATE_URL';
    tdText_In3.value='';
    document.forms[0].appendChild(tdText_In3);
}

var SUBMIT_COUNTS = 0 ;
var SUBMIT_memid   = false ;
var SUBMIT_memnick = false ;

var Member = {
    obj: null,
    RealCheck: function (e, e1, e2, e3) /*실명인증*/
    {
        if (e == 'LOAD') {
            if (MemberInfo_Personal == 0) { /* 사용하지않음. 다음으로 이동한다. */Member.RealCheck('SUBMIT'); }

            window.onload = function () {
                if (e1 != null) { CHKPLUS(e1, 'txt', 20); };
                if (e2 != null) { CHKPLUS(e2, 'int', 6); };
                if (e3 != null) { CHKPLUS(e3, 'int', 7); };
                notice_setcookie('RealCheckName', '', 1);
                notice_setcookie('RealCheckSsn', '', 1);
                Make_STATE('RealCheck');
            }
        }
        else if (e == 'SUBMIT') {
            Next_Url_LD('Agreement');
            if (MemberInfo_Personal == 0) {/* 사용하지않음. 다음으로 이동한다. */
                location.href = Next_Url;
            }
            else {/*체크하고 이동한다.*/
                if (document.getElementById(e1).value.trim() == "")
                { document.getElementById(e1).focus(); alert("이름을 입력하십시요."); return; }
                if (document.getElementById(e2).value.trim() == "")
                { document.getElementById(e2).focus(); alert("주민등록번호을 입력하십시요."); return; }
                if (document.getElementById(e3).value.trim() == "")
                { document.getElementById(e3).focus(); alert("주민등록번호을 입력하십시요."); return; }


                if (isValidJuminNo(document.getElementById(e2).value + document.getElementById(e3).value) == true) {



                    var str = "";
                    var m_e = ''
                    + 'ajaxType=SSN_CHK'
                    + '&SSN=' + document.getElementById(e2).value + '-' + document.getElementById(e3).value;
                    jQuery.ajax({
                        type: "POST",                   //타입 GET , POST
                        datatype: "html",               //데이타타입 html, xml 등등
                        url: "/COMMON/Client.aspx",     //경로
                        data: m_e,
                        async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                        success: function (result) {
                            str = result;
                        },    //성공시 실행할 함수
                        error: function () {
                            return false;
                        }             //에러발생시 실행할 함수
                    });


                    if (str != '0') {
                        alert('회원님은 이미 회원가입이 되어 있습니다.\n아이디/비번찿기를 통해 가입내역을 확인해 주세요');
                        return;
                    }

                    notice_setcookie('RealCheckName', document.getElementById(e1).value.trim(), 1);
                    notice_setcookie('RealCheckSsn', document.getElementById(e2).value.trim() + '-' + document.getElementById(e3).value.trim(), 1);

                    location.href = Next_Url;
                }
            }
        }
    },
    Agreement: function (e) /*약관동의*/
    {
        if (e == 'LOAD') {

            if (HTML_PPI_3 == 0) HTML_[2] = "";
            if (HTML_PPI_trust == 0) HTML_[3] = "";

            var HTMLL = "";


            for (var mm = 0; mm < HTML_.length; mm++) {
                if (HTML_[mm] == "") continue;
                var obj__ = eval('HTML_' + HTML_[mm]);
                document.write('\
                <table cellspacing="0" cellpadding="4" width="100%" border="0">\
                <tbody><tr><td><table cellspacing="0" cellpadding="15" width="100%" bgcolor="#f1f1f1" border="0">\
                <tbody><tr><td class="pad0 bold" valign="bottom" align="left" height="35"><font color="#f1f1f1">...</font><img height="11" alt="" width="18" align="absMiddle" src="/img/ico_circle_01.gif" />' + HTML_1[mm] + '</td>\
                </tr><tr><td><table cellspacing="1" cellpadding="0" width="100%" bgcolor="#dddddd" border="0">\
                <tbody><tr><td valign="top" align="left" bgcolor="#ffffff" height="160"><div class="scrollbox1">' + obj__ + '</div>\
                </td></tr></tbody></table></td></tr><tr><td class="pad0" valign="top" align="center" height="37">\
                <table class="input_no" id="RadioButtonList1" hidefocus="hidefocus" style="width: 250px; selector-dummy: true" border="0"><tbody><tr>\
                <td><input id="rbo_' + HTML_[mm] + '_0" hidefocus="hidefocus" style="selector-dummy: true" type="radio" name="rbo_' + HTML_[mm] + '" value="on" /><label for="rbo_' + HTML_[mm] + '_0">동의합니다</label></td>\
                <td><input id="rbo_' + HTML_[mm] + '_1" hidefocus="hidefocus" style="selector-dummy: true" type="radio" name="rbo_' + HTML_[mm] + '" value="on" /><label for="rbo_' + HTML_[mm] + '_1">동의하지 않습니다</label></td>\
                </tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>');
            }

            if (MemberInfo_Personal == 0) { } else {
                var nnname = notice_getcookie('RealCheckName');
                var nnnssn = notice_getcookie('RealCheckSsn');
                if (nnname == '') { /* 사용하지않음. 다음으로 이동한다. */Next_Url_LD('RealCheck'); location.href = Next_Url; };
                if (nnname == null) { /* 사용하지않음. 다음으로 이동한다. */Next_Url_LD('RealCheck'); location.href = Next_Url; };
            };

            window.onload = function () {
                Make_STATE('Agreement');
            }
        }
        else if (e == 'SUBMIT') {
            Next_Url_LD('JoinForm');
            var chk__ = true;
            for (var mm = 0; mm < HTML_.length; mm++) {
                if (HTML_[mm] == "") continue;
                if (document.getElementById("rbo_" + HTML_[mm] + "_0").checked == false) {
                    alert(HTML_1[mm] + "을 동의하지 않았습니다.!");
                    chk__ = false;
                    return;
                }
            }
            if (chk__ == true) { /*alert ("go:"+Next_Url);*/location.href = Next_Url; }
        }
    },
    JoinFormCheck: function (e1, e2) /*중복체크*/
    {
        if (e1 == "memid") {
            var obj = document.getElementById("TEXT_" + e1);

            if (obj.value.trim() == '') {
                obj.value = '';
                alert('' + e2 + '를 작성해주세요.');
                obj.focus();
                return;
            }
            if (obj && e1.indexOf("memid") > -1) {
                obj.value = obj.value.trim();
                if (obj.value.length < 4
                 || obj.value.length >= 20) {
                    alert(e2 + "는 4자이상, 20자 이하여야합니다.");
                    obj.focus();
                    return;
                }
            }

            var str = "";
            var m_e = ''
            + 'ajaxType=MasterInfo'
            + '&memid=' + (obj.value.trim().replaceAll(">", "&gt;").replaceAll("<", "&lt;"));
            var str;
            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "html",               //데이타타입 html, xml 등등
                url: "/COMMON/Client.aspx",     //경로
                data: m_e,
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                success: function (result) {
                    str = result;
                },    //성공시 실행할 함수
                error: function () {
                    return false;
                }             //에러발생시 실행할 함수
            });

            if (str == "0") {
                SUBMIT_memid = true;
                alert('[' + obj.value.trim() + ']은 사용가능한 ' + e2 + '입니다.');
            }
            else {
                SUBMIT_memid = false;
                alert('[' + obj.value.trim() + ']은 이미 사용중인 ' + e2 + '입니다.');
            }
        }
        else if (e1 == "memnick") {
            var obj = document.getElementById("TEXT_" + e1);

            if (obj.value.trim() == '') {
                obj.value = '';
                obj.focus();
                return;
            }

            var str = "";
            var m_e = ''
            + 'ajaxType=MasterInfoNick'
            + '&nick=' + (obj.value.trim().replaceAll(">", "&gt;").replaceAll("<", "&lt;"));
            var str;
            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "html",               //데이타타입 html, xml 등등
                url: "/COMMON/Client.aspx",     //경로
                data: m_e,
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                success: function (result) {
                    str = result;
                },    //성공시 실행할 함수
                error: function () {
                    return false;
                }             //에러발생시 실행할 함수
            });

            if (str == "0") {
                SUBMIT_memnick = true;
                alert('[' + obj.value.trim() + ']은 사용가능한 ' + e2 + '입니다.');
            }
            else {
                SUBMIT_memnick = false;
                alert('[' + obj.value.trim() + ']은 이미 사용중인 ' + e2 + '입니다.');
            }
        }
    },
    JoinForm: function (e) /*회원가입작성*/
    {
        if (notice_getcookie("USERID") != "") { alert("로그아웃를 먼저하십시요."); location.href = '/'; }
        if (e == 'LOAD') {
            if (MemberInfo_Personal == 0) { } else {
                var nnname = notice_getcookie('RealCheckName');
                var nnnssn = notice_getcookie('RealCheckSsn');
                if (nnname == '') { /* 사용하지않음. 다음으로 이동한다. */Next_Url_LD('RealCheck'); location.href = Next_Url; };
                if (nnname == null) { /* 사용하지않음. 다음으로 이동한다. */Next_Url_LD('RealCheck'); location.href = Next_Url; };
            };
            var HTMLLL = '';
            HTMLLL += '\
                <tr id="tr1_memgrade" ' + (MemberInfo_viewgrade == "1" ? "" : "style=\"display:none;\"") + '><td class="padL15" align="left" width="20%" bgcolor="#f8f8f8">회원구분*</td><td class="padL15" align="left"><SPAN id="SPAN_RADIO_MemGrade"></SPAN></td></tr>\
                <tr id="tr2_memgrade" ' + (MemberInfo_viewgrade == "1" ? "" : "style=\"display:none;\"") + '><td class="pad0" bgcolor="#d9d9d9" colspan="2"><div class="dheight_1"></div></td></tr>';
            var label01 = "", label02 = "";
            for (mm = 0; mm < MemberSetup_FildName.length; mm++) {
                label01 = ""; label02 = "";
                if (MemberSetup_Type[mm] == "JUMIN") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">";
                    label02 = "</label><label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + "</label>";
                }
                else if (MemberSetup_Type[mm] == "TEXT") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "TEXT2") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "PASS") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label><label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + "</label>";
                }
                else if (MemberSetup_Type[mm] == "EMAIL") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">";
                    label02 = "</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">" + MemberSetup_FildName[mm] + "@에 앞 자리 입력하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + "@에 뒤 자리(직접입력시) 입력하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"DDL_" + MemberSetup_ColumnName[mm] + "\">" + MemberSetup_FildName[mm] + "@에 뒤 자리 선택하여 주십시요.</label>";
                }
                else if (MemberSetup_Type[mm] == "RADIO") {
                    label01 = "<label for=\"RADIO_" + MemberSetup_ColumnName[mm] + "_1\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "PHONE") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">";
                    label02 = "</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + " 중간 자리 입력하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_3\">" + MemberSetup_FildName[mm] + " 뒤 자리 입력하여 주십시요.</label>";
                }
                else if (MemberSetup_Type[mm] == "ADDRESS") {
                    label01 = "<label for=\"txt_" + MemberSetup_ColumnName[mm] + "_zipcode1\">";
                    label02 = "</label>"
                    + "<label class=\"dcaption\" for=\"txt_" + MemberSetup_ColumnName[mm] + "_zipcode1\">" + MemberSetup_FildName[mm] + "에 우편번호 앞 자리 선택하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"txt_" + MemberSetup_ColumnName[mm] + "_zipcode2\">" + MemberSetup_FildName[mm] + "에 우편번호 뒤 자리 선택하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"txt_" + MemberSetup_ColumnName[mm] + "_addr1\">" + MemberSetup_FildName[mm] + " 앞 자리 선택하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"txt_" + MemberSetup_ColumnName[mm] + "_addr2\">" + MemberSetup_FildName[mm] + " 뒤 자리 입력하여 주십시요.</label>";
                }
                else if (MemberSetup_Type[mm] == "DATE") {
                    if (MemberSetup_ColumnName[mm] == "memmarridate" || MemberSetup_ColumnName[mm] == "membirth") {
                        label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_0\">";
                        label02 = "</label><label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_0\">" + MemberSetup_FildName[mm] + "에 년도을 입력하여 주십시요.</label>"
                        + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">" + MemberSetup_FildName[mm] + "에 월을 선택하여 주십시요.</label>"
                        + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + "에 일을 선택하여 주십시요.</label>";
                    }
                    else {
                        label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                        label02 = "</label>";
                    }
                }
                else if (MemberSetup_Type[mm] == "FILE") {
                    label01 = "<label for=\"FILE_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">" + MemberSetup_FildName[mm] + " 첩부화일 정보 입니다.</label>";

                }
                else if (MemberSetup_Type[mm] == "CHECKBOX") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "SELECTBOX") {
                    label01 = "<label for=\"DDL_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "TEXTAREA") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "SPAM") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                } 


                if (MemberSetup_Type[mm] == "TITLES") {
                    HTMLLL += ''
                    + '<tr id="tr1_' + MemberSetup_ColumnName[mm] + '">'
                    + '<td align="left" class="bold" colspan="2" style="padding-top:20px;"><img src="/img/ico_circle_01.gif" width="18" height="11" align="absmiddle" />'
                    + label01+ MemberSetup_FildName[mm]+ label02
                    + ' <span class="helptxt">' + MemberSetup_Memo[mm] + '</span></td></tr>'
                    + '<tr id="tr2_' + MemberSetup_ColumnName[mm] + '"><td class="pad0" bgcolor="#818181" colspan="2"><div class="dheight_1"></div></td></tr>';
                }
                else {
                    HTMLLL2 = ''; if (MemberSetup_essentiality[mm] == 1) HTMLLL2 = '*';
                    HTMLLL += ''
                    + '<tr id="tr1_' + MemberSetup_ColumnName[mm] + '"><td class="padL15" align="left" width="20%" bgcolor="#f8f8f8">'
                    + label01 + MemberSetup_FildName[mm] + label02 + HTMLLL2
                    + '</td><td class="padL15" align="left">' + MAKE_INPUT_TYPE(mm) + '</td></tr>'
                    + '<tr id="tr2_' + MemberSetup_ColumnName[mm] + '"><td class="pad0" bgcolor="#d9d9d9" colspan="2"><div class="dheight_1"></div></td></tr>';
                }
            }
            document.write(''
            + '<div align="right" style="text-align:right;">( * 표시는 필수 입력사항입니다. )</div>'
            + '<table cellspacing="0" cellpadding="4" width="100%" border="0">'
            + '<caption class="dcaption" >회원가입작성 페이지 입니다.</caption>'
            + '<thead class="dcaption" ><th scope="col">컬럼명</th><th scope="col">등록 내용</th></thead><tbody>'
            + '<tbody>'
            + '<tr><td class="pad0" bgcolor="#818181" colspan="2"><div class="dheight_1"></div></td></tr>'
            + '<tr><td class="pad0" bgcolor="#f0f0f0" colspan="2"><div class="dheight_2"></div></td></tr>'
            + '' + HTMLLL + '</tbody></table>');
            try {
                document.getElementById("SPAN_memid").innerHTML = "&nbsp;<a onclick=\"Member.JoinFormCheck('memid','아이디');return false;\" href=\"#\">"
                + "<img style=\"cursor:pointer\"  src=\"/img/bt_check_overlap.gif\" alt=\"중복체크\" width=\"68\" height=\"23\" align=\"middle\" /></a>&nbsp;";
            } catch (err) { }
            try {
                document.getElementById("SPAN_memnick").innerHTML = "&nbsp;<a onclick=\"Member.JoinFormCheck('memnick','닉네임');return false;\" href=\"#\">"
                + "<img style=\"cursor:pointer\"  src=\"/img/bt_check_overlap.gif\" alt=\"중복체크\" width=\"68\" height=\"23\" align=\"middle\" /></a>&nbsp;";
            } catch (err) { }
            try { document.getElementById("TEXT_memid").onchange = function () { SUBMIT_memid = false; } } catch (err) { }
            try { document.getElementById("TEXT_memnick").onchange = function () { SUBMIT_memnick = false; } } catch (err) { }

            if (MemberInfo_Personal == 0) { } else { var nnname = notice_getcookie('RealCheckName'); var nnnssn = notice_getcookie('RealCheckSsn'); try { document.getElementById('TEXT_memname').value = nnname; document.getElementById('TEXT_memname').readOnly = true; } catch (err) { } try { if (nnnssn.indexOf('-') > -1) { var nnnssn_ = nnnssn.split('-'); document.getElementById('TEXT_memjumin_1').value = nnnssn_[0]; document.getElementById('TEXT_memjumin_2').value = nnnssn_[1]; document.getElementById('TEXT_memjumin_1').readOnly = true; document.getElementById('TEXT_memjumin_2').readOnly = true; } } catch (err) { } }

            window.onload = function () {
                Make_STATE('JoinForm');
                Member.MemGrade('RADIO');
            }
        }
        else if (e == 'SUBMIT') {
            Next_Url_LD('JoinOk');
            document.getElementById("TXT_Make_STATE_URL").value = Next_Url;
            if (chk_form('JoinForm') == false) { return; }
            if (SUBMIT_COUNTS == 0) { document.forms[0].submit(); } SUBMIT_COUNTS++;
        }
    },
    JoinFormADMIN: function (e) /*관리자 회원가입작성,수정*/
    {
        if (e == 'LOAD') {
            var HTMLLL = ''; /*for (mm = 0; mm < MemberSetup_FildName.length; mm++) { HTMLLL2 = ''; if (MemberSetup_essentiality[mm] == 1) HTMLLL2 = '*'; HTMLLL += '<tr id="tr1_' + MemberSetup_ColumnName[mm] + '"><td width="20%" align="left" bgcolor="#f6f6f6" class="tbst0401">' + MemberSetup_FildName[mm] + HTMLLL2 + '</td><td align="left" bgcolor="#FFFFFF"  >' + MAKE_INPUT_TYPE(mm) + '</td></tr>'; }*/
            var label01 = "", label02 = "";
            for (mm = 0; mm < MemberSetup_FildName.length; mm++) {
                label01 = ""; label02 = "";
                if (MemberSetup_Type[mm] == "JUMIN") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">";
                    label02 = "</label><label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + "</label>";
                }
                else if (MemberSetup_Type[mm] == "TEXT") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "TEXT2") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "PASS") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label><label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + "</label>";
                }
                else if (MemberSetup_Type[mm] == "EMAIL") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">";
                    label02 = "</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">" + MemberSetup_FildName[mm] + "@에 앞 자리 입력하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + "@에 뒤 자리(직접입력시) 입력하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"DDL_" + MemberSetup_ColumnName[mm] + "\">" + MemberSetup_FildName[mm] + "@에 뒤 자리 선택하여 주십시요.</label>";
                }
                else if (MemberSetup_Type[mm] == "RADIO") {
                    label01 = "<label for=\"RADIO_" + MemberSetup_ColumnName[mm] + "_1\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "PHONE") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">";
                    label02 = "</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + " 중간 자리 입력하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_3\">" + MemberSetup_FildName[mm] + " 뒤 자리 입력하여 주십시요.</label>";
                }
                else if (MemberSetup_Type[mm] == "ADDRESS") {
                    label01 = "<label for=\"txt_" + MemberSetup_ColumnName[mm] + "_zipcode1\">";
                    label02 = "</label>"
                    + "<label class=\"dcaption\" for=\"txt_" + MemberSetup_ColumnName[mm] + "_zipcode1\">" + MemberSetup_FildName[mm] + "에 우편번호 앞 자리 선택하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"txt_" + MemberSetup_ColumnName[mm] + "_zipcode2\">" + MemberSetup_FildName[mm] + "에 우편번호 뒤 자리 선택하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"txt_" + MemberSetup_ColumnName[mm] + "_addr1\">" + MemberSetup_FildName[mm] + " 앞 자리 선택하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"txt_" + MemberSetup_ColumnName[mm] + "_addr2\">" + MemberSetup_FildName[mm] + " 뒤 자리 입력하여 주십시요.</label>";
                }
                else if (MemberSetup_Type[mm] == "DATE") {
                    if (MemberSetup_ColumnName[mm] == "memmarridate" || MemberSetup_ColumnName[mm] == "membirth") {
                        label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_0\">";
                        label02 = "</label><label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_0\">" + MemberSetup_FildName[mm] + "에 년도을 입력하여 주십시요.</label>"
                        + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">" + MemberSetup_FildName[mm] + "에 월을 선택하여 주십시요.</label>"
                        + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + "에 일을 선택하여 주십시요.</label>";
                    }
                    else {
                        label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                        label02 = "</label>";
                    }
                }
                else if (MemberSetup_Type[mm] == "FILE") {
                    label01 = "<label for=\"FILE_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">" + MemberSetup_FildName[mm] + " 첩부화일 정보 입니다.</label>";

                }
                else if (MemberSetup_Type[mm] == "CHECKBOX") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "SELECTBOX") {
                    label01 = "<label for=\"DDL_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "TEXTAREA") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "SPAM") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                } 
                if (MemberSetup_Type[mm] == "TITLES") {
                    HTMLLL += ''
                    + '<tr id="tr1_' + MemberSetup_ColumnName[mm] + '" bgColor="#ffffff">'
                    + '<td align="left" class="bold" colspan="2" style="padding-top:20px;"><img src="/img/ico_circle_01.gif" width="18" height="11" align="absmiddle" />'
                    + label01 + MemberSetup_FildName[mm] + label02 + ' <span class="helptxt">' + MemberSetup_Memo[mm] + '</span></td></tr>';
                }
                else {

                    HTMLLL2 = ''; if (MemberSetup_essentiality[mm] == 1) HTMLLL2 = '*';
                    HTMLLL += '<tr id="tr1_' + MemberSetup_ColumnName[mm] + '"><td width="20%" align="left" bgcolor="#f6f6f6" class="tbst0401">'
                    + label01 + MemberSetup_FildName[mm] + label02 + HTMLLL2 + '</td><td align="left" bgcolor="#FFFFFF"  >' + MAKE_INPUT_TYPE(mm) + '</td></tr>';
                }
            }
            document.write('<table width="100%" border="0" cellpadding="4" cellspacing="1" bgcolor="#e5e5e5"><tbody>' + HTMLLL + '</tbody></table>');

            if (Request("num") == "") {
                try { document.getElementById("SPAN_memid").innerHTML = "&nbsp;<img style=\"cursor:pointer\" onclick=\"Member.JoinFormCheck('memid','아이디');\" src=\"../img/bt_check_overlap.gif\" alt=\"중복체크\" align=\"middle\" />&nbsp;"; } catch (err) { }
                try { document.getElementById("SPAN_memnick").innerHTML = "&nbsp;<img style=\"cursor:pointer\" onclick=\"Member.JoinFormCheck('memnick','닉네임');\" src=\"../img/bt_check_overlap.gif\" alt=\"중복체크\"   align=\"middle\" />&nbsp;"; } catch (err) { }
                try { document.getElementById("TEXT_memid").onchange = function () { SUBMIT_memid = false; } } catch (err) { }
                try { document.getElementById("TEXT_memnick").onchange = function () { SUBMIT_memnick = false; } } catch (err) { }
            }
        }
        else if (e == 'SUBMIT') {
            if (chk_form('JoinFormADMIN') == false) { return; };
            if (SUBMIT_COUNTS == 0) { document.forms[0].submit(); } SUBMIT_COUNTS++;
        }
        else if (e == 'DEL') {
            /*if (chk_form('JoinFormADMIN') == false ) {return ;};*/

            ans = confirm("탈퇴처리후 되돌리수 없습니다.\n\n정말로 탈퇴처리하시겠습니까?");
            if (ans == false) {
                return;
            }
            try { document.getElementById("txt_del").value = "DEL"; } catch (err) { }
            if (SUBMIT_COUNTS == 0) { document.forms[0].submit(); } SUBMIT_COUNTS++;
        }
    },
    MemMyInfo: function (e)  /*회원수정*/
    {
        if (notice_getcookie("USERID") == "") {
            /*alert ("로그을 먼저하십시요."); location.href='/';*/
            /*window.onload=function ()*/
            {
                Next_Url_LD('MemLogin');
                location.href = Next_Url + '?preurl=' + location.href.replaceAll('?', '^');
            }
            return;
        }
        if (e == 'GO') {
            Next_Url_LD('MyInfo');
            location.href = Next_Url;
        }
        else if (e == 'LOAD') {
            var HTMLLL = '';
            HTMLLL += '<tr id="tr1_memgrade"><td class="padL15" align="left" width="20%" bgcolor="#f8f8f8">회원구분*</td><td class="padL15" align="left"><SPAN id="SPAN_RADIO_MemGrade" style="display:none;"></SPAN><SPAN id="SPAN_RADIO_MemGradePP" ></SPAN></td></tr><tr id="tr2_memgrade"><td class="pad0" bgcolor="#d9d9d9" colspan="2"><div class="dheight_1"></div></td></tr>';
            var label01 = "", label02 = "";
            for (mm = 0; mm < MemberSetup_FildName.length; mm++) {
                label01 = ""; label02 = "";
                if (MemberSetup_Type[mm] == "JUMIN") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">";
                    label02 = "</label><label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + "</label>";
                }
                else if (MemberSetup_Type[mm] == "TEXT") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "TEXT2") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "PASS") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label><label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + "</label>";
                }
                else if (MemberSetup_Type[mm] == "EMAIL") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">";
                    label02 = "</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">" + MemberSetup_FildName[mm] + "@에 앞 자리 입력하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + "@에 뒤 자리(직접입력시) 입력하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"DDL_" + MemberSetup_ColumnName[mm] + "\">" + MemberSetup_FildName[mm] + "@에 뒤 자리 선택하여 주십시요.</label>";
                }
                else if (MemberSetup_Type[mm] == "RADIO") {
                    label01 = "<label for=\"RADIO_" + MemberSetup_ColumnName[mm] + "_1\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "PHONE") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">";
                    label02 = "</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + " 중간 자리 입력하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_3\">" + MemberSetup_FildName[mm] + " 뒤 자리 입력하여 주십시요.</label>";
                }
                else if (MemberSetup_Type[mm] == "ADDRESS") {
                    label01 = "<label for=\"txt_" + MemberSetup_ColumnName[mm] + "_zipcode1\">";
                    label02 = "</label>"
                    + "<label class=\"dcaption\" for=\"txt_" + MemberSetup_ColumnName[mm] + "_zipcode1\">" + MemberSetup_FildName[mm] + "에 우편번호 앞 자리 선택하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"txt_" + MemberSetup_ColumnName[mm] + "_zipcode2\">" + MemberSetup_FildName[mm] + "에 우편번호 뒤 자리 선택하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"txt_" + MemberSetup_ColumnName[mm] + "_addr1\">" + MemberSetup_FildName[mm] + " 앞 자리 선택하여 주십시요.</label>"
                    + "<label class=\"dcaption\" for=\"txt_" + MemberSetup_ColumnName[mm] + "_addr2\">" + MemberSetup_FildName[mm] + " 뒤 자리 입력하여 주십시요.</label>";
                }
                else if (MemberSetup_Type[mm] == "DATE") {
                    if (MemberSetup_ColumnName[mm] == "memmarridate" || MemberSetup_ColumnName[mm] == "membirth") {
                        label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_0\">";
                        label02 = "</label><label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_0\">" + MemberSetup_FildName[mm] + "에 년도을 입력하여 주십시요.</label>"
                        + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_1\">" + MemberSetup_FildName[mm] + "에 월을 선택하여 주십시요.</label>"
                        + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "_2\">" + MemberSetup_FildName[mm] + "에 일을 선택하여 주십시요.</label>";
                    }
                    else {
                        label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                        label02 = "</label>";
                    }
                }
                else if (MemberSetup_Type[mm] == "FILE") {
                    label01 = "<label for=\"FILE_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>"
                    + "<label class=\"dcaption\" for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">" + MemberSetup_FildName[mm] + " 첩부화일 정보 입니다.</label>";

                }
                else if (MemberSetup_Type[mm] == "CHECKBOX") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "SELECTBOX") {
                    label01 = "<label for=\"DDL_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "TEXTAREA") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                }
                else if (MemberSetup_Type[mm] == "SPAM") {
                    label01 = "<label for=\"TEXT_" + MemberSetup_ColumnName[mm] + "\">";
                    label02 = "</label>";
                } 
                
                if (MemberSetup_Type[mm] == "TITLES") {
                    HTMLLL += ''
                    + '<tr id="tr1_' + MemberSetup_ColumnName[mm] + '">'
                    + '<td align="left" class="bold" colspan="2" style="padding-top:20px;"><img src="/img/ico_circle_01.gif" width="18" height="11" align="absmiddle" />'
                    + label01 + MemberSetup_FildName[mm] + label02 + ' <span class="helptxt">' + MemberSetup_Memo[mm] + '</span></td></tr>'
                    + '<tr id="tr2_' + MemberSetup_ColumnName[mm] + '"><td class="pad0" bgcolor="#818181" colspan="2"><div class="dheight_1"></div></td></tr>';
                }
                else {
                    HTMLLL2 = ''; if (MemberSetup_essentiality[mm] == 1) HTMLLL2 = '*';
                    HTMLLL += '<tr id="tr1_' + MemberSetup_ColumnName[mm] + '"><td class="padL15" align="left" width="20%" bgcolor="#f8f8f8">'
                    + label01 + MemberSetup_FildName[mm] + label02 + HTMLLL2 + '</td><td class="padL15" align="left">' + MAKE_INPUT_TYPE(mm) + '</td></tr>'
                    + '<tr id="tr2_' + MemberSetup_ColumnName[mm] + '"><td class="pad0" bgcolor="#d9d9d9" colspan="2"><div class="dheight_1"></div></td></tr>';
                }
            }
            document.write(''
            + '<div align="right" style="text-align:right;">( * 표시는 필수 입력사항입니다. )</div>'
            + '<table cellspacing="0" cellpadding="4" width="100%" border="0">'
            + '<caption class="dcaption" >회원정보을 수정하는 페이지 입니다.</caption>'
            + '<thead class="dcaption" ><th scope="col">컬럼명</th><th scope="col">등록 내용</th></thead><tbody>'
            + '<tbody>'
            + '<tr><td class="pad0" bgcolor="#818181" colspan="2"><div class="dheight_1"></div></td></tr>'
            + '<tr><td class="pad0" bgcolor="#f0f0f0" colspan="2"><div class="dheight_2"></div></td></tr>'
            + '' + HTMLLL + '</tbody></table>');


            if (MemberInfo_Personal == 0) { } else { var nnname = notice_getcookie('RealCheckName'); var nnnssn = notice_getcookie('RealCheckSsn'); try { document.getElementById('TEXT_memname').value = nnname; document.getElementById('TEXT_memname').readOnly = true; } catch (err) { } try { if (nnnssn.indexOf('-') > -1) { var nnnssn_ = nnnssn.split('-'); document.getElementById('TEXT_memjumin_1').value = nnnssn_[0]; document.getElementById('TEXT_memjumin_2').value = nnnssn_[1]; document.getElementById('TEXT_memjumin_1').readOnly = true; document.getElementById('TEXT_memjumin_2').readOnly = true; } } catch (err) { } }


            window.onload = function () {
                /*mark texterea*/
                for (var i = 0; i < MemberSetup_ColumnName.length; i++) {
                    tdText_In2 = document.createElement('textarea');
                    tdText_In2.name = 'textarea_' + MemberSetup_ColumnName[i];
                    tdText_In2.id = 'textarea_' + MemberSetup_ColumnName[i];
                    tdText_In2.style.display = "none";
                    document.forms[0].appendChild(tdText_In2);
                }
                /*mark texterea*/
                Make_STATE('MemMyInfo');
                Member.MemGrade('RADIO');
                Member.MemMyInfo('LOAD2');
                try { document.getElementById('TEXT_memname').readOnly = true; } catch (err) { }
                try { document.getElementById('TEXT_memnick').readOnly = true; } catch (err) { }
                try { document.getElementById('TEXT_memjumin_1').readOnly = true; } catch (err) { }
                try { document.getElementById('TEXT_memjumin_2').readOnly = true; } catch (err) { }
            }
        }
        else if (e == 'LOAD2') {
         

            var memgrade_load = '';  var word_sn1 = "";var word_sn2 = ""; 
            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "json",               //데이타타입 html, xml 등등
                url: "/COMMON/Client.aspx",     //경로
                data: "ajaxType=MemberSELECT",
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                success: function (jsons) {
                    var alerts = JSON.parse(jsons);
                    var num_cnt = parseInt(alerts.rnum, 10);
                    for (var i = 0; i < num_cnt; i++) {
                        word_sn1 = ""; word_sn2 = "";  
                        try { word_sn1 = eval('alerts.T1_' + i); } catch (err) { }
                        try { word_sn2 = eval('alerts.T2_' + i); } catch (err) { }
                        try {document.getElementById('textarea_' + word_sn1).value = eval('alerts.' + word_sn1);} catch (err) { }
                    }
                    memgrade_load = alerts.memgrade;
                },    //성공시 실행할 함수
                error: function () {
                }             //에러발생시 실행할 함수
            });




            MemGrade_ = memgrade_load;
            load_chk_form('MemMyInfo');
            Member.MemGrade('CLICK', MemGrade_);
            var MPTEE = "";
            for (var i = 0; i < MemberGrade_m_level.length; i++) {
                if (document.getElementById("RADIO_MemGrade_" + i).value == MemGrade_) {
                    document.getElementById("RADIO_MemGrade_" + i).checked = true;
                    MPTEE = MemberGrade_m_title[i];
                }
                else {
                    document.getElementById("RADIO_MemGrade_" + i).checked = false;
                }
            }
            document.getElementById("SPAN_RADIO_MemGradePP").innerHTML = MPTEE;
        }
        else if (e == 'SUBMIT') {
            document.getElementById("TXT_Make_STATE_URL").value = location.href;
            if (chk_form('MemMyInfo') == false) { return; };
            if (SUBMIT_COUNTS == 0) { document.forms[0].submit(); } SUBMIT_COUNTS++;
        }
    },
    MemMyLOAD: function (e)  /*회원정보로드*/
    {
        load_chk_form(e);
    },
    JoinOk: function (e) /*작성완료*/
    {
        if (e == 'LOAD') {
            notice_setcookie('RealCheckName', '', 1);
            notice_setcookie('RealCheckSsn', '', 1);
            window.onload = function () {
                Make_STATE('MemLogin');
            }
        }
        else if (e == 'SUBMIT') {
            Next_Url = "/";
        }
    },
    MemLogin: function (e, e2, e3, e4)  /*회원로그인*/
    {
        if (e == 'LOAD') {
            window.onload = function () {
                Make_STATE('MemLogin');
            }
        }
        else if (e == 'SUBMIT') {
            TEMP_OPPP[0] = e2;
            TEMP_OPPP[1] = e3;
            TEMP_OPPP[2] = e4;
            TEMP_OPPP[3] = e;
            /*Next_Url = "/";*/
            try { if (document.getElementById(e2).value.trim() == "") { alert("아이디을 입력하여 주십시요."); document.getElementById(e2).focus(); return; } } catch (err) { return; }
            try { if (document.getElementById(e3).value.trim() == "") { alert("비밀번호을 입력하여 주십시요."); document.getElementById(e3).focus(); return; } } catch (err) { return; }

            document.getElementById("TXT_Make_STATE_URL").value = e2 + "," + e3 + "," + e4;
            if (SUBMIT_COUNTS == 0) { document.forms[0].submit(); } SUBMIT_COUNTS++;
        }
        else if (e == 'SUBMIT2' || e == 'SUBMIT3') {
            TEMP_OPPP[0] = e2;
            TEMP_OPPP[1] = e3;
            TEMP_OPPP[2] = e4;
            TEMP_OPPP[3] = e;
            try { if (document.getElementById(e2).value.trim() == "아이디입력") { document.getElementById(e2).value = ""; alert("아이디입력을 입력하여 주십시요."); document.getElementById(e2).focus(); return; } } catch (err) { return; }
            try { if (document.getElementById(e2).value.trim() == "") { alert("아이디을 입력하여 주십시요."); document.getElementById(e2).focus(); return; } } catch (err) { return; }
            try { if (document.getElementById(e3).value.trim() == "비밀번호입력") { document.getElementById(e3).value = ""; alert("비밀번호을 입력하여 주십시요."); document.getElementById(e3).focus(); return; } } catch (err) { return; }
            try { if (document.getElementById(e3).value.trim() == "") { alert("비밀번호을 입력하여 주십시요."); document.getElementById(e3).focus(); return; } } catch (err) { return; }




            var today = new Date();

            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "html",               //데이타타입 html, xml 등등
                url: "/xbin/LOGFLIN2.aspx",     //경로
                data: "xid=" + encodeURIComponent(Base64.encode(document.getElementById(e2).value.trim())) + "&xpwd=" + encodeURIComponent(Base64.encode(document.getElementById(e3).value.trim()))
                + "&now=" + today.getYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds() + Math.round(100 * Math.random()),
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                success: function (data) {
                    setTimeout("Member.MemLogin('RESUTLS', '" + data + "');", 10);
                },    //성공시 실행할 함수
                error: function () {
                    return false;
                }             //에러발생시 실행할 함수
            });

        }
        else if (e == 'GOJoinForm')/*회원가입으로 이동*/
        {
            Next_Url_LD('Agreement');
            location.href = Next_Url;
        }
        else if (e == 'GOFindIdPwd')/*아이디/비밀번호 찿기 이동 */
        {
            Next_Url_LD('FindIdPwd');
            location.href = Next_Url;
        }
        else if (e == 'RESUTLS') {
            if (e2 == '1') {
                if (TEMP_OPPP[3] == 'SUBMIT3') {
                    if (Request("preurl") != "") {
                        /*location.href = Request("preurl").replaceAll("^", "?");*/
                        location.href = Request("preurl").replaceAll("^", "?").replaceAll("†", "&").replaceAll("‡", "=");
                    }
                    else {
                        location.href = '/';
                    }
                }
                else {
                    /*location.reload();*/
                    top.location.reload();
                }
            }
            else if (e2 == '100') {
                document.getElementById(TEMP_OPPP[0]).value = '';
                document.getElementById(TEMP_OPPP[1]).value = '';
                document.getElementById(TEMP_OPPP[0]).focus();
                alert('회원가입신청이 정상적으로되었으며 회원승인 확인중입니다.\n관리자 승인후 로그인가능합니다.');
            }
            else if (e2 == '200') {
                document.getElementById(TEMP_OPPP[0]).value = '';
                document.getElementById(TEMP_OPPP[1]).value = '';
                document.getElementById(TEMP_OPPP[0]).focus();
                alert('잘못된 아이디 입니다.');
            }
            else if (e2 == '300') {
                document.getElementById(TEMP_OPPP[1]).value = '';
                document.getElementById(TEMP_OPPP[1]).focus();
                alert('비밀번호가 잘못되었습니다.');
            }
        }
    },
    MemGrade: function (e, e2)  /*회원 등급*/
    {
        if (e == 'DDL') { var m_ = document.getElementById("DDL_MemGrade"); var m2_ = m_.getElementsByTagName('OPTION'); for (var idx = m2_.length - 1; idx >= 0; idx--) { m_.removeChild(m2_[idx]); } for (var i = 0; i < MemberGrade_m_level.length; i++) { m_.options[i] = new Option(MemberGrade_m_title[i], MemberGrade_m_level[i]); } }
        else if (e == 'RADIO') { var obj = document.getElementById("SPAN_RADIO_MemGrade"); var m_teml = ''; var m_TEMPS1 = ''; var m_TEMPS2 = ''; for (var i = 0; i < MemberGrade_m_level.length; i++) { m_teml += '<input id="RADIO_MemGrade_' + i + '" type="radio" name="RADIO_MemGrade" ' + (MemberGrade_m_join[i] == 1 ? "" : "style=\"display:none;\"") + ' onclick="Member.MemGrade(\'CLICK\',this.value)" value="' + MemberGrade_m_level[i] + '" class="input_no" /><label for="RADIO_MemGrade_' + i + '" ' + (MemberGrade_m_join[i] == 1 ? "" : "style=\"display:none;\"") + '>' + MemberGrade_m_title[i] + '</label>'; if (m_TEMPS1 == "") { m_TEMPS1 = MemberGrade_m_level[i]; m_TEMPS2 = i + ''; } }; obj.innerHTML = m_teml; if (m_TEMPS1 != "") { document.getElementById("RADIO_MemGrade_" + m_TEMPS2).checked = true; Member.MemGrade('CLICK', m_TEMPS1); } }
        else if (e == 'CHANGE') { var m_ = document.getElementById("DDL_MemGrade"); var m_valee = (m_.options[m_.selectedIndex].value); MemGrade_ = m_valee; for (var i = 0; i < MemberSetup_ColumnName.length; i++) { if (MemberSetup_UsedGrade[i] == "0") { try { document.getElementById("tr1_" + MemberSetup_ColumnName[i]).style.display = ""; } catch (err) { } try { document.getElementById("tr2_" + MemberSetup_ColumnName[i]).style.display = ""; } catch (err) { } } else { if (MemberSetup_UsedGrade[i].indexOf(m_valee) > -1) { try { document.getElementById("tr1_" + MemberSetup_ColumnName[i]).style.display = ""; } catch (err) { } try { document.getElementById("tr2_" + MemberSetup_ColumnName[i]).style.display = ""; } catch (err) { } } else { try { document.getElementById("tr1_" + MemberSetup_ColumnName[i]).style.display = "none"; } catch (err) { } try { document.getElementById("tr2_" + MemberSetup_ColumnName[i]).style.display = "none"; } catch (err) { } } } } }
        else if (e == 'CLICK') { MemGrade_ = e2; for (var i = 0; i < MemberSetup_ColumnName.length; i++) { if (MemberSetup_UsedGrade[i] == "0") { try { document.getElementById("tr1_" + MemberSetup_ColumnName[i]).style.display = ""; } catch (err) { } try { document.getElementById("tr2_" + MemberSetup_ColumnName[i]).style.display = ""; } catch (err) { } } else { if (MemberSetup_UsedGrade[i].indexOf(e2) > -1) { try { document.getElementById("tr1_" + MemberSetup_ColumnName[i]).style.display = ""; } catch (err) { } try { document.getElementById("tr2_" + MemberSetup_ColumnName[i]).style.display = ""; } catch (err) { } } else { try { document.getElementById("tr1_" + MemberSetup_ColumnName[i]).style.display = "none"; } catch (err) { } try { document.getElementById("tr2_" + MemberSetup_ColumnName[i]).style.display = "none"; } catch (err) { } } } } }
    },
    Logout: function (e) {
        if (e == null) {
            location.href = '/xbin/LOGOUT.aspx';
        }
        else {
            location.href = '/xbin/LOGOUT.aspx?url=/' + e;
        }
    }
};

/***** load_chk_form *********************************************************************/
function load_chk_form(e) {

    /*load_chk_form('MemMyInfo');*/
    /*if(e =="JoinFormADMIN")*/ 
    {
        for (var i = 0 ; i < MemberSetup_ColumnName.length ; i++) 
        {
            var chke__ = false ;if(MemberSetup_UsedGrade[i] == "0"){chke__ = true ;}else {if(MemberSetup_UsedGrade[i].indexOf(MemGrade_) > -1){chke__ = true ;} }
            if(chke__ == true  )
            {
                if(MemberSetup_Type[i] == "TEXT")
                {
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value = document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value;}catch(err){}
                    if(MemberSetup_ColumnName[i]=='memid' || MemberSetup_ColumnName[i]=='memnick')
                    {
                        document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).readOnly= true ;
                    }
                    if (MemberSetup_ColumnName[i] == 'membusiness') {
                        TXT_membusiness_READ(MemberSetup_ColumnName[i], document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).value);
                    }
                }
                else if (MemberSetup_Type[i] == "TEXT2") {
                    try { document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).value = document.getElementById('textarea_' + MemberSetup_ColumnName[i]).value; } catch (err) { }
                    if (MemberSetup_ColumnName[i] == 'memid' || MemberSetup_ColumnName[i] == 'memnick') {
                        document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).readOnly = true;
                    }
                    if (MemberSetup_ColumnName[i] == 'membusiness') {
                        TXT_membusiness_READ(MemberSetup_ColumnName[i], document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).value);
                    }
                }
                else if(MemberSetup_Type[i] == "PASS")
                {
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value = document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value;}catch(err){}
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').value = document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value;}catch(err){}
                }
                else if(MemberSetup_Type[i] == "JUMIN")
                {
                    try{
                    var JUMIN__ = document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value.split('-');
                    if(JUMIN__.length > 1)
                    {
                        document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_1').value = JUMIN__[0];
                        document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').value = JUMIN__[1];
                    }}catch(err){}
                }
                else if(MemberSetup_Type[i] == "EMAIL")
                {
                    var mmm_emal = document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value ;
                    var EMAIL__ = mmm_emal.split('@');
                    if(EMAIL__.length > 1 )
                    {
                        document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_1').value = EMAIL__[0];
                        document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').value = EMAIL__[1];
                        Teldd( document.getElementById('DDL_'+MemberSetup_ColumnName[i]) , EMAIL__[1]);
                        if( document.getElementById('DDL_'+MemberSetup_ColumnName[i]).selectedIndex == 0  )
                        {
                            document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').style.display = "" ;
                            Teldd( document.getElementById('DDL_'+MemberSetup_ColumnName[i]) , "etc");
                        }
                    }
                }
                else if(MemberSetup_Type[i] == "RADIO")
                {
                    TelddR( document.getElementsByName('RADIO_'+MemberSetup_ColumnName[i]) , document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value);
                }
                else if(MemberSetup_Type[i] == "PHONE")
                {
                    var PHONE__ = document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value.split('-');
                    if(PHONE__.length > 2)
                    {
                        document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_1').value = PHONE__[0];
                        document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').value = PHONE__[1];
                        document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_3').value = PHONE__[2];
                    }
                }
                else if(MemberSetup_Type[i] == "ADDRESS")
                {
                    try{
                    if( document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value.lastIndexOf('(') > -1 )
                    {
                        var ADDRESS__ =  document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value ;
                        var ADDRESS__01 = ADDRESS__.substring ( 0 ,ADDRESS__.lastIndexOf('(') );
                        var ADDRESS__02 = ADDRESS__.substring ( ADDRESS__.lastIndexOf('(') );
                        ADDRESS__02 = ADDRESS__02.replaceAll("(","").replaceAll(")","");
                        var ADDRESS__01_ =ADDRESS__02.split('-');
                        var ADDRESS__02_ =ADDRESS__01.split('↑');
                        if(ADDRESS__02_.length > 1 )
                        {
                            document.getElementById('txt_'+MemberSetup_ColumnName[i]+'_addr1').value = ADDRESS__02_[0];
                            document.getElementById('txt_'+MemberSetup_ColumnName[i]+'_addr2').value = ADDRESS__02_[1];
                        }
                        if(ADDRESS__01_.length > 1 )
                        {
                            document.getElementById('txt_'+MemberSetup_ColumnName[i]+'_zipcode1').value = ADDRESS__01_[0];
                            document.getElementById('txt_'+MemberSetup_ColumnName[i]+'_zipcode2').value = ADDRESS__01_[1];
                        }
                    } 
                    }catch(err){}
                }
                else if(MemberSetup_Type[i] == "DATE")
                {
                    if(MemberSetup_ColumnName[i] == "memmarridate")
                    {
                        try{
                            var DATE__ = document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value.split(':');
                            if(DATE__ .length > 2)
                            {
                                TelddR( document.getElementsByName('rbo_'+MemberSetup_ColumnName[i]) ,DATE__ [0]);
                                
                                Teldd(document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_1'),DATE__ [1]);
                                Teldd(document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2'),DATE__ [2]);
                            }
                        }catch(err){}
                    }
                    else if(MemberSetup_ColumnName[i] == "membirth")
                    {
                        try{
                            var DATE__ = document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value.split(':');
                            if(DATE__ .length > 3)
                            {
                                TelddR( document.getElementsByName('rbo_'+MemberSetup_ColumnName[i]) ,DATE__ [0]);
                                document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_0').value = DATE__ [1];
                                Teldd(document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_1'),DATE__ [2]);
                                Teldd(document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2'),DATE__ [3]);
                            }
                        }catch(err){}
                    } 
                    else
                    { 
                        try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value = document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value;}catch(err){}
                    }
                }
                else if(MemberSetup_Type[i] == "TEXTAREA")
                {
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value = document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value;}catch(err){}
                }
                else if(MemberSetup_Type[i] == "SPAM")
                {
                    if(e =="JoinFormADMIN")
                    {
                        try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value=document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value2;}catch(err){}
                    }
                }
                else if(MemberSetup_Type[i] == "CHECKBOX")
                {
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value = document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value;}catch(err){}
                    
                    var TEMP_VALUE =  MemberSetup_baseStr[i].split('↑');
                    var TEMP_VALUE2 =  document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value.split(',');
                    
                    for ( var NUM= 0 ; NUM < TEMP_VALUE .length ; NUM ++ )
                    {
                        if(TEMP_VALUE[NUM].trim() == "") {continue ;}
                        var TEMP_VALUE3 = document.getElementById(MemberSetup_ColumnName[i]+'_'+NUM).value ;
                        
                        for ( var NUM2= 0 ; NUM2 < TEMP_VALUE2 .length ; NUM2 ++ )
                        {
                            if(TEMP_VALUE2[NUM2] == TEMP_VALUE3)
                            {
                                document.getElementById(MemberSetup_ColumnName[i]+'_'+NUM).checked= true ;
                                break ;
                            }
                        }
                    }
                }
                else if(MemberSetup_Type[i] == "SELECTBOX")
                {
                    Teldd( document.getElementById('DDL_'+MemberSetup_ColumnName[i]) ,  document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value ) ;
                }
                else if(MemberSetup_Type[i] == "FILE")
                {
                    var FILE__ =  document.getElementById('textarea_'+MemberSetup_ColumnName[i]).value ;
                    if( FILE__ != ""  && FILE__ .indexOf('/') >-1 )
                    {
                        var FILE__01 = FILE__.substring ( FILE__.lastIndexOf('/')+1 );
                        document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value = FILE__ ;
                        document.getElementById('SPAN_'+MemberSetup_ColumnName[i]).style.display = "";
                        document.getElementById('SPANF_'+MemberSetup_ColumnName[i]).innerHTML = FILE__01 ;
                        document.getElementById('SPANF1_'+MemberSetup_ColumnName[i]).innerHTML = '<img src="/dbimage/'+FILE__+'" />' ;
                        
                    }
                }
            }
        }
    }
}

function TelddR(e1,e2)
{ 
    var aaFf = e1.length;
    for(ope=0;ope< aaFf;ope++)
    {
        if(e1[ope].value==e2)
        {
            e1[ope].checked= true ;
            break ;
        }
    } 
}
function Teldd(e,j)
{
    var aaFf = e.length;
    var tempDD= 0;
    for(ope=0;ope< aaFf;ope++)
    {
        if(e[ope].value==j)
        {
            tempDD=ope;
        }
    }
    e.selectedIndex=tempDD;
}

/***** load_chk_form *********************************************************************/

/***** chk_form   ************************************************************************/

function alterString(str,before,after) {var returnStr = "";for(i = 0; i < str.length; i++) {value = str.charAt(i);index = before.indexOf(value);if(index >= 0) value = after.charAt(index);returnStr += value;}return returnStr;}
function ToLower(arg){var str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";var str2 = "abcdefghijklmnopqrstuvwxyz";return alterString(arg,str1,str2);}
function chkfiles (f){var chk= false ;var names=f.value;var chk_file_ = f.value2;if(chk_file_ != "" ){var chk_file = chk_file_.split(',');var pmpp= names.split('.');var nnee=''; if(pmpp.length >1) {nnee = ToLower (  pmpp [ pmpp.length -1 ] )  ;} if( nnee  == "" ){return false ;}for ( k = 0 ; k < chk_file .length ; k ++ ){if(chk_file[k] == '' ) {continue ;}if(chk_file[k] == nnee ){chk= true ;}}}else{chk= true ; }return chk;}
var MemGrade_ = "0";
function chk_form(e)
{
    var chk = true ;
    if(MemGrade_ == "0"){return false ;}
    
    for (var i = 0 ; i < MemberSetup_ColumnName.length ; i++) 
    {
        var chke__ = false ;if(MemberSetup_UsedGrade[i] == "0"){chke__ = true ;}else {if(MemberSetup_UsedGrade[i].indexOf(MemGrade_) > -1){chke__ = true ;} }
        
        
        if(MemberSetup_Type[i] == "FILE" )
        { 
            if( document.getElementById('FILE_'+MemberSetup_ColumnName[i]).value.trim() != "" )
            { 
                if( chkfiles(document.getElementById('FILE_'+MemberSetup_ColumnName[i]))  == false )
                {
                    alert("["+document.getElementById('FILE_'+MemberSetup_ColumnName[i]).value2+"]파일을 선택하세요"); 
                    chk = false ;break;
                }
            }
        }
        if(chke__ == true && MemberSetup_essentiality[i] == 1 )
        {

            if (MemberSetup_Type[i] == "JUMIN") {
                if (e == "JoinFormADMIN") continue;
                if (document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_1').value.trim() == '') {
                    alert(MemberSetup_FildName[i] + '을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_1').focus(); } catch (err) { }
                    chk = false; break;
                }
                if (document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_2').value.trim() == '') {
                    alert(MemberSetup_FildName[i] + '을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_2').focus(); } catch (err) { }
                    chk = false; break;
                }
                var JUMIN__ = document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_1').value.trim() + document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_2').value.trim();
                if (isValidJuminNo(JUMIN__) == false) {
                    alert(MemberSetup_FildName[i] + '가 정확하지 않습니다.');
                    try { document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_1').focus(); } catch (err) { }
                    chk = false; break;
                }
            }
            
            if(MemberSetup_Type[i] == "TEXT")
            {
                if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).focus();}catch(err){}
                    chk = false  ;break;
                }
            }
            else if (MemberSetup_Type[i] == "TEXT2") {
                if (document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).value.trim() == '') {
                    alert(MemberSetup_FildName[i] + '을 입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).focus(); } catch (err) { }
                    chk = false; break;
                }
            }
            else if(MemberSetup_Type[i] == "PASS") {
                if (e == 'MemMyInfo' && document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).value.trim() == '') continue;
                if (e == 'JoinFormADMIN' && document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).value.trim() == '') continue;
                if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).focus();}catch(err){}
                    chk = false  ;break;
                }
                if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'확인을 입력하여 주십시요.');
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').focus();}catch(err){}
                    chk = false  ;break;
                }
                if(document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value.trim() != document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').value.trim() )
                {
                    alert( MemberSetup_FildName[i] +'가 일치하지 않습니다.');
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).focus();}catch(err){}
                    chk = false  ;break;
                }
            } 
            else if(MemberSetup_Type[i] == "EMAIL")
            {
                if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_1').value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_1').focus();}catch(err){}
                    chk = false  ;break;
                }
                if( document.getElementById('DDL_'+MemberSetup_ColumnName[i]).value != 'etc')
                {
                    if( document.getElementById('DDL_'+MemberSetup_ColumnName[i]).value.trim() == '')
                    {
                        alert( MemberSetup_FildName[i] +'을 선택하여 주십시요.');
                        try{document.getElementById('DDL_'+MemberSetup_ColumnName[i]).focus();}catch(err){}
                        chk = false  ;break;
                    }
                }
                else
                {
                    if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').value.trim() == '')
                    {
                        alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                        try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').focus();}catch(err){}
                        chk = false  ;break;
                    }
                }
            }
            else if(MemberSetup_Type[i] == "RADIO"){}
            else if(MemberSetup_Type[i] == "PHONE")
            {
                if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_1').value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_1').focus();}catch(err){}
                    chk = false  ;break;
                }
                if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').focus();}catch(err){}
                    chk = false  ;break;
                }
                if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_3').value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_3').focus();}catch(err){}
                    chk = false  ;break;
                }
            }
            else if(MemberSetup_Type[i] == "ADDRESS")
            {
                if( document.getElementById('txt_'+MemberSetup_ColumnName[i]+'_zipcode1').value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                    chk = false  ;break;
                }
                if( document.getElementById('txt_'+MemberSetup_ColumnName[i]+'_zipcode2').value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                    chk = false  ;break;
                }
                if( document.getElementById('txt_'+MemberSetup_ColumnName[i]+'_addr1').value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                    chk = false  ;break;
                }
                if( document.getElementById('txt_'+MemberSetup_ColumnName[i]+'_addr2').value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                    try{document.getElementById('txt_'+MemberSetup_ColumnName[i]+'_addr2').focus();}catch(err){}
                    chk = false  ;break;
                }
            }
            else if(MemberSetup_Type[i] == "DATE")
            {
                if(MemberSetup_ColumnName[i] == "memmarridate")
                {
                    if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_1').value.trim() == '')
                    {
                        alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                        try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_1').focus();}catch(err){}
                        chk = false  ;break;
                    }
                    if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').value.trim() == '')
                    {
                        alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                        try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]+'_2').focus();}catch(err){}
                        chk = false  ;break;
                    }
                }
                else if (MemberSetup_ColumnName[i] == "membirth") {
                    if (document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_0').value.trim() == '') {
                        alert(MemberSetup_FildName[i] + '을 입력하여 주십시요.');
                        try { document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_0').focus(); } catch (err) { }
                        chk = false; break;
                    }
                    if (document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_1').value.trim() == '') {
                        alert(MemberSetup_FildName[i] + '을 입력하여 주십시요.');
                        try { document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_1').focus(); } catch (err) { }
                        chk = false; break;
                    }
                    if (document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_2').value.trim() == '') {
                        alert(MemberSetup_FildName[i] + '을 입력하여 주십시요.');
                        try { document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_2').focus(); } catch (err) { }
                        chk = false; break;
                    }
                } 
                else
                { 
                    if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value.trim() == '')
                    {
                        alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                        try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).focus();}catch(err){}
                        chk = false  ;break;
                    }
                }
            }
            else if(MemberSetup_Type[i] == "FILE")
            {
                if( document.getElementById('SPAN_'+MemberSetup_ColumnName[i]).style.display == 'none')
                {
                    if( document.getElementById('FILE_'+MemberSetup_ColumnName[i]).value.trim() == '')
                    {
                        alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                        try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).focus();}catch(err){}
                        chk = false  ;break;
                    }
                }
            }
            else if(MemberSetup_Type[i] == "CHECKBOX")
            {
                if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 선택하여 주십시요.');
                    chk = false  ;break;
                }
            }
            else if(MemberSetup_Type[i] == "SELECTBOX")
            {
                if( document.getElementById('DDL_'+MemberSetup_ColumnName[i]).value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 선택하여 주십시요.');
                    chk = false  ;break;
                }
            }
            else if(MemberSetup_Type[i] == "TEXTAREA")
            {
                if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).focus();}catch(err){}
                    chk = false  ;break;
                }
            }
            else if(MemberSetup_Type[i] == "SPAM")
            {
                if( document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value.trim() == '')
                {
                    alert( MemberSetup_FildName[i] +'을 입력하여 주십시요.');
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).focus();}catch(err){}
                    chk = false  ;break;
                }
                if (document.getElementById('TEXT_' + MemberSetup_ColumnName[i]) && document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_2')
                    && document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).value.trim() != document.getElementById('TEXT_' + MemberSetup_ColumnName[i] + '_2').value) {
                    alert(MemberSetup_FildName[i] + '이 정확하지 않습니다.\n 다시입력하여 주십시요.');
                    try { document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).value = ''; } catch (err) { }
                    try { document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).focus(); } catch (err) { }
                    chk = false; break;
                } 
            }
        }    
        if(chke__ == true )
        {
            if(e=='JoinForm')/*회원가입작성*/
            {
                if(MemberSetup_ColumnName[i] =="memid")
                {
                    if( SUBMIT_memid   == false )
                    {
                        alert( MemberSetup_FildName[i] +'을 중복을 확인해 주십시요.');
                    try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).focus();}catch(err){}
                        chk = false  ;break;
                    }
                    if (document.getElementById('TEXT_' + MemberSetup_ColumnName[i])) {
                        document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).value = document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).value.trim();
                        if (document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).value.length < 4
                         || document.getElementById('TEXT_' + MemberSetup_ColumnName[i]).value.length >= 20) {
                            alert("아이디는 4자이상, 20자 이하여야합니다.");
                            chk = false; break;
                        }
                    }
                }
                if(MemberSetup_ColumnName[i] =="memnick")
                {
                    if( SUBMIT_memnick    == false )
                    {
                        alert( MemberSetup_FildName[i] +'을 중복을 확인해 주십시요.');
                        try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).focus();}catch(err){}
                        chk = false  ;break;
                    }
                }
            }
            else if(e=='JoinFormADMIN')/*관리자 회원가입작성 ,수정*/
            {
                if( Request("num") == "" )
                {
                    if(MemberSetup_ColumnName[i] =="memid")
                    {
                        if( SUBMIT_memid   == false )
                        {
                            alert( MemberSetup_FildName[i] +'을 중복을 확인해 주십시요.');
                        try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).focus();}catch(err){}
                            chk = false  ;break;
                        }
                    }
                    if(MemberSetup_ColumnName[i] =="memnick")
                    {
                        if( SUBMIT_memnick    == false )
                        {
                            alert( MemberSetup_FildName[i] +'을 중복을 확인해 주십시요.');
                            try{document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).focus();}catch(err){}
                            chk = false  ;break;
                        }
                    }
                }
                
                if(MemberSetup_Type[i] == "SPAM")
                {
                     document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value =  document.getElementById('TEXT_'+MemberSetup_ColumnName[i]).value2 ;
                }
            }
            else if(e=='MemMyInfo')/*회원수정*/
            {
            }
        }
    }
    return chk ;
}
/***** chk_form   ************************************************************************/


/***** 주민등록번호 *********************************************************************/ 
function isValidJuminNo(juminno) {
  if(juminno=="" || juminno==null || juminno.length!=13) {
    alert("주민등록번호를 적어주세요.");
    return false;
  }
  
  var jumin1 = juminno.substr(0,6);
  var jumin2 = juminno.substr(6,7);
  var yy     = jumin1.substr(0,2);        // 년도
  var mm     = jumin1.substr(2,2);        // 월
  var dd     = jumin1.substr(4,2);        // 일
  var genda  = jumin2.substr(0,1);        // 성별
  var msg, ss, cc;

  // 숫자가 아닌 것을 입력한 경우
  if (!isNumeric(jumin1)) {
    alert("주민등록번호 앞자리를 숫자로 입력하세요.");
    return false;
  } 
  // 길이가 6이 아닌 경우
  if (jumin1.length != 6) {
    alert("주민등록번호 앞자리를 다시 입력하세요.");
    return false;
  }
  
  // 첫번째 자료에서 연월일(YYMMDD) 형식 중 기본 구성 검사
  if (yy < "00" 
      || yy > "99" 
      || mm < "01" 
      || mm > "12" 
      || dd < "01" 
      || dd > "31") {
    alert("주민등록번호 앞자리를 다시 입력하세요.");
    return false;
  }
  
  // 숫자가 아닌 것을 입력한 경우
  if (!isNumeric(jumin2)) {
    alert("주민등록번호 뒷자리를 숫자로 입력하세요.");
    return false;
  }

  // 길이가 7이 아닌 경우
  if (jumin2.length != 7) {
    alert("주민등록번호 뒷자리를 다시 입력하세요.");
    return false;
  }
  
  // 성별부분이 1 ~ 4 가 아닌 경우
  if (genda < "1" || genda > "4") {
    alert("주민등록번호 뒷자리를 다시 입력하세요.");
    return false;
  }
 
  // 연도 계산 - 1 또는 2: 1900년대, 3 또는 4: 2000년대
  cc = (genda == "1" || genda == "2") ? "19" : "20";
  // 첫번째 자료에서 연월일(YYMMDD) 형식 중 날짜 형식 검사
//  if (isValidDate(cc+yy+mm+dd) == false) {
//    alert("주민등록번호 앞자리를 다시 입력하세요.");
//    return false;
//  }
  
  // Check Digit 검사
  if (!isSSN(jumin1, jumin2)) {
    alert("입력한 주민등록번호를 검토한 후, 다시 입력하세요.");
    return false;
  }
  return true;
}

function isValidDate(iDate) {
  if( iDate.length != 8 ) {
    return false;
  }
   
  oDate = new Date();
  oDate.setFullYear(iDate.substring(0, 4));
  oDate.setMonth(parseInt(iDate.substring(4, 6)) - 1);
  oDate.setDate(iDate.substring(6));

  if( oDate.getFullYear()     != iDate.substring(0, 4) 
      || oDate.getMonth() + 1 != iDate.substring(4, 6) 
      || oDate.getDate()      != iDate.substring(6) ){
     
    return false;
  }
    
  return true;
}

 

function isNumeric(s) { 
  for (i=0; i<s.length; i++) { 
    c = s.substr(i, 1); 
    if (c < "0" || c > "9") return false; 
  } 
  return true; 
}

 

function isSSN(s1, s2) {
  n = 2;
  sum = 0;
  for (i=0; i<s1.length; i++)
    sum += parseInt(s1.substr(i, 1)) * n++;
  for (i=0; i<s2.length-1; i++) {
    sum += parseInt(s2.substr(i, 1)) * n++;
    if (n == 10) n = 2;
  }
  
  c = 11 - sum % 11;
  if (c == 11) c = 1;
  if (c == 10) c = 0;
  if (c != parseInt(s2.substr(6, 1))) return false;
  else return true;
}
/***** 주민등록번호 *********************************************************************/


/********** MAKE_INPUT_TYPE **************************************************************************************/
/*onkeyup="check_eng(this);"*/
function check_eng(ths){
   var NumEng = /^[A-Za-z0-9]+$/; 
   if(NumEng.test(ths.value) || ths.value == ""){}
   else{
     alert("숫자와 영문자만 입력하세요.");
     ths.value = "";
     ths.focus();
   }
}
function check_NUM(ths){
   var NumEng = /^[0-9]+$/; 
   if(NumEng.test(ths.value) || ths.value == ""){}
   else{
     alert("숫자만 입력하세요.");
     ths.value = "";
     ths.focus();
   }
}



function MAKE_INPUT_TYPE(e) {
    var HTML_RET = '';
    var HTML_RET_P1 = ''; var HTML_RET_P2 = ''; var HTML_RET_P3 = ''; var HTML_RET_P4 = ''; var HTML_RET_P5 = ''; var HTML_RET_P6 = '';
    /*if(MemberSetup_ColumnName[e] == "memid" || MemberSetup_ColumnName[e] == "mempass"  || MemberSetup_ColumnName[e] == "memrecommid")*/
    if (MemberSetup_ColumnName[e] == "memid" || MemberSetup_ColumnName[e] == "memrecommid") {
        HTML_RET_P1 = ' title="' + MemberSetup_FildName[e] + '" maxlength="15" onkeyup="check_eng(this);CheckStrLen(this,15);" onblur="CheckStrLen(this,15);" onkeydown="if(event.keyCode ==13){return false}" ';
    }
    if (MemberSetup_ColumnName[e] == "memnick" || MemberSetup_ColumnName[e] == "memname" || MemberSetup_ColumnName[e] == "memnick") {
        HTML_RET_P1 = ' title="' + MemberSetup_FildName[e] + '" maxlength="15" onkeyup="CheckStrLen(this,15);" onblur="CheckStrLen(this,15);" onkeydown="if(event.keyCode ==13){return false}" ';
    }
    if (MemberSetup_ColumnName[e] == "memjumin") {
        HTML_RET_P1 = ' title="' + MemberSetup_FildName[e] + ' 앞 자리 입력하여 주십시요." maxlength="6" onkeyup="check_NUM(this);CheckStrLen(this,15);" onblur="CheckStrLen(this,15);TXT_JUMIN(\'' + MemberSetup_ColumnName[e] + '\');" onkeydown="if(event.keyCode ==13){return false}" ';
        HTML_RET_P2 = ' title="' + MemberSetup_FildName[e] + ' 뒤 자리 입력하여 주십시요." maxlength="7" onkeyup="check_NUM(this);CheckStrLen(this,15);" onblur="CheckStrLen(this,15);TXT_JUMIN(\'' + MemberSetup_ColumnName[e] + '\');" onkeydown="if(event.keyCode ==13){return false}" ';
    }

    if (MemberSetup_Type[e] == "TEXT") {
        if (MemberSetup_ColumnName[e] == "membusiness") {
            HTML_RET = '<input  id="TEXT_' + MemberSetup_ColumnName[e] + '" name="TEXT_' + MemberSetup_ColumnName[e] + '" style="display:none;width:100%;" type="text" />'
            + '<table cellspacing="0" cellpadding="1" width="100%" border="0"><tbody><tr><td width="60">상호명</td><td width="170"><input onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');" id="TEXT_' + MemberSetup_ColumnName[e] + '_1" name="TEXT_' + MemberSetup_ColumnName[e] + '_1" type="text" /></td>'
            + '<td width="70"><label for="TEXT_' + MemberSetup_ColumnName[e] + '_2">사업자번호</label></td><td>'
            + '<label class=\"dcaption\" for="TEXT_' + MemberSetup_ColumnName[e] + '_2">사업자번호 앞 자리</label>'
            + '<input title="사업자번호 앞 자리 입력하여 주십시요."  onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');" id="TEXT_' + MemberSetup_ColumnName[e] + '_2" name="TEXT_' + MemberSetup_ColumnName[e] + '_2" type="text" size="3" onkeyup="check_NUM(this);"  onkeydown="if(event.keyCode ==13){return false}" maxlength="3" /> - '
            + '<label class=\"dcaption\" for="TEXT_' + MemberSetup_ColumnName[e] + '_2">사업자번호 중간 자리</label>'
            + '<input title="사업자번호 중간 자리 입력하여 주십시요."  onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');" id="TEXT_' + MemberSetup_ColumnName[e] + '_21" name="TEXT_' + MemberSetup_ColumnName[e] + '_21" type="text" size="2" onkeyup="check_NUM(this);" onkeydown="if(event.keyCode ==13){return false}" maxlength="2" /> - '
            + '<label class=\"dcaption\" for="TEXT_' + MemberSetup_ColumnName[e] + '_2">사업자번호 뒤 자리</label>'
            + '<input title="사업자번호 뒤 자리 입력하여 주십시요."  onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');" id="TEXT_' + MemberSetup_ColumnName[e] + '_22" name="TEXT_' + MemberSetup_ColumnName[e] + '_22" type="text" size="5" onkeyup="check_NUM(this);" onkeydown="if(event.keyCode ==13){return false}" maxlength="5" />'
            + '</td></tr>'
            + '<tr><td><label for="TEXT_' + MemberSetup_ColumnName[e] + '_3">대표자명</label></td><td><input onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');" id="TEXT_' + MemberSetup_ColumnName[e] + '_3" name="TEXT_' + MemberSetup_ColumnName[e] + '_3" type="text" /></td>'
            + '<td><label for="TEXT_' + MemberSetup_ColumnName[e] + '_4">팩스번호</label></td><td>'
            + '<label class=\"dcaption\" for="TEXT_' + MemberSetup_ColumnName[e] + '_4">팩스번호 앞 자리</label>'
            + '<input title="팩스번호 앞 자리 입력하여 주십시요." onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');" id="TEXT_' + MemberSetup_ColumnName[e] + '_4" name="TEXT_' + MemberSetup_ColumnName[e] + '_4" type="text" size="4" onkeyup="check_NUM(this);" onkeydown="if(event.keyCode ==13){return false}" maxlength="4"/> -  '
            + '<label class=\"dcaption\" for="TEXT_' + MemberSetup_ColumnName[e] + '_41">팩스번호 중간 자리</label>'
            + '<input title="팩스번호 중간 자리 입력하여 주십시요." onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');" id="TEXT_' + MemberSetup_ColumnName[e] + '_41" name="TEXT_' + MemberSetup_ColumnName[e] + '_41" type="text" size="4" onkeyup="check_NUM(this);" onkeydown="if(event.keyCode ==13){return false}" maxlength="4"/> -  '
            + '<label class=\"dcaption\" for="TEXT_' + MemberSetup_ColumnName[e] + '_42">팩스번호 뒤 자리</label>'
            + '<input title="팩스번호 뒤 자리 입력하여 주십시요." onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');" id="TEXT_' + MemberSetup_ColumnName[e] + '_42" name="TEXT_' + MemberSetup_ColumnName[e] + '_42" type="text" size="4" onkeyup="check_NUM(this);" onkeydown="if(event.keyCode ==13){return false}" maxlength="4"/> '
            + '</td></tr>'
            + '<tr><td><label for="TEXT_' + MemberSetup_ColumnName[e] + '_5">업태</label></td>'
            + '<td><input title="업태 입력하여 주십시요." onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');" id="TEXT_' + MemberSetup_ColumnName[e] + '_5" name="TEXT_' + MemberSetup_ColumnName[e] + '_5" type="text" /></td>'
            + '<td><label for="TEXT_' + MemberSetup_ColumnName[e] + '_6">종목</label></td>'
            + '<td><input title="종목 입력하여 주십시요."  onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');" id="TEXT_' + MemberSetup_ColumnName[e] + '_6" name="TEXT_' + MemberSetup_ColumnName[e] + '_6" type="text" /></td></tr>'
            + '<tr><td><label for="txt_' + MemberSetup_ColumnName[e] + '_zipcode1" >주소</label></td><td colspan="3">'
            + '<table cellspacing="0" cellpadding="1" width="100%" border="0"><tbody><tr><td>'
            + '<label class=\"dcaption\" for="txt_' + MemberSetup_ColumnName[e] + '_zipcode1">우편번호 앞 자리 선택하여 주십시요.</label>'
            + '<input title="우편번호 앞 자리 선택하여 주십시요."  id="txt_' + MemberSetup_ColumnName[e] + '_zipcode1" size="3" name="txt_' + MemberSetup_ColumnName[e] + '_zipcode1" type="text" readOnly="readOnly" onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');"  /> - '
            + '<label class=\"dcaption\" for="txt_' + MemberSetup_ColumnName[e] + '_zipcode2">우편번호 뒤 자리 선택하여 주십시요.</label>'
            + '<input title="우편번호 뒤 자리 선택하여 주십시요."  id="txt_' + MemberSetup_ColumnName[e] + '_zipcode2" size="3" name="txt_' + MemberSetup_ColumnName[e] + '_zipcode2" type="text"  readOnly="readOnly" onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');"  /> '
            + '<a onclick="MM_openBrWindow7(\'/COMMON/Address/Address2.aspx?txt=' + MemberSetup_ColumnName[e] + '\',\'NwdAddress\',\'width=500,height=450\');return false;" href="#"><img  '
            + 'style="cursor:pointer" height="23" alt="우편번호검색" width="90" align="absMiddle" src="/img/bt_search_addr.gif" /></a>'
            + '</td></tr><tr><td>'
            + '<label class=\"dcaption\" for="txt_' + MemberSetup_ColumnName[e] + '_addr1">상세주소 앞 자리 선택하여 주십시요.</label>'
            + '<input title="상세주소 앞 자리을 선택하여 주십시요" id="txt_' + MemberSetup_ColumnName[e] + '_addr1" style="width: 200px" name="txt_' + MemberSetup_ColumnName[e] + '_addr1" type="text" readOnly="readOnly"  onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');" />'
            + '<label class=\"dcaption\" for="txt_' + MemberSetup_ColumnName[e] + '_addr2">상세주소 뒤 자리을 입력하여 주십시요</label>'
            + '<input title="상세주소 뒤 자리을 입력하여 주십시요"  id="txt_' + MemberSetup_ColumnName[e] + '_addr2" style="width: 200px" name="txt_' + MemberSetup_ColumnName[e] + '_addr2" type="text" onblur="TXT_membusiness(\'' + MemberSetup_ColumnName[e] + '\');"  /></td></tr></tbody></table>'
            + '</td></tr></tbody></table>';
        }
        else if (MemberSetup_ColumnName[e] == "memid") {
            HTML_RET = '<input ' + HTML_RET_P1 + ' id="TEXT_' + MemberSetup_ColumnName[e] + '" name="TEXT_' + MemberSetup_ColumnName[e] + '" style="width:' + MemberSetup_Twidth[e] + '" type="text" />';
        }
        else if (MemberSetup_ColumnName[e] == "memnick") {
            HTML_RET = '<input ' + HTML_RET_P1 + ' id="TEXT_' + MemberSetup_ColumnName[e] + '" name="TEXT_' + MemberSetup_ColumnName[e] + '" style="width:' + MemberSetup_Twidth[e] + '" type="text" />';
        }
        else {
            HTML_RET = '<input title="' + MemberSetup_FildName[e] + '" ' + HTML_RET_P1 + ' id="TEXT_' + MemberSetup_ColumnName[e] + '" name="TEXT_' + MemberSetup_ColumnName[e] + '" style="width:' + MemberSetup_Twidth[e] + '" type="text" />';
        }
    }
    else if (MemberSetup_Type[e] == "TEXT2") {
        if (document.all) {
            HTML_RET = '<input title="' + MemberSetup_FildName[e] + '" onkeyup="onlyNumber_2();" onblur="NumericCheck(this);" onkeydown="if(event.keyCode == 13){ return false; };" ' + HTML_RET_P1 + ' id="TEXT_' + MemberSetup_ColumnName[e] + '" name="TEXT_' + MemberSetup_ColumnName[e] + '" style="width:' + MemberSetup_Twidth[e] + '" type="text" />';
        }
        else {
            HTML_RET = '<input title="' + MemberSetup_FildName[e] + '" onkeyup="onlynumber();" ' + HTML_RET_P1 + ' id="TEXT_' + MemberSetup_ColumnName[e] + '" name="TEXT_' + MemberSetup_ColumnName[e] + '" style="width:' + MemberSetup_Twidth[e] + '" type="text" />';
        }
    }
    else if (MemberSetup_Type[e] == "PASS") {
        HTML_RET = '<input title="' + MemberSetup_FildName[e] + '"  ' + HTML_RET_P1 + ' id="TEXT_' + MemberSetup_ColumnName[e] + '" name="TEXT_' + MemberSetup_ColumnName[e] + '" style="width:' + MemberSetup_Twidth[e] + '" type="password"  /> '
        + '<label for="txt_' + MemberSetup_ColumnName[e] + '_2" >확인</label> '
        + '<label class=\"dcaption\" for="txt_' + MemberSetup_ColumnName[e] + '_2" >' + MemberSetup_FildName[e] + ' 확인</label> '
        + '<input title="' + MemberSetup_FildName[e] + ' 확인" ' + HTML_RET_P1 + ' id="TEXT_' + MemberSetup_ColumnName[e] + '_2" name="TEXT_' + MemberSetup_ColumnName[e] + '_2" style="width:' + MemberSetup_Twidth[e] + '" type="password" />';
    }
    else if (MemberSetup_Type[e] == "JUMIN") {
        HTML_RET = '<input title="' + MemberSetup_FildName[e] + ' 앞 자리 입력하여 주십시요."  ' + HTML_RET_P1 + '   id="TEXT_' + MemberSetup_ColumnName[e] + '_1" name="TEXT_' + MemberSetup_ColumnName[e] + '_1" type="text" size="10" maxlength="6"  />'
        + ' - '
        + '<input title="' + MemberSetup_FildName[e] + ' 뒤 자리 입력하여 주십시요."  ' + HTML_RET_P2 + '        id="TEXT_' + MemberSetup_ColumnName[e] + '_2" name="TEXT_' + MemberSetup_ColumnName[e] + '_2" type="password"  size="10"  maxlength="7" />';
    }
    else if (MemberSetup_Type[e] == "EMAIL") {
        HTML_RET = '<input title="' + MemberSetup_FildName[e] + ' @에 앞 자리 입력하여 주십시요."  maxlength="30" onkeyup="CheckStrLen(this,30);" onblur="CheckStrLen(this,30);" onkeydown="if(event.keyCode ==13){return false}"  id="TEXT_' + MemberSetup_ColumnName[e] + '_1" name="TEXT_' + MemberSetup_ColumnName[e] + '_1"  type="text" />'
        + ' @ <input title="' + MemberSetup_FildName[e] + ' @에 뒤 자리 자리(직접입력시) 주십시요."  maxlength="50" onkeyup="CheckStrLen(this,50);" onblur="CheckStrLen(this,50);" onkeydown="if(event.keyCode ==13){return false}"  id="TEXT_' + MemberSetup_ColumnName[e] + '_2" name="TEXT_' + MemberSetup_ColumnName[e] + '_2" style="display:none;" type="text" />'
        + ' <select title="' + MemberSetup_FildName[e] + ' @에 뒤 자리 선택하여 주십시요."  name="DDL_' + MemberSetup_ColumnName[e] + '" id="DDL_' + MemberSetup_ColumnName[e] + '" class="input" '
        + ' onchange="if(this.value==\'etc\'){document.getElementById(\'TEXT_' + MemberSetup_ColumnName[e] + '_2\').style.display=\'\';}'
        + 'else{document.getElementById(\'TEXT_' + MemberSetup_ColumnName[e] + '_2\').style.display=\'none\';}">'
        + '<option value="">선택하세요</option>'
        + '<option value="etc">직접입력</option>'
        + '<option value="naver.com">naver.com</option>'
        + '<option value="chol.com">chol.com</option>'
        + '<option value="dreamwiz.com">dreamwiz.com</option>'
        + '<option value="empal.com">empal.com</option>'
        + '<option value="freechal.com">freechal.com</option>'
        + '<option value="gmail.com">gmail.com</option>'
        + '<option value="hanafos.com">hanafos.com</option>'
        + '<option value="hanmail.net">hanmail.net</option>'
        + '<option value="hanmir.com">hanmir.com</option>'
        + '<option value="hitel.net">hitel.net</option>'
        + '<option value="hotmail.com">hotmail.com</option>'
        + '<option value="korea.com">korea.com</option>'
        + '<option value="lycos.co.kr">lycos.co.kr</option>'
        + '<option value="nate.com">nate.com</option>'
        + '<option value="netian.com">netian.com</option>'
        + '<option value="paran.com">paran.com</option>'
        + '<option value="yahoo.com">yahoo.com</option>'
        + '<option value="yahoo.co.kr">yahoo.co.kr</option>'
        + '</select>';
    }
    else if (MemberSetup_Type[e] == "RADIO") {
        HTML_RET = "<span  class=\"input_no\">"; var TEMP_VALUE = MemberSetup_baseStr[e].split('↑');
        if (TEMP_VALUE.length <= 4) {
            for (var NUM = 0; NUM < TEMP_VALUE.length; NUM++) {
                HTML_RET_P1 = ""; if (TEMP_VALUE[NUM].trim() == "") { continue; } if (NUM == 0) HTML_RET_P1 = " checked=\"checked\" ";
                HTML_RET += "<input " + HTML_RET_P1 + " id=\"RADIO_" + MemberSetup_ColumnName[e] + "_" + NUM + "\" type=\"radio\" name=\"RADIO_" + MemberSetup_ColumnName[e] + "\" value=\"" + TEMP_VALUE[NUM] + "\" /><label for=\"RADIO_" + MemberSetup_ColumnName[e] + "_" + NUM + "\">" + TEMP_VALUE[NUM] + "</label>";
            };
        }
        else {
            HTML_RET += '<table cellspacing="0" cellpadding="1" width="100%" border="0"><tbody> ';
            for (var NUM = 0; NUM < TEMP_VALUE.length; NUM++) {
                if ((NUM + 1) % 4 == 1) HTML_RET += '<tr>';
                HTML_RET += '<td>';
                HTML_RET_P1 = ""; if (TEMP_VALUE[NUM].trim() == "") { continue; } if (NUM == 0) HTML_RET_P1 = " checked=\"checked\" ";
                HTML_RET += "<input " + HTML_RET_P1 + " id=\"RADIO_" + MemberSetup_ColumnName[e] + "_" + NUM + "\" type=\"radio\" name=\"RADIO_" + MemberSetup_ColumnName[e] + "\" value=\"" + TEMP_VALUE[NUM] + "\" /><label for=\"RADIO_" + MemberSetup_ColumnName[e] + "_" + NUM + "\">" + TEMP_VALUE[NUM] + "</label>";
                HTML_RET += '</td>';
                if ((NUM + 1) % 4 == 0) HTML_RET += '</tr>';
            };
            HTML_RET += '</table>';
        }
        HTML_RET += "</span>";
    }
    else if (MemberSetup_Type[e] == "PHONE") {
        HTML_RET = ''
        + '<label class=\"dcaption\" for="TEXT_' + MemberSetup_ColumnName[e] + '_1">' + MemberSetup_FildName[e] + ' 앞 자리 입력하여 주십시요.</label>'
        + '<input title="' + MemberSetup_FildName[e] + ' 앞 자리 입력하여 주십시요." id="TEXT_' + MemberSetup_ColumnName[e] + '_1" name="TEXT_' + MemberSetup_ColumnName[e] + '_1" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4" size="4" type="text" />'
        + '<label class=\"dcaption\" for="TEXT_' + MemberSetup_ColumnName[e] + '_2">' + MemberSetup_FildName[e] + ' 중간 자리 입력하여 주십시요.</label>'
        + ' - <input title="' + MemberSetup_FildName[e] + ' 중간 자리 입력하여 주십시요." id="TEXT_' + MemberSetup_ColumnName[e] + '_2" name="TEXT_' + MemberSetup_ColumnName[e] + '_2" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4" size="4" type="text" />'
        + '<label class=\"dcaption\" for="TEXT_' + MemberSetup_ColumnName[e] + '_3">' + MemberSetup_FildName[e] + ' 뒤 자리 입력하여 주십시요.</label>'
        + ' - <input title="' + MemberSetup_FildName[e] + ' 뒤 자리 입력하여 주십시요." id="TEXT_' + MemberSetup_ColumnName[e] + '_3" name="TEXT_' + MemberSetup_ColumnName[e] + '_3" onkeyup="onlyNumber_2();" onblur="onlyNumber_2();" onkeydown="if(event.keyCode ==13){return false}"  maxlength="4" size="4" type="text" />';
    }
    else if (MemberSetup_Type[e] == "ADDRESS") {
        HTML_RET = ''
        + '<input title="' + MemberSetup_FildName[e] + '에 우편번호 앞 자리 선택하여 주십시요."  id="txt_' + MemberSetup_ColumnName[e] + '_zipcode1" size="3" name="txt_' + MemberSetup_ColumnName[e] + '_zipcode1" type="text" readOnly="readOnly" /> - '
        + '<input     title="' + MemberSetup_FildName[e] + '에 우편번호 뒤 자리 선택하여 주십시요."  id="txt_' + MemberSetup_ColumnName[e] + '_zipcode2" size="3" name="txt_' + MemberSetup_ColumnName[e] + '_zipcode2" type="text"  readOnly="readOnly" /> '
        + '<a href="#" onclick="MM_openBrWindow7(\'/COMMON/Address/Address2.aspx?txt=' + MemberSetup_ColumnName[e] + '\',\'NwdAddress\',\'width=500,height=450\');return false;" ><img '
        + ' style="cursor:pointer" height="23" alt="우편번호검색" width="90" align="absMiddle" src="/img/bt_search_addr.gif" /></a>'
        + '<br/>'
        + '<input title="' + MemberSetup_FildName[e] + ' 앞 자리 선택하여 주십시요." id="txt_' + MemberSetup_ColumnName[e] + '_addr1" style="width: 250px" name="txt_' + MemberSetup_ColumnName[e] + '_addr1" type="text" readOnly="readOnly" />'
        + '<input title="' + MemberSetup_FildName[e] + ' 뒤 자리 입력하여 주십시요." id="txt_' + MemberSetup_ColumnName[e] + '_addr2" style="width: 250px" name="txt_' + MemberSetup_ColumnName[e] + '_addr2" type="text" />';
    }
    else if (MemberSetup_Type[e] == "DATE") {
        if (MemberSetup_ColumnName[e] == "memmarridate") {
            HTML_RET = ''
            + '<span class="input_no" id="rbo_' + MemberSetup_ColumnName[e] + '_span" hidefocus="hidefocus" style="selector-dummy: true">'
            + '<input title="' + MemberSetup_FildName[e] + ' 미혼"  id="rbo_' + MemberSetup_ColumnName[e] + '_0" checked="checked" hidefocus="hidefocus" style="selector-dummy: true" type="radio" name="rbo_' + MemberSetup_ColumnName[e] + '" value="0" />'
            + '<label for="rbo_' + MemberSetup_ColumnName[e] + '_0">미혼</label>'
            + '<input title="' + MemberSetup_FildName[e] + ' 기혼"  id="rbo_' + MemberSetup_ColumnName[e] + '_1" hidefocus="hidefocus" style="selector-dummy: true" type="radio" name="rbo_' + MemberSetup_ColumnName[e] + '" value="1" />'
            + '<label for="rbo_' + MemberSetup_ColumnName[e] + '_1">기혼</label></span> '
            + '<select title="' + MemberSetup_FildName[e] + ' 월" id="TEXT_' + MemberSetup_ColumnName[e] + '_1" name="TEXT_' + MemberSetup_ColumnName[e] + '_1" >'
            + '<option value="" >월</option><option value="1" >1</option><option value="2" >2</option><option value="3" >3</option><option value="4" >4</option><option value="5" >5</option><option value="6" >6</option><option value="7" >7</option><option value="8" >8</option><option value="9" >9</option><option value="10" >10</option><option value="11" >11</option><option value="12" >12</option></select> 월'
            + '<select title="' + MemberSetup_FildName[e] + ' 일" id="TEXT_' + MemberSetup_ColumnName[e] + '_2" name="TEXT_' + MemberSetup_ColumnName[e] + '_2" >'
            + '<option value="" >일</option><option value="1" >1</option><option value="2" >2</option><option value="3" >3</option><option value="4" >4</option><option value="5" >5</option><option value="6" >6</option><option value="7" >7</option><option value="8" >8</option><option value="9" >9</option><option value="10" >10</option>'
            + '<option value="11" >11</option><option value="12" >12</option><option value="13" >13</option><option value="14" >14</option><option value="15" >15</option><option value="16" >16</option><option value="17" >17</option><option value="18" >18</option><option value="19" >19</option><option value="20" >20</option>'
            + '<option value="21" >21</option><option value="22" >22</option><option value="23" >23</option><option value="24" >24</option><option value="25" >25</option><option value="26" >26</option><option value="27" >27</option><option value="28" >28</option><option value="29" >29</option><option value="30" >30</option>'
            + '<option value="31" >31</option>'
            + '</select> 일';
        }
        else if (MemberSetup_ColumnName[e] == "membirth") {
            HTML_RET = ''
            + ' <input title="' + MemberSetup_FildName[e] + ' 년도" maxlength="4" id="TEXT_' + MemberSetup_ColumnName[e] + '_0" name="TEXT_' + MemberSetup_ColumnName[e] + '_0" size="4" type="text"  /> 년 '
            + ' <select title="' + MemberSetup_FildName[e] + ' 월" id="TEXT_' + MemberSetup_ColumnName[e] + '_1" name="TEXT_' + MemberSetup_ColumnName[e] + '_1" >'
            + '<option value="" >월</option><option value="1" >1</option><option value="2" >2</option><option value="3" >3</option><option value="4" >4</option><option value="5" >5</option><option value="6" >6</option><option value="7" >7</option><option value="8" >8</option><option value="9" >9</option><option value="10" >10</option><option value="11" >11</option><option value="12" >12</option></select> 월'
            + '<select title="' + MemberSetup_FildName[e] + ' 일" id="TEXT_' + MemberSetup_ColumnName[e] + '_2" name="TEXT_' + MemberSetup_ColumnName[e] + '_2" >'
            + '<option value="" >일</option><option value="1" >1</option><option value="2" >2</option><option value="3" >3</option><option value="4" >4</option><option value="5" >5</option><option value="6" >6</option><option value="7" >7</option><option value="8" >8</option><option value="9" >9</option><option value="10" >10</option>'
            + '<option value="11" >11</option><option value="12" >12</option><option value="13" >13</option><option value="14" >14</option><option value="15" >15</option><option value="16" >16</option><option value="17" >17</option><option value="18" >18</option><option value="19" >19</option><option value="20" >20</option>'
            + '<option value="21" >21</option><option value="22" >22</option><option value="23" >23</option><option value="24" >24</option><option value="25" >25</option><option value="26" >26</option><option value="27" >27</option><option value="28" >28</option><option value="29" >29</option><option value="30" >30</option>'
            + '<option value="31" >31</option>'
            + '</select> 일'
            + ' <span class="input_no" id="rbo_' + MemberSetup_ColumnName[e] + '_span" hidefocus="hidefocus" style="selector-dummy: true">'
            + '(<input title="' + MemberSetup_FildName + ' 양력"  id="rbo_' + MemberSetup_ColumnName[e] + '_0" checked="checked" hidefocus="hidefocus" style="selector-dummy: true" type="radio" name="rbo_' + MemberSetup_ColumnName[e] + '" value="0" />'
            + '<label for="rbo_' + MemberSetup_ColumnName[e] + '_0">양력</label>'
            + '<input title="' + MemberSetup_FildName + ' 음력" id="rbo_' + MemberSetup_ColumnName[e] + '_1" hidefocus="hidefocus" style="selector-dummy: true" type="radio" name="rbo_' + MemberSetup_ColumnName[e] + '" value="1" />'
            + '<label for="rbo_' + MemberSetup_ColumnName[e] + '_1">음력</label>)</span>';
        }
        else {
            HTML_RET = '<input title="' + MemberSetup_FildName[e] + '" ' + HTML_RET_P1 + ' id="TEXT_' + MemberSetup_ColumnName[e] + '" name="TEXT_' + MemberSetup_ColumnName[e] + '" size="10" type="text" readOnly="readOnly" />'
            + '<a href="#"  onclick="callCalPop(TEXT_' + MemberSetup_ColumnName[e] + ', \'yyyy-mm-dd\');return false;" ><img align="absMiddle" src="/_js/calener/ico_calendar.gif"></a>';
        }
    }
    else if (MemberSetup_Type[e] == "FILE") {
        HTML_RET = '<table cellspacing="0" cellpadding="1" width="100%" border="0"><tbody><tr>'
            + ' <td><input title="' + MemberSetup_FildName[e] + ' 첩부화일 선택하여 주십시요." id="FILE_' + MemberSetup_ColumnName[e] + '" name="FILE_' + MemberSetup_ColumnName[e] + '" value2="jpg,gif,png,ico" type="file" /> '
            + ' <span id="SPAN_' + MemberSetup_ColumnName[e] + '" name="SPAN_' + MemberSetup_ColumnName[e] + '"  style="display:none;" class="input_no" hidefocus="hidefocus" style="selector-dummy: true">'
            + ' <span id="SPANF1_' + MemberSetup_ColumnName[e] + '" name="SPANF1_' + MemberSetup_ColumnName[e] + '" ></span>'
            + ' <span id="SPANF_' + MemberSetup_ColumnName[e] + '" name="SPANF_' + MemberSetup_ColumnName[e] + '" ></span>'
            + ' <input title="' + MemberSetup_FildName[e] + ' 첩부화일 정보 입니다."id="TEXT_' + MemberSetup_ColumnName[e] + '" name="TEXT_' + MemberSetup_ColumnName[e] + '" size="4" style="display:none;" type="text"  />'
            + ' <input title="' + MemberSetup_FildName[e] + ' 첩부화일 정보 입니다."id="DEL_' + MemberSetup_ColumnName[e] + '" hidefocus="hidefocus" style="selector-dummy: true" type="checkbox" name="DEL_' + MemberSetup_ColumnName[e] + '" value="1" />'
            + ' <label for="DEL_' + MemberSetup_ColumnName[e] + '">삭제</label></span></td></tr></tbody></table>';
    }
    else if (MemberSetup_Type[e] == "CHECKBOX") {
        HTML_RET = '<input  id="TEXT_' + MemberSetup_ColumnName[e] + '" name="TEXT_' + MemberSetup_ColumnName[e] + '" style="display:none;" type="text" />';
        var TEMP_VALUE = MemberSetup_baseStr[e].split('↑');
        if (TEMP_VALUE.length <= 4) {
            for (var NUM = 0; NUM < TEMP_VALUE.length; NUM++) {
                if (TEMP_VALUE[NUM].trim() == "") { continue; }
                HTML_RET += '<input id="' + MemberSetup_ColumnName[e] + '_' + NUM + '" name="' + MemberSetup_ColumnName[e] + '_' + NUM + '" '
            + ' onclick="CHECKBOX_CHECK(\'' + MemberSetup_ColumnName[e] + '\',' + TEMP_VALUE.length + ')"  '
            + ' hidefocus="hidefocus" style="selector-dummy: true"  class="input_no" type="checkbox" value="' + TEMP_VALUE[NUM] + '" />'
            + ' <label for="' + MemberSetup_ColumnName[e] + '_' + NUM + '">' + TEMP_VALUE[NUM] + '</label>';
            }
        }
        else {
            HTML_RET += '<table cellspacing="0" cellpadding="1" width="100%" border="0"><tbody> ';
            for (var NUM = 0; NUM < TEMP_VALUE.length; NUM++) {
                if (TEMP_VALUE[NUM].trim() == "") { continue; }
                if ((NUM + 1) % 4 == 1) HTML_RET += '<tr>';
                HTML_RET += '<td>'
            + '<input id="' + MemberSetup_ColumnName[e] + '_' + NUM + '" name="' + MemberSetup_ColumnName[e] + '_' + NUM + '" '
            + ' onclick="CHECKBOX_CHECK(\'' + MemberSetup_ColumnName[e] + '\',' + TEMP_VALUE.length + ')" '
            + ' hidefocus="hidefocus" style="selector-dummy: true"  class="input_no" type="checkbox" value="' + TEMP_VALUE[NUM] + '" />'
            + ' <label for="' + MemberSetup_ColumnName[e] + '_' + NUM + '">' + TEMP_VALUE[NUM] + '</label>';
                HTML_RET += '</td>';
                if ((NUM + 1) % 4 == 0) HTML_RET += '</tr>';
            }
            HTML_RET += '</table>';
        }
    }
    else if (MemberSetup_Type[e] == "SELECTBOX") {
        var TEMP_VALUE = MemberSetup_baseStr[e].split('↑'); HTML_RET = "<select title=\"" + MemberSetup_FildName[e] + "\"  " + HTML_RET_P1 + " id=\"DDL_" + MemberSetup_ColumnName[e] + "\" name=\"DDL_" + MemberSetup_ColumnName[e] + "\" ><option value=\"\" selected=\"selected\">선택하세요</option>";
        for (var NUM = 0; NUM < TEMP_VALUE.length; NUM++) { if (TEMP_VALUE[NUM].trim() == "") { continue; } HTML_RET += "<option value=\"" + TEMP_VALUE[NUM] + "\">" + TEMP_VALUE[NUM] + "</option >"; }; HTML_RET += "</select >";
    }
    else if (MemberSetup_Type[e] == "TEXTAREA") {
        HTML_RET = '<textarea title="' + MemberSetup_FildName[e] + '"  ' + HTML_RET_P1 + ' id="TEXT_' + MemberSetup_ColumnName[e] + '" name="TEXT_' + MemberSetup_ColumnName[e] + '" style="width:' + MemberSetup_Twidth[e] + ';height:' + MemberSetup_Thight[e] + '" ></textarea>';
    }
    else if (MemberSetup_Type[e] == "SPAM") {
        var MPMP = RENDOMS_PLUS();
        HTML_RET = '<span id="SPAM_' + MemberSetup_ColumnName[e] + '_0" name="SPAM_' + MemberSetup_ColumnName[e] + '_0" >' + MPMP[1] + '</span>';
        HTML_RET += '<input title="자동글방지 (' + MPMP[0] + ')을 입력하여 주십시요."  maxlength="4" onkeydown="if(event.keyCode ==13){return false}" value2="' + MPMP[0] + '"  size="10" id="TEXT_' + MemberSetup_ColumnName[e] + '" name="TEXT_' + MemberSetup_ColumnName[e] + '" type="text" />'
        + '<input value="' + MPMP[0] + '"    id="TEXT_' + MemberSetup_ColumnName[e] + '_2" name="TEXT_' + MemberSetup_ColumnName[e] + '_2" type="hidden" />'
        + '<span class="helptxt"> * 대소문자를 구분하여 <font color="#ff0000">빨간글자만</font> 순서대로 입력하세요.</span>';
    }

    HTML_RET += '<span id="SPAN_' + MemberSetup_ColumnName[e] + '" name="SPAN_' + MemberSetup_ColumnName[e] + '" ></span>';
    if (MemberSetup_Memo[e] != "") { HTML_RET += '<span class="helptxt">' + MemberSetup_Memo[e] + '</span>'; }
    return HTML_RET;
}
var SPAM_str = "";
/*function RENDOMS(){var RENDOMS_OP= new Array();     var RENDOMS_OP2= new Array();     var str = "abcdefghijklmnopqrstuvwxyz1234567890"; for (var Nx=  0 ; Nx < 10 ; Nx ++ ){RENDOMS_OP[Nx] = str.charAt(Math.round(Math.random()*str.length));RENDOMS_OP2[Nx] = "";};var MM_str22 ="";while ((MM_str22).length < 4 ){for (var Nx2=  0 ; Nx2 < 10 ; Nx2 ++ )MM_str22 += RENDOMS_OP2[Nx2];RENDOMS_OP2[ Math.round(Math.random()*(RENDOMS_OP.length-1)) ] = "T";}    var MM_str ="";    var MM_str2 ="";for (var Nx=  0 ; Nx < 10 ; Nx ++ ){if(RENDOMS_OP2[Nx] == "T"){MM_str += RENDOMS_OP[Nx];MM_str2+='<span class="Pw2">'+ RENDOMS_OP[Nx]+'</span>';}else{MM_str2+='<span class="Pw1">'+ RENDOMS_OP[Nx]+'</span>';}}    SPAM_str = MM_str ; return MM_str2;}*/
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
            MM_str += RENDOMS_OP[Nx]; MM_str2 += '<span class="Pw2"><b><font color="red"  class="Pw2"  >' + RENDOMS_OP[Nx] + '</font></b></span>';
        }
        else { MM_str2 += '<span class="Pw1"><font class="Pw1"  >' + RENDOMS_OP[Nx] + '</font></span>'; }
    } SPAM_str = MM_str; return MM_str2;
}
function CHECKBOX_CHECK(e1, e2) { var temp_ = ""; for (var NUM = 0; NUM < e2; NUM++) { if (document.getElementById(e1 + "_" + NUM).checked == true) { if (temp_ != "") { temp_ += ","; } temp_ += document.getElementById(e1 + "_" + NUM).value; } } document.getElementById("TEXT_" + e1).value = temp_; }

function TXT_JUMIN(e) { 
    var obj_01 = document.getElementById("TEXT_memjumin_1").value.trim();
    var obj_02 = document.getElementById("TEXT_memjumin_2").value.trim();
    if (obj_01 != "" && obj_02 != "" && obj_01.length  > 1 ) {
        if (obj_02.substring(0, 1) == "1" || obj_02.substring(0, 1) == "2") {
            obj_01 = "19" + obj_01;
        }
        else {
            obj_01 = "20" + obj_01;
        } 
        if (obj_01.length > 4) {
            try{document.getElementById("TEXT_membirth_0").value = obj_01.substring(0,4);}catch(err) {}
        }
        var MM_1 = parseInt(obj_01.substring(4, 6) + "");
        if (obj_01.substring(4, 5) == '0') MM_1 = parseInt(obj_01.substring(5, 6) + "");
        var MM_2 = parseInt(obj_01.substring(6, 8) + "");
        if (obj_01.substring(6, 7) == '0') MM_2 = parseInt(obj_01.substring(7, 8) + ""); 
        try { Teldd(document.getElementById("TEXT_membirth_1"), MM_1 + ""); } catch (err) { }
        try { Teldd(document.getElementById("TEXT_membirth_2"), MM_2 + ""); } catch (err) { }
    }
    
}
function TXT_membusiness(e) 
{
    document.getElementById("TEXT_" + e).value = ""
    + document.getElementById("TEXT_" + e + "_1").value + "↑"
    + document.getElementById("TEXT_" + e + "_2").value + '-' + document.getElementById("TEXT_" + e + "_21").value + '-' + document.getElementById("TEXT_" + e + "_22").value + "↑"
    + document.getElementById("TEXT_" + e + "_3").value + "↑"
    + document.getElementById("TEXT_" + e + "_4").value + '-' + document.getElementById("TEXT_" + e + "_41").value + '-' + document.getElementById("TEXT_" + e + "_42").value + "↑"
    + document.getElementById("TEXT_" + e + "_5").value + "↑"
    + document.getElementById("TEXT_" + e + "_6").value + "↑"
    + document.getElementById("txt_" + e + "_addr1").value + "↑"
    + document.getElementById("txt_" + e + "_addr2").value + "↑"
    + document.getElementById("txt_" + e + "_zipcode1").value + "↑"
    + document.getElementById("txt_" + e + "_zipcode2").value + "↑" ;
}
function TXT_membusiness_READ(e, e1) {
    var TEMP_VALUE = e1.split('↑');
    if (TEMP_VALUE.length > 5) {
        document.getElementById("TEXT_" + e + "_1").value = TEMP_VALUE[0];
        var TEMP_VALUE222 = TEMP_VALUE[1].split('-');
        if (TEMP_VALUE222.length > 2) 
        {
            document.getElementById("TEXT_" + e + "_2").value = TEMP_VALUE222[0];
            document.getElementById("TEXT_" + e + "_21").value = TEMP_VALUE222[1];
            document.getElementById("TEXT_" + e + "_22").value = TEMP_VALUE222[2];
        }
        
        document.getElementById("TEXT_" + e + "_3").value = TEMP_VALUE[2];
        var TEMP_VALUE333 = TEMP_VALUE[3].split('-');
        if (TEMP_VALUE333.length > 2) {
            document.getElementById("TEXT_" + e + "_4").value = TEMP_VALUE333[0];
            document.getElementById("TEXT_" + e + "_41").value = TEMP_VALUE333[1];
            document.getElementById("TEXT_" + e + "_42").value = TEMP_VALUE333[2];
        }
        document.getElementById("TEXT_" + e + "_5").value = TEMP_VALUE[4];
        document.getElementById("TEXT_" + e + "_6").value = TEMP_VALUE[5];
    }
    if (TEMP_VALUE.length > 9) {
        document.getElementById("txt_" + e + "_addr1").value = TEMP_VALUE[6];
        document.getElementById("txt_" + e + "_addr2").value = TEMP_VALUE[7];
        document.getElementById("txt_" + e + "_zipcode1").value = TEMP_VALUE[8];
        document.getElementById("txt_" + e + "_zipcode2").value = TEMP_VALUE[9];
    }
}
/********** MAKE_INPUT_TYPE **************************************************************************************/




/*********** Popup   ********************************************************************************************/

var POP_NUM= 0 ;  
function MM_openBrWindow7(theURL,winName,features) { //v2.0
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
		backgroundColor = "#000";
		filter = "Alpha(Opacity=10)";
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

function CLOSE_LAER( n ) {
    try { document.getElementById('objPopupLayerBg').removeNode(true); } catch (err) { }
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
 