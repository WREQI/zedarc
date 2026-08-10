var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  u = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var l = Object.defineProperty,
  a = function (e, r, i) {
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
      })(e, "symbol" != u(r) ? r + "" : r, i),
      i
    );
  },
  s = require("../index.js"),
  b = require("../../../utils/getPlatform.js").getPlatform().isPCWeixin,
  o = new ((function (u) {
    t(s, u);
    var l = n(s);
    function s() {
      var e;
      return (
        r(this, s),
        (e = l.apply(this, arguments)),
        a(i(e), "forgetPwd", !b),
        a(i(e), "findAccountPullCftInfo", !0),
        e
      );
    }
    return e(s);
  })(s.BrokerBind))();
exports.bind = o;
