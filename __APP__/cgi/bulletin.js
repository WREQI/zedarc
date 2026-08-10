var e = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  i = require("../@babel/runtime/helpers/inherits"),
  t = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var u = require("./base.js"),
  s = require("../config/cgi.js"),
  l = new ((function (u) {
    i(n, u);
    var l = t(n);
    function n() {
      return e(this, n), l.apply(this, arguments);
    }
    return (
      r(n, [
        {
          key: "qryBulletin",
          value: function (e, r) {
            return this.request(s.API_QRY_BULLETIN, e, r);
          },
        },
      ]),
      n
    );
  })(u.BaseAPI))();
(exports.BULLETIN_ACTION = {
  ASSET: "1",
  TRADE_STOCK: "2",
  TRANSFER: "3",
  APPLY_PROGRESS: "4",
  IDCARD_VERIFY: "5",
}),
  (exports.bulletinApi = l);
