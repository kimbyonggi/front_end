var nummm_Bookmark = 0;
var Bookmark = {
    obj: null,
    none: "none",
    MAKE: function(e) /*보드 리스트*/
    {
        nummm_Bookmark++;
        if (e == 'LOAD') {

            var m_page = location.href;
            if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
            if (m_page.indexOf('/') > -1) { m_page = m_page.substring(m_page.lastIndexOf('/') + 1); }
            var TEMP_LIL = "";
            TEMP_LIL += "&now=" + m_page;
            TEMP_LIL += "&page=" + encodeURIComponent(RequestS.page);
            TEMP_LIL += "&c1=" + RequestS.c1;
            TEMP_LIL += "&c2=" + RequestS.c2;
            TEMP_LIL += "&c3=" + RequestS.c3;
            TEMP_LIL += "&C=" + encodeURIComponent(RequestS.T);
            TEMP_LIL += "&X2=" + encodeURIComponent(RequestS.sn);
            TEMP_LIL += "&w=" + encodeURIComponent(RequestS.w);
            if (RequestS.c1 == "" && RequestS.c2 == "" && RequestS.c3 == "") {
                RequestS.c1 = "1";
            }

            document.write("<span id='span0001_" + nummm_Bookmark + "' ></span>");
            document.write("<span id=\"span0001_" + nummm_Bookmark + "_M\" >"
                + "<iframe title=\"북마크 관련\" "
                + "   id=\"ifr_Schedule_DATA_" + nummm_Bookmark + "\" style=\"display:" + Bookmark.none + ";\" "
                + " name=\"ifr_Schedule_DATA_" + nummm_Bookmark + "\" src=\"/common/Bookmark/Bookmark.aspx?num=" + nummm_Bookmark + "" + TEMP_LIL + "&pdn=" + XncodeUR(PageBaseInfo.domain) + "\""
                + " frameborder=\"0\" marginwidth=\"0\" width=\"100%\" height=\"300\" scrolling=\"yes\"></iframe></span>");

        }
    },
    BAIND: function(e) /*보드 리스트*/
    {
        var ifr = document.getElementById("ifr_Schedule_DATA_" + e).contentWindow;
        document.getElementById("span0001_" + e).innerHTML = ifr.document.getElementById("txt_BookMark").value;
        books.MAKE();

        if (RequestS.c1 == "1") {
            try { document.getElementById("chk_c1").checked = true; } catch (err) { }
        }
        if (RequestS.c2 == "1") {
            try { document.getElementById("chk_c2").checked = true; } catch (err) { }
        }
        if (RequestS.c3 == "1") {
            try { document.getElementById("chk_c3").checked = true; } catch (err) { }
        }
        if (RequestS.T != "") {
            try { Teldd(document.getElementById("ddl_catebook"), RequestS.T); } catch (err) { }
        }
        try { document.getElementById("txt_word").value = RequestS.w; } catch (err) { }
    },
    FIND1: function(e) /*보드 리스트*/
    {
        alert(e);
        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        if (m_page.indexOf('/') > -1) { m_page = m_page.substring(m_page.lastIndexOf('/') + 1); }
        var TEMP_LIL = m_page + "";
        TEMP_LIL += "?T=" + encodeURIComponent(e);
        location.href = TEMP_LIL;
    },
    FIND2: function() /*보드 리스트*/
    {
        if (document.getElementById("chk_c1").checked == true) { RequestS.c1 = "1"; } else { RequestS.c1 = "0"; }
        if (document.getElementById("chk_c2").checked == true) { RequestS.c2 = "1"; } else { RequestS.c2 = "0"; }
        if (document.getElementById("chk_c3").checked == true) { RequestS.c3 = "1"; } else { RequestS.c3 = "0"; }

        RequestS.w = document.getElementById("txt_word").value.trim();
        if (books.used2 == 0) {
            if (RequestS.w == "") {
                alert("검색어을 입력하여 주십시오.");
                return;
            }
        }
        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        if (m_page.indexOf('/') > -1) { m_page = m_page.substring(m_page.lastIndexOf('/') + 1); }
        var TEMP_LIL = m_page + "";
        TEMP_LIL += "?T=" + (document.getElementById(books.txt1) ? encodeURIComponent(document.getElementById(books.txt1).value) : "");
        TEMP_LIL += "&c1=" + RequestS.c1;
        TEMP_LIL += "&c2=" + RequestS.c2;
        TEMP_LIL += "&c3=" + RequestS.c3;
        TEMP_LIL += "&w=" + RequestS.w;
        TEMP_LIL += "&sn=" + (document.getElementById(books.txt2) ? encodeURIComponent(document.getElementById(books.txt2).value) : "");

        location.href = TEMP_LIL;
    },
    FIND3: function(e) /*보드 리스트*/
    {
        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        if (m_page.indexOf('/') > -1) { m_page = m_page.substring(m_page.lastIndexOf('/') + 1); }
        var TEMP_LIL = m_page + "";
        TEMP_LIL += "?T=" + encodeURIComponent(RequestS.T) + "&sn=" + encodeURIComponent(e);
        location.href = TEMP_LIL;
    },
    FIND0: function() /*보드 리스트*/
    {
        var m_page = location.href;
        if (m_page.indexOf('?') > -1) { m_page = m_page.substring(0, m_page.indexOf('?')); }
        if (m_page.indexOf('/') > -1) { m_page = m_page.substring(m_page.lastIndexOf('/') + 1); }
        var TEMP_LIL = m_page + "";
        location.href = TEMP_LIL;
    }
}


var books = {
    ll_1: "",
    ll_2: "",
    ll_3: "",
    used2: 0,
    txt1: "",
    txt2: "",
    HTML__1: "",
    HTML__2: "",
    type: 0,
    cut: 4,
    LOAD: function() {
        document.write("<span id=\"span_" + books.txt1 + "\"></span>");
        books.MAKE();
    },
    MAKE: function() {
        if (books.ll_1 == "") return;
        if (books.type == 0) {
            books.HTML__1 = "";
            books.HTML__2 = "";
            var t_ = books.ll_1.split("↑");
            for (var n = 0; n < t_.length; n++) {
                var t_2 = t_[n].split("↓");
                if (t_2[0].trim() == "") continue;
                books.HTML__1 += "<option value=\"" + t_[n] + "\" " + (books.ll_2 == t_2[0] ? " selected=\"selected\"  " : "") + " >" + t_2[0] + "</option>";
                if (books.ll_2 == t_2[0]) {
                    for (var n2 = 1; n2 < t_2.length; n2++) {
                        books.HTML__2 += "<option value=\"" + t_2[n2] + "\"  " + (books.ll_3 == t_2[n2] ? " selected=\"selected\"  " : "") + " >" + t_2[n2] + "</option>";
                    }
                }
            }

            books.HTML__1 = "<select  " + (books.used2 == 0 ? " onchange=\"Bookmark.FIND1(this.value =='' ? '' : this.options[this.selectedIndex].text);\" " : " onchange=\"books.CHANGE(1);\" ") + "   name=\"ddl_" + books.txt1 + "\" id=\"ddl_" + books.txt1 + "\"  ><option value=\"\" >전체</option>" + books.HTML__1 + "</select>";
            books.HTML__2 = "<select  onchange=\"books.CHANGE(2);\"  name=\"ddl_" + books.txt2 + "\" id=\"ddl_" + books.txt2 + "\"  style=\"display:" + (books.used2 == 0 ? "none" : "") + ";\" ><option value=\"\" >전체</option>" + books.HTML__2 + "</select>";
            if (document.getElementById("span_" + books.txt1)) document.getElementById("span_" + books.txt1).innerHTML = "<span id=\"x1span_" + books.txt1 + "\">" + books.HTML__1 + "</span>"
                + " <span id=\"x2span_" + books.txt1 + "\">" + books.HTML__2 + "</span>";
        }
        else {

            var num1 = 1;

            books.HTML__1 = "";
            books.HTML__2 = "";
            var t_ = books.ll_1.split("↑");
            for (var n = 0; n < t_.length; n++) {
                var t_2 = t_[n].split("↓");
                if (books.used2 == 0) {
                    if (num1 % books.cut == 1) {
                        books.HTML__1 += "<tr>";
                    }

                    if (t_2[0].trim() != "") {
                        books.HTML__1 += "<td class=\"bbs6\" align=\"left\" ><a href=\"javascript:Bookmark.FIND1('" + t_2[0] + "');\">"
                        + "<img src=\"/img_bbs/ico_dot_02.gif\" width=\"8\" height=\"3\" align=\"middle\" />" + (books.ll_2 == t_2[0] ? "<strong>" : "") + "" + t_2[0] + "" + (books.ll_2 == t_2[0] ? "</strong>" : "") + "</a></td>";
                    }

                    if (num1 % books.cut == 0) {
                        books.HTML__1 += "</tr>";
                    }
                    num1++;
                }
                else {
                    if (parent.books.ll_2 == "") {
                        if (num1 % books.cut == 1) {
                            books.HTML__1 += "<tr>";
                        }
                        if (t_2[0].trim() != "") {
                            books.HTML__1 += "<td class=\"bbs6\" align=\"left\" ><a href=\"javascript:Bookmark.FIND1('" + t_2[0] + "');\">"
                        + "<img src=\"/img_bbs/ico_dot_02.gif\" width=\"8\" height=\"3\" align=\"middle\" />" + t_2[0] + "</a></td>";
                        }

                        if (num1 % books.cut == 0) {
                            books.HTML__1 += "</tr>";
                        }
                        num1++;
                    }
                    else {
                        if (t_2[0].trim() == "") continue;
                        if (books.ll_2 == t_2[0]) {
                            books.HTML__1 += "<td class=\"bbs6\" align=\"left\" colspan=\"" + books.cut + "\"  ><a href=\"javascript:Bookmark.FIND1('" + t_2[0] + "');\">"
                        + "<img src=\"/img_bbs/ico_dot_02.gif\" width=\"8\" height=\"3\" align=\"middle\" /><strong>" + t_2[0] + "</strong></a></td>";

                            for (var n2 = 1; n2 < t_2.length; n2++) {
                                if (num1 % books.cut == 1) {
                                    books.HTML__1 += "<tr>";
                                }
                                books.HTML__1 += "<td class=\"bbs6\" align=\"left\" ><a href=\"javascript:Bookmark.FIND3('" + t_2[n2] + "');\">"
                            + "<img src=\"/img_bbs/ico_dot_02.gif\" width=\"8\" height=\"3\" align=\"middle\" />" + t_2[n2] + "</a></td>";
                                if (num1 % books.cut == 0) {
                                    books.HTML__1 += "</tr>";
                                }
                                num1++;
                            }
                        }
                    }
                }
            }

            document.getElementById("span_" + books.txt1).innerHTML = "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">" + books.HTML__1 + "</table>";

        }
    },
    CHANGE: function(e) {
        if (e == 1) {
            var obj_v1 = document.getElementById("ddl_" + books.txt1);
            books.HTML__2 = "";
            var t1 = document.getElementById("ddl_" + books.txt1).value;
            if (t1 != "") {
                alert(t1);
                document.getElementById(books.txt1).value = obj_v1.options[obj_v1.selectedIndex].text;
                document.getElementById(books.txt2).value = "";
                var t_2 = t1.split("↓");
                for (var n2 = 1; n2 < t_2.length; n2++) {
                    books.HTML__2 += "<option value=\"" + t_2[n2] + "\" >" + t_2[n2] + "</option>";
                }
            }
            else {
                document.getElementById(books.txt1).value = "";
                document.getElementById(books.txt2).value = "";
            }
            books.HTML__2 = "<select  onchange=\"books.CHANGE(2);\"  name=\"ddl_" + books.txt2 + "\" id=\"ddl_" + books.txt2 + "\" style=\"display:" + (books.used2 == 0 ? "none" : "") + ";\"  ><option value=\"\" >전체</option>" + books.HTML__2 + "</select>";
            document.getElementById("x2span_" + books.txt1).innerHTML = books.HTML__2;
        }
        else if (e == 2) {
            var obj_v1 = document.getElementById("ddl_" + books.txt1);
            if (obj_v1.value == "") {
                document.getElementById(books.txt1).value = "";
                document.getElementById(books.txt2).value = "";
            }
            else {
                document.getElementById(books.txt1).value = obj_v1.options[obj_v1.selectedIndex].text;
                document.getElementById(books.txt2).value = document.getElementById("ddl_" + books.txt2).value;
            }
        }
        Bookmark.FIND2();
    }
}