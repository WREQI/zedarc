var e = require("../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../@babel/runtime/helpers/inherits"),
  i = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var s = (function (s) {
  t(a, s);
  var u = i(a);
  function a() {
    return r(this, a), u.apply(this, arguments);
  }
  return e(a);
})(require("./a-stock.js").IStock);
exports.OtherFundStock = s;
