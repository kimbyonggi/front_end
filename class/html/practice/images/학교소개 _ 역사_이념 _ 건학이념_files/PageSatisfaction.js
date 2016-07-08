var PageSatisfaction = {
    url: "/COMMON/Board/Satisfaction/BoardSb.aspx",
    type: "LIST",
    point: 0,
    content: "",
    num: 0,
    HTMLIN: "SPAN_Satisfaction",
    del: 0,


    go_: 0,
    Go: function() {
        if (PageSatisfaction.go_ > 0) return;
        PageSatisfaction.go_++;

        var remoteparams = "ncode=" + PageBaseInfo.Page
        + "&type=" + encodeURIComponent(PageSatisfaction.type)
        + "&point=" + PageSatisfaction.point
        + "&content=" + encodeURIComponent(PageSatisfaction.content)
        + "&num3=" + encodeURIComponent(PageSatisfaction.num)
        + "&del=" + PageSatisfaction.del;
         
        jQuery.ajax({
            type: "POST",                   //타입 GET , POST
            datatype: "html",               //데이타타입 html, xml 등등
            url: PageSatisfaction.url,     //경로
            data: remoteparams,
            async: false,                   //비동기 사용여부 true : 비동기, false : 동기
            success: function(data) {
                try {

                    var result = data.trim();

                    if (PageSatisfaction.type == "INPUT")
                        alert("작성의견이 정상적으로 저장되었습니다.");

                    document.getElementById(PageSatisfaction.HTMLIN).innerHTML = result;
                    PageSatisfaction.go_ = 0;
                } catch (e) {
                    alert("Javascript Error -> " + e.description);
                }

            },    //성공시 실행할 함수
            error: function() {
                return false;
            }             //에러발생시 실행할 함수
        }); 
    },
    InPutEx: function(e1, e2) {
        var obj1 = document.getElementById(e1);
        var obj2 = document.getElementById(e2);
        PageSatisfaction.point = 0;
        PageSatisfaction.content = "";

        if (obj1 && obj2) {
            var objx1 = document.getElementById(e1).getElementsByTagName("INPUT");
            if (objx1) {
                for (var f = 0; f < objx1.length; f++) {
                    if (objx1[f].checked) {
                        PageSatisfaction.point = objx1[f].value;
                        break;
                    }
                }
            }
            PageSatisfaction.content = obj2.value.trim();
            PageSatisfaction.type = "INPUT";

            if (PageSatisfaction.point == 0) {
                alert("평점을 선택하여 주십시요.");
                return;
            }
            if (PageSatisfaction.content == "") {
                alert("내용을 입력하여 주십시요.");
                return;
            }
            PageSatisfaction.Go();
        }
    },
    List: function(e) {
        PageSatisfaction.type = "LIST";
        PageSatisfaction.num = e;
        PageSatisfaction.Go();
    },
    DELS: function(e) {
        if (!confirm("정말로 삭제하시겠습니까?")) return;
        
        PageSatisfaction.type = "DEL";
        PageSatisfaction.del = e;
        PageSatisfaction.num = PageSatisfaction.num == 0 ? 1 : PageSatisfaction.num;
        PageSatisfaction.Go();
    },
    temp: 0,
    Click: function(e1, e2) {
        if (e2 == 1) {
            if (PageSatisfaction.temp != 0) {
                if (document.getElementById("divcc_" + PageSatisfaction.temp)) document.getElementById("divcc_" + PageSatisfaction.temp).style.display = "none";
            }
            if (document.getElementById("divcc_" + e1)) document.getElementById("divcc_" + e1).style.display = "";
            PageSatisfaction.temp = e1;
        }
        else {
            if (document.getElementById("divcc_" + e1)) document.getElementById("divcc_" + e1).style.display = "none";
            PageSatisfaction.temp = 0;
        }
    }
};