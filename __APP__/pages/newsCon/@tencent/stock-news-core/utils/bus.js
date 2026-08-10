var o = require("../../../../../common/vendor.js"),
  n = {
    $on: function (n, t) {
      o.StockBridge.busOn(n, t);
    },
    $off: function (n, t) {
      o.StockBridge.busOff(n, t);
    },
    $once: function (n, t) {
      o.StockBridge.buOnce(n, t);
    },
    $emit: function (n, t) {
      o.StockBridge.busEmit(n, t);
    },
  };
exports.BUS = n;
