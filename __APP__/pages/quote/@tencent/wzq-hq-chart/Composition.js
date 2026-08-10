require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/defineProperty"),
  e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  a = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  h = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  l = function (t, e, i) {
    return e in t
      ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  u = function (t, e) {
    for (var i in e || (e = {})) h.call(e, i) && l(t, i, e[i]);
    if (o) {
      var s,
        a = n(o(e));
      try {
        for (a.s(); !(s = a.n()).done; ) {
          i = s.value;
          c.call(e, i) && l(t, i, e[i]);
        }
      } catch (t) {
        a.e(t);
      } finally {
        a.f();
      }
    }
    return t;
  },
  d = function (t, e) {
    return a(t, r(e));
  },
  p = function (t, e, i) {
    return new Promise(function (n, s) {
      var a = function (t) {
          try {
            o(i.next(t));
          } catch (t) {
            s(t);
          }
        },
        r = function (t) {
          try {
            o(i.throw(t));
          } catch (t) {
            s(t);
          }
        },
        o = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(a, r);
        };
      o((i = i.apply(t, e)).next());
    });
  },
  k = require("../../../../common/vendor.js"),
  m = require("../stock-hq-data/index.js"),
  f = require("prefetch.js"),
  g = { appid: "base", schemaid: "gray_user_config", size: "total" };
function b(t, e, i, n, s) {
  var a;
  return (function (t, e, i, n) {
    return new (i || (i = Promise))(function (s, a) {
      function r(t) {
        try {
          h(n.next(t));
        } catch (t) {
          a(t);
        }
      }
      function o(t) {
        try {
          h(n.throw(t));
        } catch (t) {
          a(t);
        }
      }
      function h(t) {
        var e;
        t.done
          ? s(t.value)
          : ((e = t.value),
            e instanceof i
              ? e
              : new i(function (t) {
                  t(e);
                })).then(r, o);
      }
      h((n = n.apply(t, e || [])).next());
    });
  })(this, void 0, void 0, function () {
    var s, r, o, h, c, l, u;
    return (function (t, e) {
      var i,
        n,
        s,
        a,
        r = {
          label: 0,
          sent: function () {
            if (1 & s[0]) throw s[1];
            return s[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (a = { next: o(0), throw: o(1), return: o(2) }),
        "function" == typeof Symbol &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function o(a) {
        return function (o) {
          return (function (a) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; r; )
              try {
                if (
                  ((i = 1),
                  n &&
                    (s =
                      2 & a[0]
                        ? n.return
                        : a[0]
                        ? n.throw || ((s = n.return) && s.call(n), 0)
                        : n.next) &&
                    !(s = s.call(n, a[1])).done)
                )
                  return s;
                switch (((n = 0), s && (a = [2 & a[0], s.value]), a[0])) {
                  case 0:
                  case 1:
                    s = a;
                    break;
                  case 4:
                    return r.label++, { value: a[1], done: !1 };
                  case 5:
                    r.label++, (n = a[1]), (a = [0]);
                    continue;
                  case 7:
                    (a = r.ops.pop()), r.trys.pop();
                    continue;
                  default:
                    if (
                      !(
                        (s = (s = r.trys).length > 0 && s[s.length - 1]) ||
                        (6 !== a[0] && 2 !== a[0])
                      )
                    ) {
                      r = 0;
                      continue;
                    }
                    if (3 === a[0] && (!s || (a[1] > s[0] && a[1] < s[3]))) {
                      r.label = a[1];
                      break;
                    }
                    if (6 === a[0] && r.label < s[1]) {
                      (r.label = s[1]), (s = a);
                      break;
                    }
                    if (s && r.label < s[2]) {
                      (r.label = s[2]), r.ops.push(a);
                      break;
                    }
                    s[2] && r.ops.pop(), r.trys.pop();
                    continue;
                }
                a = e.call(t, r);
              } catch (t) {
                (a = [6, t]), (n = 0);
              } finally {
                i = s = 0;
              }
            if (5 & a[0]) throw a[1];
            return { value: a[0] ? a[1] : void 0, done: !0 };
          })([a, o]);
        };
      }
    })(this, function (d) {
      switch (d.label) {
        case 0:
          return (
            d.trys.push([0, 4, , 5]),
            (s = n),
            (r = []),
            t ? (void 0 !== s ? [3, 2] : [4, e.get(g)]) : [2, !1]
          );
        case 1:
          if (200 !== (o = d.sent()).code) return [2, !1];
          if (
            !(
              (h =
                null === (a = o.data) || void 0 === a
                  ? void 0
                  : a.findIndex(function (t) {
                      return t.key === i || Number(t.key) === Number(i);
                    })) >= 0
            )
          )
            return [2, !1];
          s = o.data[h].grayScale || 0;
          try {
            r = (r = JSON.parse(o.data[h].whitelist) || []).map(function (t) {
              return "".concat(t).trim();
            });
          } catch (t) {
            r = [];
          }
          return [3, 3];
        case 2:
          if (!(s >= 0 && s <= 99)) return [2, !1];
          d.label = 3;
        case 3:
          return (
            (c = new k.MurmurHash3(t, parseInt(i)).result()),
            (l = c % 100),
            (u =
              r.findIndex(function (e) {
                return e === t;
              }) >= 0),
            [2, l < s || u]
          );
        case 4:
          return d.sent(), [2, !1];
        case 5:
          return [2];
      }
    });
  });
}
var y = function (t, e, i, n) {
    return new (i || (i = Promise))(function (s, a) {
      function r(t) {
        try {
          h(n.next(t));
        } catch (t) {
          a(t);
        }
      }
      function o(t) {
        try {
          h(n.throw(t));
        } catch (t) {
          a(t);
        }
      }
      function h(t) {
        var e;
        t.done
          ? s(t.value)
          : ((e = t.value),
            e instanceof i
              ? e
              : new i(function (t) {
                  t(e);
                })).then(r, o);
      }
      h((n = n.apply(t, e || [])).next());
    });
  },
  S = function (t, e) {
    var i,
      n,
      s,
      a,
      r = {
        label: 0,
        sent: function () {
          if (1 & s[0]) throw s[1];
          return s[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (a = { next: o(0), throw: o(1), return: o(2) }),
      "function" == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function o(a) {
      return function (o) {
        return (function (a) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; r; )
            try {
              if (
                ((i = 1),
                n &&
                  (s =
                    2 & a[0]
                      ? n.return
                      : a[0]
                      ? n.throw || ((s = n.return) && s.call(n), 0)
                      : n.next) &&
                  !(s = s.call(n, a[1])).done)
              )
                return s;
              switch (((n = 0), s && (a = [2 & a[0], s.value]), a[0])) {
                case 0:
                case 1:
                  s = a;
                  break;
                case 4:
                  return r.label++, { value: a[1], done: !1 };
                case 5:
                  r.label++, (n = a[1]), (a = [0]);
                  continue;
                case 7:
                  (a = r.ops.pop()), r.trys.pop();
                  continue;
                default:
                  if (
                    !(
                      (s = (s = r.trys).length > 0 && s[s.length - 1]) ||
                      (6 !== a[0] && 2 !== a[0])
                    )
                  ) {
                    r = 0;
                    continue;
                  }
                  if (3 === a[0] && (!s || (a[1] > s[0] && a[1] < s[3]))) {
                    r.label = a[1];
                    break;
                  }
                  if (6 === a[0] && r.label < s[1]) {
                    (r.label = s[1]), (s = a);
                    break;
                  }
                  if (s && r.label < s[2]) {
                    (r.label = s[2]), r.ops.push(a);
                    break;
                  }
                  s[2] && r.ops.pop(), r.trys.pop();
                  continue;
              }
              a = e.call(t, r);
            } catch (t) {
              (a = [6, t]), (n = 0);
            } finally {
              i = s = 0;
            }
          if (5 & a[0]) throw a[1];
          return { value: a[0] ? a[1] : void 0, done: !0 };
        })([a, o]);
      };
    }
  },
  w = [
    { key: "mins", value: "分时" },
    { key: "fiveMins", value: "五日" },
    { key: "dayKline", value: "日K" },
    { key: "weekKline", value: "周K" },
    { key: "monthKline", value: "月K" },
  ],
  T = [
    { key: "m1Kline", value: "1分", easy: "m1" },
    { key: "m5Kline", value: "5分", easy: "m5" },
    { key: "m15Kline", value: "15分", easy: "m15" },
    { key: "m30Kline", value: "30分", easy: "m30" },
    { key: "m60Kline", value: "60分", easy: "m60" },
    { key: "m120Kline", value: "120分", easy: "m120" },
    { key: "seasonKline", value: "季K", easy: "season" },
    { key: "yearKline", value: "年K", easy: "year" },
  ],
  v = [
    { key: "oneMonthKline", value: "1个月" },
    { key: "threeMonthKline", value: "3个月" },
    { key: "halfYearKline", value: "半年" },
    { key: "oneYearKline", value: "1年" },
    { key: "threeYearKline", value: "3年" },
    { key: "fiveYearKline", value: "5年" },
    { key: "allYearKline", value: "全部" },
  ],
  M = {
    components: {
      Mins: function () {
        return "./Mins.js";
      },
      FiveMins: function () {
        return "./FiveMins.js";
      },
      Kline: function () {
        return "./Kline.js";
      },
      MinsBar: function () {
        return "./components/MinsBar.js";
      },
      KlineBar: function () {
        return "./components/KlineBar.js";
      },
      Selector: function () {
        return "./components/Selector.js";
      },
      TradeDetail: function () {
        return "../wzq-detail-trade-detail/TradeDetail.js";
      },
      NewsBar: function () {
        return "./components/NewsBar.js";
      },
      AnchorTip: function () {
        return "./components/AnchorTip.js";
      },
      FqSwitchDialog: function () {
        return "./components/FqSwitchDialog.js";
      },
      FqBubble: function () {
        return "./components/FqBubble.js";
      },
      SettingPopup: function () {
        return "./components/SettingPopup/mp.js";
      },
      SettingTipBubble: function () {
        return "./components/SettingTipBubble.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      width: Number,
      height: Number,
      skin: String,
      market: String,
      scode: String,
      currency: String,
      hideMoreTabs: Boolean,
      added: Boolean,
      quote: Object,
      customSetting: Object,
      pageReady: Boolean,
      landscape: Boolean,
      queryTabKey: String,
      stockType: String,
      isAccountOpen: Boolean,
      canShowAiVolatile: { type: Boolean, default: !1 },
      canShowSupportPressureSignal: { type: Boolean, default: !1 },
      enableNewsBar: { type: Boolean, default: !0 },
      source: String,
      widgetParams: {
        type: Object,
        default: function () {
          return {
            hideIndicator: !1,
            hideClickTips: !1,
            hideChartSetting: !1,
            disableTapEvent: !1,
          };
        },
      },
      hkVIP: Boolean,
    },
    data: function () {
      return {
        HQ_CHART_COMPOSITION: !0,
        tabKey: w[0].key,
        tabVisited: { mins: !0, fiveMins: !1, kline: !1 },
        moreTabs: T,
        moreTabName: "",
        moreTabSelected: !1,
        initSelector: !1,
        kType: "day",
        lastUpdateTime: 0,
        isTrading: !1,
        minsOptions: null,
        showDataBar: !1,
        minsBarData: null,
        klineBarData: null,
        chartHeight: 0,
        chartHeightCache: 0,
        sideWidth: 0,
        sideWidthCache: {},
        defaultSetting: f.getDefaultSetting(),
        openLandTimer: null,
        showSettingPopup: !1,
        showFqSwitchDialog: !1,
        showFqBubble: !1,
        fqBubblePosition: null,
        isAuctionTime: !1,
        isWaitingForTrading: !1,
        showNewsBar: !1,
        ensureTimeout: null,
        showAnchorTip: !1,
        anchorTipData: null,
        anchorPosition: { x: 0, y: 0 },
        anchorCorner: "top-left",
        isAnchorTipGrayUser: !1,
      };
    },
    computed: {
      tabs: function () {
        var t = this;
        return w.filter(function (e) {
          return "fiveMins" !== e.key || !m.utils.isForex(t.market);
        });
      },
      yearNames: function () {
        var t = this;
        return v.filter(function (e) {
          return (
            "allYearKline" !== e.key ||
            (!m.utils.isFutures(t.market) && !m.utils.isSPMarket(t.market))
          );
        });
      },
      isSupportTradeLine: function () {
        return (
          m.utils.isHSMarket(this.market) &&
          ["GP-A", "GP-A-CYB", "GP-A-KCB"].includes(this.stockType)
        );
      },
      isSupportFq: function () {
        return !(
          m.utils.isIndex(this.stockType) ||
          m.utils.isHSPlate(this.market) ||
          m.utils.isDebt(this.stockType) ||
          m.utils.isNationalDebt(this.stockType) ||
          m.utils.isTransferableDebt(this.stockType) ||
          m.utils.isWarrants(this.stockType) ||
          m.utils.isFutures(this.market) ||
          m.utils.isSPMarket(this.market) ||
          m.utils.isForex(this.market)
        );
      },
      hasAuctionMarket: function () {
        var t =
            (m.utils.isHSMarket(this.market) ||
              m.utils.isHKMarket(this.market)) &&
            !m.utils.isIndex(this.stockType),
          e = m.utils.isBJMarket(this.market) && m.utils.isFund(this.stockType);
        return t || e;
      },
      symbol: function () {
        return m.utils.getSymbol(this.market, this.scode);
      },
      wraperStyle: function () {
        return "width: ".concat(this.width, "px;");
      },
      chartWidth: function () {
        return this.width - this.sideWidth - 8;
      },
      setting: function () {
        return Object.assign({}, this.defaultSetting, this.customSetting);
      },
      showMoreTabs: function () {
        return !(
          this.hideMoreTabs ||
          m.utils.isBJMarket(this.market) ||
          m.utils.isNQMarket(this.market) ||
          m.utils.isUKMarket(this.market) ||
          m.utils.isFTIndex(this.market) ||
          m.utils.isFutures(this.market) ||
          m.utils.isSPMarket(this.market) ||
          m.utils.isForex(this.market)
        );
      },
      showSideArea: function () {
        var t;
        return this.landscape
          ? this.showTradeDetail
          : this.showTradeDetail &&
              "mins" === this.tabKey &&
              (null == (t = this.setting.minsSetting) ? void 0 : t.showFive);
      },
      showMinsFiveTips: function () {
        var t = Object.keys(this.setting.minsSetting || {});
        return (
          !(t.includes("showFive") || t.includes("showIndicator")) &&
          !this.landscape &&
          this.showTradeDetail &&
          "mins" === this.tabKey
        );
      },
      hkAndHKVIP: function () {
        return m.utils.isHKMarket(this.market) && this.hkVIP;
      },
      showTradeDetail: function () {
        return (
          this.quote &&
          !m.utils.isForex(this.market) &&
          !m.utils.isSPMarket(this.market) &&
          (m.utils.isHSMarket(this.market) ||
            m.utils.isBJMarket(this.market) ||
            m.utils.isNQMarket(this.market) ||
            (m.utils.isFutures(this.market) &&
              !m.utils.isHDFutures(this.market)) ||
            (m.utils.isHKMarket(this.market) && this.hkVIP)) &&
          !m.utils.isIndex(this.stockType)
        );
      },
      isMoreKline: function () {
        return (
          this.landscape &&
          !m.utils.isBJMarket(this.market) &&
          !m.utils.isNQMarket(this.market) &&
          !m.utils.isForex(this.market)
        );
      },
      dataBarWidth: function () {
        return this.width - (this.showSideArea ? 0 : this.rpxToPx(8));
      },
    },
    watch: {
      quote: function (t, e) {
        var i;
        0 !== Object.keys(e).length &&
          ("mins" === this.tabKey &&
          this.isTrading &&
          (m.utils.isHSMarket(this.market) ||
            m.utils.isBJMarket(this.market) ||
            (m.utils.isHKMarket(this.market) && this.hkVIP))
            ? null == (i = this.$refs.mins) || i.handlePush(this.quote)
            : this.updateData());
      },
      setting: function (t, e) {
        var i,
          n,
          s = this;
        "mins" === this.tabKey &&
          this.showTradeDetail &&
          (null == (i = t.minsSetting) ? void 0 : i.showFive) !==
            (null == (n = e.minsSetting) ? void 0 : n.showFive) &&
          ((this.tabVisited.mins = !1),
          this.setChartArea(),
          this.$nextTick(function () {
            s.tabVisited.mins = !0;
          }));
      },
      height: function (t) {
        this.chartHeight = (t * this.setting.chartRatio) / 100;
      },
      showSideArea: function () {
        this.showAnchorTip &&
          ((this.showAnchorTip = !1), (this.anchorTipData = null));
      },
    },
    created: function () {
      var t = this;
      (this.localCacheAnchorTipShown =
        k.StockBridge.getStorage("hq_anchor_tip_shown") || {}),
        (this.isMounted = !0),
        (this.isPageShow = !0),
        (this.isMP = ["mpwzq", "mpweapp"].includes("mpweapp")),
        this.initAnchorTipGray(),
        (this.isBCCurrency = m.utils.isBCCurrency(this.market)),
        this.isBCCurrency &&
          (this.moreTabs = [
            { key: "m10Kline", value: "10分" },
            { key: "m20Kline", value: "20分" },
          ].concat(i(T.slice(3)))),
        this.ensureMarketState(),
        this.setChartArea(),
        this.queryTabKey &&
          this.$nextTick(function () {
            t.moreTabs.findIndex(function (e) {
              return e.key === t.queryTabKey;
            }) >= 0
              ? t.switchMoreChart(t.queryTabKey)
              : t.switchChart(t.queryTabKey);
          }),
        this.showMinsFiveTips && setTimeout(this.handleMinsTipClick, 3e3),
        k.StockBridge.busOn("common-quote-pageShow", this.handlePageShow),
        k.StockBridge.busOn(
          "market-chart-setting-fqChange",
          this.handleFqChange
        );
    },
    beforeUnmount: function () {
      clearTimeout(this.ensureTimeout),
        clearTimeout(this.fqBubbleTimer),
        k.StockBridge.busOff("common-quote-pageShow", this.handlePageShow),
        k.StockBridge.busOff(
          "market-chart-setting-fqChange",
          this.handleFqChange
        ),
        (this.tabVisited = { mins: !1, fiveMins: !1, kline: !1 }),
        (this.isMounted = !1);
    },
    methods: {
      initAnchorTipGray: function () {
        return p(
          this,
          null,
          e().mark(function t() {
            var i, n;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (i = this.isMP
                          ? k.StockBridge.getStorage("_qluin")
                          : k.StockBridge.getCookie("wzq_qluin")),
                        (t.next = 4),
                        (n = i),
                        "7570205536",
                        y(void 0, void 0, void 0, function () {
                          return S(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  t.trys.push([0, 2, , 3]),
                                  [4, b(n, k.Wuji, "7570205536", void 0)]
                                );
                              case 1:
                                return [2, t.sent()];
                              case 2:
                                return t.sent(), [2, !1];
                              case 3:
                                return [2];
                            }
                          });
                        })
                      );
                    case 4:
                      (this.isAnchorTipGrayUser = t.sent), (t.next = 10);
                      break;
                    case 7:
                      (t.prev = 7),
                        (t.t0 = t.catch(0)),
                        (this.isAnchorTipGrayUser = !1);
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 7]]
            );
          })
        );
      },
      handleAnchorClose: function () {
        (this.showAnchorTip = !1), (this.anchorTipData = null);
      },
      handleAIClick: function () {
        this.anchorTipData &&
          k.StockBridge.busEmit("showAiDialog", u({}, this.anchorTipData));
      },
      handlePageShow: function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.isPageShow = t;
      },
      handleFqChange: function () {
        this.canShowFqReminder()
          ? ((this.showFqSwitchDialog = !0),
            (this.setting.fqSwitchDialogTime = Date.now()),
            this.updateSetting(
              d(u({}, this.setting), { fqSwitchDialogTime: Date.now() })
            ))
          : (this.closeFqBubble(),
            k.StockBridge.toast(
              "已切换复权类型，k线和股价可能发生变化",
              "none"
            ));
      },
      closeFqSwitchDialog: function () {
        this.showFqSwitchDialog = !1;
      },
      canShowFqReminder: function () {
        var t = this.setting.fqSwitchDialogTime || 0;
        return Date.now() - t > 2592e6;
      },
      checkFqBubble: function () {
        var t,
          e,
          i = this;
        if (
          "dayKline" === this.tabKey &&
          3 === this.setting.miFq &&
          this.isSupportFq &&
          this.canShowFqReminder()
        ) {
          var n =
            null ==
            (e =
              null == (t = this.$refs.kline) ? void 0 : t.getExRightGapPosition)
              ? void 0
              : e.call(t);
          n &&
            ((this.fqBubblePosition = n),
            (this.showFqBubble = !0),
            this.updateSetting(
              d(u({}, this.setting), { fqSwitchDialogTime: Date.now() })
            ),
            clearTimeout(this.fqBubbleTimer),
            (this.fqBubbleTimer = setTimeout(function () {
              i.closeFqBubble();
            }, 5e3)));
        }
      },
      closeFqBubble: function () {
        this.showFqBubble &&
          (clearTimeout(this.fqBubbleTimer), (this.showFqBubble = !1));
      },
      handleFqBubbleJump: function () {
        this.closeFqBubble(), this.landscape || this.goSetting(!0);
      },
      changeRefreshStatus: function (t) {
        this.$emit("changeRefreshStatus", t);
      },
      handleError: function (t) {
        k.StockBridge.aegisReportEvent("MONITOR-QUOTEDETAIL-INIT-CANVAS-FAIL", {
          ext3: JSON.stringify({ message: t.key, options: t.options }),
        });
      },
      handleMinsTipClick: function () {
        var t;
        (null == (t = this.setting.minsSetting) ? void 0 : t.showFive) ||
          ((this.setting.minsSetting = d(
            u({}, this.setting.minsSetting || {}),
            { showFive: !1 }
          )),
          this.$emit("updateSetting", u({}, this.setting)),
          k.StockBridge.report("hq.detail.mins_tips_click", {
            stockid: this.symbol,
          }));
      },
      rpxToPx: function (t) {
        var e = 375;
        if (this.isMP) {
          var i =
              (k.wx$1.getWindowInfo && k.wx$1.getWindowInfo()) ||
              k.wx$1.getSystemInfoSync(),
            n = i.windowWidth,
            s = i.windowHeight;
          e = this.landscape ? Math.max(n, s) : Math.min(n, s);
        } else {
          if (/(Windows|Mac)Wechat/i.test(navigator.userAgent)) return t / 2;
          e = screen.width || window.innerWidth;
        }
        var a = t * (e / 375);
        return Math.floor(a / 2);
      },
      hasAnchorTipShown: function (e, i) {
        try {
          var n = f.getTodayKey(),
            s = this.localCacheAnchorTipShown[n] || "",
            a = "".concat(e, "|").concat(i);
          return (
            s.indexOf(a) >= 0 ||
            ((this.localCacheAnchorTipShown = t(
              {},
              n,
              s ? "".concat(s, ",").concat(a) : a
            )),
            k.StockBridge.setStorage(
              "hq_anchor_tip_shown",
              this.localCacheAnchorTipShown
            ),
            !1)
          );
        } catch (n) {
          return !1;
        }
      },
      handleShowAnchorTip: function (t) {
        var e = t.anchorPosition,
          i = t.anchorTipData,
          n = t.anchorCorner;
        !this.showAnchorTip &&
          this.isAnchorTipGrayUser &&
          (this.hasAnchorTipShown(this.symbol, i.trigger_time) ||
            ((this.anchorTipData = i),
            (this.anchorPosition = e),
            (this.anchorCorner = n),
            (this.showAnchorTip = !0)));
      },
      changeShowNewsBar: function (t) {
        this.showNewsBar = t;
      },
      closeSetting: function () {
        (this.showSettingPopup = !1),
          this.$emit("moveChartTop", !1),
          this.$emit("changeRefreshStatus", !1);
      },
      goSetting: function (t) {
        t &&
          "mins" !== this.tabKey &&
          "fiveMins" !== this.tabKey &&
          this.switchChart("dayKline"),
          t && k.StockBridge.busEmit("autoHideTradePanel", "chartSetting"),
          (this.showSettingPopup = t),
          this.$emit("changeRefreshStatus", t),
          this.$emit("moveChartTop", t);
      },
      openLandscape: function () {
        var t = this;
        if (this.landscape) this.$emit("closeLandscape");
        else {
          this.showMinsFiveTips && this.handleMinsTipClick(),
            this.openLandTimer && clearTimeout(this.openLandTimer),
            (this.openLandTimer = setTimeout(function () {
              t.$emit("openLandscape", { tabKey: t.tabKey });
            }, 0));
          var e = "mins" === this.tabKey || "fiveMins" === this.tabKey;
          m.utils.isIndex(this.stockType)
            ? k.StockBridge.report(
                e ? "stocklist.index_rotate" : "stocklist.index_rotate_kine"
              )
            : m.utils.isHSMarket(this.market)
            ? k.StockBridge.report(
                e ? "stocklist.stock_rotate" : "stocklist.stock_rotate_kline"
              )
            : m.utils.isBJMarket(this.market)
            ? k.StockBridge.report(
                e
                  ? "stocklist.stock_bj_rotate"
                  : "stocklist.stock_bj_rotate_kline"
              )
            : m.utils.isHKMarket(this.market)
            ? k.StockBridge.report(
                e
                  ? "stocklist.stock_hk_rotate"
                  : "stocklist.stock_hk_rotate_kline"
              )
            : m.utils.isUSMarket(this.market) &&
              k.StockBridge.report(
                e
                  ? "stocklist.stock_us_rotate"
                  : "stocklist.stock_us_rotate_kline"
              );
        }
      },
      getInnerRef: function (t) {
        var e = /Kline/.test(this.tabKey) ? "kline" : this.tabKey;
        return t ? this.$refs[e].$refs.chart : this.$refs[e];
      },
      getRectForMP: function (t, e) {
        return new Promise(function (i) {
          k.wx$1
            .createSelectorQuery()
            .in(t)
            .select(e)
            .boundingClientRect(function (t) {
              i(t);
            })
            .exec();
        });
      },
      setChartArea: function () {
        var t = this;
        if (this.landscape) {
          this.chartHeightCache
            ? (this.chartHeight = this.chartHeightCache)
            : this.$nextTick(function () {
                return p(
                  t,
                  null,
                  e().mark(function t() {
                    var i, n, s;
                    return e().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!this.isMP) {
                                t.next = 6;
                                break;
                              }
                              return (
                                (t.next = 3), this.getRectForMP(this, "#tabbar")
                              );
                            case 3:
                              (t.t0 = t.sent), (t.next = 7);
                              break;
                            case 6:
                              t.t0 = document
                                .getElementById("tabbar")
                                .getBoundingClientRect();
                            case 7:
                              (i = t.t0),
                                (n = i.height),
                                (s = 2 * n + 30),
                                (this.chartHeight = this.height - s);
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              });
          var i =
            (/Kline/.test(this.tabKey) ? "kline" : this.tabKey) +
            (this.landscape ? "_landscape" : "_portrait");
          this.sideWidthCache[i]
            ? (this.sideWidth = this.sideWidthCache[i])
            : this.showSideArea &&
              this.$nextTick(function () {
                return p(
                  t,
                  null,
                  e().mark(function t() {
                    var n, s, a, r;
                    return e().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!this.isMP) {
                                t.next = 6;
                                break;
                              }
                              return (
                                (t.next = 3),
                                this.getRectForMP(this, "#sideArea")
                              );
                            case 3:
                              (t.t0 = t.sent), (t.next = 7);
                              break;
                            case 6:
                              t.t0 =
                                (null ==
                                (n = document.getElementById("sideArea"))
                                  ? void 0
                                  : n.getBoundingClientRect()) || {};
                            case 7:
                              (s = t.t0),
                                (a = s.width),
                                (r = void 0 === a ? 0 : a),
                                (this.sideWidthCache[i] = r),
                                (this.sideWidth = r);
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              });
        } else
          this.$nextTick(function () {
            (t.sideWidth = t.showSideArea ? t.rpxToPx(210) : 0),
              (t.chartHeight = (t.height * t.setting.chartRatio) / 100);
          });
      },
      resetChart: function (t) {
        var e = this;
        (this.showDataBar = !1), this.setChartArea();
        var i = /Kline/.test(this.tabKey) ? "kline" : this.tabKey;
        if (this.$refs[i]) {
          var n = this.$refs[i].options;
          n &&
            ((this.$refs[i].options = null),
            this.$nextTick(function () {
              (n.options.setting = d(u({}, e.setting), {
                magicNine: e.landscape && e.setting.magicNine,
                yAixsCount: /Kline/.test(e.tabKey) ? 3 : 2,
              })),
                (e.$refs[i].options = n),
                e.$nextTick(function () {
                  e.updateData(!0),
                    e.$nextTick(function () {
                      e.moreTabs.findIndex(function (e) {
                        return e.key === t;
                      }) >= 0
                        ? e.switchMoreChart(t)
                        : e.switchChart(t);
                    });
                });
            }));
        }
      },
      updateData: function (t) {
        var e,
          i,
          n = new Date().getTime();
        (t || n - this.lastUpdateTime >= 5e3) &&
          ((this.lastUpdateTime = n),
          /Kline/.test(this.tabKey)
            ? null == (e = this.$refs.kline) || e.updateData()
            : null == (i = this.$refs[this.tabKey]) || i.updateData(),
          this.ensureMarketState(0));
      },
      switchChart: function (t, e) {
        this.moreTabSelected = !1;
        var i = this.tabKey;
        if (
          i !== t &&
          (i !== t &&
            ((this.showAnchorTip = !1),
            this.closeFqBubble(),
            this.onTouchCancel(),
            this.showMinsFiveTips && this.handleMinsTipClick()),
          /Kline/.test(i)
            ? this.$refs.kline && this.$refs.kline.tabDeactivated()
            : this.$refs[i] && this.$refs[i].tabDeactivated(),
          (this.tabKey = t),
          this.setChartArea(),
          /Kline/.test(t)
            ? ((this.tabVisited.mins = !1),
              (this.tabVisited.fiveMins = !1),
              (this.kType = t.slice(0, -5)),
              this.tabVisited.kline
                ? this.$refs.kline.tabActivated()
                : (this.tabVisited.kline = !0))
            : ((this.tabVisited.kline = !1),
              (this.tabVisited.mins = "mins" === t),
              (this.tabVisited.fiveMins = "fiveMins" === t)),
          this.$emit("switchChart", t),
          e)
        ) {
          var n = {
            mins: "stocklist.quotation_minutes",
            fiveMins: "stocklist.quotation_fiveday",
            dayKline: "stocklist.quotation_dayk",
            weekKline: "stocklist.quotation_weekk",
            monthKline: "stocklist.quotation_monthk",
            oneMonthKline: "hq.detail.kline.oneMonth_click",
            threeMonthKline: "hq.detail.kline.threemonth_click",
            halfYearKline: "hq.detail.kline.halfyear_click",
            oneYearKline: "hq.detail.kline.oneyear_click",
            threeYearKline: "hq.detail.kline.threeyear_click",
            fiveYearKline: "hq.detail.kline.fiveyear_click",
            allYearKline: "hq.detail.kline.total_click",
          }[t];
          k.StockBridge.report(n, { stockid: this.symbol });
        }
      },
      onPopupMore: function () {
        var t = this;
        k.StockBridge.busEmit("autoHideTradePanel", "moreChart"),
          (this.initSelector = !0),
          this.$nextTick(function () {
            t.$refs.selector &&
              "function" == typeof t.$refs.selector.onPopupMore &&
              t.$refs.selector.onPopupMore();
          }),
          k.StockBridge.report("hq.stock_detail.click_more_tab", {
            stockid: this.symbol,
          });
      },
      switchMoreChart: function (t) {
        this.switchChart(t, !0);
        var e = this.moreTabs.findIndex(function (e) {
          return e.key === t;
        });
        e < 0 ||
          ((this.moreTabName = this.moreTabs[e].value),
          (this.moreTabSelected = !0));
      },
      onTouchMove: function (t) {
        this.closeFqBubble(),
          this.landscape
            ? this.hqBridge.busEmit("showTouchData", {
                data: t,
                tabKey: this.tabKey,
              })
            : ((this.showDataBar = !0),
              /Kline/.test(this.tabKey)
                ? ((this.klineBarData = !0),
                  k.StockBridge.busEmit(
                    "stock_touch_kline_data_".concat(this.symbol),
                    t
                  ))
                : ((this.minsBarData = !0),
                  k.StockBridge.busEmit(
                    "stock_touch_mins_data_".concat(this.symbol),
                    t
                  )));
      },
      onTouchCancel: function () {
        k.StockBridge.report("hq.stock_detail.chart_touch_cross"),
          this.landscape
            ? this.hqBridge.busEmit("hideTouchData")
            : ((this.showDataBar = !1),
              (this.minsBarData = null),
              (this.klineBarData = null));
      },
      handleDrawEnd: function () {
        var t = this;
        "dayKline" === this.tabKey &&
          this.$nextTick(function () {
            t.isCheckedFqBubble ||
              ((t.isCheckedFqBubble = !0), t.checkFqBubble());
          });
      },
      handleExtra: function (t) {
        var e = t.qt,
          i = t.pandata,
          n = t.attribute,
          s = t.introduce;
        this.getMarketState((null == e ? void 0 : e.market) || t.market),
          (m.utils.isIndex(this.stockType) || m.utils.isHSPlate(this.market)) &&
            this.$emit("getZDP", (null == e ? void 0 : e.zhishu) || t.zhishu),
          m.utils.isUSMarket(this.market) && this.$emit("getUSPanData", i),
          m.utils.isHSMarket(this.market) && this.$emit("getExtraInfo", n),
          m.utils.isHSPlate(this.market) && this.$emit("getIntroduce", s);
      },
      ensureMarketState: function () {
        var t = this,
          i =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 3e4;
        clearTimeout(this.ensureTimeout),
          (this.ensureTimeout = setTimeout(function () {
            return p(
              t,
              null,
              e().mark(function t() {
                var i;
                return e().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!this.isMounted) {
                            t.next = 9;
                            break;
                          }
                          if (!f.detailApi || !this.isPageShow) {
                            t.next = 6;
                            break;
                          }
                          return (
                            (t.next = 4),
                            f.detailApi.getMarketState(
                              { market: this.market, encode: "utf8" },
                              { needProcess: !0 }
                            )
                          );
                        case 4:
                          (i = t.sent), this.getMarketState(i);
                        case 6:
                          this.ensureMarketState(), (t.next = 10);
                          break;
                        case 9:
                          clearTimeout(this.ensureTimeout);
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          }, i));
      },
      getMarketState: function (t) {
        var e = this;
        if (this.isBCCurrency) this.isTrading = !0;
        else {
          var i =
              ("string" == typeof (t = Array.isArray(t) ? t[0] : t) &&
                t.split("|")) ||
              [],
            n = i
              .map(function (t) {
                return t.split("_");
              })
              .filter(function (t) {
                var i;
                return m.utils.isHSMarket(e.market) &&
                  (m.utils.isAMarket(e.stockType) ||
                    m.utils.isKeChuangStock(e.stockType) ||
                    m.utils.isChuangYeStock(e.stockType) ||
                    ["ETF", "QDII-ETF"].includes(e.stockType))
                  ? "HSZB" === t[0]
                  : m.utils.isDebt(e.stockType) ||
                    m.utils.isNationalDebt(e.stockType) ||
                    m.utils.isDebtIndex(e.stockType)
                  ? "ZQ" === t[0]
                  : m.utils.isGuoZhengHK(e.stockType)
                  ? "JW" === t[0]
                  : m.utils.isHKMarket(e.market)
                  ? "NEWHK" === t[0]
                  : m.utils.isBJMarket(e.market) ||
                    m.utils.isNQMarket(e.market) ||
                    m.utils.isHSMarket(e.market) ||
                    m.utils.isHSPlate(e.market) ||
                    m.utils.isCSIndex(e.market)
                  ? "NEWSH" === t[0]
                  : m.utils.isUSMarket(e.market)
                  ? "NEWUS" === t[0]
                  : m.utils.isUKMarket(e.market)
                  ? "UK" === t[0]
                  : m.utils.isForex(e.market)
                  ? t[0] === e.scode
                  : m.utils.isGermanFTIndex(e.stockType)
                  ? "DE" === t[0]
                  : m.utils.isSGFutures(e.stockType)
                  ? "SGXS" === t[0]
                  : m.utils.isFutures(e.market)
                  ? m.utils.isHDFutures(e.market)
                    ? "HD" === t[0]
                    : null == (i = e.stockType)
                    ? void 0
                    : i.includes("_".concat(t[0]))
                  : m.utils.isSPMarket(e.market)
                  ? "SGE" === t[0]
                  : void 0;
              });
          !n.length &&
            m.utils.isForex(this.market) &&
            "USDCNY" !== this.scode &&
            n.push([this.scode, "open", "交易中"]),
            n.length &&
              ((this.isAuctionTime = "盘前竞价" === n[0][2]),
              (this.isWaitingForTrading = "等待开盘" === n[0][2]),
              (this.isTrading = "open" === n[0][1]),
              this.$emit("getMarketState", n, i[0], i));
        }
      },
      cancelEvent: function () {
        try {
          /Kline/.test(this.tabKey)
            ? this.$refs.kline.$refs.chart.cancelEvent()
            : this.$refs[this.tabKey].$refs.chart.cancelEvent();
        } catch (t) {}
      },
      updateSetting: function (t) {
        (this.defaultSetting = t),
          k.StockBridge.setStorage(f.CHART_SETTING, t),
          this.$emit("updateSetting", t);
      },
    },
  };
Array ||
  (
    k.resolveComponent("NewsBar") +
    k.resolveComponent("MinsBar") +
    k.resolveComponent("KlineBar") +
    k.resolveComponent("AnchorTip") +
    k.resolveComponent("FqBubble") +
    k.resolveComponent("Mins") +
    k.resolveComponent("FiveMins") +
    k.resolveComponent("Kline") +
    k.resolveComponent("TradeDetail") +
    k.resolveComponent("SettingTipBubble") +
    k.resolveComponent("Selector") +
    k.resolveComponent("SettingPopup") +
    k.resolveComponent("FqSwitchDialog")
  )();
var B = k._export_sfc(M, [
  [
    "render",
    function (t, e, i, n, s, a) {
      return k.e(
        { a: !i.landscape && "searchAi" !== i.source },
        i.landscape || "searchAi" === i.source
          ? {}
          : {
              b: !s.showDataBar && i.enableNewsBar,
              c: k.o(a.changeShowNewsBar, 5944),
              d: k.p({ symbol: a.symbol }),
            },
        {
          e: s.minsBarData,
          f: k.p({
            market: i.market,
            scode: i.scode,
            landscape: i.landscape,
            stockType: i.stockType,
          }),
          g: s.klineBarData,
          h: k.p({
            market: i.market,
            scode: i.scode,
            landscape: i.landscape,
            stockType: i.stockType,
          }),
          i: k.n(!s.showNewsBar && !i.landscape && "noflowTop"),
          j: "".concat(a.dataBarWidth, "px"),
          k: s.showDataBar && i.enableNewsBar,
          l: a.showMinsFiveTips && !i.widgetParams.hideClickTips,
        },
        a.showMinsFiveTips && !i.widgetParams.hideClickTips
          ? {
              m: k.o(function () {
                return (
                  a.handleMinsTipClick &&
                  a.handleMinsTipClick.apply(a, arguments)
                );
              }, 5945),
            }
          : {},
        { n: "mins" === s.tabKey },
        "mins" === s.tabKey
          ? {
              o: k.r("redBag", {
                minsOptions: s.minsOptions,
                showSideArea: a.showSideArea,
              }),
            }
          : {},
        {
          p:
            !i.landscape &&
            s.showAnchorTip &&
            s.anchorTipData &&
            s.isAnchorTipGrayUser,
        },
        !i.landscape &&
          s.showAnchorTip &&
          s.anchorTipData &&
          s.isAnchorTipGrayUser
          ? {
              q: k.o(a.handleAnchorClose, 5946),
              r: k.o(a.handleAIClick, 5947),
              s: k.p({
                symbol: a.symbol,
                position: s.anchorPosition,
                text: s.anchorTipData.title,
                "anchor-corner": s.anchorCorner,
                "auto-close-time": 8e3,
                "container-width": a.chartWidth,
              }),
            }
          : {},
        {
          t: k.o(a.closeFqBubble, 5948),
          v: k.o(a.handleFqBubbleJump, 5949),
          w: k.p({ visible: s.showFqBubble, position: s.fqBubblePosition }),
          x: s.tabVisited.mins,
        },
        s.tabVisited.mins
          ? {
              y: k.sr("mins", "adc4ba95-5"),
              z: "mins" === s.tabKey,
              A: k.o(a.handleExtra, 5950),
              B: k.o(a.onTouchMove, 5951),
              C: k.o(a.onTouchCancel, 5952),
              D: k.o(a.openLandscape, 5953),
              E: k.o(a.updateSetting, 5954),
              F: k.o(a.handleError, 5955),
              G: k.o(a.handleShowAnchorTip, 5956),
              H: k.p({
                skin: i.skin,
                width: a.chartWidth,
                height: s.chartHeight,
                market: i.market,
                scode: i.scode,
                currency: i.currency,
                assertStockType: i.stockType,
                customSetting: a.setting,
                hideIndicator: !(
                  i.landscape ||
                  (a.setting.minsSetting && a.setting.minsSetting.showIndicator)
                ),
                showAuction:
                  a.setting.minsSetting &&
                  a.setting.minsSetting.showAuction &&
                  a.hasAuctionMarket,
                isAuctionTime: s.isAuctionTime,
                isWaitingForTrading: s.isWaitingForTrading,
                isTrading: s.isTrading,
                landscape: i.landscape,
                "disable-tap-event": i.widgetParams.disableTapEvent,
                hkVIP: i.hkVIP,
                showSideArea: a.showSideArea,
              }),
            }
          : {},
        { I: s.tabVisited.fiveMins },
        s.tabVisited.fiveMins
          ? {
              J: k.sr("fiveMins", "adc4ba95-6"),
              K: "fiveMins" === s.tabKey,
              L: k.o(a.handleExtra, 5957),
              M: k.o(a.onTouchMove, 5958),
              N: k.o(a.onTouchCancel, 5959),
              O: k.o(a.openLandscape, 5960),
              P: k.o(a.updateSetting, 5961),
              Q: k.o(a.handleError, 5962),
              R: k.p({
                skin: i.skin,
                width: a.chartWidth,
                height: s.chartHeight,
                market: i.market,
                scode: i.scode,
                currency: i.currency,
                hideIndicator: !(
                  i.landscape ||
                  (a.setting.minsSetting && a.setting.minsSetting.showIndicator)
                ),
                assertStockType: i.stockType,
                customSetting: a.setting,
                landscape: i.landscape,
                "disable-tap-event": i.widgetParams.disableTapEvent,
              }),
            }
          : {},
        { S: s.tabVisited.kline },
        s.tabVisited.kline
          ? {
              T: k.sr("kline", "adc4ba95-7"),
              U: /Kline/.test(s.tabKey),
              V: k.o(a.handleDrawEnd, 5963),
              W: k.o(a.handleExtra, 5964),
              X: k.o(a.onTouchMove, 5965),
              Y: k.o(a.closeFqBubble, 5966),
              Z: k.o(a.onTouchCancel, 5967),
              aa: k.o(a.openLandscape, 5968),
              ab: k.o(a.updateSetting, 5969),
              ac: k.o(a.closeFqBubble, 5970),
              ad: k.o(a.onTouchCancel, 5971),
              ae: k.o(a.handleError, 5972),
              af: k.p({
                skin: i.skin,
                width: a.chartWidth,
                height: s.chartHeight,
                market: i.market,
                scode: i.scode,
                currency: i.currency,
                assertStockType: i.stockType,
                kType: s.kType,
                fqType: a.setting.miFq,
                added: i.added,
                customSetting: a.setting,
                miMaTypes: a.setting.miMaTypes,
                miIsShowChip: a.setting.miIsShowChip,
                miGap: a.setting.miGap,
                miYkstyle: a.setting.miYkstyle,
                miTrendline: a.setting.miTrendline,
                miSupportPressureLine: a.setting.miSupportPressureLine,
                miMagicNine: a.setting.miMagicNine,
                miTradeline: a.setting.miTradeline,
                landscape: i.landscape,
                miIndicatorCount: a.setting.miIndicatorCount,
                miMainIndicator: a.setting.miMainIndicator,
                isAccountOpen: i.isAccountOpen,
                isSupportTradeLine: a.isSupportTradeLine,
                "disable-tap-event": i.widgetParams.disableTapEvent,
                "hide-indicator": i.widgetParams.hideIndicator,
              }),
            }
          : {},
        { ag: "".concat(a.chartWidth, "px"), ah: a.showSideArea },
        a.showSideArea
          ? {
              ai: i.pageReady ? 1 : 0,
              aj: k.o(a.changeRefreshStatus, 5973),
              ak: k.p({
                market: i.market,
                scode: i.scode,
                quote: i.quote,
                "hk-v-i-p": i.hkVIP,
                "chart-height": s.chartHeight,
                landscape: i.landscape,
              }),
              al: "mins" === s.tabKey,
            }
          : {},
        {
          am: k.n(
            s.showNewsBar && i.enableNewsBar && !i.landscape && "hasNewsBar"
          ),
          an: "".concat(s.chartHeight, "px"),
          ao: k.f(a.tabs, function (t, e, i) {
            return {
              a: k.t(t.value),
              b: s.tabKey === t.key ? 1 : "",
              c: t.key,
              d: k.o(
                function (e) {
                  return a.switchChart(t.key, !0);
                },
                5974,
                t.key
              ),
            };
          }),
          ap: a.showMoreTabs,
        },
        a.showMoreTabs
          ? {
              aq: k.t(s.moreTabSelected ? s.moreTabName : "更多"),
              ar: s.moreTabSelected ? 1 : "",
              as: k.o(function (t) {
                return a.onPopupMore();
              }, 5975),
            }
          : {},
        { at: !i.landscape && !i.widgetParams.hideChartSetting },
        i.landscape || i.widgetParams.hideChartSetting
          ? {}
          : k.e(
              { av: i.canShowSupportPressureSignal },
              i.canShowSupportPressureSignal
                ? {
                    aw: k.p({
                      "storage-key":
                        "hq_setting_support_pressure_signal_tip_shown",
                      lines: ["功能上新！撑压信号，快速识", "别压力位和支撑位"],
                      "exposure-event":
                        "hq.detail.chart.supportPressureSignal.bubble.exposure",
                      "close-event":
                        "hq.detail.chart.supportPressureSignal.bubble.close",
                    }),
                  }
                : (i.canShowAiVolatile, {}),
              {
                ax: i.canShowAiVolatile,
                ay: k.o(function (t) {
                  return a.goSetting(!0);
                }, 5976),
              }
            ),
        { az: k.s(a.isMoreKline && "padding-right: 0"), aA: a.isMoreKline },
        a.isMoreKline
          ? {
              aB: k.f(a.yearNames, function (t, e, i) {
                return {
                  a: k.t(t.value),
                  b: s.tabKey === t.key ? 1 : "",
                  c: t.key,
                  d: k.o(
                    function (e) {
                      return a.switchChart(t.key, !0);
                    },
                    5977,
                    t.key
                  ),
                };
              }),
              aC: k.s("padding-left: 0"),
            }
          : {},
        { aD: s.initSelector },
        s.initSelector
          ? k.e(
              { aE: s.initSelector },
              s.initSelector
                ? {
                    aF: k.sr("selector", "adc4ba95-11"),
                    aG: k.p({
                      type: "more",
                      skin: i.skin,
                      indicators: s.moreTabs,
                      indicator: s.tabKey,
                      landscape: i.landscape,
                    }),
                  }
                : {}
            )
          : {},
        {
          aH: k.n(i.landscape ? "" : "portrait"),
          aI: i.pageReady ? 1 : 0,
          aJ: s.showSettingPopup,
        },
        s.showSettingPopup
          ? {
              aK: k.o(a.closeSetting, 5978),
              aL: k.o(a.updateSetting, 5979),
              aM: k.o(a.switchChart, 5980),
              aN: k.p({
                setting: a.setting,
                market: i.market,
                stockType: i.stockType,
                tabKey: s.tabKey,
                showTradeDetail: a.showTradeDetail,
                hasAuctionMarket: a.hasAuctionMarket,
                isSupportTradeLine: a.isSupportTradeLine,
                isAccountOpen: i.isAccountOpen,
                canShowAiVolatile: i.canShowAiVolatile,
                canShowSupportPressureSignal: i.canShowSupportPressureSignal,
                "hk-v-i-p": a.hkAndHKVIP,
              }),
            }
          : {},
        {
          aO: k.o(a.closeFqSwitchDialog, 5981),
          aP: k.p({ visible: s.showFqSwitchDialog }),
          aQ: i.landscape ? 1 : "",
          aR: "dark" === i.skin ? 1 : "",
          aS: k.s(a.wraperStyle),
        }
      );
    },
  ],
  ["__scopeId", "data-v-adc4ba95"],
]);
wx.createComponent(B);
