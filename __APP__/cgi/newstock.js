var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  u = require("../@babel/runtime/helpers/inherits"),
  n = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var i = require("./base.js"),
  s = require("../config/cgi.js"),
  o = (function (e) {
    return (e.STOCK = "1"), (e.KCB_STOCK = "2"), (e.CYB_STOCK = "3"), e;
  })(o || {}),
  c = (function (e) {
    return (
      (e.QUERY = "query"), (e.BOOKING = "booking"), (e.CANCEL = "cancel"), e
    );
  })(c || {}),
  a = new ((function (i) {
    u(c, i);
    var o = n(c);
    function c() {
      return r(this, c), o.apply(this, arguments);
    }
    return (
      t(c, [
        {
          key: "queryPurchaseInfo",
          value: function (e) {
            return this.request(s.NEWSTOCK_PURCHASE_INFO, e);
          },
        },
        {
          key: "subInfo",
          value: function (e) {
            return this.request(s.NEWSTOCK_SUB_INFO, e);
          },
        },
        {
          key: "getNewStocks",
          value: function (e) {
            return this.request(s.NEWSTOCK_QUOTE, e);
          },
        },
        {
          key: "queryIPORecord",
          value: function (e) {
            return this.request(s.QUERY_NEWSTOCK_PURCHASE, e);
          },
        },
        {
          key: "queryIPOedStock",
          value: function (e) {
            return this.request(s.NEWSTOCK_ALLOCATE_RESULT, e);
          },
        },
        {
          key: "queryUnLuckyStock",
          value: function (r) {
            return this.request(
              s.NEWSTOCK_ALLOCATE_RESULT,
              e({ action: "purchase_record" }, r || {})
            );
          },
        },
        {
          key: "submitIpoStock",
          value: function (e) {
            return this.request(s.NEWSTOCK_ORDER, e);
          },
        },
        {
          key: "qryStockCode",
          value: function (e) {
            return this.request(s.NEWSTOCK_QUERY_STOCK_CODE, e);
          },
        },
        {
          key: "processNewStockBooking",
          value: function (e) {
            return this.request(s.NEWSTOCK_BOOKING, e);
          },
        },
        {
          key: "queryMatchInfo",
          value: function () {
            return this.request(s.API_QRYTRADEMATCHINFO, { operate_type: "7" });
          },
        },
      ]),
      c
    );
  })(i.BaseAPI))();
(exports.BookingActionType = c),
  (exports.SUB_INFO_TYPE = o),
  (exports.newstockCgi = a);
