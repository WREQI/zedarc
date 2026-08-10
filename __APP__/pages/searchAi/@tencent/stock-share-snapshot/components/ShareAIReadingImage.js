var e = require("../../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../../@babel/runtime/helpers/inherits"),
  s = require("../../../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  u = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  h = Object.prototype.hasOwnProperty,
  g = Object.prototype.propertyIsEnumerable,
  f = function (e, t, i) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  p = function (e, t) {
    for (var i in t || (t = {})) h.call(t, i) && f(e, i, t[i]);
    if (c) {
      var r,
        n = a(c(t));
      try {
        for (n.s(); !(r = n.n()).done; ) {
          i = r.value;
          g.call(t, i) && f(e, i, t[i]);
        }
      } catch (e) {
        n.e(e);
      } finally {
        n.f();
      }
    }
    return e;
  },
  m = function (e, t, i) {
    return new Promise(function (r, n) {
      var s = function (e) {
          try {
            o(i.next(e));
          } catch (e) {
            n(e);
          }
        },
        a = function (e) {
          try {
            o(i.throw(e));
          } catch (e) {
            n(e);
          }
        },
        o = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(s, a);
        };
      o((i = i.apply(e, t)).next());
    });
  },
  x = require("./CanvasImage.js"),
  d = require("../../stock-news-core/utils/tools.js"),
  v = require("../../stock-news-core/utils/request/index.js"),
  y = require("../../../../../common/vendor.js"),
  b = function (e) {
    if (!e) return [];
    var t = e
      .replace(/```[\s\S]*?```/g, "")
      .replace(/`([^`]*)`/g, "$1")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
    t = t.replace(/<[^>]+>/g, "");
    for (
      var i = [], r = /\*\*([^*]+)\*\*|__([^_]+)__/g, n = 0, s = r.exec(t);
      s;

    )
      s.index > n && i.push({ text: t.slice(n, s.index), bold: !1 }),
        i.push({ text: s[1] || s[2] || "", bold: !0 }),
        (n = s.index + s[0].length),
        (s = r.exec(t));
    return (
      n < t.length && i.push({ text: t.slice(n), bold: !1 }),
      i
        .map(function (e) {
          return {
            text: e.text.replace(/(\*|_)([^*_]+)\1/g, "$2"),
            bold: e.bold,
          };
        })
        .filter(function (e) {
          return e.text.length > 0;
        })
    );
  },
  S = function (e) {
    var t = e.trim();
    return /^[-*+]\s+/.test(t) || /^\d+[、.]\s*/.test(t);
  },
  T = function (e) {
    var t = e.trim(),
      i = t.match(/^[-*+]\s+(.*)$/);
    if (i) return i[1].trim();
    var r = t.match(/^\d+[、.]\s*(.*)$/);
    return r ? r[1].trim() : "";
  },
  w = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      i = { titleSegs: [], itemSegs: [], itemSegsList: [] };
    if (!e) return i;
    var r,
      n = "",
      s = !1,
      o = a(e.split("\n"));
    try {
      for (o.s(); !(r = o.n()).done; ) {
        var u = r.value,
          l = u.trim();
        if (l) {
          var c = l.match(/^#{1,6}\s+(.*)$/);
          if (!c || n || s)
            if (S(l)) {
              s = !0;
              var h = T(l);
              if (h) {
                var g = b(h);
                if (
                  (i.itemSegsList.push(g),
                  i.itemSegs.length || (i.itemSegs = g),
                  t)
                )
                  break;
              }
            } else n || s || (n = l);
          else n = c[1].trim();
        }
      }
    } catch (e) {
      o.e(e);
    } finally {
      o.f();
    }
    return (i.titleSegs = b(n)), i;
  },
  k = function (e) {
    var t = w(e, !1);
    return { titleSegs: t.titleSegs, itemSegsList: t.itemSegsList };
  },
  I = 48,
  _ = 654,
  q = 142,
  C = 28,
  F = 28,
  A = 42,
  B = 28,
  O = 42,
  z = 400,
  D = 500,
  E = "#262E40",
  j = 32,
  W = 8,
  L = 24,
  P = 8,
  X = 12,
  M = 12,
  $ = 12,
  R = 24,
  Y = "#E6E9F0",
  H = 999,
  Q = {
    summary: {
      label: "AI总结",
      icon: "https://st.gtimg.com/design/e0eea46f684b49692a0b3d1b61fb7c11.png",
      iconSize: 32,
    },
    event: {
      label: "事件影响",
      icon: "https://st.gtimg.com/design/0b8fcedbcb0532aac258bc7572b970fa.png",
      iconSize: 30,
    },
  },
  G = (function (e) {
    n(o, e);
    var a = s(o);
    function o() {
      return i(this, o), a.apply(this, arguments);
    }
    return (
      r(o, [
        {
          key: "fetchQRCodeImage",
          value: function (e) {
            return m(
              this,
              null,
              t().mark(function i() {
                var r, n, s, a, o, c;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = 280 === this.qrWidth ? 281 : 280),
                            (n = {
                              xcx_no: 1,
                              scene: "".concat(e, ",2"),
                              page: "pages/newsCon/newsDetail/main",
                              env_version: "release",
                              width: r,
                              is_hyaline: !0,
                            }),
                            (s = p({}, n)),
                            (a = {
                              app: "wzqxcx",
                              appid: "wx4ffb369b6881ee5e",
                              check: 11,
                              openid: y.StockBridge.getStorage("_qluin"),
                              fskey: y.StockBridge.getStorage("_qlskey"),
                            }),
                            (n = u(s, l(a))),
                            (t.next = 5),
                            v.request(
                              "https://wzq.tenpay.com/svr/ads/ad_comm_service/get_xcx_unlimited_qrcode",
                              n,
                              { method: "GET", isShowToast: !1 }
                            )
                          );
                        case 5:
                          return (
                            (o = t.sent),
                            (c = (o || { image_data: "" }).image_data),
                            t.abrupt(
                              "return",
                              ((this.qrWidth = r),
                              "data:image/png;base64,".concat(c))
                            )
                          );
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  },
                  i,
                  this
                );
              })
            );
          },
        },
        {
          key: "segmentsToPlainText",
          value: function (e) {
            return (e || [])
              .map(function (e) {
                return e.text;
              })
              .join("");
          },
        },
        {
          key: "wrapText",
          value: function (e, t, i, r) {
            return this.formatContent(e, r, H, t, i, !1);
          },
        },
        {
          key: "getTitleTextX",
          value: function () {
            return I + P + X;
          },
        },
        {
          key: "getTitleTextWidth",
          value: function () {
            return _ - (this.getTitleTextX() - I);
          },
        },
        {
          key: "getItemTextX",
          value: function (e) {
            var t = this.measureText(e, B, z);
            return I + t + 8;
          },
        },
        {
          key: "getItemTextWidth",
          value: function (e) {
            return _ - (e - I);
          },
        },
        {
          key: "measureTitleTextMetrics",
          value: function (e) {
            var t,
              i,
              r = this.getCanvasInstance().getContext("2d");
            r.font = "".concat(D, " ").concat(F, "px ").concat(this.fontFamily);
            var n = (null == e ? void 0 : e.charAt(0)) || "国",
              s = r.measureText(n),
              a = null != (t = s.actualBoundingBoxAscent) ? t : 0.8 * F,
              o = a + (null != (i = s.actualBoundingBoxDescent) ? i : 0.2 * F),
              u = Math.max(0, (A - o) / 2);
            return { textYOffset: u, inkCenterFromLineTop: u + a / 2 };
          },
        },
        {
          key: "getTitleDotY",
          value: function (e, t) {
            return (
              e + this.measureTitleTextMetrics(t).inkCenterFromLineTop - P / 2
            );
          },
        },
        {
          key: "measureTitleBlock",
          value: function (e) {
            var t = this.wrapText(e, F, D, this.getTitleTextWidth());
            return {
              lines: t,
              textX: this.getTitleTextX(),
              height: t.length * A,
            };
          },
        },
        {
          key: "measureItemBlock",
          value: function (e, t) {
            var i = "".concat(t, "."),
              r = this.getItemTextX(i),
              n = this.wrapText(e, B, z, this.getItemTextWidth(r));
            return {
              lines: n,
              index: t,
              prefix: i,
              textX: r,
              height: n.length * O,
            };
          },
        },
        {
          key: "measureAiSection",
          value: function (e) {
            var t,
              i,
              r,
              n = this;
            if (
              !(null == (t = null == e ? void 0 : e.titleSegs)
                ? void 0
                : t.length) &&
              !(null == (i = null == e ? void 0 : e.itemSegsList)
                ? void 0
                : i.length)
            )
              return { height: 0, drawBlocks: [] };
            var s = [],
              a = j,
              o = !!(null == (r = e.titleSegs) ? void 0 : r.length);
            if (o) {
              a += L;
              var u = this.measureTitleBlock(
                this.segmentsToPlainText(e.titleSegs)
              );
              s.push(p({ kind: "title", marginTop: L }, u)), (a += u.height);
            }
            return (
              (e.itemSegsList || []).forEach(function (e, t) {
                var i;
                a += i = 0 === t ? (o ? M : L) : $;
                var r = n.measureItemBlock(n.segmentsToPlainText(e), t + 1);
                s.push(p({ kind: "item", marginTop: i }, r)), (a += r.height);
              }),
              { height: a, drawBlocks: s }
            );
          },
        },
        {
          key: "appendSectionDrawItems",
          value: function (e, t, i, r, n) {
            var s = this,
              a = Q[t],
              o = a.iconSize || j,
              u = r + Math.floor((j - o) / 2),
              l = r + Math.floor((j - C) / 2);
            e.push({
              type: "image",
              url: "".concat(a.icon, "?t=").concat(n),
              width: o,
              height: o,
              x: I,
              y: u,
            }),
              e.push({
                type: "text",
                fontSize: C,
                fontWeight: D,
                color: E,
                text: a.label,
                x: I + j + W,
                y: l,
              });
            var c = r + j;
            return (
              this.measureAiSection(i).drawBlocks.forEach(function (t) {
                if (((c += t.marginTop), "title" === t.kind)) {
                  var i = t.lines[0] || "",
                    r = s.measureTitleTextMetrics(i).textYOffset,
                    n = s.getTitleDotY(c, i);
                  return (
                    e.push({
                      type: "rect",
                      fill: E,
                      width: P,
                      height: P,
                      x: I,
                      y: n,
                      round: [4, 4, 4, 4],
                    }),
                    t.lines.forEach(function (i, n) {
                      e.push({
                        type: "text",
                        fontSize: F,
                        fontWeight: D,
                        color: E,
                        text: i,
                        x: t.textX,
                        y: c + n * A + r,
                      });
                    }),
                    void (c += t.lines.length * A)
                  );
                }
                t.lines.forEach(function (i, r) {
                  0 === r &&
                    e.push({
                      type: "text",
                      fontSize: B,
                      fontWeight: z,
                      color: E,
                      text: t.prefix,
                      x: I,
                      y: c,
                    }),
                    e.push({
                      type: "text",
                      fontSize: B,
                      fontWeight: z,
                      color: E,
                      text: i,
                      x: t.textX,
                      y: c,
                    }),
                    (c += O);
                });
              }),
              c
            );
          },
        },
        {
          key: "measureBottomSectionHeight",
          value: function (e) {
            return 48 * e.length + 38 + 40 + 12 + 73 + 172;
          },
        },
        {
          key: "renderContent",
          value: function (e) {
            return m(
              this,
              null,
              t().mark(function i() {
                var r,
                  n,
                  s,
                  a,
                  o,
                  u,
                  l,
                  c,
                  h,
                  g,
                  f,
                  p,
                  m,
                  x,
                  v,
                  y,
                  b,
                  S,
                  T,
                  w,
                  C,
                  F,
                  A,
                  B,
                  O;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ((this.initOffscreenCanvas(750, 36), e)) {
                            t.next = 2;
                            break;
                          }
                          throw new Error("参数错误");
                        case 2:
                          for (
                            r = e.id,
                              n = e.source,
                              s = e.publish_time,
                              a = e.summary,
                              o = void 0 === a ? "" : a,
                              u = e.event_impact,
                              l = void 0 === u ? "" : u,
                              c = e.title,
                              h = k(o),
                              g = k(l),
                              f = !(
                                !h.titleSegs.length && !h.itemSegsList.length
                              ),
                              p = !(
                                !g.titleSegs.length && !g.itemSegsList.length
                              ),
                              m = this.formatContent(c, 628, 10, 32, 500, !1),
                              x = 0,
                              f && (x += this.measureAiSection(h).height),
                              f && p && (x += R + 1 + R),
                              p && (x += this.measureAiSection(g).height),
                              v = q + x + this.measureBottomSectionHeight(m),
                              this.initOffscreenCanvas(750, v),
                              y = Date.now(),
                              b = [
                                {
                                  type: "rect",
                                  fill: "#F5F6FA",
                                  round: [16, 16, 16, 16],
                                },
                                {
                                  type: "image",
                                  url: "https://st.gtimg.com/design/2fe8944194722e1d6d1c1e650bff66b7.png?t=".concat(
                                    y
                                  ),
                                  width: 750,
                                  height: 745,
                                },
                              ],
                              S = q,
                              f &&
                                (S = this.appendSectionDrawItems(
                                  b,
                                  "summary",
                                  h,
                                  S,
                                  y
                                )),
                              f &&
                                p &&
                                ((S += R),
                                b.push({
                                  type: "rect",
                                  fill: Y,
                                  width: _,
                                  height: 1,
                                  x: I,
                                  y: S,
                                }),
                                (S += 1 + R)),
                              p &&
                                (S = this.appendSectionDrawItems(
                                  b,
                                  "event",
                                  g,
                                  S,
                                  y
                                )),
                              S += 37,
                              T = 48 * m.length + 38,
                              b.push({
                                type: "rect",
                                fill: "#DCDFE6",
                                width: 6,
                                height: T,
                                x: 48,
                                y: S,
                              }),
                              S += 3,
                              w = 0;
                            w < m.length;
                            w++
                          )
                            b.push({
                              type: "text",
                              fontSize: 32,
                              fontWeight: 500,
                              color: "#475166",
                              text: m[w],
                              x: 74,
                              y: S,
                            }),
                              (S += 48);
                          return (
                            (S += 12),
                            b.push({
                              type: "text",
                              fontSize: 24,
                              color: "#98A0B3",
                              text: n,
                              x: 74,
                              y: S,
                            }),
                            (C = this.measureText(n, 24, 400)),
                            (F = d.getFormattedTime(s)),
                            b.push({
                              type: "text",
                              fontSize: 24,
                              color: "#98A0B3",
                              text: F,
                              x: 98 + C,
                              y: S,
                            }),
                            (S += 73),
                            b.push({
                              type: "rect",
                              fill: "#DCDFE6",
                              width: _,
                              height: 1,
                              x: I,
                              y: S,
                            }),
                            (A = S + 24),
                            (S += 51),
                            (B =
                              "https://st.gtimg.com/design/c91dbc264689fc58c07cef135769fe68.png?t=".concat(
                                y
                              )),
                            b.push({
                              type: "image",
                              url: B,
                              width: 203,
                              height: 40,
                              x: 48,
                              y: S,
                            }),
                            (S += 64),
                            b.push({
                              type: "text",
                              fontSize: 24,
                              color: "#262E40AA",
                              text: "长按识别小程序码，即可阅读原文",
                              x: 48,
                              y: S,
                            }),
                            b.push({
                              type: "rect",
                              fill: "#FFFFFF",
                              width: 148,
                              height: 148,
                              x: 554,
                              y: A,
                              round: [74, 74, 74, 74],
                            }),
                            (t.next = 23),
                            this.fetchQRCodeImage(r)
                          );
                        case 23:
                          return (
                            (O = t.sent),
                            b.push({
                              type: "image",
                              url: O,
                              width: 128,
                              height: 128,
                              x: 564,
                              y: A + 10,
                            }),
                            (t.next = 27),
                            this.draw(b)
                          );
                        case 27:
                          return t.abrupt("return", t.sent);
                        case 28:
                        case "end":
                          return t.stop();
                      }
                  },
                  i,
                  this
                );
              })
            );
          },
        },
      ]),
      o
    );
  })(x.CanvasImage);
(exports.ShareAIReadingImage = G),
  (exports.parseAiContentField = function (t) {
    if (!t) return null;
    if ("object" == e(t)) return t;
    if ("string" == typeof t)
      try {
        return JSON.parse(t);
      } catch (e) {
        return null;
      }
    return null;
  }),
  (exports.parseTitleAndAllItems = k),
  (exports.parseTitleAndFirstItem = function (e) {
    var t = w(e, !0);
    return { titleSegs: t.titleSegs, itemSegs: t.itemSegs };
  });
