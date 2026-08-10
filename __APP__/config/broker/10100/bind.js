var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  t = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var l = Object.defineProperty,
  u = function (e, r, i) {
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
  s = new ((function (a) {
    n(s, a);
    var l = t(s);
    function s() {
      var e;
      return (
        r(this, s),
        (e = l.apply(this, arguments)),
        u(i(e), "faceCheckReplaceMobile", !0),
        u(i(e), "forgetPwd", !0),
        u(i(e), "faceCheckProtocol", [
          { name: "《个人信息授权协议》", key: "chinalions_rlxxsqxy" },
        ]),
        e
      );
    }
    return e(s);
  })(require("../index.js").BrokerBind))();
exports.bind = s;
