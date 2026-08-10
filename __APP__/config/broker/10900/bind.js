var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  n = require("../../../@babel/runtime/helpers/inherits"),
  t = require("../../../@babel/runtime/helpers/createSuper"),
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
  s = new ((function (u) {
    n(s, u);
    var l = t(s);
    function s() {
      var e;
      return (
        r(this, s),
        (e = l.apply(this, arguments)),
        a(i(e), "accountInput", {
          maxLength: 12,
          placeholder: "请输入12位资金账号",
          errorTips: "请输入12位资金账号",
        }),
        a(i(e), "findAccountPullCftInfo", !0),
        a(i(e), "forgetPwd", !0),
        e
      );
    }
    return e(s);
  })(require("../index.js").BrokerBind))();
exports.bind = s;
