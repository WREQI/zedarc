var e = require("../../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  n = [
    "abbr",
    "b",
    "code",
    "del",
    "em",
    "i",
    "ins",
    "label",
    "q",
    "span",
    "strong",
    "sub",
    "sup",
    "a",
  ],
  r = {
    name: "TokenRenderer",
    options: { virtualHost: !0 },
    props: {
      tokens: {
        type: Array,
        default: function () {
          return [];
        },
      },
      processedElements: {
        type: Array,
        default: function () {
          return [];
        },
      },
      theme: { required: !0, type: String, default: "white" },
      pageName: { type: String, default: "" },
      newsId: { type: String, default: "" },
      position: { type: [Number, String], default: 0 },
      mdRuleFn: { type: Function, default: function () {} },
      curRequestId: { required: !1, type: String, default: "" },
      curSessionId: { required: !1, type: String, default: "" },
      subScene: { required: !1, type: String, default: "" },
      enableHrTag: { type: Boolean, default: !1 },
      streamTextAnimation: { type: Boolean, default: !0 },
      streamInitialColor: { type: String, default: "" },
      streamFinalColor: { type: String, default: "currentColor" },
      streamDurationMs: { type: Number, default: 550 },
      streamSettleFallbackMs: { type: Number, default: 1e3 },
    },
    components: {
      CardComponent: function () {
        return "./markdown-renderer/card.js";
      },
      StreamingText: function () {
        return "./StreamingText.js";
      },
      TokenRenderer: function () {
        return Promise.resolve().then(function () {
          return o;
        });
      },
    },
    setup: function (r, a) {
      var o = a.emit;
      return {
        processedTokens: t.computed(function () {
          return r.processedElements && r.processedElements.length > 0
            ? r.processedElements
            : r.tokens && 0 !== r.tokens.length
            ? (function n(r) {
                for (
                  var a =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    o = [],
                    l = 0;
                  l < r.length;
                  l++
                ) {
                  var s = r[l];
                  if (s && s.type)
                    if ("inline" === s.type && s.children)
                      o.push.apply(o, e(i(s.children)));
                    else if ("text" === s.type)
                      o.push({
                        type: "text",
                        content: s.content,
                        hasNewline: s.content && s.content.includes("\n"),
                      });
                    else if ("code_inline" === s.type)
                      o.push({ type: "code_inline", content: s.content });
                    else if ("hr" === s.type)
                      a && o.push({ tag: "hr", selfClosing: !0 });
                    else if ("fence" === s.type)
                      o.push({
                        tag: "pre",
                        children: [
                          {
                            tag: "code",
                            children: [{ type: "text", content: s.content }],
                          },
                        ],
                      });
                    else if (s.type.endsWith("_open")) {
                      for (
                        var c = { tag: s.tag, children: [] },
                          u = s.type.replace("_open", "_close"),
                          p = 1,
                          d = l + 1,
                          m = [];
                        d < r.length && p > 0;

                      ) {
                        var h = r[d];
                        if (h.type === s.type) p += 1;
                        else if (h.type === u && 0 === (p -= 1)) break;
                        m.push(h), (d += 1);
                      }
                      m.length > 0 && (c.children = n(m, a)),
                        o.push(c),
                        (l = d);
                    } else
                      "custom_component" === s.type
                        ? o.push({ type: "card", item: s.info })
                        : t.StockBridge.aegisReportEvent(
                            "[stock-ai-markdown] unknown simple token",
                            { ext4: JSON.stringify(s || {}) }
                          );
                }
                return o;
              })(r.tokens, r.enableHrTag)
            : [];
        }),
        getTagClass: function (e) {
          return e ? "_".concat(e) : "";
        },
        getH5TagName: function (e) {
          return e ? (n.includes(e) ? "span" : "div") : "span";
        },
        handleLinkClick: function (e) {
          o("linkClick", e);
        },
        handleQuoteLinkClick: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          o("quoteLinkClick", e);
        },
        getALinkClass: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          if (!e) return [];
          if (e.startsWith("http://") || e.startsWith("https://"))
            return ["_smart-service-universal-link _external-link"];
          if (e.startsWith("tel:")) return ["_tel-link"];
          if (e.startsWith("/pages"))
            return ["_smart-service-universal-link _pages-link"];
          if (e.startsWith("qqstock://")) {
            var t = e.replace("qqstock://", "").split("?")[0].split("/")[0];
            return ["_qqstock-link", t ? "_".concat(t) : ""];
          }
          return [];
        },
        checkLinkShow: function (e) {
          return e.href && e.href.startsWith("qqstock");
        },
      };
    },
  };
function i(e) {
  for (
    var n = [],
      r = function (r) {
        var o = e[r];
        if ("html_inline" === o.type)
          if (o.content.startsWith("<card>"))
            if (
              r + 2 < e.length &&
              "text" === e[r + 1].type &&
              "html_inline" === e[r + 2].type &&
              "</card>" === e[r + 2].content
            ) {
              var l = (function (e) {
                if (e.startsWith("<card>") && e.endsWith("</card>"))
                  try {
                    var t = e.slice(6, -7),
                      n = JSON.parse(t);
                    return { type: "card", props: n.props || n };
                  } catch (e) {
                    return null;
                  }
                return null;
              })(o.content + e[r + 1].content + e[r + 2].content);
              l
                ? (n.push(l), (r += 2))
                : n.push({ type: "text", content: o.content });
            } else n.push({ type: "text", content: o.content });
          else n.push({ type: "text", content: o.content });
        else if ("text" === o.type)
          o.content &&
            n.push({
              type: "text",
              content: o.content,
              hasNewline: o.content.includes("\n"),
            });
        else if ("strong_open" === o.type) {
          for (
            var s = r + 1, c = [];
            s < e.length && "strong_close" !== e[s].type;

          )
            c.push(e[s]), (s += 1);
          var u = i(c);
          n.push({
            tag: "strong",
            children: u.length > 0 ? u : [{ type: "text", content: "" }],
          }),
            (r = s);
        } else if ("em_open" === o.type) {
          for (
            var p = r + 1, d = [];
            p < e.length && "em_close" !== e[p].type;

          )
            d.push(e[p]), (p += 1);
          var m = i(d);
          n.push({
            tag: "em",
            children: m.length > 0 ? m : [{ type: "text", content: "" }],
          }),
            (r = p);
        } else if ("link_open" === o.type) {
          for (
            var h = "", f = o.attrGet ? o.attrGet("href") : "", g = r + 1;
            g < e.length && "link_close" !== e[g].type;

          )
            "text" === e[g].type && (h += e[g].content), (g += 1);
          "@ref" === f
            ? /^\d+(,\d+)*$/.test(h) &&
              h.split(",").forEach(function (e) {
                n.push({
                  type: "quote_link",
                  content: e,
                  href: e,
                  dataOriginRef: h,
                });
              })
            : n.push({ type: "link", content: h, href: f }),
            (r = g);
        } else if ("image" === o.type) {
          var y = o.attrGet ? o.attrGet("src") : "",
            k = o.content || "",
            b = o.attrGet ? o.attrGet("title") : "";
          n.push({ type: "image", src: y, alt: k, title: b });
        } else
          "softbreak" === o.type || "hardbreak" === o.type
            ? n.length > 0 && "text" === n[n.length - 1].type
              ? ((n[n.length - 1].content += "\n"),
                (n[n.length - 1].hasNewline = !0))
              : n.push({ type: "text", content: "\n", hasNewline: !0 })
            : "code_inline" === o.type
            ? n.push({ type: "code_inline", content: o.content })
            : "strong_close" !== o.type &&
              t.StockBridge.aegisReportEvent(
                "[stock-ai-markdown] unknown inline token",
                { ext4: JSON.stringify(o || {}) }
              );
        a = r;
      },
      a = 0;
    a < e.length;
    a++
  )
    r(a);
  return n;
}
Array ||
  (
    t.resolveComponent("CardComponent") +
    t.resolveComponent("StreamingText") +
    t.resolveComponent("TokenRenderer")
  )();
var a = t._export_sfc(r, [
  [
    "render",
    function (n, r, i, a, o, l) {
      return {
        a: t.f(a.processedTokens, function (n, r, o) {
          return t.e(
            { a: "card" === n.type },
            "card" === n.type
              ? {
                  b: "78b3bd3f-0-" + o,
                  c: t.p({
                    item: n.item,
                    "page-name": i.pageName,
                    "news-id": i.newsId,
                    index: r,
                    theme: i.theme,
                    position: i.position,
                    curSessionId: i.curSessionId,
                    curRequestId: i.curRequestId,
                    subScene: i.subScene,
                    "md-rule-fn": i.mdRuleFn,
                  }),
                }
              : "link" === n.type
              ? {
                  e: t.o(
                    function (e) {
                      return a.handleLinkClick(n.href);
                    },
                    5753,
                    "token_".concat(r)
                  ),
                  f: "78b3bd3f-1-" + o,
                  g: t.p({
                    "tag-class": ["_a"].concat(e(a.getALinkClass(n.href))),
                    content: n.content,
                    theme: i.theme,
                    enabled: i.streamTextAnimation,
                    "initial-color": i.streamInitialColor,
                    "final-color": i.streamFinalColor,
                    "duration-ms": i.streamDurationMs,
                    "settle-fallback-ms": i.streamSettleFallbackMs,
                  }),
                }
              : "quote_link" === n.type
              ? {
                  i: t.o(
                    function (e) {
                      return a.handleQuoteLinkClick({
                        href: n.href,
                        dataId: n.content,
                        dataOriginRef: n.dataOriginRef,
                      });
                    },
                    5754,
                    "token_".concat(r)
                  ),
                  j: "78b3bd3f-2-" + o,
                  k: t.p({
                    "tag-class": "_a _quoteLink",
                    content: n.content,
                    theme: i.theme,
                    enabled: i.streamTextAnimation,
                    "initial-color": i.streamInitialColor,
                    "final-color": i.streamFinalColor,
                    "duration-ms": i.streamDurationMs,
                    "settle-fallback-ms": i.streamSettleFallbackMs,
                  }),
                }
              : "image" === n.type
              ? { m: n.src, n: n.alt, o: n.title }
              : "text" === n.type
              ? {
                  q: "78b3bd3f-3-" + o,
                  r: t.p({
                    "tag-class": n.hasNewline ? "_text_with_newline" : "",
                    content: n.content,
                    theme: i.theme,
                    enabled: i.streamTextAnimation,
                    "initial-color": i.streamInitialColor,
                    "final-color": i.streamFinalColor,
                    "duration-ms": i.streamDurationMs,
                    "settle-fallback-ms": i.streamSettleFallbackMs,
                  }),
                }
              : "code_inline" === n.type
              ? {
                  t: "78b3bd3f-4-" + o,
                  v: t.p({
                    "tag-class": "_code_inline",
                    content: n.content,
                    theme: i.theme,
                    enabled: i.streamTextAnimation,
                    "initial-color": i.streamInitialColor,
                    "final-color": i.streamFinalColor,
                    "duration-ms": i.streamDurationMs,
                    "settle-fallback-ms": i.streamSettleFallbackMs,
                  }),
                }
              : n.selfClosing
              ? { x: t.n(a.getTagClass(n.tag)) }
              : n.tag
              ? t.e(
                  { z: n.children && n.children.length > 0 },
                  n.children && n.children.length > 0
                    ? {
                        A: t.o(
                          function (e) {
                            return a.handleLinkClick(e);
                          },
                          5755,
                          "token_".concat(r)
                        ),
                        B: t.o(
                          function (e) {
                            return a.handleQuoteLinkClick(e);
                          },
                          5756,
                          "token_".concat(r)
                        ),
                        C: "78b3bd3f-5-" + o,
                        D: t.p({
                          "processed-elements": n.children,
                          theme: i.theme,
                          "page-name": i.pageName,
                          "news-id": i.newsId,
                          position: i.position,
                          "cur-session-id": i.curSessionId,
                          "cur-request-id": i.curRequestId,
                          "sub-scene": i.subScene,
                          "md-rule-fn": i.mdRuleFn,
                          "enable-hr-tag": i.enableHrTag,
                          "stream-text-animation": i.streamTextAnimation,
                          "stream-initial-color": i.streamInitialColor,
                          "stream-final-color": i.streamFinalColor,
                          "stream-duration-ms": i.streamDurationMs,
                          "stream-settle-fallback-ms": i.streamSettleFallbackMs,
                        }),
                      }
                    : {},
                  { E: t.n(a.getTagClass(n.tag)) }
                )
              : {},
            {
              d: "link" === n.type,
              h: "quote_link" === n.type,
              l: "image" === n.type,
              p: "text" === n.type,
              s: "code_inline" === n.type,
              w: n.selfClosing,
              y: n.tag,
              F: "token_".concat(r),
            }
          );
        }),
      };
    },
  ],
]);
wx.createComponent(a);
var o = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
