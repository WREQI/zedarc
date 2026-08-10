var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/inherits"),
  s = require("../../../@babel/runtime/helpers/createSuper");
require("../../../app.js");
var t = new ((function (t) {
  i(n, t);
  var u = s(n);
  function n() {
    return r(this, n), u.apply(this, arguments);
  }
  return e(n);
})(require("../index.js").BrokerBind))();
exports.bind = t;
