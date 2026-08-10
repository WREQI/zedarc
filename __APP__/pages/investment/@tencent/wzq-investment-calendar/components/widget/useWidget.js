require("../../../../../../common/vendor.js");
var e = require("../../../../../investment/@tencent/wzq-investment-calendar/components/widget/Widget.js");
e.MarketType.HS,
  e.MarketType.HK,
  e.MarketType.US,
  e.MarketType.HS,
  e.MarketType.HK,
  e.MarketType.US,
  (exports.formatDate = function (e) {
    if (!e) return "";
    var t = e.split("-");
    return t.length >= 3 ? "".concat(t[1], "-").concat(t[2]) : e;
  });
