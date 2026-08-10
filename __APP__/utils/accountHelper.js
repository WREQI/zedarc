require("../app.js");
var e = require("../common/vendor.js");
require("../service/broker.js");
var r = require("./getPlatform.js"),
  o = require("../config/key.js"),
  t = require("../config/broker/11100/index.js"),
  n = "".concat(o.FUND_ACCOUNTS, "_").concat(t.brokerConfig.base.code);
(exports.getFaceSrcByPlatform = function () {
  var e = r.getPlatform(),
    o = e.isMiniProgram,
    t = e.isZxgXcx;
  return o ? (t ? 5 : 8) : 2;
}),
  (exports.getStorageAccount = function () {
    var r = e.index.getStorageSync(n) || [];
    return e.index.removeStorageSync(n), r;
  }),
  (exports.setStorageAccount = function (r) {
    e.index.setStorageSync(n, r);
  });
