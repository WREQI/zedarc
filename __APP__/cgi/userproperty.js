var e = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  t = require("../@babel/runtime/helpers/inherits"),
  i = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var s = require("./base.js"),
  u = require("../config/cgi.js"),
  n = (function (e) {
    return (e.GUIDE = "guide"), e;
  })(n || {}),
  a = (function (e) {
    return (
      (e.ASSET_DRAW_BUBBLETIP = "1"),
      (e.ASSET_GGT_BUBBLETIP = "2"),
      (e.NEWUSER_SHAREHOLDER_BUBBLETIP = "3"),
      e
    );
  })(a || {}),
  l = new ((function (s) {
    t(a, s);
    var n = i(a);
    function a() {
      return e(this, a), n.apply(this, arguments);
    }
    return (
      r(a, [
        {
          key: "setUserProperty",
          value: function (e) {
            var r = e.scene,
              t = e.biz,
              i = e.val;
            return this.request(u.USER_PROPETY, { scene: r, biz: t, val: i });
          },
        },
        {
          key: "confirmNewerShareholder",
          value: function () {
            return this.setUserProperty({ scene: "guide", biz: "3", val: "0" });
          },
        },
      ]),
      a
    );
  })(s.BaseAPI))();
(exports.ENUM_BIZ = a), (exports.SCENE = n), (exports.UserPropertyCgi = l);
