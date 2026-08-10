require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../../../utils/market.js"),
  u = require("../../../config/enum.js");
exports.useUnit = function (t) {
  var i = e.computed(function () {
    var u = e.get(t.value, "secu_info.secu_cls", "");
    return r.defaultMarketUtils.isTransferableDebt(u) ||
      r.defaultMarketUtils.isSpecialGovernmentDebt(u)
      ? "张"
      : "股";
  });
  return {
    tradeDisabled: e.computed(function () {
      var e = [u.STOCK_STATE.DELISTED];
      return !!t.value.secu_info && e.includes(t.value.secu_info.status);
    }),
    securitiesUnit: i,
  };
};
