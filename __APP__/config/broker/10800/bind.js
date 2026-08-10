var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  l = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var n = Object.defineProperty,
  u = function (e, r, i) {
    return (
      (function (e, r, i) {
        r in e
          ? n(e, r, {
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
  s = require("../index.js"),
  c = require("../../../utils/getPlatform.js").getPlatform().isPCWeixin,
  b = new ((function (a) {
    t(s, a);
    var n = l(s);
    function s() {
      var e;
      return (
        r(this, s),
        (e = n.apply(this, arguments)),
        u(i(e), "accountCalled", "牛卡号"),
        u(i(e), "findAccountCalled", "牛卡号"),
        u(i(e), "faceCheckReplaceMobile", !0),
        u(i(e), "forgetPwd", !c),
        u(i(e), "faceCheckProtocol", [
          { name: "《个人信息授权协议》", key: "cmschina_rlxxsqxy" },
        ]),
        e
      );
    }
    return e(s);
  })(s.BrokerBind))();
exports.bind = b;
