require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("./useStepPure.js");
exports.useStep = function (t) {
  var u = t.order,
    o = e.inject("trade").stock,
    p = r.useStepPure({ order: u, stockInfo: o });
  return { amountStep: p.amountStep, priceStep: p.priceStep };
};
