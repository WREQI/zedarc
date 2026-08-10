var e = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  s = require("../@babel/runtime/helpers/inherits"),
  i = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var t = require("./base.js"),
  u = require("../config/cgi.js"),
  n = new ((function (t) {
    s(a, t);
    var n = i(a);
    function a() {
      return e(this, a), n.apply(this, arguments);
    }
    return (
      r(a, [
        {
          key: "queryBandAssistInfo",
          value: function (e) {
            return this.request(u.API_BAND_ASSIST_INFO, e);
          },
        },
      ]),
      a
    );
  })(t.BaseAPI))();
exports.bandAssistInfoApi = n;
