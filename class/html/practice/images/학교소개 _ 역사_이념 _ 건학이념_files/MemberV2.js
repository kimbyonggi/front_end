


var MEMEROUT_AR1 = new Array();
var MEMEROUT_AR2 = new Array();
var MEMEROUT_AR3 = new Array();
var MEMEROUT_AR4 = new Array();
var MEMEROUT_AR5 = new Array();
var MEMEROUT_AR6 = new Array();
var MEMEROUT_AR7 = new Array(); /*결과*/
var MEMEROUT_ANUM = 0;

var MemberV2 = {
    FINDID_LOAD: function (e1, e2, e7) {
        MEMEROUT_ANUM++;
        MEMEROUT_AR1[MEMEROUT_ANUM] = e1;
        MEMEROUT_AR2[MEMEROUT_ANUM] = e2;
        MEMEROUT_AR7[MEMEROUT_ANUM] = e7;

        document.write('<img height="23" alt="확인" onclick="MemberV2.FINDID_SUBMIT(' + MEMEROUT_ANUM + ');" style="cursor:pointer;" hspace="5" width="66" src="/img/bt_cause.gif" />');
        document.write('<img height="23" alt="취소" onclick="MemberV2.FINDID_CANCEL(' + MEMEROUT_ANUM + ');" style="cursor:pointer;" hspace="5" width="68" src="/img/bt_cancel.gif" />');

        //window.onload = function() 
        {
            CHKPLUS(MEMEROUT_AR1[MEMEROUT_ANUM], "txt", 20);
            CHKPLUS(MEMEROUT_AR2[MEMEROUT_ANUM], "txt", 200);
        }
    },
    FINDPWD_LOAD: function (e1, e2, e3, e4, e5, e6, e7) {
        MEMEROUT_ANUM++;
        MEMEROUT_AR1[MEMEROUT_ANUM] = e1;
        MEMEROUT_AR2[MEMEROUT_ANUM] = e2;
        MEMEROUT_AR3[MEMEROUT_ANUM] = e3;
        MEMEROUT_AR4[MEMEROUT_ANUM] = e4;
        MEMEROUT_AR5[MEMEROUT_ANUM] = e5;
        MEMEROUT_AR6[MEMEROUT_ANUM] = e6;
        MEMEROUT_AR7[MEMEROUT_ANUM] = e7;
        document.write('<img height="23" alt="확인" onclick="MemberV2.FINDPWD_SUBMIT(' + MEMEROUT_ANUM + ');" style="cursor:pointer;" hspace="5" width="66" src="/img/bt_cause.gif" />');
        document.write('<img height="23" alt="취소" onclick="MemberV2.FINDPWD_CANCEL(' + MEMEROUT_ANUM + ');" style="cursor:pointer;" hspace="5" width="68" src="/img/bt_cancel.gif" />');

        //window.onload = function() 
        {
            CHKPLUS(MEMEROUT_AR1[MEMEROUT_ANUM], "txt", 20);
            CHKPLUS(MEMEROUT_AR2[MEMEROUT_ANUM], "txt", 20);
            CHKPLUS(MEMEROUT_AR3[MEMEROUT_ANUM], "int", 0);
            CHKPLUS(MEMEROUT_AR4[MEMEROUT_ANUM], "int", 0);
            CHKPLUS(MEMEROUT_AR5[MEMEROUT_ANUM], "int", 0);
            CHKPLUS(MEMEROUT_AR6[MEMEROUT_ANUM], "txt", 200);
        }
    },
    MEMBEROUt_LOAD: function (e1, e2, e3, e4, e7) {
        MEMEROUT_ANUM++;
        MEMEROUT_AR1[MEMEROUT_ANUM] = e1;
        MEMEROUT_AR2[MEMEROUT_ANUM] = e2;
        MEMEROUT_AR3[MEMEROUT_ANUM] = e3;
        MEMEROUT_AR4[MEMEROUT_ANUM] = e4;
        MEMEROUT_AR7[MEMEROUT_ANUM] = e7;
        document.write('<img height="23" alt="확인" onclick="MemberV2.MEMBEROUt_SUBMIT(' + MEMEROUT_ANUM + ');" style="cursor:pointer;" hspace="5" width="66" src="/img/bt_cause.gif" />');
        document.write('<img height="23" alt="취소" onclick="MemberV2.MEMBEROUt_CANCEL(' + MEMEROUT_ANUM + ');" style="cursor:pointer;" hspace="5" width="68" src="/img/bt_cancel.gif" />');

        //window.onload = function() 
        {
            CHKPLUS(MEMEROUT_AR1[MEMEROUT_ANUM], "txt", 20);
            CHKPLUS(MEMEROUT_AR2[MEMEROUT_ANUM], "txt", 20);
        }
    }
    ,
    FINDID_SUBMIT: function (e) {
        if (typeof (MEMEROUT_AR1[e]) == undefined) return;
        try {
            if (document.getElementById(MEMEROUT_AR1[e]).value.trim() == "") {
                alert("이름을 입력하십시요.");
                document.getElementById(MEMEROUT_AR1[e]).focus();
                return;
            }
            if (document.getElementById(MEMEROUT_AR2[e]).value.trim() == "") {
                alert("이메일을 입력하십시요.");
                document.getElementById(MEMEROUT_AR2[e]).focus();
                return;
            }


            var myData2 = JSON.parse("{}");
            myData2["TYPE0"] = "FINDID";
            myData2["TYPE1"] = document.getElementById(MEMEROUT_AR1[e]).value.trim();
            myData2["TYPE2"] = document.getElementById(MEMEROUT_AR2[e]).value.trim();
            myData2["TYPE3"] = "";
            myData2["TYPE4"] = "";

            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "json",               //데이타타입 html, xml 등등
                url: "/COMMON/MyPage/ClientV2.aspx/FIND_PWD_EXT",     //경로
                data: JSON.stringify(myData2),
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                contentType: "application/json; charset=utf-8",
                success: function (jsons) {
                    document.getElementById(MEMEROUT_AR7[e]).innerHTML = "<strong>" + jsons.d + "</strong>";
                },    //성공시 실행할 함수
                error: function () {
                }             //에러발생시 실행할 함수
            });
        }
        catch (err) { }
    }
    ,
    FINDPWD_SUBMIT: function (e) {
        if (typeof (MEMEROUT_AR1[e]) == undefined) return;
        try {

            if (document.getElementById(MEMEROUT_AR1[e]).value.trim() == "") {
                alert("이름을 입력하십시요.");
                document.getElementById(MEMEROUT_AR1[e]).focus();
                return;
            }
            if (document.getElementById(MEMEROUT_AR2[e]).value.trim() == "") {
                alert("아이디을 입력하십시요.");
                document.getElementById(MEMEROUT_AR2[e]).focus();
                return;
            }
            if (document.getElementById(MEMEROUT_AR3[e]).value.trim() == "") {
                alert("연락처을 입력하십시요.");
                document.getElementById(MEMEROUT_AR3[e]).focus();
                return;
            }
            if (document.getElementById(MEMEROUT_AR4[e]).value.trim() == "") {
                alert("연락처을 입력하십시요.");
                document.getElementById(MEMEROUT_AR4[e]).focus();
                return;
            }
            if (document.getElementById(MEMEROUT_AR5[e]).value.trim() == "") {
                alert("연락처을 입력하십시요.");
                document.getElementById(MEMEROUT_AR5[e]).focus();
                return;
            }
            if (document.getElementById(MEMEROUT_AR6[e]).value.trim() == "") {
                alert("이메일을 입력하십시요.");
                document.getElementById(MEMEROUT_AR6[e]).focus();
                return;
            }

            var myData2 = JSON.parse("{}");
            myData2["TYPE0"] = "FINDPWD";
            myData2["TYPE1"] = document.getElementById(MEMEROUT_AR1[e]).value.trim();
            myData2["TYPE2"] = document.getElementById(MEMEROUT_AR2[e]).value.trim();
            myData2["TYPE3"] = document.getElementById(MEMEROUT_AR3[e]).value.trim() + '-' + document.getElementById(MEMEROUT_AR4[e]).value.trim() + '-' + document.getElementById(MEMEROUT_AR5[e]).value.trim();
            myData2["TYPE4"] = document.getElementById(MEMEROUT_AR6[e]).value.trim();

            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "json",               //데이타타입 html, xml 등등
                url: "/COMMON/MyPage/ClientV2.aspx/FIND_PWD_EXT",     //경로
                data: JSON.stringify(myData2),
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                contentType: "application/json; charset=utf-8",
                success: function (jsons) {
                    document.getElementById(MEMEROUT_AR7[e]).innerHTML = "<strong>" + jsons.d + "</strong>";
                },    //성공시 실행할 함수
                error: function () {
                }             //에러발생시 실행할 함수
            });
        }
        catch (err) { }
    }
    ,
    MEMBEROUt_SUBMIT: function (e) {
        if (typeof (MEMEROUT_AR1[e]) == undefined) return;
        try {
            if (document.getElementById(MEMEROUT_AR4[e]).checked == false) {
                alert("동의함을 선택하십시요.");
                return;
            }
            if (document.getElementById(MEMEROUT_AR1[e]).value.trim() == "") {
                alert("아이디을 입력하십시요.");
                document.getElementById(MEMEROUT_AR1[e]).focus();
                return;
            }
            if (document.getElementById(MEMEROUT_AR2[e]).value.trim() == "") {
                alert("비밀번호을 입력하십시요.");
                document.getElementById(MEMEROUT_AR2[e]).focus();
                return;
            }
            if (document.getElementById(MEMEROUT_AR3[e]).value.trim() == "") {
                alert("탈퇴사유을 입력하십시요.");
                document.getElementById(MEMEROUT_AR3[e]).focus();
                return;
            }

            var myData2 = JSON.parse("{}");
            myData2["TYPE0"] = "MEMBEROUT";
            myData2["TYPE1"] = document.getElementById(MEMEROUT_AR1[e]).value.trim();
            myData2["TYPE2"] = document.getElementById(MEMEROUT_AR2[e]).value.trim();
            myData2["TYPE3"] = document.getElementById(MEMEROUT_AR3[e]).value.trim();
            myData2["TYPE4"] = "";

            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "json",               //데이타타입 html, xml 등등
                url: "/COMMON/MyPage/ClientV2.aspx/FIND_PWD_EXT",     //경로
                data: JSON.stringify(myData2),
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                contentType: "application/json; charset=utf-8",
                success: function (jsons) {
                    document.getElementById(MEMEROUT_AR7[e]).innerHTML = " <strong>" + jsons.d + "</strong>";
                    if (jsons.d == '정상적으로 처리되었습니다.') {
                        alert(jsons.d);
                        location.href = '/xbin/LOGOUT.aspx?url=/';
                    }
                },    //성공시 실행할 함수
                error: function () {
                }             //에러발생시 실행할 함수
            });
        }
        catch (err) { }
    }
    ,
    FINDID_CANCEL: function (e) {
        if (typeof (MEMEROUT_AR1[e]) == undefined) return;
        try {
            document.getElementById(MEMEROUT_AR1[e]).value = "";
            document.getElementById(MEMEROUT_AR2[e]).value = "";

            document.getElementById(MEMEROUT_AR7[e]).innerHTML = "(예 : 홍길동)";
        }
        catch (err) { }
    },
    FINDPWD_CANCEL: function (e) {
        if (typeof (MEMEROUT_AR1[e]) == undefined) return;
        try {
            document.getElementById(MEMEROUT_AR1[e]).value = "";
            document.getElementById(MEMEROUT_AR2[e]).value = "";
            document.getElementById(MEMEROUT_AR3[e]).value = "";
            document.getElementById(MEMEROUT_AR4[e]).value = "";
            document.getElementById(MEMEROUT_AR5[e]).value = "";
            document.getElementById(MEMEROUT_AR6[e]).value = "";
            document.getElementById(MEMEROUT_AR7[e]).innerHTML = "(예 : 홍길동)";
        }
        catch (err) { }
    },
    MEMBEROUt_CANCEL: function (e) {
        if (typeof (MEMEROUT_AR1[e]) == undefined) return;
        try {
            document.getElementById(MEMEROUT_AR1[e]).value = "";
            document.getElementById(MEMEROUT_AR2[e]).value = "";
        }
        catch (err) { }
    },
    FINDID_SUBMIT2: function (e) {
        if (typeof (MEMEROUT_AR1[e]) == undefined) return;
        try {
            if (document.getElementById(MEMEROUT_AR1[e]).value.trim() == "") {
                alert("이름을 입력하십시요.");
                document.getElementById(MEMEROUT_AR1[e]).focus();
                return;
            }
            if (document.getElementById(MEMEROUT_AR2[e]).value.trim() == "") {
                alert("이메일을 입력하십시요.");
                document.getElementById(MEMEROUT_AR2[e]).focus();
                return;
            }


            var myData2 = JSON.parse("{}");
            myData2["TYPE0"] = "FINDID2";
            myData2["TYPE1"] = encodeURIComponent(document.getElementById(MEMEROUT_AR1[e]).value.trim());
            myData2["TYPE2"] = encodeURIComponent(document.getElementById(MEMEROUT_AR2[e]).value.trim());
            myData2["TYPE3"] = "";
            myData2["TYPE4"] = "";

            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "json",               //데이타타입 html, xml 등등
                url: "/COMMON/MyPage/ClientV2.aspx/FIND_PWD_EXT",     //경로
                data: JSON.stringify(myData2),
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                contentType: "application/json; charset=utf-8",
                success: function (jsons) {
                    document.getElementById(MEMEROUT_AR7[e]).innerHTML = "<strong>" + jsons.d + "</strong>";
                },    //성공시 실행할 함수
                error: function () {
                }             //에러발생시 실행할 함수
            });
        }
        catch (err) { }
    },
    FINDPWD_SUBMIT2: function (e) {
        if (typeof (MEMEROUT_AR1[e]) == undefined) return;
        try {

            if (document.getElementById(MEMEROUT_AR1[e]).value.trim() == "") {
                alert("아이디을 입력하십시요.");
                document.getElementById(MEMEROUT_AR1[e]).focus();
                return;
            }
            if (document.getElementById(MEMEROUT_AR2[e]).value.trim() == "") {
                alert("이름을 입력하십시요.");
                document.getElementById(MEMEROUT_AR2[e]).focus();
                return;
            }
            if (document.getElementById(MEMEROUT_AR3[e]).value.trim() == "") {
                alert("이메일을 입력하십시요.");
                document.getElementById(MEMEROUT_AR3[e]).focus();
                return;
            }

            var myData2 = JSON.parse("{}");
            myData2["TYPE0"] = "FINDPWD2";
            myData2["TYPE1"] = encodeURIComponent(document.getElementById(MEMEROUT_AR1[e]).value.trim());
            myData2["TYPE2"] = encodeURIComponent(document.getElementById(MEMEROUT_AR2[e]).value.trim());
            myData2["TYPE3"] = encodeURIComponent(document.getElementById(MEMEROUT_AR3[e]).value.trim());
            myData2["TYPE4"] = "";

            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "json",               //데이타타입 html, xml 등등
                url: "/COMMON/MyPage/ClientV2.aspx/FIND_PWD_EXT",     //경로
                data: JSON.stringify(myData2),
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                contentType: "application/json; charset=utf-8",
                success: function (jsons) {
                    document.getElementById(MEMEROUT_AR7[e]).innerHTML = "<strong>" + jsons.d + "</strong>";
                },    //성공시 실행할 함수
                error: function () {
                }             //에러발생시 실행할 함수
            });

        }
        catch (err) { }
    }
}