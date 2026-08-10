var t = require("../../../../../common/vendor.js"),
  e = {
    props: {
      title: { type: String, default: "" },
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return {};
    },
    methods: {
      getZdpClass: function (t) {
        return t > 0 ? "rise" : t < 0 ? "drop" : "equal";
      },
      goBasketDetail: function (e) {
        t.StockBridge.report("history.basket_list_detail.click");
        var r = e.symbol;
        t.StockRouter.routeTo({
          name: "stockBasket_detail",
          query: { gdId: r },
        });
      },
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, o, n, a, d) {
        return {
          a: t.t(o.title),
          b: t.f(o.data, function (e, r, o) {
            return t.e(
              { a: t.t(e.name), b: t.t(e.total), c: 0 === e.order_type },
              0 === e.order_type
                ? {
                    d: t.t(e.zdf ? "".concat(e.zdf, "%") : "--"),
                    e: t.n(d.getZdpClass(e.zdf)),
                    f: t.t(e.month_zdf ? "".concat(e.month_zdf, "%") : "--"),
                    g: t.n(d.getZdpClass(e.month_zdf)),
                  }
                : {},
              {
                h: t.t(e.summary),
                i: r,
                j: t.n(0 !== e.order_type ? "pure-type" : ""),
                k: t.o(
                  function (t) {
                    return d.goBasketDetail(e);
                  },
                  2427,
                  r
                ),
              }
            );
          }),
        };
      },
    ],
    ["__scopeId", "data-v-cddbb460"],
  ]);
wx.createComponent(r);
