var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (o, r) {
      var s = function (t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        },
        c = function (t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        },
        a = function (t) {
          return t.done ? o(t.value) : Promise.resolve(t.value).then(s, c);
        };
      a((n = n.apply(t, e)).next());
    });
  },
  n = require("../assets/filters/stock.js"),
  o = require("../../../../stock-news-base/service/market/RelatedStockHelper.js"),
  r = require("../../../../stock-news-base/service/market/RelatedStockUtils.js"),
  s = require("../defaultWZQ.js"),
  c = require("../../../../../../../common/vendor.js"),
  a = new o.RelatedStockHelper(),
  i = {
    components: {
      ZjrdAddBtn: function () {
        return "./ZjrdAddBtn.js";
      },
    },
    directives: {},
    props: {
      content: {
        type: Array,
        default: function () {
          return [];
        },
      },
      containerClass: { type: String, default: "" },
    },
    data: function () {
      return { stocksAddedStatus: {}, busEvents: {} };
    },
    watch: {
      content: {
        handler: function (t, e) {
          t !== e && this.checkStockExist();
        },
        immediate: !0,
      },
    },
    created: function () {
      var t = this;
      this.busEvents = {
        RelatedStockChange: function (e) {
          Object.keys(e).forEach(function (n) {
            t.stocksAddedStatus[n] = e[n];
          });
        },
        RelatedStockAddedRefresh: function () {
          t.checkStockExist();
        },
      };
      for (var e = 0, n = Object.keys(this.busEvents); e < n.length; e++) {
        var o = n[e];
        s.BUS.$on(o, this.busEvents[o]);
      }
    },
    beforeDestroy: function () {
      for (var t = 0, e = Object.keys(this.busEvents); t < e.length; t++) {
        var n = e[t];
        s.BUS.$off(n, this.busEvents[n]);
      }
    },
    activated: function () {
      this.checkStockExist();
    },
    methods: {
      priceChangePercent: n.priceChangePercent,
      flucColor: n.flucColor,
      fundField: n.fundField,
      getVisibleSetting: function (t) {
        return {
          callback: function (t) {},
          once: !0,
          intersection: { threshold: 0.5 },
        };
      },
      getStockItem: function (t) {
        var e = t.symbol.substr(0, 2);
        return { type: s.getMarket(e), scode: t.symbol.substr(2) };
      },
      handleStockDetail: function (t) {
        var e = this.getStockItem(t),
          n = e.type,
          o = e.scode;
        this.$emit("viewStockDetail", "zjrd", n, o);
      },
      onFundPlateClick: function (t) {
        this.$emit("onFundPlateClick", t);
      },
      reportParams: function (t) {
        var e = !!this.stocksAddedStatus[t];
        return {
          stockid: t,
          stocklist: [t].join(","),
          foperation_purpose: "zixuan",
          hasaddlist: e ? 1 : 0,
          fchannel_id_fm_i: "I5v00p000l172",
        };
      },
      addStockToZixuan: function (n) {
        return e(
          this,
          null,
          t().mark(function e() {
            var o, s, c;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (o = n.hot_funds_etf.code),
                        (s = !!this.stocksAddedStatus[o]),
                        (this.stocksAddedStatus[o] = !s),
                        (c = this.reportParams(o)),
                        this.stocksAddedStatus[o]
                          ? this.$emit("statReport", "zjrd_stock_add", c)
                          : this.$emit("statReport", "zjrd_stock_cancel", c),
                        (t.prev = 4),
                        (t.next = 7),
                        r.RelatedStockUtils.getInstance().requestStockToAdd(
                          !s,
                          o
                        )
                      );
                    case 7:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 10;
                        break;
                      }
                      this.stocksAddedStatus[o] = !s;
                    case 10:
                      t.next = 15;
                      break;
                    case 12:
                      (t.prev = 12),
                        (t.t1 = t.catch(4)),
                        (this.stocksAddedStatus[o] = !s);
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[4, 12]]
            );
          })
        );
      },
      addStockBrow: function (t) {
        var e = t.hot_funds_etf.code,
          n = this.reportParams(e);
        this.$emit("statReport", "zjrd_stock_brow", n);
      },
      checkStockExist: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, o, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((o = []),
                        !this.content ||
                          (null == (n = this.content) ||
                            n.forEach(function (t) {
                              var e = t.hot_funds_etf.code;
                              e && o.push(e);
                            }),
                          0 === o.length))
                      ) {
                        t.next = 11;
                        break;
                      }
                      return (t.prev = 2), (t.next = 5), a.isExistInZixuan(o);
                    case 5:
                      (r = t.sent), (this.stocksAddedStatus = r), (t.next = 11);
                      break;
                    case 9:
                      (t.prev = 9), (t.t0 = t.catch(2));
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[2, 9]]
            );
          })
        );
      },
      isStockAdded: function (t) {
        var e = t.hot_funds_etf.code;
        return !(!e || "string" != typeof e || !this.stocksAddedStatus[e]);
      },
    },
  };
Array || c.resolveComponent("ZjrdAddBtn")();
var d = c._export_sfc(i, [
  [
    "render",
    function (t, e, n, o, r, s) {
      return c.e(
        { a: n.content && n.content.length > 0 },
        n.content && n.content.length > 0
          ? {
              b: c.f(n.content, function (t, e, n) {
                return c.e(
                  {
                    a: c.t(e + 1),
                    b: c.n("order-" + (e + 1)),
                    c: c.t(s.fundField(t.net_main_inflow, "flow")),
                    d: c.n(s.flucColor(t.net_main_inflow)),
                    e: c.t(t.plate_name),
                    f: c.t(s.priceChangePercent(t.change_percent)),
                    g: c.n(s.flucColor(t.change_percent, "bg-")),
                    h: c.f(t.tags, function (t, e, n) {
                      return c.e({ a: e < 3 }, e < 3 ? { b: c.t(t) } : {}, {
                        c: t,
                      });
                    }),
                    i: c.o(
                      function (e) {
                        return s.onFundPlateClick(t);
                      },
                      5296,
                      t.plate_code
                    ),
                    j: t.hot_funds_etf && t.hot_funds_etf.code,
                  },
                  t.hot_funds_etf && t.hot_funds_etf.code
                    ? {
                        k: c.t(t.hot_funds_etf.name),
                        l: c.o(
                          function (e) {
                            return s.handleStockDetail({
                              symbol: t.hot_funds_etf.code,
                            });
                          },
                          5297,
                          t.plate_code
                        ),
                        m: c.t(
                          s.priceChangePercent(
                            t.hot_funds_etf.price_fluctuation
                          )
                        ),
                        n: c.n(s.flucColor(t.hot_funds_etf.price_fluctuation)),
                        o: c.t(t.hot_funds_etf.label_name),
                        p: c.o(
                          function (e) {
                            return s.addStockToZixuan(t);
                          },
                          5298,
                          t.plate_code
                        ),
                        q: c.o(
                          function (e) {
                            return s.addStockBrow(t);
                          },
                          5299,
                          t.plate_code
                        ),
                        r: "a9496ff2-0-" + n,
                        s: c.p({ added: s.isStockAdded(t) }),
                      }
                    : {},
                  { t: t.plate_code }
                );
              }),
            }
          : {},
        { c: c.n(n.containerClass) }
      );
    },
  ],
  ["__scopeId", "data-v-a9496ff2"],
]);
wx.createComponent(d);
