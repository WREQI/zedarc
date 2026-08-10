var e = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  i = require("../@babel/runtime/helpers/inherits"),
  s = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var t = require("./base.js"),
  u = require("../config/cgi.js"),
  a = new ((function (t) {
    i(n, t);
    var a = s(n);
    function n() {
      return e(this, n), a.apply(this, arguments);
    }
    return (
      r(n, [
        {
          key: "queryStockSignal",
          value: function (e) {
            return this.request(u.API_STOCK_SIGNAL, e);
          },
        },
      ]),
      n
    );
  })(t.BaseAPI))();
exports.stockSignalApi = a;
