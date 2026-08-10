var e = require("../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../@babel/runtime/helpers/createClass"),
  t = require("../../@babel/runtime/helpers/inherits"),
  u = require("../../@babel/runtime/helpers/createSuper");
require("../../app.js");
var i = require("../../config/cgi.js"),
  s = (function (s) {
    t(n, s);
    var a = u(n);
    function n() {
      return e(this, n), a.apply(this, arguments);
    }
    return (
      r(n, [
        {
          key: "fetchQuotes",
          value: function (e) {
            return this.request(i.API_STOCK_INFO, e, { timeout: 5e3 });
          },
        },
        {
          key: "fetchQuotesBatch",
          value: function (e) {
            return this.request(i.API_STOCK_INFO, e);
          },
        },
      ]),
      n
    );
  })(require("../base.js").BaseAPI);
exports.TradeQuoteService = s;
