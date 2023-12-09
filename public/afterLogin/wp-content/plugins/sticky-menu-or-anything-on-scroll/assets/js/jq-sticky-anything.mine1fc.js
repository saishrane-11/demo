/**
* @preserve Sticky Anything 2.22 | (c) WebFactory Ltd | GPL2 Licensed
*/

var stickyAnythingBreakpoint = '' // solely to use as a debugging breakpoint, if needed.

!function(e){function t(t,i){e(".sticky-element-original").clone().insertAfter(e(".sticky-element-original")).addClass("sticky-element-cloned").removeClass("element-is-not-sticky").addClass("element-is-sticky").css("position","fixed").css("top",t+"px").css("margin-left","0").css("z-index",i).removeClass("sticky-element-original").hide()}e.fn.stickThis=function(i){var n,s=e.extend({top:0,minscreenwidth:0,maxscreenwidth:99999,zindex:1,legacymode:!1,dynamicmode:!1,debugmode:!1,pushup:"",adminbar:!1},i),l=e(this).length,r=e(s.pushup).length;return r<1?(1==s.debugmode&&s.pushup&&console.error('STICKY ANYTHING DEBUG: There are no elements with the selector/class/ID you selected for the Push-up element ("'+s.pushup+'").'),s.pushup=""):r>1&&(1==s.debugmode&&console.error("STICKY ANYTHING DEBUG: There are "+r+' elements on the page with the selector/class/ID you selected for the push-up element ("'+s.pushup+'"). You can select only ONE element to push the sticky element up.'),s.pushup=""),l<1?1==s.debugmode&&console.error('STICKY ANYTHING DEBUG: There are no elements with the selector/class/ID you selected for the sticky element ("'+this.selector+'").'):l>1?1==s.debugmode&&console.error("STICKY ANYTHING DEBUG: There There are "+r+' elements with the selector/class/ID you selected for the sticky element ("'+this.selector+'"). You can only make ONE element sticky.'):1==s.legacymode?(e(this).addClass("sticky-element-original").addClass("element-is-not-sticky"),1!=s.dynamicmode&&t(s.top,s.zindex,s.adminbar),checkElement=setInterval(function(){!function(i,n,s,l,o,r,d){var a=e(".sticky-element-original").offset();if(orgElementTop=a.top,o){var c=e(o).offset();pushElementTop=c.top}var m=window,g="inner";"innerWidth"in window||(g="client",m=document.documentElement||document.body);viewport=m[g+"Width"],d&&e("body").hasClass("admin-bar")&&viewport>600?adminBarHeight=e("#wpadminbar").height():adminBarHeight=0;e(window).scrollTop()>=orgElementTop-i-adminBarHeight&&viewport>=n&&viewport<=s?(orgElement=e(".sticky-element-original"),coordsOrgElement=orgElement.offset(),leftOrgElement=coordsOrgElement.left,widthOrgElement=orgElement[0].getBoundingClientRect().width,widthOrgElement||(widthOrgElement=orgElement.css("width")),heightOrgElement=orgElement.outerHeight(),paddingOrgElement=[orgElement.css("padding-top"),orgElement.css("padding-right"),orgElement.css("padding-bottom"),orgElement.css("padding-left")],paddingCloned=paddingOrgElement[0]+" "+paddingOrgElement[1]+" "+paddingOrgElement[2]+" "+paddingOrgElement[3],1==r&&e(".sticky-element-cloned").length<1&&t(i,l),elementHeight=0,heightOrgElement<1?elementHeight=e(".sticky-element-cloned").outerHeight():elementHeight=e(".sticky-element-original").outerHeight(),o&&e(window).scrollTop()>pushElementTop-i-elementHeight-adminBarHeight?stickyTopMargin=pushElementTop-i-elementHeight-e(window).scrollTop():stickyTopMargin=adminBarHeight,e(".sticky-element-cloned").css("left",leftOrgElement+"px").css("top",i+"px").css("width",widthOrgElement).css("margin-top",stickyTopMargin).css("padding",paddingCloned).show(),e(".sticky-element-original").css("visibility","hidden")):(1==r?e(".sticky-element-cloned").remove():e(".sticky-element-cloned").hide(),e(".sticky-element-original").css("visibility","visible"))}(s.top,s.minscreenwidth,s.maxscreenwidth,s.zindex,s.pushup,s.dynamicmode,s.adminbar)},10)):(e(this).addClass("sticky-element-original").addClass("element-is-not-sticky"),orgAssignedStyles=(n=e(this),o={},o.display=n.css("display"),o.float=n.css("float"),o.flex=n.css("flex"),o["box-sizing"]=n.css("box-sizing"),o.clear=n.css("clear"),o.overflow=n.css("overflow"),o.transform=n.css("transform"),o),orgInlineStyles=e(".sticky-element-original").attr("style"),null==orgInlineStyles&&(orgInlineStyles=""),e(".sticky-element-original").addClass("sticky-element-active").before('<div class="sticky-element-placeholder" style="width:0; height:0; margin:0; padding:0; visibility:hidden;"></div>'),checkElement=setInterval(function(){!function(t,i,n,s,l,o,r,d){$listenerElement=e(".sticky-element-active");var a=$listenerElement.offset();if(orgElementTop=a.top,l){var c=e(l).offset();pushElementTop=c.top}var m=window,g="inner";"innerWidth"in window||(g="client",m=document.documentElement||document.body);viewport=m[g+"Width"],o&&e("body").hasClass("admin-bar")&&viewport>600?adminBarHeight=e("#wpadminbar").height():adminBarHeight=0;if(e(window).scrollTop()>=orgElementTop-t-adminBarHeight&&viewport>=i&&viewport<=n){for(var h in coordsOrgElement=$listenerElement.offset(),leftOrgElement=coordsOrgElement.left,widthPlaceholder=$listenerElement[0].getBoundingClientRect().width,widthPlaceholder||(widthPlaceholder=$listenerElement.css("width")),heightPlaceholder=$listenerElement[0].getBoundingClientRect().height,heightPlaceholder||(heightPlaceholder=$listenerElement.css("height")),widthSticky=e(".sticky-element-original").css("width"),"0px"==widthSticky&&(widthSticky=e(".sticky-element-original")[0].getBoundingClientRect().width),heightSticky=e(".sticky-element-original").height(),paddingOrgElement=[e(".sticky-element-original").css("padding-top"),e(".sticky-element-original").css("padding-right"),e(".sticky-element-original").css("padding-bottom"),e(".sticky-element-original").css("padding-left")],paddingSticky=paddingOrgElement[0]+" "+paddingOrgElement[1]+" "+paddingOrgElement[2]+" "+paddingOrgElement[3],marginOrgElement=[$listenerElement.css("margin-top"),$listenerElement.css("margin-right"),$listenerElement.css("margin-bottom"),$listenerElement.css("margin-left")],marginPlaceholder=marginOrgElement[0]+" "+marginOrgElement[1]+" "+marginOrgElement[2]+" "+marginOrgElement[3],assignedStyles="",r)"inline"==r[h]?assignedStyles+=h+":inline-block; ":assignedStyles+=h+":"+r[h]+"; ";elementHeight=0,heightPlaceholder<1?elementHeight=e(".sticky-element-cloned").outerHeight():elementHeight=e(".sticky-element-original").outerHeight(),l&&e(window).scrollTop()>pushElementTop-t-elementHeight-adminBarHeight?stickyTopMargin=pushElementTop-t-elementHeight-e(window).scrollTop():stickyTopMargin=adminBarHeight,assignedStyles+="width:"+widthPlaceholder+"px; height:"+heightPlaceholder+"px; margin:"+marginPlaceholder+";",e(".sticky-element-original").removeClass("sticky-element-active").removeClass("element-is-not-sticky").addClass("element-is-sticky").css("cssText","margin-top: "+stickyTopMargin+"px !important; margin-left: 0 !important").css("position","fixed").css("left",leftOrgElement+"px").css("top",t+"px").css("width",widthSticky).css("padding",paddingSticky).css("z-index",s),e(".sticky-element-original").each(function(){this.style.setProperty("margin-top",stickyTopMargin,"important")}),e(".sticky-element-placeholder").hasClass("sticky-element-active")||e(".sticky-element-placeholder").addClass("sticky-element-active").attr("style",assignedStyles)}else e(".sticky-element-original").addClass("sticky-element-active").removeClass("element-is-sticky").addClass("element-is-not-sticky").attr("style",d),e(".sticky-element-placeholder").hasClass("sticky-element-active")&&e(".sticky-element-placeholder").removeClass("sticky-element-active").removeAttr("style").css("width","0").css("height","0").css("margin","0").css("padding","0")}(s.top,s.minscreenwidth,s.maxscreenwidth,s.zindex,s.pushup,s.adminbar,orgAssignedStyles,orgInlineStyles)},10)),this}}(jQuery);