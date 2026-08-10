require("../../../../@babel/runtime/helpers/Objectvalues");
var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, s) {
    return new Promise(function (r, n) {
      var o = function (t) {
          try {
            i(s.next(t));
          } catch (t) {
            n(t);
          }
        },
        a = function (t) {
          try {
            i(s.throw(t));
          } catch (t) {
            n(t);
          }
        },
        i = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(o, a);
        };
      i((s = s.apply(t, e)).next());
    });
  },
  s = require("utils/HangqingDataFormat.js"),
  r = require("../../../../common/vendor.js"),
  n = {
    inject: ["hqBridge"],
    components: {
      HsStockDetailList: function () {
        return "./components/detail-page/HsDetailPage/HsStockDetailList.js";
      },
      HsBondDetailList: function () {
        return "./components/detail-page/HsDetailPage/HsBondDetailList.js";
      },
      HkDetailList: function () {
        return "./components/detail-page/HkDetailPage/index.js";
      },
      UsDetailList: function () {
        return "./components/detail-page/UsDetailPage/index.js";
      },
    },
    props: {
      userInfo: { type: Object, default: function () {} },
      theme: { type: String, default: "blue" },
      query: { type: Object, default: function () {} },
    },
    data: function () {
      return {
        stockmodel: null,
        type: "stock",
        market: "hs",
        isPurchase: !1,
        symbol: "",
        stockItemData: {},
        pathQuery: {},
      };
    },
    watch: {
      query: {
        handler: function (t) {
          (this.pathQuery = t), this.init();
        },
        immediate: !0,
        deep: !0,
      },
    },
    created: function () {
      return e(
        this,
        null,
        t().mark(function e() {
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    this.init();
                  case 1:
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
    methods: {
      init: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var s,
              n,
              o,
              a,
              i,
              c,
              u = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((s = this.pathQuery || {}),
                        (n = s.market),
                        (o = s.type),
                        (a = s.symbol),
                        (i = s.isPurchase),
                        (c = s.name),
                        (this.market = n),
                        (this.type = o),
                        (this.symbol = a),
                        (this.isPurchase = 1 == +i),
                        "stock" === this.type)
                      ) {
                        t.next = 5;
                        break;
                      }
                      "bond" === this.type &&
                        (this.stockmodel = { name: c, symbol: this.symbol }),
                        (t.next = 25);
                      break;
                    case 5:
                      if (
                        ((t.prev = 5), (t.t0 = "hs" === this.market), !t.t0)
                      ) {
                        t.next = 10;
                        break;
                      }
                      return (t.next = 10), this.getHSNewStock();
                    case 10:
                      if (((t.t1 = "hk" === this.market), !t.t1)) {
                        t.next = 14;
                        break;
                      }
                      return (t.next = 14), this.getHKNewStock();
                    case 14:
                      if (((t.t2 = "us" === this.market), !t.t2)) {
                        t.next = 18;
                        break;
                      }
                      return (t.next = 18), this.getUSNewStock();
                    case 18:
                      t.next = 22;
                      break;
                    case 20:
                      (t.prev = 20), (t.t3 = t.catch(5));
                    case 22:
                      return (
                        (t.prev = 22),
                        Object.values(this.stockItemData).forEach(function (t) {
                          r.isEmpty(u.stockmodel) &&
                            (null == t ? void 0 : t.data) &&
                            Array.isArray(t.data) &&
                            t.data.forEach(function (t) {
                              var e = t || {},
                                s = e.market,
                                r = e.type,
                                n = {
                                  hs: e.symbol,
                                  hk: e.listCode,
                                  us: e.StockCode,
                                }[s];
                              s !== u.market ||
                                r !== u.type ||
                                n !== u.symbol ||
                                (u.stockmodel = t);
                            });
                        }),
                        t.finish(22)
                      );
                    case 25:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[5, 20, 22, 25]]
            );
          })
        );
      },
      getHSNewStock: function () {
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
                      return (
                        (t.next = 2),
                        s.getHSNewStock(this.hqBridge, {
                          app: "wzq",
                          market: "hs",
                          detail: 1,
                          sgrq: 1,
                        })
                      );
                    case 2:
                      (r = t.sent),
                        (this.stockItemData = s.formatHSStockData(r) || {});
                    case 4:
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
      getHKNewStock: function () {
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
                      return (
                        (t.next = 2),
                        s.getHSNewStock(this.hqBridge, {
                          market: "hk",
                          detail: 1,
                          sgrq: 1,
                        })
                      );
                    case 2:
                      (r = t.sent),
                        (this.stockItemData = s.formatHKStockData(r) || {});
                    case 4:
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
      getUSNewStock: function () {
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
                      return (t.next = 2), s.getUSNewStock(this.hqBridge);
                    case 2:
                      (r = t.sent),
                        (this.stockItemData = s.formatUSStockData(r) || {});
                    case 4:
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
      handleScroll: function () {
        this.$refs.stockdetailpage && this.$refs.stockdetailpage.handleScroll();
      },
    },
  };
Array ||
  (
    r.resolveComponent("HsStockDetailList") +
    r.resolveComponent("HsBondDetailList") +
    r.resolveComponent("HkDetailList") +
    r.resolveComponent("UsDetailList")
  )();
var o = r._export_sfc(n, [
  [
    "render",
    function (t, e, s, n, o, a) {
      return r.e(
        { a: "stock" === o.type && "hs" === o.market && o.stockmodel },
        "stock" === o.type && "hs" === o.market && o.stockmodel
          ? {
              b: r.sr("stockdetailpage", "1483e3b0-0"),
              c: r.p({
                stockdata: o.stockmodel,
                isPurchase: o.isPurchase,
                userInfo: s.userInfo,
                theme: s.theme,
              }),
            }
          : {},
        { d: "bond" === o.type && "hs" === o.market && o.stockmodel },
        "bond" === o.type && "hs" === o.market && o.stockmodel
          ? {
              e: r.p({
                stockmodel: o.stockmodel,
                isPurchase: o.isPurchase,
                userInfo: s.userInfo,
              }),
            }
          : {},
        { f: "stock" === o.type && "hk" === o.market && o.stockmodel },
        "stock" === o.type && "hk" === o.market && o.stockmodel
          ? { g: r.p({ model: o.stockmodel }) }
          : {},
        { h: "stock" === o.type && "us" === o.market && o.stockmodel },
        "stock" === o.type && "us" === o.market && o.stockmodel
          ? { i: r.p({ model: o.stockmodel }) }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-1483e3b0"],
]);
wx.createComponent(o);
