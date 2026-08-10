var e = require("../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var s = Object.defineProperty,
  t = function (e, r, t) {
    return (
      (function (e, r, i) {
        r in e
          ? s(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      })(e, "symbol" != i(r) ? r + "" : r, t),
      t
    );
  };
require("../../../../service/sdk/lib/api.js");
var n = require("../../../../service/sdk/platform/mp-weixin.js"),
  u = new (require("../../../../service/log/index.js").Log)();
exports.Ocr = (function () {
  return e(function e(i) {
    r(this, e),
      t(this, "$sdk", n.sdk),
      t(this, "$log", u),
      t(this, "biz", ""),
      t(this, "times", 1),
      (this.biz = i);
  });
})();
