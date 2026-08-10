var e = require("../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../@babel/runtime/helpers/createClass"),
  i = require("../../@babel/runtime/helpers/inherits"),
  n = require("../../@babel/runtime/helpers/createSuper");
require("../../app.js");
var t = require("../../config/cgi.js"),
  u = new ((function (u) {
    i(a, u);
    var s = n(a);
    function a() {
      return e(this, a), s.apply(this, arguments);
    }
    return (
      r(a, [
        {
          key: "login",
          value: function (e, r, i) {
            var n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "";
            return this.request(
              t.API_MP_LOGIN,
              { code: e, skey_sign: r, wzq_openid: i, qry_mini_openid_bind: n },
              { checkLogin: !1, norelogin: !0 }
            );
          },
        },
        {
          key: "openidBind",
          value: function (e) {
            return this.request(
              t.API_MP_OPENID_BIND,
              { code: e },
              { checkLogin: !1 }
            );
          },
        },
        {
          key: "dealerMiniLogin",
          value: function (e) {
            return this.request(
              t.API_DEALER_MP_LOGIN,
              { code: e },
              { checkLogin: !1 }
            );
          },
        },
      ]),
      a
    );
  })(require("../base.js").BaseAPI))();
exports.MpWeixinAPI = u;
