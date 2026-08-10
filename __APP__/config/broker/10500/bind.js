var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  t = require("../../../@babel/runtime/helpers/createSuper"),
  l = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var u = Object.defineProperty,
  a = function (e, r, i) {
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
      })(e, "symbol" != l(r) ? r + "" : r, i),
      i
    );
  },
  s = new ((function (l) {
    n(s, l);
    var u = t(s);
    function s() {
      var e;
      return (
        r(this, s),
        (e = u.apply(this, arguments)),
        a(i(e), "accountCalled", "客户编号"),
        a(i(e), "findAccountCalled", "客户编号"),
        a(i(e), "forgetPwd", !0),
        a(i(e), "protocol", { needSign: !0, forceGet: !0, forceSign: !0 }),
        e
      );
    }
    return e(s);
  })(require("../index.js").BrokerBind))();
exports.bind = s;
