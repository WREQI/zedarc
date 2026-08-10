require("../app.js");
var e = require("../common/vendor.js"),
  n = require("../config/broker/11100/index.js"),
  o = require("../config/key.js"),
  r = function (e) {
    return e.replace(/^https?:\/\//, "").replace(/\/$/, "");
  },
  i = !1,
  t = !1,
  a = function () {
    var a, c, s, u;
    if (t && i) return "";
    var l = "";
    if (!i)
      try {
        (l =
          null ==
          (u =
            null ==
            (s =
              null ==
              (c =
                null ==
                (a = null == requireMiniProgram ? void 0 : requireMiniProgram())
                  ? void 0
                  : a.main2Plugin)
                ? void 0
                : c.call(a))
              ? void 0
              : s.getDomain)
            ? void 0
            : u.call(s, n.brokerConfig.base.code)) &&
          ((l = r(l)),
          (i = !0),
          e.wx$1.setStorageSync(o.LAST_AVAILABLE_DOMAIN, l));
      } catch (e) {}
    if (!l && !i && !t)
      try {
        (l = e.wx$1.getStorageSync(o.LAST_AVAILABLE_DOMAIN)) &&
          ((l = r(l)), (t = !0));
      } catch (e) {}
    return (n.brokerConfig.base.domain = l || n.brokerConfig.base.domain), l;
  };
a(),
  (exports.stripDomainPrePostFix = r),
  (exports.syncDomain = a),
  (exports.tenpayDomain = function () {
    var e = "wzq.tenpay.com";
    return (
      (null == location ? void 0 : location.hostname) &&
        (function (e) {
          return n.brokerConfig.base.testDomain === e;
        })(location.hostname) &&
        (e = "test-stp.tentrees.cn"),
      e
    );
  }),
  (exports.updateDomain = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      o = e.find(function (e) {
        return e.dealercode === n.brokerConfig.base.code;
      });
    o && o.domain && (n.brokerConfig.base.domain = r(o.domain));
  });
