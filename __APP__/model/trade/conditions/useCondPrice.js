require("../../../app.js");
var e = require("../../../common/vendor.js");
require("../../../domain/entities/trade-stock/condition-order.js");
var r = require("../../../config/enum.js");
require("../../../config/enum/trade.js"),
  require("../../../service/broker.js"),
  require("../../../domain/entities/trade-stock/stock-order.js");
var i = require("../../../config/key.js");
exports.useCondPrice = function (o) {
  var u,
    n = o.order,
    c = o.stock,
    t = (o.checkService, e.ref("")),
    a = null == n ? void 0 : n.condPrice;
  return (
    e.watch(t, function () {
      clearTimeout(u),
        (u = setTimeout(function () {
          t.value = "";
        }, 3e3));
    }),
    e.index.getStorageSync(i.PRICE_CONDITION_BREAKTHOUGH_TIPS) ||
      n.tradeType !== r.ACTION.BUY ||
      ((t.value = "现已支持向上突破买入"),
      e.index.setStorageSync(i.PRICE_CONDITION_BREAKTHOUGH_TIPS, !0)),
    {
      pricePopoverText: t,
      handlePriceInput: function (e) {
        var r;
        if (((t.value = ""), (n.condPrice = e), e !== a))
          if (((a = e), Number(e) <= 0)) t.value = "价格不能为0";
          else {
            var i = (
              (null == (r = null == c ? void 0 : c.value)
                ? void 0
                : r.secu_quote) || {}
            ).dqj;
            i &&
              (Number(e) > Number(i)
                ? (t.value = "股价≥".concat(e, "时触发"))
                : Number(e) < Number(i) &&
                  (t.value = "股价≤".concat(e, "时触发")));
          }
      },
      clearPricePopoverText: function () {
        t.value = "";
      },
    }
  );
};
