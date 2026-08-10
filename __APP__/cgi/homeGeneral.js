var e = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  i = require("../@babel/runtime/helpers/inherits"),
  t = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var n = require("./base.js"),
  u = require("../config/cgi.js"),
  s = new ((function (n) {
    i(a, n);
    var s = t(a);
    function a() {
      return e(this, a), s.apply(this, arguments);
    }
    return (
      r(a, [
        {
          key: "queryExciteInfo",
          value: function (e) {
            var r = { action: "query_excite" };
            return (
              e && e.length > 0 && (r.excite_id = e.join("|")),
              this.request(u.API_HOME_GENERAL, r)
            );
          },
        },
        {
          key: "confirmExciteShow",
          value: function (e) {
            return this.request(u.API_HOME_GENERAL, {
              action: "excite_show_confirm",
              excite_id: e.join("|"),
            });
          },
        },
        {
          key: "queryBandAssist",
          value: function () {
            return this.request(u.API_HOME_GENERAL, {
              action: "query_band_assist",
            });
          },
        },
      ]),
      a
    );
  })(n.BaseAPI))();
exports.HomeGeneralCgi = s;
