var o = require("../../../../../common/vendor.js"),
  t = {
    props: ["wikiInfo"],
    methods: {
      jumpComment: function () {
        o.StockBridge.report("hq.stock_detail.communityhottalk_btnclick"),
          o.StockBridge.setStorage("communityShowGoing", 1);
        var t = this.wikiInfo,
          e = t.symbol,
          n = t.stockName,
          m = t.market;
        o.StockRouter.routeTo({
          name: "comment",
          query: { symbol: e, name: n, market: m },
        });
      },
    },
  },
  e = o._export_sfc(t, [
    [
      "render",
      function (t, e, n, m, r, c) {
        return {
          a: o.t(n.wikiInfo.rank),
          b: o.o(function () {
            return c.jumpComment && c.jumpComment.apply(c, arguments);
          }, 4048),
        };
      },
    ],
    ["__scopeId", "data-v-7c8247cd"],
  ]);
wx.createComponent(e);
