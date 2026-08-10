var t = require("../../../../../../common/vendor.js"),
  e = t.defineComponent({
    props: {
      showUpdate: { type: Boolean, default: !0 },
      lastUpdate: { type: String, default: "" },
      modifyTime: { type: String, default: "" },
      gdId: { type: String, default: "" },
    },
    setup: function (e) {
      var o = t.getCurrentInstance().proxy || t.getCurrentInstance();
      return {
        toHistory: function () {
          t.StockBridge.report("hq.basketdetail.record_entry_click", {
            watchlist_id: e.gdId,
          }),
            t.StockBridge.ENV === t.EnvTypeEnum.MP
              ? t.StockBridge.routeTo({
                  url: "/pages/stockBasket/updateHistory?gdId=".concat(e.gdId),
                })
              : o.$router.push({
                  path: "/pages/stockBasket/updateHistory",
                  query: { gdId: e.gdId },
                });
        },
        updateText: t.computed(function () {
          var o = t.dayjs(e.lastUpdate),
            a = t.dayjs(e.modifyTime),
            d = e.lastUpdate && o.isValid(),
            r = e.modifyTime && a.isValid(),
            n = "更新于".concat(a.format("YYYY-MM-DD"), "，本期无调仓"),
            s = "更新于".concat(o.format("YYYY-MM-DD"), "，本期有调仓");
          return d || r ? (d ? (r && o.isBefore(a) ? n : s) : n) : "";
        }),
      };
    },
  }),
  o = t._export_sfc(e, [
    [
      "render",
      function (e, o, a, d, r, n) {
        return t.e(
          { a: e.showUpdate && e.updateText },
          e.showUpdate && e.updateText ? { b: t.t(e.updateText) } : {},
          { c: e.showUpdate },
          e.showUpdate
            ? {
                d: t.o(function () {
                  return e.toHistory && e.toHistory.apply(e, arguments);
                }, 2213),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-b702a74f"],
  ]);
wx.createComponent(o);
