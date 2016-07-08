



var browserName = navigator.appName;
var browserVersion = navigator.appVersion;
var appCodeName = navigator.appCodeName;
var userAgent = navigator.userAgent;

var ieVer;


if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    ieVer = -1;
}
else {
    try {
        ieVer = ScriptEngineMinorVersion();
    }
    catch (err) {
        ieVer = -1;
    }
}


var zPopup = function (e) {
    this.initialize(e);
}

zPopup.prototype = {

    //Variables 
    appVersion: "0.1",
    appTitle: "zPopup Library",
    zindexStart: 9000,

    titleColor: null,
    iframeNoScroll: true,

    SetTitleColor: function (e) {
        if (e == null)
            this.titleColor = null;
        else
            if (e) this.titleColor = e;
    },

    SetIframeScroll: function (e) {
        this.iframeNoScroll = !e;
    },

    initialize: function (e) {
        //alert("OK - " + this.generateID(10));
    },

    ShowPopup: function (title, content, width, height, left, top, isclose) {
        this.zindexStart++;
        /* Validate Parameter and Environment */
        if (title && content && width && height) {

        } else {
            alert("Parameters null");
            return;
        }

        var bodyobj = document.body;
        if (!bodyobj) {
            alert("Document Body Object is null");
            return;
        }

        var newid = this.generateID();
        var htmls = this.getTemplateHtml(newid, title, content, width, height, isclose);

        var divobj = document.createElement("DIV");
        divobj.id = "zpop_" + newid;
        divobj.innerHTML = htmls;
        var divstyle = divobj.style;
        divstyle.position = "absolute";
        divstyle.zIndex = this.zindexStart;

        if (top != null && left != null) {
            divstyle.top = top + "px";
            divstyle.left = left + "px";
        } else {
            //둘다 널이면 화면의 중간값을 계산해줍니다.
            var position = this.getCenterXY(width, height);
            divstyle.left = position[0] + "px";
            divstyle.top = position[1] + "px";
        }

        bodyobj.appendChild(divobj);

        Drag.init(this.getobj("zpop_" + newid + "_titlebar"), this.getobj("zpop_" + newid));
    },
    hiddenSelectBoxV22: function (mode) {
        //alert(mode);
        // 익스플로러 6.0 일때만 셀렉트 박스를 히든,비지블 처리를 합니다.       
        if (ieVer == "6") {
            var obj = document.getElementsByTagName('select');

            for (i = 0; i < obj.length; i++) {
                obj[i].style.visibility = mode;
            }
        }
        try {

            var objifr = document.frames('iframemain').document.getElementsByTagName('select');
            for (i = 0; i < objifr.length; i++) {
                if (typeof (objifr[i]) != "undefined") {
                    objifr[i].style.visibility = mode;
                }
            }
        }
        catch (e) {
            alert(e);
        }


    },
    ShowPopupNameAdd: function (objname, title, content, width, height, left, top, ieVer, isclose) {
        /*이전 이름구성확인 삭제*/
        if (ieVer == "6") {
            try {
                hiddenSelectBoxV22('hidden');
            }
            catch (e) {
                var obj = document.getElementsByTagName('select');

                for (i = 0; i < obj.length; i++) {
                    obj[i].style.visibility = 'hidden';
                }
                try {

                    var objifr = document.frames('iframemain').document.getElementsByTagName('select');
                    for (i = 0; i < objifr.length; i++) {
                        if (typeof (objifr[i]) != "undefined") {
                            objifr[i].style.visibility = 'hidden';
                        }
                    }
                }
                catch (e) {
                    //alert(e);
                }

            }
        }


        // 오브젝트 이름값 받게끔 수정
        this.zindexStart++;
        /* Validate Parameter and Environment */
        if (title && content && width && height) {

        } else {
            alert("Parameters null");
            return;
        }

        var bodyobj = document.body;
        if (!bodyobj) {
            alert("Document Body Object is null");
            return;
        }

        //var newid = this.generateID();
        var newid = objname;
        var htmls = this.getTemplateHtml(newid, title, content, width, height, isclose);

        var divobj = document.createElement("DIV");
        divobj.id = "zpop_" + newid;
        divobj.innerHTML = htmls;
        var divstyle = divobj.style;
        divstyle.position = "absolute";
        divstyle.zIndex = this.zindexStart; //"9999";

        /*
        if(top)divstyle.top = top + "px";
        if(left)divstyle.left = left + "px";
        */

        if (top != null && left != null) {
            divstyle.top = top + "px";
            divstyle.left = left + "px";
        } else {
            //둘다 널이면 화면의 중간값을 계산해줍니다.
            var position = this.getCenterXY(width, height);
            divstyle.left = position[0] + "px";
            divstyle.top = position[1] + "px";
        }

        bodyobj.appendChild(divobj);

        Drag.init(this.getobj("zpop_" + newid + "_titlebar"), this.getobj("zpop_" + newid));
    },

    HideLayer: function (objid) {
        var OS = navigator.appName;
        var frame_ = document.getElementById("frame_" + objid);
        if (frame_) {
            if (OS == "Netscape") {
                frame_.parentNode.removeChild(frame_);
            }
            else {
                frame_.removeNode(true);
            }
        }

        var OBJ = document.getElementById("zpop_" + objid);
        if (OBJ) {
            OBJ.style.visibility = 'hidden';
            document.body.removeChild(OBJ);
        }

        try {
            hiddenSelectBoxV22('visible');
            document.body.removeChild(OBJ);
        }
        catch (e) {
            var obj = document.getElementsByTagName('select');

            for (i = 0; i < obj.length; i++) {
                obj[i].style.visibility = 'visible';
            }
            try {

                var objifr = document.frames('iframemain').document.getElementsByTagName('select');

                for (i = 0; i < objifr.length; i++) {
                    if (typeof (objifr[i]) != "undefined") {
                        objifr[i].style.visibility = 'visible';
                    }
                }
            }
            catch (e) {
                //alert(e);
            }
        }
        var o = this.getobj("zpop_" + objid);



        if (o != null) document.body.removeChild(o);

        var inputctrl = document.forms[0].getElementsByTagName("input");
        var counts = inputctrl.length;
        try {
            if (counts > 0) {
                for (NN = 0; NN < counts; NN++) {
                    if (inputctrl[NN].type == "text") { if (inputctrl[NN].style.display == "") { inputctrl[NN].focus(); break; } }
                }
            }
        } catch (e) { }

    },

    TopMost: function (objid) {
        //alert(this.zindexStart + " - " + objid);
        this.zindexStart++;
        this.getobj("zpop_" + objid).style.zIndex = String(this.zindexStart);

    },

    getCenterXY: function (divwidth, divheight) {
        var scleft = document.documentElement.scrollLeft;
        var sctop = document.documentElement.scrollTop;
        var screenwidth = document.documentElement.clientWidth;
        var screenheight = document.documentElement.clientHeight;
        var r_left = parseInt((screenwidth - divwidth) / 2) + scleft;
        var r_top = parseInt((screenheight - divheight) / 2) + sctop;

        //alert(r_left + " x " + r_top);
        return new Array(r_left, r_top)
    },

    getTemplateHtml: function (objid, title, content, width, height, isclose) {
        if (isclose == null) isclose = "3";
        var isurl = false;
        if (content.length >= 7) {
            if (content.substring(0, 7).toLowerCase() == "http://") isurl = true;
        }

        var htmls = "";
        htmls += "";
        htmls += "<TABLE cellSpacing=\"0\" cellPadding=\"0\" border=\"0\">";
        htmls += "<TR>";
        htmls += "<TD width=\"9\" height=\"20\"><IMG class=\"iePngFix\" height=\"20\" src=\"/_js/poplayer/box1.gif\" width=\"9\" /></TD>";
        htmls += "<TD class=\"iePngFix\" style=\"PADDING-TOP:0px\" vAlign=\"top\" background=\"/_js/poplayer/box2.gif\" height=\"20\">";
        htmls += "<TABLE cellSpacing=\"0\" cellPadding=\"0\" width=\"100%\" border=\"0\">";
        htmls += "<TR>";

        var titlecss = " class='msgtitle' ";
        var stylecss = "";

        if (this.titleColor != null) {
            titlecss = "";
            stylecss = "color:" + this.titleColor + ";";
        }
        if (title == "&nbsp;") {
            htmls += "<TD width=\"99%\" " + titlecss + " style=\"padding-top:11px;font-family:tahoma;font-size:11px;margin: 0 0 0 0 ; padding: 0 0 0 0 ;"
            + stylecss + "\" onmousedown=\"zpoplib.TopMost('" + objid + "');\">"
            + "<div id=\"zpop_" + objid + "_titlebar\" style='font-size:5pt;display:none;margin: 0 0 0 0 ; padding: 0 0 0 0 ;height:17px'></div></TD> ";
        }
        else {
            htmls += "<TD width=\"99%\" " + titlecss + " style=\"padding-top:11px;font-family:tahoma;font-size:11px;margin: 0 0 0 0 ; padding: 0 0 0 0 ;"
            + stylecss + "\" onmousedown=\"zpoplib.TopMost('" + objid + "');\">"
            + "<div id=\"zpop_" + objid + "_titlebar\"  style='width:100%;height:100%;margin: 0 0 0 0 ; padding: 0 0 0 0 ;height:17px' ></div></TD>";
        }
        if (isclose == "1") {
        }
        else if (isclose == "2") {
            htmls += "<TD vAlign=\"top\" ><IMG style=\"CURSOR: pointer;\" id=\"zpopclose\" class=\"iePngFix\" height=\"20\" src=\"/_js/poplayer/btn_close_off.gif\" width=\"16\" /></TD> ";
        }
        else {
            htmls += "<TD  vAlign=\"top\" ><IMG style=\"CURSOR: pointer;\" id=\"zpopclose\" onclick=\"zpoplib.HideLayer('" + objid + "');\" class=\"iePngFix\" height=\"20\" src=\"/_js/poplayer/btn_close_off.gif\" width=\"16\" onmouseover=\"this.src=this.src.replace(/off/gi,'on');\" onmouseout=\"this.src=this.src.replace(/on/gi,'off');\" /></TD>";
        }


        htmls += "</TR></TABLE></TD> ";
        htmls += "		<TD width=\"12\" height=\"20\"><IMG class=\"iePngFix\" height=\"20\" src=\"/_js/poplayer/box3.gif\" width=\"12\" /></TD> ";
        htmls += "   </TR>  ";
        htmls += "   <TR> ";
        htmls += "		<TD class=\"iePngFix\" width=\"9\" background=\"/_js/poplayer/box4.gif\"> ";
        htmls += "		</TD> ";
        htmls += "		<TD style=\"HEIGHT: " + height + "px\" width=\"" + width + "\" bgColor=\"#ffffff\" height=\"" + height + "\" valign=\"top\" id=\"td" + objid + "\">";

        if (isurl) {
            var iframeattribute = "";
            if (this.iframeNoScroll)
                iframeattribute = " scrolling=no ";
            htmls += "<iframe width='" + width + "' height='100%' id='frame_" + objid + "' src='" + content + "' frameborder='0' " + iframeattribute + "></iframe>";
        }
        else {
            htmls += "<div class='msgcontent_" + objid + "'>" + content + "</div>";
        }

        htmls += "</TD> ";
        htmls += "		<TD class=\"iePngFix\" width=\"12\" background=\"/_js/poplayer/box5.gif\"> ";
        htmls += "		</TD> ";
        htmls += "   </TR> ";
        htmls += "   <TR height=\"12\"> ";
        htmls += "		<TD background=\"/_js/poplayer/box6.gif\" class=\"iePngFix\" style=\"height:9px;width:9px;\" ></TD> ";
        htmls += "		<TD class=\"iePngFix\" background=\"/_js/poplayer/box7.gif\" style=\"height:9px;\"> ";
        htmls += "		</TD> ";
        htmls += "		<TD background=\"/_js/poplayer/box8.gif\" class=\"iePngFix\" style=\"height:9px;width:9px;\" ></TD> ";
        htmls += "   </TR> ";
        htmls += " ";
        htmls += " </TABLE> ";

        return htmls;
    },

    getobj: function (e) {
        return document.getElementById(e);
    },

    generateID: function (e) {
        var stringLength = 10;
        if (e) stringLength = parseInt(e);

        var retval = "";
        var chars = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

        var charCount = chars.length;
        i = 0;
        do {
            random = chars[Math.floor(Math.random() * chars.length)];
            retval += String(random);
            i++;
        }
        while (i < stringLength);

        return retval;
    },

    toString: function () {
        return this.appTitle + " " + this.appVersion;
    }
}

var zpoplib = new zPopup();

function LayerKill(ms) /*레이어 숫자가1개 보다 많을 경우 1개만 남기는 것.*/
{
    if (typeof (eval("document.all.zpop_" + ms)) == "undefined") {
        return;
    }
    var msms = eval("document.all.zpop_" + ms);
    if (typeof (msms.length) == "undefined") {
        return;
    }
    else {
        for (i = 0; i < msms.length - 1; i++) {
            zpoplib.HideLayer(ms);
        }
    }
}
function LayerKillAll(ms) /*레이어 전부 안보이개.*/
{
    if (typeof (eval("document.all.zpop_" + ms)) == "undefined") {
        return;
    }
    var msms = eval("document.all.zpop_" + ms);
    if (typeof (msms.length) == "undefined") {
        return;
    }
    else {
        for (i = 0; i < msms.length; i++) {
            zpoplib.HideLayer(ms);
        }
    }
}