require("../../../app.js"),
  require("../../../common/vendor.js"),
  require("../../../cgi/base.js"),
  require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js"),
  require("../../../service/sdk/lib/api.js"),
  require("../../../service/sdk/platform/mp-weixin.js"),
  require("../../../utils/index.js"),
  require("../../../service/aegis/platform/not-wujie.js"),
  require("../../../common/components/Dialog/index.js"),
  require("../../../components/Password/theme/biometrics/utils.js"),
  require("../../../utils/cacheFn.js"),
  require("../../../filters/date.js"),
  require("../../entities/trade-stock/stock-order.js");
var e = (function (e) {
  return (
    (e[(e.userInput = 0)] = "userInput"), (e[(e.dialog = 1)] = "dialog"), e
  );
})(e || {});
exports.CheckScene = e;
