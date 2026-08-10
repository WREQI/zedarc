var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  i = require("../@babel/runtime/helpers/inherits"),
  u = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var s = require("./base.js"),
  n = require("../config/cgi.js"),
  a = new ((function (s) {
    i(l, s);
    var a = u(l);
    function l() {
      return r(this, l), a.apply(this, arguments);
    }
    return (
      t(l, [
        {
          key: "serverTime",
          value: function () {
            return this.request(n.API_SERVERTIME, {}, { checkLogin: !1 });
          },
        },
        {
          key: "getBrokerOAuthCode",
          value: function (e) {
            return this.request(n.API_BROKER_OAUTH, e, {
              appendAppClientInfo: !0,
            });
          },
        },
        {
          key: "getApplyBizCode",
          value: function (r) {
            return this.request(n.API_APPLY_ACCOUNT, e({ action: "biz" }, r));
          },
        },
      ]),
      l
    );
  })(s.BaseAPI))();
exports.systemCgi = a;
