require("../../../app.js");
var t = require("../../../config/enum/condition.js");
(exports.statusFormatter = function (r) {
  var e;
  return null !== (e = t.CondStatusText[r]) && void 0 !== e ? e : "";
}),
  (exports.triggerTextFormatter = function (r, e, n) {
    return r === t.OPENING_SELL_TRIGGER_TYPE.immediately
      ? "开板即触发"
      : r === t.OPENING_SELL_TRIGGER_TYPE.downTo
      ? e === t.OPENING_SELL_DOWNTO_TYPE.percent
        ? "开板后回落-".concat(null != n ? n : "0", "%")
        : "开板后回落-".concat(null != n ? n : "0")
      : void 0;
  });
