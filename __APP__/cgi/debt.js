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
          key: "fetchRepoTradeQry",
          value: function (e) {
            return this.request(s.API_REPOTRADEQRY, e);
          },
        },
        {
          key: "qryRepoinfo",
          value: function (e) {
            return this.request(s.API_REPOINFO, e);
          },
        },
        {
          key: "qryRepoPermission",
          value: function (e) {
            return this.request(s.API_QUERYACCOUNTAUTHORITY, e);
          },
        },
        {
          key: "qryRepoCondStatus",
          value: function () {
            var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return this.request(
              s.API_REPO_COND,
              e(e({}, r), {}, { action: "query" })
            );
          },
        },
        {
          key: "qryRepoCondProtocol",
          value: function () {
            var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return this.request(
              s.API_REPO_COND,
              e(e({}, r), {}, { action: "query_need_risk_tips" })
            );
          },
        },
        {
          key: "submitRepoCond",
          value: function () {
            var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return this.request(
              s.API_REPO_COND,
              e(e({}, r), {}, { action: "submit" })
            );
          },
        },
        {
          key: "setRepoCondStatus",
          value: function () {
            var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return this.request(
              s.API_REPO_COND,
              e(e({}, r), {}, { action: "set_status" })
            );
          },
        },
      ]),
      o
    );
  })(n.BaseAPI))();
exports.debtApi = a;
