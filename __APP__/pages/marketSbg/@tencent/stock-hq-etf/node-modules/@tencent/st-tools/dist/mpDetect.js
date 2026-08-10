var e = require("../../../../../../../../common/vendor.js"),
  r = {};
Object.defineProperty(r, "__esModule", { value: !0 });
var t = (r.default = function () {
  var r = e.wx$1.getSystemInfoSync(),
    t = r.platform,
    o = r.version,
    s = r.system;
  return {
    env: { IS_PCWEIXIN: /(windows|mac)/i.test(t) },
    platformVersion: o,
    os: s,
  };
});
exports._default = t;
