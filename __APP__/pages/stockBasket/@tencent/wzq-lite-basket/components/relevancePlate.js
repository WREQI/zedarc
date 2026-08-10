var t = require("../../../../../common/vendor.js"),
  e = t.defineComponent({
    props: {
      lastUpdate: { type: String, default: "" },
      gdId: { type: String, default: "" },
      board: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (e) {
      var o = t.getCurrentInstance().proxy || t.getCurrentInstance(),
        r = t.reactive({ name: "", code: "", market: "p" });
      return (
        t.onMounted(function () {
          var t = e.board.symbol;
          (r.code = t.replace(/pt/g, "")), (r.name = e.board.name);
        }),
        {
          toPlate: function () {
            t.StockBridge.report("hq.basketdetail.record_entry_click", {
              watchlist_id: e.gdId,
            }),
              t.StockBridge.ENV === t.EnvTypeEnum.MP
                ? t.StockBridge.routeTo({
                    url: "/pages/quote/quote?market="
                      .concat(r.market, "&scode=")
                      .concat(r.code),
                  })
                : o.$router.push({
                    path: "/quote/detail?market="
                      .concat(r.market, "&scode=")
                      .concat(r.code),
                  });
          },
          plateInfo: r,
        }
      );
    },
  }),
  o = t._export_sfc(e, [
    [
      "render",
      function (e, o, r, n, a, c) {
        return {
          a: t.o(function () {
            return e.toPlate && e.toPlate.apply(e, arguments);
          }, 2214),
          b: t.t(e.plateInfo.name),
          c: t.o(function () {
            return e.toPlate && e.toPlate.apply(e, arguments);
          }, 2215),
        };
      },
    ],
    ["__scopeId", "data-v-7173d8a8"],
  ]);
wx.createComponent(o);
