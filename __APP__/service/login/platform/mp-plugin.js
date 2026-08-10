require("../../../app.js");
var e = require("../../../cgi/platforms/mp-weixin.js"),
  r = require("../../cookie/mp-weixin.js");
require("../../broker.js");
var i = require("../../aegis/platform/not-wujie.js"),
  o = require("../../request/interceptors/brokerMaintain.js"),
  n = require("../../../common/vendor.js"),
  t = require("../../../config/broker/11100/index.js"),
  p = new r.AdapterCookie(),
  s = new n.MpTradePluginLogin({
    scene: "mp-plugin",
    deps: function () {
      return {
        aegisReporter: i.aegisReporter,
        broker: t.brokerConfig,
        MpWeixinAPI: e.MpWeixinAPI,
        cookie: p,
        resolveErrorTip: o.resolveBrokerMaintainErrorTip,
      };
    },
  }),
  u = Object.freeze(
    Object.defineProperty({ __proto__: null, default: s }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.__CJS__import__0__ = u), (exports.login = s);
