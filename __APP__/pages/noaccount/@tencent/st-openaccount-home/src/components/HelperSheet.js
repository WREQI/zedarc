var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../common/vendor.js"),
  n = require("../pages/pro.js"),
  r =
    /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
  a = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
  o =
    /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
  c = h(
    "area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"
  ),
  s = h(
    "style,a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"
  ),
  i = h(
    "abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"
  ),
  l = h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),
  u = h(
    "checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"
  ),
  p = h("script,style");
function h(e) {
  for (var t = {}, n = e.split(","), r = 0; r < n.length; r++) t[n[r]] = !0;
  return t;
}
function d(e) {
  e = (function (e) {
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
    (e = (function (e) {
      return e.replace(/<o:p>/g, "").replace(/<\/o:p>/g, "");
    })(
      (e = (function (e) {
        var t = e.match(new RegExp("<body>(.*?)<\\/body>", "s"));
        return (t && (t[1] || t[0])) || e;
      })(e))
    ))
  );
  var t = [],
    n = { node: "div", children: [] };
  return (
    (function (e, t) {
      var n,
        h,
        d,
        f = [],
        m = e;
      for (
        f.last = function () {
          return this[this.length - 1];
        };
        e;

      ) {
        if (((h = !0), f.last() && p[f.last()]))
          (e = e.replace(
            new RegExp("([\\s\\S]*?)</".concat(f.last(), "[^>]*>")),
            function (e, n) {
              return (
                (n = n.replace(
                  /<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,
                  "$1$2"
                )),
                t.chars && t.chars(n),
                ""
              );
            }
          )),
            b("", f.last());
        else if (
          (0 === e.indexOf("\x3c!--")
            ? (n = e.indexOf("--\x3e")) >= 0 &&
              (t.comment && t.comment(e.substring(4, n)),
              (e = e.substring(n + 3)),
              (h = !1))
            : 0 === e.indexOf("</")
            ? (d = e.match(a)) &&
              ((e = e.substring(d[0].length)), d[0].replace(a, b), (h = !1))
            : 0 === e.indexOf("<") &&
              (d = e.match(r)) &&
              ((e = e.substring(d[0].length)), d[0].replace(r, v), (h = !1)),
          h)
        ) {
          var g = (n = e.indexOf("<")) < 0 ? e : e.substring(0, n);
          (e = n < 0 ? "" : e.substring(n)), t.chars && t.chars(g);
        }
        if (e === m) throw new Error("Parse Error: ".concat(e));
        m = e;
      }
      function v(e, n, r, a) {
        if (((n = n.toLowerCase()), s[n]))
          for (; f.last() && i[f.last()]; ) b("", f.last());
        if (
          (l[n] && f.last() === n && b("", n),
          (a = c[n] || !!a) || f.push(n),
          t.start)
        ) {
          var p = [];
          r.replace(o, function (e, t) {
            var n = arguments[2]
              ? arguments[2]
              : arguments[3]
              ? arguments[3]
              : arguments[4]
              ? arguments[4]
              : u[t]
              ? t
              : "";
            p.push({
              name: t,
              value: n,
              escaped: n.replace(/(^|[^\\])"/g, '$1\\"'),
            });
          }),
            t.start && t.start(n, p, a);
        }
      }
      function b(e, n) {
        var r;
        if (n) for (r = f.length - 1; r >= 0 && f[r] !== n; r--);
        else r = 0;
        if (r >= 0) {
          for (var a = f.length - 1; a >= r; a--) t.end && t.end(f[a]);
          f.length = r;
        }
      }
      b();
    })(e, {
      start: function (e, r, a) {
        var o = { name: e };
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
            table: !0,
            th: !0,
            td: !0,
          }[e]
        ) {
          var c = r.find(function (e) {
              return "class" === e.name;
            }),
            s = "rich_text_".concat(e);
          c
            ? -1 === c.value.indexOf(s) &&
              (c.value = "".concat(c.value, " ").concat(s))
            : r.push({ name: "class", value: s });
        }
        if (
          (0 !== r.length &&
            (o.attrs = (function (e) {
              return e.reduce(function (e, t) {
                var n = t.value,
                  r = t.name;
                return (
                  e[r] ? (e[r] = "".concat(e[r], " ").concat(n)) : (e[r] = n), e
                );
              }, {});
            })(r)),
          a)
        ) {
          var i = t[0] || n;
          i.children || (i.children = []), i.children.push(o);
        } else t.unshift(o);
      },
      end: function (e) {
        var r = t.shift();
        if ((r.name, 0 === t.length)) n.children.push(r);
        else {
          var a = t[0];
          a.children || (a.children = []), a.children.push(r);
        }
      },
      chars: function (e) {
        var r = { type: "text", text: e };
        if (0 === t.length) n.children.push(r);
        else {
          var a = t[0];
          a.children || (a.children = []), a.children.push(r);
        }
      },
      comment: function (e) {
        var n = { node: "comment", text: e },
          r = t[0];
        r.children || (r.children = []), r.children.push(n);
      },
    }),
    n.children
  );
}
var f = {
  components: {
    ActionSheet: function () {
      return "../../../../../asyncCom/@tencent/stock-ui/mp/action-sheet/index.js";
    },
  },
  options: { styleIsolation: "shared" },
  props: {
    value: { type: Boolean, default: !0 },
    hideHelperEntry: { type: Boolean, default: !1 },
    curBrokerCode: {},
    curBrokerItem: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  setup: function (r, a) {
    var o = a.emit,
      c = t.ref(!1),
      s = t.ref(!1),
      i = t.ref({}),
      l = t.inject("stockBridge", {});
    function u() {
      return (
        (t = this),
        null,
        (r = e().mark(function t() {
          var r;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      n.Wuji.get(n.wujiCfg.helperSheet)
                    );
                  case 3:
                    (r = e.sent).data.length && (s.value = !0),
                      (i.value = r.data),
                      (e.next = 9);
                    break;
                  case 7:
                    (e.prev = 7), (e.t0 = e.catch(0));
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[0, 7]]
          );
        })),
        new Promise(function (e, n) {
          var a = function (e) {
              try {
                c(r.next(e));
              } catch (e) {
                n(e);
              }
            },
            o = function (e) {
              try {
                c(r.throw(e));
              } catch (e) {
                n(e);
              }
            },
            c = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(a, o);
            };
          c((r = r.apply(t, null)).next());
        })
      );
      var t, r;
    }
    return (
      t.watch(
        function () {
          return r.value;
        },
        function (e) {
          (c.value = e),
            e
              ? l.report("yy.trade_newpage.helper_show")
              : l.report("yy.trade_newpage.helper_close_all");
        }
      ),
      t.watch(
        function () {
          return c.value;
        },
        function (e) {
          o("input", e);
        }
      ),
      u(),
      {
        helperContent: i,
        getHelperContent: u,
        helperText: function (e) {
          try {
            return JSON.parse(i.value[e].text).content || "";
          } catch (t) {
            return "mp" === l.ENV ? d(i.value[e].text) : i.value[e].text;
          }
        },
        sheetShow: c,
        tohelper: function () {
          l.report("yy.trade_newpage.helper_click"),
            l.locationTo(
              "https://aics.tenpay.com/aics-cloud/xiaomi/page.do?channel=75&_=".concat(
                Date.now()
              )
            );
        },
        scrollHelper: function () {
          l.report("yy.trade_newpage.helper_scroll");
        },
        hasContent: s,
        stockBridge: l,
      }
    );
  },
};
Array || t.resolveComponent("action-sheet")();
var m = t._export_sfc(f, [
  [
    "render",
    function (e, n, r, a, o, c) {
      return t.e(
        { a: a.hasContent },
        a.hasContent
          ? t.e(
              { b: !r.hideHelperEntry },
              r.hideHelperEntry
                ? {}
                : t.e({ c: a.sheetShow }, (a.sheetShow, {}), {
                    d: t.o(function () {
                      return a.tohelper && a.tohelper.apply(a, arguments);
                    }, 2384),
                  }),
              {
                e: t.f(a.helperContent, function (e, n, r) {
                  return t.e(
                    { a: t.t(n + 1), b: t.t(e.title) },
                    "mp" === a.stockBridge.ENV
                      ? { c: a.helperText(n) }
                      : { d: a.helperText(n) },
                    { e: n }
                  );
                }),
                f: "mp" === a.stockBridge.ENV,
                g: t.o(function () {
                  return a.scrollHelper && a.scrollHelper.apply(a, arguments);
                }, 2385),
                h: t.o(function (e) {
                  return (a.sheetShow = e);
                }, 2386),
                i: t.p({
                  value: a.sheetShow,
                  title: "开户助手",
                  "picker-style": !0,
                  "close-button": !0,
                  "confirm-txt": " ",
                }),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-2ee5d2cb"],
]);
wx.createComponent(m);
