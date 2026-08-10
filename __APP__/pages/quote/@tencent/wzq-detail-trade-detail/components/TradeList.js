var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = function (t, e, r) {
    return new Promise(function (i, n) {
      var s = function (t) {
          try {
            a(r.next(t));
          } catch (t) {
            n(t);
          }
        },
        o = function (t) {
          try {
            a(r.throw(t));
          } catch (t) {
            n(t);
          }
        },
        a = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(s, o);
        };
      a((r = r.apply(t, e)).next());
    });
  },
  r = require("../../../../../common/vendor.js"),
  i = require("../../stock-hq-data/index.js"),
  n = {
    props: ["market", "scode", "quote", "chartHeight"],
    data: function () {
      return {
        start: "",
        scrollTop: 0,
        hasMore: !0,
        mingxiList: null,
        showMoreCenter: !1,
      };
    },
    watch: {
      quote: function () {
        var t, e;
        (this.isMP
          ? this.scrollTop
          : null == (e = null == (t = this.$refs.listWrapper) ? void 0 : t.$el)
          ? void 0
          : e.scrollTop) < 100 && this.refreshData();
      },
    },
    computed: {
      isMP: function () {
        return ["mpwzq", "mpweapp"].includes("mpweapp");
      },
    },
    created: function () {
      this.detailApi ||
        (this.detailApi = new i.DetailApi(function () {
          for (var t, e = arguments.length, i = new Array(e), n = 0; n < e; n++)
            i[n] = arguments[n];
          return 1 === i.length
            ? r.StockBridge.request(i[0], "GET", {}, { forceCallback: !0 })
            : (i[3] && (i[3].forceCallback = !0),
              (t = r.StockBridge).request.apply(t, i));
        })),
        this.refreshData();
    },
    mounted: function () {
      (this.symbol = i.utils.getSymbol(this.market, this.scode)),
        r.StockBridge.report("hq.stock_detail.trade_detail_brow", {
          stockid: this.symbol,
        });
    },
    methods: {
      bigNumberToText: i.utils.bigNumberToText,
      getData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var r,
              i,
              n,
              s,
              o = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        this.detailApi.getTradeDetail(
                          {
                            market: this.market,
                            scode: this.scode,
                            start: this.start,
                            openId: "stockfe",
                          },
                          { needProcess: !0 }
                        )
                      );
                    case 2:
                      return (
                        (r = t.sent),
                        (i = r.list),
                        (n = void 0 === i ? [] : i).length > 0 &&
                          ((this.start = n[n.length - 1].id - 1),
                          (s = 0),
                          (n = n
                            .filter(function (t) {
                              if (null == t ? void 0 : t.id)
                                return (
                                  (t.colorClass = {
                                    B: "color-rise",
                                    S: "color-drop",
                                    M: "color-equal",
                                  }[t.type]),
                                  (t.formatAmount = o.bigNumberToText(
                                    t.amount,
                                    "",
                                    1
                                  )),
                                  (t.formatTime = t.time.slice(0, 5)),
                                  (t.fontClass = o.getFontsize(t.formatAmount)),
                                  (t.priceClass = o.getFontsize(t.price)),
                                  String(t.formatAmount).length + 2 <
                                    String(t.price).length && (s += 1),
                                  t
                                );
                            })
                            .sort(function (t, e) {
                              return e.id - t.id;
                            })),
                          (this.hasMore = 100 === n.length),
                          (this.showMoreCenter = s / n.length > 0.7)),
                        t.abrupt("return", n)
                      );
                    case 7:
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
      getFontsize: function (t) {
        return isNaN(t)
          ? t.length > 4
            ? "smallft"
            : ""
          : parseInt(t, 10) >= 9999 && parseInt(t, 10) < 1e5
          ? "smallft"
          : "";
      },
      refreshData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var r,
              i = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (this.start = ""), (t.next = 3), this.getData();
                    case 3:
                      (r = t.sent),
                        (this.mingxiList = r),
                        this.isMP ||
                          this.$nextTick(function () {
                            var t, e, r;
                            null ==
                              (e =
                                null == (t = i.$refs.listWrapper)
                                  ? void 0
                                  : t.$el) || e.scrollTo(0, 0),
                              null == (r = i.$refs.listWrapper) ||
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
      onScroll: function (t) {
        (this.scrollTop = this.isMP ? t.detail.scrollTop : t.target.scrollTop),
          this.scrollTop > 50 &&
            !this.reportedScroll &&
            ((this.reportedScroll = !0),
            r.StockBridge.report("hq.stock_detail.tradelist.scroll", {
              stockid: this.symbol,
            }));
      },
      onPullUp: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var r,
              i = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!(this.start < 0)) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", !0);
                    case 2:
                      return (t.next = 4), this.getData();
                    case 4:
                      return (
                        (r = t.sent),
                        t.abrupt(
                          "return",
                          ((this.mingxiList = this.mingxiList.concat(r)),
                          this.isMP
                            ? void 0
                            : new Promise(function (t, e) {
                                i.hasMore ? t() : t(!0);
                              }))
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
    },
  };
Array || r.resolveComponent("st-reach-bottom")();
var s = r._export_sfc(n, [
  [
    "render",
    function (t, e, i, n, s, o) {
      return r.e(
        { a: o.isMP },
        o.isMP
          ? r.e(
              {
                b: r.f(s.mingxiList, function (t, e, i) {
                  return {
                    a: r.t(t.formatTime),
                    b: r.t(t.price),
                    c: r.n(t.priceClass),
                    d: r.t(t.formatAmount),
                    e: r.t(t.type),
                    f: r.n(t.colorClass),
                    g: r.n(t.fontClass),
                    h: t.id,
                  };
                }),
                c: s.showMoreCenter ? 1 : "",
                d: s.mingxiList && 0 === s.mingxiList.length,
              },
              ((s.mingxiList && 0 === s.mingxiList.length) || s.hasMore, {}),
              {
                e: !s.hasMore,
                f: "".concat(i.chartHeight, "px"),
                g: r.o(function () {
                  return o.onScroll && o.onScroll.apply(o, arguments);
                }, 6095),
                h: r.o(function () {
                  return o.onPullUp && o.onPullUp.apply(o, arguments);
                }, 6096),
              }
            )
          : r.e(
              {
                i: r.f(s.mingxiList, function (t, e, i) {
                  return {
                    a: r.t(t.formatTime),
                    b: r.t(t.price),
                    c: r.n(t.priceClass),
                    d: r.t(t.formatAmount),
                    e: r.t(t.type),
                    f: r.n(t.colorClass),
                    g: r.n(t.fontClass),
                    h: t.id,
                  };
                }),
                j: s.showMoreCenter ? 1 : "",
                k: s.mingxiList && 0 === s.mingxiList.length,
              },
              ((s.mingxiList && 0 === s.mingxiList.length) || s.hasMore, {}),
              {
                l: !s.hasMore,
                m: r.sr("listWrapper", "9277a7e1-0"),
                n: "".concat(i.chartHeight, "px"),
                o: r.o(o.onScroll, 6097),
                p: r.p({ immediateCheck: !1, "on-reach-bottom": o.onPullUp }),
              }
            )
      );
    },
  ],
  ["__scopeId", "data-v-9277a7e1"],
]);
wx.createComponent(s);
