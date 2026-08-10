var e = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../@babel/runtime/helpers/createClass"),
  i = require("../../@babel/runtime/helpers/inherits"),
  u = require("../../@babel/runtime/helpers/createSuper");
require("../../app.js");
var a = require("../base.js"),
  s = require("../../config/cgi.js"),
  n = (function (a) {
    i(c, a);
    var n = u(c);
    function c() {
      return r(this, c), n.apply(this, arguments);
    }
    return (
      t(c, [
        {
          key: "orderCreate",
          value: function (r) {
            return this.request(s.CONDITION_ORDER, e({ action: "create" }, r));
          },
        },
        {
          key: "orderUpdate",
          value: function (r) {
            return this.request(s.CONDITION_ORDER, e({ action: "update" }, r));
          },
        },
      ]),
      c
    );
  })(a.BaseAPI);
exports.TradeConditionStockService = n;
