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
  o = require("../../common/vendor.js"),
  u = require("./PublicKey.js"),
  c = require("../../service/mpIntercept.js");
exports.Sm2Encode = (function () {
  function t(r) {
    e(this, t), i(this, "key"), i(this, "needSign"), (this.needSign = r);
  }
  return (
    r(t, [
      {
        key: "setKey",
        value: function (e) {
          this.key = new u.PublicKey(
            (function (e) {
              for (var r = c.atob(e), t = "", n = 0; n < r.length; n++) {
                var i = r.charCodeAt(n).toString(16);
                t += 2 === i.length ? i : "0".concat(i);
              }
              return t.toUpperCase();
            })(e),
            u.EncryptMethod.SM
          );
        },
      },
      {
        key: "encode",
        value: function (e, r) {
          var t = r.get(),
            n = r.getTimeCode(),
            i =
              (function (e) {
                for (var r = e.length, t = "", n = 0; n < r; n += 2)
                  t += String.fromCharCode(parseInt(e.substring(n, 2), 16));
                return t;
              })(t) +
              n +
              e,
            u = o.src.sm2.doEncrypt(i, this.key.key, 1);
          return o.__CJS__export_combineSm2EncryptedData__(n, u);
        },
      },
    ]),
    t
  );
})();
