var e = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var n = function (e, t, n) {
    return new Promise(function (o, r) {
      var i = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        s = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(i, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  o = require("../utils/config.js"),
  r = require("../../../../../../../../common/vendor.js"),
  i = "https://proxy.finance.qq.com/ifzqfinance",
  s = r.StockBridge.ENV === r.EnvTypeEnum.MP,
  a = ["mpwzq", "wzqlight"].includes("mpweapp"),
  l = new Map([
    ["sz", "0"],
    ["sh", "1"],
    ["zhai", "zhai"],
  ]),
  d =
    "miniprogram" === (null == window ? void 0 : window.__wxjs_environment) ||
    /miniProgram/.test(null == navigator ? void 0 : navigator.userAgent),
  c = Boolean(d),
  u = {
    inject: ["tradeFunc"],
    props: ["premote"],
    components: {
      uninterest: function () {
        return "../Uninterest/index.js";
      },
      MarketIcon: function () {
        return "./MarketIcon.js";
      },
    },
    data: function () {
      return {
        showAdv: !1,
        advReadyDisplay: !1,
        advConfig: null,
        advStyleConfig: {},
        premoteNew: null,
        profitRate: null,
        sgInfo: null,
        popTitle: "",
        buttonTitle: "",
        showType: "",
        IS_MINA: c,
        showUninterest: !1,
        isLiteMode: a,
      };
    },
    computed: {
      showScrollMask: function () {
        var e, t, n, o, r, i;
        return (null == (e = this.sgInfo) ? void 0 : e.sgStock.length) > 0 &&
          (null == (t = this.sgInfo) ? void 0 : t.sgBond.length) > 0
          ? this.sgInfo.sgStock.length + this.sgInfo.sgBond.length > 2
          : (null == (o = null == (n = this.sgInfo) ? void 0 : n.sgStock)
              ? void 0
              : o.length) > 3 ||
              (null == (i = null == (r = this.sgInfo) ? void 0 : r.sgBond)
                ? void 0
                : i.length) > 3;
      },
    },
    watch: {
      premote: {
        immediate: !0,
        handler: function (e) {
          var t = this;
          e &&
            this.$nextTick(function () {
              var n, o, r, i, a, l, d;
              t.getData(),
                (t.premoteNew = e),
                e.ad_list &&
                  e.ad_list.length > 0 &&
                  (t.advConfig = e.ad_list[0]);
              var c =
                null == (n = null == e ? void 0 : e.component_param)
                  ? void 0
                  : n.component_content;
              (t.advStyleConfig = JSON.parse(
                null ==
                  (r =
                    null == (o = null == e ? void 0 : e.component_param)
                      ? void 0
                      : o.component_style)
                  ? void 0
                  : r.template
              )),
                (t.showType = t.advStyleConfig.show_type || "no-new"),
                (t.showUninterest =
                  1 ===
                  (null ==
                  (a =
                    null == (i = null == e ? void 0 : e.component_param)
                      ? void 0
                      : i.component_info)
                    ? void 0
                    : a.uninterest));
              var u =
                  "has-new" === t.showType
                    ? "今日新股新债申购提醒"
                    : "热门打新享收益",
                p =
                  "has-new" === t.showType
                    ? "一键打新"
                    : "极速开户，享打新收益";
              (t.popTitle = (null == c ? void 0 : c.main_text) || u),
                (t.buttonTitle = (null == c ? void 0 : c.button_text) || p),
                t.$emit("showAdv", !0),
                (t.showAdv = !0),
                s ? t.reportShow() : t.renderComponent(),
                (null == (l = t.advStyleConfig) ? void 0 : l.exp_hold_s) &&
                  setTimeout(function () {
                    t.showAdv = !1;
                  }, 1e3 *
                    (null == (d = t.advStyleConfig) ? void 0 : d.exp_hold_s));
            });
        },
      },
    },
    methods: {
      setStyle: function (e) {
        var t = !!/^-/.test(e),
          n = Number(e);
        return e
          ? 0 === n || "--" === e
            ? "grey"
            : t
            ? "green"
            : "red"
          : "grey";
      },
      getProfitRate: function (e, t) {
        var n = (null == e ? void 0 : e.summary) || {};
        return {
          stockProfit: Math.round(+n.avgProfit) || "",
          stockRate: n.zhubanTotal
            ? (((n.zhubanTotal - n.zhubanPofa) / n.zhubanTotal) * 100).toFixed(
                1
              )
            : "--",
          bondProfit: Math.round(+t.pjmqhlje) || "",
          bondRate: t.sssl
            ? (((t.sssl - t.pfsl) / t.sssl) * 100).toFixed(1)
            : "--",
        };
      },
      getSgInfo: function (e, t) {
        return {
          sgStock: ((null == e ? void 0 : e.sgrq) || []).map(function (e) {
            var t = e.symbol.substring(0, 2);
            return {
              market: l.get(t) || "",
              code: e.symbol.substring(2),
              name: e.name,
              price: (+e.price).toFixed(2) || "",
              marketRate: (+e.syl).toFixed(2) || "",
            };
          }),
          sgBond: ((null == t ? void 0 : t.jrsg) || []).map(function (e) {
            var t = e.symbol.substring(0, 2);
            return {
              market: l.get(t) || "",
              code: e.symbol.substring(2),
              name: e.name || "",
              price: Math.round(+e.fxj) || "",
              predictRate: e.predict_profit_rate || "",
            };
          }),
        };
      },
      getData: function () {
        var e = this;
        Promise.all([this.getHSNewStock(), this.getHSNewBond()])
          .then(function (n) {
            (e.profitRate = e.getProfitRate.apply(e, t(n))),
              (e.sgInfo = e.getSgInfo.apply(e, t(n))),
              (e.advReadyDisplay = !0);
          })
          .catch(function (e) {});
      },
      getHSNewStock: function () {
        return n(
          this,
          null,
          e().mark(function t() {
            var o, s;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (o = {
                          app: "wzq",
                          market: "hs",
                          detail: 1,
                          sgrq: 1,
                          period: 90,
                        }),
                        (t.next = 4),
                        (function (t) {
                          return n(
                            exports,
                            null,
                            e().mark(function n() {
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt(
                                        "return",
                                        r.StockBridge.request(
                                          "".concat(
                                            i,
                                            "/stock/notice/ipo/search"
                                          ),
                                          r.RequestTypeEnum.GET,
                                          t
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, n);
                            })
                          );
                        })(o)
                      );
                    case 4:
                      return (
                        (s = t.sent),
                        t.abrupt("return", null == s ? void 0 : s.data)
                      );
                    case 8:
                      throw (
                        ((t.prev = 8),
                        (t.t0 = t.catch(0)),
                        { retcode: "request-fail", retmsg: "沪深新股请求失败" })
                      );
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 8]]
            );
          })
        );
      },
      getHSNewBond: function () {
        return n(
          this,
          null,
          e().mark(function t() {
            var o, s;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (o = { app: "wzq", market: "hs", period: 90 }),
                        (t.next = 4),
                        (function (t) {
                          return n(
                            exports,
                            null,
                            e().mark(function n() {
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt(
                                        "return",
                                        r.StockBridge.request(
                                          "".concat(
                                            i,
                                            "/stock/notice/NewConvertibleBond/getCalendarList"
                                          ),
                                          r.RequestTypeEnum.GET,
                                          t
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, n);
                            })
                          );
                        })(o)
                      );
                    case 4:
                      return (
                        (s = t.sent),
                        t.abrupt("return", null == s ? void 0 : s.data)
                      );
                    case 8:
                      throw (
                        ((t.prev = 8),
                        (t.t0 = t.catch(0)),
                        { retcode: "request-fail", retmsg: "沪深新债请求失败" })
                      );
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 8]]
            );
          })
        );
      },
      renderComponent: o.debounce(100, function () {
        var e, t, n, o, r, i;
        if (-1 != this.premoteNew.f_carrier_path.indexOf("/")) {
          if (
            (null == (t = null == (e = this.$parent) ? void 0 : e.$route)
              ? void 0
              : t.path) != this.premoteNew.f_carrier_path &&
            (null == (o = null == (n = this.$parent) ? void 0 : n.$route)
              ? void 0
              : o.name) != this.premoteNew.f_carrier_name
          )
            return;
        } else if ((null == (i = null == (r = this.$parent) ? void 0 : r.$route) ? void 0 : i.name) != this.premoteNew.f_carrier_path) return;
        !(
          document.querySelectorAll(".delivery-global-curtain-adv").length > 0
        ) &&
          document.querySelectorAll(".delivery-container").length > 0 &&
          (document
            .querySelectorAll(".delivery-container")[0]
            .insertAdjacentElement("afterend", this.$el),
          this.reportShow(),
          (document.body.style.overflow = "hidden"));
      }),
      getReportBuried: function (e) {
        var t, n;
        return (
          ((null ==
          (n = null == (t = this.premoteNew) ? void 0 : t.component_param)
            ? void 0
            : n.component_stat) || {})[e] || ""
        );
      },
      reportShow: function () {
        var e, t;
        null == (t = null == (e = r.StockBridge) ? void 0 : e.deliverySdk) ||
          t.deliveryMtaAndRport(this.premoteNew, "brow");
      },
      closeAdv: function () {
        var e, t;
        (this.showAdv = !1),
          s || (document.body.style.overflow = ""),
          null == (t = null == (e = r.StockBridge) ? void 0 : e.deliverySdk) ||
            t.deliveryMtaAndRport(this.premoteNew, "close");
      },
      doNothing: function () {},
      clickAdv: function () {
        var e,
          t,
          n,
          i,
          s,
          a,
          l = this;
        (this.showAdv = !1),
          r.StockBridge.setStorage(
            o.QIANJI_HAS_CLICKED_QIANJI_STORAGE_KEY,
            this.advConfig
          );
        var d =
          (null ==
          (t = null == (e = this.advConfig) ? void 0 : e.ext_properties)
            ? void 0
            : t.stat) || "unknown_dp_stat";
        if (
          (null == (i = null == (n = r.StockBridge) ? void 0 : n.deliverySdk) ||
            i.deliveryMtaAndRport(this.premoteNew, "click"),
          "has-new" !== this.showType)
        )
          null == (a = null == (s = r.StockBridge) ? void 0 : s.deliverySdk) ||
            a.deliveryDoJump(this.premoteNew);
        else {
          var c = this.tradeFunc.isBind();
          setTimeout(function () {
            if (c) l.tradeFunc.navToBrokerPage({ name: "NewStock", stat: d });
            else if (l.isLiteMode) l.tradeFunc.navToApplyIndex({ stat: d });
            else {
              var e =
                "https://wzq.tenpay.com/mp/v2/index.html#/hangqingxinzhai?type=stock&scroll_pos=jrsg&market=hs&stat=".concat(
                  d
                );
              r.StockBridge.locationTo(e);
            }
          }, 200);
        }
      },
      confirm: function () {
        s || (document.body.style.overflow = ""),
          (this.advReadyDisplay = !1),
          this.clickAdv();
      },
      close: function () {
        (this.advReadyDisplay = !1), this.closeAdv(), this.$emit("closeAdv");
      },
      handleDxShare: function () {
        var e = this;
        s || (document.body.style.overflow = ""),
          setTimeout(function () {
            (e.advReadyDisplay = !1),
              (e.showAdv = !1),
              r.StockBridge.locationTo(
                "https://wzq.tenpay.com/mp/v2/index.html#/hangqingxinzhai?type=stock&scroll_pos=jrsg&market=hs&share_guide=1"
              );
          }, 300);
      },
      handleUninterestMore: function () {
        var e =
          this.getReportBuried("uninterest_more") ||
          "yy.choose.zixuan_curtain_newstock_uninterest_more_click";
        this.deliveryReportMta(this.$parent, this.premoteNew, e);
      },
      handleUninterestNot: function () {
        this.showAdv = !1;
        var e =
          this.getReportBuried("uninterest") ||
          "yy.choose.zixuan_curtain_newstock_uninterest";
        this.deliveryReportMta(this.$parent, this.premoteNew, e),
          this.reportQianjiGo(
            this.$parent,
            this.advConfig.dp_ctx,
            "uninterest"
          );
      },
    },
  };
Array ||
  (r.resolveComponent("market-icon") + r.resolveComponent("uninterest"))();
var p = r._export_sfc(u, [
  [
    "render",
    function (e, t, n, o, i, s) {
      return r.e(
        { a: i.showAdv },
        i.showAdv
          ? r.e(
              {
                b: r.t(i.popTitle),
                c: "has-new" === i.showType && i.advReadyDisplay,
              },
              "has-new" === i.showType && i.advReadyDisplay
                ? r.e(
                    { d: i.sgInfo.sgStock.length > 0 },
                    i.sgInfo.sgStock.length > 0
                      ? r.e(
                          {
                            e: r.t(i.profitRate.stockProfit),
                            f: r.f(i.sgInfo.sgStock, function (e, t, n) {
                              return {
                                a: r.t(e.name),
                                b: "a7c0b025-0-" + n,
                                c: r.p({ market: e.market, scode: e.code }),
                                d: r.t(e.code),
                                e: r.t(e.price),
                                f: r.t(e.marketRate),
                                g: r.n(
                                  t + 1 === i.sgInfo.sgStock.length
                                    ? "last"
                                    : ""
                                ),
                                h: e.code,
                              };
                            }),
                            g: i.sgInfo.sgBond.length > 0,
                          },
                          (i.sgInfo.sgBond.length, {})
                        )
                      : {},
                    { h: i.sgInfo.sgBond.length > 0 },
                    i.sgInfo.sgBond.length > 0
                      ? {
                          i: r.t(i.profitRate.bondProfit),
                          j: i.sgInfo.sgStock.length > 0 ? 1 : "",
                          k: r.f(i.sgInfo.sgBond, function (e, t, n) {
                            return {
                              a: r.t(e.name),
                              b: "a7c0b025-1-" + n,
                              c: r.p({
                                market: 0 == e.type ? e.market : "zhai",
                                scode: e.code,
                              }),
                              d: r.t(e.code),
                              e: r.t(e.price),
                              f: r.t(e.predictRate),
                              g: r.n(
                                t + 1 === i.sgInfo.sgBond.length ? "last" : ""
                              ),
                              h: e.code,
                            };
                          }),
                        }
                      : {},
                    { l: s.showScrollMask && !i.isLiteMode },
                    (s.showScrollMask && i.isLiteMode, {}),
                    { m: s.showScrollMask && !i.isLiteMode },
                    (s.showScrollMask && i.isLiteMode, {})
                  )
                : {},
              { n: "no-new" !== i.showType },
              (i.showType, {}),
              { o: "no-new" === i.showType && i.profitRate },
              "no-new" === i.showType && i.profitRate
                ? r.e(
                    { p: i.isLiteMode },
                    (i.isLiteMode, {}),
                    {
                      q: r.t(i.profitRate.stockRate),
                      r: r.n(s.setStyle(i.profitRate.stockRate)),
                      s: !i.isLiteMode,
                    },
                    (i.isLiteMode, {}),
                    { t: i.isLiteMode },
                    (i.isLiteMode, {}),
                    {
                      v: r.t(i.profitRate.stockProfit),
                      w: r.n(s.setStyle(i.profitRate.stockProfit)),
                      x: !i.isLiteMode,
                    },
                    (i.isLiteMode, {}),
                    { y: i.isLiteMode },
                    (i.isLiteMode, {}),
                    {
                      z: r.t(i.profitRate.bondRate),
                      A: r.n(s.setStyle(i.profitRate.bondRate)),
                      B: !i.isLiteMode,
                    },
                    (i.isLiteMode, {}),
                    { C: i.isLiteMode },
                    (i.isLiteMode, {}),
                    {
                      D: r.t(i.profitRate.bondProfit),
                      E: r.n(s.setStyle(i.profitRate.bondProfit)),
                      F: !i.isLiteMode,
                    },
                    (i.isLiteMode, {})
                  )
                : {},
              {
                G: r.t(i.buttonTitle),
                H: "has-new" === i.showType ? 1 : "",
                I: r.o(function () {
                  return s.confirm && s.confirm.apply(s, arguments);
                }, 1376),
                J: "has-new" === i.showType && !i.isLiteMode,
              },
              "has-new" !== i.showType || i.isLiteMode
                ? {}
                : {
                    K: r.o(function () {
                      return (
                        s.handleDxShare && s.handleDxShare.apply(s, arguments)
                      );
                    }, 1377),
                  },
              {
                L: "has-new" === i.showType ? 1 : "",
                M: 1 == i.advStyleConfig.can_close,
              },
              1 == i.advStyleConfig.can_close
                ? {
                    N: r.o(function (e) {
                      return s.close();
                    }, 1378),
                  }
                : {},
              { O: i.showUninterest && !i.isLiteMode },
              i.showUninterest && !i.isLiteMode
                ? {
                    P: r.o(s.handleUninterestNot, 1379),
                    Q: r.o(s.handleUninterestMore, 1380),
                  }
                : {},
              {
                R: r.o(function () {
                  return s.doNothing && s.doNothing.apply(s, arguments);
                }, 1381),
                S: i.advReadyDisplay ? 1 : "",
                T: r.o(function (e) {
                  return s.close();
                }, 1382),
                U: r.n(i.isLiteMode ? "lite-mode" : ""),
                V: r.n("no-new" === i.showType ? "no-new" : ""),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-a7c0b025"],
]);
wx.createComponent(p);
