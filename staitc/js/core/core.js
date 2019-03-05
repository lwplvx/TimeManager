/**
 * js 文件引用另一个js文件
 * 
 * 2019-02-23 20:14 by Simon
 */
function importJs(src) {
    document.write("<script type='text/javascript' src='" + src + "'></script>");
}

// load(url,data,function(response,status,xhr))

function getTemplate(id) {
    var tmp = getItem(id);
    //removeItem(id);
    return tmp;
}

function setTemplate(id) {
    var el = document.getElementById(id);
    // alert(el.innerHTML);
    setItem(id, el.innerHTML);
}

function getTemplateId(templateName) {
    return templateName + '-tmp';
}

/** */
function loadTemplate(src, id, data) {
    var iframeId = 'iframe_' + id;
    document.write('<iframe style="display:none" id="' + iframeId + '" src="' + src + '"></iframe>');
    document.getElementById(iframeId).onload = function () {
        //your codes here.
        //var iframe=document.getElementById(iframeId);

       // setTemplate(id);
    };
    //document.write("<iframe style='display:none' id='iframe_" + id + "' src='" + src + "' mce_src='" + id + "'></iframe>");
    /* <iframe   frameborder=0   border=0   width=300   height=300   src="b.htm" mce_src="b.htm"></iframe> */
    return;

    document.write("<div di='" + id + "'></div>");
    var xmlhttp = null;
    if (window.XMLHttpRequest) { // code for IE7, Firefox, Opera, etc.
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) { // 4 = "loaded"
                if (xmlhttp.status == 200) { // 200 = "OK" 
                    document.getElementById(id).innerHTML = xmlhttp.responseText;
                } else {
                    console.log('status:' + xmlhttp.status + ',responseText:' + xmlhttp.responseText);
                }
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send(data);
    } else {
        alert("Your browser does not support XMLHTTP.");
    }
}

function importCompentsTemplate(componentsPath, compenets) {
    compenets.forEach(function (val, index) {
        loadTemplate(componentsPath + "/" + val + "/index.html", getTemplateId(val), null);
    });
}

function importCompents(componentsPath, compenets) {
    compenets.forEach(function (val, index) {
        importJs(componentsPath + "/" + val + "/index.js");
    });
}

// localStorage.getItem(key):获取指定key本地存储的值

// localStorage.setItem(key,value)：将value存储到key字段

// localStorage.removeItem(key):删除指定key本地存储的值


/** 
 * localStorage.getItem(key)
 * :获取指定key本地存储的值
 */
function getItem(key) {
    return localStorage.getItem(key);
}
/** localStorage.setItem(key,value)：将value存储到key字段*/
function setItem(key, value) {
    localStorage.setItem(key, value);
}
/** localStorage.removeItem(key):删除指定key本地存储的值*/
function removeItem(key) {
    localStorage.removeItem(key);
}

Array.prototype.remove = function(val) { 
    var index = this.indexOf(val); 
    if (index > -1) { 
    this.splice(index, 1); 
    } 
    };