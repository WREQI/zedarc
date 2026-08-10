var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  i = function (e, n, r) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  u = function (t, n) {
    for (var r in n || (n = {})) o.call(n, r) && i(t, r, n[r]);
    if (c) {
      var u,
        s = e(c(n));
      try {
        for (s.s(); !(u = s.n()).done; ) {
          r = u.value;
          a.call(n, r) && i(t, r, n[r]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return t;
  },
  s = function (e, t) {
    return n(e, r(t));
  },
  l = require("../../../common/vendor.js"),
  f = "https://proxy.finance.qq.com/cgi/cgi-bin/zxgapi",
  p = {
    appid: "wx4ffb369b6881ee5e",
    openid: l.wx$1.getStorageSync("_qluin"),
    fskey: l.wx$1.getStorageSync("_qlskey"),
    access_token: l.wx$1.getStorageSync("_qlskey"),
    check: 11,
  },
  m = "",
  d = l.wx$1.getDeviceInfo().platform,
  b = void 0 === d ? "" : d;
for (var y in p)
  m += ""
    .concat(m ? "&" : "?")
    .concat(y, "=")
    .concat(p[y]);
(m += "&xcxname=zxg_xcx&come_from=3&scenes=" + ("ios" === b ? 5 : 6)),
  (exports.calendarsSubscribe = function (e) {
    return new Promise(function (t, n) {
      l.wxComm.request({
        header: { "Content-Type": "application/json" },
        url: "".concat(f, "/calendar/subscribe").concat(m),
        method: "POST",
        data: e,
        success: function (e) {
          return t(e);
        },
        fail: function (e) {
          return n(e);
        },
      });
    });
  }),
  (exports.getCalendarDetail = function (e) {
    return new Promise(function (t, n) {
      l.wxComm.request({
        url: "".concat(f, "/calendar/timeline"),
        method: "GET",
        data: s(u({}, p), { calendar_id: e }),
        success: function (e) {
          return t(e);
        },
        fail: function (e) {
          return n(e);
        },
      });
    });
  }),
  (exports.getCalendarsList = function () {
    return new Promise(function (e, t) {
      l.wxComm.request({
        url: "".concat(f, "/calendars/list"),
        method: "GET",
        data: s(u({}, p), { calendar_type: 1 }),
        success: function (t) {
          return e(t);
        },
        fail: function (t) {
          return e(t);
        },
      });
    });
  });
