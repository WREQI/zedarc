var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  u = require("../@babel/runtime/helpers/inherits"),
  i = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var n = require("./base.js"),
  s = require("../config/cgi.js"),
  a = new ((function (n) {
    u(c, n);
    var a = i(c);
    function c() {
      return r(this, c), a.apply(this, arguments);
    }
    return (
      t(c, [
        {
          key: "fetchMatchInfo",
          value: function (e) {
            return this.request(s.API_QRYTRADEMATCHINFO, { operate_type: e });
          },
        },
        {
          key: "openKzzSz",
          value: function (r) {
            return this.request(
              s.CGI_KZZ_SERVICE,
              e(e({}, r), {}, { action: 1, risk_ver: 1 })
            );
          },
        },
        {
          key: "openKzzSh",
          value: function (r) {
            return this.request(
              s.CGI_KZZ_SERVICE,
              e(e({}, r), {}, { action: 2, risk_ver: 1 })
            );
          },
        },
        {
          key: "openKzz",
          value: function (r) {
            return this.request(
              s.CGI_KZZ_SERVICE,
              e(e({}, r), {}, { action: 5, risk_ver: 1 })
            );
          },
        },
        {
          key: "getKzzState",
          value: function () {
            return this.request(s.API_QUERYACCOUNTAUTHORITY);
          },
        },
        {
          key: "queryKzzRisk",
          value: function (e) {
            return this.request(s.API_CONV_STOCK_RISK_INFO, e);
          },
        },
        {
          key: "queryMatchInfo",
          value: function (r) {
            return this.request(s.CGI_KZZ_SERVICE, e({ action: 4 }, r));
          },
        },
        {
          key: "queryAsset",
          value: function () {
            return this.request(s.CGI_KZZ_SERVICE, { action: 3 });
          },
        },
      ]),
      c
    );
  })(n.BaseAPI))();
exports.kzzCgi = a;
