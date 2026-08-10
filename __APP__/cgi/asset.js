var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  s = require("../@babel/runtime/helpers/inherits"),
  u = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var i = require("./base.js"),
  n = require("../config/cgi.js"),
  a = new ((function (i) {
    s(l, i);
    var a = u(l);
    function l() {
      return r(this, l), a.apply(this, arguments);
    }
    return (
      t(l, [
        {
          key: "fetchHomeShow",
          value: function (e, r) {
            return this.request(n.API_ASSET_HOME_SHOW, e, r);
          },
        },
        {
          key: "fetchHomeShowReload",
          value: function (e, r) {
            return this.request(n.API_ASSET_HOME_SHOW_RELOAD, e, r);
          },
        },
        {
          key: "fetchAssetInfo",
          value: function (r, t) {
            return this.request(
              n.API_ASSET_INFO,
              r,
              e({ checkTradeSession: !1 }, t)
            );
          },
        },
      ]),
      l
    );
  })(i.BaseAPI))();
exports.assetCgi = a;
