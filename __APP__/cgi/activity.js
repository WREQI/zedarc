var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  i = require("../@babel/runtime/helpers/createClass"),
  t = require("../@babel/runtime/helpers/inherits"),
  n = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var u = require("./base.js"),
  a = require("../service/cookie/mp-weixin.js"),
  s = require("../config/cgi.js"),
  l = require("../utils/getPlatform.js"),
  o = new a.AdapterCookie(),
  c = {
    "h5-weixin": "0",
    zxg: "1",
    "zxg-safebox": "1",
    "mp-weixin": "4",
    miniprogram: "4",
    quickapp: "7",
    "h5-normal": "7",
    unknow: "",
  },
  p = l.getPlatform().bizPlatform,
  h = new ((function (u) {
    t(l, u);
    var a = n(l);
    function l() {
      return r(this, l), a.apply(this, arguments);
    }
    return (
      i(l, [
        {
          key: "fetchOemActivityInfo",
          value: function (e) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return this.request(s.API_OEM_ACTIVITY, e, r);
          },
        },
        {
          key: "fetchTenpayAd",
          value: function (r) {
            var i = o.get("wzq_qluin") || o.get("qluin");
            return this.request(
              s.API_AD_SERVICE,
              e({ channel: c[p], uid: i }, r),
              { headers: { noEncode: !0 }, notCookies: !0 }
            );
          },
        },
      ]),
      l
    );
  })(u.BaseAPI))();
exports.ActAPI = h;
