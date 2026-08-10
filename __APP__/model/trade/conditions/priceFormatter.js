require("../../../app.js");
var e = require("../../../config/enum/condition.js");
exports.triggerCondFormatter = function (n) {
  return n.remindType === e.PriceConditionRemindType.downTo
    ? "股价≤".concat(n.condPrice, "元")
    : "股价≥".concat(n.condPrice, "元");
};
