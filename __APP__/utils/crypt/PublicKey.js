var e = require("../../@babel/runtime/helpers/createClass"),
  r = require("../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../@babel/runtime/helpers/typeof");
require("../../app.js");
var i = Object.defineProperty,
  n = function (e, r, n) {
    return (
      (function (e, r, t) {
        r in e
          ? i(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != t(r) ? r + "" : r, n),
      n
    );
  };
(exports.EncryptMethod = { SM: "1", RSA: "0" }),
  (exports.PublicKey = (function () {
    return e(function e(t, i) {
      r(this, e),
        n(this, "key"),
        n(this, "encryptMethod"),
        (this.key = t),
        (this.encryptMethod = i);
    });
  })());
