require("../../app.js");
var t = require("../../filters/money.js"),
  r = require("../../config/enum.js"),
  n = require("../../adapter/router.js");
exports.usePositionsListBalance = function () {
  return {
    onStockClick: function (t) {
      "0" !== t.balance_time_limit
        ? n
            .router()
            .push({
              name: "ProductDuoTianQiPositionDetail",
              query: { contract_no: t.contract_no },
            })
        : n.router().push({ name: "ProductJiaXinBao" });
    },
    holdVal: function (r) {
      return 0 == +r.hold_val && 0 == +r.hold_num
        ? "已清仓"
        : r.hold_val
        ? t.formatNoUnit(r.hold_val)
        : " ";
    },
    status: function (t) {
      return r.BALANCE_STATUS_TEXT[t] || "---";
    },
    stateText: function (t) {
      return r.BALANCE_STATE_TEXT[t] || "---";
    },
  };
};
