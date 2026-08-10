require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  e = require("../../../../filters/money.js"),
  o = require("../../../../stores/app/useMode.js"),
  r = t.defineComponent({
    name: "FirstProfitCard",
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
      var n = t.storeToRefs(o.useModeStore()).simpleMode;
      return {
        backgroundImage: t.computed(function () {
          return n.value
            ? "https://st.gtimg.com/design/7ada29a46c1949a4db449c3a1156c831.png"
            : "https://st.gtimg.com/design/dda87e4e640ee852adcb7bc537b2071f.png";
        }),
        stockName: t.computed(function () {
          var t;
          return (null == (t = r.item) ? void 0 : t.stock_name) || "--";
        }),
        stockMarket: t.computed(function () {
          var t;
          return (null == (t = r.item) ? void 0 : t.market) || "--";
        }),
        stockClass: t.computed(function () {
          var t;
          return (null == (t = r.item) ? void 0 : t.stock_cls) || "--";
        }),
        stockCode: t.computed(function () {
          var t;
          return (null == (t = r.item) ? void 0 : t.stock_code) || "";
        }),
        formattedEarnPer: t.computed(function () {
          var t,
            o = null == (t = r.item) ? void 0 : t.earn_value;
          return o ? "".concat(e.formatNoUnit(o, !0, 2)) : "0.00";
        }),
        formattedEarnPerDay: t.computed(function () {
          var t,
            o = null == (t = r.item) ? void 0 : t.earn_value_day;
          return o ? "".concat(e.formatNoUnit(o, !0, 2)) : "0.00";
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
      };
    },
  });
Array || t.resolveComponent("StockLogo")(), Math;
var n = t._export_sfc(r, [
  [
    "render",
    function (e, o, r, n, a, c) {
      return {
        a: t.p({
          market: e.stockMarket,
          code: e.stockCode,
          type: e.stockClass,
        }),
        b: t.t(e.stockName),
        c: t.t(e.formattedEarnPer),
        d: t.t(e.formattedEarnPerDay),
        e: t.t(e.formattedDate),
        f: "url(".concat(e.backgroundImage, ")"),
      };
    },
  ],
  ["__scopeId", "data-v-7bd21a66"],
]);
wx.createComponent(n);
