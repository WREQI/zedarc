var e = require("../../../../../../../../common/vendor.js");
exports.detect = function () {
  var t = e.wx$1.getSystemInfoSync(),
    r = t.platform,
    n = t.version,
    o = t.system;
  return {
    env: { IS_PCWEIXIN: /(windows|mac|linux)/i.test(r) },
    platformVersion: n,
    os: o,
  };
};
