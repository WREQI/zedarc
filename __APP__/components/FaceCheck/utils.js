require("../../app.js"), require("../../service/broker.js");
var e = require("../../utils/getPlatform.js"),
  r = require("../../config/broker/11100/index.js");
function i() {
  if (!r.brokerConfig.bind.faceCheckReplaceMobile) return !1;
  var i = e.getPlatform(),
    n = i.isMiniProgram,
    t = i.isMpPlugin,
    o = i.isWeixin,
    s = i.isLctXcx,
    c = i.isPCWeixin;
  return !(s || c || (!t && (n || !o)));
}
(exports.isFaceCheckEntry = i),
  (exports.needSign = function () {
    var n = e.getPlatform().isMpPlugin;
    if (i()) {
      var t = r.brokerConfig.bind.faceCheckProtocol;
      return !(!t || !t.length || !n);
    }
  });
