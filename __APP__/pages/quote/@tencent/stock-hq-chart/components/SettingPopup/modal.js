var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = Object.defineProperty,
  i = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  o = function (e, i, n) {
    return i in e
      ? t(e, i, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[i] = n);
  },
  s = require("../../../../../../common/vendor.js"),
  h = require("../../../stock-hq-data/index.js"),
  l = {
    components: {
      MinsSetting: function () {
        return "./components/MinsSetting.js";
      },
      KlineSetting: function () {
        return "./components/KlineSetting.js";
      },
    },
    props: [
      "skin",
      "setting",
      "showTradeDetail",
      "hasAuctionMarket",
      "market",
      "scode",
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
          supportPressureChecked: !1,
          magicNineChecked: !1,
          tradeLineChecked: !1,
          supportTradeLine: this.isSupportTradeLine,
          fq: 1,
          ykStyle: 0,
          gapChecked: !1,
        },
        showContent: !0,
        curValue: 1,
        curKey: 0,
        curShow: !1,
        maSets: [],
        tabs: [
          { text: "分时", value: "minSet" },
          { text: "K线", value: "kSet" },
        ],
        curTab: 0,
      };
    },
    computed: {
      isMP: function () {
        return s.StockBridge.ENV === s.EnvTypeEnum.MP;
      },
      isSupportChip: function () {
        return (
          h.utils.isHSMarket(this.market) &&
          ["GP-A", "GP-A-CYB", "GP-A-KCB"].includes(this.stockType)
        );
      },
      symbol: function () {
        return h.utils.getSymbol(this.market, this.scode);
      },
    },
    watch: {
      setting: function (e) {
        this.setPropValue(e);
      },
    },
    created: function () {
      "mins" !== this.tabKey && "fiveMins" !== this.tabKey
        ? ((this.curTab = 1),
          s.StockBridge.report("hq.detail.chart.kline.set.click", {
            stockid: this.symbol,
          }))
        : ((this.curTab = 0),
          s.StockBridge.report("hq.detail.chart.mins.set.click", {
            stockid: this.symbol,
          })),
        this.setPropValue(this.setting);
    },
    mounted: function () {
      var e = this;
      this.$nextTick(function () {
        e.handleScrollControl();
      });
    },
    destroyed: function () {
      this.timeOut && clearTimeout(this.timeOut), this.handleScrollControl(!1);
    },
    methods: {
      handleScrollControl: function () {
        var e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!this.isMP) {
          this.scrollTop =
            document.body.scrollTop || document.documentElement.scrollTop;
          var t = document.body.style;
          (t.position = e ? "fixed" : ""),
            (t.width = e ? "100%" : ""),
            (t.height = e ? "100%" : ""),
            (t.top = e ? -this.scrollTop + "px" : ""),
            (t.overflowY = e ? "hidden" : ""),
            e ||
              (document.body.scrollTop = document.documentElement.scrollTop =
                this.scrollTop || 0);
        }
      },
      jumpIndicatorSetting: function (e) {
        var t = "indicator" === e ? "indicatorSetting" : "klineSetting";
        s.StockRouter.routeTo({ name: t, query: {} });
      },
      changeTabSwiper: function (e) {
        var t = e.detail.current;
        this.changeTab(t);
      },
      changeTab: function (e) {
        if (this.curTab !== e) {
          this.curTab = e;
          var t = { 0: this.isMP ? "mins" : 0, 1: this.isMP ? "dayKline" : 2 };
          Object.prototype.hasOwnProperty.call(t, e) &&
            this.$emit("switchChart", t[e]);
        }
      },
      setPropValue: function (e) {
        var t = e || {},
          i = t.minsSetting,
          n = t.isShowChip,
          a = t.fq,
          c = void 0 === a ? 1 : a,
          r = t.ykStyle,
          o = void 0 === r ? 0 : r,
          s = t.gap,
          l = void 0 !== s && s,
          d = t.trendline,
          k = void 0 !== d && d,
          u = t.supportPressureLine,
          S = void 0 !== u && u,
          p = t.magicNine,
          m = void 0 !== p && p,
          g = t.tradeLine,
          C = void 0 !== g && g,
          b = t.auctionMode,
          f = void 0 === b ? "close" : b,
          y = i || {},
          v = y.showIndicator,
          D = void 0 !== v && v,
          w = y.showFive,
          T = void 0 !== w && w;
        (this.minsSetData = {
          cjlChecked: D,
          fiveChecked: T,
          auctionChecked: ["auto", "open"].includes(f),
        }),
          (this.klineSetData = {
            trendLineChecked: k,
            supportPressureChecked: S,
            cmfbChecked: n,
            gapChecked: l,
            magicNineChecked: m,
            tradeLineChecked: C,
            supportTradeLine: this.isSupportTradeLine,
            ykStyle: o,
            fq: h.utils.isUSMarket(this.market) && 2 == +c ? 1 : c,
          });
      },
      closeSetting: function () {
        var e = this;
        (this.showContent = !1),
          (this.timeOut = setTimeout(function () {
            e.$emit("closeSetting"), clearTimeout(e.timeOut);
          }, 300));
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
              s.StockBridge.report("hq.detail.chart.cmfb.click", {
                stockid: this.symbol,
              });
            break;
          case "trendLine":
            (this.klineSetData.trendLineChecked =
              !this.klineSetData.trendLineChecked),
              s.StockBridge.report(
                "hq.detail.chart.trendline.".concat(
                  this.klineSetData.trendLineChecked ? "open" : "close",
                  ".click"
                ),
                { stockid: this.symbol }
              );
            break;
          case "areaSelect":
            (this.klineSetData.areaSelectChecked =
              !this.klineSetData.areaSelectChecked),
              s.StockBridge.report("hq.detail.chart.areaSelect.click", {
                stockid: this.symbol,
              });
            break;
          case "supportPressureLine":
            (this.klineSetData.supportPressureChecked =
              !this.klineSetData.supportPressureChecked),
              s.StockBridge.report(
                "hq.detail.chart.supportPresure.".concat(
                  this.klineSetData.supportPressureChecked ? "open" : "close",
                  ".click"
                ),
                { stockid: this.symbol }
              );
            break;
          case "gap":
            (this.klineSetData.gapChecked = !this.klineSetData.gapChecked),
              s.StockBridge.report(
                "hq.detail.chart.gap.".concat(
                  this.klineSetData.gapChecked ? "open" : "close",
                  ".click"
                ),
                { stockid: this.symbol }
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
                ),
                { stockid: this.symbol }
              ),
              this.klineSetData.magicNineChecked)
            ) {
              var n = parseInt(s.StockBridge.getStorage("ninetransCount") || 0);
              n <= 3 &&
                (s.StockBridge.toast("神奇九转服务由券商提供", "none"),
                s.StockBridge.setStorage("ninetransCount", n + 1));
            }
            break;
          case "tradeLine":
            if (
              ((this.klineSetData.tradeLineChecked =
                !this.klineSetData.tradeLineChecked),
              s.StockBridge.report(
                "hq.detail.chart.tradeLine.".concat(
                  this.klineSetData.tradeLineChecked ? "open" : "close",
                  ".click"
                ),
                { stockid: this.symbol }
              ),
              this.klineSetData.tradeLineChecked)
            ) {
              var a = parseInt(s.StockBridge.getStorage("tradlineCount") || 0);
              a <= 3 &&
                (s.StockBridge.toast("操盘线服务由券商提供", "none"),
                s.StockBridge.setStorage("tradlineCount", a + 1));
            }
            break;
          case "kStyle":
            this.klineSetData.ykStyle != i &&
              ((this.klineSetData.ykStyle = i),
              s.StockBridge.report("hq.detail.chart.kline.yk.click", {
                type: i,
                stockid: this.symbol,
              }));
            break;
          case "fq":
            this.klineSetData.fq !== i &&
              ((this.klineSetData.fq = +i),
              s.StockBridge.report("hq.detail.chart.kline.fq.click", {
                type: i,
                stockid: this.symbol,
              }),
              s.StockBridge.busEmit("market-chart-setting-fqChange", i));
            break;
          case "aiVolatile":
            return void s.StockBridge.busEmit("market-setting-aiVolatile", !0);
          case "supportPressureSignal":
            return void s.StockBridge.busEmit(
              "market-setting-supportPressureSignal",
              !0
            );
        }
        this.curTab &&
          this.$emit("changeSetting", { type: t, value: this.klineSetData }),
          this.saveSetting();
      },
      saveSetting: function () {
        var t,
          s,
          h = {
            showIndicator: this.minsSetData.cjlChecked,
            showFive: this.minsSetData.fiveChecked,
            showAuction: this.minsSetData.auctionChecked,
          },
          l =
            ((t = (function (t, i) {
              for (var n in i || (i = {})) c.call(i, n) && o(t, n, i[n]);
              if (a) {
                var s,
                  h = e(a(i));
                try {
                  for (h.s(); !(s = h.n()).done; ) {
                    n = s.value;
                    r.call(i, n) && o(t, n, i[n]);
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
              auctionMode: this.minsSetData.auctionChecked ? "auto" : "close",
              isShowChip: this.klineSetData.cmfbChecked,
              gap: this.klineSetData.gapChecked,
              fq: this.klineSetData.fq,
              ykStyle: this.klineSetData.ykStyle,
              trendline: this.klineSetData.trendLineChecked,
              supportPressureLine: this.klineSetData.supportPressureChecked,
              magicNine: this.klineSetData.magicNineChecked,
              tradeLine: this.klineSetData.tradeLineChecked,
            }),
            i(t, n(s)));
        this.$emit("updateSetting", l);
      },
    },
  };
Array ||
  (s.resolveComponent("MinsSetting") + s.resolveComponent("KlineSetting"))();
var d = s._export_sfc(l, [
  [
    "render",
    function (e, t, i, n, a, c) {
      return {
        a: s.o(function () {
          return c.closeSetting && c.closeSetting.apply(c, arguments);
        }, 3674),
        b: s.o(function () {
          return c.closeSetting && c.closeSetting.apply(c, arguments);
        }, 3675),
        c: s.f(a.tabs, function (e, t, i) {
          return {
            a: s.t(e.text),
            b: s.n(a.curTab == t && "activemini"),
            c: e.value,
            d: s.o(
              function (e) {
                return c.changeTab(t);
              },
              3676,
              e.value
            ),
          };
        }),
        d: s.o(function () {
          return c.closeSetting && c.closeSetting.apply(c, arguments);
        }, 3677),
        e: s.o(c.changeSwitchSet, 3678),
        f: s.p({
          skin: i.skin,
          market: i.market,
          minsSetData: a.minsSetData,
          showTradeDetail: i.showTradeDetail,
          hasAuctionMarket: i.hasAuctionMarket,
          hkVIP: i.hkVIP,
        }),
        g: s.o(c.changeSwitchSet, 3679),
        h: s.o(c.jumpIndicatorSetting, 3680),
        i: s.p({
          skin: i.skin,
          market: i.market,
          isSupportChip: c.isSupportChip,
          isAccountOpen: i.isAccountOpen,
          canShowAiVolatile: i.canShowAiVolatile,
          canShowSupportPressureSignal: i.canShowSupportPressureSignal,
          klineSetData: a.klineSetData,
        }),
        j: a.curTab,
        k: s.o(function () {
          return c.changeTabSwiper && c.changeTabSwiper.apply(c, arguments);
        }, 3681),
        l: s.n(a.showContent ? "up" : "down"),
        m: s.o(function () {}, 3682),
        n: s.o(function () {}, 3683),
        o: "black" === i.skin ? 1 : "",
        p: s.o(function () {
          return c.closeSetting && c.closeSetting.apply(c, arguments);
        }, 3684),
      };
    },
  ],
  ["__scopeId", "data-v-d3a81667"],
]);
wx.createComponent(d);
