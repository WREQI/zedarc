var r = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var e = require("./TradeConfirmDialog.js"),
  o = require("../../../common/vendor.js"),
  t = r({}, e.createTradeConfirmDialog()),
  i = o._export_sfc(t, [
    [
      "render",
      function (r, e, t, i, n, s) {
        return o.e(
          {
            a: o.t(r.stockName),
            b: o.t(r.stockCode),
            c: o.t(r.$filters.marketId(r.stockMarket, ".")),
            d: o.t(r.orderDesc),
            e: o.t(r.price),
            f: o.t(r.stockInfo.priceUnit),
            g: o.n(r.order.isBuyAction ? "buy" : "sell"),
            h: o.t(r.amount),
            i: o.t(r.stockInfo.quantityUnit),
            j: o.n(r.order.isBuyAction ? "buy" : "sell"),
            k: o.t(r.$filters.money.formatNoUnit(r.order.totalMoney)),
            l: o.t(r.stockInfo.priceUnit),
            m: r.isErrorTips,
          },
          r.isErrorTips ? { n: o.t(r.errorTips.join("。")) } : {},
          {
            o: o.t(r.emeddedConfirmButtonText),
            p: r.loading,
            q: o.n(r.order.isBuyAction ? "buy" : "sell"),
            r: o.n(r.loading ? "submit-btn-loading" : ""),
            s: o.o(function () {
              return r.onConfirm && r.onConfirm.apply(r, arguments);
            }),
            t: r.isErrorTips ? 1 : "",
            v: o.n(r.simpleMode ? "trade-confirm--container-simple" : ""),
          }
        );
      },
    ],
  ]);
wx.createComponent(i);
