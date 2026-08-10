var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  s = require("../@babel/runtime/helpers/inherits"),
  i = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var u = require("../config/cgi.js"),
  n = require("./base.js"),
  a = { operate: 2 },
  o = { operate: 3 },
  O = { operate: 4 },
  R = { operate: 5 },
  c = { operate: 6 },
  _ = { operate: 7 },
  k = { operate: 8 },
  D = { operate: 10 },
  l = { operate: 11 },
  P = { operate: 12 },
  p = new ((function (n) {
    s(C, n);
    var p = i(C);
    function C() {
      return r(this, C), p.apply(this, arguments);
    }
    return (
      t(C, [
        {
          key: "signKcbKzz",
          value: function (r) {
            var t = r.market,
              s = r.code;
            return this.request(
              u.API_ADD_PROTOCOL_RECORD,
              e(e({}, o), {}, { market: t, stock_code: s })
            );
          },
        },
        {
          key: "signGemHzj",
          value: function () {
            return this.request(u.API_ADD_PROTOCOL_RECORD, e({}, a));
          },
        },
        {
          key: "signFirstTrade",
          value: function (e) {
            return this.request(u.API_OPEN_STOCKPERMISSION, e);
          },
        },
        {
          key: "signPrivacyProtocol",
          value: function () {
            return this.request(u.API_ADD_PROTOCOL_RECORD, e({}, O));
          },
        },
        {
          key: "signTradeRiskStock",
          value: function (r) {
            var t = r.market,
              s = r.code;
            return this.request(
              u.API_ADD_PROTOCOL_RECORD,
              e(e({}, R), {}, { market: t, stock_code: s })
            );
          },
        },
        {
          key: "signConditionProtocal",
          value: function () {
            return this.request(u.API_ADD_PROTOCOL_RECORD, e({}, c));
          },
        },
        {
          key: "signRegisterRisk",
          value: function () {
            return this.request(u.API_ADD_PROTOCOL_RECORD, e({}, _));
          },
        },
        {
          key: "signNewStockBookingRisk",
          value: function () {
            return this.request(u.API_ADD_PROTOCOL_RECORD, e({}, k));
          },
        },
        {
          key: "signUpdateRiskTest",
          value: function (r) {
            var t = r.riskMatchBusiness;
            return this.request(
              u.API_ADD_PROTOCOL_RECORD,
              e(e({}, D), {}, { risk_match_business: t })
            );
          },
        },
        {
          key: "signNewstockPurchaseRiskTips",
          value: function () {
            return this.request(u.API_ADD_PROTOCOL_RECORD, e({}, l));
          },
        },
        {
          key: "signRepoTradeRiskTips",
          value: function () {
            return this.request(u.API_ADD_PROTOCOL_RECORD, e({}, P));
          },
        },
      ]),
      C
    );
  })(n.BaseAPI))();
exports.signProtocol = p;
