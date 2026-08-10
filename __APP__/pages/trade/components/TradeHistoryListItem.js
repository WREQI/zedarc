require("../../../app.js");
var t = require("../../../common/vendor.js"),
  e = require("../../../config/enum.js"),
  r = require("../../../model/trade/utils.js"),
  i = require("../../../filters/defaults.js"),
  o = {
    name: "TradeHistoryListItem",
    props: { item: Object },
    data: function () {
      return { ACTION: e.ACTION };
    },
    methods: {
      isAfterTrade: r.isAfterTrade,
      groupNameText: function (e) {
        return t.dayjs(e.id).format("YYYY年MM月");
      },
      actionText: function (t) {
        return (
          e.ACTION_TEXT[t.stock_type || e.TARGET.STOCK][t.trade_type] || "未知"
        );
      },
      stateText: function (t) {
        return (
          e.TRADE_STATE_TEXT[t.stock_type][r.getFinalTradeState(t)] || "未知"
        );
      },
      displayAmountInfo: function (r) {
        return r.stock_type === e.TARGET.DEBT
          ? +r.trade_money < 1e4
            ? i.defaults(
                t.__CJS__export_default__.toText(r.trade_money, 0, "元")
              )
            : i.defaults(
                t.__CJS__export_default__.toText(r.trade_money, 2, "元")
              )
          : i.defaults(r.order_num, 0) + e.TARGET_UNIT[r.stock_type];
      },
      displayPriceInfo: function (t) {
        return t.stock_type === e.TARGET.DEBT
          ? "".concat(t.order_price, "%")
          : t.order_price;
      },
    },
  },
  a = t._export_sfc(o, [
    [
      "render",
      function (e, r, i, o, a, n) {
        return t.e(
          {
            a: t.t(n.actionText(i.item)),
            b: n.isAfterTrade(i.item.trade_type),
          },
          n.isAfterTrade(i.item.trade_type) ? { c: i.item.trade_type } : {},
          {
            d: t.n("action-" + i.item.trade_type),
            e: t.n("^action-" + i.item.trade_type),
            f: t.n("stock-" + i.item.stock_type),
            g: t.n("^stock-" + i.item.stock_type),
            h: t.t(n.stateText(i.item)),
            i: t.t(
              i.item.trade_type === a.ACTION.ALLOT ? i.item.pgname : i.item.name
            ),
            j: t.t(
              i.item.trade_type === a.ACTION.ALLOT ? i.item.pgcode : i.item.code
            ),
            k: t.t(n.displayAmountInfo(i.item)),
            l: t.t(n.displayPriceInfo(i.item)),
            m: t.t(e.$filters.time.format(i.item.trade_time, "MM-DD")),
            n: t.t(e.$filters.time.format(i.item.trade_time, "HH:mm:ss")),
          }
        );
      },
    ],
  ]);
wx.createComponent(a);
