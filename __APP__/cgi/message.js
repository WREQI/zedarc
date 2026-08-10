var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  s = require("../@babel/runtime/helpers/createClass"),
  i = require("../@babel/runtime/helpers/inherits"),
  t = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var u = require("./base.js"),
  a = require("../config/cgi.js"),
  n = (function (u) {
    i(l, u);
    var n = t(l);
    function l() {
      return r(this, l), n.apply(this, arguments);
    }
    return (
      s(l, [
        {
          key: "getMessageBox",
          value: function (e) {
            return this.request(a.API_MESSAGEBOX, e);
          },
        },
        {
          key: "getNewMessageBox",
          value: function (r) {
            return this.request(
              a.API_MESSAGEBOX,
              e(e({}, r), {}, { source: 1 }),
              { checkTradeSession: !1 }
            );
          },
        },
      ]),
      l
    );
  })(u.BaseAPI);
exports.MessageCgi = n;
