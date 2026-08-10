require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  e = require("../../../../filters/money.js"),
  o = require("../../../../stores/app/useMode.js"),
  r = t.defineComponent({
    name: "FirstBuyCard",
    components: {
      StockLogo: function () {
        return "../../../StockLogo/StockLogo.js";
      },
    },
    props: {
      item: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (r) {
      var c = t.storeToRefs(o.useModeStore()).simpleMode,
        n = t.computed(function () {
          return c.value
            ? "https://st.gtimg.com/design/07f90f2eeea299711f69a4a2a7332fcb.png"
            : "https://st.gtimg.com/design/1c5da86d79cd315564e13d66272579c7.png";
        }),
        a = t.computed(function () {
          var t;
          return (null == (t = r.item) ? void 0 : t.stock_name) || "--";
        }),
        u = t.computed(function () {
          var t;
          return (null == (t = r.item) ? void 0 : t.market) || "--";
        }),
        s = t.computed(function () {
          var t;
          return (null == (t = r.item) ? void 0 : t.stock_cls) || "--";
        }),
        i = t.computed(function () {
          var t;
          return (null == (t = r.item) ? void 0 : t.stock_code) || "";
        });
      return {
        backgroundImage: n,
        stockName: a,
        formattedPrice: t.computed(function () {
          var t,
            o = null == (t = r.item) ? void 0 : t.stock_amt;
          return o ? e.formatNoUnit(o, !1, 2) : "0.00";
        }),
        formattedQty: t.computed(function () {
          var t,
            o = null == (t = r.item) ? void 0 : t.stock_qty;
          return o ? e.formatNoUnit(o, !1, 0) : "0";
        }),
        formattedDate: t.computed(function () {
          var t,
            e = null == (t = r.item) ? void 0 : t.time;
          return e && 8 === e.length
            ? ""
                .concat(e.slice(0, 4), "-")
                .concat(e.slice(4, 6), "-")
                .concat(e.slice(6, 8))
            : "";
        }),
        stockMarket: u,
        stockClass: s,
        stockCode: i,
      };
    },
  });
Array || t.resolveComponent("StockLogo")(), Math;
var c = t._export_sfc(r, [
  [
    "render",
    function (e, o, r, c, n, a) {
      return {
        a: t.p({
          market: e.stockMarket,
          code: e.stockCode,
          type: e.stockClass,
        }),
        b: t.t(e.stockName),
        c: t.t(e.formattedPrice),
        d: t.t(e.formattedQty),
        e: t.t(e.formattedDate),
        f: "url(".concat(e.backgroundImage, ")"),
      };
    },
  ],
  ["__scopeId", "data-v-cc6d7d8a"],
]);
wx.createComponent(c);
