var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  n = require("../../../@babel/runtime/helpers/createSuper"),
  u = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var a = Object.defineProperty,
  l = function (e, r, i) {
    return (
      (function (e, r, i) {
        r in e
          ? a(e, r, {
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
  s = new ((function (u) {
    t(s, u);
    var a = n(s);
    function s() {
      var e;
      return (
        r(this, s), (e = a.apply(this, arguments)), l(i(e), "forgetPwd", !0), e
      );
    }
    return e(s);
  })(require("../index.js").BrokerBind))();
exports.bind = s;
