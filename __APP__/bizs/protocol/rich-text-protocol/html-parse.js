var e =
    /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
  t = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
  n =
    /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
  r = l(
    "area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"
  ),
  a = l(
    "style,a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"
  ),
  s = l(
    "abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
  ),
  c = l("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),
  i = l(
    "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
  ),
  o = l("script,style");
function l(e) {
  for (var t = {}, n = e.split(","), r = 0; r < n.length; r++) t[n[r]] = !0;
  return t;
}
function d(l) {
  l = (function (e) {
    var t = e;
    return (t = (t = (t = (t = t.replace(new RegExp("rgb", "g"), "")).replace(
      new RegExp("<p>&nbsp;</p>", "g"),
      '<p style="opacity:0"> 1 </p>'
    )).replace(
      new RegExp("&nbsp;</span>", "g"),
      '<span style="opacity:0">1</span></span>'
    )).replace(/text-indent:\s?(\d)rem/g, function (e, t) {
      return "text-indent: ".concat(t, "em");
    }));
  })(
    (l = (function (e) {
      return e.replace(/<o:p>/g, "").replace(/<\/o:p>/g, "");
    })(
      (l = (function (e) {
        var t = e.match(/<body>([\s\S]*?)<\/body>/);
        return (t && (t[1] || t[0])) || e;
      })(l))
    ))
  );
  var d = [],
    p = { node: "div", children: [] };
  return (
    (function (l, d) {
      var p,
        u,
        h,
        f = [],
        m = l;
      for (
        f.last = function () {
          return this[this.length - 1];
        };
        l;

      ) {
        if (((u = !0), f.last() && o[f.last()]))
          (l = l.replace(
            new RegExp("([\\s\\S]*?)</".concat(f.last(), "[^>]*>")),
            function (e, t) {
              return (
                (t = t.replace(
                  /<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,
                  "$1$2"
                )),
                d.chars && d.chars(t),
                ""
              );
            }
          )),
            v("", f.last());
        else if (
          (0 === l.indexOf("\x3c!--")
            ? (p = l.indexOf("--\x3e")) >= 0 &&
              (d.comment && d.comment(l.substring(4, p)),
              (l = l.substring(p + 3)),
              (u = !1))
            : 0 === l.indexOf("</")
            ? (h = l.match(t)) &&
              ((l = l.substring(h[0].length)), h[0].replace(t, v), (u = !1))
            : 0 === l.indexOf("<") &&
              (h = l.match(e)) &&
              ((l = l.substring(h[0].length)), h[0].replace(e, b), (u = !1)),
          u)
        ) {
          var g = (p = l.indexOf("<")) < 0 ? l : l.substring(0, p);
          (l = p < 0 ? "" : l.substring(p)), d.chars && d.chars(g);
        }
        if (l === m) throw new Error("Parse Error: ".concat(l));
        m = l;
      }
      function b(e, t, o, l) {
        if (((t = t.toLowerCase()), a[t]))
          for (; f.last() && s[f.last()]; ) v("", f.last());
        if (
          (c[t] && f.last() === t && v("", t),
          (l = r[t] || !!l) || f.push(t),
          d.start)
        ) {
          var p = [];
          o.replace(n, function (e, t) {
            var n = arguments[2]
              ? arguments[2]
              : arguments[3]
              ? arguments[3]
              : arguments[4]
              ? arguments[4]
              : i[t]
              ? t
              : "";
            p.push({
              name: t,
              value: n,
              escaped: n.replace(/(^|[^\\])"/g, '$1\\"'),
            });
          }),
            d.start && d.start(t, p, l);
        }
      }
      function v(e, t) {
        var n;
        if (t) for (n = f.length - 1; n >= 0 && f[n] !== t; n--);
        else n = 0;
        if (n >= 0) {
          for (var r = f.length - 1; r >= n; r--) d.end && d.end(f[r]);
          f.length = n;
        }
      }
      v();
    })(l, {
      start: function (e, t, n) {
        var r = { name: e };
        if (
          {
            article: !0,
            header: !0,
            footer: !0,
            section: !0,
            strong: !0,
            p: !0,
            h4: !0,
            h1: !0,
            img: !0,
          }[e]
        ) {
          var a = t.find(function (e) {
              return "class" === e.name;
            }),
            s = "rich_protocol_".concat(e);
          a
            ? -1 === a.value.indexOf(s) &&
              (a.value = "".concat(a.value, " ").concat(s))
            : t.push({ name: "class", value: s });
        }
        if (
          (0 !== t.length &&
            (r.attrs = (function (e) {
              return e.reduce(function (e, t) {
                var n = t.value,
                  r = t.name;
                return (
                  e[r] ? (e[r] = "".concat(e[r], " ").concat(n)) : (e[r] = n), e
                );
              }, {});
            })(t)),
          n)
        ) {
          var c = d[0] || p;
          c.children || (c.children = []), c.children.push(r);
        } else d.unshift(r);
      },
      end: function (e) {
        var t = d.shift();
        if ((t.name, 0 === d.length)) p.children.push(t);
        else {
          var n = d[0];
          n.children || (n.children = []), n.children.push(t);
        }
      },
      chars: function (e) {
        var t = { type: "text", text: e };
        if (0 === d.length) p.children.push(t);
        else {
          var n = d[0];
          n.children || (n.children = []), n.children.push(t);
        }
      },
      comment: function (e) {
        var t = { node: "comment", text: e },
          n = d[0];
        n.children || (n.children = []), n.children.push(t);
      },
    }),
    p.children
  );
}
exports.parseWithCatchError = function (e) {
  return d(e);
};
