require("../../@babel/runtime/helpers/Arrayincludes"),
  require("../../app.js"),
  require("../../service/broker.js");
var r = require("../../config/broker/10800/index.js");
exports.isShowLockTips = function (e) {
  var i, o;
  return (
    !!(
      (null ==
      (o = null == (i = r.brokerConfig.trade) ? void 0 : i.passwordLockMsg)
        ? void 0
        : o.length) > 0 && e
    ) &&
    r.brokerConfig.trade.passwordLockMsg.some(function (r) {
      return e.includes(r);
    })
  );
};
