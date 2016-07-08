document.write('<scr' + 'ipt type="text/javascript" src="/Common/SmartEditor/js/HuskyEZCreator.js" charset="utf-8"></scr' + 'ipt>');


var oEditors = [];
var Arr_Editer = new Array();
var FCKeditor = function(instanceName) {
    this.InstanceName = instanceName;

    Arr_Editer[Arr_Editer.length] = instanceName;

    nhn.husky.EZCreator.createInIFrame({
        oAppRef: oEditors,
        elPlaceHolder: instanceName,
        sSkinURI: "/Common/SmartEditor/SmartEditor2Skin.html?n=" + instanceName,
        htParams: {
            bUseToolbar: true, 			// 툴바 사용 여부 (true:사용/ false:사용하지 않음)
            bUseVerticalResizer: true, 	// 입력창 크기 조절바 사용 여부 (true:사용/ false:사용하지 않음)
            bUseModeChanger: true, 		// 모드 탭(Editor | HTML | TEXT) 사용 여부 (true:사용/ false:사용하지 않음)
            fOnBeforeUnload: function() {
            }
        }, //boolean
        fOnAppLoad: function() {
        },
        fCreator: "createSEditor2"
    });
    if (jQuery("#" + instanceName).parent().attr("id") != null && jQuery("#" + instanceName).parent().attr("id") == "WedEditor") {
        jQuery("#rbo_HtmlText_1").click(function() {
            jQuery("#WedEditor").children("iframe").css({ "width": "100%" });
        });
    }
    if (jQuery("#" + instanceName).parent() != null) {
        jQuery("#" + instanceName).parent().css({"background-color":"white"});
    }
    if (jQuery("#" + instanceName) != null && jQuery("#" + instanceName).next("iframe") != null) {
        jQuery("#" + instanceName).next("iframe").attr("title", "Web Editor text area");
    }
};
FCKeditor.prototype.Height = '335';
FCKeditor.prototype.Version = '2.6 RC_Poizn';
FCKeditor.prototype.VersionBuild = '18531';
FCKeditor.prototype.ReplaceTextarea = function() { };
FCKeditor.prototype.SubmitINT = 0;

FCKeditor.prototype.Submit = function() {
    for (var x = 0; x < Arr_Editer.length; x++) {
        oEditors.getById[Arr_Editer[x]].exec("UPDATE_CONTENTS_FIELD", []);
    }
};
FCKeditor.prototype.Resize = function(instanceName) {
    if (jQuery("#" + instanceName) != null && jQuery("#" + instanceName).parent().find("iframe") != null
			&& jQuery("#" + instanceName).parent().find("iframe").contents() != null) {
        var h_ = (jQuery("#" + instanceName).parent().find("iframe").contents().height());
        if (h_ != null) {
            jQuery("#" + instanceName).parent().find("iframe").height(h_);
            oEditors.getById[instanceName].exec("REFRESH_WYSIWYG");

            oEditors.getById[instanceName].exec("CHANGE_EDITING_MODE", ["WYSIWYG"]);
            oEditors.getById[instanceName].exec("RESET_TOOLBAR");

            try { BlogBase.M_Resize_FrameM(); } catch (err) { }
            try { parent.BlogBase.M_Resize_FrameM(); } catch (err) { }
            try { parent.Resize_FrameM(); } catch (e) { }
        }
    }
};
FCKeditor.prototype.TEXT = function(returnText) {
    returnText = returnText.replace(/<br>/gi, "\n");
    returnText = returnText.replace(/<br\s\/>/gi, "\n");
    returnText = returnText.replace(/<br\/>/gi, "\n");

    //-- remove P and A tags but preserve what's inside of them
    //returnText=returnText.replace(/<p.*>/gi, "\n");
    returnText = returnText.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 ($1)");


    //-- remove all inside SCRIPT and STYLE tags
    returnText = returnText.replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi, "");
    returnText = returnText.replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, "");
    //-- remove all else
    returnText = returnText.replace(/<(?:.|\s)*?>/g, "");

    //-- get rid of more than 2 multiple line breaks:
    returnText = returnText.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, "\n\n");

    //-- get rid of more than 2 spaces:
    returnText = returnText.replace(/ +(?= )/g, '');
    //-- get rid of html-encoded characters:
    returnText = returnText.replace(/&nbsp;/gi, " ");
    returnText = returnText.replace(/&amp;/gi, "&");
    returnText = returnText.replace(/&quot;/gi, '"');
    returnText = returnText.replace(/&lt;/gi, '<');
    returnText = returnText.replace(/&gt;/gi, '>');
    return returnText;
};
FCKeditor.prototype.innerTEXT = function(instanceName) {
    var txt_ = "";
    if (jQuery("#" + instanceName) != null && jQuery("#" + instanceName).parent().find("iframe") != null
			&& jQuery("#" + instanceName).parent().find("iframe").contents() != null) {
        txt_ = FCKeditor.prototype.TEXT(oEditors.getById[instanceName].getIR());
        oEditors.getById[instanceName].exec("UPDATE_CONTENTS_FIELD", []);
    }
    return txt_;
};
FCKeditor.prototype.innerHTML = function(instanceName) {
    if (jQuery("#" + instanceName) != null && jQuery("#" + instanceName).parent().find("iframe") != null
			&& jQuery("#" + instanceName).parent().find("iframe").contents() != null) {
        oEditors.getById[instanceName].exec("UPDATE_CONTENTS_FIELD", []);
    }
    return (jQuery("#" + instanceName) != null && jQuery("#" + instanceName).parent().find("iframe") != null
			&& jQuery("#" + instanceName).parent().find("iframe").contents() != null ? oEditors.getById[instanceName].getIR() : document.getElementById(instanceName).value);
};
FCKeditor.prototype.SetHTML = function(instanceName, htmls) {
    if (jQuery("#" + instanceName) != null && jQuery("#" + instanceName).parent().find("iframe") != null
			&& jQuery("#" + instanceName).parent().find("iframe").contents() != null) {
        oEditors.getById[instanceName].exec("PASTE_HTML", [htmls]);
    }
};

var FCKeditorAPI;
window.FCKeditorAPI = { Version: "2.6 RC"
    , VersionBuild: "18531"
    , Instances: new Object()
    , name: ""
    , GetInstance: function(name) {
        return oEditors.getById[name].getIR();
    }
    , GetXHTML: function() { }
};
String.prototype.GetXHTML = function() { return this.replace(/(^\s*)|(\s*$)/g, ""); };
FCKeditor.prototype.ResizeLoad = function() {
    try { BlogBase.M_Resize_FrameM(); } catch (e) { }
    try { parent.BlogBase.M_Resize_FrameM(); } catch (e) { }
};

FCKeditor.prototype.ReSet = function (e1) {
    try {
        oEditors.getById[e1].exec("SET_IR", [""]);
    } catch (e) { }
};