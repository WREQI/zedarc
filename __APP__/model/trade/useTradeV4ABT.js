require("../../app.js");
var r = require("../../common/vendor.js");
exports.useTradeV4ABT = function () {
  var e = r.ref(!0),
    u = r.computed(function () {
      return e.value ? "v4" : "";
    });
  return { isTradeV4: e, tradeVersion: u };
};
