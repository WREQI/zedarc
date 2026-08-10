require("../../../app.js");
var e = require("../../../common/vendor.js");
require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js"),
  (exports.useStepPure = function (r) {
    var u = r.order,
      t = r.stockInfo,
      c = r.amountKey;
    return {
      amountStep: e.computed(function () {
        if (!e.isEmpty(t.value)) {
          var r = c ? u[c] : u.amount;
          return t.value.calcStep(r);
        }
      }),
      priceStep: e.computed(function () {
        var e;
        return (null == (e = t.value) ? void 0 : e.calcPriceStep)
          ? t.value.calcPriceStep(u.price)
          : t.value.spread;
      }),
    };
  });
