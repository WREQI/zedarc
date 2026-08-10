require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  a = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  h = function (e, t) {
    for (var n in t || (t = {})) l.call(t, n) && u(e, n, t[n]);
    if (o) {
      var i,
        a = r(o(t));
      try {
        for (a.s(); !(i = a.n()).done; ) {
          n = i.value;
          c.call(t, n) && u(e, n, t[n]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  p = function (e, t) {
    return a(e, s(t));
  },
  d = require("../../../../../../common/vendor.js"),
  f = require("../../../../markdown-it/lib/index.js");
function m(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = h(
      {
        componentPrefix: "card",
        startMarker: ":::",
        endMarker: ":::",
        componentValidator: function (e) {
          return !0;
        },
        propsParser: function (e) {
          try {
            return JSON.parse(e);
          } catch (e) {
            return {};
          }
        },
      },
      t
    ),
    r = function (e) {
      var t = {};
      return e.trim()
        ? (e.split(/\s+(?=\w+:)/).forEach(function (e) {
            var n = e.indexOf(":");
            if (!(n <= 0)) {
              var r = e.substring(0, n).trim(),
                i = e.substring(n + 1).trim();
              ((i.startsWith('"') && i.endsWith('"')) ||
                (i.startsWith("'") && i.endsWith("'"))) &&
                (i = i.slice(1, -1)),
                "true" === i
                  ? (i = !0)
                  : "false" === i
                  ? (i = !1)
                  : isNaN(Number(i)) || "" === i || (i = Number(i)),
                (t[r] = i);
            }
          }),
          t)
        : t;
    },
    i = function (e) {
      var t = e.match(/^\s*([a-zA-Z-]+)\s*(.*)/);
      if (t && !e.trim().startsWith(n.componentPrefix)) {
        var i = t[1];
        return i ? { comp_id: i, props: r(t[2] || "") } : null;
      }
      var a = e.match(new RegExp("^\\s*".concat(n.componentPrefix, "\\s*")));
      if (a) {
        var s = e.substring(a[0].length),
          o = (function (e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                n = 0,
                r = -1,
                i = t;
              i < e.length;
              i++
            )
              if ("{" === e[i]) -1 === r && (r = i), (n += 1);
              else if ("}" === e[i] && 0 === (n -= 1) && -1 !== r)
                return { content: e.substring(r, i + 1), start: r, end: i + 1 };
            return null;
          })(s);
        if (o && "" === s.substring(o.end).trim()) {
          var l = (function (e) {
            try {
              var t = e.trim().replace(/\s+/g, " ");
              return (
                t.startsWith("{") || (t = "{".concat(t)),
                t.endsWith("}") || (t = "".concat(t, "}")),
                (t = (t = t.replace(
                  /([{,]\s*)([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g,
                  '$1"$2":'
                )).replace(/'/g, '"')),
                n.propsParser(t)
              );
            } catch (e) {
              return null;
            }
          })(o.content);
          if (!l) return null;
          var c = l.comp_id;
          return c ? { comp_id: c, props: l.props } : null;
        }
      }
      return null;
    };
  e.block.ruler.before(
    "fence",
    "custom_component",
    function (e, t, r, a) {
      if (t >= r) return !1;
      var s = Math.min(t + 1, r),
        o = e.getLines(t, s, 0, !1).trim();
      if (!o) return !1;
      var l = o.match(
        new RegExp(
          "^".concat(n.startMarker, "\\s*(.+?)\\s*").concat(n.endMarker, "$")
        )
      );
      if (!l) return !1;
      var c = i(l[1]);
      if (!c) return !1;
      if (a) return !0;
      var u = e.push("custom_component", "", 0);
      return (u.block = !0), (u.info = c), (u.map = [t, s]), (e.line = s), !0;
    },
    { alt: ["paragraph", "reference", "blockquote", "list"] }
  ),
    e.inline.ruler.before(
      "emphasis",
      "custom_component_inline",
      function (e, t) {
        var r = e.pos,
          a = e.posMax;
        if (r + n.startMarker.length >= a) return !1;
        if (e.src.slice(r, r + n.startMarker.length) !== n.startMarker)
          return !1;
        var s = e.src.indexOf(n.endMarker, r + n.startMarker.length);
        if (-1 === s) return !1;
        var o = e.src.slice(r + n.startMarker.length, s),
          l = i(o);
        if (!l) return !1;
        if (!t) {
          var c = e.push("custom_component_inline", "", 0);
          (c.info = l), (c.markup = n.startMarker);
        }
        return (e.pos = s + n.endMarker.length), !0;
      }
    );
}
function v(e, t) {
  return 0 === t || "\n" === e[t - 1];
}
function g(e) {
  return /[0-9A-Za-z_]/.test(e);
}
function k(e, t) {
  for (var n = 0, r = t - 1; r >= 0 && "\\" === e[r]; ) (n += 1), (r -= 1);
  return n % 2 == 1;
}
function b(e) {
  if (!e) return e;
  var t = (function (e) {
      if (!e) return e;
      for (var t = -1, n = 0; n < e.length; n++)
        k(e, n) || ("[" === e[n] && (t = n));
      if (-1 === t) return e;
      var r = e.slice(t);
      return /^\[[^\]]*\]\([^)]*\)/.test(r)
        ? e
        : /^\[[^\]]*\]\([^)]*$/.test(r) || /^\[[^\]]*$/.test(r)
        ? e.slice(0, t)
        : e;
    })(e),
    n = (function (e) {
      for (
        var t = !1, n = !1, r = 0, i = 0, a = 0, s = 0, o = 0, l = -1, c = 0;
        c < e.length;

      )
        "\\" === e[c] && c + 1 < e.length && !n
          ? (c += 2)
          : t || n || !v(e, c) || "```" !== e.slice(c, c + 3)
          ? t
            ? (c += 1)
            : "`" !== e[c]
            ? n
              ? (c += 1)
              : "**" !== e.slice(c, c + 2)
              ? "__" !== e.slice(c, c + 2)
                ? "~~" !== e.slice(c, c + 2)
                  ? "*" !== e[c]
                    ? ("_" !== e[c] || ((o += 1), (l = c)), (c += 1))
                    : ((s += 1), (c += 1))
                  : ((a += 1), (c += 2))
                : ((i += 1), (c += 2))
              : ((r += 1), (c += 2))
            : ((n = !n), (c += 1))
          : ((t = !t), (c += 3));
      var u = "";
      if ((n && (u += "`"), s % 2 == 1 && (u += "*"), o % 2 == 1)) {
        var h = l > 0 ? e[l - 1] : "",
          p = l + 1 < e.length ? e[l + 1] : "";
        (g(h) && g(p)) || (u += "_");
      }
      return (
        a % 2 == 1 && (u += "~~"),
        i % 2 == 1 && (u += "__"),
        r % 2 == 1 && (u += "**"),
        u
      );
    })(
      (t = (function (e) {
        for (var t = !1, n = 0; n < e.length; )
          if (v(e, n) && "```" === e.slice(n, n + 3))
            for (t = !t; n < e.length && "\n" !== e[n]; ) n += 1;
          else n += 1;
        return t ? "".concat(e, "\n```\n") : e;
      })(t))
    );
  return t + n;
}
var y = (function () {
  function i() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    t(this, i),
      (this.options = h(
        { componentPrefix: "card", startMarker: ":::", endMarker: ":::" },
        e
      )),
      (this.md = null),
      (this.lastContent = ""),
      (this.lastProcessedContent = ""),
      (this.stableRenderList = []),
      (this.contentMd5Cache = new Map()),
      (this.idSequence = 0),
      (this.elementFingerprints = new Map()),
      this.initMarkdownIt();
  }
  return (
    n(i, [
      {
        key: "initMarkdownIt",
        value: function () {
          var e,
            t = this;
          (this.md = new f.MarkdownIt({
            html: !1,
            linkify: !1,
            typographer: !0,
            breaks: !0,
          })),
            (null == (e = this.options) ? void 0 : e.enableHrTag) ||
              (this.md.renderer.rules.hr = function () {
                return "";
              }),
            this.md.use(m, this.options),
            [
              "paragraph_open",
              "list_item_open",
              "ordered_list_open",
              "bullet_list_open",
              "heading_open",
              "link_open",
              "blockquote_open",
              "table_open",
              "th_open",
              "td_open",
              "tr_open",
              "html_inline",
              "hr",
            ].forEach(function (e) {
              var n =
                t.md.renderer.rules[e] ||
                function (e, t, n, r, i) {
                  return i.renderToken(e, t, n);
                };
              t.md.renderer.rules[e] = function (t, r, i, a, s) {
                if ("html_inline" === e) {
                  var o = t[r].content;
                  o.startsWith("<font") &&
                    o.endsWith(">") &&
                    (t[r].content = o.replace(
                      /<font\s+color\s*=\s*(['"]?)([\w#-]+)\1\s*>/gi,
                      '<font class="$2">'
                    ));
                } else
                  (t[r].attrs = t[r].attrs || []),
                    t[r].attrs.push(["class", "_".concat(t[r].tag)]);
                return n(t, r, i, a, s);
              };
            }),
            this.options.mdRuleFn && this.options.mdRuleFn(this.md),
            (this.md.renderer.rules.table_open = function () {
              return "<div class='_table-wrapper'><table class='_table'>";
            }),
            (this.md.renderer.rules.table_close = function () {
              return "</table></div>";
            });
        },
      },
      {
        key: "generateId",
        value: function () {
          return ""
            .concat(Date.now(), "_")
            .concat(Math.random().toString(36).substr(2, 9));
        },
      },
      {
        key: "generateStableId",
        value: function () {
          return "stable_"
            .concat(this.idSequence + 1, "_")
            .concat(Math.random().toString(36).substr(2, 6));
        },
      },
      {
        key: "calculateContentFingerprint",
        value: function (e) {
          for (var t = 0, n = 0; n < e.length; n++)
            (t = (t << 5) - t + e.charCodeAt(n)), (t |= 0);
          return t.toString(36);
        },
      },
      {
        key: "isHeadingToken",
        value: function (e) {
          return "heading_open" === e.type;
        },
      },
      {
        key: "shouldSplitContentGroup",
        value: function (e, t) {
          if (0 === t) return !1;
          var n = e[t],
            r = e[t - 1];
          return (
            !!this.isHeadingToken(n) ||
            ("paragraph_open" === n.type && "paragraph_close" === r.type)
          );
        },
      },
      {
        key: "groupTokensIntoContentSections",
        value: function (e) {
          for (var t = [], n = [], r = 0; r < e.length; r++) {
            var i = e[r];
            "custom_component" !== i.type
              ? (this.shouldSplitContentGroup(e, r) &&
                  n.length > 0 &&
                  (t.push({ type: "content", tokens: n }), (n = [])),
                n.push(i))
              : (n.length > 0 &&
                  (t.push({ type: "content", tokens: n }), (n = [])),
                t.push({ type: "component", token: i }));
          }
          return n.length > 0 && t.push({ type: "content", tokens: n }), t;
        },
      },
      {
        key: "calculateElementFingerprint",
        value: function (e) {
          if ("content" === e.type) {
            var t = e.content || "",
              n = t.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi) || [],
              r = t.replace(/<[^>]*>/g, "").trim(),
              i = {
                headings: n.map(function (e) {
                  return e.replace(/<[^>]*>/g, "").trim();
                }),
                textLength: r.length,
                firstWords: r.split(/\s+/).slice(0, 5).join(" "),
                lastWords: r.split(/\s+/).slice(-3).join(" "),
              };
            return this.calculateContentFingerprint(JSON.stringify(i));
          }
          if ("component" === e.type) {
            var a = JSON.stringify(e.props || {}),
              s = ""
                .concat(e.compId, "_")
                .concat(a, "_")
                .concat(e.inline ? "inline" : "block");
            return this.calculateContentFingerprint(s);
          }
          return "unknown";
        },
      },
      {
        key: "findMatchingElement",
        value: function (e, t) {
          for (
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              r = this.calculateElementFingerprint(e),
              i = n;
            i < t.length;
            i++
          ) {
            var a = t[i];
            if (r === this.calculateElementFingerprint(a))
              return { element: a, index: i };
          }
          if ("content" === e.type)
            for (
              var s = (e.content || "").replace(/<[^>]*>/g, "").trim(), o = n;
              o < t.length;
              o++
            ) {
              var l = t[o];
              if ("content" === l.type) {
                var c = (l.content || "").replace(/<[^>]*>/g, "").trim();
                if (s.includes(c) && c.length > 10)
                  return { element: l, index: o };
                var u = e.content.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi) || [],
                  h = l.content.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi) || [];
                if (
                  u.length > 0 &&
                  h.length > 0 &&
                  u[0].replace(/<[^>]*>/g, "").trim() ===
                    h[0].replace(/<[^>]*>/g, "").trim()
                )
                  return { element: l, index: o };
              }
            }
          return null;
        },
      },
      {
        key: "parseIncremental",
        value: function (e) {
          if (e === this.lastContent) return this.stableRenderList;
          if (!e || "" === e.trim())
            return (
              (this.lastContent = e),
              (this.stableRenderList = []),
              this.stableRenderList
            );
          var t = this.hideIncompleteComponentMarkers(e);
          return t === this.lastProcessedContent
            ? this.stableRenderList
            : e.startsWith(this.lastContent) && this.lastContent.length > 0
            ? this.handleIncrementalUpdate(t, e)
            : this.handleFullReparse(t, e);
        },
      },
      {
        key: "hideIncompleteComponentMarkers",
        value: function (e) {
          for (
            var t = this.options.startMarker, n = this.options.endMarker, r = 0;
            r < e.length;

          ) {
            var i = e.indexOf(t, r);
            if (-1 === i) break;
            var a = e.slice(i + t.length);
            if (this.isComponentMarkerStart(a)) {
              var s = e.indexOf(n, i + t.length);
              if (-1 === s) return e.slice(0, i);
              r = s + n.length;
            } else r = i + t.length;
          }
          return e;
        },
      },
      {
        key: "isComponentMarkerStart",
        value: function (e) {
          var t = e.trimStart();
          return (
            t.startsWith("card ") ||
            t.startsWith("card{") ||
            t.match(/^c-\w+/) ||
            (this.options.componentPrefix &&
              t.startsWith(this.options.componentPrefix))
          );
        },
      },
      {
        key: "handleIncrementalUpdate",
        value: function (e, t) {
          var n;
          if (e === this.lastProcessedContent) return this.stableRenderList;
          if (
            e.slice(
              (null == (n = this.lastProcessedContent) ? void 0 : n.length) || 0
            ).length < 50 &&
            this.couldBeIncompleteToken(e)
          )
            return this.handlePartialReparse(e, t);
          try {
            var r = this.parseMarkdown(e),
              i = this.parseTokensToRenderList(r),
              a = this.mapToExistingElements(i, this.stableRenderList);
            return (
              (this.lastContent = t),
              (this.lastProcessedContent = e),
              (this.stableRenderList = a),
              this.stableRenderList
            );
          } catch (n) {
            return this.handleFullReparse(e, t);
          }
        },
      },
      {
        key: "couldBeIncompleteToken",
        value: function (e) {
          var t = e.split("\n");
          t[t.length - 1];
          var n = this.options.startMarker,
            r = this.options.endMarker,
            i = t.slice(-3).join("\n");
          return (
            (i.match(new RegExp(a(n), "g")) || []).length >
            (i.match(new RegExp(a(r), "g")) || []).length
          );
          function a(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
        },
      },
      {
        key: "handlePartialReparse",
        value: function (t, n) {
          var r = this.findSafeReparsePoint(t);
          if (!(r > 0 && r < t.length)) return this.handleFullReparse(t, n);
          var i = t.slice(0, r),
            a = t.slice(r),
            s = this.parseMarkdown(i),
            o = this.parseTokensToRenderList(s),
            l = this.mapToExistingElements(o, this.stableRenderList);
          if (a.trim())
            try {
              var c = this.parseMarkdown(a),
                u = this.parseTokensToRenderList(c);
              this.stableRenderList = [].concat(e(l), e(u));
            } catch (e) {
              this.stableRenderList = l;
            }
          else this.stableRenderList = l;
          return (
            (this.lastContent = n),
            (this.lastProcessedContent = t),
            this.stableRenderList
          );
        },
      },
      {
        key: "findSafeReparsePoint",
        value: function (e) {
          for (
            var t = e.split("\n"),
              n = this.options.startMarker,
              r = this.options.endMarker,
              i = t.length - 1;
            i >= 0;
            i--
          ) {
            var a = t[i];
            if ("" === a.trim() && i > 0) {
              var s = t[i - 1];
              if ("" !== s.trim() && !s.includes(n))
                return t.slice(0, i + 1).join("\n").length;
            }
            if (a.match(/^#+\s/) && !a.includes(n))
              return t.slice(0, i).join("\n").length;
            if (a.includes(r)) return t.slice(0, i + 1).join("\n").length;
          }
          return 0.8 * e.length;
        },
      },
      {
        key: "handleFullReparse",
        value: function (e, t) {
          try {
            var n = this.parseMarkdown(e),
              r = this.parseTokensToRenderList(n),
              i = this.mapToExistingElements(r, this.stableRenderList);
            return (
              (this.lastContent = t),
              (this.lastProcessedContent = e),
              (this.stableRenderList = i),
              this.stableRenderList
            );
          } catch (n) {
            return (
              (this.lastContent = t),
              (this.lastProcessedContent = e),
              (this.stableRenderList = []),
              this.stableRenderList
            );
          }
        },
      },
      {
        key: "mapToExistingElements",
        value: function (e, t) {
          for (var n = [], r = 0, i = 0; i < e.length; i++) {
            var a = e[i],
              s = this.findMatchingElement(a, t, r);
            if (s) {
              var o = p(h({}, a), { id: s.element.id });
              n.push(o), (r = s.index + 1);
            } else {
              var l = p(h({}, a), { id: this.generateStableId() });
              n.push(l);
            }
          }
          return n;
        },
      },
      {
        key: "resetIncrementalState",
        value: function () {
          (this.lastContent = ""),
            (this.lastProcessedContent = ""),
            (this.stableRenderList = []),
            this.contentMd5Cache.clear(),
            (this.idSequence = 0),
            this.elementFingerprints.clear();
        },
      },
      {
        key: "createComponentItem",
        value: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.info || {};
          return {
            type: "component",
            comp_id: n.comp_id,
            props: n.props || {},
            id: this.generateId(),
            inline: t,
          };
        },
      },
      {
        key: "createContentItem",
        value: function (e) {
          if (!e || 0 === e.length) return null;
          var t = this.md.renderer.render(e, this.md.options, {});
          return t.trim()
            ? { type: "content", content: t, id: this.generateId() }
            : null;
        },
      },
      {
        key: "hasInlineComponents",
        value: function (e) {
          var t = function e(t) {
            return (
              "custom_component_inline" === t.type ||
              (!!t.children &&
                t.children.some(function (t) {
                  return e(t);
                }))
            );
          };
          return Array.isArray(e) ? e.some(t) : t(e);
        },
      },
      {
        key: "processTokenWithInlineComponents",
        value: function (t) {
          var n = this;
          if (!t.children) {
            var r = this.createContentItem([t]);
            return r ? [r] : [];
          }
          var i = [],
            a = [],
            s = function () {
              if (a.length > 0) {
                var r = p(h({}, t), { children: e(a) }),
                  s = n.createContentItem([r]);
                s && i.push(s), (a = []);
              }
            };
          return (
            t.children.forEach(function (e) {
              "custom_component_inline" === e.type
                ? (s(), i.push(n.createComponentItem(e, !0)))
                : a.push(e);
            }),
            s(),
            i
          );
        },
      },
      {
        key: "parseTokensToRenderList",
        value: function (t) {
          var n,
            i = this,
            a = [],
            s = this.groupTokensIntoContentSections(t),
            o = r(s);
          try {
            var l = function () {
              var t = n.value;
              if ("component" === t.type)
                a.push(i.createComponentItem(t.token, !1));
              else if ("content" === t.type) {
                var r = t.tokens,
                  s = r.filter(function (e) {
                    return i.hasInlineComponents(e);
                  });
                if (0 === s.length) {
                  var o = i.createContentItem(r);
                  o && a.push(o);
                } else {
                  var l = 0;
                  if (
                    (s.forEach(function (t) {
                      var n = r.indexOf(t),
                        s = r.slice(l, n),
                        o = i.processTokenWithInlineComponents(t);
                      if (
                        s.length > 0 ||
                        (o.length > 0 && "content" === o[0].type)
                      ) {
                        var c = [];
                        if (
                          (s.length > 0 && c.push.apply(c, e(s)),
                          o.length > 0 && "content" === o[0].type)
                        ) {
                          var u = o[0].content,
                            h = "";
                          c.length > 0 &&
                            (h += i.md.renderer.render(c, i.md.options, {})),
                            (h += u).trim() &&
                              a.push({
                                type: "content",
                                content: h,
                                id: i.generateId(),
                              }),
                            a.push.apply(a, e(o.slice(1)));
                        } else {
                          if (c.length > 0) {
                            var p = i.createContentItem(c);
                            p && a.push(p);
                          }
                          a.push.apply(a, e(o));
                        }
                      } else a.push.apply(a, e(o));
                      l = n + 1;
                    }),
                    l < r.length)
                  ) {
                    var c = r.slice(l),
                      u = i.createContentItem(c);
                    u && a.push(u);
                  }
                }
              }
            };
            for (o.s(); !(n = o.n()).done; ) l();
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
          if (0 === a.length && t.length > 0) {
            var c = this.createContentItem(t);
            c && a.push(c);
          }
          return a;
        },
      },
      {
        key: "prepareStreamingContent",
        value: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.isStreaming,
            r = void 0 !== n && n,
            i = e || "";
          return (
            (i = this.hideIncompleteComponentMarkers(i)), r && (i = b(i)), i
          );
        },
      },
      {
        key: "parseMarkdown",
        value: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.isStreaming,
            r = void 0 !== n && n,
            i = e;
          return (
            r && (i = this.prepareStreamingContent(i, { isStreaming: !0 })),
            i
              ? (i.endsWith("\n") || (i = "".concat(i, "\n")),
                this.md.parse(i, {}))
              : []
          );
        },
      },
      {
        key: "parse",
        value: function (e) {
          var t = this.parseMarkdown(e);
          return this.parseTokensToRenderList(t);
        },
      },
      {
        key: "parseMarkdownToTokens",
        value: function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.parseMarkdown(e, t);
        },
      },
    ]),
    i
  );
})();
function C() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return new y(e);
}
function M(e) {
  var t = d.StockBridge.ENV === d.EnvTypeEnum.MP,
    n = d.ref(null),
    r = function (t) {
      var n;
      if (t && t.includes("qqstock://StockDetail")) {
        var r = "";
        try {
          var i = t.match(/info=([^&]*)/);
          if (i) {
            var a = decodeURIComponent(i[1]),
              s = JSON.parse(a);
            r = null != (n = null == s ? void 0 : s.code) ? n : "";
          }
        } catch (e) {}
        d.StockBridge.report("".concat(e.pageName, ".content_stock_click"), {
          stockid: r,
          newsid: e.newsId,
        });
      }
    },
    i = function (e) {
      var t = e.target.closest("a");
      if (t) {
        var n = t.getAttribute("href");
        r(n);
      }
    };
  return {
    contentRefs: n,
    registerClickEvent: function () {
      t ||
        (n.value &&
          n.value.forEach(function (e) {
            e.addEventListener("click", i);
          }));
    },
    unRegisterClickEvent: function () {
      t ||
        (n.value &&
          n.value.forEach(function (e) {
            e.removeEventListener("click", i);
          }));
    },
    handleHrefClickListener: r,
  };
}
new y();
var _ = {
  name: "MarkdownRenderer",
  components: {
    TokenRenderer: function () {
      return "../TokenRenderer.js";
    },
  },
  props: {
    content: { type: String, default: "" },
    useMpHtml: { type: Boolean, default: !1 },
    streamingDebounce: { type: Number, default: 100 },
    pageName: { type: String, default: "" },
    newsId: { type: String, default: "" },
    mdRuleFn: { type: Function, default: function () {} },
    curRequestId: { required: !1, type: String, default: "" },
    curSessionId: { required: !1, type: String, default: "" },
    subScene: { required: !1, type: String, default: "" },
    theme: { required: !0, type: String },
    position: { required: !0, type: Number },
    enableHrTag: { type: Boolean, default: !1 },
    streamTextAnimation: { type: Boolean, default: !0 },
    streamInitialColor: { type: String, default: "" },
    streamFinalColor: { type: String, default: "currentColor" },
    streamDurationMs: { type: Number, default: 550 },
    streamSettleFallbackMs: { type: Number, default: 1e3 },
    isStreaming: { type: Boolean, default: !1 },
  },
  setup: function (e, t) {
    var n = t.emit,
      r = d.StockBridge.ENV === d.EnvTypeEnum.MP,
      i = d.ref(!1),
      a = d.ref([]),
      s = d.ref([]),
      o = d.ref(!1),
      l = d.ref(!1),
      c = d.ref(!1),
      u = d.ref(""),
      h = null,
      p = null,
      f = "",
      m = "",
      v = M(e),
      g = v.contentRefs,
      k = (v.registerClickEvent, v.unRegisterClickEvent);
    d.onUnmounted(function () {
      k();
    });
    var b = function () {
        var t = {
          componentPrefix: "card",
          startMarker: ":::",
          endMarker: ":::",
          mdRuleFn: e.mdRuleFn,
        };
        h = C(t);
      },
      y = function (t) {
        var n = String(t || "");
        (c.value = Boolean(m && n.startsWith(m) && n.length > m.length)),
          (s.value = h.parseMarkdownToTokens(n, {
            isStreaming: e.isStreaming,
          })),
          (m = n);
      },
      _ = function (t) {
        h || b(),
          (f = t),
          e.streamingDebounce <= 0
            ? y(t)
            : p ||
              (y(t),
              (p = setTimeout(function () {
                (p = null), f !== m && y(f);
              }, e.streamingDebounce)));
      },
      S = d.computed(function () {
        return a.value.filter(function (e) {
          return "component" === e.type;
        }).length;
      }),
      R = d.computed(function () {
        return a.value.filter(function (e) {
          return "content" === e.type;
        }).length;
      });
    return (
      d.watch(
        function () {
          return e.content;
        },
        function (e) {
          h || b(), _(e);
        },
        { immediate: !0 }
      ),
      {
        renderList: a,
        markdownTokens: s,
        isLoading: o,
        isStreamingMode: l,
        isStreamTextAnimating: c,
        componentCount: S,
        contentBlockCount: R,
        parseContentIncremental: _,
        resetStreamingState: function () {
          h && h.resetIncrementalState(),
            (l.value = !1),
            (c.value = !1),
            (u.value = ""),
            (a.value = []),
            p && (clearTimeout(p), (p = null)),
            (f = ""),
            (m = "");
        },
        onMpLinktap: function (e) {
          n("mp-link-click", e);
        },
        isMp: r,
        isLite: !1,
        contentRefs: g,
        canCopyLink: i,
        handleContentClick: function (e) {
          n("content-click", e);
        },
        onMBTIvalueChange: function (e) {
          n("MBTIvalueChange", e);
        },
        generateFunctionItemId: function (t) {
          return "".concat(e.position, "_").concat(t);
        },
      }
    );
  },
  data: function () {
    return { contexObj: {} };
  },
  created: function () {
    (this.contexObj.requestId = this.curRequestId),
      (this.contexObj.sessionId = this.curSessionId),
      (this.contexObj.subScene = this.subScene);
  },
};
Array || d.resolveComponent("TokenRenderer")();
var S = d._export_sfc(_, [
  [
    "render",
    function (e, t, n, r, i, a) {
      return {
        a: d.o(function (t) {
          return e.$emit("linkClick", t);
        }, 5390),
        b: d.o(function (t) {
          return e.$emit("quoteLinkClick", t);
        }, 5391),
        c: d.p({
          tokens: r.markdownTokens,
          theme: n.theme,
          "page-name": n.pageName,
          "news-id": n.newsId,
          position: n.position,
          "cur-session-id": n.curSessionId,
          "cur-request-id": n.curRequestId,
          "sub-scene": n.subScene,
          "md-rule-fn": n.mdRuleFn,
          "enable-hr-tag": n.enableHrTag,
          "stream-text-animation":
            n.streamTextAnimation && r.isStreamTextAnimating,
          "stream-initial-color": n.streamInitialColor,
          "stream-final-color": n.streamFinalColor,
          "stream-duration-ms": n.streamDurationMs,
          "stream-settle-fallback-ms": n.streamSettleFallbackMs,
        }),
      };
    },
  ],
]);
wx.createComponent(S);
var R = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWFpLW1hcmtkb3duL2NvbXBvbmVudHMvbWFya2Rvd24tcmVuZGVyZXIvbXAudnVl =
  R),
  (exports.createMarkdownParser = C),
  (exports.useLinkClickHooks = M);
