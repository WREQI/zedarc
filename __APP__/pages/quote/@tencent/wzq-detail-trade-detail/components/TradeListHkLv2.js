var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, i) {
    return new Promise(function (r, s) {
      var n = function (t) {
          try {
            a(i.next(t));
          } catch (t) {
            s(t);
          }
        },
        o = function (t) {
          try {
            a(i.throw(t));
          } catch (t) {
            s(t);
          }
        },
        a = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(n, o);
        };
      a((i = i.apply(t, e)).next());
    });
  },
  i = require("../../stock-hq-data/index.js"),
  r = require("../../../js-cookie/src/js.cookie.js"),
  s = require("../../../../../common/vendor.js"),
  n = {
    inject: ["hqBridge"],
    props: ["market", "scode", "quote", "chartHeight", "landscape"],
    data: function () {
      return {
        start: "",
        page: "",
        scrollTop: 0,
        hasMore: !0,
        mingxiList: null,
        tempList: [],
      };
    },
    computed: {
      isMP: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    watch: {
      "quote.lv2_broker.trade": function (t) {
        t && this.handlePushTradeList(t);
      },
    },
    created: function () {
      var t = this;
      this.detailApi ||
        (this.detailApi = new i.DetailApi(function (e) {
          return t.hqBridge.request(e);
        })),
        this.refreshData();
    },
    mounted: function () {
      (this.symbol = i.utils.getSymbol(this.market, this.scode)),
        this.hqBridge.report("hq.stock_detail.trade_detail_brow", {
          stockid: this.symbol,
        }),
        this.hqBridge.report("hq.hk_detail.mingxi_level2_brow", {
          stockid: this.symbol,
          landscape: this.landscape,
        });
    },
    beforeDestroy: function () {
      this.detailApi = null;
    },
    methods: {
      bigNumberToText: i.utils.bigNumberToText,
      handlePushTradeList: function (t) {
        var e, i;
        if (t) {
          var r = t
              .split(",")
              .map(function (t) {
                var e = t.split("/");
                return e && 5 === e.length
                  ? {
                      id: e[0],
                      time: e[1],
                      price: e[2],
                      amount: e[3],
                      type: e[4],
                    }
                  : null;
              })
              .filter(function (t) {
                return !!t;
              }),
            s = this.formatListData(r) || [];
          if (
            0 !==
            (this.isMP
              ? this.scrollTop
              : null ==
                (i = null == (e = this.$refs.listWrapper) ? void 0 : e.$el)
              ? void 0
              : i.scrollTop)
          )
            this.tempList.length < 1010 &&
              (this.tempList = s.concat(this.tempList || []));
          else {
            var n = s.concat(this.mingxiList || []);
            n.length > 300
              ? (this.mingxiList = n.slice(0, 300))
              : (this.mingxiList = n);
          }
        }
      },
      formatListData: function (t) {
        var e = this;
        return t
          .filter(function (t) {
            if (null == t ? void 0 : t.id)
              return (
                (t.colorClass = {
                  B: "color-rise",
                  S: "color-drop",
                  M: "color-equal",
                }[t.type]),
                (t.formatAmount = e.bigNumberToText(t.amount, "", 1)),
                (t.formatTime = t.time.slice(0, 5)),
                (t.fontClass = e.getFontsize(t.formatAmount)),
                (t.priceClass = e.getFontsize(t.price)),
                t
              );
          })
          .sort(function (t, e) {
            return e.id - t.id;
          });
      },
      getData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var i, n, o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        this.detailApi.getTradeDetailLevel2(
                          {
                            market: this.market,
                            scode: this.scode,
                            start: this.start,
                            openId:
                              s.StockBridge.ENV === s.EnvTypeEnum.MP
                                ? s.StockBridge.getStorage("_qluin")
                                : r.cookie.get("wzq_qluin"),
                            fskey:
                              s.StockBridge.ENV === s.EnvTypeEnum.MP
                                ? s.StockBridge.getStorage("_qlskey")
                                : r.cookie.get("wzq_qlskey"),
                          },
                          { needProcess: !0 }
                        )
                      );
                    case 2:
                      return (
                        (i = t.sent),
                        (n = i.list),
                        (o = void 0 === n ? [] : n),
                        t.abrupt(
                          "return",
                          (o.length > 0 &&
                            ((o = this.formatListData(o)),
                            (this.start = o[o.length - 1].id),
                            (this.hasMore = 100 === o.length)),
                          o)
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
            var i,
              r = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (this.start = ""), (t.next = 3), this.getData();
                    case 3:
                      (i = t.sent),
                        (this.mingxiList = i),
                        this.$nextTick(function () {
                          var t, e, i;
                          null ==
                            (e =
                              null == (t = r.$refs.listWrapper)
                                ? void 0
                                : t.$el) || e.scrollTo(0, 0),
                            null == (i = r.$refs.listWrapper) ||
                              i.resetStatus();
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
          0 === this.scrollTop &&
            this.tempList.length &&
            (this.tempList.length > 1e3
              ? this.refreshData()
              : ((this.mingxiList = this.tempList.concat(
                  this.mingxiList || []
                )),
                (this.tempList = []))),
          this.scrollTop > 50 &&
            !this.reportedScroll &&
            ((this.reportedScroll = !0),
            this.hqBridge.report("hq.stock_detail.tradelist.scroll", {
              stockid: this.symbol,
            }));
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
                      if (this.hasMore) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", !1);
                    case 2:
                      if (!(i.utils.isBJMarket(this.market) && this.page < 0)) {
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
Array || s.resolveComponent("st-reach-bottom")();
var o = s._export_sfc(n, [
  [
    "render",
    function (t, e, i, r, n, o) {
      return s.e(
        { a: o.isMP },
        o.isMP
          ? s.e(
              {
                b: s.f(n.mingxiList, function (t, e, i) {
                  return {
                    a: s.t(t.formatTime),
                    b: s.t(t.price),
                    c: s.n(t.priceClass),
                    d: s.t(t.formatAmount),
                    e: s.t(t.type),
                    f: s.n(t.colorClass),
                    g: s.n(t.fontClass),
                    h: t.id,
                  };
                }),
                c: n.mingxiList && 0 === n.mingxiList.length,
              },
              ((n.mingxiList && 0 === n.mingxiList.length) || n.hasMore, {}),
              {
                d: !n.hasMore,
                e: "".concat(i.chartHeight, "px"),
                f: s.o(function () {
                  return o.onScroll && o.onScroll.apply(o, arguments);
                }, 6092),
                g: s.o(function () {
                  return o.onPullUp && o.onPullUp.apply(o, arguments);
                }, 6093),
              }
            )
          : s.e(
              {
                h: s.f(n.mingxiList, function (t, e, i) {
                  return {
                    a: s.t(t.formatTime),
                    b: s.t(t.price),
                    c: s.n(t.priceClass),
                    d: s.t(t.formatAmount),
                    e: s.t(t.type),
                    f: s.n(t.colorClass),
                    g: s.n(t.fontClass),
                    h: t.id,
                  };
                }),
                i: n.mingxiList && 0 === n.mingxiList.length,
              },
              ((n.mingxiList && 0 === n.mingxiList.length) || n.hasMore, {}),
              {
                j: !n.hasMore,
                k: s.sr("listWrapper", "c05fb2b2-0"),
                l: "".concat(i.chartHeight, "px"),
                m: s.o(o.onScroll, 6094),
                n: s.p({
                  "immediate-check": !1,
                  "on-reach-bottom": o.onPullUp,
                }),
              }
            ),
        { o: s.n(i.landscape ? "landscape" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-c05fb2b2"],
]);
wx.createComponent(o);
