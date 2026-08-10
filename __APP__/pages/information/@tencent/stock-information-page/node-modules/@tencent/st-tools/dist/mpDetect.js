var e = require("../../../../../../../../common/vendor.js");
exports.detect = function () {
  var t = e.wx$1.getSystemInfoSync(),
    r = t.platform,
    o = t.version,
    s = t.system;
  return {
    env: { IS_PCWEIXIN: /(windows|mac)/i.test(r) },
    platformVersion: o,
    os: s,
  };
};
