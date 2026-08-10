var e = require("../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../@babel/runtime/helpers/createClass"),
  i = require("../../@babel/runtime/helpers/inherits"),
  s = require("../../@babel/runtime/helpers/createSuper");
require("../../app.js");
var t = require("../../config/cgi.js"),
  u = (function (u) {
    i(n, u);
    var a = s(n);
    function n() {
      return e(this, n), a.apply(this, arguments);
    }
    return (
      r(n, [
        {
          key: "fetchRiskLimit",
          value: function (e) {
            return this.request(t.API_CONV_STOCK_RISK_INFO, e);
          },
        },
      ]),
      n
    );
  })(require("../base.js").BaseAPI);
exports.ConvertibleBondsService = u;
