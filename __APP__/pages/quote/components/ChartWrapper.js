require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../@babel/runtime/helpers/typeof"),
  i = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  r = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable,
  u = function (e, t, i) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  m = function (e, t) {
    for (var i in t || (t = {})) c.call(t, i) && u(e, i, t[i]);
    if (o) {
      var a,
        r = n(o(t));
      try {
        for (r.s(); !(a = r.n()).done; ) {
          i = a.value;
          d.call(t, i) && u(e, i, t[i]);
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    return e;
  },
  l = function (e, t, i) {
    return new Promise(function (n, a) {
      var r = function (e) {
          try {
            o(i.next(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          try {
            o(i.throw(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(r, s);
        };
      o((i = i.apply(e, t)).next());
    });
  },
  h = require("../../../common/vendor.js"),
  g = require("../@tencent/stock-hq-data/index.js"),
  p = require("../../../utils/broker/usePluginInfo.js"),
  f = g.utils,
  T = f.isBJMarket,
  P = f.isNQMarket,
  S = f.isHSMarket,
  k = f.isHKMarket,
  y = f.isUSMarket,
  b = f.isUKMarket,
  v = f.isHSPlate,
  w = f.isAMarket,
  x = f.isChuangYeStock,
  I = f.isKeChuangStock,
  C = f.isDebt,
  D = f.isDebtIndex,
  B = f.isNationalDebt,
  R = f.isTransferableDebt,
  j = f.isGuoZhengHK,
  E = f.isCSIndex,
  M = f.isFTIndex,
  q = f.isGermanFTIndex,
  O = f.isFutures,
  A = f.isSGFutures,
  N = f.isForex,
  K = f.isBCCurrency,
  $ = f.isHDFutures,
  L = f.isCMEFutures,
  _ = f.isCBTRFutures,
  z = f.isCBTGFutures,
  F = f.isCMELFutures,
  G = f.isSPMarket;
var W,
  H = h.useBrokerInfo().highestPriorityDealer,
  U = void 0 === H ? {} : H,
  Y = "GET_BST_MARK",
  Z = "hq-chart-setting-pro",
  Q = h.useBrokerInfo(),
  V = Q.hasBind,
  J = Q.navigateToTrade,
  X = (function () {
    var e = p.usePluginInfo(U).currentTradePluginName;
    return {
      handleTradeBstMark: function (t) {
        var i;
        if (e.value)
          try {
            return null == (i = requirePlugin(e.value))
              ? void 0
              : i.handleTradeBstMark(null != t ? t : {});
          } catch (e) {}
      },
      openPluginWebPage: function (t) {
        var i;
        if (e.value)
          try {
            return null == (i = requirePlugin(e.value))
              ? void 0
              : i.openPluginWebPage(null != t ? t : {});
          } catch (e) {}
      },
      getEmbeddedSwitch: function () {
        var t;
        if (e.value)
          try {
            return null == (t = requirePlugin(e.value))
              ? void 0
              : t.getEmbeddedSwitch();
          } catch (e) {}
      },
    };
  })(),
  ee = X.handleTradeBstMark,
  te = X.openPluginWebPage,
  ie = getApp().globalData,
  ne = {
    components: {
      Composition: function () {
        return "./mini-hq-chart/chart/Composition.js";
      },
      ToolBox: function () {
        return "./ToolBox.js";
      },
      redbagAnimate: function () {
        return "../../asyncCom/@tencent/st-wave-redbag/components/redbag-animate/index.js";
      },
    },
    inject: ["hqBridge"],
    props: [
      "pageReady",
      "landscape",
      "skin",
      "market",
      "added",
      "scode",
      "stockType",
      "queryTabKey",
      "quote",
      "enableNewsBar",
      "remindSubscribeInfo",
      "canShowAiVolatile",
      "canShowSupportPressureSignal",
    ],
    provide: function () {
      return {
        tradePoint: {
          canGet: this.canGetTradePoint,
          prefetch: this.prefetchTradePoint,
          handle: this.handleTradePoint,
        },
        tradeLine: { show: !0, isSupport: this.isSupportTradeLine },
      };
    },
    data: function () {
      return {
        tabKey: "mins",
        width: 0,
        height: 0,
        left: 0,
        settingReady: !1,
        setting: {
          fq: 1,
          trendline: !1,
          supportPressureLine: !1,
          gap: !1,
          lastestPrice: !1,
          remindPrice: !1,
          ds: !1,
          zx: !1,
          zjzf: !1,
          minsIndicator: "volume",
          mainIndicator: "ma",
          indicatorCount: 2,
          firstIndicator: "volume",
          secondIndicator: "macd",
          thirdIndicator: "kdj",
          fourthIndicator: "rsi",
          yangKStyle: { id: "solid", name: "实心阳线" },
          auctionMode: "close",
          maTypes: [5, 10, 20, 30, 0, 0, 0, 0, 0, 0],
          maTemp: [],
          emaTypes: [12, 50, 0, 0, 0, 0, 0, 0, 0, 0],
          emaTemp: [],
          volumeTypes: [5, 10, 20, 0, 0],
          volumeTemp: [],
          cjeTypes: [5, 10, 20, 0, 0],
          cjeTemp: [],
          macdParams: { short: 12, long: 26, m: 9 },
          dmiParams: { n: 14, m: 6 },
          cciParams: { n: 14 },
          wrParams: { n1: 10, n2: 6 },
          bollParams: { deviation: 20, width: 2 },
          kdjParams: { n1: 9, n2: 3, n3: 3 },
          rsiParams: { n1: 6, n2: 12, n3: 24 },
          chartRatio: 100,
          foldState: !0,
          macdPattern: !1,
          magicNine: !1,
          tradeSecret: !1,
          tradeLine: !1,
          tradeEntranceClosed: null,
          minsSetting: { showFive: !0, showIndicator: !0 },
        },
      };
    },
    computed: {
      isPCWeixin: function () {
        var e, t;
        return (
          (null ==
          (t = null == (e = getApp().globalData.detect) ? void 0 : e.env)
            ? void 0
            : t.IS_PCWEIXIN) || !1
        );
      },
      isAccountOpen: function () {
        return V.value;
      },
      isIndex: function () {
        return g.utils.isIndex(this.stockType);
      },
      isPlate: function () {
        return g.utils.isHSPlate(this.market);
      },
      canGetTradePoint: function () {
        return (
          this.isAccountOpen && g.utils.isHSMarket(this.market) && !this.isIndex
        );
      },
      isSupportTradeLine: function () {
        return (
          g.utils.isHSMarket(this.market) &&
          ["GP-A", "GP-A-CYB", "GP-A-KCB"].includes(this.stockType)
        );
      },
      symbol: function () {
        return g.utils.getSymbol(this.market, this.scode);
      },
    },
    beforeCreate: function () {
      this.tabKey = "mins";
    },
    beforeUnmount: function () {
      h.StockBridge.busOff("market-getPointPosition", this.getPointPosition),
        h.StockBridge.busOff(
          "market-chartSetting-Update",
          this.repaintForSettingChange
        );
    },
    created: function () {
      return l(
        this,
        null,
        i().mark(function e() {
          var t,
            n,
            a,
            r,
            s,
            o,
            c,
            d = this;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!this.landscape) {
                      e.next = 12;
                      break;
                    }
                    return (
                      (t =
                        (h.wx$1.getWindowInfo && h.wx$1.getWindowInfo()) ||
                        h.wx$1.getSystemInfoSync()),
                      (n = t.windowWidth),
                      (a = t.windowHeight),
                      (e.next = 6),
                      this.hqBridge.getEleInfo(".chart-wrapper", this)
                    );
                  case 6:
                    (r = e.sent),
                      (s = (r || {}).width),
                      (this.width = s - 30),
                      (this.height = Math.min(n, a)),
                      (e.next = 14);
                    break;
                  case 12:
                    (o =
                      (h.wx$1.getWindowInfo && h.wx$1.getWindowInfo()) ||
                      h.wx$1.getSystemInfoSync()),
                      (c = o.windowWidth),
                      (this.width = c),
                      (this.height = this.isPCWeixin
                        ? Math.min(0.75 * this.width, 500)
                        : 0.75 * this.width + 36);
                  case 14:
                    !(function () {
                      var e = !1;
                      try {
                        var t = h.wx$1.getLaunchOptionsSync();
                        e = 1154 === (null == t ? void 0 : t.scene);
                      } catch (e) {}
                      return e;
                    })()
                      ? ie.init(function () {
                          return l(
                            d,
                            null,
                            i().mark(function e() {
                              return i().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), this.getSetting();
                                      case 2:
                                        this.settingReady = !0;
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                        })
                      : (this.settingReady = !0),
                      h.StockBridge.busOff(
                        "market-getPointPosition",
                        this.getPointPosition
                      ),
                      h.StockBridge.busOn(
                        "market-getPointPosition",
                        this.getPointPosition
                      ),
                      h.StockBridge.busOn(
                        "market-chartSetting-Update",
                        this.repaintForSettingChange
                      ),
                      this.isPCWeixin &&
                        h.wx$1.onWindowResize(function (e) {
                          (null == e ? void 0 : e.size) &&
                            (d.resizeTimer && clearTimeout(d.resizeTimer),
                            (d.resizeTimer = setTimeout(function () {
                              (d.settingReady = !1),
                                (d.width = e.size.windowWidth),
                                (d.height = Math.min(0.75 * d.width, 500)),
                                d.$nextTick(function () {
                                  d.settingReady = !0;
                                });
                            }, 200)));
                        });
                  case 15:
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
    methods: {
      getSetting: function () {
        return l(
          this,
          null,
          i().mark(function n() {
            var a, r, s, o;
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (!ie[Z])
                        if ((a = h.StockBridge.getStorage(Z))) {
                          if ("string" == typeof a)
                            try {
                              a = JSON.parse(a);
                            } catch (e) {
                              (a = null),
                                h.StockBridge.setStorage(Z, this.setting);
                            }
                          else h.StockBridge.setStorage(Z, this.setting);
                          (null == a ? void 0 : a.minsSetting) &&
                            "object" == t(a.minsSetting) &&
                            !Object.keys(a.minsSetting).length &&
                            (a.minsSetting = m({}, this.setting.minsSetting)),
                            (ie[Z] = a);
                        } else
                          h.StockBridge.setStorage(Z, this.setting),
                            (ie[Z] = this.setting);
                      if (((r = ie[Z] || this.setting), W)) {
                        i.next = 8;
                        break;
                      }
                      return (i.next = 5), h.prefetchSetting();
                    case 5:
                      o = i.sent;
                      try {
                        W = o.chartSetting ? JSON.parse(o.chartSetting) : null;
                      } catch (e) {
                        W = null;
                      }
                      W &&
                        (Object.assign(
                          r,
                          ((s = {
                            fq: W.fq,
                            minsIndicator: W.minsIndicator,
                            mainIndicator: this.landscape
                              ? W.mainIndicator
                              : "ma",
                            firstIndicator:
                              "rally" === W.firstIndicator
                                ? r.firstIndicator
                                : W.firstIndicator,
                            auctionMode: W.auctionMode,
                            chartRatio: W.chartRatio,
                            secondIndicator: W.secondIndicator,
                            minsSetting: W.minsSetting,
                            maTypes: W.maTypes || [
                              5, 10, 20, 0, 0, 0, 0, 0, 0, 0,
                            ],
                            emaTypes: W.emaTypes,
                            bollParams: W.bollParams,
                            volumeTypes: W.volumeTypes,
                            cjeTypes: W.cjeTypes || [5, 10, 20, 0, 0],
                            macdParams: W.macdParams,
                            dmiParams: W.dmiParams,
                            cciParams: W.cciParams,
                            wrParams: W.wrParams,
                            kdjParams: W.kdjParams,
                            rsiParams: W.rsiParams,
                            maSetting: W.maSetting || [],
                            isShowChip: W.isShowChip || !1,
                            gap: W.gap || !1,
                          }),
                          e(s, "fq", W.fq || 1),
                          e(s, "yangKStyle", W.yangKStyle),
                          e(s, "trendline", W.trendline || !1),
                          e(
                            s,
                            "supportPressureLine",
                            W.supportPressureLine || !1
                          ),
                          e(
                            s,
                            "magicNine",
                            !!this.isAccountOpen && W.magicNine
                          ),
                          e(
                            s,
                            "tradeLine",
                            !!this.isAccountOpen && W.tradeLine
                          ),
                          e(s, "indicatorCount", W.indicatorCount || 1),
                          e(s, "mainIndicator", W.mainIndicator || "ma"),
                          e(s, "remindPrice", W.remindPrice || !1),
                          e(s, "zx", W.zx || !1),
                          e(s, "ds", W.ds || !1),
                          e(s, "zjzf", W.zjzf || !1),
                          e(s, "lastestPrice", W.lastestPrice || !1),
                          e(s, "chartRatio", W.chartRatio || 100),
                          e(s, "tradeEntranceClosed", W.tradeEntranceClosed),
                          e(s, "fqSwitchDialogTime", W.fqSwitchDialogTime || 0),
                          s)
                        ),
                        h.StockBridge.setStorage(Z, r));
                    case 8:
                      Object.assign(this.setting, r),
                        this.isPCWeixin ||
                          this.landscape ||
                          (this.height *= [1, 1, 1.155, 1.31][
                            this.setting.indicatorCount - 1
                          ]);
                    case 9:
                    case "end":
                      return i.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      updateSetting: function (e) {
        (this.setting = e),
          (ie[Z] = e),
          this.uploadSetting(),
          h.StockBridge.busEmit("market-updateSetting", e);
      },
      uploadSetting: function () {
        var t = this;
        clearTimeout(this.uploadSettingTimeout),
          (this.uploadSettingTimeout = setTimeout(function () {
            var i;
            h.StockBridge.setStorage(Z, t.setting),
              W
                ? Object.assign(
                    W,
                    ((i = {
                      fq: t.setting.fq,
                      auctionMode: t.setting.auctionMode,
                      chartRatio: t.setting.chartRatio,
                      isShowChip: !!t.setting.isShowChip,
                      minsIndicator: t.setting.minsIndicator,
                      mainIndicator: t.setting.mainIndicator,
                      firstIndicator: t.setting.firstIndicator,
                      secondIndicator: t.setting.secondIndicator,
                      minsSetting: t.setting.minsSetting || "",
                      maTypes: t.setting.maTypes || [],
                      maSetting: t.setting.maSetting || [],
                    }),
                    e(i, "isShowChip", t.setting.isShowChip || !1),
                    e(i, "gap", t.setting.gap || !1),
                    e(i, "fq", t.setting.fq || !1),
                    e(i, "yangKStyle", t.setting.yangKStyle || 0),
                    e(i, "trendline", t.setting.trendline || !1),
                    e(
                      i,
                      "supportPressureLine",
                      t.setting.supportPressureLine || !1
                    ),
                    e(i, "magicNine", t.setting.magicNine),
                    e(i, "tradeLine", t.setting.tradeLine),
                    e(i, "indicatorCount", t.setting.indicatorCount || 1),
                    e(i, "mainIndicator", t.setting.mainIndicator || "ma"),
                    e(i, "remindPrice", t.setting.remindPrice),
                    e(i, "zx", t.setting.zx),
                    e(i, "ds", t.setting.ds),
                    e(i, "zjzf", t.setting.zjzf),
                    e(i, "lastestPrice", t.setting.lastestPrice),
                    e(i, "chartRatio", t.setting.chartRatio || 100),
                    e(i, "emaTypes", t.setting.emaTypes),
                    e(i, "bollParams", t.setting.bollParams),
                    e(i, "volumeTypes", t.setting.volumeTypes),
                    e(i, "cjeTypes", t.setting.cjeTypes || [5, 10, 20, 0, 0]),
                    e(i, "macdParams", t.setting.macdParams),
                    e(i, "dmiParams", t.setting.dmiParams),
                    e(i, "cciParams", t.setting.cciParams),
                    e(i, "wrParams", t.setting.wrParams),
                    e(i, "kdjParams", t.setting.kdjParams),
                    e(i, "rsiParams", t.setting.rsiParams),
                    e(i, "tradeEntranceClosed", t.setting.tradeEntranceClosed),
                    e(
                      i,
                      "fqSwitchDialogTime",
                      t.setting.fqSwitchDialogTime || 0
                    ),
                    i)
                  )
                : (W = m({}, t.setting)),
              h.batchSet({
                subIndex: "GLOBAL",
                settings: { chartSetting: JSON.stringify(W) },
              });
          }, 1e3));
      },
      repaintForSettingChange: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = t.tabkey || this.tabKey,
          n = t.setting || h.StockBridge.getStorage(Z) || this.setting;
        if ("string" == typeof n)
          try {
            n = JSON.parse(n);
          } catch (e) {
            n = {};
          }
        (ie[Z] = n),
          Object.assign(this.setting, n),
          (i = /Month|Year/.test(i) ? this.tabKey : i),
          this.$nextTick(function () {
            var t;
            null == (t = e.$refs.composition) || t.resetChart(i);
          }),
          t.key && t.setting && this.uploadSetting();
      },
      moveChartTop: function (e) {
        this.$emit("moveChartTop", e);
      },
      getMarketState: function (e, t, i) {
        this.$emit("getMarketState", e, t, i);
      },
      getExtraInfo: function (e) {
        this.$emit("getExtraInfo", e);
      },
      getUSPanData: function (e) {
        this.$emit("getUSPanData", e);
      },
      getZDP: function (e) {
        this.$emit("getZDP", e);
      },
      getIntroduce: function (e) {
        this.$emit("getIntroduce", e);
      },
      openLandscape: function (e) {
        this.$emit("openLandscape", e);
      },
      closeLandscape: function () {
        this.$emit("closeLandscape");
      },
      switchChart: function (e) {
        (this.tabKey = e),
          (this.hasGetTradePoint = !1),
          this.$emit("switchChart", e);
      },
      onTipTap: function (e) {
        "iopv" === e
          ? (h.StockBridge.modal({
              title: "参考净值（IOPV）",
              content:
                "参考净值（IOPV）是交易所根据基金管理人提供的计算方法及每日申赎清单计算的实时单位净值的近似值，以便于投资者估计ETF交易价格是否偏离了内在价值，每15秒更新一次。参考净值对比ETF每日收盘更新的净值数据实时性高，方便在盘中分析偏离数据，当最新价高于参考净值时，场内溢价率高；最新价低于参考净值，场内溢价率低。",
              showCancel: !1,
              confirmText: "我知道了",
            }),
            h.StockBridge.report("hq.stock_detail.iopv_tip_click", {
              stockid: this.symbol,
            }))
          : "tradeLine" === e &&
            (this.$refs.toolBox.tradeLine.teachModalShow = !0);
      },
      onBarTap: function (e, t) {
        return l(
          this,
          null,
          i().mark(function n() {
            var a, r, s, o, c, d, u, m, l, g, p, f, T, P;
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if ("trade" !== e) {
                        i.next = 39;
                        break;
                      }
                      return (
                        (s =
                          (h.wx$1.getWindowInfo && h.wx$1.getWindowInfo()) ||
                          h.wx$1.getSystemInfoSync()),
                        (o = s.windowHeight),
                        (c = s.windowWidth),
                        (d = o < c),
                        (i.next = 4),
                        ee({
                          action: "GET_BST_SETTING",
                          payload: { ignoreCahce: !0 },
                        })
                      );
                    case 4:
                      if (!i.sent) {
                        i.next = 28;
                        break;
                      }
                      if (
                        ("mins" === this.tabKey
                          ? (u = new Date(1e3 * this.quote.utime)
                              .toISOString()
                              .slice(0, 10))
                          : "fiveMins" === this.tabKey && (u = t.date),
                        (i.prev = 6),
                        !u)
                      ) {
                        i.next = 16;
                        break;
                      }
                      if (
                        ((u = null == u ? void 0 : u.replace(/-/g, "")),
                        (m = {
                          type: "complete",
                          market: this.market,
                          code: this.scode,
                          name: null == (a = this.quote) ? void 0 : a.stk_name,
                          beginDate: u,
                          endDate: u,
                          isNewOpen: !0,
                        }),
                        !d)
                      ) {
                        i.next = 13;
                        break;
                      }
                      return (
                        (l = h.dist.urltools.make("/pages/trade/history", m)),
                        i.abrupt(
                          "return",
                          void h.wx$1.navigateTo({
                            url: "/pages/broker/transfer?url=".concat(
                              encodeURIComponent(l),
                              "&linkscene=h5"
                            ),
                          })
                        )
                      );
                    case 13:
                      J({ name: "TradeHistory", query: m }), (i.next = 20);
                      break;
                    case 16:
                      if (
                        ((g = {
                          qry_type: 1,
                          stock_type: 0,
                          trade_market: this.market,
                          stock_code: this.scode,
                          stock_name:
                            null == (r = this.quote) ? void 0 : r.stk_name,
                        }),
                        !d)
                      ) {
                        i.next = 19;
                        break;
                      }
                      return i.abrupt(
                        "return",
                        void this.navigateToBrokerH5(
                          "/analysis/analysis-detail",
                          g
                        )
                      );
                    case 19:
                      te({ name: "AnalysisDetail", query: g });
                    case 20:
                      i.next = 26;
                      break;
                    case 22:
                      (i.prev = 22),
                        (i.t0 = i.catch(6)),
                        (p =
                          "ERR_MAINTAIN" === i.t0.retcode
                            ? i.t0.retmsg
                            : "系统繁忙请稍后再试"),
                        h.wx$1.showModal({
                          confirmText: "确定",
                          content: p,
                          showCancel: !1,
                        });
                    case 26:
                      i.next = 39;
                      break;
                    case 28:
                      if (
                        ((i.prev = 28),
                        (f = this.setting.tradeEntranceClosed || { count: 0 }),
                        (T = f.count),
                        (this.setting.tradeEntranceClosed = {
                          count: ++T,
                          timestamp: new Date().getTime(),
                        }),
                        (ie[Z] = this.setting),
                        this.uploadSetting(),
                        !d)
                      ) {
                        i.next = 32;
                        break;
                      }
                      return i.abrupt(
                        "return",
                        void this.navigateToBrokerH5("/account/bstmark")
                      );
                    case 32:
                      J({ name: "AccountBstMark" }), (i.next = 39);
                      break;
                    case 35:
                      (i.prev = 35),
                        (i.t1 = i.catch(28)),
                        (P =
                          "ERR_MAINTAIN" === i.t1.retcode
                            ? i.t1.retmsg
                            : "系统繁忙请稍后再试"),
                        h.wx$1.showModal({
                          confirmText: "确定",
                          content: P,
                          showCancel: !1,
                        });
                    case 39:
                    case "end":
                      return i.stop();
                  }
              },
              n,
              this,
              [
                [6, 22],
                [28, 35],
              ]
            );
          })
        );
      },
      navigateToBrokerH5: function (e, t) {
        var i = h.useBrokerInfo().highestPriorityDealer.value.code,
          n = h.broker[i].domain,
          a = h.dist.urltools.make(
            "https://".concat(n, "/mp/v2/index.html?#").concat(e),
            t
          ),
          r = h.dist.urltools.make("/platforms/mp-weixin/webview/index", {
            url: a,
          });
        h.wx$1.navigateTo({
          url: "/pages/broker/transfer?url=".concat(
            encodeURIComponent(r),
            "&linkscene=h5"
          ),
        });
      },
      getDealerCode: function () {
        return new Promise(function (e) {
          h.userinfo.get(function (t) {
            e(t.dealercode);
          });
        });
      },
      prefetchTradePoint: function (e, t) {
        return l(
          this,
          null,
          i().mark(function n() {
            var a, o, c;
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (!this.hasGetTradePoint || e || t) {
                        i.next = 2;
                        break;
                      }
                      return i.abrupt("return");
                    case 2:
                      return (
                        (this.hasGetTradePoint = !0),
                        (i.next = 5),
                        this.getDealerCode()
                      );
                    case 5:
                      (i.t0 = i.sent),
                        (i.t1 = this.market),
                        (i.t2 = this.scode),
                        (a = { brokercode: i.t0, market: i.t1, code: i.t2 }),
                        "mins" === this.tabKey
                          ? (this.minsTradePromise = ee({
                              action: Y,
                              payload: m({ type: "MINUTE" }, a),
                            }))
                          : "fiveMins" === this.tabKey
                          ? (this.fminsTradePromise = ee({
                              action: Y,
                              payload: m({ type: "FIVEDAY" }, a),
                            }))
                          : "dayKline" === this.tabKey &&
                            (this.klineTradePromise = ee({
                              action: Y,
                              payload:
                                ((o = m({ type: "DAY" }, a)),
                                (c = { size: 370, end: e }),
                                r(o, s(c))),
                            }));
                    case 10:
                    case "end":
                      return i.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      handleTradePoint: function (e) {
        return l(
          this,
          null,
          i().mark(function t() {
            var a,
              r,
              s,
              o,
              c,
              d,
              u,
              m,
              l,
              h,
              g,
              p,
              f,
              T,
              P,
              S,
              k,
              y,
              b,
              v,
              w,
              x,
              I,
              C = this;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ("mins" !== this.tabKey || !this.minsTradePromise) {
                        t.next = 7;
                        break;
                      }
                      return (t.next = 3), this.minsTradePromise;
                    case 3:
                      if (
                        ((a = t.sent),
                        (this.minsTradePromise = null),
                        null == a ? void 0 : a.length)
                      ) {
                        r = n(a);
                        try {
                          for (r.s(); !(s = r.n()).done; )
                            ((o = s.value).time = new Date(1e3 * o.matched_time)
                              .toTimeString()
                              .slice(0, 5)
                              .replace(":", "")),
                              o.time < "0930" && (o.time = "0930");
                        } catch (e) {
                          r.e(e);
                        } finally {
                          r.f();
                        }
                        setTimeout(function () {
                          var e, t;
                          null ==
                            (t =
                              null == (e = C.$refs.composition)
                                ? void 0
                                : e.getInnerRef(!0)) || t.updateTradeData(a);
                        }, 300);
                      }
                      t.next = 42;
                      break;
                    case 7:
                      if (
                        "fiveMins" !== this.tabKey ||
                        !this.fminsTradePromise
                      ) {
                        t.next = 34;
                        break;
                      }
                      return (t.next = 10), this.fminsTradePromise;
                    case 10:
                      if (
                        ((c = t.sent),
                        (this.fminsTradePromise = null),
                        !(null == c ? void 0 : c.length))
                      ) {
                        t.next = 32;
                        break;
                      }
                      (d = n(c)), (t.prev = 13), d.s();
                    case 15:
                      if ((u = d.n()).done) {
                        t.next = 23;
                        break;
                      }
                      if (
                        (((m = u.value).time = new Date(1e3 * m.matched_time)
                          .toTimeString()
                          .slice(0, 5)
                          .replace(":", "")),
                        m.time < "0930" && (m.time = "0930"),
                        "1500" !== m.time)
                      ) {
                        t.next = 19;
                        break;
                      }
                      return t.abrupt("continue", 21);
                    case 19:
                      (l = +m.time.slice(0, 2)),
                        (h = +m.time.slice(2)),
                        (g = 4 - ((h + (l < 12 ? 2 : 1)) % 4)) < 4 &&
                          ((p = l + parseInt((h + g) / 60)),
                          (f = (h + g) % 60),
                          (m.time =
                            "".concat(p).padStart(2, 0) +
                            "".concat(f).padStart(2, 0)));
                    case 21:
                      t.next = 15;
                      break;
                    case 23:
                      t.next = 28;
                      break;
                    case 25:
                      (t.prev = 25), (t.t0 = t.catch(13)), d.e(t.t0);
                    case 28:
                      return (t.prev = 28), d.f(), t.finish(28);
                    case 31:
                      setTimeout(function () {
                        var e, t;
                        null ==
                          (t =
                            null == (e = C.$refs.composition)
                              ? void 0
                              : e.getInnerRef(!0)) || t.updateTradeData(c);
                      }, 300);
                    case 32:
                      t.next = 42;
                      break;
                    case 34:
                      if (
                        "dayKline" !== this.tabKey ||
                        (!this.klineTradePromise && !e)
                      ) {
                        t.next = 42;
                        break;
                      }
                      return (t.next = 37), this.klineTradePromise;
                    case 37:
                      if (((t.t1 = t.sent), t.t1)) {
                        t.next = 40;
                        break;
                      }
                      t.t1 = this.cancheTradeData;
                    case 40:
                      (T = t.t1),
                        (this.cancheTradeData = T),
                        (this.klineTradePromise = null),
                        (null == T ? void 0 : T.length) &&
                          (T[0].bst_exist
                            ? ((v = this.setting.tradeEntranceClosed || {
                                count: 0,
                              }),
                              (w = v.count),
                              (x = v.timestamp),
                              0 !== w || x
                                ? w <= 2 &&
                                  ((I = new Date(x)).setDate(I.getDate() + 7),
                                  new Date().getTime() >= I.getTime() &&
                                    setTimeout(function () {
                                      var e, t;
                                      null ==
                                        (t =
                                          null == (e = C.$refs.composition)
                                            ? void 0
                                            : e.getInnerRef(!0)) ||
                                        t.updateTradeData([{ bst_exist: 1 }]);
                                    }, 300))
                                : setTimeout(function () {
                                    var e, t;
                                    null ==
                                      (t =
                                        null == (e = C.$refs.composition)
                                          ? void 0
                                          : e.getInnerRef(!0)) ||
                                      t.updateTradeData([{ bst_exist: 1 }]);
                                  }, 300))
                            : (setTimeout(function () {
                                var e, t;
                                null ==
                                  (t =
                                    null == (e = C.$refs.composition)
                                      ? void 0
                                      : e.getInnerRef(!0)) ||
                                  t.updateTradeData(T);
                              }, 300),
                              (P = this.setting.tradeEntranceClosed || {
                                count: 0,
                              }),
                              (S = P.count),
                              (k = P.timestamp),
                              0 === S &&
                                ((y = !1),
                                k
                                  ? ((b = new Date(k)).setDate(b.getDate() + 7),
                                    new Date().getTime() >= b.getTime() &&
                                      (y = !0))
                                  : (y = !0),
                                y &&
                                  ((this.setting.tradeEntranceClosed = {
                                    count: 0,
                                    timestamp: new Date().getTime(),
                                  }),
                                  (ie[Z] = this.setting),
                                  this.uploadSetting()))));
                    case 42:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[13, 25, 28, 31]]
            );
          })
        );
      },
      clearAndRereshTradePoint: function () {
        this.$refs.composition.getInnerRef(!0).clearTradeData(),
          (this.hasGetTradePoint = !1),
          this.canGetTradePoint &&
            (this.prefetchTradePoint(), this.handleTradePoint());
      },
      getPointPosition: function (e) {
        var t = e.time,
          i = e.trend;
        if (!this.landscape && "mins" === this.tabKey)
          try {
            var n = this.$refs.composition
              .getInnerRef(!0)
              .getPointPosition(t, i);
            h.StockBridge.busEmit("market-getPointPositionResult", n);
          } catch (e) {
            h.StockBridge.busEmit("market-getPointPositionResult", "try later"),
              h.mpReporter.reportEvent("MONITOR-REDBAG-KLINE-ERR");
          }
      },
    },
  };
Array ||
  (
    h.resolveComponent("redbagAnimate") +
    h.resolveComponent("Composition") +
    h.resolveComponent("ToolBox")
  )();
var ae = h._export_sfc(ne, [
  [
    "render",
    function (e, t, i, n, a, r) {
      return h.e(
        { a: a.settingReady },
        a.settingReady
          ? {
              b: h.w(
                function (e, t, n) {
                  var r = e.minsOptions;
                  return h.e(
                    { a: !i.landscape && "mins" === a.tabKey && r },
                    !i.landscape && "mins" === a.tabKey && r
                      ? {
                          b: "562c701d-1-" + n + ",562c701d-0",
                          c: h.p({ width: a.width }),
                        }
                      : {},
                    { d: n, e: t }
                  );
                },
                { name: "redBag", path: "b", vueId: "562c701d-0" }
              ),
              c: h.sr("composition", "562c701d-0"),
              d: h.o(r.moveChartTop, 1803),
              e: h.o(r.updateSetting, 1804),
              f: h.o(r.getMarketState, 1805),
              g: h.o(r.getExtraInfo, 1806),
              h: h.o(r.getUSPanData, 1807),
              i: h.o(r.getZDP, 1808),
              j: h.o(r.getIntroduce, 1809),
              k: h.o(r.switchChart, 1810),
              l: h.o(r.openLandscape, 1811),
              m: h.o(r.closeLandscape, 1812),
              n: h.o(r.onTipTap, 1813),
              o: h.o(r.onBarTap, 1814),
              p: h.p({
                width: a.width,
                height: a.height,
                "page-ready": i.pageReady,
                landscape: i.landscape,
                skin: i.skin,
                market: i.market,
                scode: i.scode,
                quote: i.quote,
                "stock-type": i.stockType,
                added: i.added,
                "hide-handicap": r.isIndex || r.isPlate,
                "custom-setting": a.setting,
                "query-tab-key": i.queryTabKey || a.tabKey,
                isAccountOpen: r.isAccountOpen,
                canShowAiVolatile: i.canShowAiVolatile,
                canShowSupportPressureSignal: i.canShowSupportPressureSignal,
                enableNewsBar: i.enableNewsBar,
                "remind-subscribe-info": i.remindSubscribeInfo,
              }),
            }
          : {},
        { q: a.settingReady },
        a.settingReady
          ? {
              r: h.sr("toolBox", "562c701d-2"),
              s: h.p({
                skin: i.skin,
                landscape: i.landscape,
                market: i.market,
                scode: i.scode,
                setting: a.setting,
              }),
            }
          : {},
        { t: "black" === i.skin ? 1 : "", v: i.landscape ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-562c701d"],
]);
wx.createComponent(ae);
var re = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvc3JjL3BhZ2VzL3F1b3RlL2NvbXBvbmVudHMvQ2hhcnRXcmFwcGVyLnZ1ZQ =
  re),
  (exports.getChartScale = function (e, t, i) {
    return (S(t) &&
      (w(e) || I(e) || x(e) || ["ETF", "QDII-ETF"].includes(e))) ||
      C(e) ||
      D(e) ||
      B(e)
      ? ["09:30", "11:30/13:00", "15:30"]
      : k(t) || j(e)
      ? ["09:30", "12:00/13:00", "16:00"]
      : T(t) || P(t) || S(t) || v(t) || E(t)
      ? ["09:30", "11:30/13:00", "15:00"]
      : y(t)
      ? ["09:30", "12:45", "16:00"]
      : b(t)
      ? ["08:00", "12:15", "16:30"]
      : q(e)
      ? ["09:00", "13:15", "17:30"]
      : O(t)
      ? $(t)
        ? ["17:16", "3:00/9:15", "12:00/13:00", "16:30"]
        : A(e)
        ? ["17:00", "5:15/9:00", "16:30"]
        : L(e) || _(e)
        ? ["17:00", "04:30", "16:00"]
        : z(e)
        ? ["19:00", "7:45/8:30", "13:20"]
        : F(e)
        ? ["08:30", "13:05"]
        : ["18:00", "05:30", "17:00"]
      : G(t)
      ? "AG9999" === i
        ? ["19:50", "02:30/9:00", "15:30"]
        : ["20:00", "2:30/9:00", "15:30"]
      : K(t)
      ? ["00:00", "06:00", "12:00", "18:00", "24:00"]
      : N(t)
      ? "USDCNY" === i
        ? ["09:30", "03:00"]
        : ["00:00", "12:00", "24:00"]
      : void 0;
  }),
  (exports.getDefaultSetting = function () {
    return {
      fq: 1,
      trendline: !1,
      supportPressureLine: !1,
      gap: !1,
      lastestPrice: !1,
      remindPrice: !1,
      ds: !1,
      zx: !1,
      zjzf: !1,
      minsIndicator: "volume",
      mainIndicator: "ma",
      indicatorCount: 2,
      firstIndicator: "volume",
      secondIndicator: "macd",
      thirdIndicator: "kdj",
      fourthIndicator: "rsi",
      yangKStyle: { id: "solid", name: "实心阳线" },
      auctionMode: "close",
      maTypes: [5, 10, 20, 30, 0, 0, 0, 0, 0, 0],
      maTemp: [],
      emaTypes: [12, 50, 0, 0, 0, 0, 0, 0, 0, 0],
      emaTemp: [],
      volumeTypes: [5, 10, 20, 0, 0],
      volumeTemp: [],
      cjeTypes: [5, 10, 20, 0, 0],
      cjeTemp: [],
      macdParams: { short: 12, long: 26, m: 9 },
      dmiParams: { n: 14, m: 6 },
      cciParams: { n: 14 },
      wrParams: { n1: 10, n2: 6 },
      bollParams: { deviation: 20, width: 2 },
      kdjParams: { n1: 9, n2: 3, n3: 3 },
      rsiParams: { n1: 6, n2: 12, n3: 24 },
      chartRatio: 100,
      foldState: !0,
      macdPattern: !1,
      magicNine: !1,
      tradeSecret: !1,
      tradeLine: !1,
      tradeEntranceClosed: null,
      minsSetting: { showFive: !0, showIndicator: !0 },
    };
  }),
  (exports.getRenderPoint = function (e, t, i) {
    return k(t) || j(e)
      ? [332, 425, 60, 86]
      : T(t) || P(t) || S(t) || v(t) || E(t)
      ? [242, 310, 60, 86, 267, 272, 345]
      : y(t)
      ? [391, 495, 60, 86]
      : b(t) || q(e)
      ? [511, 645, 60, 86]
      : O(t)
      ? $(t)
        ? [962, 1210, 60, 86]
        : A(e)
        ? [1187, 1490, 60, 86]
        : L(e) || _(e)
        ? [1381, 1730, 60, 86]
        : z(e)
        ? [1058, 1325, 60, 86]
        : F(e)
        ? [276, 1380, 60, 86]
        : [1381, 1730, 60, 86]
      : G(t)
      ? "AG9999" === i
        ? [792, 995, 60, 86]
        : [782, 990, 60, 86]
      : K(t)
      ? [1440, 1800, 60, 86]
      : N(t)
      ? "USDCNY" === i
        ? [1050, 0, 60, 86]
        : [1440, 0, 60, 86]
      : void 0;
  }),
  (exports.getStockType = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return S(e) || T(e) || P(e) || E(e)
      ? t[61]
      : v(e)
      ? t[58]
      : k(e)
      ? t[63]
      : y(e) || b(e) || M(e) || O(e) || G(e)
      ? t[56]
      : void 0;
  }),
  (exports.getTradeUnit = function (e, t) {
    return I(e)
      ? "股"
      : T(t) || P(t) || S(t) || v(t) || E(t) || G(t)
      ? "手"
      : k(t) || y(t) || b(t) || M(t)
      ? "股"
      : "";
  }),
  (exports.getUnit = function (e, t) {
    return I(e) ? 1 : R(e) ? 10 : T(t) || P(t) || S(t) || E(t) ? 100 : 1;
  }),
  (exports.judgeTrading = function (e, t, i, n) {
    if (K(t)) return { isTrading: !0 };
    var a = ((i = Array.isArray(i) ? i[0] : i) ? i.split("|") : [])
      .map(function (e) {
        return e.split("_");
      })
      .filter(function (i) {
        return S(t) &&
          (g.utils.isAMarket(e) ||
            I(e) ||
            x(e) ||
            ["ETF", "QDII-ETF"].includes(e))
          ? "HSZB" === i[0]
          : C(e) || D(e) || B(e)
          ? "ZQ" === i[0]
          : j(e)
          ? "JW" === i[0]
          : k(t)
          ? "NEWHK" === i[0]
          : T(t) || P(t) || S(t) || v(t) || E(t)
          ? "NEWSH" === i[0]
          : y(t)
          ? "NEWUS" === i[0]
          : b(t)
          ? "UK" === i[0]
          : q(e)
          ? "DE" === i[0]
          : A(e)
          ? "SGXS" === i[0]
          : O(t)
          ? $(t)
            ? "HD" === i[0]
            : e.includes("_".concat(i[0]))
          : N(t)
          ? i[0] === n
          : !!G(t) && "SGE" === i[0];
      });
    return {
      isTrading: !!a[0] && "open" === a[0][1],
      isAuctionTime: !!a[0] && "盘前竞价" === a[0][2],
      isWaitingForTrading: !!a[0] && "等待开盘" === a[0][2],
      isAfterTrading: !!a[0] && "盘后交易中" === a[0][2],
    };
  });
