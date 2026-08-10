var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  u = require("../@babel/runtime/helpers/inherits"),
  i = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var n = require("./base.js"),
  s = require("../config/cgi.js"),
  a = new ((function (n) {
    u(o, n);
    var a = i(o);
    function o() {
      return r(this, o), a.apply(this, arguments);
    }
    return (
      t(o, [
        {
          key: "query",
          value: function (e, r) {
            return this.request(
              s.API_QRY_STOCKPERMISSION,
              { action: e, type: r },
              { timeout: 15e3 }
            );
          },
        },
        {
          key: "queryStatus",
          value: function (e) {
            var r;
            return (
              void 0 !== e && (r = e ? "move" : "open"), this.query("status", r)
            );
          },
        },
        {
          key: "queryAsset",
          value: function (e) {
            return this.query("asset", e ? "move" : "open");
          },
        },
        {
          key: "queryMatch",
          value: function (e) {
            return this.query("match", e ? "move" : "open");
          },
        },
        {
          key: "queryMatchInfo",
          value: function () {
            return this.request(
              s.API_QRYTRADEMATCHINFO,
              { operate_type: "0" },
              { timeout: 16e3 }
            );
          },
        },
        {
          key: "open",
          value: function (r) {
            return this.request(
              s.API_OPEN_STOCKPERMISSION,
              e(e({}, r), {}, { risk_ver: 1 }),
              { timeout: 15e3 }
            );
          },
        },
      ]),
      o
    );
  })(n.BaseAPI))();
exports.gemCgi = a;
