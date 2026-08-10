var t = require("../../../../../../../common/vendor.js"),
  e = require("../../mixins/guess-page-mixin.js"),
  i = {
    name: "IndividualGuess",
    props: {
      stockPool: {
        type: Array,
        default: function () {
          return [];
        },
      },
      etfList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      actId: { type: [String, Number], default: "" },
    },
    data: function () {
      return {
        IS_ZXG: e.IS_ZXG,
        IS_XCX: e.IS_XCX,
        poolArray: [],
        num: 0,
        etfNum: 0,
        etfMinCount: 4,
        stockCount: 0,
      };
    },
    computed: {},
    mounted: function () {
      var i = this;
      this.IS_XCX
        ? t.StockBridge.report("yy.guessrisefall.gojingcai_button_brow")
        : t.StockBridge.report("yy.caizhangdie.gojingcai_button_brow"),
        this.IS_XCX ||
          ((this.handleVisibilityChange = function () {
            "visible" === document.visibilityState &&
              e.IS_ZXG &&
              e.IS_WEIXIN &&
              !e.IS_MINA &&
              i.$emit("refresh");
          }),
          window.addEventListener(
            "visibilitychange",
            this.handleVisibilityChange
          )),
        (this.stockCount = this.etfList.length < this.etfMinCount ? 6 : 3),
        this.updateStock();
    },
    beforeDestroy: function () {
      this.handleVisibilityChange &&
        window.removeEventListener(
          "visibilitychange",
          this.handleVisibilityChange
        );
    },
    methods: {
      clickUpdateBtn: function () {
        this.IS_XCX
          ? t.StockBridge.report("yy.guessrisefall.huanyipi_button_click")
          : t.StockBridge.report("yy.caizhangdie.huanyipi_button_click"),
          this.updateStock();
      },
      updateStock: function () {
        var t = [],
          e = this.getNextStockInfo(this.stockPool, this.num, this.stockCount),
          i = e.index,
          n = e.list;
        if (((this.num = i), this.etfList.length >= this.etfMinCount)) {
          var o = this.getNextStockInfo(
              this.etfList,
              this.etfNum,
              this.stockCount
            ),
            c = o.index;
          (t = o.list), (this.etfNum = c);
        }
        if (t.length && n.length) {
          for (var r = [], a = 0; a < t.length; a++) r.push(n[a], t[a]);
          this.poolArray = r;
        } else this.poolArray = n;
      },
      getNextStockInfo: function (t, e, i) {
        if (!t.length) return { list: [], index: 0 };
        if (e + i < t.length) return { list: t.slice(e, i + e), index: e + i };
        var n = e + i - t.length;
        return { list: t.slice(e).concat(t.slice(0, n)), index: n };
      },
      goJingCai: function (e, i, n) {
        this.IS_XCX
          ? (t.StockBridge.report(
              "yy.guessrisefall.gojingcai_button_click",
              {},
              {}
            ),
            t.StockRouter.routeTo({
              name: "comment",
              query: { symbol: e, name: i, market: n },
            }))
          : (t.StockBridge.report(
              "yy.caizhangdie.gojingcai_button_click",
              {},
              {}
            ),
            t.StockBridge.locationTo(
              deliveryDoJump(
                "https://wzq.tenpay.com/mp/v2/index.html#/comment/comment?symbol="
                  .concat(e, "&name=")
                  .concat(i, "&market=")
                  .concat(n, "&showGoing=true")
              ),
              "href"
            ));
      },
      readStock: function () {
        if (this.IS_XCX)
          t.StockBridge.report("yy.guessrisefall.chakanjilu_button_click"),
            setTimeout(function () {
              t.StockRouter.routeTo({
                name: "personalPage",
                query: { tab: "czd" },
              });
            }, 100);
        else {
          t.StockBridge.report("yy.caizhangdie.chakanjilu_button_click");
          var e = this.actId;
          t.StockRouter.routeTo({
            path: "home",
            query: { actId: e, tabCount: 2 },
          });
        }
      },
    },
  },
  n = t._export_sfc(i, [
    [
      "render",
      function (e, i, n, o, c, r) {
        return t.e(
          { a: n.stockPool.length },
          n.stockPool.length
            ? t.e(
                {
                  b: t.o(function () {
                    return (
                      r.clickUpdateBtn && r.clickUpdateBtn.apply(r, arguments)
                    );
                  }, 3861),
                  c: c.IS_XCX,
                },
                c.IS_XCX
                  ? {
                      d: t.o(function () {
                        return (
                          r.clickUpdateBtn &&
                          r.clickUpdateBtn.apply(r, arguments)
                        );
                      }, 3862),
                    }
                  : {
                      e: t.o(function () {
                        return (
                          r.clickUpdateBtn &&
                          r.clickUpdateBtn.apply(r, arguments)
                        );
                      }, 3863),
                    },
                {
                  f: t.f(c.poolArray, function (e, i, n) {
                    return {
                      a: t.t(e.stockname),
                      b: t.t(e.zdf),
                      c: t.n(
                        e.zdf > 0
                          ? "individual-guess__stock-change--rise"
                          : e.zdf < 0
                          ? "individual-guess__stock-change--fall"
                          : "individual-guess__stock-change--flat"
                      ),
                      d: t.o(
                        function (t) {
                          return r.goJingCai(e.symbol, e.stockname, e.market);
                        },
                        3864,
                        i
                      ),
                      e: i,
                    };
                  }),
                  g: t.o(function () {
                    return r.readStock && r.readStock.apply(r, arguments);
                  }, 3865),
                  h: t.o(function () {
                    return r.readStock && r.readStock.apply(r, arguments);
                  }, 3866),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-6883fbf4"],
  ]);
wx.createComponent(n);
