require("../../../app.js");
var e = require("../../../utils/crypt/Sm4Encrypt.js");
require("../../broker.js");
var r = require("../../aegis/platform/not-wujie.js"),
  t = require("../../../config/broker/11100/index.js"),
  n = require("../../../common/vendor.js");
function o(o, i) {
  if (!t.brokerConfig.common.enableHandleSensitiveInformation) return {};
  var c = n.pick(o, i),
    a = {};
  return (
    Object.keys(c).forEach(function (t) {
      var n = t.replace("_gm", "");
      try {
        var o = e.decrypt(c[t]);
        o && (a[n] = o);
      } catch (e) {
        r.aegisReporter.reportEvent("MONITOR-SYSTEM-SM4-DECODE-FAIL", {
          ext2: "".concat(t, ":").concat(c[t]),
          ext3: JSON.stringify(e),
        });
      }
    }),
    a
  );
}
(exports.decodeFields = function (e) {
  if (e.config.decodeFields) {
    var r = o(e.data, e.config.decodeFields);
    e.data = Object.assign(e.data, r);
  }
  return e;
}),
  (exports.encodeFields = function (o) {
    if (
      o.encodeFields &&
      t.brokerConfig.common.enableHandleSensitiveInformation
    ) {
      var i = n.pick(o.data, o.encodeFields),
        c = {};
      Object.keys(i).forEach(function (t) {
        var n = "".concat(t, "_gm");
        try {
          var o = i[t] ? e.encrypt(i[t]) : "";
          c[n] = o;
        } catch (e) {
          r.aegisReporter.reportEvent("MONITOR-SYSTEM-SM4-ENCODE-FAIL", {
            ext2: "".concat(t, ":").concat(i[t]),
            ext3: JSON.stringify(e),
          });
        }
      });
      var a = Object.assign(o.data, c);
      o.data = n.omit(a, o.encodeFields);
    }
    return o;
  }),
  (exports.handleDecodeFields = o);
