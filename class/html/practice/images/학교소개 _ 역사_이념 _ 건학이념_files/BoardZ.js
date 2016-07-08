var BoardZ_C = {
    Code: "",
    BoardZ_GET: function(code) {
        if (this.Code != "") { return this.Code; }
        else { 
            var result;
            jQuery.ajax({
                type: "POST",                   //타입 GET , POST
                datatype: "html",               //데이타타입 html, xml 등등
                url: "/COMMON/Board/BoardZ.aspx",     //경로
                data: "base=" + (code.trim().replaceAll(">", "&gt;").replaceAll("<", "&lt;")) + "&pdn=" + XncodeUR(PageBaseInfo.domain),
                async: false,                   //비동기 사용여부 true : 비동기, false : 동기
                success: function(data) {
                    result = data;
                },    //성공시 실행할 함수
                error: function() {
                    return false;
                }             //에러발생시 실행할 함수
            });
            this.Code = result.trim(); 
            return this.Code;
        }
    }
}; 