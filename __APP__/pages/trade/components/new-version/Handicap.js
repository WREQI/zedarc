require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = {
    components: {
      FlashPrice: function () {
        return "./FlashPrice.js";
      },
    },
    props: ["market", "scode", "quote"],
    setup: function (t, n) {
      var a = n.emit,
        r = e.ref(!1),
        u = e.ref({}),
        c = e.computed(function () {
          var e = 0,
            n = 0;
          return (
            u.value &&
              Object.keys(u.value).length &&
              Object.keys(u.value.fiveTrans).map(function (a) {
                var r,
                  u,
                  c =
                    null == (u = null == (r = t.quote) ? void 0 : r.fiveTrans)
                      ? void 0
                      : u[a];
                if (/sl/.test(a)) {
                  var o = i(c);
                  (n += /mr/.test(a) ? o : 0), (e += o);
                }
              }),
            e ? (n / e) * 100 + "%" : ""
          );
        }),
        o = e.computed(function () {
          var e = [];
          return (
            u.value &&
              Object.keys(u.value).length &&
              Object.keys(u.value.fiveTrans).map(function (t) {
                var n = u.value.fiveTrans[t];
                /sl/.test(t) && e.push(i(n));
              }),
            Math.max.apply(Math, e)
          );
        });
      function i(e) {
        var t = parseFloat(e);
        return isNaN(t)
          ? 0
          : /万/.test(e)
          ? 1e4 * t
          : /亿/.test(e)
          ? 1e8 * t
          : t;
      }
      return (
        e.watchEffect(function () {
          t.quote &&
            Object.keys(t.quote).length &&
            ((u.value = t.quote), (r.value = !0));
        }),
        {
          dataReady: r,
          fiveQuote: u,
          buyPercentWidth: c,
          maxAmount: o,
          formatTextToNumber: i,
          onClickPrice: function (e) {
            e.type;
            var t = e.price;
            a("onClickPrice", t);
          },
        }
      );
    },
  };
Array || e.resolveComponent("FlashPrice")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, a, r, u, c) {
      return e.e(
        { a: r.dataReady },
        r.dataReady
          ? {
              b: r.buyPercentWidth,
              c: r.buyPercentWidth ? "" : 1,
              d: e.f([5, 4, 3, 2, 1], function (t, n, a) {
                return {
                  a: "buy".concat(t),
                  b: e.o(r.onClickPrice, "buy".concat(t)),
                  c: "69f1c0b6-0-" + a,
                  d: e.p({
                    type: "mc",
                    level: t,
                    quote: r.fiveQuote,
                    maxAmount: r.maxAmount,
                  }),
                };
              }),
              e: e.f([1, 2, 3, 4, 5], function (t, n, a) {
                return {
                  a: "sell".concat(t),
                  b: e.o(r.onClickPrice, "sell".concat(t)),
                  c: "69f1c0b6-1-" + a,
                  d: e.p({
                    type: "mr",
                    level: t,
                    quote: r.fiveQuote,
                    maxAmount: r.maxAmount,
                  }),
                };
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-69f1c0b6"],
]);
wx.createComponent(n);
