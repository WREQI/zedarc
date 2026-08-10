var e = require("../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../@babel/runtime/helpers/createClass"),
  i = require("../../@babel/runtime/helpers/typeof");
require("../../app.js");
var r = Object.defineProperty,
  s = function (e, t, s) {
    return (
      (function (e, t, i) {
        t in e
          ? r(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != i(t) ? t + "" : t, s),
      s
    );
  },
  u = require("../../common/vendor.js");
exports.TimeSeed = (function () {
  function i(t) {
    e(this, i),
      s(this, "timeSeed"),
      s(this, "used"),
      (this.timeSeed = t),
      (this.used = !1);
  }
  return (
    t(i, [
      {
        key: "get",
        value: function () {
          return (
            (this.used = !0),
            this.timeSeed ? this.timeSeed.substring(0, 20) : ""
          );
        },
      },
      {
        key: "set",
        value: function (e) {
          (this.used = !1), (this.timeSeed = e);
        },
      },
      {
        key: "hasUsed",
        value: function () {
          return this.used;
        },
      },
      {
        key: "getTimeCode",
        value: function () {
          return u.md5(this.timeSeed).substring(0, 14);
        },
      },
    ]),
    i
  );
})();
