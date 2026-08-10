var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var s = Object.defineProperty,
  u = function (e, r, i) {
    return (
      (function (e, r, i) {
        r in e
          ? s(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      })(e, "symbol" != n(r) ? r + "" : r, i),
      i
    );
  },
  l = new ((function (n) {
    t(l, n);
    var s = a(l);
    function l() {
      var e;
      return (
        r(this, l),
        (e = s.apply(this, arguments)),
        u(i(e), "detailTimeSupportSecond", !1),
        u(i(e), "transferTime", function () {
          var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = r.bankAbbr,
            t = void 0 === i ? "" : i;
          return t && e.bankTime[t] ? e.bankTime[t] : e.bankTime.default;
        }),
        u(i(e), "bankTime", {
          default: { startTime: [8, 45, 0], endTime: [16, 0, 0] },
          bosh: { startTime: [8, 45, 0], endTime: [16, 15, 0] },
        }),
        u(i(e), "idCardExpireRecently", {
          isDisableForIn: !1,
          isDisableForOut: !1,
          tips: "",
          isUseOutTimeStatusWithOutTime: !0,
        }),
        u(i(e), "idCardExpired", {
          isDisableForIn: !1,
          isDisableForOut: !0,
          tips: "身份证已过有效期，出金受限",
        }),
        e
      );
    }
    return e(l);
  })(require("../index.js").BrokerTransfer))();
exports.transfer = l;
