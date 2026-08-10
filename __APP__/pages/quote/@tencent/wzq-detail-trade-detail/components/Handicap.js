var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../common/vendor.js"),
  n = require("../../stock-hq-data/index.js"),
  o = {
    components: {
      FlashPrice: function () {
        return "./FlashPrice.js";
      },
    },
    options: { styleIsolation: "shared" },
    inject: ["hqBridge"],
    props: ["market", "scode", "quote", "hkVIP", "landscape"],
    data: function () {
      var e = this.quote && Object.keys(this.quote).length > 0;
      return {
        fiveQuote: e ? this.quote : {},
        dataReady: e,
        showTradeEmbeddedTips: !1,
      };
    },
    computed: {
      isMP: function () {
        return t.StockBridge.ENV === t.EnvTypeEnum.MP;
      },
      transCount: function () {
        return this.hkVIP ? 10 : 5;
      },
      showSideTabs: function () {
        return !n.utils.isNQMarket(this.market);
      },
      buyPercentWidth: function () {
        var e,
          t = this,
          n = 0,
          o = 0;
        return (
          (null == (e = this.fiveQuote) ? void 0 : e.fiveTrans) &&
            Object.keys(this.fiveQuote.fiveTrans).map(function (e) {
              var i = t.fiveQuote.fiveTrans[e];
              if (/sl/.test(e)) {
                var r = t.formatTextToNumber(i);
                (o += /mr/.test(e) ? r : 0), (n += r);
              }
            }),
          n ? (o / n) * 100 + "%" : ""
        );
      },
      maxAmount: function () {
        var e,
          t = this,
          n = [];
        return (
          (null == (e = this.fiveQuote) ? void 0 : e.fiveTrans) &&
            Object.keys(this.fiveQuote.fiveTrans).map(function (e) {
              var o = t.fiveQuote.fiveTrans[e];
              /sl/.test(e) && n.push(t.formatTextToNumber(o));
            }),
          Math.max.apply(Math, n)
        );
      },
    },
    watch: {
      quote: {
        handler: function (e) {
          var t = this;
          e &&
            Object.keys(e).length &&
            ((this.fiveQuote = e),
            this.dataReady ||
              ((this.dataReady = !0),
              this.$nextTick(function () {
                t.scrollToMiddle();
              })));
        },
        immediate: !0,
      },
    },
    mounted: function () {
      var e = this;
      (this.symbol = n.utils.getSymbol(this.market, this.scode)),
        t.StockBridge.report("hq.stock_detail.handicap_brow", {
          stockid: this.symbol,
        }),
        t.StockBridge.busOff(
          "trade-showTradeEmbeddedComp",
          this.onShowTradeEmbeddedComp
        ),
        this.hkVIP &&
          t.StockBridge.report("hq.hk_detail.pankou_level2_brow", {
            landscape: this.landscape,
            stockid: this.symbol,
          }),
        this.isMP && this.landscape
          ? setTimeout(function () {
              e.scrollToMiddle();
            }, 500)
          : this.$nextTick(function () {
              e.scrollToMiddle();
            });
    },
    activated: function () {
      var e = this;
      this.$nextTick(function () {
        e.scrollToMiddle();
      });
    },
    beforeUnmount: function () {
      this.timer && clearTimeout(this.timer),
        t.StockBridge.busOff(
          "trade-showTradeEmbeddedComp",
          this.onShowTradeEmbeddedComp
        );
    },
    methods: {
      handleTouchStart: function () {
        this.$emit("changeRefreshStatus", !0);
      },
      handleTouchEnd: function () {
        this.$emit("changeRefreshStatus", !1);
      },
      scrollToMiddle: function () {
        var n = this;
        if (this.dataReady)
          if (this.isMP) {
            var o = t.wx$1.createSelectorQuery().in(this);
            o
              .select(".pannel-scroll-wrapper")
              .fields({ rect: !0, size: !0, scrollOffset: !0 }),
              o.select(".item").boundingClientRect(),
              o.exec(function (t) {
                if (t && !(t.length < 2)) {
                  var i = e(t, 2),
                    r = i[0],
                    a = i[1];
                  if (r && a) {
                    var s = r.height - 30,
                      c = a.height,
                      d = 2 * n.transCount,
                      u = Math.ceil(s / c),
                      h = Math.floor((d - u) / 2);
                    o.select(".pannel-scroll-wrapper")
                      .node(function (e) {
                        e &&
                          e.node &&
                          e.node.scrollTo({ top: c * h + 5, animated: !1 });
                      })
                      .exec();
                  }
                }
              });
          } else
            this.$nextTick(function () {
              var e = n.$refs.scrollContent,
                t = n.$refs.itemWrapper;
              if (e && t.children.length > 1) {
                var o = e.clientHeight - 30,
                  i =
                    t.children[0].offsetHeight +
                    parseInt(
                      window.getComputedStyle(t.children[0]).marginBottom
                    ),
                  r = Math.floor((20 - Math.ceil(o / i)) / 2),
                  a = t.children[r];
                (null == a ? void 0 : a.offsetTop) &&
                  (e.scrollTop = a.offsetTop);
              }
            });
      },
      formatTextToNumber: function (e) {
        if (null == e) return 0;
        if ("-" === e) return 0;
        if (!isNaN(e)) return +e;
        var t = e.replace(/\d/g, "").replace(/\./g, "");
        switch (((e = +e.replace(t, "")), t)) {
          case "万":
            e *= 1e4;
            break;
          case "亿":
            e *= 1e8;
            break;
          case "千亿":
            e *= 1e11;
            break;
          case "万亿":
            e *= 1e12;
            break;
          case "兆":
            e *= 1e16;
        }
        return e;
      },
      onClickPrice: function (e) {
        var n = e.type,
          o = e.price,
          i = {
            scode: this.scode,
            market: this.market,
            stockid: this.symbol,
            price: o,
          };
        this.$emit("onClickPrice", o, i),
          t.StockBridge.busEmit("market-onClickPrice", i),
          t.StockBridge.report(
            "hq.stock_detail.handicap.".concat(n, "_click"),
            { stockid: this.symbol }
          );
      },
      onShowTradeEmbeddedComp: function () {
        var e = this,
          n = t.StockBridge.getStorage("TradeEmbeddedTipShow");
        (this.showTradeEmbeddedTips = !n),
          this.showTradeEmbeddedTips &&
            (this.timer && clearTimeout(this.timer),
            (this.timer = setTimeout(function () {
              e.onClickTradeEmbeddedTips();
            }, 3e3)));
      },
      onClickTradeEmbeddedTips: function () {
        (this.showTradeEmbeddedTips = !1),
          t.StockBridge.setStorage("TradeEmbeddedTipShow", 1);
      },
    },
  };
Array || t.resolveComponent("FlashPrice")();
var i = t._export_sfc(o, [
  [
    "render",
    function (e, n, o, i, r, a) {
      return t.e(
        { a: r.dataReady },
        r.dataReady
          ? t.e(
              {
                b: a.buyPercentWidth,
                c: a.buyPercentWidth ? "" : 1,
                d: a.isMP,
              },
              a.isMP
                ? {
                    e: t.f(
                      Array.from({ length: a.transCount }, function (e, t) {
                        return a.transCount - t;
                      }),
                      function (e, n, o) {
                        return {
                          a: "buy".concat(e),
                          b: t.o(a.onClickPrice, 3687, "buy".concat(e)),
                          c: "b6c7e5d0-0-" + o,
                          d: t.p({
                            type: "mc",
                            i: e,
                            "trans-count": a.transCount,
                            quote: r.fiveQuote,
                            "max-amount": a.maxAmount,
                          }),
                        };
                      }
                    ),
                    f: t.f(a.transCount, function (e, n, o) {
                      return {
                        a: "sell".concat(e),
                        b: t.o(a.onClickPrice, 3688, "sell".concat(e)),
                        c: "b6c7e5d0-1-" + o,
                        d: t.p({
                          type: "mr",
                          i: e,
                          "trans-count": a.transCount,
                          quote: r.fiveQuote,
                          "max-amount": a.maxAmount,
                        }),
                      };
                    }),
                  }
                : t.e(
                    {
                      g: t.f(
                        Array.from({ length: a.transCount }, function (e, t) {
                          return a.transCount - t;
                        }),
                        function (e, n, o) {
                          return {
                            a: "buy".concat(e),
                            b: t.o(a.onClickPrice, 3689, "buy".concat(e)),
                            c: "b6c7e5d0-2-" + o,
                            d: t.p({
                              type: "mc",
                              i: e,
                              "trans-count": a.transCount,
                              quote: r.fiveQuote,
                              "max-amount": a.maxAmount,
                            }),
                          };
                        }
                      ),
                      h: t.f(a.transCount, function (e, n, o) {
                        return {
                          a: "sell".concat(e),
                          b: t.o(a.onClickPrice, 3690, "sell".concat(e)),
                          c: "b6c7e5d0-3-" + o,
                          d: t.p({
                            type: "mr",
                            i: e,
                            "trans-count": a.transCount,
                            quote: r.fiveQuote,
                            "max-amount": a.maxAmount,
                          }),
                        };
                      }),
                      i: t.o(function () {
                        return (
                          a.handleTouchStart &&
                          a.handleTouchStart.apply(a, arguments)
                        );
                      }, 3691),
                      j: t.o(function () {
                        return (
                          a.handleTouchEnd &&
                          a.handleTouchEnd.apply(a, arguments)
                        );
                      }, 3692),
                      k: r.showTradeEmbeddedTips,
                    },
                    r.showTradeEmbeddedTips
                      ? {
                          l: t.o(function () {
                            return (
                              a.onClickTradeEmbeddedTips &&
                              a.onClickTradeEmbeddedTips.apply(a, arguments)
                            );
                          }, 3693),
                        }
                      : {}
                  ),
              {
                m: t.n(a.showSideTabs ? "" : "no-tab-bar"),
                n: t.n(o.hkVIP ? "ten-trans" : ""),
                o: t.n(o.landscape ? "landscape" : ""),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-b6c7e5d0"],
]);
wx.createComponent(i);
