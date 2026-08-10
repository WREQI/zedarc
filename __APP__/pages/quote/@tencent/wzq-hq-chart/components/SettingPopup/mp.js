var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  o = function (e, i, a) {
    return i in e
      ? t(e, i, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[i] = a);
  },
  s = require("../../../../../../common/vendor.js"),
  h = require("../../../stock-hq-data/index.js"),
  d = {},
  k = {
    components: {
      IndicatorSetting: function () {
        return "./components/IndicatorSetting.js";
      },
      MinsSetting: function () {
        return "./components/MinsSetting.js";
      },
      KlineSetting: function () {
        return "./components/KlineSetting.js";
      },
    },
    props: [
      "setting",
      "showTradeDetail",
      "hasAuctionMarket",
      "market",
      "tabKey",
      "isAccountOpen",
      "stockType",
      "isSupportTradeLine",
      "canShowAiVolatile",
      "canShowSupportPressureSignal",
      "hkVIP",
    ],
    data: function () {
      return {
        minsSetData: { cjlChecked: !1, fiveChecked: !1, auctionChecked: !1 },
        klineSetData: {
          cmfbChecked: !1,
          trendLineChecked: !1,
          supportPresureChecked: !1,
          magicNineChecked: !1,
          tradeLineChecked: !1,
          suportTradeLine: this.isSupportTradeLine,
          miFq: 1,
          ykStyle: 0,
          gapChecked: !1,
        },
        indicatorSetData: { mainIndicator: "MA", indicatorCount: 1 },
        showContent: !0,
        curValue: 1,
        curKey: 0,
        curShow: !1,
        maSets: [],
        showTech: !1,
        tabs: [
          { text: "分时", value: "minSet" },
          { text: "K线", value: "kSet" },
        ],
        curTab: "init",
        swiperOptions: { initialSlide: 0 },
      };
    },
    computed: {
      isSupportChip: function () {
        return (
          h.utils.isHSMarket(this.market) &&
          ["GP-A", "GP-A-CYB", "GP-A-KCB"].includes(this.stockType)
        );
      },
    },
    watch: {
      setting: function (e) {
        this.setPropValue(e);
      },
    },
    created: function () {
      var e = this;
      "mins" !== this.tabKey && "fiveMins" !== this.tabKey
        ? (this.$nextTick(function () {
            e.curTab = 1;
          }),
          s.StockBridge.report("hq.detail.chart.kline.set.click"))
        : ((this.curTab = 0),
          s.StockBridge.report("hq.detail.chart.mins.set.click")),
        this.setPropValue(this.setting);
    },
    methods: {
      jumpIndicatorSetting: function () {
        this.changeTab(2);
      },
      changeTabSwiper: function (e) {
        var t = e.detail.current;
        this.changeTab(t);
      },
      changeTab: function (e) {
        this.curTab !== e &&
          ((this.curTab = e),
          0 === e && this.$emit("switchChart", "mins"),
          1 === e && this.$emit("switchChart", "dayKline"),
          2 === e
            ? ((this.showTech = !0),
              s.StockBridge.report(
                "hq.detail.chart.kline.more_indicator_click"
              ))
            : (this.showTech = !1));
      },
      setPropValue: function (e) {
        var t = e || {},
          i = t.minsSetting,
          a = t.maSetting,
          n = void 0 === a ? [] : a,
          r = t.miIsShowChip,
          c = t.miFq,
          o = void 0 === c ? 1 : c,
          s = t.miYkstyle,
          d = void 0 === s ? 0 : s,
          k = t.miGap,
          l = void 0 !== k && k,
          S = t.miTrendline,
          u = void 0 !== S && S,
          p = t.miSupportPressureLine,
          m = void 0 !== p && p,
          g = t.miMagicNine,
          C = void 0 !== g && g,
          D = t.miTradeline,
          f = void 0 !== D && D,
          b = t.miIndicatorCount,
          v = void 0 === b ? 1 : b,
          y = t.miMainIndicator,
          w = void 0 === y ? "MA" : y,
          T = i || {},
          q = T.showIndicator,
          P = void 0 !== q && q,
          I = T.showFive,
          L = void 0 !== I && I,
          B = T.showAuction,
          M = void 0 !== B && B;
        (this.minsSetData = {
          cjlChecked: P,
          fiveChecked: L,
          auctionChecked: M,
        }),
          (this.klineSetData = {
            trendLineChecked: u,
            supportPresureChecked: m,
            cmfbChecked: r,
            gapChecked: l,
            magicNineChecked: C,
            tradeLineChecked: f,
            suportTradeLine: this.isSupportTradeLine,
            ykStyle: d,
            miFq: h.utils.isUSMarket(this.market) && 2 === o ? 1 : o,
          }),
          (this.indicatorSetData = {
            indicatorCount: v,
            mainIndicator: w.toUpperCase(),
            maSets: n,
          });
      },
      closeSetting: function () {
        var e = this;
        this.showContent = !1;
        var t = setTimeout(function () {
          e.$emit("closeSetting"), clearTimeout(t);
        }, 300);
      },
      changeSwitchSet: function (e) {
        var t = e.type,
          i = e.value;
        switch (t) {
          case "indicate":
            this.minsSetData.cjlChecked = !this.minsSetData.cjlChecked;
            break;
          case "five":
            this.minsSetData.fiveChecked = !this.minsSetData.fiveChecked;
            break;
          case "price":
            this.minsSetData.auctionChecked = !this.minsSetData.auctionChecked;
            break;
          case "cmfb":
            (this.klineSetData.cmfbChecked = !this.klineSetData.cmfbChecked),
              s.StockBridge.report("hq.detail.chart.cmfb.click");
            break;
          case "tline":
            (this.klineSetData.trendLineChecked =
              !this.klineSetData.trendLineChecked),
              s.StockBridge.report(
                "hq.detail.chart.trendline.".concat(
                  this.klineSetData.trendLineChecked ? "open" : "close",
                  ".click"
                )
              );
            break;
          case "zypos":
            (this.klineSetData.supportPresureChecked =
              !this.klineSetData.supportPresureChecked),
              s.StockBridge.report(
                "hq.detail.chart.supportPresure.".concat(
                  this.klineSetData.supportPresureChecked ? "open" : "close",
                  ".click"
                )
              );
            break;
          case "gap":
            (this.klineSetData.gapChecked = !this.klineSetData.gapChecked),
              s.StockBridge.report(
                "hq.detail.chart.gap.".concat(
                  this.klineSetData.gapChecked ? "open" : "close",
                  ".click"
                )
              );
            break;
          case "magicNine":
            if (
              ((this.klineSetData.magicNineChecked =
                !this.klineSetData.magicNineChecked),
              s.StockBridge.report(
                "hq.detail.chart.nine.".concat(
                  this.klineSetData.magicNineChecked ? "open" : "close",
                  ".click"
                )
              ),
              this.klineSetData.magicNineChecked)
            ) {
              var a = +s.StockBridge.getStorage("ninetransCount");
              a <= 3 &&
                (s.wx$1.showToast({
                  title: "神奇九转服务由券商提供",
                  icon: "none",
                  duration: 1500,
                }),
                s.StockBridge.setStorage("ninetransCount", a + 1));
            }
            break;
          case "trandeLine":
            if (
              ((this.klineSetData.tradeLineChecked =
                !this.klineSetData.tradeLineChecked),
              s.StockBridge.report(
                "hq.detail.chart.tradeLine.".concat(
                  this.klineSetData.tradeLineChecked ? "open" : "close",
                  ".click"
                )
              ),
              this.klineSetData.tradeLineChecked)
            ) {
              var n = +s.StockBridge.getStorage("tradlineCount");
              n <= 3 &&
                (s.wx$1.showToast({
                  title: "操盘线服务由券商提供",
                  icon: "none",
                  duration: 1500,
                }),
                s.StockBridge.setStorage("tradlineCount", n + 1));
            }
            break;
          case "kStyle":
            this.klineSetData.ykStyle != i &&
              ((this.klineSetData.ykStyle = i),
              s.StockBridge.report("hq.detail.chart.kline.yk.click", {
                type: i,
              }));
            break;
          case "fq":
            this.klineSetData.miFq !== i &&
              ((this.klineSetData.miFq = i),
              s.StockBridge.report("hq.detail.chart.kline.fq.click", {
                type: i,
              }),
              s.StockBridge.busEmit("market-chart-setting-fqChange", i));
            break;
          case "mainIndicator":
            this.indicatorSetData.mainIndicator !== i &&
              ((this.indicatorSetData.mainIndicator = i),
              s.StockBridge.report(
                "hq.detail.chart.kline.mainindicator.click",
                { type: i }
              ));
            break;
          case "indicatorCount":
            this.indicatorSetData.indicatorCount !== i &&
              ((this.indicatorSetData.indicatorCount = i),
              s.StockBridge.report(
                "hq.detail.chart.kline.indicatorcount.click",
                { count: i }
              ));
            break;
          case "maTypes":
            (this.indicatorSetData.maSetting = i.maSetting),
              (this.indicatorSetData.miMaTypes = i.miMaTypes);
        }
        "aiVolatile" === t
          ? s.StockBridge.busEmit("market-setting-aiVolatile", !0)
          : "supportPressureSignal" === t
          ? s.StockBridge.busEmit("market-setting-supportPressureSignal", !0)
          : this.saveSetting();
      },
      saveSetting: function () {
        var t,
          s,
          h = {
            showIndicator: this.minsSetData.cjlChecked,
            showFive: this.minsSetData.fiveChecked,
            showAuction: this.minsSetData.auctionChecked,
          },
          d =
            ((t = (function (t, i) {
              for (var a in i || (i = {})) r.call(i, a) && o(t, a, i[a]);
              if (n) {
                var s,
                  h = e(n(i));
                try {
                  for (h.s(); !(s = h.n()).done; ) {
                    a = s.value;
                    c.call(i, a) && o(t, a, i[a]);
                  }
                } catch (e) {
                  h.e(e);
                } finally {
                  h.f();
                }
              }
              return t;
            })({}, this.setting)),
            (s = {
              minsSetting: h,
              miIsShowChip: this.klineSetData.cmfbChecked,
              miGap: this.klineSetData.gapChecked,
              miFq: this.klineSetData.miFq,
              miYkstyle: this.klineSetData.ykStyle,
              miTrendline: this.klineSetData.trendLineChecked,
              miSupportPressureLine: this.klineSetData.supportPresureChecked,
              miMagicNine: this.klineSetData.magicNineChecked,
              miTradeline: this.klineSetData.tradeLineChecked,
              miIndicatorCount: this.indicatorSetData.indicatorCount || 1,
              miMainIndicator:
                this.indicatorSetData.mainIndicator.toLowerCase() || "ma",
            }),
            i(t, a(s)));
        this.indicatorSetData.maSetting &&
          (d.maSetting = this.indicatorSetData.maSetting),
          this.indicatorSetData.miMaTypes &&
            (d.miMaTypes = this.indicatorSetData.miMaTypes),
          this.$emit("updateSetting", d);
      },
    },
  };
Array ||
  (
    s.resolveComponent("MinsSetting") +
    s.resolveComponent("KlineSetting") +
    s.resolveComponent("IndicatorSetting")
  )(),
  "function" == typeof d && d(k);
var l = s._export_sfc(k, [
  [
    "render",
    function (e, t, i, a, n, r) {
      return s.e(
        {
          a: s.o(function () {
            return r.closeSetting && r.closeSetting.apply(r, arguments);
          }, 6045),
          b: s.o(function () {
            return r.closeSetting && r.closeSetting.apply(r, arguments);
          }, 6046),
          c: n.showTech,
        },
        n.showTech
          ? {
              d: s.o(function (e) {
                return r.changeTab(1);
              }, 6047),
            }
          : {
              e: s.f(n.tabs, function (e, t, i) {
                return {
                  a: s.t(e.text),
                  b: s.n(n.curTab == t && "activemini"),
                  c: e.value,
                  d: s.o(
                    function (e) {
                      return r.changeTab(t);
                    },
                    6048,
                    e.value
                  ),
                };
              }),
            },
        {
          f: s.o(function () {
            return r.closeSetting && r.closeSetting.apply(r, arguments);
          }, 6049),
          g: "init" !== n.curTab,
        },
        "init" !== n.curTab
          ? {
              h: s.o(r.changeSwitchSet, 6050),
              i: s.p({
                market: i.market,
                minsSetData: n.minsSetData,
                showTradeDetail: i.showTradeDetail,
                hasAuctionMarket: i.hasAuctionMarket,
                hkVIP: i.hkVIP,
              }),
              j: s.o(r.changeSwitchSet, 6051),
              k: s.o(r.jumpIndicatorSetting, 6052),
              l: s.p({
                market: i.market,
                isSupportChip: r.isSupportChip,
                isAccountOpen: i.isAccountOpen,
                canShowAiVolatile: i.canShowAiVolatile,
                canShowSupportPressureSignal: i.canShowSupportPressureSignal,
                klineSetData: n.klineSetData,
              }),
              m: s.o(r.changeSwitchSet, 6053),
              n: s.p({ indicatorSetData: n.indicatorSetData }),
              o: n.curTab,
              p: s.o(function () {
                return (
                  r.changeTabSwiper && r.changeTabSwiper.apply(r, arguments)
                );
              }, 6054),
            }
          : {},
        {
          q: s.n(n.showContent ? "up" : "down"),
          r: s.o(function () {}, 6055),
          s: s.o(function () {}, 6056),
          t: s.o(function () {
            return r.closeSetting && r.closeSetting.apply(r, arguments);
          }, 6057),
        }
      );
    },
  ],
  ["__scopeId", "data-v-0018ccaf"],
]);
wx.createComponent(l);
