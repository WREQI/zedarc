require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/typeof"),
  i = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  n = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  l = function (e, t, i) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  d = function (e, t) {
    for (var o in t || (t = {})) a.call(t, o) && l(e, o, t[o]);
    if (r) {
      var n,
        s = i(r(t));
      try {
        for (s.s(); !(n = s.n()).done; ) {
          o = n.value;
          c.call(t, o) && l(e, o, t[o]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  u = function (e, t) {
    return n(e, s(t));
  },
  h = function (e, t, i) {
    return new Promise(function (o, n) {
      var s = function (e) {
          try {
            a(i.next(e));
          } catch (e) {
            n(e);
          }
        },
        r = function (e) {
          try {
            a(i.throw(e));
          } catch (e) {
            n(e);
          }
        },
        a = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(s, r);
        };
      a((i = i.apply(e, t)).next());
    });
  },
  p = require("../../../../../common/vendor.js");
require("../node-modules/@tencent/st-tools/dist/index.js");
var f = require("../../stock-hq-data/index.js"),
  m = require("../global-invest/service/index.js"),
  g = require("../utils/common.js"),
  v = require("../hooks/useWatchlist.js"),
  S = require("../api/index.js"),
  k = function (e) {
    return Array.from({ length: e }, function () {
      return {};
    });
  },
  b = {
    name: "",
    code: "",
    chooseSymbol: "",
    fundId: "",
    fundCode: "",
    yearChange: "",
    dividendRate: "",
    price: "",
    feature: "",
    supportRegularInvest: void 0,
  };
function y(e, i, o) {
  var n;
  (null != (n = e[i]) &&
    (Array.isArray(n)
      ? n.length > 0
      : "object" == t(n) && (n.chooseSymbol || n.name || n.code))) ||
    (e[i] = o);
}
function T(t) {
  var i = t.hqBridge,
    o = t.onTradingChange,
    n = t.intervalMs,
    s = void 0 === n ? 3e4 : n,
    r = null,
    a = null,
    c = !1,
    l = null;
  function d() {
    return h(
      this,
      null,
      e().mark(function t() {
        var n, s, a, c;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    r ||
                      (r = new f.DetailApi(function (e) {
                        return i.request(e, "GET");
                      })),
                    (n = r),
                    (e.next = 4),
                    n.getMarketState({ market: 0 }, { needProcess: !0 })
                  );
                case 4:
                  (s = e.sent),
                    (a = ((null == s ? void 0 : s.split("|")) || [])
                      .map(function (e) {
                        return e.split("_");
                      })
                      .filter(function (e) {
                        return "NEWSH" === e[0];
                      })),
                    (c = !!a.length && "open" === a[0][1]) !== l &&
                      ((l = c), o && o({ isTrading: c, raw: s })),
                    (e.next = 12);
                  break;
                case 10:
                  (e.prev = 10), (e.t0 = e.catch(0));
                case 12:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[0, 10]]
        );
      })
    );
  }
  return {
    start: function () {
      c ||
        ((c = !0),
        d(),
        a && clearInterval(a),
        (a = setInterval(function () {
          c && d();
        }, s)));
    },
    stop: function () {
      (c = !1), a && (clearInterval(a), (a = null)), (l = null);
    },
    checkTradeTime: d,
  };
}
var _ = "Iib00p000a011",
  w = {
    components: {
      HotTopicNavBar: function () {
        return "../hotTopicPages/components/HotTopicNavBar.js";
      },
      TeachPop: function () {
        return "../components/TeachPop.js";
      },
      DividendMoreBlock: function () {
        return "./components/DividendMoreBlock.js";
      },
      DividendCompareCard: function () {
        return "./components/DividendCompareCard.js";
      },
      StMiniMins: function () {
        return "../../../../asyncCom/@tencent/st-mini-mins/src/index.js";
      },
      FooterBar: function () {
        return "../hotTopicPages/components/FooterBar.js";
      },
      HalfScreenAiEntry: function () {
        return "../../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
      WzqInfoModal: function () {
        return "../node-modules/@tencent/st-wzqinfo-modal/src/WzqInfoModal.js";
      },
      stStatus: function () {
        return "../../../../../node-modules/@tencent/st-status/mp/index.js";
      },
      TrustFooter: function () {
        return "../../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
      },
    },
    setup: function () {
      var t = p.inject("hqBridge"),
        i = ["mpwzq", "wzqlight"].includes("mpweapp");
      p.StockBridge.report("hq.etf.etf_dividend_discover_detail_page_show"),
        p.StockBridge.mtaReport({ busi: "hq", eventName: "page_brow" });
      var o = { light: "white", white: "white", black: "dark", dark: "dark" },
        n = p.getCurrentInstance(),
        s = v.useWatchlist({
          isMp: !0,
          isApp: !1,
          getSdk: function () {
            return n && n.proxy && n.proxy.$sdk;
          },
          eventName: "selected_etf_module_favorite_add_click",
        });
      return {
        hqBridge: t,
        isLite: i,
        isMP: !0,
        isAPP: !1,
        title: "享红利",
        getThemeSkin: function () {
          var e = "light";
          return (
            "undefined" != typeof document
              ? (e =
                  o[
                    document.body.getAttribute("data-theme") ||
                      document.body.getAttribute("data-st-theme") ||
                      "light"
                  ])
              : void 0 !== p.wx$1 &&
                (e = o[p.wx$1.getStorageSync("user/skin") || "light"]),
            e || "light"
          );
        },
        isSelectStockAdded: s.isAdded,
        isSelectStockLoading: s.isLoading,
        isWatchlistSubmitting: s.isSubmitting,
        syncSelectStockAdded: function (e) {
          return s.sync(e);
        },
        updateSelectStockWatchlist: function (t, i) {
          return h(
            this,
            null,
            e().mark(function o() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", s.toggle(t, i));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, o);
            })
          );
        },
      };
    },
    data: function () {
      return {
        showRatePop: !1,
        showAiDialog: !1,
        selectedAiQuestion: null,
        popConfig: {
          title: "股息率",
          infoText:
            "股息率为ETF跟踪指数的股息率：指数股息率 = 指数成分股近一年总分红金额 ÷ 指数当前总市值",
        },
        showTipModal: !1,
        tipModalConfig: {},
        theme: "light",
        advantageList: [
          { tag: "精挑细选", text: "精选长期稳定分红的优质公司" },
          { tag: "收益多元", text: "分红、增值两手抓，长期跑赢银行存款" },
        ],
        worthTags: [],
        zoneLoaded: !1,
        worthTagsFailed: !1,
        selectEtfFailed: !1,
        selectEtfState: "loading",
        selectStock: {
          name: "",
          code: "",
          chooseSymbol: "",
          fundId: "",
          fundCode: "",
          yearChange: "",
          dividendRate: "",
          price: "",
          feature: "",
          supportRegularInvest: void 0,
        },
        tradeTimePolling: null,
        isTrading: !1,
        pollingActive: !1,
        dataPollingRunning: !1,
        tradeInterval: null,
        pollingTimer: null,
        isTradeSubmitting: !1,
        isAccountBind: !1,
        showRegularInvest: !1,
        scrollTop: 0,
        safeTop: 0,
        navBarHeight: 0,
      };
    },
    computed: {
      headerAlpha: function () {
        return this.scrollTop <= 30 ? 0 : Math.min(1, this.scrollTop / 120);
      },
      hasCustomNav: function () {
        return this.isMP || this.isAPP;
      },
      headerWrapperStyle: function () {
        if (!this.hasCustomNav) return {};
        var e = (this.safeTop || 0) + (this.navBarHeight || 0);
        return {
          paddingTop: "".concat(e + 12, "px"),
          height: "".concat(e + 136, "px"),
        };
      },
      visibleWorthTags: function () {
        return (this.worthTags || []).slice(0, 3);
      },
      hasValidSelectStock: function () {
        var e = this.selectStock || {};
        return !!(e.chooseSymbol || e.name || e.code);
      },
      isSelectDividendZero: function () {
        var e,
          t = null == (e = this.selectStock) ? void 0 : e.dividendRate;
        if (null == t || "" === t) return !0;
        var i = parseFloat(String(t).replace(/[+%,\s]/g, ""));
        return !Number.isFinite(i) || 0 === i;
      },
      aiReportInfo: function () {
        return {
          symbol: this.selectStock.chooseSymbol || this.selectStock.code || "",
          topic_name: this.selectStock.name || "享红利",
        };
      },
      aiDialogQuestion: function () {
        var e;
        return (
          (null == (e = this.selectedAiQuestion) ? void 0 : e.title) ||
          "红利ETF怎么投？聚焦稳健投资策略"
        );
      },
      aiQuestionQuery: function () {
        var e, t;
        return (
          (null == (e = this.selectedAiQuestion) ? void 0 : e.prompt) ||
          (null == (t = this.selectedAiQuestion) ? void 0 : t.query) ||
          this.aiDialogQuestion
        );
      },
      aiDialogServerObj: function () {
        var e, t, i, o;
        return u(d({}, this.selectedAiQuestion || {}), {
          title: this.aiDialogQuestion,
          prompt: this.aiQuestionQuery,
          scene:
            (null == (e = this.selectedAiQuestion) ? void 0 : e.scene) ||
            "etfdividend",
          sub_channel:
            (null == (t = this.selectedAiQuestion) ? void 0 : t.sub_channel) ||
            "manual",
          sub_scene:
            (null == (i = this.selectedAiQuestion) ? void 0 : i.sub_scene) ||
            "dividend_detail",
          ext_content:
            (null == (o = this.selectedAiQuestion) ? void 0 : o.ext_content) ||
            this.selectStock.chooseSymbol ||
            this.selectStock.code ||
            "",
        });
      },
      shareDesc: function () {
        return (this.advantageList || [])
          .map(function (e) {
            return e.text;
          })
          .filter(Boolean)
          .join("；");
      },
      sharePath: function () {
        return "undefined" != typeof window ? window.location.href : void 0;
      },
      showRegularInvestButton: function () {
        var e = this.selectStock.supportRegularInvest;
        return (
          (null == e ||
            "" === e ||
            !0 === e ||
            1 === e ||
            "1" === e ||
            "true" === e) &&
          (!this.isAccountBind || this.showRegularInvest)
        );
      },
    },
    created: function () {
      var e = this;
      this.tradeTimePolling = T({
        hqBridge: this.hqBridge,
        onTradingChange: function (t) {
          var i = t.isTrading;
          (e.isTrading = i),
            e.pollingActive && i ? e.startDataPolling() : e.stopDataPolling();
        },
      });
    },
    mounted: function () {
      (this.theme = this.getThemeSkin()),
        this.init(),
        this.isMP || this.resetScrollTop();
    },
    activated: function () {
      this.resetScrollTop(), this.init(), (this.theme = this.getThemeSkin());
    },
    deactivated: function () {
      this.clear();
    },
    beforeDestroy: function () {
      this.clear();
    },
    methods: {
      tabActivated: function () {
        this.init();
      },
      tabDeactivated: function () {
        this.clear();
      },
      handleNavLayout: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.safeTop,
          i = void 0 === t ? 0 : t,
          o = e.navBarHeight,
          n = void 0 === o ? 0 : o;
        (this.safeTop = i), (this.navBarHeight = n);
      },
      resetScrollTop: function () {
        if ("undefined" != typeof window && "undefined" != typeof document) {
          var e = function () {
            window.scrollTo(0, 0),
              document.documentElement &&
                (document.documentElement.scrollTop = 0),
              document.body && (document.body.scrollTop = 0);
          };
          this.$nextTick(function () {
            e(),
              requestAnimationFrame(function () {
                e(),
                  requestAnimationFrame(function () {
                    e(),
                      setTimeout(e, 0),
                      setTimeout(e, 50),
                      setTimeout(e, 200);
                  });
              });
          });
        }
      },
      init: function () {
        var e = this;
        this.fetchShowRegularInvest(),
          this.startPolling(),
          this.syncSelectStockAdded(this.selectStock.chooseSymbol),
          this.$nextTick(function () {
            p.StockBridge.mtaReport({
              busi: "hq",
              eventName: "what_is_good_module_brow",
              exposure: { selector: ".module-good", context: e },
            }),
              p.StockBridge.report("hq.etfzonebonus.bottom_question_gold_brow");
          }),
          (this.handleScroll = function () {
            if (
              "undefined" != typeof window &&
              "undefined" != typeof document
            ) {
              var t = document.documentElement;
              e.scrollTop = window.pageYOffset || t.scrollTop || 0;
            }
          }),
          "undefined" != typeof window &&
            window.addEventListener("scroll", this.handleScroll, {
              passive: !0,
            });
      },
      clear: function () {
        this.stopPolling(),
          (this.showRatePop = !1),
          "undefined" != typeof window &&
            "function" == typeof this.handleScroll &&
            (window.removeEventListener("scroll", this.handleScroll),
            (this.handleScroll = null));
      },
      setScrollTop: function (e) {
        var t = Number(e);
        Number.isFinite(t) && (this.scrollTop = t);
      },
      formatPrice: function (e) {
        var t = Number.parseFloat(e);
        return Number.isFinite(t) ? (100 * t).toFixed(2) : "--";
      },
      startPolling: function () {
        this.pollingActive ||
          ((this.pollingActive = !0),
          this.fetchDetailData(),
          this.startMarketState());
      },
      stopPolling: function () {
        (this.pollingActive = !1),
          this.stopMarketState(),
          this.stopDataPolling();
      },
      startMarketState: function () {
        this.tradeTimePolling.start();
      },
      stopMarketState: function () {
        this.tradeTimePolling.stop();
      },
      startDataPolling: function () {
        this.dataPollingRunning ||
          ((this.dataPollingRunning = !0), this.scheduleNextFetch(5e3));
      },
      stopDataPolling: function () {
        (this.dataPollingRunning = !1),
          this.pollingTimer &&
            (clearTimeout(this.pollingTimer), (this.pollingTimer = null));
      },
      scheduleNextFetch: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3;
        this.pollingTimer &&
          (clearTimeout(this.pollingTimer), (this.pollingTimer = null)),
          (this.pollingTimer = setTimeout(
            function () {
              return h(
                this,
                null,
                e().mark(function t() {
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.t0 =
                                this.pollingActive && this.dataPollingRunning),
                              !e.t0)
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (e.next = 4), this.fetchDetailData();
                          case 4:
                            this.pollingActive &&
                              this.dataPollingRunning &&
                              this.scheduleNextFetch(5e3);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
            }.bind(this),
            t
          ));
      },
      fetchDetailData: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var i,
              o,
              n,
              s,
              r,
              a,
              c,
              l,
              h,
              m,
              g,
              v,
              T,
              w,
              x,
              A,
              C,
              R = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (h = !(
                          !this.selectStock ||
                          (!this.selectStock.chooseSymbol &&
                            !this.selectStock.name)
                        )) || y(this, "selectStock", d({}, b)),
                        h || (this.selectEtfState = "loading"),
                        (m = (this.worthTags || []).length > 0) ||
                          y(this, "worthTags", k(3)),
                        (e.prev = 4),
                        (e.next = 7),
                        S.api.getDividendZone(this.hqBridge)
                      );
                    case 7:
                      if (
                        ((g = e.sent),
                        0 === Number(null == g ? void 0 : g.code))
                      ) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (h || (this.selectEtfFailed = !0),
                        void (
                          m ||
                          ((this.zoneLoaded = !1), (this.worthTagsFailed = !0))
                        ))
                      );
                    case 10:
                      (v = (null == g ? void 0 : g.data) || {}),
                        (T = (null == (i = v.worth) ? void 0 : i.tags) || []),
                        (this.worthTags = T),
                        (w = (v.recommends || [])[0]) &&
                          ((x = w.symbol || ""),
                          (A = f.utils.splitSymbol(x) || {}),
                          (C = A.scode),
                          (this.selectStock = u(d({}, this.selectStock), {
                            chooseSymbol: x,
                            name: w.name || "",
                            code: C || x,
                            fundCode: w.fund_code || w.fundCode || C || x,
                            fundId: w.fund_id || w.fundId || w.id || C || x,
                            yearChange: w.week_52_change_pct || "",
                            dividendRate: w.dividend_yield || "",
                            price: w.price || "",
                            feature: w.selling_point || "",
                            supportRegularInvest:
                              null !=
                              (l =
                                null !=
                                (c =
                                  null !=
                                  (a =
                                    null !=
                                    (r =
                                      null !=
                                      (s =
                                        null !=
                                        (n =
                                          null != (o = w.support_regular_invest)
                                            ? o
                                            : w.supportRegularInvest)
                                          ? n
                                          : w.can_regular_invest)
                                        ? s
                                        : w.canRegularInvest)
                                      ? r
                                      : w.is_support_regular_invest)
                                    ? a
                                    : w.isSupportRegularInvest)
                                  ? c
                                  : w.support_sip)
                                ? l
                                : w.supportSip,
                          })),
                          this.syncSelectStockAdded(
                            this.selectStock.chooseSymbol
                          )),
                        (this.zoneLoaded = !0),
                        (this.selectEtfFailed = !1),
                        (this.worthTagsFailed = !1),
                        (this.selectEtfState = "ready"),
                        this._zoneExposureRegistered ||
                          ((this._zoneExposureRegistered = !0),
                          this.$nextTick(function () {
                            R.visibleWorthTags &&
                              R.visibleWorthTags.length &&
                              p.StockBridge.mtaReport({
                                busi: "hq",
                                eventName: "now_worth_attention_module_brow",
                                exposure: {
                                  selector: ".module-worth",
                                  context: R,
                                },
                              }),
                              p.StockBridge.mtaReport({
                                busi: "hq",
                                eventName: "selected_etf_module_brow",
                                exposure: {
                                  selector: ".module-select",
                                  context: R,
                                },
                              }),
                              p.StockBridge.mtaReport({
                                busi: "hq",
                                eventName:
                                  "selected_etf_module_instant_buy_brow",
                                exposure: {
                                  selector: ".module-select .btn-primary",
                                  context: R,
                                },
                                params: { fchannel_id_fm_i: _ },
                              }),
                              p.StockBridge.mtaReport({
                                busi: "hq",
                                eventName:
                                  "selected_etf_module_investment_brow",
                                exposure: {
                                  selector: ".module-select .btn-plain",
                                  context: R,
                                },
                                params: { fchannel_id_fm_i: _ },
                              });
                          })),
                        (e.next = 20);
                      break;
                    case 17:
                      (e.prev = 17),
                        (e.t0 = e.catch(4)),
                        h || (this.selectEtfFailed = !0),
                        m ||
                          ((this.zoneLoaded = !1), (this.worthTagsFailed = !0));
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[4, 17]]
            );
          })
        );
      },
      formatPercentValue: g.formatPercentValue,
      formatChangeRateValue: g.formatChangeRateValue,
      onErrorRetry: function () {
        (this.selectEtfFailed = !1),
          (this.worthTagsFailed = !1),
          this.fetchDetailData();
      },
      getZdpClass: function (e) {
        if (null == e || "" === e) return "";
        var t = parseFloat(String(e).replace(/[+%,\s]/g, ""));
        return Number.isNaN(t) ? "" : t < 0 ? "down" : t > 0 ? "up" : "";
      },
      openDividendRatePop: function () {
        p.StockBridge.report("hq.etf.etf_dividend_rate_tip_click"),
          (this.popConfig = {
            title: "股息率",
            infoText:
              "股息率为ETF跟踪指数的股息率：指数股息率 = 指数成分股近一年总分红金额 ÷ 指数当前总市值",
          }),
          (this.tipModalConfig = {
            title: this.popConfig.title,
            content: [{ type: "text", text: this.popConfig.infoText }],
            cancelBtn: "我知道了",
          }),
          (this.showTipModal = !0);
      },
      openIndexFilterTip: function () {
        (this.popConfig = {
          title: "指数过滤",
          infoText:
            "市场上存在多只ETF跟踪同一指数，这些ETF的走势相近。勾选“指数过滤”后，榜单内跟踪相同指数的ETF仅展示一只。",
        }),
          (this.tipModalConfig = {
            title: this.popConfig.title,
            content: [{ type: "text", text: this.popConfig.infoText }],
            cancelBtn: "我知道了",
          }),
          (this.showTipModal = !0);
      },
      handleStockClick: function (e) {
        if (e) {
          p.StockBridge.mtaReport({
            busi: "hq",
            eventName: "selected_etf_module_etf_name_click",
          });
          var t = f.utils.splitSymbol(e) || {},
            i = t.market,
            o = t.scode;
          p.StockRouter.routeTo({
            name: "stockdetail",
            query: { market: i, scode: o, scrollToTop: !0 },
          });
        }
      },
      normalizeSelectedEtfSymbol: function () {
        var e = this.selectStock.chooseSymbol || this.selectStock.code || "",
          t = f.utils.splitSymbol(e) || {},
          i = t.market,
          o = t.scode;
        return i && o
          ? { market: i, scode: o }
          : /^5/.test(e)
          ? { market: "sh", scode: e }
          : /^(0|1|2|3)/.test(e)
          ? { market: "sz", scode: e }
          : { market: "cnjj", scode: e };
      },
      getSelectedEtfTradeInfo: function () {
        var e = this.normalizeSelectedEtfSymbol(),
          t = e.market,
          i = e.scode;
        return {
          market: t,
          scode: i,
          fundCode: this.selectStock.fundCode || i,
          fundId: this.selectStock.fundId || i,
          fundName: this.selectStock.name || "",
        };
      },
      fetchShowRegularInvest: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var i, o, n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((o = p.StockBridge.tradeFunc)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        ((this.isAccountBind = !1),
                        void (this.showRegularInvest = !1))
                      );
                    case 3:
                      return (e.prev = 3), (e.next = 6), o.fetchBrokerInfo();
                    case 6:
                      if (
                        ((this.isAccountBind = o.isBind()), this.isAccountBind)
                      ) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void (this.showRegularInvest = !0)
                      );
                    case 9:
                      (n =
                        (null == (i = o.getCurrentBroker)
                          ? void 0
                          : i.call(o)) || {}),
                        (this.showRegularInvest = g.isTargetBroker(n.code)),
                        (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13),
                        (e.t0 = e.catch(3)),
                        (this.isAccountBind = !1),
                        (this.showRegularInvest = !1);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[3, 13]]
            );
          })
        );
      },
      handleAipClick: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var i, o, n, s, r, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (p.StockBridge.mtaReport({
                          busi: "hq",
                          eventName: "selected_etf_module_investment_click",
                          params: { fchannel_id_fm_i: _ },
                        }),
                        this.isTradeSubmitting)
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (this.isTradeSubmitting = !0),
                        (e.prev = 2),
                        (i = this.selectStock),
                        (o = i.chooseSymbol),
                        (n = i.code),
                        (s = i.name),
                        (r = i.fundCode),
                        (a = i.fundId),
                        (e.next = 6),
                        m.GlobalInvestService.navigateToRegularInvest(
                          {
                            symbol: o,
                            code: n,
                            name: s,
                            fund_code: r,
                            fund_id: a,
                            source: "dividend_detail_aip",
                          },
                          _
                        )
                      );
                    case 6:
                      return (
                        (e.prev = 6), (this.isTradeSubmitting = !1), e.finish(6)
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[2, , 6, 9]]
            );
          })
        );
      },
      handleBuyClick: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var i, o, n, s, r;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (p.StockBridge.mtaReport({
                          busi: "hq",
                          eventName: "selected_etf_module_instant_buy_click",
                          params: { fchannel_id_fm_i: _ },
                        }),
                        this.isTradeSubmitting)
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (this.isTradeSubmitting = !0),
                        (e.prev = 2),
                        (i = this.selectStock),
                        (o = i.chooseSymbol),
                        (n = i.code),
                        (s = i.fundCode),
                        (r = i.fundId),
                        (e.next = 6),
                        m.GlobalInvestService.navigateToEtfBuy(
                          {
                            symbol: o,
                            code: n,
                            fund_code: s,
                            fund_id: r,
                            source: "dividend_detail_buy",
                          },
                          this,
                          _
                        )
                      );
                    case 6:
                      return (
                        (e.prev = 6), (this.isTradeSubmitting = !1), e.finish(6)
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[2, , 6, 9]]
            );
          })
        );
      },
      handleAskAi: function (e) {
        if (
          (p.StockBridge.report("hq.etfzonebonus.bottom_question_coin_click"),
          p.StockBridge.report("hq.etf.etf_dividend_ask_yuanbao_click", {
            symbol:
              this.selectStock.chooseSymbol || this.selectStock.code || "",
            topic_name: this.selectStock.name || "享红利",
          }),
          this.isAPP)
        ) {
          var t = this.selectStock.chooseSymbol || this.selectStock.code || "",
            i = "红利ETF怎么投？聚焦稳健投资策略",
            o = e || {},
            n = o.title,
            s = n || i,
            r = o.prompt || n || i,
            a = o.scene || "dividend_detail",
            c = e ? JSON.stringify(e) : "{}",
            l =
              ("undefined" != typeof document &&
                document.body.getAttribute("data-theme")) ||
              "light",
            d = "light" === l || "white" === l,
            u = {
              url: "qqstock://SHY?info=".concat(
                encodeURIComponent(
                  JSON.stringify({
                    p_key: "com.tencent.shy.search_ai",
                    p_url: "semiAi?stockCode="
                      .concat(t, "&sourceFrom=")
                      .concat(a, "&aiDialogQuestion=")
                      .concat(encodeURIComponent(s), "&aiQuestionQuery=")
                      .concat(encodeURIComponent(r), "&serverObj=")
                      .concat(encodeURIComponent(c)),
                    showNav: !1,
                  })
                )
              ),
              height:
                0.8 *
                ("undefined" != typeof window ? window.screen.height : 812),
              coverColor: d ? "#66000000" : "#99000000",
              cornerRadius: 8,
            };
          "undefined" != typeof location &&
            (location.href = "qqstock://SDModal?info=".concat(
              encodeURIComponent(JSON.stringify(u))
            ));
        } else (this.selectedAiQuestion = e || null), (this.showAiDialog = !0);
      },
      handleCloseAiDialog: function () {
        (this.showAiDialog = !1), (this.selectedAiQuestion = null);
      },
      handleNavBack: function () {
        p.StockRouter.routeBack(1);
      },
      handleShare: function () {
        var e = this.selectStock.chooseSymbol || this.selectStock.code || "";
        p.StockBridge.report("hq.etf.etf_dividend_share_click", {
          symbol: e,
          topic_name: this.selectStock.name || "享红利",
        }),
          this.updateShareInfo(),
          this.isAPP &&
          (
            ("undefined" != typeof navigator && navigator.userAgent) ||
            ""
          ).match(/(OpenHarmony);?[\s\/]+([\d.]+)?/)
            ? p.StockBridge.toast("暂未支持，敬请期待", "none")
            : this.isMP ||
              (p.StockBridge.openShareGuide && p.StockBridge.openShareGuide());
      },
      getShareConfig: function () {
        return {
          title: "低息时代，如何轻松跑赢银行定期存款？",
          desc: this.shareDesc,
          path: this.sharePath,
        };
      },
      updateShareInfo: function () {
        p.StockBridge.userShare &&
          p.StockBridge.userShare(this.getShareConfig());
      },
    },
  };
Array ||
  (
    p.resolveComponent("HotTopicNavBar") +
    p.resolveComponent("dividend-compare-card") +
    p.resolveComponent("st-status") +
    p.resolveComponent("st-mini-mins") +
    p.resolveComponent("dividend-more-block") +
    p.resolveComponent("TrustFooter") +
    p.resolveComponent("teach-pop") +
    p.resolveComponent("FooterBar") +
    p.resolveComponent("half-screen-ai-entry") +
    p.resolveComponent("WzqInfoModal")
  )();
var x = p._export_sfc(w, [
  [
    "render",
    function (e, t, i, o, n, s) {
      return p.e(
        { a: s.hasCustomNav },
        s.hasCustomNav
          ? {
              b: p.o(s.handleNavBack, 582),
              c: p.o(s.handleNavLayout, 583),
              d: p.p({ title: "享红利", opacity: s.headerAlpha }),
            }
          : {},
        {
          e: p.s(s.headerWrapperStyle),
          f: p.f(n.advantageList, function (e, t, i) {
            return { a: p.t(e.tag), b: p.t(e.text), c: t };
          }),
          g: n.zoneLoaded && s.visibleWorthTags.length,
        },
        n.zoneLoaded && s.visibleWorthTags.length
          ? {
              h: p.f(s.visibleWorthTags, function (e, t, i) {
                return { a: p.t(e.label), b: p.t(e.content), c: t };
              }),
            }
          : n.worthTagsFailed
          ? {
              j: p.o(s.onErrorRetry, 584),
              k: p.p({ type: e.COMMON_PAGE_STATUS.ERROR }),
            }
          : {},
        {
          i: n.worthTagsFailed,
          l: !n.selectEtfFailed && "loading" === n.selectEtfState,
        },
        n.selectEtfFailed || "loading" !== n.selectEtfState
          ? n.selectEtfFailed
            ? {
                n: p.o(s.onErrorRetry, 585),
                o: p.p({ type: e.COMMON_PAGE_STATUS.ERROR }),
              }
            : "ready" === n.selectEtfState && s.hasValidSelectStock
            ? p.e(
                {
                  q: p.p({
                    "choose-symbol": n.selectStock.chooseSymbol,
                    "rise-drop-style": "bg-rise",
                    size: "big",
                  }),
                  r: p.t(n.selectStock.name),
                  s: n.selectStock.chooseSymbol,
                },
                n.selectStock.chooseSymbol
                  ? {
                      t: p.n({
                        "select-stock-fav--disabled":
                          o.isSelectStockLoading || o.isWatchlistSubmitting,
                      }),
                      v: o.isSelectStockAdded
                        ? "https://st.gtimg.com/design/0667186f5359a78ce53efc1fa39a1f11.png"
                        : "dark" === n.theme
                        ? "https://st.gtimg.com/design/4654b7d7d6edb557dfe667aab87f8d52.png"
                        : "https://st.gtimg.com/design/dca10e6bf1a3ebab90054961781ab090.png",
                      w: p.o(function (e) {
                        return o.updateSelectStockWatchlist(
                          n.selectStock.chooseSymbol,
                          !o.isSelectStockAdded
                        );
                      }, 586),
                    }
                  : {},
                {
                  x: p.t(s.formatChangeRateValue(n.selectStock.yearChange)),
                  y: p.n(s.getZdpClass(n.selectStock.yearChange)),
                  z: !s.isSelectDividendZero,
                },
                s.isSelectDividendZero
                  ? {}
                  : {
                      A: p.t(s.formatPercentValue(n.selectStock.dividendRate)),
                      B: p.o(function () {
                        return (
                          s.openDividendRatePop &&
                          s.openDividendRatePop.apply(s, arguments)
                        );
                      }, 587),
                    },
                {
                  C: p.t(s.formatPrice(n.selectStock.price)),
                  D: s.isSelectDividendZero,
                },
                (s.isSelectDividendZero, {}),
                { E: n.selectStock.feature },
                n.selectStock.feature ? { F: p.t(n.selectStock.feature) } : {},
                { G: s.showRegularInvestButton },
                s.showRegularInvestButton
                  ? {
                      H: p.o(function () {
                        return (
                          s.handleAipClick &&
                          s.handleAipClick.apply(s, arguments)
                        );
                      }, 588),
                    }
                  : {},
                {
                  I: p.o(function () {
                    return (
                      s.handleBuyClick && s.handleBuyClick.apply(s, arguments)
                    );
                  }, 589),
                  J: p.o(function (e) {
                    return s.handleStockClick(n.selectStock.chooseSymbol);
                  }, 590),
                }
              )
            : {}
          : {},
        {
          m: n.selectEtfFailed,
          p: "ready" === n.selectEtfState && s.hasValidSelectStock,
          K: p.o(s.openIndexFilterTip, 591),
          L: o.isLite,
        },
        (o.isLite, {}),
        {
          M: p.o(function (e) {
            return (n.showRatePop = !1);
          }, 592),
          N: p.p({
            "show-pop": n.showRatePop,
            title: n.popConfig.title,
            "info-text": n.popConfig.infoText,
          }),
          O: p.o(s.handleAskAi, 593),
          P: p.o(s.handleShare, 594),
          Q: p.p({
            scene: "etfdividend",
            "ai-report-info": s.aiReportInfo,
            "is-mp": o.isMP,
          }),
          R: n.showAiDialog && o.isMP,
        },
        n.showAiDialog && o.isMP
          ? {
              S: p.o(s.handleCloseAiDialog, 595),
              T: p.p({
                "show-ai-dialog": n.showAiDialog,
                "ai-dialog-question": s.aiDialogQuestion,
                "ai-question-query": s.aiQuestionQuery,
                "server-obj": s.aiDialogServerObj,
                theme: n.theme,
                "source-from": "dividend_detail",
              }),
            }
          : n.showAiDialog && !o.isAPP
          ? {
              V: p.o(s.handleCloseAiDialog, 596),
              W: p.p({
                "show-ai-dialog": n.showAiDialog,
                "ai-dialog-question": s.aiDialogQuestion,
                "ai-question-query": s.aiQuestionQuery,
                "server-obj": s.aiDialogServerObj,
                "source-from": "dividend_detail",
              }),
            }
          : {},
        { U: n.showAiDialog && !o.isAPP, X: n.showTipModal },
        n.showTipModal
          ? p.e(
              { Y: n.showTipModal },
              n.showTipModal
                ? {
                    Z: p.o(function (e) {
                      return (n.showTipModal = !1);
                    }, 597),
                    aa: p.p({ skin: n.theme, config: n.tipModalConfig }),
                  }
                : {}
            )
          : {},
        { ab: o.isMP ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-9a4848f9"],
]);
wx.createComponent(x);
var A = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhxLWV0Zi9kaXZpZGVuZFBhZ2VzL0RpdmlkZW5kRGV0YWlsLnZ1ZQ =
  A),
  (exports.createTradeTimePolling = T),
  (exports.placeholderRows = k);
