var e = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  o = require("../../../../config/enum.js"),
  T = {
    name: "FixedQuote",
    props: {
      forceUpdating: { type: Boolean, default: !1 },
      stockName: { type: String, default: "" },
      isAfterTradeStock: { type: Boolean, default: !1 },
    },
    emits: ["forceRefresh"],
    setup: function (T, s) {
      s.emit;
      var r,
        c = t.inject("trade"),
        u = c.stock,
        n = t.inject("simpleMode"),
        E = t.computed(function () {
          var t;
          return u.value.secu_info
            ? ((t = {}),
              e(t, o.STOCK_STATE.DELISTED, "退市"),
              e(t, o.STOCK_STATE.SUSPENDED, "暂停上市"),
              e(t, o.STOCK_STATE.SUSPENSION, "停牌"),
              e(t, o.STOCK_STATE.PURCHASE, "申购日"),
              e(t, o.STOCK_STATE.UNLIST, "待上市"),
              e(t, o.STOCK_STATE.UNISSUED, "待发行"),
              e(t, o.STOCK_STATE.NORMAL, ""),
              t)[u.value.secu_info.status]
            : "";
        }),
        _ = t.computed(function () {
          return (
            (u.value.secu_info && o.MARKET_STATE_LABEL[u.value.market_state]) ||
            ""
          );
        }),
        i =
          (e((r = {}), o.MARKET_STATE.NOT_OPEN, ["可下单", "可撤单"]),
          e(r, o.MARKET_STATE.OPEN_AUCTION, ["可下单", "可撤单"]),
          e(r, o.MARKET_STATE.OPEN_AUCTION_NOT_CANCEL, ["可下单", "不可撤单"]),
          e(r, o.MARKET_STATE.OPEN_AUCTION_DELAY, ["可下单", "可撤单"]),
          e(r, o.MARKET_STATE.MORNING_OPENED, ["可下单", "可撤单"]),
          e(r, o.MARKET_STATE.SIESTA, ["可下单", "可撤单"]),
          e(r, o.MARKET_STATE.AFTERNOON_OPENED, ["可下单", "可撤单"]),
          e(r, o.MARKET_STATE.CLOSE_AUCTION, ["可下单", "不可撤单"]),
          e(r, o.MARKET_STATE.AFTER_PREPARE, ["可下单", "可撤单"]),
          e(r, o.MARKET_STATE.AFTER_TRADING, ["可下单", "不可撤单"]),
          e(r, o.MARKET_STATE.CLOSED, ["可下单", "可撤单"]),
          r),
        A = t.computed(function () {
          return (
            (u.value.secu_info &&
              u.value.secu_info.status === o.STOCK_STATE.NORMAL &&
              i[u.value.market_state]) ||
            []
          );
        });
      return {
        tradeStockStore: c,
        stockInfo: u,
        simpleMode: n,
        isEmpty: t.isEmpty,
        statusText: E,
        marketStatusText: _,
        labelArr: A,
      };
    },
  };
Array || t.resolveComponent("ValueColor")(), Math;
var s = t._export_sfc(T, [
  [
    "render",
    function (e, o, T, s, r, c) {
      return t.e(
        { a: !s.isEmpty(s.stockInfo) },
        s.isEmpty(s.stockInfo)
          ? {}
          : t.e(
              {
                b: t.t(
                  s.stockInfo.secu_quote.dqj ||
                    ("" + s.stockInfo.secu_info.spread).replace(/\d/g, "0")
                ),
                c: t.p({ value: s.stockInfo.secu_quote.zde }),
                d: t.t(s.stockInfo.secu_quote.zde || "--"),
                e: t.p({ value: s.stockInfo.secu_quote.zde }),
                f: t.t(s.stockInfo.secu_quote.zdf || "--"),
                g: t.p({ value: s.stockInfo.secu_quote.zdf }),
                h: !s.stockInfo.isGGT,
              },
              s.stockInfo.isGGT
                ? {}
                : {
                    i: t.t(
                      "--" === s.stockInfo.secu_info.price_ceiling &&
                        T.isAfterTradeStock
                        ? "无限制"
                        : s.stockInfo.secu_info.price_ceiling
                    ),
                    j: t.t(
                      "--" === s.stockInfo.secu_info.price_floor &&
                        T.isAfterTradeStock
                        ? "无限制"
                        : s.stockInfo.secu_info.price_floor
                    ),
                  },
              {},
              { p: t.n(s.simpleMode ? "fixed-quote__simple" : "") }
            )
      );
    },
  ],
]);
wx.createComponent(s);
