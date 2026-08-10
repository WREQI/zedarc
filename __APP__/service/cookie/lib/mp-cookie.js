require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../common/vendor.js"),
  r = require("./helper.js"),
  n = "fe_now",
  o = "mp-broker://cookies",
  t = [n],
  a = null;
function i(e) {
  if (v(e, "Object")) {
    var r = s(),
      o = {};
    for (var t in e)
      if (v(e[t], "Object")) {
        var a = e[t],
          i = a.value,
          l = a.expires,
          d = a.maxAge;
        o[t] = u({ name: t, value: i, expires: l, maxAge: d });
      } else o[t] = u({ name: t, value: e[t] });
    (o[n] = u({ name: n, value: String(Date.now()) })),
      c(Object.assign({}, r, o));
  }
}
function c(r) {
  try {
    (a = r), e.index.setStorageSync(o, r);
  } catch (e) {}
}
function u(r) {
  var n = r.name,
    o = r.value,
    t = r.expires,
    a = r.maxAge;
  return void 0 === n || void 0 === o
    ? {}
    : {
        name: n,
        value: o,
        expires: (t =
          t ||
          (function (r) {
            var n = 1e3 * (r || 31536e3);
            return e.dayjs().add(n, "ms").format;
          })(a)),
      };
}
function s() {
  var r;
  try {
    r = a || e.index.getStorageSync(o);
  } catch (e) {}
  return (
    v(r, "Object") || (r = {}),
    (function (r) {
      var n = !1;
      for (var o in r)
        e.dayjs().isAfter(e.dayjs(r[o].expires)) && ((n = !0), delete r[o]);
      n && c(Object.assign({}, r));
    })(r),
    r
  );
}
function v(e, r) {
  return Object.prototype.toString.call(e) === "[object ".concat(r, "]");
}
var l = {
  setCookie: i,
  getCookie: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      r = s()[e];
    return r ? decodeURIComponent(r.value) : "";
  },
  getCookiesObj: function () {
    var e = s(),
      r = {};
    for (var n in e) r[n] = decodeURIComponent(e[n].value);
    return r;
  },
  getCookiesStr: function () {
    var e = [],
      r = s();
    for (var n in r)
      t.includes(n) || e.push("".concat(n, "=").concat(r[n].value));
    return e.join(";");
  },
  setCookieFromHeader: function (e) {
    var n = r.parseCookieFromHeader(e);
    n && i(n);
  },
  removeCookie: function (e) {
    var r = s();
    delete r[e], c(Object.assign({}, r));
  },
  removeAll: function () {
    (a = null), e.index.removeStorageSync(o);
  },
};
exports.CookieLib = l;
