var o = require("../../../../../common/vendor.js"),
  t = "community-",
  i = {
    $on: function (i, n) {
      o.StockBridge.busOn(t + i, n);
    },
    $off: function (i, n) {
      o.StockBridge.busOff(t + i, n);
    },
    $emit: function (i, n) {
      o.StockBridge.busEmit(t + i, n);
    },
  };
exports.EvtBus = i;
