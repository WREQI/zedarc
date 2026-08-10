var e = require("../../../../../../common/vendor.js"),
  t = require("../../hooks/useHome.js"),
  o = {
    props: { list: { type: Array, required: !0 } },
    setup: function () {
      return { hasVisitedQuote: t.useHome().hasVisitedQuote };
    },
    methods: {
      handleClickItem: function (t) {
        this.hasVisitedQuote = !0;
        var o = t.scode,
          r = t.market;
        e.StockRouter.routeTo({
          name: "stockdetail",
          query: { scode: o, market: r },
        }),
          e.StockBridge.report("dingpan.stock_list_quote.click");
      },
    },
  },
  r = e._export_sfc(o, [
    [
      "render",
      function (t, o, r, i, n, s) {
        return {
          a: e.f(r.list, function (t, o, r) {
            return {
              a: e.t(t.title),
              b: e.t(t.formatDate),
              c: e.t(t.content),
              d: o,
              e: e.o(
                function (e) {
                  return s.handleClickItem(t);
                },
                3056,
                o
              ),
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-3d1f19e3"],
  ]);
wx.createComponent(r);
