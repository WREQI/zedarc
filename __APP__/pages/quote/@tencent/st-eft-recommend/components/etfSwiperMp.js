var e = require("../../../../../common/vendor.js"),
  t = {
    options: { styleIsolation: "shared" },
    components: {
      etfItem: function () {
        return "./etfItem.js";
      },
    },
    props: {
      etfList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      hasRecEtf: { type: Boolean, default: !0 },
      etflistReady: { type: Boolean, default: !1 },
    },
    setup: function (t, r) {
      var o = r.emit,
        a = e.inject("hqBridge"),
        n = e.ref(0);
      return {
        currentChange: function (e) {
          n.value = e.target.current;
          var r = t.etfList[e.target.current],
            c = { market: r.market, code: r.scode, fullCode: r.code };
          a.report("hq.etf_recommend.item_slide"), o("setTradeStock", c);
        },
        goETFDetail: function () {
          a.report("hq.etf_recommend.item_click");
          var r = t.etfList[n.value],
            c = r || {},
            i = c.market,
            s = c.scode;
          e.StockBridge.mtaReport({
            busi: "hq",
            eventName: "hk_us_stock_buy_etf_click",
            params: { related_stockid: (null == r ? void 0 : r.code) || "" },
          }),
            a.routeTo({
              path: "/pages/quote/quote",
              query: { market: i, scode: s },
            }),
            o("closeMiniapply");
        },
      };
    },
    watch: {
      etfList: {
        handler: function (e) {
          e.length &&
            this.$emit("setTradeStock", {
              market: this.etfList[0].market,
              code: this.etfList[0].scode,
              fullCode: this.etfList[0].code,
            });
        },
        deep: !0,
        immediate: !0,
      },
    },
  };
Array || e.resolveComponent("etf-item")();
var r = e._export_sfc(t, [
  [
    "render",
    function (t, r, o, a, n, c) {
      return e.e({ a: !o.hasRecEtf }, (o.hasRecEtf, {}), {
        b: e.f(o.etfList, function (t, r, o) {
          return {
            a: e.o(a.goETFDetail, 2474, r),
            b: "fddda210-0-" + o,
            c: e.p({ item: t }),
            d: r,
          };
        }),
        c: o.hasRecEtf ? 1 : "",
        d: e.o(function () {
          return a.currentChange && a.currentChange.apply(a, arguments);
        }, 2475),
      });
    },
  ],
  ["__scopeId", "data-v-fddda210"],
]);
wx.createComponent(r);
