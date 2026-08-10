var e = require("../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../@babel/runtime/helpers/createClass"),
  n = require("../../@babel/runtime/helpers/typeof");
require("../../app.js");
var i = Object.defineProperty,
  t = function (e, r, t) {
    return (
      (function (e, r, n) {
        r in e
          ? i(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[r] = n);
      })(e, "symbol" != n(r) ? r + "" : r, t),
      t
    );
  };
exports.Log = (function () {
  function n(r) {
    e(this, n), t(this, "namespace", ""), (this.namespace = r || "");
  }
  return (
    r(n, [
      {
        key: "record",
        value: function (e, r, n) {
          !(function () {
            var e = arguments.length > 1 ? arguments[1] : void 0;
            e.toUpperCase();
          })(this.namespace, e);
        },
      },
      {
        key: "info",
        value: function (e, r) {
          this.record("info", e, r);
        },
      },
      {
        key: "warn",
        value: function (e, r) {
          this.record("warn", e, r);
        },
      },
      {
        key: "error",
        value: function (e, r) {
          this.record("error", e, r);
        },
      },
    ]),
    n
  );
})();
