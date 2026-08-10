var e = require("../../@babel/runtime/helpers/defineProperty"),
  o = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../@babel/runtime/helpers/createClass");
require("../../app.js"), require("../../common/vendor.js");
var t = require("./lib/mp-cookie.js");
exports.AdapterCookie = (function () {
  function u() {
    r(this, u);
  }
  return (
    i(u, [
      {
        key: "get",
        value: function (e) {
          return t.CookieLib.getCookie(e);
        },
      },
      {
        key: "getAll",
        value: function () {
          return t.CookieLib.getCookiesObj();
        },
      },
      {
        key: "set",
        value: function (r, i, u) {
          t.CookieLib.setCookie(e({}, r, o({ value: i }, u)));
        },
      },
      {
        key: "setAll",
        value: function (e) {
          var r = {};
          e.forEach(function (e) {
            var i = e.name,
              t = e.value,
              u = e.opts;
            r[i] = o({ value: t }, u);
          }),
            t.CookieLib.setCookie(r);
        },
      },
      {
        key: "remove",
        value: function (e) {
          t.CookieLib.removeCookie(e);
        },
      },
      {
        key: "removeAll",
        value: function () {
          var e = this.getAll();
          for (var o in e) this.remove(o);
        },
      },
      {
        key: "getCookiesStr",
        value: function () {
          return t.CookieLib.getCookiesStr();
        },
      },
      {
        key: "setCookieFromHeader",
        value: function (e) {
          t.CookieLib.setCookieFromHeader(e);
        },
      },
    ]),
    u
  );
})();
