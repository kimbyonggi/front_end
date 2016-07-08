/*
작성자 : 전호근 
수정내용: 좌측 매뉴에 기능향사을 위한 1단계 [추후 계획: 완전히 js에서 로드하도록한다. ]
*/

function MakeLeftMenu(ARRNUEM00, ARRNUEM01, ARRNUEM02, ARRNUEM03, ARRNUEM04, ARRNUEM05, REF_) {
    var Left_Top_img = "/dbimage/Design/left/left_sub_title_bg.gif";
    var Title_Color = "#ffffff";
    var Title_1_img = "/dbimage/Design/left/left_sub_txtmn_dot.gif";
    var Title_1_color1 = "#e90000";
    var Title_1_color2 = "#000000";
    var Title_2_img = "/dbimage/Design/left/left_sub_txtmn_arr.gif";
    var Title_2_color1 = "#ff5a00";
    var Title_2_color2 = "#7e7e7e";

    var Title_1_color3 = "#f4f4f4";
    var Title_2_color3 = "#FFFFFF";
    var Flash_File = "/dbimage/Design/left/left_sub_txtmn_top.gif";
    var Xml_File = "/dbimage/Design/left/left_sub_txtmn_bottom.gif";

    var REF_1 = ""; var REF_2 = "";

    if (ARRNUEM00[0] != "") Left_Top_img = ARRNUEM00[0]; if (ARRNUEM00[1] != "") Title_Color = ARRNUEM00[1];
    if (ARRNUEM00[2] != "") Title_1_img = ARRNUEM00[2]; if (ARRNUEM00[3] != "") Title_1_color1 = ARRNUEM00[3];
    if (ARRNUEM00[4] != "") Title_1_color2 = ARRNUEM00[4]; if (ARRNUEM00[5] != "") Title_2_img = ARRNUEM00[5];
    if (ARRNUEM00[6] != "") Title_2_color1 = ARRNUEM00[6]; if (ARRNUEM00[7] != "") Title_2_color2 = ARRNUEM00[7];

    if (ARRNUEM00[8] != "") Title_1_color3 = ARRNUEM00[8];
    if (ARRNUEM00[9] != "") Title_2_color3 = ARRNUEM00[9];
    if (ARRNUEM00[10] != "") Flash_File = ARRNUEM00[10];
    if (ARRNUEM00[11] != "") Xml_File = ARRNUEM00[11];

    var m_REF_ = REF_.split('/'); if (m_REF_.length > 2) { REF_1 = m_REF_[2]; } if (m_REF_.length > 3) { REF_2 = m_REF_[3]; }

    var HTML_E = "";
    var HTML_E_2 = "";

    if (ARRNUEM01.length > 0) {
        var center_centercenter = "";
        if (ARRNUEM00[14] == "0") {
            center_centercenter = "left";
        }
        else if (ARRNUEM00[14] == "1") {
            center_centercenter = "center";
        }
        else if (ARRNUEM00[14] == "2") {
            center_centercenter = "right";
        }

        if (ARRNUEM02[0] != "") {
            HTML_E += ""
            + "<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" background=\"" + Left_Top_img + "\" class=\"margmenu0\"  >"
            + "<tr><td colspan=\"2\"></td></tr><tr><td width=\"15\" height=\"" + ARRNUEM00[12] + "\" class=\"LeftmnTitle\"></td>"
            + "<td class=\"Leftmn1\" style=\"cursor:pointer;padding-top:" + ARRNUEM00[15] + "px;\" onclick=\"location.href='" + ARRNUEM02[0] + "'\" ><font color=\"" + Title_Color + "\">" + ARRNUEM01[0] + "</font></td></tr></table>";
        }

        HTML_E += "<table border=\"0\" cellpadding=\"6\" cellspacing=\"0\" bgcolor=\"" + Title_1_color3 + "\" class=\"margmenu\">"
        + "<tr><td class=\"pad0 margmenu0_top\"><img src=\"" + Flash_File + "\"   /></td></tr>"
        + "<tr><td align=\"" + center_centercenter + "\" class=\"margmenu\">"
        + "<table width=\"90%\" border=\"0\" cellspacing=\"0\" cellpadding=\"4\">";
        var MM_JH = " height=\"" + ARRNUEM00[13] + "\" ";

        for (var n_ = 1; n_ < ARRNUEM01.length; n_++) {
            if (REF_1 == "") {
                if (ARRNUEM05[n_] == "2") {
                    HTML_E += "<tr><td " + MM_JH + "  align=\"left\" class=\"margmenu_1\" ><img src=\"" + Title_1_img + "\"  align=\"middle\"  /><a href=\"" + ARRNUEM02[n_] + "\"><font color=\"" + Title_1_color2 + "\">" + ARRNUEM01[n_] + "</font></a></td></tr>"
                    + "<tr><td background=\"/dbimage/Design/left/left_sub_txtmn_dotline.gif\" class=\"pad0 margmenu0_content\"><img src=\"/dbimage/Design/left/blank.gif\" width=\"10\" height=\"1\" /></td></tr>";
                }
            }
            else if (REF_1 != "") {
                if (REF_2 == "") {
                    if (ARRNUEM05[n_] == "2") {
                        if (ARRNUEM04[n_].indexOf(REF_1) > -1) {
                            if (HTML_E_2 != "") { HTML_E += "<tr><td bgcolor=\"" + Title_2_color3 + "\" class=\"Leftmn2 Selected\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">" + HTML_E_2 + "</table></td></tr>"; HTML_E_2 = ""; }
                            HTML_E += "<tr><td  " + MM_JH + " align=\"left\" class=\"LeftmnF1 Selected1\" ><img src=\"" + Title_1_img + "\"  align=\"middle\" /> <a href=\"" + ARRNUEM02[n_] + "\"><font color=\"" + Title_1_color1 + "\"><b>" + ARRNUEM01[n_] + "</b></font></a></td></tr>"
                            + "<tr><td background=\"/dbimage/Design/left/left_sub_txtmn_dotline.gif\" class=\"pad0 margmenu0_content\"><img src=\"/dbimage/Design/left/blank.gif\" width=\"10\" height=\"1\" /></td></tr>";
                        }
                        else {
                            if (HTML_E_2 != "") { HTML_E += "<tr><td   bgcolor=\"" + Title_2_color3 + "\" class=\"Leftmn2\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">" + HTML_E_2 + "</table></td></tr>"; HTML_E_2 = ""; }
                            HTML_E += "<tr><td " + MM_JH + " align=\"left\" class=\"LeftmnF1\" ><img src=\"" + Title_1_img + "\"  align=\"middle\" /> <a href=\"" + ARRNUEM02[n_] + "\"><font color=\"" + Title_1_color2 + "\">" + ARRNUEM01[n_] + "</font></a></td></tr>"
                            + "<tr><td background=\"/dbimage/Design/left/left_sub_txtmn_dotline.gif\" class=\"pad0 margmenu0_content\"><img src=\"/dbimage/Design/left/blank.gif\" width=\"10\" height=\"1\" /></td></tr>";
                        }
                    }

                    if (ARRNUEM05[n_] == "3") {
                        if (ARRNUEM04[n_].indexOf(REF_1) > -1) {
                            HTML_E_2 += "<tr><td width=\"15\"><img src=\"" + Title_2_img + "\" /></td>"
                            + "<td align=\"left\" class=\"LeftmnF2\"><a href=\"" + ARRNUEM02[n_] + "\"><font color=\"" + Title_2_color2 + "\">" + ARRNUEM01[n_] + "</font></a></td></tr>"
                            + "<tr><td colspan=\"2\" bgcolor=\"#efefef\" class=\"pad0 margmenu0_content\"><div class=\"dheight_1\"></div></td>"
                            + "</tr>";
                        }
                    }
                }
                else if (REF_2 != "") {
                    if (ARRNUEM05[n_] == "2") {
                        if (ARRNUEM04[n_].indexOf(REF_1) > -1) {
                            if (HTML_E_2 != "") { HTML_E += "<tr><td bgcolor=\"" + Title_2_color3 + "\" class=\"Leftmn2 Selected\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">" + HTML_E_2 + "</table></td></tr>"; HTML_E_2 = ""; }
                            HTML_E += "<tr><td  " + MM_JH + " align=\"left\" class=\"LeftmnF1 Selected1\"><img src=\"" + Title_1_img + "\"  align=\"middle\" /> <a href=\"" + ARRNUEM02[n_] + "\"><font color=\"" + Title_1_color1 + "\"><b>" + ARRNUEM01[n_] + "</b></font></a></td></tr>"
                            + "<tr><td background=\"/dbimage/Design/left/left_sub_txtmn_dotline.gif\" class=\"pad0 margmenu0_content\"><img src=\"/dbimage/Design/left/blank.gif\" width=\"10\" height=\"1\" /></td></tr>";
                        }
                        else {
                            if (HTML_E_2 != "") { HTML_E += "<tr><td bgcolor=\"" + Title_2_color3 + "\" class=\"Leftmn2\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">" + HTML_E_2 + "</table></td></tr>"; HTML_E_2 = ""; }
                            HTML_E += "<tr><td  " + MM_JH + " align=\"left\" class=\"LeftmnF1\"><img src=\"" + Title_1_img + "\"  align=\"middle\" /> <a href=\"" + ARRNUEM02[n_] + "\"><font color=\"" + Title_1_color2 + "\">" + ARRNUEM01[n_] + "</font></a></td></tr>"
                            + "<tr><td background=\"/dbimage/Design/left/left_sub_txtmn_dotline.gif\" class=\"pad0 margmenu0_content\"><img src=\"/dbimage/Design/left/blank.gif\" width=\"10\" height=\"1\" /></td></tr>";
                        }
                    }
                    if (ARRNUEM05[n_] == "3") {
                        if (ARRNUEM04[n_].indexOf(REF_1) > -1) {
                            if (ARRNUEM04[n_].indexOf(REF_2) > -1) {
                                HTML_E_2 += "<tr><td width=\"15\"><img src=\"" + Title_2_img + "\" /></td>"
                                + "<td align=\"left\" class=\"LeftmnF2 Selected2\" ><a href=\"" + ARRNUEM02[n_] + "\"><font color=\"" + Title_2_color1 + "\">" + ARRNUEM01[n_] + "</font></a></td></tr>"
                                + "<tr><td colspan=\"2\" bgcolor=\"#efefef\" class=\"pad0 margmenu0_content\"><div class=\"dheight_1\"></div></td>"
                                + "</tr>";
                            }
                            else {
                                HTML_E_2 += "<tr><td width=\"15\"><img src=\"" + Title_2_img + "\" /></td>"
                                + "<td align=\"left\" class=\"LeftmnF2\" ><a href=\"" + ARRNUEM02[n_] + "\"><font color=\"" + Title_2_color2 + "\">" + ARRNUEM01[n_] + "</font></a></td></tr>"
                                + "<tr><td colspan=\"2\" bgcolor=\"#efefef\" class=\"pad0 margmenu0_content\"><div class=\"dheight_1\"></div></td>"
                                + "</tr>";
                            }
                        }
                    }
                }
            }
        }
        if (HTML_E_2 != "") { HTML_E += "<tr><td bgcolor=\"" + Title_2_color3 + "\" class=\"Leftmn2\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"3\">" + HTML_E_2 + "</table></td></tr>"; HTML_E_2 = ""; }

        HTML_E += "</table></td></tr><tr><td class=\"pad0 margmenu0_fot\"><img src=\"" + Xml_File + "\"  height=\"17\" /></td></tr></table>";
    }

    document.write("<div class=\"LeftmnDiv\">" + HTML_E + "</div>");
}




function MakeLeft(ARRNUEM00, ARRNUEM01, ARRNUEM02, ARRNUEM03, ARRNUEM04, ARRNUEM05, ARRNUEM06, ARRNUEM07, REF_) {
    var Left_Top_img = "";
    var Title_Color = "";
    var Title_1_img = "";
    var Title_1_color1 = "#e90000";
    var Title_1_color2 = "#000000";
    var Title_2_img = "/dbimage/Design/left/left_sub_txtmn_arr.gif";
    var Title_2_color1 = "#ff5a00";
    var Title_2_color2 = "#7e7e7e";
    var REF_1 = ""; var REF_2 = "";





    if (ARRNUEM00[0] != "") Left_Top_img = ARRNUEM00[0]; if (ARRNUEM00[1] != "") Title_Color = ARRNUEM00[1];
    if (ARRNUEM00[3] != "") Title_1_color1 = ARRNUEM00[3];
    if (ARRNUEM00[4] != "") Title_1_color2 = ARRNUEM00[4]; if (ARRNUEM00[5] != "") Title_2_img = ARRNUEM00[5];
    if (ARRNUEM00[6] != "") Title_2_color1 = ARRNUEM00[6]; if (ARRNUEM00[7] != "") Title_2_color2 = ARRNUEM00[7];
    var m_REF_ = REF_.split('/'); if (m_REF_.length > 2) { REF_1 = m_REF_[2]; } if (m_REF_.length > 3) { REF_2 = m_REF_[3]; }

    var HTML_E = "";
    var HTML_E_2 = "";

    if (ARRNUEM01.length > 0) {
        HTML_E += "<table   border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"margmenu\"  >\r\n";
        if (ARRNUEM02[0] != "") {
            HTML_E += ""
            + "<tr align=\"center\"><td  valign=\"top\"><img onclick=\"location.href='" + ARRNUEM02[0] + "'\" alt=\"" + ARRNUEM01[0] + "\" style=\"cursor:pointer\" src=\"" + Left_Top_img + "\"  /></td></tr>";
        }
        HTML_E += "<tr><td align=\"center\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";

        for (var n_ = 1; n_ < ARRNUEM01.length; n_++) {
            if (REF_1 == "") {
                if (ARRNUEM05[n_] == "2") {
                    HTML_E += "<tr><td  ><a href=\"" + ARRNUEM02[n_] + "\"><img  alt=\"" + ARRNUEM01[n_] + "\"  src=\"" + ARRNUEM07[n_] + "\"  src1=\"" + ARRNUEM06[n_] + "\" src2=\"" + ARRNUEM07[n_] + "\" onmouseover=\"MM_img_P(this,'" + ARRNUEM06[n_] + "');\" onmouseout=\"MM_img_P(this,'" + ARRNUEM07[n_] + "');\" /></a></td></tr>";
                }
            }
            else if (REF_1 != "") {
                if (REF_2 == "") {
                    if (ARRNUEM05[n_] == "2") {
                        if (ARRNUEM04[n_].indexOf(REF_1) > -1) {
                            if (HTML_E_2 != "") { HTML_E += "<tr><td  class=\"Leftmn3\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">" + HTML_E_2 + "</table></td></tr>"; HTML_E_2 = ""; }
                            HTML_E += "<tr><td><a href=\"" + ARRNUEM02[n_] + "\"><img  alt=\"" + ARRNUEM01[n_] + "\"  src=\"" + ARRNUEM06[n_] + "\"  src2=\"" + ARRNUEM06[n_] + "\"  /></a></td></tr>";
                        }
                        else {
                            if (HTML_E_2 != "") { HTML_E += "<tr><td  class=\"Leftmn3\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">" + HTML_E_2 + "</table></td></tr>"; HTML_E_2 = ""; }
                            HTML_E += "<tr><td><a href=\"" + ARRNUEM02[n_] + "\"><img  alt=\"" + ARRNUEM01[n_] + "\"  src=\"" + ARRNUEM07[n_] + "\" src1=\"" + ARRNUEM06[n_] + "\" src2=\"" + ARRNUEM07[n_] + "\" onmouseover=\"MM_img_P(this,'" + ARRNUEM06[n_] + "');\" onmouseout=\"MM_img_P(this,'" + ARRNUEM07[n_] + "');\"  /></a></td></tr>";
                        }
                    }

                    if (ARRNUEM05[n_] == "3") {
                        if (ARRNUEM04[n_].indexOf(REF_1) > -1) {
                            HTML_E_2 += "<tr><td><a href=\"" + ARRNUEM02[n_] + "\"><img  alt=\"" + ARRNUEM01[n_] + "\"  src=\"" + ARRNUEM07[n_] + "\" src1=\"" + ARRNUEM06[n_] + "\" src2=\"" + ARRNUEM07[n_] + "\" onmouseover=\"MM_img_P(this,'" + ARRNUEM06[n_] + "');\" onmouseout=\"MM_img_P(this,'" + ARRNUEM07[n_] + "');\" /></a></td></tr>";
                        }
                    }
                }
                else if (REF_2 != "") {
                    if (ARRNUEM05[n_] == "2") {
                        if (ARRNUEM04[n_].indexOf(REF_1) > -1) {
                            if (HTML_E_2 != "") { HTML_E += "<tr><td  class=\"Leftmn3\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">" + HTML_E_2 + "</table></td></tr>"; HTML_E_2 = ""; }
                            HTML_E += "<tr><td><a href=\"" + ARRNUEM02[n_] + "\"><img  alt=\"" + ARRNUEM01[n_] + "\"  src=\"" + ARRNUEM06[n_] + "\" src2=\"" + ARRNUEM07[n_] + "\" /></a></td></tr>";
                        }
                        else {
                            if (HTML_E_2 != "") { HTML_E += "<tr><td  class=\"Leftmn3\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">" + HTML_E_2 + "</table></td></tr>"; HTML_E_2 = ""; }
                            HTML_E += "<tr><td><a href=\"" + ARRNUEM02[n_] + "\"><img  alt=\"" + ARRNUEM01[n_] + "\"  src=\"" + ARRNUEM07[n_] + "\" src1=\"" + ARRNUEM06[n_] + "\" src2=\"" + ARRNUEM07[n_] + "\" onmouseover=\"MM_img_P(this,'" + ARRNUEM06[n_] + "');\" onmouseout=\"MM_img_P(this,'" + ARRNUEM07[n_] + "');\" /></a></td></tr>";
                        }
                    }
                    if (ARRNUEM05[n_] == "3") {
                        if (ARRNUEM04[n_].indexOf(REF_1) > -1) {
                            if (ARRNUEM04[n_].indexOf(REF_2) > -1) {
                                HTML_E_2 += "<tr><td><a href=\"" + ARRNUEM02[n_] + "\"><img  alt=\"" + ARRNUEM01[n_] + "\"  src=\"" + ARRNUEM06[n_] + "\" src2=\"" + ARRNUEM06[n_] + "\" /></a></td></tr>";
                            }
                            else {
                                HTML_E_2 += "<tr><td><a href=\"" + ARRNUEM02[n_] + "\"><img  alt=\"" + ARRNUEM01[n_] + "\"  src=\"" + ARRNUEM07[n_] + "\" src1=\"" + ARRNUEM06[n_] + "\" src2=\"" + ARRNUEM07[n_] + "\" onmouseover=\"MM_img_P(this,'" + ARRNUEM06[n_] + "');\" onmouseout=\"MM_img_P(this,'" + ARRNUEM07[n_] + "');\"   /></a></td></tr>";
                            }
                        }
                    }
                }
            }
        }
        if (HTML_E_2 != "") { HTML_E += "<tr><td  class=\"Leftmn3\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">" + HTML_E_2 + "</table></td></tr>"; HTML_E_2 = ""; }

        HTML_E += "</table></td></tr>";
        if (ARRNUEM00[2] != "") {
            HTML_E += "<tr><td  valign=\"top\"><img alt=\"" + ARRNUEM01[2] + "\" src=\"" + ARRNUEM00[2] + "\"  /></td></tr>";
        }
        HTML_E += "</table>";
    }
    document.write(HTML_E);
}
function MM_img_P(e1, e2) { e1.src = e2; }