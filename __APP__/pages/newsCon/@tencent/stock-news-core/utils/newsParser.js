var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("./market.js"),
  r = require("./force2https.js"),
  a = require("./report.js"),
  i = {},
  o = {},
  s = {};
function c(t) {
  return "number" == typeof t && isNaN(t);
}
Object.defineProperty(s, "__esModule", { value: !0 }),
  (s.startsWith = function (t, e, n) {
    return t.substr(n || 0, e.length) === e;
  }),
  (s.endsWith = function (t, e, n) {
    var r = (n || t.length) - e.length,
      a = t.lastIndexOf(e, r);
    return -1 !== a && a === r;
  }),
  (s.stringIncludes = function (t, e, n) {
    return -1 !== t.indexOf(e, n || 0);
  }),
  (s.isRealNaN = c),
  (s.arrayIncludes = function (t, e, n) {
    var r = t.length;
    if (0 === r) return !1;
    for (var a = 0 | n, i = c(e), o = a >= 0 ? a : r + a; o < r; ) {
      var s = t[o++];
      if (s === e) return !0;
      if (i && c(s)) return !0;
    }
    return !1;
  }),
  Object.defineProperty(o, "__esModule", { value: !0 }),
  (o.feedPosition = u),
  (o.jumpPosition = d),
  (o.makeInitialPosition = function () {
    return { index: 0, column: 0, line: 0 };
  }),
  (o.copyPosition = p),
  (o.default = function (t, e) {
    var n = {
      str: t,
      options: e,
      position: { index: 0, column: 0, line: 0 },
      tokens: [],
    };
    return f(n), n.tokens;
  }),
  (o.lex = f),
  (o.findTextEnd = h),
  (o.lexText = g),
  (o.lexComment = y),
  (o.lexTag = x),
  (o.isWhitespaceChar = b),
  (o.lexTagName = k),
  (o.lexTagAttributes = T),
  (o.lexSkipTag = N);
var l = s;
function u(t, e, n) {
  for (var r = t.index, a = (t.index = r + n), i = r; i < a; i++)
    "\n" === e.charAt(i) ? (t.line++, (t.column = 0)) : t.column++;
}
function d(t, e, n) {
  return u(t, e, n - t.index);
}
function p(t) {
  return { index: t.index, line: t.line, column: t.column };
}
function f(t) {
  for (
    var e = t.str, n = t.options.childlessTags, r = e.length;
    t.position.index < r;

  ) {
    var a = t.position.index;
    if ((g(t), t.position.index === a))
      if ((0, l.startsWith)(e, "!--", a + 1)) y(t);
      else {
        var i = x(t),
          o = i.toLowerCase();
        (0, l.arrayIncludes)(n, o) && N(i, t);
      }
  }
}
var v = /[A-Za-z0-9]/;
function h(t, e) {
  for (;;) {
    var n = t.indexOf("<", e);
    if (-1 === n) return n;
    var r = t.charAt(n + 1);
    if ("/" === r || "!" === r || v.test(r)) return n;
    e = n + 1;
  }
}
function g(t) {
  var e = t.str,
    n = t.position,
    r = h(e, n.index);
  if (r !== n.index) {
    -1 === r && (r = e.length);
    var a = p(n),
      i = e.slice(n.index, r);
    d(n, e, r);
    var o = p(n);
    t.tokens.push({ type: "text", content: i, position: { start: a, end: o } });
  }
}
function y(t) {
  var e = t.str,
    n = t.position,
    r = p(n);
  u(n, e, 4);
  var a = e.indexOf("--\x3e", n.index),
    i = a + 3;
  -1 === a && (a = i = e.length);
  var o = e.slice(n.index, a);
  d(n, e, i),
    t.tokens.push({
      type: "comment",
      content: o,
      position: { start: r, end: p(n) },
    });
}
function x(t) {
  var e = t.str,
    n = t.position,
    r = "/" === e.charAt(n.index + 1),
    a = p(n);
  u(n, e, r ? 2 : 1),
    t.tokens.push({ type: "tag-start", close: r, position: { start: a } });
  var i = k(t);
  T(t);
  var o = "/" === e.charAt(n.index);
  u(n, e, o ? 2 : 1);
  var s = p(n);
  return t.tokens.push({ type: "tag-end", close: o, position: { end: s } }), i;
}
var m = /\s/;
function b(t) {
  return m.test(t);
}
function k(t) {
  for (var e = t.str, n = t.position, r = e.length, a = n.index; a < r; ) {
    var i = e.charAt(a);
    if (!b(i) && "/" !== i && ">" !== i) break;
    a++;
  }
  for (var o = a + 1; o < r; ) {
    var s = e.charAt(o);
    if (b(s) || "/" === s || ">" === s) break;
    o++;
  }
  d(n, e, o);
  var c = e.slice(a, o);
  return t.tokens.push({ type: "tag", content: c }), c;
}
function T(t) {
  for (
    var e = t.str,
      n = t.position,
      r = t.tokens,
      a = n.index,
      i = null,
      o = a,
      s = [],
      c = e.length;
    a < c;

  ) {
    var u = e.charAt(a);
    if (i) u === i && (i = null), a++;
    else {
      if ("/" === u || ">" === u) {
        a !== o && s.push(e.slice(o, a));
        break;
      }
      b(u)
        ? (a !== o && s.push(e.slice(o, a)), (o = a + 1), a++)
        : "'" === u || '"' === u
        ? ((i = u), a++)
        : a++;
    }
  }
  d(n, e, a);
  for (var p = s.length, f = "attribute", v = 0; v < p; v++) {
    var h = s[v];
    if (-1 === h.indexOf("=")) {
      var g = s[v + 1];
      if (g && (0, l.startsWith)(g, "=")) {
        if (g.length > 1) {
          var y = h + g;
          r.push({ type: f, content: y }), (v += 1);
          continue;
        }
        var x = s[v + 2];
        if (((v += 1), x)) {
          var m = h + "=" + x;
          r.push({ type: f, content: m }), (v += 1);
          continue;
        }
      }
    }
    if ((0, l.endsWith)(h, "=")) {
      var k = s[v + 1];
      if (k && !(0, l.stringIncludes)(k, "=")) {
        var T = h + k;
        r.push({ type: f, content: T }), (v += 1);
        continue;
      }
      var _ = h.slice(0, -1);
      r.push({ type: f, content: _ });
    } else r.push({ type: f, content: h });
  }
}
var _ = [].push;
function N(t, e) {
  for (
    var n = e.str,
      r = e.position,
      a = e.tokens,
      i = t.toLowerCase(),
      o = n.length,
      s = r.index;
    s < o;

  ) {
    var c = n.indexOf("</", s);
    if (-1 === c) {
      g(e);
      break;
    }
    var l = p(r);
    d(l, n, c);
    var u = { str: n, position: l, tokens: [] };
    if (i === x(u).toLowerCase()) {
      if (c !== r.index) {
        var f = p(r);
        d(r, n, c),
          a.push({
            type: "text",
            content: n.slice(f.index, c),
            position: { start: f, end: p(r) },
          });
      }
      _.apply(a, u.tokens), d(r, n, u.position.index);
      break;
    }
    s = u.position.index;
  }
}
var A = {};
Object.defineProperty(A, "__esModule", { value: !0 }),
  (A.default = function (t, e) {
    var n = { tagName: null, children: [] };
    return w({ tokens: t, options: e, cursor: 0, stack: [n] }), n.children;
  }),
  (A.hasTerminalParent = I),
  (A.rewindStack = O),
  (A.parse = w);
var S = s;
function I(t, e, n) {
  var r = n[t];
  if (r)
    for (var a = e.length - 1; a >= 0; ) {
      var i = e[a].tagName;
      if (i === t) break;
      if ((0, S.arrayIncludes)(r, i)) return !0;
      a--;
    }
  return !1;
}
function O(t, e, n, r) {
  t[e].position.end = r;
  for (var a = e + 1, i = t.length; a < i; a++) t[a].position.end = n;
  t.splice(e);
}
function w(t) {
  for (
    var e = t.tokens,
      n = t.options,
      r = t.stack,
      a = r[r.length - 1].children,
      i = e.length,
      o = t.cursor;
    o < i;

  ) {
    var s = e[o];
    if ("tag-start" === s.type) {
      var c = e[++o];
      o++;
      var l = c.content.toLowerCase();
      if (s.close) {
        for (var u = r.length, d = !1; --u > -1; )
          if (r[u].tagName === l) {
            d = !0;
            break;
          }
        for (; o < i && "tag-end" === e[o].type; ) o++;
        if (d) {
          O(r, u, s.position.start, e[o - 1].position.end);
          break;
        }
      } else {
        var p = (0, S.arrayIncludes)(n.closingTags, l);
        if ((p && (p = !I(l, r, n.closingTagAncestorBreakers)), p))
          for (var f = r.length - 1; f > 0; ) {
            if (l === r[f].tagName) {
              O(r, f, s.position.start, s.position.start),
                (a = r[f - 1].children);
              break;
            }
            f -= 1;
          }
        for (var v = [], h = void 0; o < i && "tag-end" !== (h = e[o]).type; )
          v.push(h.content), o++;
        o++;
        var g = [],
          y = { start: s.position.start, end: h.position.end },
          x = {
            type: "element",
            tagName: c.content,
            attributes: v,
            children: g,
            position: y,
          };
        if ((a.push(x), !h.close && !(0, S.arrayIncludes)(n.voidTags, l))) {
          var m = r.push({ tagName: l, children: g, position: y }),
            b = { tokens: e, options: n, cursor: o, stack: r };
          w(b),
            (o = b.cursor),
            r.length === m && (x.position.end = e[o - 1].position.end);
        }
      }
    } else a.push(s), o++;
  }
  t.cursor = o;
}
var L = {};
function M(t, e) {
  var n = t.indexOf(e);
  return -1 === n ? [t] : [t.slice(0, n), t.slice(n + e.length)];
}
function E(t) {
  var e = t.charAt(0),
    n = t.length - 1;
  return ('"' !== e && "'" !== e) || e !== t.charAt(n) ? t : t.slice(1, n);
}
function P(t) {
  return t.map(function (t) {
    var e = M(t.trim(), "=");
    return { key: e[0], value: "string" == typeof e[1] ? E(e[1]) : null };
  });
}
Object.defineProperty(L, "__esModule", { value: !0 }),
  (L.splitHead = M),
  (L.unquote = E),
  (L.format = function t(e, n) {
    return e.map(function (e) {
      var r = e.type,
        a =
          "element" === r
            ? {
                type: r,
                tagName: e.tagName.toLowerCase(),
                attributes: P(e.attributes),
                children: t(e.children, n),
              }
            : { type: r, content: e.content };
      return n.includePositions && (a.position = e.position), a;
    });
  }),
  (L.formatAttributes = P);
var C = {};
Object.defineProperty(C, "__esModule", { value: !0 }),
  (C.formatAttributes = R),
  (C.toHTML = U);
var H = s;
function R(t) {
  return t.reduce(function (t, e) {
    var n = e.key,
      r = e.value;
    if (null === r) return t + " " + n;
    var a = -1 !== r.indexOf("'") ? '"' : "'";
    return t + " " + n + "=" + a + r + a;
  }, "");
}
function U(t, e) {
  return t
    .map(function (t) {
      if ("text" === t.type) return t.content;
      if ("comment" === t.type) return "\x3c!--" + t.content + "--\x3e";
      var n = t.tagName,
        r = t.attributes,
        a = t.children;
      return (0, H.arrayIncludes)(e.voidTags, n.toLowerCase())
        ? "<" + n + R(r) + ">"
        : "<" + n + R(r) + ">" + U(a, e) + "</" + n + ">";
    })
    .join("");
}
C.default = { toHTML: U };
var W = {};
Object.defineProperty(W, "__esModule", { value: !0 }),
  (W.childlessTags = ["style", "script", "template"]),
  (W.closingTags = [
    "html",
    "head",
    "body",
    "p",
    "dt",
    "dd",
    "li",
    "option",
    "thead",
    "th",
    "tbody",
    "tr",
    "td",
    "tfoot",
    "colgroup",
  ]),
  (W.closingTagAncestorBreakers = {
    li: ["ul", "ol", "menu"],
    dt: ["dl"],
    dd: ["dl"],
    tbody: ["table"],
    thead: ["table"],
    tfoot: ["table"],
    tr: ["table"],
    td: ["table"],
  }),
  (W.voidTags = [
    "!doctype",
    "area",
    "base",
    "br",
    "col",
    "command",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]),
  Object.defineProperty(i, "__esModule", { value: !0 }),
  (i.parseDefaults = void 0);
var j = (i.parse = function (t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G,
    n = (0, D.default)(t, e),
    r = (0, F.default)(n, e);
  return (0, K.format)(r, e);
});
i.stringify = function (t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G;
  return (0, q.toHTML)(t, e);
};
var D = z(o),
  F = z(A),
  K = L,
  q = C,
  B = W;
function z(t) {
  return t && t.__esModule ? t : { default: t };
}
var G = (i.parseDefaults = {
    voidTags: B.voidTags,
    closingTags: B.closingTags,
    childlessTags: B.childlessTags,
    closingTagAncestorBreakers: B.closingTagAncestorBreakers,
    includePositions: !1,
  }),
  X = {},
  Y = {
    RAW: "raw",
    NEWS: "news",
    STOCK: "stock",
    FUNC: "functions",
    URL: "url",
    TEACH: "teach",
  },
  Q = "snp-strong",
  V = "snp-red",
  Z = "snp-blue";
function J(t) {
  return (t = (t = (t = (t = (t = t.replace(/&amp;/g, "&")).replace(
    /&gt;/g,
    ">"
  )).replace(/&lt;/g, "<")).replace(/&quot;/g, '"')).replace(
    /&#39;/g,
    "'"
  )).replace(/&#x27;/g, "'");
}
function $(t) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Y.RAW,
    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
    s = [],
    c = function (t) {
      if ("text" === t.type)
        s.push({ text: J(t.content), styles: r, textType: i, clickParams: o });
      else if ("element" === t.type)
        if ("span" === t.tagName) {
          if (!t.attributes) return;
          var a = t.attributes.find(function (t) {
            return "class" === t.key;
          });
          if (a && a.value.includes("snp-red") && t.children)
            return void (s = s.concat(
              $(t.children, r.includes(V) ? r : [].concat(e(r), [V]), i, o)
            ));
          if (a && a.value.includes("snp-blue") && t.children)
            return void (s = s.concat(
              $(t.children, r.includes(Z) ? r : [].concat(e(r), [Z]), i, o)
            ));
          if (a && a.value && a.value.includes("news-teach")) {
            var c = t.attributes.find(function (t) {
              return "data-id" === t.key;
            });
            if (t.children)
              return void (s = s.concat(
                $(t.children, r, Y.TEACH, { teachId: c.value })
              ));
          }
          t.children && (s = s.concat($(t.children, r, i, o)));
        } else if ("a" === t.tagName) {
          if (!t.attributes) return;
          var l = t.attributes.find(function (t) {
            return "href" === t.key;
          });
          if (l && l.value.includes("stock://")) {
            var u = l.value
                .replace(/\\\"/g, "")
                .split(/stock:\/\/(.*?)\/(.*)/g),
              d = u[1],
              p = u[2];
            if (d.includes("gnHQGN")) {
              var f = +d.replace("gnHQGN-", ""),
                v = X[f];
              return void (s = s.concat(
                $(t.children, r, Y.FUNC, { jumpId: f, url: v || "" })
              ));
            }
            if (
              !(function (t) {
                var e = n.splitSymbol(t).market;
                return (
                  n.isHSMarket(e) ||
                  n.isHKMarket(e) ||
                  n.isUSMarket(e) ||
                  n.isBJMarket(e) ||
                  n.isHSPlate(e) ||
                  n.isHKPlate(e) ||
                  n.isUSPlate(e) ||
                  n.isDAX30(t) ||
                  n.isCSMarket(e) ||
                  n.isSPMarket(e)
                );
              })(d)
            )
              return void (s = s.concat($(t.children, r, i, o)));
            "ftXIN9" === d && (d = "fuCN");
            var h = d.startsWith("us."),
              g = (d || "").replace("us.", "us"),
              y = "";
            /^[a-zA-Z]+/.test(g) && (y = g.substring(0, 2));
            var x = g.replace(y, "");
            if (t.children)
              return void (s = s.concat(
                $(t.children, r, Y.STOCK, {
                  stockId: g,
                  stockCode: x,
                  market: y,
                  isUSIndex: h,
                  name: p,
                })
              ));
          }
          t.children && (s = s.concat($(t.children, r, i, o)));
        } else if ("strong" === t.tagName)
          t.children &&
            (s = s.concat(
              $(t.children, r.includes(Q) ? r : [].concat(e(r), [Q]), i, o)
            ));
        else if ("snpa" === t.tagName) {
          if (!t.attributes) return;
          var m, b;
          t.attributes.find(function (t) {
            return "data-id" === t.key;
          }) &&
            (m = t.attributes
              .find(function (t) {
                return "data-id" === t.key;
              })
              .value.replace(/\\\"/g, "")),
            t.attributes.find(function (t) {
              return "data-url" === t.key;
            }) &&
              (b = t.attributes
                .find(function (t) {
                  return "data-url" === t.key;
                })
                .value.replace(/\\\"/g, "")),
            t.children &&
              (s = s.concat(
                $(t.children, r, m ? Y.NEWS : Y.URL, m ? { id: m } : { url: b })
              ));
        }
    };
  return (
    t.forEach(function (t) {
      try {
        c(t);
      } catch (t) {
        a.aegisReportError(t);
      }
    }),
    s
  );
}
function tt(t) {
  return $(j(t));
}
(exports.MODULE_TYPE_ENUM = {
  MINS_CHART: "1",
  KLINE_CHART: "2",
  INDUSTRY_RANK: "3",
  FUND_FLOW_NORTH_MINS: "4",
  FUND_FLOW_NORTH_KLINE: "5",
  FUND_FLOW_SOUTH_MINS: "6",
  FUND_FLOW_SOUTH_KLINE: "7",
  MARKET_OVERVIEW_HS: "8",
  PLATE_TABLE: "9",
  BANG_DAN_LIST: "10",
  NATIONAL_DEBT_DETAIL: "11",
}),
  (exports.TEXT_TYPE_ENUM = Y),
  (exports.jumpMap = X),
  (exports.mpReplaceSpecialTags = tt),
  (exports.newsParser = function (t, e) {
    if (!t || !t.type) return t;
    var n = t.type;
    if ("text" === n) {
      var a = tt(t.desc);
      return {
        type: n,
        tag: t.tag || "",
        tagClass: t.tag ? "text-".concat(t.tag) : "news-normal",
        content: "function" == typeof e ? e(a) : a,
      };
    }
    if ("snptb" === n) {
      var i = !1;
      return (
        (t.tableGroup = t.desc.split("#").map(function (t) {
          var e = t.split("|"),
            n = e.shift();
          e.pop();
          var r = [];
          return (
            n && ((r.rank = +n), (i = !0)),
            e.reduce(function (t, n, a) {
              return t && n
                ? (r.push({ text: tt(t.text || t), colSpan: t.colSpan || 1 }),
                  a === e.length - 1 && r.push({ text: tt(n), colSpan: 1 }),
                  { text: n, colSpan: 1 })
                : n
                ? void 0
                : (a === e.length - 1 &&
                    r.push({
                      text: tt(t.text || t),
                      colSpan: (t.colSpan || 1) + 1,
                    }),
                  { text: t.text || t, colSpan: (t.colSpan || 1) + 1 });
            }),
            r
          );
        })),
        (t.showTableIcon =
          i ||
          t.tableGroup.every(function (t, e) {
            return (
              e < 2 ||
              (!(t.length > 2) &&
                t.every(function (t, e) {
                  return (
                    0 !== e ||
                    (0 === e &&
                      t.text &&
                      t.text[0] &&
                      t.text[0].text.length <= 4)
                  );
                }))
            );
          })),
        t
      );
    }
    return "emphasis" === n
      ? ((t.contentList = t.list.map(function (t) {
          return {
            type: "text",
            tag: "",
            tagClass: "news-normal emphasis-content",
            content: tt(t),
          };
        })),
        t)
      : "module" === n
      ? ((t.moduleInfo = (t.id && t.id.split("#")) || []), t)
      : "live" === t.type && t.live
      ? {
          extra_info: t,
          thumbnails: [
            r.forceHttpsAdvanced(
              t.live_public_img || t.live_public_thumbnail || ""
            ),
          ],
          id: t.vid,
          type: t.type,
          desc: t.desc,
        }
      : t;
  }),
  (exports.parse_1 = j),
  (exports.processReportParsedData = function t(n) {
    var r =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "blue",
      a = [],
      i = "dark" === r || "black" === r,
      o = i ? "#a1a3a6" : "#000000",
      s = i ? "#f1f0f5" : "#262e40",
      c = i ? "#262e40" : "#dcdfe6",
      l = i ? "#171d28" : "#f1f7ff",
      u = i ? "#191e27" : "#f9fafe",
      d = i ? "#191e27" : "#e9ebf0";
    return (
      n.forEach(function (n) {
        var i = n.type,
          p = n.tagName,
          f = n.attributes,
          v = n.content,
          h = n.children;
        if ("text" === i) a.push({ type: i, text: J(v) });
        else if ("element" === i && "style" !== p) {
          h && (h = t(h, r));
          var g = {};
          f &&
            f.map(function (t) {
              return (g[t.key] = t.value);
            }),
            /[\u4e00-\u9fa5]/.test(p)
              ? (h.unshift({ type: "text", text: J("<".concat(p, ">")) }),
                a.push.apply(a, e(h)))
              : ("div" === p && "ths_news_text" === g.id
                  ? (g.style = "color: ".concat(
                      o,
                      ";font-size: 36rpx;text-align: justify;letter-spacing: 0.5px;"
                    ))
                  : "div" === p && "news-snptb" === g.class
                  ? (g.style = "overflow-x: scroll;margin: 30px 0;")
                  : "table" === p
                  ? ((g.style = ""
                      .concat(
                        g.style || "",
                        "width: 100%;border-collapse: separate;color: "
                      )
                      .concat(s, ";border: 1px solid ")
                      .concat(c, ";border-radius: 8px;")),
                    h.map(function (t, e) {
                      return (
                        "tr" === t.name
                          ? 0 === e
                            ? (t.attrs.style = ""
                                .concat(
                                  t.attrs.style || "",
                                  "background-color: "
                                )
                                .concat(l, ";"))
                            : e % 2 == 0 &&
                              (t.attrs.style = ""
                                .concat(
                                  t.attrs.style || "",
                                  "background-color: "
                                )
                                .concat(u, ";"))
                          : "tbody" === t.name &&
                            t.children.map(function (e, n) {
                              return (
                                "tr" === e.name &&
                                  (0 === n
                                    ? (t.attrs.style = ""
                                        .concat(
                                          t.attrs.style || "",
                                          "background-color: "
                                        )
                                        .concat(l, ";"))
                                    : n % 2 == 1 &&
                                      (e.attrs.style = ""
                                        .concat(
                                          e.attrs.style || "",
                                          "background-color: "
                                        )
                                        .concat(u, ";"))),
                                t
                              );
                            }),
                        t
                      );
                    }))
                  : "tr" === p
                  ? h.map(function (t, e) {
                      return (
                        "td" === t.name &&
                          (0 === e &&
                            (t.attrs.style = "".concat(
                              t.attrs.style || "",
                              "text-align: left;"
                            )),
                          e !== h.length - 1 &&
                            (t.attrs.style = ""
                              .concat(
                                t.attrs.style || "",
                                "border-right: 1px solid "
                              )
                              .concat(d, ";"))),
                        t
                      );
                    })
                  : "td" === p
                  ? ((g.style = "".concat(
                      g.style || "",
                      "text-align: right;word-break: keep-all;padding: 4px 2px;width: fit-content;max-width: 220px;box-sizing: border-box;word-wrap: break-word;text-align: left;"
                    )),
                    h.map(function (t) {
                      return (
                        "div" === t.name &&
                          (t.attrs.style = "".concat(
                            t.attrs.style || "",
                            "display: inline;font-size: 16px;"
                          )),
                        t
                      );
                    }))
                  : "img" === p &&
                    (g.style = "".concat(g.style || "", "max-width: 100%;")),
                a.push({ type: "node", name: p || "", attrs: g, children: h }));
        }
      }),
      a
    );
  }),
  (exports.splitStringWithHTMLTags = function (e) {
    if ("string" != typeof e || e.length <= 0) return [];
    var n,
      r = new RegExp("<[^>]+>(.*?)<\\/[^>]+>", "gs"),
      a = [],
      i = e.matchAll(r),
      o = 0,
      s = t(i);
    try {
      for (s.s(); !(n = s.n()).done; ) {
        var c = n.value,
          l = e.slice(o, c.index);
        "" !== l.trim() && a.push(l), a.push(c[0]), (o = c.index + c[0].length);
      }
    } catch (t) {
      s.e(t);
    } finally {
      s.f();
    }
    var u = e.slice(o);
    return "" !== u.trim() && a.push(u), a;
  });
