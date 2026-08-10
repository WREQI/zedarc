var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  i = require("../@babel/runtime/helpers/inherits"),
  u = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var s = require("./base.js"),
  a = require("../config/cgi.js"),
  n = new ((function (s) {
    i(c, s);
    var n = u(c);
    function c() {
      return r(this, c), n.apply(this, arguments);
    }
    return (
      t(c, [
        {
          key: "monitorReport",
          value: function (e) {
            return this.request(a.API_MONITOR_REPORT, e);
          },
        },
        {
          key: "reportExciteActivityAbt",
          value: function (r) {
            return this.request(
              a.API_MONITOR_REPORT,
              e({ action: "report_excite_activity" }, r)
            );
          },
        },
      ]),
      c
    );
  })(s.BaseAPI))();
exports.StatAPI = n;
