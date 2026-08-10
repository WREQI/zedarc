var e = require("../../@babel/runtime/helpers/createClass"),
  r = require("../../@babel/runtime/helpers/classCallCheck"),
  l = require("../../@babel/runtime/helpers/typeof");
require("../../app.js");
var t = Object.defineProperty,
  a = function (e, r, a) {
    return (
      (function (e, r, l) {
        r in e
          ? t(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: l,
            })
          : (e[r] = l);
      })(e, "symbol" != l(r) ? r + "" : r, a),
      a
    );
  },
  i = e(function e() {
    r(this, e);
  });
a(i, "adapter", null),
  a(i, "gmSwitchFlag", !1),
  a(i, "cookieFromHeader", null),
  a(i, "cookieFromData", null),
  (exports.RequestContext = i);
