var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, r) {
    return new Promise(function (n, i) {
      var o = function (t) {
          try {
            a(r.next(t));
          } catch (t) {
            i(t);
          }
        },
        s = function (t) {
          try {
            a(r.throw(t));
          } catch (t) {
            i(t);
          }
        },
        a = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(o, s);
        };
      a((r = r.apply(t, e)).next());
    });
  },
  r = require("../../../../common/vendor.js"),
  n = require("../stock-hq-data/index.js"),
  i = null,
  o = {
    components: {
      FlashPrice: function () {
        return "./components/FlashPrice.js";
      },
    },
    props: {
      market: { type: String, default: "" },
      scode: { type: String, default: "" },
      quote: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return {
        wudangFold: !1,
        start: "",
        page: "",
        scrollTop: 0,
        mingxiList: null,
        showFiveBar: !0,
      };
    },
    computed: {
      isMP: function () {
        return !1;
      },
      simpleMode: function () {
        return n.utils.isFutures(this.market);
      },
      buyPercentWidth: function () {
        var t = this,
          e = 0,
          r = 0;
        return (
          this.quote.fiveTrans &&
            Object.keys(this.quote.fiveTrans).map(function (n) {
              var i = t.quote.fiveTrans[n];
              if (/sl/.test(n)) {
                var o = t.formatTextToNumber(i);
                (r += /mr/.test(n) ? o : 0), (e += o);
              }
            }),
          e ? (r / e) * 100 + "%" : ""
        );
      },
      maxAmount: function () {
        var t = this,
          e = [];
        return (
          this.quote.fiveTrans &&
            Object.keys(this.quote.fiveTrans).map(function (r) {
              var n = t.quote.fiveTrans[r];
              /sl/.test(r) && e.push(t.formatTextToNumber(n));
            }),
          Math.max.apply(Math, e)
        );
      },
    },
    watch: {
      quote: function () {
        this.scrollTop < 100 && this.refreshData();
      },
    },
    created: function () {
      i ||
        (i = new n.DetailApi(function () {
          for (var t, e = arguments.length, n = new Array(e), i = 0; i < e; i++)
            n[i] = arguments[i];
          return 1 === n.length
            ? r.StockBridge.request(n[0], "GET", {}, { forceCallback: !0 })
            : (n[3] && (n[3].forceCallback = !0),
              (t = r.StockBridge).request.apply(t, n));
        })),
        (this.wudangFold = this.simpleMode),
        this.refreshData(),
        n.utils.isFutures(this.market) &&
          ((this.showFiveBar = !1), (this.wudangFold = !0));
    },
    methods: {
      bigNumberToText: n.utils.bigNumberToText,
      formatTextToNumber: function (t) {
        var e = parseFloat(t);
        return isNaN(e)
          ? 0
          : /万/.test(t)
          ? 1e4 * e
          : /亿/.test(t)
          ? 1e8 * e
          : e;
      },
      onScroll: function (t) {
        (this.scrollTop = this.isMP ? t.detail.scrollTop : t.target.scrollTop),
          this.scrollTop > 50 &&
            !this.reportedScroll &&
            ((this.reportedScroll = !0),
            r.StockBridge.report("hq.stock_detail.tradelist.scroll", {
              stockid: this.symbol,
            }));
      },
      getData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var r,
              n,
              o,
              s = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        i.getTradeDetail(
                          {
                            market: this.market,
                            scode: this.scode,
                            start: this.start,
                            page: this.page,
                            openId: "stockfe",
                          },
                          { needProcess: !0 }
                        )
                      );
                    case 2:
                      return (
                        (r = t.sent),
                        (n = (null == r ? void 0 : r.list) || []),
                        (o = r.page),
                        t.abrupt(
                          "return",
                          (n.length > 0 &&
                            ((this.start = n[n.length - 1].id - 1),
                            (this.page = o - 1),
                            (n = n.filter(function (t) {
                              if (null == t ? void 0 : t.id)
                                return (
                                  (t.colorClass = {
                                    B: "color-rise",
                                    S: "color-drop",
                                    M: "color-equal",
                                  }[t.type]),
                                  (t.formatAmount = s.bigNumberToText(
                                    t.amount,
                                    "",
                                    1
                                  )),
                                  (t.formatTime = t.time.slice(0, 5)),
                                  t
                                );
                            }))),
                          n)
                        )
                      );
                    case 6:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      refreshData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var r,
              n = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (this.start = ""),
                        (this.page = ""),
                        (t.next = 3),
                        this.getData()
                      );
                    case 3:
                      (r = t.sent),
                        (this.mingxiList = r),
                        this.isMP ||
                          this.$nextTick(function () {
                            var t, e, r;
                            null ==
                              (e =
                                null == (t = n.$refs.listWrapper)
                                  ? void 0
                                  : t.$el) || e.scrollTo(0, 0),
                              null == (r = n.$refs.listWrapper) ||
                                r.resetStatus();
                          });
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      onPullUp: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.mingxiList.length) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 2:
                      if (!(n.utils.isBJMarket(this.market) && this.page < 0)) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt("return", !0);
                    case 4:
                      if (!(this.start < 0)) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return", !0);
                    case 6:
                      return (t.next = 8), this.getData();
                    case 8:
                      return (
                        (r = t.sent),
                        t.abrupt(
                          "return",
                          ((this.mingxiList = this.mingxiList.concat(r)),
                          0 === r.length)
                        )
                      );
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
    },
  };
Array ||
  (r.resolveComponent("FlashPrice") + r.resolveComponent("st-reach-bottom"))();
var s = r._export_sfc(o, [
  [
    "render",
    function (t, e, n, i, o, s) {
      return r.e(
        { a: o.showFiveBar },
        o.showFiveBar
          ? {
              b: s.buyPercentWidth,
              c: s.buyPercentWidth ? "" : 1,
              d: r.f(o.wudangFold ? [1] : [5, 4, 3, 2, 1], function (t, e, i) {
                return {
                  a: "buy".concat(t),
                  b: "2d534a21-0-" + i,
                  c: r.p({
                    type: "mc",
                    i: t,
                    quote: n.quote,
                    maxAmount: s.maxAmount,
                  }),
                };
              }),
              e: r.f(o.wudangFold ? [1] : [1, 2, 3, 4, 5], function (t, e, i) {
                return {
                  a: "sell".concat(t),
                  b: "2d534a21-1-" + i,
                  c: r.p({
                    type: "mr",
                    i: t,
                    quote: n.quote,
                    maxAmount: s.maxAmount,
                  }),
                };
              }),
              f: o.wudangFold ? 1 : "",
              g: s.isMP ? "" : 1,
            }
          : {},
        { h: s.simpleMode },
        s.simpleMode
          ? {}
          : {
              i: r.t(o.wudangFold ? "查看五档" : "分时成交"),
              j: o.wudangFold ? "" : 1,
              k: r.o(function (t) {
                return (o.wudangFold = !o.wudangFold);
              }, 6060),
            },
        { l: s.isMP },
        s.isMP
          ? r.e(
              {
                m: r.f(o.mingxiList, function (t, e, n) {
                  return {
                    a: r.t(t.formatTime),
                    b: r.t(t.price),
                    c: r.t(t.formatAmount),
                    d: r.t(t.type),
                    e: r.n(t.colorClass),
                    f: t.id,
                  };
                }),
                n: o.mingxiList && 0 === o.mingxiList.length,
              },
              (o.mingxiList && o.mingxiList.length, {}),
              {
                o: r.o(function () {
                  return s.onScroll && s.onScroll.apply(s, arguments);
                }, 6061),
                p: r.o(function () {
                  return s.onPullUp && s.onPullUp.apply(s, arguments);
                }, 6062),
              }
            )
          : r.e(
              {
                q: r.f(o.mingxiList, function (t, e, n) {
                  return {
                    a: r.t(t.formatTime),
                    b: r.t(t.price),
                    c: r.t(t.formatAmount),
                    d: r.t(t.type),
                    e: r.n(t.colorClass),
                    f: t.id,
                  };
                }),
                r: o.mingxiList && 0 === o.mingxiList.length,
              },
              (o.mingxiList && o.mingxiList.length, {}),
              {
                s: r.sr("listWrapper", "2d534a21-2"),
                t: r.o(s.onScroll, 6063),
                v: r.p({ immediateCheck: !1, "on-reach-bottom": s.onPullUp }),
              }
            ),
        { w: o.wudangFold ? 1 : "", x: o.showFiveBar ? "" : 1 }
      );
    },
  ],
  ["__scopeId", "data-v-2d534a21"],
]);
wx.createComponent(s);
