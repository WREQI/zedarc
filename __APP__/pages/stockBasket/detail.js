var t,
  e,
  n = require("../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../@babel/runtime/helpers/createClass"),
  r = require("../../@babel/runtime/helpers/slicedToArray"),
  s = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../@babel/runtime/helpers/typeof"),
  o = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  c = Object.defineProperty,
  l = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  h = Object.getOwnPropertySymbols,
  d = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  g = function (t, e, n) {
    return e in t
      ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  f = function (t, e) {
    for (var n in e || (e = {})) d.call(e, n) && g(t, n, e[n]);
    if (h) {
      var a,
        r = o(h(e));
      try {
        for (r.s(); !(a = r.n()).done; ) {
          n = a.value;
          p.call(e, n) && g(t, n, e[n]);
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    }
    return t;
  },
  m = function (t, e, n) {
    return g(t, "symbol" != i(e) ? e + "" : e, n);
  },
  v = function (t, e, n) {
    return new Promise(function (a, r) {
      var s = function (t) {
          try {
            o(n.next(t));
          } catch (t) {
            r(t);
          }
        },
        i = function (t) {
          try {
            o(n.throw(t));
          } catch (t) {
            r(t);
          }
        },
        o = function (t) {
          return t.done ? a(t.value) : Promise.resolve(t.value).then(s, i);
        };
      o((n = n.apply(t, e)).next());
    });
  },
  w = require("../../common/vendor.js"),
  b = require("../../utils/hqWSHelper.js"),
  k = require("@tencent/stock-hq-data/index.js"),
  x = require("throttle-debounce/esm/index.js"),
  y = require("@tencent/wzq-lite-basket/api/StockBasketAPI.js"),
  C = require("@tencent/stock-news-core/utils/request/index.js"),
  S = require("@tencent/stock-news-core/utils/tools.js"),
  T = require("@tencent/stock-news-core/hooks/useUserProtocol.js");
function P() {
  return w.wx$1
    ? {
        appid: "wx4ffb369b6881ee5e",
        openid: w.wx$1.getStorageSync("_qluin"),
        fskey: w.wx$1.getStorageSync("_qlskey"),
        access_token: w.wx$1.getStorageSync("_qlskey"),
        check: 11,
        app: "wzqxcx",
      }
    : {};
}
function q(t, e) {
  return v(
    this,
    null,
    s().mark(function n() {
      var a, r, i;
      return s().wrap(function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              return (
                (a = t.id),
                (r = [
                  {
                    act: e ? "wla" : "wld",
                    ids: [a],
                    timestamp: Math.floor(Date.now() / 1e3),
                  },
                ]),
                (i = f({ seq: JSON.stringify(r) }, P())),
                n.abrupt(
                  "return",
                  C.request(
                    "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
                    i,
                    { method: "get" }
                  )
                )
              );
            case 2:
            case "end":
              return n.stop();
          }
      }, n);
    })
  );
}
function I(t, e) {
  return v(
    this,
    null,
    s().mark(function n() {
      var a;
      return s().wrap(function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              return (
                (a = f({ status: e, symbol: t }, P())),
                n.abrupt(
                  "return",
                  C.request(
                    "https://proxy.finance.qq.com/cgi/cgi-bin/zxgapi/usertips/set",
                    a,
                    { method: "get" }
                  )
                )
              );
            case 2:
            case "end":
              return n.stop();
          }
      }, n);
    })
  );
}
var D = w.ref(!1);
var B = { exports: {} };
B.exports = {
  wxml: function (t) {
    var e,
      n,
      a = t.info,
      s = t.kLineImage,
      i = t.ranking,
      o = "";
    try {
      var c = null == (e = null == i ? void 0 : i.data) ? void 0 : e.slice(-1),
        l = r(c, 1)[0],
        u = null == (n = null == l ? void 0 : l.data) ? void 0 : n.changePct;
      void 0 === u && (u = 0);
      var h = "flat";
      +u > 0 ? (h = "up") : +u < 0 && (h = "down"),
        (u = u > 0 ? "+".concat(u, "%") : "".concat(u, "%")),
        (o =
          '<text class="lastMonthTag">近一月累计收益</text>\n            <text class="lastMonthPct '
            .concat(h, '">')
            .concat(u, "</text>"));
    } catch (t) {}
    var d,
      p = i.avgChangePct,
      g = "";
    if (p) {
      var f = "flat";
      +p > 0 ? (f = "up") : +p < 0 && (f = "down"),
        (p = p > 0 ? "+".concat(p, "%") : "".concat(p, "%")),
        (g =
          '\n        <view class="riseContainer">\n          <text class="jrzd">今日涨跌</text>\n          <text class="jrzdPct '
            .concat(f, '">')
            .concat(p, "</text>\n        </view>"));
    }
    return (
      s &&
        (d = '<image class="klineImage" src="'.concat(
          s,
          '" mode="aspectFill"></image>'
        )),
      '<view class="marketHeadlineContainer">\n      <image class="bigImageBg" src="'
        .concat(
          a.bigImg ||
            "https://st.gtimg.com/design/854b38667d4de8bdc68ef22ba0af1997.png",
          '" mode="aspectFill"></image>\n      <image class="imageBgCover" src="https://st.gtimg.com/design/81703f0e3c8243c0e80ffbd5cc5e87fb.png">'
        )
        .concat(a.name, '</image>\n      <text class="gdName">')
        .concat(a.name, "</text>\n      ")
        .concat(
          g,
          '\n      <view class="klineBgView">\n        <view class="lastMonth">\n          '
        )
        .concat(o, "\n        </view>\n        ")
        .concat(d, "\n      </view>\n    </view>")
    );
  },
  style: {
    marketHeadlineContainer: {
      width: 480,
      height: 384,
      flexDirection: "column",
      backgroundColor: "#fff",
      alignItems: "center",
    },
    imageBgCover: { width: 480, height: 178, top: 0, left: 0 },
    gdName: {
      position: "absolute",
      width: 432,
      height: 44,
      top: 24,
      left: 24,
      fontSize: 32,
      lineHeight: "1.375em",
      color: "#FFFFFFE5",
    },
    bigImageBg: {
      width: 480,
      height: 384,
      position: "absolute",
      top: 0,
      left: 0,
    },
    klineBgView: {
      width: 480,
      height: 252,
      backgroundColor: "#fff",
      position: "absolute",
      left: 0,
      top: 132,
    },
    lastMonth: {
      height: 42,
      width: 432,
      marginLeft: 24,
      marginTop: 12,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    lastMonthTag: {
      width: 126,
      height: 24,
      fontSize: 18,
      lineHeight: "1.3em",
      color: "#7A8499",
    },
    up: { color: "#e63535" },
    down: { color: "#2db955" },
    flat: { color: "#7a8499" },
    lastMonthPct: {
      width: 300,
      height: 42,
      marginLeft: 7,
      fontSize: 28,
      lineHeight: "1.5em",
      fontWeight: "500",
    },
    klineImage: {
      width: 432,
      height: 172,
      position: "absolute",
      left: 24,
      top: 64,
      backgroundColor: "#f00",
    },
    riseContainer: {
      width: 448,
      height: 28,
      position: "absolute",
      top: 77,
      left: 24,
      flexDirection: "row",
      alignItems: "center",
    },
    jrzd: {
      width: 72,
      height: 24,
      fontSize: 18,
      lineHeight: "1.33em",
      color: "#FFFFFF99",
    },
    jrzdPct: {
      width: 300,
      height: 42,
      marginLeft: 7,
      fontSize: 28,
      lineHeight: "1.5em",
      fontWeight: "500",
    },
  },
};
var A = (null == B.exports ? {} : B.exports).default || B.exports,
  R = Object.freeze(
    Object.defineProperty({ __proto__: null, default: A }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  L = (function () {
    function t() {
      n(this, t),
        m(this, "canvas", null),
        m(this, "canvasWidth", 480),
        m(this, "canvasHeight", 384),
        m(this, "basketDescLineNum", 0),
        m(this, "dpr", 1),
        m(this, "descRows", []),
        m(this, "commonLeft", 24);
    }
    return (
      a(t, [
        {
          key: "getCanvasInstance",
          value: function () {
            return this.canvas;
          },
        },
        {
          key: "formatContent",
          value: function (t, e, n) {
            var a =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "400 27.75px sans-serif",
              r = this.getCanvasInstance().getContext("2d");
            r.font = a;
            for (var s = t.split(""), i = [], o = "", c = 0; c < s.length; ) {
              var l = s[c];
              r.measureText(o).width + r.measureText(l).width < e
                ? (o += l)
                : (i.push(o), (o = l)),
                (c += 1);
            }
            if ((i.push(o), i.length > n)) {
              for (
                var u = "...",
                  h = r.measureText(u).width,
                  d = i[n - 1],
                  p = "",
                  g = 0,
                  f = 0;
                f < d.length;
                f++
              ) {
                var m = d[f],
                  v = r.measureText(m).width;
                if (!(g + v + h < e)) {
                  p += u;
                  break;
                }
                (p += m), (g += v), f === d.length - 1 && (p += u);
              }
              i.splice(n - 1, 1, p);
            }
            return i;
          },
        },
        {
          key: "canvasToTempFilePath",
          value: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return new Promise(function (n, a) {
              w.wx$1.canvasToTempFilePath({
                canvas: t.canvas,
                width: t.canvasWidth,
                height: t.canvasHeight,
                destWidth: t.canvasWidth,
                destHeight: t.canvasHeight,
                fileType: e.fileType || "png",
                quality: e.quality || 1,
                success: n,
                fail: a,
              });
            });
          },
        },
        {
          key: "drawBackground",
          value: function () {
            var t = this,
              e = this.getCanvasInstance(),
              n = e.getContext("2d");
            return new Promise(function (a, r) {
              n.save();
              var s = e.createImage();
              (s.onload = function () {
                n.drawImage(s, 0, 0, t.canvasWidth, t.canvasHeight),
                  n.restore(),
                  a();
              }),
                (s.onerror = function () {
                  r();
                }),
                t.basketDescLineNum <= 1
                  ? (s.src =
                      "https://st.gtimg.com/design/c278c8494630ccec6db2a69c6fa42343.png")
                  : (s.src =
                      "https://st.gtimg.com/design/f194694ec95f33bc5598dcd22c8b1abb.png");
            });
          },
        },
        {
          key: "roundRect",
          value: function (t, e, n, a, r) {
            var s =
                !(arguments.length > 5 && void 0 !== arguments[5]) ||
                arguments[5],
              i =
                arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              o = this.getCanvasInstance().getContext("2d");
            r < 0 ||
              (o.beginPath(),
              o.arc(t + r, e + r, r, Math.PI, (3 * Math.PI) / 2),
              o.arc(t + n - r, e + r, r, (3 * Math.PI) / 2, 0),
              o.arc(t + n - r, e + a - r, r, 0, Math.PI / 2),
              o.arc(t + r, e + a - r, r, Math.PI / 2, Math.PI),
              o.lineTo(t, e + r),
              i && o.stroke(),
              s && o.fill());
          },
        },
        {
          key: "formatDesc",
          value: function (t) {
            var e = t.desc;
            if (e) {
              var n = this.formatContent(e, 432, 2, "400 24px stockFont");
              return (this.basketDescLineNum = n.length), n;
            }
            return [];
          },
        },
        {
          key: "drawDesc",
          value: function (t) {
            var e = this.getCanvasInstance().getContext("2d");
            if (t && t.length > 0) {
              e.save();
              (e.textBaseline = "top"),
                (e.font = "400 24px stockFont"),
                (e.textAlign = "left"),
                (e.fillStyle = "#262E40CC");
              for (
                var n = 1 === this.basketDescLineNum ? 40 : 30,
                  a = t.length > 2 ? 2 : t.length,
                  r = 0;
                r < a;
                r++
              ) {
                var s = t[r];
                e.fillText(s, this.commonLeft, n), (n += 36);
              }
              e.restore();
            }
          },
        },
        {
          key: "drawTotalNum",
          value: function (t) {
            var e = t.total,
              n = "500 20px stockFont";
            if (e > 0) {
              var a = this.getCanvasInstance().getContext("2d"),
                r = this.getCanvasInstance().getContext("2d");
              r.font = n;
              var s = r.measureText(e).width;
              a.save(),
                (a.textBaseline = "top"),
                (a.font = "400 20px stockFont"),
                (a.textAlign = "left"),
                (a.fillStyle = "#262E4099"),
                a.fillText("共", this.commonLeft, 336.85),
                a.fillText("只股票", 48 + s + 4, 336.85),
                a.restore(),
                a.save(),
                (a.textBaseline = "top"),
                (a.font = n),
                (a.textAlign = "left"),
                (a.fillStyle = "#262E40"),
                a.fillText("".concat(e), 48, 336.85),
                a.restore();
            }
          },
        },
        {
          key: "drawRiseAndFall",
          value: function (t, e) {
            var n = this.getCanvasInstance().getContext("2d"),
              a = t.avgChangePct,
              r = 141,
              s = 173;
            if (
              (this.basketDescLineNum <= 1 && ((r = 129), (s = 161)),
              n.save(),
              (n.textBaseline = "top"),
              (n.font = "400 20px stockFont"),
              (n.textAlign = "left"),
              (n.fillStyle = "#262E4099"),
              n.fillText("当日涨跌", this.commonLeft, r),
              e)
            ) {
              n.fillText("近一月涨跌", 223, r);
            }
            n.restore(),
              this.drawRiseAndFallValue(a, this.commonLeft, s),
              e && this.drawRiseAndFallValue(e, 223, s);
          },
        },
        {
          key: "drawRiseAndFallValue",
          value: function (t, e, n) {
            var a = this.getCanvasInstance().getContext("2d"),
              r = "".concat(t, "%"),
              s = "#7a8499";
            t > 0
              ? ((r = "+".concat(t, "%")), (s = "#e63535"))
              : t < 0 && (s = "#2db955"),
              a.save(),
              (a.textBaseline = "top"),
              (a.font = "bold 44px stockFont"),
              (a.textAlign = "left"),
              (a.fillStyle = s),
              a.fillText(r, e, n + 8),
              a.restore();
          },
        },
        {
          key: "drawStockList",
          value: function (t) {
            return v(
              this,
              null,
              s().mark(function e() {
                var n, a, r, i, o, c, l, u, h;
                return s().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = t.data),
                            (r = 1 === this.basketDescLineNum ? 235 : 247),
                            !(a && a.length > 0))
                          ) {
                            e.next = 19;
                            break;
                          }
                          i = 0;
                        case 3:
                          if (!(i < a.length && i < 3)) {
                            e.next = 19;
                            break;
                          }
                          if (
                            ((e.prev = 4),
                            (o = null == (n = a[i]) ? void 0 : n.data),
                            (c = o.cnName),
                            !(l = o.symbol) || !c)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (u = l.slice(0, 2)),
                            (h = ["sz", "sh", "hk", "us"].indexOf(u)),
                            (u = -1 === h ? u : "".concat(h)),
                            (e.next = 12),
                            this.drawStock(c, u, i, r)
                          );
                        case 12:
                          e.next = 16;
                          break;
                        case 14:
                          (e.prev = 14), (e.t0 = e.catch(4));
                        case 16:
                          i++, (e.next = 3);
                          break;
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[4, 14]]
                );
              })
            );
          },
        },
        {
          key: "drawStock",
          value: function (t, e, n, a) {
            return v(
              this,
              null,
              s().mark(function r() {
                var i, o, c, l, u;
                return s().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (i = this.getCanvasInstance().getContext("2d")),
                            58,
                            (c = "400 22px stockFont"),
                            (i.font = c),
                            30,
                            (u = i.measureText(t).width) > 122 && (u = 122),
                            (o = (l = (154 - u - 6) / 2) + 6 + 22),
                            i.save(),
                            (i.textBaseline = "top"),
                            (i.font = c),
                            (i.textAlign = "left"),
                            (i.fillStyle = "#475166"),
                            i.fillText(
                              this.formatContent(t, 122, 1, c)[0],
                              this.commonLeft + o + 176 * n + 4 * n,
                              a + 25
                            ),
                            i.restore(),
                            (r.prev = 7),
                            (r.next = 10),
                            this.drawStockTag(
                              e,
                              this.commonLeft + l + 176 * n + 4 * n,
                              a + 28,
                              22,
                              16,
                              2
                            )
                          );
                        case 10:
                          r.next = 14;
                          break;
                        case 12:
                          (r.prev = 12), (r.t0 = r.catch(7));
                        case 14:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  this,
                  [[7, 12]]
                );
              })
            );
          },
        },
        {
          key: "drawStockTag",
          value: function (t, e, n, a, r, s) {
            var i = this;
            if (t) {
              var o = {
                  0: "https://wzq.gtimg.com/resources/shy/news/roundangle/sz.png",
                  1: "https://wzq.gtimg.com/resources/shy/news/roundangle/sh.png",
                  2: "https://wzq.gtimg.com/resources/shy/news/roundangle/hk.png",
                  3: "https://wzq.gtimg.com/resources/shy/news/roundangle/us.png",
                  uk: "https://wzq.gtimg.com/resources/shy/news/roundangle/uk.png",
                  cnjj: "https://wzq.gtimg.com/resources/shy/news/roundangle/cnjj.png",
                  kc: "https://wzq.gtimg.com/resources/shy/news/roundangle/kc.png",
                  zq: "https://wzq.gtimg.com/resources/shy/news/roundangle/zq.png",
                  nq: "https://wzq.gtimg.com/resources/shy/news/roundangle/nq.png",
                  jj: "https://wzq.gtimg.com/resources/shy/news/roundangle/cwjj.png",
                  p: "https://wzq.gtimg.com/resources/shy/news/roundangle/bk.png",
                  pt: "https://wzq.gtimg.com/resources/shy/news/roundangle/bk.png",
                  fu: "https://wzq.gtimg.com/resources/shy/news/roundangle/ft.png",
                  bj: "https://wzq.gtimg.com/resources/shy/news/roundangle/bj.png",
                  cyb: "https://wzq.gtimg.com/resources/shy/news/roundangle/cyb.png",
                  "zs-hs":
                    "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-hs.png",
                  "zs-hk":
                    "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-hk.png",
                  "zs-us":
                    "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-us.png",
                  "zs-uk":
                    "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-uk.png",
                  "zs-nq":
                    "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-nq.png",
                  "zs-hq":
                    "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-hq.png",
                  cs: "https://wzq.gtimg.com/resources/shy/news/roundangle/zs-hq.png",
                },
                c = this.getCanvasInstance(),
                l = c.getContext("2d");
              return new Promise(function (u, h) {
                l.save(), i.roundRect(e, n, a, r, s, !1, !1), l.clip();
                var d = c.createImage();
                (d.onload = function () {
                  l.drawImage(d, e, n, a, r), l.restore(), u();
                }),
                  (d.onerror = function () {
                    h();
                  }),
                  (d.src = o[t] || "");
              });
            }
          },
        },
        {
          key: "rendercontent",
          value: function (t, e, n) {
            return v(
              this,
              null,
              s().mark(function a() {
                var r = this;
                return s().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return a.abrupt(
                            "return",
                            ((this.canvas = w.toRaw(t)),
                            new Promise(function (t, a) {
                              return v(
                                r,
                                null,
                                s().mark(function r() {
                                  var i, o, c, l, u, h;
                                  return s().wrap(
                                    function (r) {
                                      for (;;)
                                        switch ((r.prev = r.next)) {
                                          case 0:
                                            return (
                                              (r.prev = 0),
                                              (i =
                                                w.wx$1.getWindowInfo() || {}),
                                              (o = i.pixelRatio),
                                              (c = void 0 === o ? "" : o),
                                              (this.dpr = c),
                                              (this.canvas.width =
                                                this.canvasWidth),
                                              (this.canvas.height =
                                                this.canvasHeight),
                                              (l = e.info),
                                              (u = e.ranking),
                                              (this.descRows =
                                                this.formatDesc(l)),
                                              (r.next = 7),
                                              this.drawBackground()
                                            );
                                          case 7:
                                            return (
                                              this.drawDesc(this.descRows),
                                              this.drawRiseAndFall(u, n),
                                              (r.next = 11),
                                              this.drawStockList(u)
                                            );
                                          case 11:
                                            return (
                                              this.drawTotalNum(u),
                                              (r.next = 14),
                                              this.canvasToTempFilePath()
                                            );
                                          case 14:
                                            return (
                                              (h = r.sent),
                                              (r.next = 17),
                                              this.canvasToTempFilePath()
                                            );
                                          case 17:
                                            (h = r.sent),
                                              t(h.tempFilePath),
                                              (r.next = 24);
                                            break;
                                          case 21:
                                            (r.prev = 21),
                                              (r.t0 = r.catch(0)),
                                              a(r.t0);
                                          case 24:
                                          case "end":
                                            return r.stop();
                                        }
                                    },
                                    r,
                                    this,
                                    [[0, 21]]
                                  );
                                })
                              );
                            }))
                          );
                        case 1:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  this
                );
              })
            );
          },
        },
      ]),
      t
    );
  })(),
  z = w.Fns || w.__CJS__import__0__$1,
  M = new k.BasketApi(),
  _ = new w.HQBridge(),
  F = new y.StockBasketAPI(_),
  j = getApp().globalData,
  H =
    (null == (e = null == (t = getApp().globalData.detect) ? void 0 : t.env)
      ? void 0
      : e.IS_PCWEIXIN) || !1,
  W = {
    components: {
      StockBasketList: function () {
        return "../newsSbg/@tencent/stock-sq/src/source/stockBasketList/index.js";
      },
      PrivacyPolicyModal: function () {
        return "../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
      },
      BasketDetail: function () {
        return "./@tencent/wzq-lite-basket/components/basketDetail.js";
      },
      LayerModal: function () {
        return "../../components/LayerModal/index.js";
      },
      basketGuideModal: function () {
        return "./@tencent/wzq-lite-basket/components/basketGuideModal.js";
      },
      PlateTrendChart: function () {
        return "./@tencent/wzq-lite-basket/components/plateTrendChart.js";
      },
      UpdateHistoryBar: function () {
        return "./@tencent/wzq-lite-basket/components/updateHistory/updateHistoryBar.js";
      },
      basketBar: function () {
        return "../newsSbg/@tencent/stock-common-bar/component/basketbar/basketBar.js";
      },
      PlateTrendChartModalContent: function () {
        return "./@tencent/wzq-lite-basket/components/plateTrendChartModalContent.js";
      },
      RelevancePlate: function () {
        return "./@tencent/wzq-lite-basket/components/relevancePlate.js";
      },
      RelatedHotNews: function () {
        return "./@tencent/wzq-lite-basket/components/news/RelatedHotNews.js";
      },
      WxSettingGuide: function () {
        return "./@tencent/wzq-lite-basket/components/guide/mp.js";
      },
    },
    provide: function () {
      return {
        hqBridge: this.hqBridge,
        stockBridge: this.stockBridge,
        didAgreeUserAgreement: this.didAgreeUserAgreement,
        onCheckUserAgreementStatus: this.onCheckUserAgreementStatus,
      };
    },
    setup: function () {
      var t,
        e = (function () {
          var t = this,
            e = w.StockBridge,
            n = function (e) {
              return v(
                t,
                null,
                s().mark(function t() {
                  return s().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              w.querySubscribeSwitch(e)
                            );
                          case 3:
                            return t.abrupt("return", t.sent.status);
                          case 6:
                            return (
                              (t.prev = 6),
                              (t.t0 = t.catch(0)),
                              t.abrupt("return", "error")
                            );
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 6]]
                  );
                })
              );
            },
            a = function () {
              return v(
                t,
                null,
                s().mark(function t() {
                  return s().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.t0 = w),
                              (t.next = 4),
                              w.getTemplateId("gudan_notice")
                            );
                          case 4:
                            return (
                              (t.t1 = t.sent),
                              (t.next = 7),
                              t.t0.subscribe.call(t.t0, "gudan_notice", t.t1)
                            );
                          case 7:
                            return (
                              (t.t2 = t.sent),
                              t.abrupt("return", "accept" === t.t2)
                            );
                          case 11:
                            return (
                              (t.prev = 11),
                              (t.t3 = t.catch(0)),
                              t.abrupt("return", !1)
                            );
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 11]]
                  );
                })
              );
            },
            r = function (e) {
              return v(
                t,
                null,
                s().mark(function t() {
                  var n;
                  return s().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              (function (t) {
                                return v(
                                  this,
                                  null,
                                  s().mark(function e() {
                                    return s().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return e.abrupt("return", I(t, !1));
                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                              })(e)
                            );
                          case 3:
                            return (
                              (n = t.sent), t.abrupt("return", 0 === n.code)
                            );
                          case 7:
                            return (
                              (t.prev = 7),
                              (t.t0 = t.catch(0)),
                              t.abrupt("return", !1)
                            );
                          case 10:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 7]]
                  );
                })
              );
            },
            i = function (e) {
              return v(
                t,
                null,
                s().mark(function t() {
                  var n;
                  return s().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              (function (t) {
                                return v(
                                  this,
                                  null,
                                  s().mark(function e() {
                                    return s().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return e.abrupt("return", I(t, !0));
                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                              })(e)
                            );
                          case 3:
                            return (
                              (n = t.sent), t.abrupt("return", 0 === n.code)
                            );
                          case 7:
                            return (
                              (t.prev = 7),
                              (t.t0 = t.catch(0)),
                              t.abrupt("return", !1)
                            );
                          case 10:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 7]]
                  );
                })
              );
            },
            o = function (n) {
              return v(
                t,
                null,
                s().mark(function t() {
                  var a, i, o, c;
                  return s().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0), (c = n.info.id), (t.next = 4), r(c)
                            );
                          case 4:
                            if (!t.sent) {
                              t.next = 8;
                              break;
                            }
                            (n.userData.tips = !1),
                              (n.userData.tipsNum -= 1),
                              n.userData.tipsNum < 0 &&
                                (n.userData.tipsNum = 0),
                              null == (a = e.toast) ||
                                a.call(e, "已取消提醒", "success"),
                              (t.next = 9);
                            break;
                          case 8:
                            null == (i = e.toast) ||
                              i.call(e, "取消失败", "error");
                          case 9:
                            t.next = 14;
                            break;
                          case 11:
                            (t.prev = 11),
                              (t.t0 = t.catch(0)),
                              null == (o = e.toast) ||
                                o.call(e, "取消失败", "error");
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 11]]
                  );
                })
              );
            },
            c = function (r) {
              return v(
                t,
                null,
                s().mark(function t() {
                  var o, c, l, u, h, d, p;
                  return s().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), w.getTemplateId("gudan_notice");
                        case 2:
                          return (h = t.sent), (t.next = 5), n(h);
                        case 5:
                          if ("unset" !== (d = t.sent) && "accept" !== d) {
                            t.next = 13;
                            break;
                          }
                          return (t.next = 9), a();
                        case 9:
                          if (t.sent) {
                            t.next = 11;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            (null == (o = e.toast) ||
                              o.call(e, "订阅失败", "error"),
                            !1)
                          );
                        case 11:
                          t.next = 15;
                          break;
                        case 13:
                          if ("reject" !== d) {
                            t.next = 15;
                            break;
                          }
                          return t.abrupt("return", ((D.value = !0), !1));
                        case 15:
                          return (
                            (p = null == (c = r.info) ? void 0 : c.id),
                            (t.next = 18),
                            i(p)
                          );
                        case 18:
                          if (!t.sent) {
                            t.next = 22;
                            break;
                          }
                          (r.userData.tips = !0),
                            (r.userData.tipsNum += 1),
                            null == (l = e.toast) ||
                              l.call(e, "已订阅提醒", "success"),
                            (t.next = 23);
                          break;
                        case 22:
                          null == (u = e.toast) ||
                            u.call(e, "订阅失败", "error");
                        case 23:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
            };
          return {
            closeFollowGuide: function () {
              D.value = !1;
            },
            showFollowGuide: D,
            clickBasketSubscribe: function (e) {
              return v(
                t,
                null,
                s().mark(function t() {
                  var n;
                  return s().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!(null == (n = e.userData) ? void 0 : n.tips)) {
                            t.next = 5;
                            break;
                          }
                          return (t.next = 3), o(e);
                        case 3:
                          t.next = 7;
                          break;
                        case 5:
                          return (t.next = 7), c(e);
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
            },
          };
        })(),
        n = T.useUserProtocol().updateShareMenu;
      return (t = f({}, e)), l(t, u({ updateShareMenu: n }));
    },
    data: function () {
      var t =
        (w.wx$1.getWindowInfo && w.wx$1.getWindowInfo()) ||
        w.wx$1.getSystemInfoSync();
      return {
        query: {},
        hqBridge: _,
        stockBridge: w.StockBridge,
        isPc: H,
        randomBg: "bg-0",
        pageType: "stockbasket",
        reportPrefix: "hq.basketdetail",
        gdId: null,
        statusBarHeight: t.statusBarHeight,
        scaleRate: 1,
        scrollTop: 0,
        navBarHeight: 0,
        watchListTop: 0,
        watchListBottom: 0,
        watchChartTop: 0,
        reachWatchListBottom: !1,
        showLoading: !1,
        isDeleted: !1,
        isDataReady: !1,
        requestFailed: !1,
        userinfo: null,
        nomore: !1,
        showPrivacyPolicy: !1,
        didAgreeUserAgreement: w.reactive({ value: !0 }),
        modalVisible: !1,
        modalVisible1: !1,
        isSharePage: !1,
        safeBottom: 0,
        safeTabBar: 0,
        isIphoneX: !1,
        rankingData: null,
        detailInfo: null,
        detailAllInfo: null,
        nickname: "",
        firstTime: !0,
        fakeTitlePositionTop: 0,
        guideVisible: !1,
        chartData: [],
        chartRange: "day",
        shareSuccess: !1,
        shareWidget: null,
        onPageShow: !1,
        chartModalVisible: !1,
        createDay: "",
        benchMark: "",
        relevancePlate: "",
        monthChangePct: null,
        isWatchListReport: !1,
        isRelevancePlateReport: !1,
        chartIntervals: [],
        quoteDate: "",
        todayChartData: [],
        otherChartData: [],
        commentCount: 0,
      };
    },
    computed: {
      isHightVersion: function () {
        var t = (getApp().globalData.systemInfo || {}).SDKVersion;
        return w.gte(t, "3.6.1");
      },
      isDisposableType: function () {
        var t;
        return 1 === (null == (t = this.detailInfo) ? void 0 : t.showType);
      },
      formatedInfo: function () {
        try {
          var t = this.detailInfo.info;
          return "" === t
            ? []
            : t.split("\n").map(function (t) {
                return t.replaceAll(" ", "&nbsp;");
              });
        } catch (t) {}
        return [];
      },
      pageStatus: function () {
        return this.isDataReady || this.requestFailed
          ? !this.isDataReady && this.requestFailed
            ? w.COMMON_PAGE_STATUS.ERROR
            : ""
          : w.COMMON_PAGE_STATUS.LOADING;
      },
      headerAlpha: function () {
        return 0 === this.watchListTop
          ? 0
          : this.scrollTop > 0
          ? this.scrollTop + this.navBarHeight <=
            (this.watchChartTop || this.watchListTop)
            ? (this.scrollTop + this.navBarHeight) /
              (this.watchChartTop || this.watchListTop)
            : (w.wx$1.setNavigationBarColor({
                frontColor: "#000000",
                backgroundColor: "#ffffff",
              }),
              1)
          : (w.wx$1.setNavigationBarColor({
              frontColor: "#ffffff",
              backgroundColor: "#000000",
            }),
            0);
      },
      showFakeTitle: function () {
        return (
          0 !== this.watchListTop &&
          0 !== this.watchListBottom &&
          this.scrollTop + this.navBarHeight > this.watchListTop &&
          this.scrollTop + this.navBarHeight < this.watchListBottom - 100
        );
      },
      headerOpacityAlpha: function () {
        return 0 === this.watchChartTop
          ? 0
          : this.scrollTop > 0
          ? this.scrollTop + this.navBarHeight <= this.watchChartTop
            ? (this.scrollTop + this.navBarHeight) / this.watchChartTop
            : 1
          : 0;
      },
      errorType: function () {
        return w.COMMON_PAGE_ERROR.EMPTY;
      },
    },
    watch: {
      isWatchListReport: function (t) {
        t &&
          this.hqBridge.report("hq.basketdetail.stocklist_brow", {
            watchlist_id: this.gdId,
          });
      },
      isRelevancePlateReport: function (t) {
        t &&
          this.hqBridge.report("hq.basketdetail.relevanceplate_brow", {
            watchlist_id: this.gdId,
          });
      },
    },
    created: function () {
      var t = this;
      (this.throttleClickAddStockBasket = x.throttle(
        1e3,
        this.clickAddStockBasket
      )),
        w.wx$1
          .createSelectorQuery()
          .in(this)
          .select("#myCanvas")
          .fields({ node: !0, size: !0, rect: !0 })
          .exec(function (e) {
            var n = ((e && e[0]) || {}).node;
            t.shareWidget = n;
          });
    },
    destroyed: function () {
      (this.shareWidget = null), this.beforeRouteLeave();
    },
    onLoad: function (t) {
      var e, n;
      this.query = t;
      var a = t.gdId,
        r = t.gid;
      (this.gdId = a || r),
        a && (this.randomBg = "bg-" + (parseInt(a.slice(-1), 10) % 3));
      try {
        var s =
            null == (n = null == (e = getApp()) ? void 0 : e.globalData)
              ? void 0
              : n.device,
          i = null == s ? void 0 : s.safeArea,
          o = s.screenHeight > i.bottom,
          c = t.__share_flag__;
        (this.isSharePage = 1 == +c), (this.safeBottom = o ? 34 : 0);
      } catch (t) {}
      this.getAuth(),
        this.unsubUserAgreementStatus(),
        this.gdId ? this.loadGdData() : (this.requestFailed = !0);
    },
    onUnload: function () {
      (this.shareWidget = null), this.beforeRouteLeave();
    },
    onShow: function () {
      var t;
      this.beforeRouteEntry(),
        w.Util.isFromPyq() &&
          w.wx$1.showModal({
            title: "",
            content:
              "当前模式部分功能不可用，可点击下方“前往小程序”享受完整内容",
            showCancel: !1,
            confirmText: "我知道了",
            success: function () {},
          });
      var e = getCurrentPages();
      if ((e && e.length <= 1 && (this.isSharePage = !0), this.shareSuccess)) {
        this.shareSuccess = !1;
        try {
          null == (t = this.$refs.basketBar) || t.shareSuccess();
        } catch (t) {}
      }
    },
    onHide: function () {
      this.beforeRouteLeave();
    },
    updated: function () {},
    onPageScroll: function (t) {
      var e = this,
        n = t.scrollTop;
      (this.scrollTop = n),
        n < 0 ||
          (w.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#watchlistTopContainer")
            .boundingClientRect(function (t) {
              var n = t.height;
              e.watchListTop = n;
            })
            .exec(),
          w.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#stockWatchList")
            .boundingClientRect(function (t) {
              var n = t.top,
                a = e.watchListBottom - e.watchListTop,
                r = w.wx$1.getWindowInfo().windowHeight;
              e.isWatchListReport = r - n > 0.67 * a && a > 0;
            })
            .exec(),
          w.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#relevancePlate")
            .boundingClientRect(function (t) {
              if (t) {
                var n = t.top,
                  a = t.height,
                  r = w.wx$1.getWindowInfo().windowHeight;
                e.isRelevancePlateReport = n + 2 * a < r;
              }
            })
            .exec(),
          w.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#stockWatchChart")
            .boundingClientRect(function (t) {
              var n = t.top;
              e.watchChartTop = Math.max(n, e.watchChartTop);
            })
            .exec(),
          0 === this.navBarHeight &&
            w.wx$1
              .createSelectorQuery()
              .in(this)
              .select("#navBar")
              .boundingClientRect(function (t) {
                var n = t.height;
                n > 0 &&
                  ((e.navBarHeight = n),
                  (e.scaleRate = (n - e.statusBarHeight) / 44));
              })
              .exec(),
          w.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#stockWatchListDetail")
            .boundingClientRect(function (t) {
              var n = t.bottom;
              e.watchListBottom = Math.max(n, e.watchListBottom);
            })
            .exec(),
          w.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#communityWrap >>> .mod-loadText")
            .boundingClientRect(function (t) {
              if (t && t.top < j.device.windowHeight)
                try {
                  e.$refs.newsCommentList.loadData();
                } catch (t) {}
            })
            .exec());
    },
    onShareAppMessage: function (t) {
      return v(
        this,
        null,
        s().mark(function e() {
          var n, a, r;
          return s().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((this.modalVisible = !1),
                      (this.modalVisible1 = !1),
                      (this.reachWatchListBottom = !0),
                      (this.shareSuccess = !0),
                      (n = f({}, this.query || {})),
                      "button" === t.from
                        ? (n.stat_data = "OkZ00p000h091")
                        : (n.stat_data = "Ocj00p000h091"),
                      (e.prev = 3),
                      !this.shareWidget)
                    ) {
                      e.next = 14;
                      break;
                    }
                    return (
                      (r = new L()),
                      (e.prev = 6),
                      (e.next = 9),
                      r.rendercontent(
                        this.shareWidget,
                        this.detailAllInfo,
                        this.monthChangePct
                      )
                    );
                  case 9:
                    (a = e.sent), (e.next = 14);
                    break;
                  case 12:
                    (e.prev = 12), (e.t0 = e.catch(6));
                  case 14:
                    return e.abrupt("return", {
                      title: this.detailInfo && "".concat(this.detailInfo.name),
                      imageUrl: a,
                      path: "pages/stockBasket/detail?".concat(
                        z.queryStringify(n)
                      ),
                    });
                  case 17:
                    (e.prev = 17), (e.t1 = e.catch(3));
                  case 19:
                    return e.abrupt("return", {
                      path: "pages/stockBasket/detail?".concat(
                        z.queryStringify(n)
                      ),
                      title:
                        this.detailInfo &&
                        "分享了【".concat(
                          this.detailInfo.name,
                          "】给你，快去看看~"
                        ),
                      mtaParams: { watchlist_id: this.gdId || "" },
                    });
                  case 20:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
            [
              [3, 17],
              [6, 12],
            ]
          );
        })
      );
    },
    onShareTimeline: function () {
      (this.modalVisible = !1), (this.modalVisible1 = !1);
      var t = f({}, this.query || {});
      return (
        (t.stat_data = "Ocj00p000h091"),
        {
          query: z.queryStringify(t),
          title:
            this.detailInfo &&
            "分享了【".concat(this.detailInfo.name, "】给你，快去看看~"),
          mtaParams: { watchlist_id: this.gdId || "" },
        }
      );
    },
    methods: {
      formatDateTime: function (t) {
        var e = t.lastIndexOf(":");
        return -1 === e ? t : t.substring(0, e);
      },
      getPercentValue: function (t) {
        return t > 0 ? "+".concat(t, "%") : "".concat(t, "%");
      },
      getStyle: function (t) {
        return t > 0 ? "up" : t < 0 ? "down" : "flat";
      },
      showGuideModal: function (t) {
        this.guideVisible = t;
      },
      onGuideConfirm: function () {
        this.guideVisible = !1;
      },
      checkUserAgreementStatus: function () {
        var t = !0;
        try {
          var e = w.StockBridge.store.protocolStatus;
          "string" == typeof e && (t = "agree" === e);
        } catch (e) {}
        return (
          (this.didAgreeUserAgreement.value = t), this.updateShareMenu(t), t
        );
      },
      subUserAgreementStatus: function () {
        this.checkUserAgreementStatus() ||
          (this.unsubUserAgreementStatus(),
          w.StockBridge.store.subscribeProtocolStatus(
            this.handleProtocolStatusChange
          ));
      },
      unsubUserAgreementStatus: function () {
        w.StockBridge.store.unsubscribeProtocolStatus(
          this.handleProtocolStatusChange
        );
      },
      handleProtocolStatusChange: function () {
        this.checkUserAgreementStatus();
      },
      onCheckUserAgreementStatus: function () {
        this.didAgreeUserAgreement.value || (this.showPrivacyPolicy = !0);
      },
      getBasketDetail_fy: function () {
        return v(
          this,
          null,
          s().mark(function t() {
            var e;
            return s().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (e = F.getUserInfo()),
                        t.abrupt(
                          "return",
                          F.request(
                            "https://testproxy.woa.com/cgi/cgi-bin/watchlist/detail?id=gd000213",
                            "get",
                            f({}, e),
                            { forceCallback: !0 }
                          )
                        )
                      );
                    case 5:
                      (t.prev = 5), (t.t0 = t.catch(0));
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 5]]
            );
          })
        );
      },
      onErrorRetry: function () {
        this.loadGdData();
      },
      loadGdData: function () {
        return v(
          this,
          null,
          s().mark(function t() {
            var e,
              n,
              a,
              r,
              i,
              o,
              c,
              l,
              u,
              h,
              d,
              p,
              g,
              f,
              m,
              v,
              b,
              k,
              x = this;
            return s().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((f = this.chartRange), !this.gdId)) {
                        t.next = 14;
                        break;
                      }
                      return (
                        (t.prev = 2),
                        (t.next = 5),
                        F.getBasketDetail({
                          id: this.gdId,
                          curvetype: this.chartRange,
                          version: w.XCXVERSION,
                        })
                      );
                    case 5:
                      (m = t.sent),
                        (v = m.data),
                        (b = m.code),
                        v && 0 === b
                          ? ((k = v.detail),
                            (this.detailAllInfo = k),
                            (this.detailInfo = null == k ? void 0 : k.info),
                            (this.rankingData = null == k ? void 0 : k.ranking),
                            (this.monthChangePct =
                              null == (e = this.rankingData)
                                ? void 0
                                : e.accChangePct1M),
                            this.loadGdLoopData(),
                            (this.isDataReady = !0),
                            (this.showLoading = !1),
                            (this.createDay =
                              null == (n = null == k ? void 0 : k.profit)
                                ? void 0
                                : n.createDay),
                            (this.benchMark =
                              null == (a = null == k ? void 0 : k.profit)
                                ? void 0
                                : a.benchmark),
                            ((null ==
                            (i = null == (r = k.minute) ? void 0 : r.nodes)
                              ? void 0
                              : i.length) ||
                              (null ==
                              (c = null == (o = k.profit) ? void 0 : o.nodes)
                                ? void 0
                                : c.length)) &&
                              ("day" === this.chartRange
                                ? ((this.chartData =
                                    (null == (l = k.minute)
                                      ? void 0
                                      : l.nodes) || []),
                                  (this.todayChartData =
                                    (null == (u = k.minute)
                                      ? void 0
                                      : u.nodes) || []),
                                  (this.chartIntervals =
                                    (null == (h = k.minute)
                                      ? void 0
                                      : h.intervals) || []),
                                  (this.benchMark =
                                    null == (d = null == k ? void 0 : k.minute)
                                      ? void 0
                                      : d.benchmark),
                                  (this.quoteDate =
                                    null == (p = null == k ? void 0 : k.minute)
                                      ? void 0
                                      : p.quoteDate))
                                : (this.chartData =
                                    (null == (g = k.profit)
                                      ? void 0
                                      : g.nodes) || []),
                              setTimeout(function () {
                                try {
                                  x.$refs.plateTrendChart.currentRangeStr ===
                                    f &&
                                    x.$refs.plateTrendChart &&
                                    x.$refs.plateTrendChart.refresh();
                                } catch (t) {}
                              }, 150)),
                            (this.relevancePlate =
                              null == k ? void 0 : k.board))
                          : ((this.isDeleted = !1),
                            (this.requestFailed = !0),
                            (this.showLoading = !0),
                            (14 !== b && 1619059404 !== b) ||
                              ((this.isDataReady = !1), (this.isDeleted = !0))),
                        (t.next = 14);
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(2)),
                        (this.isDeleted = !1),
                        (this.requestFailed = !0),
                        (this.showLoading = !0);
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[2, 11]]
            );
          })
        );
      },
      getAuth: function () {
        var t = this,
          e = w.login.getLoginInfo() || {};
        w.userinfo.get(!0, function (e) {
          t.nickname = e.nickname;
        });
        var n = e.qluin,
          a = e.qlskey;
        n &&
          a &&
          (this.userinfo = {
            qlskey: a,
            qluin: n,
            qlappid: "wx4ffb369b6881ee5e",
            appid: "wx4ffb369b6881ee5e",
            openid: n,
            fskey: a,
          });
      },
      getCommentCount: function (t) {
        this.commentCount = t;
      },
      onPutComment: function (t) {
        var e = t.id,
          n = "/pages/comment/detailView/main?nid=".concat(
            e,
            "&source=list&listname=community"
          );
        w.wx$1.navigateTo({ url: n });
      },
      onTapMore: function () {},
      getCommentUpdate: function (t) {
        var e = t.nomore;
        this.nomore = e;
      },
      onCommentSuccess: function () {},
      goBack: function () {
        w.wx$1.navigateBack();
      },
      goHome: function () {
        w.wx$1.switchTab({ url: "/pages/index/index" });
      },
      operateBasketSuccess: function (t) {
        return v(
          this,
          null,
          s().mark(function e() {
            return s().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      this.detailAllInfo = t;
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      goEdit: function () {
        var t = "/pages/comment/edit/edit?map_id=".concat(
          this.gdId,
          "&type=stockbasket"
        );
        w.wx$1.navigateTo({ url: t });
      },
      clickBarShare: function () {
        this.clickShare();
      },
      clickBarComment: function () {
        this.clickComment();
      },
      clickComment: function () {
        this.hqBridge.report("".concat(this.reportPrefix, ".comment_click"), {
          watchlist_id: this.gdId,
        });
        var t = "/pages/comment/edit/edit?map_id=".concat(
          this.gdId,
          "&type=stockbasket"
        );
        w.wx$1.navigateTo({ url: t });
      },
      clickShare: function () {
        this.hqBridge.report("".concat(this.reportPrefix, ".share_click"), {
          watchlist_id: this.gdId,
        });
      },
      onShowFullModal: function () {
        this.modalVisible = !0;
      },
      onCloseFullModal: function () {
        this.modalVisible = !1;
      },
      loadGdLoopData: function () {
        var t = this;
        this.gdLoopTimer && clearTimeout(this.gdLoopTimer),
          (this.gdLoopTimer = setTimeout(function () {
            t.loadGdData();
          }, 15e3));
      },
      subscribePushData: function () {
        return v(
          this,
          null,
          s().mark(function t() {
            var e,
              n,
              a,
              r,
              i,
              o = this;
            return s().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = this.rankingData.data),
                        (n = e.map(function (t) {
                          return t.symbol;
                        })),
                        (a = this),
                        (r = {
                          topic: "quote_qt",
                          tag: ["3", "32", "37"],
                          stockList: n
                            .filter(function (t) {
                              return !/^bj/.test(t) && !/^p/.test(t);
                            })
                            .slice(0, 2),
                        }),
                        (t.next = 6),
                        b.getInstance(r)
                      );
                    case 6:
                      ((i = t.sent).handleData = function () {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                        Array.isArray(t) && o.throttleUpdatePushData(t);
                      }),
                        (i.pull = function () {
                          a.getQTs(n);
                        });
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      beforeRouteEntry: function () {
        var t,
          e = this;
        if (
          (this.subUserAgreementStatus(),
          setTimeout(function () {
            e.isDataReady || (e.showLoading = !0);
          }, 500),
          this.firstTime)
        )
          this.firstTime = !1;
        else {
          try {
            this.$refs.newsCommentList &&
              (null == (t = this.$refs.newsCommentList) || t.updateComList());
          } catch (t) {}
          this.isDataReady && this.loadGdData();
        }
      },
      beforeRouteLeave: function () {
        this.unsubUserAgreementStatus(),
          b.hqWSHelper && b.stop(),
          this.gdLoopTimer && clearTimeout(this.gdLoopTimer);
      },
      updatePushData: function (t) {
        var e = this;
        t.forEach(function (t) {
          var n = t.symbol,
            a = t.data,
            r = a[3],
            s = a[32],
            i = a[37];
          e.rankingData.data.forEach(function (t) {
            t.symbol === n &&
              Object.assign(t, {
                turnover: i || t.turnover,
                new: r || t.new,
                changePct: s || t.changePct,
              });
          });
        });
      },
      getQTs: function (t) {
        return v(
          this,
          null,
          s().mark(function e() {
            var n,
              a,
              r = this;
            return s().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = new k.DetailApi(function (t) {
                          return r.hqBridge.request(t);
                        })),
                        (e.prev = 1),
                        (e.next = 4),
                        n.getQTs(t, { getAll: !1 })
                      );
                    case 4:
                      (a = e.sent),
                        this.rankingData.data.forEach(function (t) {
                          var e = a[t.symbol];
                          Object.assign(t, {
                            turnover: e[7],
                            new: e[3],
                            changePct: e[5],
                          });
                        }),
                        (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(1));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[1, 8]]
            );
          })
        );
      },
      clickAddStockBasket: function () {
        return v(
          this,
          null,
          s().mark(function t() {
            var e, n, a, r, i, o, c, l, u;
            return s().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (i = this.detailUserData.watched),
                        (t.prev = 1),
                        (o = [
                          {
                            act: i ? "wld" : "wla",
                            ids: [this.gdId],
                            timestamp: Math.floor(Date.now() / 1e3),
                          },
                        ]),
                        (c = { seq: JSON.stringify(o) }),
                        (t.next = 6),
                        F.updateBasketWatched(c)
                      );
                    case 6:
                      if (
                        ((l = t.sent),
                        (u = l.data),
                        0 === l.code &&
                        0 ===
                          (null ==
                          (n =
                            null == (e = null == u ? void 0 : u.record)
                              ? void 0
                              : e[0])
                            ? void 0
                            : n.code)
                          ? ((this.detailUserData.watched = !i),
                            this.hqBridge.busEmit("toggleAdded", "basket"))
                          : null == (r = (a = this.hqBridge).toast) ||
                            r.call(a, "添加自选失败", "error"),
                        !(null == u ? void 0 : u.newWatchlist))
                      ) {
                        t.next = 21;
                        break;
                      }
                      return (
                        (t.prev = 10),
                        (t.next = 13),
                        M.SetUserLabel(this.hqBridge, {
                          label: { name: "gudan_zixuan_redpoint", status: 1 },
                        })
                      );
                    case 13:
                      if (
                        ((t.t0 = +t.sent.retcode), (t.t1 = 0 == t.t0), !t.t1)
                      ) {
                        t.next = 17;
                        break;
                      }
                      this.showGuideModal(!0);
                    case 17:
                      t.next = 21;
                      break;
                    case 19:
                      (t.prev = 19), (t.t2 = t.catch(10));
                    case 21:
                      t.next = 25;
                      break;
                    case 23:
                      (t.prev = 23), (t.t3 = t.catch(1));
                    case 25:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [
                [1, 23],
                [10, 19],
              ]
            );
          })
        );
      },
      renderNewsToCanvas: function (t) {
        return v(
          this,
          null,
          s().mark(function e() {
            var n = this;
            return s().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e, a) {
                        return v(
                          n,
                          null,
                          s().mark(function n() {
                            var r, i, o;
                            return s().wrap(
                              function (n) {
                                for (;;)
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      return (
                                        (n.prev = 0),
                                        (r = R.wxml),
                                        (i = R.style),
                                        (n.next = 4),
                                        this.shareWidget.renderToCanvas({
                                          wxml: r(t),
                                          style: i,
                                        })
                                      );
                                    case 4:
                                      return (
                                        (n.next = 6),
                                        this.shareWidget.canvasToTempFilePath()
                                      );
                                    case 6:
                                      (o = n.sent),
                                        e(o.tempFilePath),
                                        (n.next = 13);
                                      break;
                                    case 10:
                                      (n.prev = 10),
                                        (n.t0 = n.catch(0)),
                                        a(n.t0);
                                    case 13:
                                    case "end":
                                      return n.stop();
                                  }
                              },
                              n,
                              this,
                              [[0, 10]]
                            );
                          })
                        );
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      },
      changeChartRange: function (t) {
        (this.chartRange = t),
          "day" === t && (this.chartData = this.todayChartData),
          this.loadGdData();
      },
      handleChartModal: function () {
        this.chartModalVisible = !0;
      },
      closeChartModal: function () {
        this.chartModalVisible = !1;
      },
    },
  };
Array ||
  (
    w.resolveComponent("mp-privacy-dialog") +
    w.resolveComponent("stock-privacy-dialog") +
    w.resolveComponent("PlateTrendChart") +
    w.resolveComponent("UpdateHistoryBar") +
    w.resolveComponent("basket-detail") +
    w.resolveComponent("RelevancePlate") +
    w.resolveComponent("RelatedHotNews") +
    w.resolveComponent("stock-basket-list") +
    w.resolveComponent("basket-bar") +
    w.resolveComponent("PrivacyPolicyModal") +
    w.resolveComponent("WxSettingGuide") +
    w.resolveComponent("st-status") +
    w.resolveComponent("layer-modal") +
    w.resolveComponent("PlateTrendChartModalContent") +
    w.resolveComponent("basketGuideModal")
  )();
var U = w._export_sfc(W, [
  [
    "render",
    function (t, e, n, a, r, s) {
      return w.e(
        { a: t.rootFontSize, b: r.isDataReady && r.detailInfo },
        r.isDataReady && r.detailInfo
          ? w.e(
              { c: r.detailInfo.bigImg },
              r.detailInfo.bigImg ? { d: r.detailInfo.bigImg } : {},
              { e: !r.detailInfo.bigImg },
              (r.detailInfo.bigImg, {}),
              {
                f: w.t(r.detailInfo.name),
                g: w.t(r.detailInfo && r.detailInfo.desc),
                h: w.o(function () {
                  return (
                    s.onShowFullModal && s.onShowFullModal.apply(s, arguments)
                  );
                }, 46),
                i: !s.isDisposableType,
              },
              s.isDisposableType
                ? {}
                : w.e(
                    { j: r.rankingData.avgChangePct },
                    r.rankingData.avgChangePct
                      ? {
                          k: w.t(s.getPercentValue(r.rankingData.avgChangePct)),
                          l: w.n(s.getStyle(r.rankingData.avgChangePct)),
                        }
                      : {},
                    { m: r.monthChangePct },
                    r.monthChangePct
                      ? {
                          n: w.t(s.getPercentValue(r.monthChangePct)),
                          o: w.n(s.getStyle(r.monthChangePct)),
                        }
                      : {}
                  ),
              { p: !s.isDisposableType },
              s.isDisposableType
                ? {}
                : {
                    q: w.sr("plateTrendChart", "d71f6440-2"),
                    r: w.o(s.changeChartRange, 47),
                    s: w.o(s.handleChartModal, 48),
                    t: w.p({
                      "chart-data": r.chartData,
                      "create-day": r.createDay,
                      "bench-mark": r.benchMark,
                      intervals: r.chartIntervals,
                      "quote-date": r.quoteDate,
                      "gd-id": r.gdId,
                    }),
                  },
              {
                v: w.p({
                  "show-update": !s.isDisposableType,
                  "last-update": r.rankingData.updateTime,
                  "gd-id": r.gdId,
                }),
                w: w.p({
                  "gd-id": r.gdId,
                  "position-top": r.statusBarHeight + 44 * r.scaleRate,
                  "show-fake-title": s.showFakeTitle,
                  "ranking-data": r.rankingData,
                }),
                x:
                  !s.isDisposableType &&
                  r.relevancePlate &&
                  r.relevancePlate.symbol,
              },
              !s.isDisposableType && r.relevancePlate && r.relevancePlate.symbol
                ? { y: w.p({ board: r.relevancePlate, "gd-id": r.gdId }) }
                : {},
              { z: r.isDataReady },
              r.isDataReady
                ? {
                    A: w.p({
                      "report-prefix": r.reportPrefix,
                      "watchlist-id": r.gdId,
                    }),
                  }
                : {},
              { B: r.isDataReady },
              r.isDataReady
                ? w.e(
                    {
                      C: w.o(function () {
                        return s.goEdit && s.goEdit.apply(s, arguments);
                      }, 49),
                      D: r.gdId,
                    },
                    r.gdId
                      ? {
                          E: w.sr("newsCommentList", "d71f6440-7"),
                          F: w.o(s.getCommentCount, 50),
                          G: w.o(s.onPutComment, 51),
                          H: w.o(s.onTapMore, 52),
                          I: w.o(s.getCommentUpdate, 53),
                          J: w.o(s.onCommentSuccess, 54),
                          K: w.o(s.onCheckUserAgreementStatus, 55),
                          L: w.p({
                            "page-type": r.pageType,
                            "p-userinfo": r.userinfo,
                            "config-info": { id: r.gdId },
                            "main-app": this,
                            "did-agree-user-agreement":
                              r.didAgreeUserAgreement.value,
                          }),
                        }
                      : {}
                  )
                : {},
              { M: r.nomore },
              (r.nomore, {}),
              { N: w.n(r.randomBg), O: r.isDataReady },
              r.isDataReady
                ? {
                    P: w.sr("basketBar", "d71f6440-8"),
                    Q: w.o(s.operateBasketSuccess, 56),
                    R: w.o(t.clickBasketSubscribe, 57),
                    S: w.o(s.clickBarShare, 58),
                    T: w.o(s.clickBarComment, 59),
                    U: w.p({
                      "show-add": !s.isDisposableType,
                      "is-share-page": r.isSharePage,
                      basket: r.detailAllInfo,
                      "report-prefix": r.reportPrefix,
                      "comment-count": r.commentCount,
                    }),
                  }
                : {},
              {
                V: w.o(function (t) {
                  return (r.showPrivacyPolicy = t);
                }, 60),
                W: w.p({ value: r.showPrivacyPolicy }),
                X: w.o(t.closeFollowGuide, 61),
                Y: w.p({ show: t.showFollowGuide }),
                Z: w.o(t.closeFollowGuide, 62),
                aa: w.p({ show: t.showFollowGuide }),
              }
            )
          : r.showLoading && r.isDeleted
          ? {
              ac: w.p({
                type: s.pageStatus,
                "error-type": s.errorType,
                "show-error-img": !0,
                "show-error-tips": !0,
                "error-tips": "该内容已删除",
                "show-btn": !1,
              }),
            }
          : r.showLoading
          ? { ae: w.o(s.onErrorRetry, 63), af: w.p({ type: s.pageStatus }) }
          : {},
        {
          ab: r.showLoading && r.isDeleted,
          ad: r.showLoading,
          ag: r.isPc && !s.isHightVersion,
        },
        r.isPc && !s.isHightVersion
          ? {}
          : r.isSharePage
          ? {
              ak: w.o(function () {
                return s.goHome && s.goHome.apply(s, arguments);
              }, 65),
            }
          : {
              ai: w.n(s.headerAlpha > 0 ? "dark" : ""),
              aj: w.o(function () {
                return s.goBack && s.goBack.apply(s, arguments);
              }, 64),
            },
        {
          ah: !r.isSharePage,
          al: w.t(r.detailInfo && r.detailInfo.name),
          am: "".concat(s.headerOpacityAlpha),
          an: "".concat(r.statusBarHeight, "px"),
          ao: "rgba(255, 255, 255, ".concat(s.headerAlpha, ")"),
          ap: w.t(r.detailInfo && r.detailInfo.desc),
          aq: s.formatedInfo && s.formatedInfo.length > 0,
        },
        s.formatedInfo && s.formatedInfo.length > 0
          ? {
              ar: w.f(s.formatedInfo, function (t, e, n) {
                return { a: w.t(t), b: e };
              }),
            }
          : {},
        {
          as: w.o(s.onCloseFullModal, 66),
          at: w.p({
            title: "股单说明",
            visible: r.modalVisible,
            "show-modal-buttons": !1,
            "show-close-btn": !0,
          }),
          av: r.chartData.length > 0,
        },
        r.chartData.length > 0
          ? {
              aw: w.p({ date: r.detailInfo.createTime }),
              ax: w.o(s.closeChartModal, 67),
              ay: w.p({
                title: "成立日说明",
                visible: r.chartModalVisible,
                "show-modal-buttons": !1,
                "show-close-btn": !0,
              }),
            }
          : {},
        {
          az: w.o(s.onGuideConfirm, 68),
          aA: w.o(s.onGuideConfirm, 69),
          aB: w.p({ visible: r.guideVisible, "report-prefix": r.reportPrefix }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d71f6440"],
]);
(W.__runtimeHooks = 7), wx.createPage(U);
var O = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.cGFnZXMvc3RvY2tCYXNrZXQvZGV0YWlsLnZ1ZQ = O),
  (exports.getBasketDetail = function () {
    return v(this, arguments, function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return s().mark(function e() {
        var n;
        return s().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = f(
                    f({ id: t.id, type: "forward", visible: "1" }, P()),
                    S.md5()
                  )),
                  e.abrupt(
                    "return",
                    C.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/watchlist/detail",
                      n,
                      { method: "get" }
                    )
                  )
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, e);
      })();
    });
  }),
  (exports.updateBasketDel = function (t) {
    return v(
      this,
      null,
      s().mark(function e() {
        return s().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt("return", q(t, !1));
              case 1:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  }),
  (exports.updateBasketWatched = function (t) {
    return v(
      this,
      null,
      s().mark(function e() {
        return s().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt("return", q(t, !0));
              case 1:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  }),
  (exports.updateShare = function (t) {
    return v(
      this,
      null,
      s().mark(function e() {
        var n, a;
        return s().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = t.news_id),
                  (a = f(
                    f({ ids: n, type: "forward", visible: "1" }, P()),
                    S.md5()
                  )),
                  e.abrupt(
                    "return",
                    C.request(
                      "https://proxy.finance.qq.com/cgi/cgi-bin/numserver/getStaticNums",
                      a,
                      { method: "get" }
                    )
                  )
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  });
