(function(e, s) {
    if (window.layui && layui.define) {
        layui.define(function(e) {
            window.UEDITOR_HOME_URL = layui.cache.base + "lib/extend/ueditor/";
            e("ueconfig", s())
        })
    } else {
        e.ueconfig = s()
    }
})(this,
function() {
    var e = window.UEDITOR_HOME_URL || s();
    window.UEDITOR_CONFIG = {
        UEDITOR_HOME_URL: e,
        //serverUrl: e + "php/controller.php",
        serverUrl: "/common/editor/ueditor",
        toolbars: [["fullscreen", "source", "|", "undo", "redo", "|", "bold", "italic", "underline", "fontborder", "strikethrough", "superscript", "subscript", "removeformat", "formatmatch", "autotypeset", "blockquote", "pasteplain", "|", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist", "selectall", "cleardoc", "|", "rowspacingtop", "rowspacingbottom", "lineheight", "|", "customstyle", "paragraph", "fontfamily", "fontsize", "|", "directionalityltr", "directionalityrtl", "indent", "|", "justifyleft", "justifycenter", "justifyright", "justifyjustify", "|", "touppercase", "tolowercase", "|", "link", "unlink", "anchor", "|", "imagenone", "imageleft", "imageright", "imagecenter", "|", "simpleupload", "insertimage", "emotion", "scrawl", "insertvideo", "music", "attachment", "map", "gmap", "insertframe", "insertcode", "webapp", "pagebreak", "template", "background", "|", "horizontal", "date", "time", "spechars", "snapscreen", "wordimage", "|", "inserttable", "deletetable", "insertparagraphbeforetable", "insertrow", "deleterow", "insertcol", "deletecol", "mergecells", "mergeright", "mergedown", "splittocells", "splittorows", "splittocols", "charts", "|", "print", "preview", "searchreplace", "drafts", "help"]],
        xssFilterRules: true,
        inputXssFilter: true,
        outputXssFilter: true,
        whitList: {
            a: ["target", "href", "title", "class", "style"],
            abbr: ["title", "class", "style"],
            address: ["class", "style"],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: ["autoplay", "controls", "loop", "preload", "src", "class", "style"],
            b: ["class", "style"],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite", "class", "style"],
            br: [],
            caption: ["class", "style"],
            center: [],
            cite: [],
            code: ["class", "style"],
            col: ["align", "valign", "span", "width", "class", "style"],
            colgroup: ["align", "valign", "span", "width", "class", "style"],
            dd: ["class", "style"],
            del: ["datetime"],
            details: ["open"],
            div: ["class", "style"],
            dl: ["class", "style"],
            dt: ["class", "style"],
            em: ["class", "style"],
            font: ["color", "size", "face"],
            footer: [],
            h1: ["class", "style"],
            h2: ["class", "style"],
            h3: ["class", "style"],
            h4: ["class", "style"],
            h5: ["class", "style"],
            h6: ["class", "style"],
            header: [],
            hr: [],
            i: ["class", "style"],
            img: ["src", "alt", "title", "width", "height", "id", "_src", "loadingclass", "class", "data-latex"],
            ins: ["datetime"],
            li: ["class", "style"],
            mark: [],
            nav: [],
            ol: ["class", "style"],
            p: ["class", "style"],
            pre: ["class", "style"],
            s: [],
            section: [],
            small: [],
            span: ["class", "style"],
            sub: ["class", "style"],
            sup: ["class", "style"],
            strong: ["class", "style"],
            table: ["width", "border", "align", "valign", "class", "style"],
            tbody: ["align", "valign", "class", "style"],
            td: ["width", "rowspan", "colspan", "align", "valign", "class", "style"],
            tfoot: ["align", "valign", "class", "style"],
            th: ["width", "rowspan", "colspan", "align", "valign", "class", "style"],
            thead: ["align", "valign", "class", "style"],
            tr: ["rowspan", "align", "valign", "class", "style"],
            tt: [],
            u: [],
            ul: ["class", "style"],
            video: ["autoplay", "controls", "loop", "preload", "src", "height", "width", "class", "style"]
        }
    };
    function s(e, s) {
        return l(e || self.document.URL || self.location.href, s || t())
    }
    function t() {
        var e = document.getElementsByTagName("script");
        return e[e.length - 1].src
    }
    function l(e, s) {
        var t = s;
        if (/^(\/|\\\\)/.test(s)) {
            t = /^.+?\w(\/|\\\\)/.exec(e)[0] + s.replace(/^(\/|\\\\)/, "")
        } else if (!/^[a-z]+:/i.test(s)) {
            e = e.split("#")[0].split("?")[0].replace(/[^\\\/]+$/, "");
            t = e + "" + s
        }
        return a(t)
    }
    function a(e) {
        var s = /^[a-z]+:\/\//.exec(e)[0],
        t = null,
        l = [];
        e = e.replace(s, "").split("?")[0].split("#")[0];
        e = e.replace(/\\/g, "/").split(/\//);
        e[e.length - 1] = "";
        while (e.length) {
            if ((t = e.shift()) === "..") {
                l.pop()
            } else if (t !== ".") {
                l.push(t)
            }
        }
        return s + l.join("/")
    }
    window.UE = {
        getUEBasePath: s
    }
});