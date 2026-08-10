var e = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../../common/vendor.js"),
  s = require("../mp.js"),
  a = {
    name: "GuessLocal",
    components: {
      operation: function () {
        return "../guess-operation/mp.js";
      },
      Mins: function () {
        return "../../../../../../../stock-widget/@tencent/stockfe-hq-chart/src/chart/Mins.js";
      },
    },
    provide: function () {
      return { hqBridge: this.hqBridge, stockBridge: this.stockBridge };
    },
    props: {
      guessLocalData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      tradeDateString: { type: String, default: "" },
      line: {
        type: Object,
        default: function () {
          return {
            market: s.DEFAULT_STOCK.MARKET,
            scode: s.DEFAULT_STOCK.SCODE,
          };
        },
      },
      stockInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      FTInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      activityResult: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      var e = new t.HQBridge();
      return {
        KLINE_TRADING: s.KLINE_STATUS.TRADING,
        KLINE_NOTOPEN: s.KLINE_STATUS.NOT_OPEN,
        IMG_NOTOPEN: s.CARD_IMAGES.NOT_OPEN,
        IMG_SUBSCRIBE: s.CARD_IMAGES.SUBSCRIBE,
        hqBridge: e,
        stockBridge: t.StockBridge,
        newTradeDateString: "",
        width: 0,
        height: 0,
        klineReady: !1,
        market: s.DEFAULT_STOCK.MARKET,
        scode: s.DEFAULT_STOCK.SCODE,
        hideIndicator: !0,
        customSetting: { chartRatio: 100, yAixsCount: 2 },
        isDestroyed: !1,
      };
    },
    computed: {
      showKline: function () {
        return (
          this.klineReady &&
          (this.guessLocalData.isFollow || 0 == this.guessLocalData.result) &&
          this.guessLocalData.kLine === s.KLINE_STATUS.TRADING
        );
      },
    },
    watch: {
      "guessLocalData.isFollow": {
        handler: function (e) {
          e || t.StockBridge.report("yy.czdupdate_follow_exposure", {}, {}),
            e && !this.klineReady && this.initKline();
        },
        immediate: !0,
      },
      tradeDateString: {
        handler: function (e) {
          this.newTradeDateString = e;
        },
        immediate: !0,
      },
    },
    mounted: function () {
      var e, t;
      ((null == (e = this.guessLocalData) ? void 0 : e.isFollow) ||
        0 == (null == (t = this.guessLocalData) ? void 0 : t.result)) &&
        this.initKline(),
        this.$emit("shellReady");
    },
    beforeDestroy: function () {
      this.isDestroyed = !0;
    },
    methods: {
      initKline: function () {
        return (
          (t = this),
          null,
          (s = e().mark(function t() {
            var s,
              a,
              i,
              o,
              n,
              r,
              u,
              l = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.klineReady || this.isDestroyed) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (e.next = 4),
                        this.hqBridge.getEleInfo(
                          ".guess-card__chart-canvas",
                          this
                        )
                      );
                    case 4:
                      if (
                        ((s = e.sent),
                        (i = (a = s || {}).width),
                        (o = void 0 === i ? 0 : i),
                        (n = a.height),
                        (r = void 0 === n ? 0 : n),
                        (this.width = o),
                        (this.height = r),
                        !this.isDestroyed)
                      ) {
                        e.next = 12;
                        break;
                      }
                      return e.abrupt("return");
                    case 12:
                      (u = function () {
                        l.isDestroyed ||
                          ((l.klineReady = !0), l.$emit("klineReady"));
                      }),
                        o > 0 && r > 0
                          ? "undefined" != typeof requestAnimationFrame
                            ? requestAnimationFrame(u)
                            : setTimeout(u, 16)
                          : u(),
                        (e.next = 19);
                      break;
                    case 16:
                      (e.prev = 16),
                        (e.t0 = e.catch(1)),
                        this.isDestroyed ||
                          ((this.klineReady = !0), this.$emit("klineReady"));
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[1, 16]]
            );
          })),
          new Promise(function (e, a) {
            var i = function (e) {
                try {
                  n(s.next(e));
                } catch (e) {
                  a(e);
                }
              },
              o = function (e) {
                try {
                  n(s.throw(e));
                } catch (e) {
                  a(e);
                }
              },
              n = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(i, o);
              };
            n((s = s.apply(t, null)).next());
          })
        );
        var t, s;
      },
      guessOpResult: function (e) {
        this.$emit("guessOpResult", e);
      },
      seeDetails: function () {
        var e = this;
        this.guessLocalData.titleTime &&
          setTimeout(function () {
            t.StockRouter.routeTo({
              name: "stockdetail",
              query: { market: e.market, scode: e.scode, preload: "1" },
            });
          }, 50);
      },
    },
  };
Array || (t.resolveComponent("Mins") + t.resolveComponent("operation"))();
var i = t._export_sfc(a, [
  [
    "render",
    function (e, s, a, i, o, n) {
      return t.e(
        { a: a.guessLocalData.isFollow || 0 == a.guessLocalData.result },
        a.guessLocalData.isFollow || 0 == a.guessLocalData.result
          ? t.e(
              { b: a.guessLocalData.titleTime },
              a.guessLocalData.titleTime
                ? { c: t.t(a.guessLocalData.titleTime) }
                : {},
              {
                d: t.o(function () {
                  return n.seeDetails && n.seeDetails.apply(n, arguments);
                }, 4882),
              }
            )
          : {},
        { e: a.guessLocalData.isFollow || 0 == a.guessLocalData.result },
        a.guessLocalData.isFollow || 0 == a.guessLocalData.result
          ? t.e(
              { f: !n.showKline },
              (n.showKline, {}),
              { g: n.showKline },
              n.showKline
                ? {
                    h: t.p({
                      skin: "plain",
                      width: o.width,
                      height: o.height,
                      "custom-setting": o.customSetting,
                      market: o.market,
                      scode: o.scode,
                      "hide-indicator": o.hideIndicator,
                    }),
                  }
                : {},
              {
                i:
                  !a.guessLocalData.kLine ||
                  a.guessLocalData.kLine === o.KLINE_TRADING,
                j: a.guessLocalData.kLine === o.KLINE_NOTOPEN,
              },
              a.guessLocalData.kLine === o.KLINE_NOTOPEN
                ? { k: t.t(a.guessLocalData.titleTime), l: o.IMG_NOTOPEN }
                : {},
              { m: a.guessLocalData.maskShow },
              a.guessLocalData.maskShow ? { n: t.t(o.newTradeDateString) } : {}
            )
          : {},
        { o: !a.guessLocalData.isFollow && 0 !== a.guessLocalData.result },
        a.guessLocalData.isFollow || 0 === a.guessLocalData.result
          ? {}
          : { p: o.IMG_SUBSCRIBE },
        {
          q: t.o(n.guessOpResult, 4883),
          r: t.p({
            inflow: a.guessLocalData.inflow,
            "pre-text": a.guessLocalData.preText,
            "next-text": a.guessLocalData.nextText,
            ratio: a.guessLocalData.ratio,
            result: a.guessLocalData.result,
            "prize-time": a.guessLocalData.prizeTime,
            "activity-result": a.activityResult,
            FTInfo: a.FTInfo,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-2cac6b18"],
]);
wx.createComponent(i);
