var e = require("../@babel/runtime/helpers/objectSpread2"),
  t = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  a = require("../@babel/runtime/helpers/inherits"),
  i = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var n = require("./base.js"),
  u = require("../config/cgi.js"),
  s = new ((function (n) {
    a(o, n);
    var s = i(o);
    function o() {
      return t(this, o), s.apply(this, arguments);
    }
    return (
      r(o, [
        {
          key: "qryBalanceHome",
          value: function (e) {
            return this.request(u.API_BALANCE_HOME, e);
          },
        },
        {
          key: "getProfitList",
          value: function (e) {
            return this.request(u.API_BALANCE_QUERY, {
              action: 1,
              page_num: e.pageIndex,
              page_size: e.pageSize,
            });
          },
        },
        {
          key: "getProfitListNew",
          value: function (e) {
            return this.request(u.API_BALANCE_QUERY, {
              action: 7,
              page_size: e.page_size,
              balance_offset: e.balance_offset,
              trade_month: e.trade_month,
            });
          },
        },
        {
          key: "getTradeList",
          value: function (e) {
            return this.request(u.API_BALANCE_QUERY, {
              action: 0,
              page_num: e.pageIndex,
              page_size: e.pageSize,
            });
          },
        },
        {
          key: "getTradeListNew",
          value: function (e) {
            return this.request(u.API_BALANCE_QUERY, {
              action: 6,
              page_size: e.page_size,
              balance_offset: e.balance_offset,
              trade_month: e.trade_month,
            });
          },
        },
        {
          key: "getTradeDetail",
          value: function (e) {
            return this.request(u.API_BALANCE_QUERY, {
              action: 3,
              contract_no: e.contract_no,
              order_date: e.order_date,
            });
          },
        },
        {
          key: "getPositionInfo",
          value: function (t) {
            return this.request(u.API_BALANCE_QUERY, e({ action: 2 }, t));
          },
        },
        {
          key: "balanceOrder",
          value: function (e) {
            return this.request(u.API_BALANCE_ORDER, e);
          },
        },
        {
          key: "getProductDetail",
          value: function (t) {
            return this.request(
              u.API_BALANCE_HOME,
              e(
                {
                  action: t.action || 1,
                  balance_type: t.balance_type,
                  time_limit: t.time_limit,
                },
                t
              )
            );
          },
        },
        {
          key: "service",
          value: function (e) {
            return this.request(u.API_BALANCE_SERVICE, e);
          },
        },
        {
          key: "balanceOrderSubscribe",
          value: function (t) {
            return this.request(u.API_BALANCE_ORDER, e({ action: 2 }, t));
          },
        },
      ]),
      o
    );
  })(n.BaseAPI))();
exports.duotianqiCgi = s;
