var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  t = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var u = Object.defineProperty,
  l = function (e, r, i) {
    return (
      (function (e, r, i) {
        r in e
          ? u(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      })(e, "symbol" != a(r) ? r + "" : r, i),
      i
    );
  },
  s = new ((function (a) {
    n(s, a);
    var u = t(s);
    function s() {
      var e;
      return (
        r(this, s),
        (e = u.apply(this, arguments)),
        l(i(e), "detailTimeSupportSecond", !1),
        l(i(e), "transferTime", function () {
          var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = r.bankAbbr,
            n = void 0 === i ? "" : i;
          return n && e.bankTime[n] ? e.bankTime[n] : e.bankTime.default;
        }),
        l(i(e), "bankTime", {
          default: { startTime: [9, 0, 0], endTime: [16, 0, 0] },
          boj: { startTime: [9, 0, 0], endTime: [16, 15, 0] },
        }),
        e
      );
    }
    return e(s);
  })(require("../index.js").BrokerTransfer))();
exports.transfer = s;
