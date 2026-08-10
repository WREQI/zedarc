var e = require("../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../@babel/runtime/helpers/createClass"),
  t = require("../../@babel/runtime/helpers/typeof");
require("../../app.js");
var n = Object.defineProperty,
  i = function (e, r, i) {
    return (
      (function (e, r, t) {
        r in e
          ? n(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != t(r) ? r + "" : r, i),
      i
    );
  },
  a = require("../../common/vendor.js"),
  s = require("./PublicKey.js"),
  u = require("./lib/rsa.js");
exports.RsaEncode = (function () {
  function t(r) {
    e(this, t),
      i(this, "key"),
      i(this, "needSign"),
      (this.needSign = r),
      u.rsa.setMaxDigits(131);
  }
  return (
    r(t, [
      {
        key: "setKey",
        value: function (e) {
          var r = new u.rsa.RSAKeyPair("10001", "", e);
          this.key = new s.PublicKey(r, s.EncryptMethod.RSA);
        },
      },
      {
        key: "encode",
        value: function (e, r) {
          var t = r.get(),
            n = r.getTimeCode(),
            i = u.rsa.encrypt1(this.key.key, e, t, n);
          return a.__CJS__export_combineEncryptedData__(n, i);
        },
      },
      {
        key: "encodeLong",
        value: function (e, r) {
          var t = r.get(),
            n = r.getTimeCode(),
            i = u.rsa.encryptLong(this.key.key, e, t, n);
          return a.__CJS__export_combineEncryptedData__(n, i);
        },
      },
    ]),
    t
  );
})();
