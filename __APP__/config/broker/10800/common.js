var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  t = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var l = Object.defineProperty,
  s = function (e, r, i) {
    return (
      (function (e, r, i) {
        r in e
          ? l(e, r, {
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
  u = new ((function (a) {
    n(u, a);
    var l = t(u);
    function u() {
      var e;
      return (
        r(this, u),
        (e = l.apply(this, arguments)),
        s(i(e), "foreverExp", "30001231"),
        s(i(e), "enableComplexPassword", !1),
        s(i(e), "enableHandleSensitiveInformation", !0),
        s(i(e), "enableBiometrics", !0),
        s(i(e), "biometricsProtocol", "cmschina_biometrics"),
        e
      );
    }
    return e(u);
  })(require("../index.js").BrokerCommon))();
exports.common = u;
