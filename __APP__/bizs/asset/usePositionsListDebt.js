require("../../app.js");
var e = require("../../common/vendor.js"),
  t = require("../../filters/money.js"),
  o = require("../../service/stat/mp-weixin.js"),
  n = require("../../config/enum.js");
exports.usePositionsListDebt = function () {
  return {
    onStockClick: function (t) {
      o.stat.click("trade.asset.bond"), e.index.navToQuote(t);
    },
    shouldShowSubtitle: function (e) {
      return !!((0 == +e.hold_val && 0 == +e.hold_num) || e.hold_val);
    },
    holdVal: function (e) {
      return 0 == +e.hold_val && 0 == +e.hold_num
        ? "已清仓"
        : e.hold_val
        ? t.formatNoUnit(e.hold_val)
        : " ";
    },
    stateText: function (e) {
      return n.BALANCE_STATE_TEXT[e] || "---";
    },
  };
};
