/*    SWFObject v2.2 <http://code.google.com/p/swfobject/> 
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();


function ddtabcontent(tabinterfaceid) {
    this.tabinterfaceid = tabinterfaceid //ID of Tab Menu main container
    this.tabs = document.getElementById(tabinterfaceid).getElementsByTagName("a") //Get all tab links within container
    this.enabletabpersistence = true
    this.hottabspositions = [] //Array to store position of tabs that have a "rel" attr defined, relative to all tab links, within container
    this.currentTabIndex = 0 //Index of currently selected hot tab (tab with sub content) within hottabspositions[] array
    this.subcontentids = [] //Array to store ids of the sub contents ("rel" attr values)
    this.revcontentids = [] //Array to store ids of arbitrary contents to expand/contact as well ("rev" attr values)
    this.selectedClassTarget = "link" //keyword to indicate which target element to assign "selected" CSS class ("linkparent" or "link")
}
ddtabcontent.getCookie = function(Name) {
    var re = new RegExp(Name + "=[^;]+", "i"); //construct RE to search for target name/value pair
    if (document.cookie.match(re)) //if cookie found
        return document.cookie.match(re)[0].split("=")[1] //return its value
    return ""
}
ddtabcontent.setCookie = function(name, value) {
    document.cookie = name + "=" + value + ";path=/" //cookie value is domain wide (path=/)
}
ddtabcontent.prototype = {
    expandit: function(tabid_or_position) { //PUBLIC function to select a tab either by its ID or position(int) within its peers
        this.cancelautorun() //stop auto cycling of tabs (if running)
        var tabref = ""
        try {
            if (typeof tabid_or_position == "string" && document.getElementById(tabid_or_position).getAttribute("rel")) //if specified tab contains "rel" attr
                tabref = document.getElementById(tabid_or_position)
            else if (parseInt(tabid_or_position) != NaN && this.tabs[tabid_or_position].getAttribute("rel")) //if specified tab contains "rel" attr
                tabref = this.tabs[tabid_or_position]
        }
        catch (err) { alert("Invalid Tab ID or position entered!") }
        if (tabref != "") //if a valid tab is found based on function parameter
            this.expandtab(tabref) //expand this tab
    },
    cycleit: function(dir, autorun) { //PUBLIC function to move foward or backwards through each hot tab (tabinstance.cycleit('foward/back') )
        if (dir == "next") {
            var currentTabIndex = (this.currentTabIndex < this.hottabspositions.length - 1) ? this.currentTabIndex + 1 : 0
        }
        else if (dir == "prev") {
            var currentTabIndex = (this.currentTabIndex > 0) ? this.currentTabIndex - 1 : this.hottabspositions.length - 1
        }
        if (typeof autorun == "undefined") //if cycleit() is being called by user, versus autorun() function
            this.cancelautorun() //stop auto cycling of tabs (if running)
        this.expandtab(this.tabs[this.hottabspositions[currentTabIndex]])
    },
    setpersist: function(bool) { //PUBLIC function to toggle persistence feature
        this.enabletabpersistence = bool
    },
    setselectedClassTarget: function(objstr) { //PUBLIC function to set which target element to assign "selected" CSS class ("linkparent" or "link")
        this.selectedClassTarget = objstr || "link"
    },
    getselectedClassTarget: function(tabref) { //Returns target element to assign "selected" CSS class to
        return (this.selectedClassTarget == ("linkparent".toLowerCase())) ? tabref.parentNode : tabref
    },
    urlparamselect: function(tabinterfaceid) {
        var result = window.location.search.match(new RegExp(tabinterfaceid + "=(\\d+)", "i")) //check for "?tabinterfaceid=2" in URL
        return (result == null) ? null : parseInt(RegExp.$1) //returns null or index, where index (int) is the selected tab's index
    },
    expandtab: function(tabref) {
        var subcontentid = tabref.getAttribute("rel") //Get id of subcontent to expand
        //Get "rev" attr as a string of IDs in the format ",john,george,trey,etc," to easily search through
        var associatedrevids = (tabref.getAttribute("rev")) ? "," + tabref.getAttribute("rev").replace(/\s+/, "") + "," : ""
        this.expandsubcontent(subcontentid)
        this.expandrevcontent(associatedrevids)
        for (var i = 0; i < this.tabs.length; i++) { //Loop through all tabs, and assign only the selected tab the CSS class "selected"
            this.getselectedClassTarget(this.tabs[i]).className = (this.tabs[i].getAttribute("rel") == subcontentid) ? "selected" : ""
        }
        if (this.enabletabpersistence) //if persistence enabled, save selected tab position(int) relative to its peers
            ddtabcontent.setCookie(this.tabinterfaceid, tabref.tabposition)
        this.setcurrenttabindex(tabref.tabposition) //remember position of selected tab within hottabspositions[] array
    },
    expandsubcontent: function(subcontentid) {
        for (var i = 0; i < this.subcontentids.length; i++) {
            var subcontent = document.getElementById(this.subcontentids[i]) //cache current subcontent obj (in for loop)
            subcontent.style.display = (subcontent.id == subcontentid) ? "block" : "none" //"show" or hide sub content based on matching id attr value
        }
    },
    expandrevcontent: function(associatedrevids) {
        var allrevids = this.revcontentids
        for (var i = 0; i < allrevids.length; i++) { //Loop through rev attributes for all tabs in this tab interface
            //if any values stored within associatedrevids matches one within allrevids, expand that DIV, otherwise, contract it
            document.getElementById(allrevids[i]).style.display = (associatedrevids.indexOf("," + allrevids[i] + ",") != -1) ? "block" : "none"
        }
    },
    setcurrenttabindex: function(tabposition) { //store current position of tab (within hottabspositions[] array)
        for (var i = 0; i < this.hottabspositions.length; i++) {
            if (tabposition == this.hottabspositions[i]) {
                this.currentTabIndex = i
                break
            }
        }
    },
    autorun: function() { //function to auto cycle through and select tabs based on a set interval
        this.cycleit('next', true)
    },
    cancelautorun: function() {
        if (typeof this.autoruntimer != "undefined")
            clearInterval(this.autoruntimer)
    },
    init: function(automodeperiod) {
        var persistedtab = ddtabcontent.getCookie(this.tabinterfaceid) //get position of persisted tab (applicable if persistence is enabled)
        var selectedtab = -1 //Currently selected tab index (-1 meaning none)
        var selectedtabfromurl = this.urlparamselect(this.tabinterfaceid) //returns null or index from: tabcontent.htm?tabinterfaceid=index
        this.automodeperiod = automodeperiod || 0
        for (var i = 0; i < this.tabs.length; i++) {
            this.tabs[i].tabposition = i //remember position of tab relative to its peers
            if (this.tabs[i].getAttribute("rel")) {
                var tabinstance = this
                this.hottabspositions[this.hottabspositions.length] = i //store position of "hot" tab ("rel" attr defined) relative to its peers
                this.subcontentids[this.subcontentids.length] = this.tabs[i].getAttribute("rel") //store id of sub content ("rel" attr value)
                this.tabs[i].onclick = function() {
                    tabinstance.expandtab(this)
                    tabinstance.cancelautorun() //stop auto cycling of tabs (if running)
                    return false
                }
                if (this.tabs[i].getAttribute("rev")) { //if "rev" attr defined, store each value within "rev" as an array element
                    this.revcontentids = this.revcontentids.concat(this.tabs[i].getAttribute("rev").split(/\s*,\s*/))
                }
                if (selectedtabfromurl == i || this.enabletabpersistence && selectedtab == -1 && parseInt(persistedtab) == i || !this.enabletabpersistence && selectedtab == -1 && this.getselectedClassTarget(this.tabs[i]).className == "selected") {
                    selectedtab = i //Selected tab index, if found
                }
            }
        } //END for loop
        if (selectedtab != -1) //if a valid default selected tab index is found
            this.expandtab(this.tabs[selectedtab]) //expand selected tab (either from URL parameter, persistent feature, or class="selected" class)
        else //if no valid default selected index found
            this.expandtab(this.tabs[this.hottabspositions[0]]) //Just select first tab that contains a "rel" attr
        if (parseInt(this.automodeperiod) > 500 && this.hottabspositions.length > 1) {
            this.autoruntimer = setInterval(function() { tabinstance.autorun() }, this.automodeperiod)
        }
    } //END int() function
} //END Prototype assignment

function onloadloginpassbox()
{
    if (document.getElementById('loginpassspan_text')) document.getElementById('loginpassspan_text').style.display='inline';
  if (document.getElementById('loginpassspan_password')) document.getElementById('loginpassspan_password').style.display='none';
}
function changeloginpassbox()
{
    document.getElementById('loginpassspan_text').style.display='none';
    document.getElementById('loginpassspan_password').style.display='inline';
    document.getElementById('cams_cb_password').focus();
}
function validateLogin (userName, passWd) {
   var pwdRe = new RegExp("^.{7,128}$");
  var userRe = new RegExp("^(?=.{5,60}$)[-a-z0-9!#$%&'*+/=?^_`{|}~.]+@[a-z0-9](?:[-_a-z0-9]*[a-z0-9])*(?:\\.[a-z0-9](?:[-_a-z0-9]*[a-z0-9])*)+$", "i");
   var user = document.getElementById(userName).value;
   var pwd = document.getElementById(passWd).value;
   var result = true;
   if (!user || user.length == 0) {
      result = false;
      alert("User Name must be provided");
   } else if (!user.match(userRe)) {
      result = false;
      alert("Invalid username has been entered");
   } else if (!pwd || pwd.length == 0) {
      result = false;
      alert("Password must be provided");
   } else if (!pwd.match(pwdRe)) {
      result = false;
      alert("Invalid password has been entered");
   }
   return(result);
}
function clearDefault(el) {
  if (el.defaultValue==el.value) el.value = ""
}
function changecss(theClass,element,value) {
     var cssRules;
     if (document.all) {
      cssRules = 'rules';
     }
     else if (document.getElementById) {
      cssRules = 'cssRules';
     }
     var added = false;
     for (var S = 0; S < document.styleSheets.length; S++){
    
            if(null === document.styleSheets[S].href || document.styleSheets[S].href.indexOf('sharethis') == "-1") {
      for (var R = 0; R < document.styleSheets[S][cssRules].length; R++) {
       if (document.styleSheets[S][cssRules][R].selectorText == theClass) {
        if(document.styleSheets[S][cssRules][R].style[element]){
        document.styleSheets[S][cssRules][R].style[element] = value;
        added=true;
        break;
        }
                
       }
      }
      if(!added){
        
      if(document.styleSheets[S].insertRule){
                    document.styleSheets[S].insertRule(theClass+' { '+element+': '+value+'; }',document.styleSheets[S][cssRules].length);
            } else if (document.styleSheets[S].addRule) {
                document.styleSheets[S].addRule(theClass,element+': '+value+';');
            }
      }
     }
         }
    }
		
		