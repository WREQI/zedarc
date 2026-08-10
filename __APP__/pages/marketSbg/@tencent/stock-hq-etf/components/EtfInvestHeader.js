var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = function (e, r) {
    for (var n in r || (r = {})) i.call(r, n) && c(e, n, r[n]);
    if (a) {
      var o,
        s = t(a(r));
      try {
        for (s.s(); !(o = s.n()).done; ) {
          n = o.value;
          u.call(r, n) && c(e, n, r[n]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  l = function (e, t) {
    return n(e, o(t));
  },
  d = function (e, t, r) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, i);
        };
      u((r = r.apply(e, t)).next());
    });
  },
  f = require("../../../../../common/vendor.js"),
  p = require("../../stock-markets-base/utils/market.js"),
  m = require("../node-modules/@tencent/st-tools/dist/mpDetect.js"),
  v = require("../../stock-hq-core/utils/storage/local.js");
require("../../../js-cookie/src/js.cookie.js");
var g = require("../global-invest/utils/report.js"),
  k = "bg-rise",
  b = "bg-drop",
  h = f.defineComponent({
    name: "EtfInvestHeader",
    components: {
      StMiniMins: function () {
        return "../../../../asyncCom/@tencent/st-mini-mins/src/index.js";
      },
    },
    props: {
      featuredEtf: {
        type: Object,
        default: function () {
          return {};
        },
      },
      formatRatio: { type: Function, required: !0 },
      formatText: { type: Function, required: !0 },
      getRatioClass: { type: Function, required: !0 },
      getEtfRatio: { type: Function, required: !0 },
      getEtfName: { type: Function, required: !0 },
      featuredEtfSymbol: { type: String, default: "" },
      showWatchlist: { type: Boolean, default: !0 },
      showRelevance: { type: Boolean, default: !0 },
      ratioLabel: { type: String, default: "涨跌幅" },
      reportSource: { type: String, default: "" },
    },
    setup: function (t, r) {
      r.emit;
      var n = (
          "undefined" == typeof navigator
            ? { IS_ZXG: !1 }
            : m._default(navigator.userAgent).env
        ).IS_ZXG,
        o = f.getCurrentInstance(),
        a = ["mpwzq", "mpweapp"].includes("mpweapp"),
        i = f.ref(!1),
        u = f.ref(!1),
        c = f.ref(!1),
        h = f.ref(!1),
        y = f.computed(function () {
          return i.value
            ? "https://st.gtimg.com/design/a43fa0f1baa60bd218716cc87089d2f1.png"
            : (function () {
                if (a) {
                  var e = f.StockBridge.getStorage("user/skin");
                  return "dark" === e || "black" === e;
                }
                if ("undefined" == typeof document) return !1;
                var t = document.body.getAttribute("data-theme") || "light";
                return "dark" === t || "black" === t;
              })()
            ? "https://st.gtimg.com/image/strategy/ai/check-black.svg"
            : "https://st.gtimg.com/design/f4ce9c1ca279a4d9659ae3ed4100bcfa.png";
        }),
        x = f.computed(function () {
          return String(t.featuredEtfSymbol || "").trim();
        }),
        S = f.computed(function () {
          var e,
            r,
            n,
            o,
            a =
              null != (o = null == (e = t.featuredEtf) ? void 0 : e.price_ratio)
                ? o
                : null ==
                  (n = null == (r = t.featuredEtf) ? void 0 : r.etf_info)
                ? void 0
                : n.price_ratio;
          if (null == a || "" === String(a).trim() || "--" === String(a).trim())
            return k;
          var i = Number(String(a).replace("%", ""));
          if (Number.isNaN(i)) return k;
          if (0 === i) return "bg-peace";
          var u =
            "greenup" ===
            (("undefined" != typeof document &&
              document.body.getAttribute("data-zdf")) ||
              "redup");
          return i > 0 ? (u ? b : k) : u ? k : b;
        }),
        E = f.computed(function () {
          return void 0 !== t.featuredEtf.price &&
            null !== t.featuredEtf.price &&
            "" !== t.featuredEtf.price
            ? "".concat(
                t.formatText((100 * t.featuredEtf.price).toFixed(2)),
                "元"
              )
            : t.formatText(
                t.featuredEtf.priceText ||
                  t.featuredEtf.amountText ||
                  t.featuredEtf.costText ||
                  "--"
              );
        });
      function w() {
        var e = v.sls.getItem("_qluin") || f.StockBridge.getStorage("_qluin"),
          t = v.sls.getItem("_qlskey") || f.StockBridge.getStorage("_qlskey");
        return {
          app: f.OriginTypeEnum.mpweapp,
          appid: "wx4ffb369b6881ee5e",
          openid: e || "",
          fskey: t || "",
          check: 11,
        };
      }
      function _() {
        var e = f.StockBridge.getCookie("wzq_qluin"),
          t = f.StockBridge.getCookie("wzq_qlskey");
        return e && t
          ? { appid: "wx9cf8c670ebd68ce4", openid: e, fskey: t, check: 11 }
          : {};
      }
      function q(t) {
        return d(
          this,
          null,
          e().mark(function r() {
            var n;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ((n = a ? w() : _()).openid && n.fskey) {
                      e.next = 3;
                      break;
                    }
                    throw new Error("missing login info");
                  case 3:
                    return e.abrupt(
                      "return",
                      f.StockBridge.request(
                        "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
                        f.RequestTypeEnum.GET,
                        l(s({}, n), { seq: JSON.stringify(t) }),
                        { forceCallback: !0 }
                      )
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        );
      }
      function T() {
        return d(
          this,
          null,
          e().mark(function r() {
            var u, c, p, m, v, g, k, b;
            return e().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (t.showWatchlist) {
                      r.next = 2;
                      break;
                    }
                    return r.abrupt("return", void (i.value = !1));
                  case 2:
                    if (
                      (v = String(t.featuredEtfSymbol || "").trim()) &&
                      "--" !== v
                    ) {
                      r.next = 5;
                      break;
                    }
                    return r.abrupt("return", void (i.value = !1));
                  case 5:
                    if (
                      !n ||
                      !(null ==
                      (c =
                        null == (u = null == o ? void 0 : o.proxy)
                          ? void 0
                          : u.$sdk)
                        ? void 0
                        : c.checkStockZxg)
                    ) {
                      r.next = 10;
                      break;
                    }
                    return (r.next = 8), o.proxy.$sdk.checkStockZxg(v);
                  case 8:
                    return (
                      (g = r.sent),
                      r.abrupt(
                        "return",
                        ((i.value = Boolean(null == g ? void 0 : g.exist)),
                        void (g || (h.value = !0)))
                      )
                    );
                  case 10:
                    if (!a) {
                      r.next = 16;
                      break;
                    }
                    return (
                      (r.next = 13),
                      (function (t) {
                        return d(
                          this,
                          null,
                          e().mark(function r() {
                            var n;
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (n = w()),
                                      e.abrupt(
                                        "return",
                                        n.openid && n.fskey
                                          ? f.StockBridge.request(
                                              "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockGroups",
                                              f.RequestTypeEnum.GET,
                                              l(s({}, n), { stocks: t }),
                                              { forceCallback: !0 }
                                            )
                                          : null
                                      )
                                    );
                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, r);
                          })
                        );
                      })(v)
                    );
                  case 13:
                    (r.t0 = r.sent), (r.next = 19);
                    break;
                  case 16:
                    return (
                      (r.next = 18),
                      (function (t) {
                        return d(
                          this,
                          null,
                          e().mark(function r() {
                            var n;
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (n = _()),
                                      e.abrupt(
                                        "return",
                                        n.openid && n.fskey
                                          ? f.StockBridge.request(
                                              "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockGroups",
                                              f.RequestTypeEnum.GET,
                                              l(s({}, n), { stocks: t }),
                                              { forceCallback: !0 }
                                            )
                                          : null
                                      )
                                    );
                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, r);
                          })
                        );
                      })(v)
                    );
                  case 18:
                    r.t0 = r.sent;
                  case 19:
                    (k = r.t0),
                      (b =
                        null ==
                        (m =
                          null == (p = null == k ? void 0 : k.data)
                            ? void 0
                            : p[v])
                          ? void 0
                          : m.grpids),
                      (i.value = Array.isArray(b) && b.length > 0);
                  case 22:
                  case "end":
                    return r.stop();
                }
            }, r);
          })
        );
      }
      function G() {
        return d(
          this,
          null,
          e().mark(function r() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t.showWatchlist) {
                        e.next = 19;
                        break;
                      }
                      if (!x.value || "--" === x.value) {
                        e.next = 16;
                        break;
                      }
                      return (u.value = !0), (e.prev = 3), (e.next = 6), T();
                    case 6:
                      e.next = 11;
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(3)), (i.value = !1);
                    case 11:
                      return (e.prev = 11), (u.value = !1), e.finish(11);
                    case 14:
                      e.next = 17;
                      break;
                    case 16:
                      i.value = !1;
                    case 17:
                      e.next = 20;
                      break;
                    case 19:
                      i.value = !1;
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[3, 8, 11, 14]]
            );
          })
        );
      }
      return (
        f.watch(
          function () {
            return [t.featuredEtfSymbol, t.showWatchlist];
          },
          function () {
            G();
          },
          { immediate: !0 }
        ),
        {
          watchlistIcon: y,
          trendSymbol: x,
          trendRiseDropStyle: S,
          priceText: E,
          isFeaturedEtfAdded: i,
          isFeaturedEtfLoading: u,
          isWatchlistSubmitting: c,
          handleToggleWatchlist: function () {
            return d(
              this,
              null,
              e().mark(function r() {
                var a, s, l, d, p, m, v, k, b, y, S, E, w;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ("home_long_term" === t.reportSource &&
                              g.reportGlobalInvest(
                                g.GLOBAL_INVEST_REPORT.HOME_LONG_TERM_ADD_CLICK,
                                { from_column_id: "etf_investing_globally" }
                              ),
                            t.showWatchlist && !u.value && !c.value)
                          ) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if ((v = x.value) && "--" !== v) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          if (
                            ((k = !i.value),
                            (c.value = !0),
                            (e.prev = 7),
                            !(
                              n &&
                              (null ==
                              (s =
                                null == (a = null == o ? void 0 : o.proxy)
                                  ? void 0
                                  : a.$sdk)
                                ? void 0
                                : s.addStockZxg) &&
                              (null ==
                              (d =
                                null == (l = null == o ? void 0 : o.proxy)
                                  ? void 0
                                  : l.$sdk)
                                ? void 0
                                : d.removeStockFromGroup)
                            ))
                          ) {
                            e.next = 24;
                            break;
                          }
                          if (!k) {
                            e.next = 15;
                            break;
                          }
                          return (e.next = 12), o.proxy.$sdk.addStockZxg(v);
                        case 12:
                          (e.t0 = e.sent), (e.next = 18);
                          break;
                        case 15:
                          return (
                            (e.next = 17), o.proxy.$sdk.removeStockFromGroup(v)
                          );
                        case 17:
                          e.t0 = e.sent;
                        case 18:
                          if (
                            ((b = e.t0),
                            (y = k
                              ? "addStockToGroup:ok"
                              : "removeStockFromGroup:ok"),
                            (null == b ? void 0 : b.err_msg) === y)
                          ) {
                            e.next = 22;
                            break;
                          }
                          throw new Error(
                            (null == b ? void 0 : b.err_msg) ||
                              "watchlist toggle failed"
                          );
                        case 22:
                          e.next = 31;
                          break;
                        case 24:
                          return (
                            (S = [
                              {
                                act: k ? "sa" : "sd",
                                code: v,
                                timestamp: Math.floor(Date.now() / 1e3),
                              },
                            ]),
                            (e.next = 27),
                            q(S)
                          );
                        case 27:
                          if (
                            ((E = e.sent),
                            (w =
                              null == (p = null == E ? void 0 : E.data)
                                ? void 0
                                : p.record),
                            0 === (null == E ? void 0 : E.code) &&
                              Array.isArray(w) &&
                              w.length > 0 &&
                              w.every(function (e) {
                                return 0 === (null == e ? void 0 : e.code);
                              }))
                          ) {
                            e.next = 31;
                            break;
                          }
                          throw new Error(
                            (null == E ? void 0 : E.msg) ||
                              (null == (m = null == w ? void 0 : w[0])
                                ? void 0
                                : m.code) ||
                              "watchlist toggle failed"
                          );
                        case 31:
                          if (!n || !h.value) {
                            e.next = 33;
                            break;
                          }
                          return e.abrupt("return");
                        case 33:
                          (i.value = k),
                            f.StockBridge.toast(
                              k ? "已添加自选" : "已删除自选"
                            ),
                            (e.next = 39);
                          break;
                        case 36:
                          (e.prev = 36),
                            (e.t1 = e.catch(7)),
                            f.StockBridge.toast(
                              k ? "添加自选失败" : "删除自选失败"
                            );
                        case 39:
                          return (e.prev = 39), (c.value = !1), e.finish(39);
                        case 42:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  null,
                  [[7, 36, 39, 42]]
                );
              })
            );
          },
          handleGoDetail: function () {
            var e,
              r,
              n,
              o = String(
                t.featuredEtfSymbol ||
                  (null == (e = t.featuredEtf) ? void 0 : e.symbol) ||
                  (null == (r = t.featuredEtf) ? void 0 : r.code) ||
                  (null == (n = t.featuredEtf) ? void 0 : n.fund_code) ||
                  ""
              ).trim();
            if (
              ("home_long_term" === t.reportSource
                ? g.reportGlobalInvest(
                    g.GLOBAL_INVEST_REPORT.HOME_LONG_TERM_SELECTION_CLICK,
                    { stockid: o }
                  )
                : "long_term" === t.reportSource &&
                  g.reportGlobalInvest(
                    g.GLOBAL_INVEST_REPORT.LONG_TERM_LIST_CLICK,
                    { stockid: o }
                  ),
              o)
            ) {
              var a = p.splitSymbol(o),
                i = a.market,
                u = a.scode;
              f.StockRouter.routeTo({
                name: "stockdetail",
                query: { market: i, scode: u },
              });
            }
          },
          syncFeaturedEtfAdded: G,
        }
      );
    },
  });
Array || f.resolveComponent("StMiniMins")();
var y = f._export_sfc(h, [
  [
    "render",
    function (e, t, r, n, o, a) {
      return f.e(
        { a: e.trendSymbol },
        e.trendSymbol
          ? {
              b: f.p({
                "choose-symbol": e.trendSymbol,
                "rise-drop-style": e.trendRiseDropStyle,
                width: 61,
                height: 61,
                "render-points": 40,
                "fill-chart": !0,
              }),
            }
          : {},
        {
          c: f.t(e.getEtfName(e.featuredEtf)),
          d: f.o(function () {
            return e.handleGoDetail && e.handleGoDetail.apply(e, arguments);
          }, 3149),
          e: e.showWatchlist,
        },
        e.showWatchlist
          ? {
              f: f.n({
                "etf-invest-card__watchlist--disabled":
                  e.isFeaturedEtfLoading || e.isWatchlistSubmitting,
              }),
              g: e.watchlistIcon,
              h: e.isFeaturedEtfAdded ? "已添加" : "加自选",
              i: f.o(function () {
                return (
                  e.handleToggleWatchlist &&
                  e.handleToggleWatchlist.apply(e, arguments)
                );
              }, 3150),
            }
          : {},
        {
          j: f.t(e.formatRatio(e.getEtfRatio(e.featuredEtf))),
          k: f.n(e.getRatioClass(e.getEtfRatio(e.featuredEtf))),
          l: f.t(e.ratioLabel),
          m: f.o(function () {
            return e.handleGoDetail && e.handleGoDetail.apply(e, arguments);
          }, 3151),
          n: e.showRelevance,
        },
        e.showRelevance
          ? { o: f.t(e.formatRatio(e.featuredEtf.pos_ratio, !1)) }
          : {},
        {
          p: f.t(e.priceText),
          q: f.o(function () {
            return e.handleGoDetail && e.handleGoDetail.apply(e, arguments);
          }, 3152),
        }
      );
    },
  ],
  ["__scopeId", "data-v-40d06035"],
]);
wx.createComponent(y);
