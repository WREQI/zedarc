var e = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  t = require("../@babel/runtime/helpers/inherits"),
  u = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var i = require("./base.js"),
  n = require("../config/cgi.js"),
  a = new ((function (i) {
    t(s, i);
    var a = u(s);
    function s() {
      return e(this, s), a.apply(this, arguments);
    }
    return (
      r(s, [
        {
          key: "service",
          value: function (e) {
            return this.request(n.API_BALANCE_SERVICE, e);
          },
        },
        {
          key: "product",
          value: function (e) {
            return this.request(n.API_BALANCE_PRODUCT, e);
          },
        },
        {
          key: "income",
          value: function (e) {
            return this.request(n.API_BALANCE_INCOME, e);
          },
        },
        {
          key: "queryTradeMatchInfo",
          value: function (e) {
            return this.request(n.API_QRYTRADEMATCHINFO, e);
          },
        },
        {
          key: "queryTradeDetail",
          value: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.contract_no,
              t = e.order_date;
            return this.request(n.API_BALANCE_QUERY, {
              action: 3,
              contract_no: r,
              order_date: t,
            });
          },
        },
      ]),
      s
    );
  })(i.BaseAPI))();
exports.jiaxinbaoCgi = a;
