var calendar_img_baseurl = "/_js/calener";
function calpop_draw(objname) {
    var html = " <img src='" + calendar_img_baseurl + "/ico_calendar.gif' style='cursor:pointer' align=absmiddle onclick=\"callCalPop('" + objname + "', 'yyyy-mm-dd');\">";
    document.write(html);
}
function calpop_drawPx(objname) {
    var html = " <img src='" + calendar_img_baseurl + "/ico_calendar.gif' style='cursor:pointer' align=absmiddle onclick=\"callCalPop('" + objname + "', 'YYYYMMDD');\">";
    document.write(html);
}
function calpop_draw2() {
    var html = " <img src='" + calendar_img_baseurl + "/ico_calendar.gif' style='cursor:pointer' align=absmiddle >";
    document.write(html);
}
function callCalPop(scriptId_, e2) {
    var scriptId = "";
    if (typeof (scriptId_) == "string") {
        scriptId = scriptId_;
    }
    else {
        scriptId = scriptId_.id;
    }
    call_lay.callCalPop(scriptId, e2);
}
var call_lay = {
    obj_: new Array(),
    _getindex: function(e1) { for (var i = 0; i < this.obj_.length; i++) { if (this.obj_[i][0] == e1) { return i; } } return -1; },
    callCalPop: function(e1, e2) {
        var indexx = this._getindex(e1);
        if (indexx == -1) {
            var newArray = new Array();
            newArray[0] = e1;
            newArray[1] = e2;
            this.obj_[this.obj_.length] = newArray;
            //jQuery('#' + this.obj_[indexx][0]).datepicker({ altFormat: 'yy-mm-dd' });   
            jQuery("#" + e1).datepick();
        }
        indexx = this._getindex(e1);
        if (indexx > -1) {
            //getter
            //var altFormat = jQuery(".selector").datepicker("option", "altFormat");
            //setter
            //jQuery(".selector").datepicker("option", "altFormat", 'yy-mm-dd');
            /*alert(this.obj_[indexx][0]+","+this.obj_[indexx][1]);*/
            //dateFormat_Datepick = this.obj_[indexx][1];
            //$(selector).datepick({dateFormat: 'yyyy-mm-dd'}); 
            //jQuery('#' + this.obj_[indexx][0]).datepick({ dateFormat: 'yy/mm/dd' });
            jQuery('#' + this.obj_[indexx][0]).focus();
        }
    }
};