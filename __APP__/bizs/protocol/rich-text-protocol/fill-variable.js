var r = require("../../../common/vendor.js");
require("../../../service/broker.js");
var e = require("../../../config/broker/11100/index.js"),
  n = {
    $currentDate: function () {
      return r.dayjs().format("YYYY年MM月DD日");
    },
    riskNotice: function (n) {
      return (function (r) {
        var n,
          i,
          t =
            (null == (i = null == (n = e.brokerConfig) ? void 0 : n.common)
              ? void 0
              : i.RISK_PROTOCOL_NOTICE) || {};
        return t[r] || t[Number(r)] || "";
      })(
        (function (e) {
          var n = r.unref(e) || {},
            i = r.unref(n.matchInfo) || {},
            t = r.unref(n.userinfo) || {};
          return i.riskLevel || i.risk_level || t.risk_level || "";
        })(n)
      );
    },
  };
exports.fillVariable = function (e, i) {
  return e.replace(/\{\{(.*?)\}\}/g, function (e, t) {
    var u,
      o,
      f = t;
    if (f.indexOf("||") > -1) {
      var l = f.split("||");
      (f = l[0].trim()), (u = l[1].trim());
    }
    if (((f = f.trim()), n[f])) return n[f](i) || u || "";
    var s = f.split(".");
    if (s.length > 1) {
      for (var v = 0, a = r.unref(i); v < s.length; )
        (a = r.unref(null == a ? void 0 : a[s[v].trim()])), (v += 1);
      o = a || u || "";
    } else o = i[f];
    return o || u || "";
  });
};
