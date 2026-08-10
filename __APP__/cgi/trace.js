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
          key: "traceInfo",
          value: function (e) {
            return this.request(a.API_TRACE_INFO, e);
          },
        },
        {
          key: "riskTestConflictTrace",
          value: function (r) {
            return this.request(
              a.API_TRACE_INFO,
              e(e({}, r), {}, { trace_type: "1", action: "2" })
            );
          },
        },
      ]),
      c
    );
  })(s.BaseAPI))();
exports.TraceCgi = n;
