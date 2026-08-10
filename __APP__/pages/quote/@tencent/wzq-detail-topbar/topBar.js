require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../common/vendor.js"),
  o = require("../stock-hq-data/index.js"),
  n = require("../stock-hq-core/utils/f2-fit/tool.js"),
  r = t.defineComponent({
    props: [
      "skin",
      "market",
      "scode",
      "stockType",
      "showPrice",
      "stockName",
      "status",
      "isFixed",
      "hideSubTitle",
      "showTradeInfo",
      "hideTime",
    ],
    emits: ["getTopBarHeight"],
    setup: function (r, a) {
      var s = this,
        i = a.emit,
        c = t.getCurrentInstance().proxy,
        u = t.ref(0),
        l = t.ref(!1),
        d = t.ref(!1),
        f = t.ref({}),
        m = t.ref(!1),
        p = o.utils.getSymbol(r.market, r.scode),
        h = ["dark", "black"].includes(r.skin),
        k = t.computed(function () {
          var e;
          if (null == (e = f.value) ? void 0 : e.utime) {
            var t = new Date(1e3 * f.value.utime),
              n = "";
            return (
              o.utils.isUSMarket(r.market)
                ? (n = " 美东时间")
                : o.utils.isFutures(r.market) && !o.utils.isHDFutures(r.market)
                ? (n =
                    o.utils.isCMEFutures(r.stockType) ||
                    o.utils.isCBTRFutures(r.stockType) ||
                    o.utils.isCBTGFutures(r.stockType) ||
                    o.utils.isCMELFutures(r.stockType)
                      ? " 美中时间"
                      : " 美东时间")
                : o.utils.isUKMarket(r.market)
                ? (n = " 伦敦时间")
                : o.utils.isGermanFTIndex(r.stockType)
                ? (n = " 欧洲中部时间")
                : (o.utils.isHDFutures(r.market) ||
                    o.utils.isSPMarket(r.market) ||
                    o.utils.isSGFutures(r.stockType)) &&
                  (n = " 北京时间"),
              ""
                .concat((t.getMonth() + 1).toString().padStart(2, 0), "-")
                .concat(t.getDate().toString().padStart(2, 0), " ")
                .concat(t.getHours().toString().padStart(2, 0), ":")
                .concat(t.getMinutes().toString().padStart(2, 0), ":")
                .concat(t.getSeconds().toString().padStart(2, 0))
                .concat(n)
            );
          }
          return "";
        }),
        v = t.computed(function () {
          var e, t;
          return 0 == +(null == (e = f.value) ? void 0 : e.zde)
            ? "color-equal"
            : (null == (t = f.value) ? void 0 : t.zde) > 0
            ? "color-rise"
            : "color-drop";
        }),
        w = t.computed(function () {
          var e;
          return "D" === (null == (e = f.value) ? void 0 : e.status);
        }),
        g = t.computed(function () {
          if (!r.stockName || !r.scode) return "";
          var e = T(32) || {},
            t = e.fontSize,
            o = e.dealName;
          return { fontClass: "font".concat(t), stockName: o };
        }),
        T = function (e) {
          var t = "(".concat(r.scode, ")");
          if (r.stockName.length + t.length <= 12)
            return { fontSize: e, dealName: r.stockName };
          for (
            var o = t.split(""),
              n = r.stockName.split(""),
              a = e,
              s = 0,
              i = !1;
            a >= 24 && !0 !== i;

          ) {
            for (var c = 0, u = 0, l = 0; l < o.length; l++) {
              var d = o[l];
              c += S(d, a);
            }
            for (var f = 340 - c, m = 0; m < n.length; m++) {
              var p = n[m];
              if (((s = m), (u += S(p, a)) > f)) break;
            }
            if (u <= f) {
              (i = !0), (s += 1);
              break;
            }
            a -= 2;
          }
          return {
            fontSize: Math.max(a, 24),
            dealName: r.stockName.slice(0, s) || r.stockName,
          };
        },
        S = function (e, t) {
          var o = new RegExp("[一-龥]+"),
            n = new RegExp("[A-Z]+");
          return o.test(e)
            ? 1.06 * t
            : n.test(e)
            ? 0.69 * t
            : "(" === e || ")" === e
            ? 0.45 * t
            : "（" === e || "）" === e
            ? 1.06 * t
            : 0.518 * t;
        },
        x = function () {
          var o =
              (t.wx$1.getWindowInfo && t.wx$1.getWindowInfo()) ||
              t.wx$1.getSystemInfoSync(),
            r = o.statusBarHeight,
            a = void 0 === r ? 0 : r,
            l = o.safeArea,
            d = void 0 === l ? {} : l;
          (u.value = Math.max(d.top, a)),
            t.nextTick$1(function () {
              return (
                (t = s),
                null,
                (o = e().mark(function t() {
                  var o, r;
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), n.getEleInfo(".top-bar-container", c)
                          );
                        case 2:
                          (o = e.sent),
                            (r = (o || {}).height),
                            i("getTopBarHeight", void 0 === r ? 0 : r);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, t);
                })),
                new Promise(function (e, n) {
                  var r = function (e) {
                      try {
                        s(o.next(e));
                      } catch (e) {
                        n(e);
                      }
                    },
                    a = function (e) {
                      try {
                        s(o.throw(e));
                      } catch (e) {
                        n(e);
                      }
                    },
                    s = function (t) {
                      return t.done
                        ? e(t.value)
                        : Promise.resolve(t.value).then(r, a);
                    };
                  s((o = o.apply(t, null)).next());
                })
              );
              var t, o;
            });
        },
        y = function (e) {
          f.value = {
            zde: e.zde,
            utime: e.utime,
            dqj: e.dqj,
            zdf: e.zdf,
            status: e.status,
          };
        };
      return (
        (function () {
          x();
          var e = getApp().globalData.systemInfo || {},
            o = e.platform,
            n = e.SDKVersion,
            r = t.gte(n, "3.6.1");
          (["ios", "android", "devtools"].includes(o) || r) && (d.value = !0),
            getCurrentPages().length <= 1 && (l.value = !0),
            t.StockBridge.busOn("market-stockOverView_update_".concat(p), y);
        })(),
        t.onBeforeUnmount(function () {
          t.StockBridge.busOff("market-stockOverView_update_".concat(p), y);
        }),
        {
          isDark: h,
          safeTop: u,
          timeStr: k,
          zdClass: v,
          goBack: function () {
            t.wx$1.navigateBack();
          },
          goHome: function () {
            t.wx$1.switchTab({ url: "/pages/index/index" });
          },
          abnormal: w,
          fontFinal: g,
          showHome: l,
          showTopIcon: d,
          stockOverView: f,
          isLoading: m,
          refresh: function () {
            m.value || ((m.value = !0), i("refresh"));
          },
          stopLoading: function () {
            m.value = !1;
          },
          onShowTradeTimeLine: function () {
            r.showTradeInfo && i("showTradeTimeLinePop");
          },
        }
      );
    },
  }),
  a = t._export_sfc(r, [
    [
      "render",
      function (e, o, n, r, a, s) {
        return t.e(
          { a: "".concat(e.isFixed ? e.safeTop : 0, "px"), b: e.isDark },
          e.isDark
            ? t.e(
                { c: e.showHome && e.showTopIcon },
                e.showHome && e.showTopIcon
                  ? {
                      d: t.o(function () {
                        return e.goHome && e.goHome.apply(e, arguments);
                      }, 1699),
                    }
                  : {},
                { e: !e.showHome && e.showTopIcon },
                !e.showHome && e.showTopIcon
                  ? {
                      f: t.o(function () {
                        return e.goBack && e.goBack.apply(e, arguments);
                      }, 1700),
                    }
                  : {}
              )
            : t.e(
                { g: e.showHome && e.showTopIcon },
                e.showHome && e.showTopIcon
                  ? {
                      h: t.o(function () {
                        return e.goHome && e.goHome.apply(e, arguments);
                      }, 1701),
                    }
                  : {},
                { i: !e.showHome && e.showTopIcon },
                !e.showHome && e.showTopIcon
                  ? {
                      j: t.o(function () {
                        return e.goBack && e.goBack.apply(e, arguments);
                      }, 1702),
                    }
                  : {}
              ),
          { k: e.stockName },
          e.stockName
            ? {
                l: t.t(e.fontFinal.stockName),
                m: t.t(e.scode),
                n: t.n(e.fontFinal.fontClass),
              }
            : {},
          { o: !e.hideSubTitle },
          e.hideSubTitle
            ? {}
            : t.e(
                { p: !e.showPrice },
                e.showPrice
                  ? {
                      x: t.t(e.abnormal ? "--" : e.stockOverView.dqj),
                      y: t.n(e.zdClass),
                      z: t.t(e.abnormal ? "--" : e.stockOverView.zde),
                      A: t.n(e.zdClass),
                      B: t.t(
                        e.abnormal ? "--" : "".concat(e.stockOverView.zdf, "%")
                      ),
                      C: t.n(e.zdClass),
                    }
                  : t.e(
                      { q: t.t(e.status), r: e.showTradeInfo },
                      (e.showTradeInfo, {}),
                      { s: !e.hideTime },
                      e.hideTime ? {} : { t: t.t(e.timeStr) },
                      {
                        v: t.n(e.showTradeInfo ? "trade-info" : ""),
                        w: t.o(function () {
                          return (
                            e.onShowTradeTimeLine &&
                            e.onShowTradeTimeLine.apply(e, arguments)
                          );
                        }, 1703),
                      }
                    )
              ),
          {
            D: "".concat(e.safeTop, "px"),
            E: e.isFixed ? "fixed" : "relative",
            F: e.isFixed,
          },
          (e.isFixed, {})
        );
      },
    ],
    ["__scopeId", "data-v-e9965cc2"],
  ]);
wx.createComponent(a);
