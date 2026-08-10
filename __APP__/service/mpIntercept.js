require("../@babel/runtime/helpers/Arrayincludes"),
  require("../@babel/runtime/helpers/Objectvalues"),
  require("../app.js");
var e = require("../common/vendor.js"),
  n = require("../utils/getPlatform.js"),
  r = require("../config/key.js"),
  t = require("./cookie/mp-weixin.js"),
  o = require("../stores/app/context.js"),
  i = require("../utils/index.js"),
  l = require("../utils/system.js"),
  a = require("../config/index.js"),
  u = global,
  c = new t.AdapterCookie(),
  d = function () {
    var n,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    try {
      e.index.clearStorageSync
        ? e.index.clearStorageSync()
        : Object.values(r.storageKey).forEach(function (n) {
            t.includes(n) || e.index.removeStorageSync(n);
          }),
        null == (n = null == c ? void 0 : c.removeAll) || n.call(c);
    } catch (e) {}
  },
  g = function () {
    i.getIsMpPluginComponent()
      ? (getCurrentPages = function () {
          var e, n, r, t;
          return (
            (null ==
            (t =
              null ==
              (r =
                null ==
                (n =
                  null ==
                  (e =
                    null == requireMiniProgram ? void 0 : requireMiniProgram())
                    ? void 0
                    : e.main2Plugin)
                  ? void 0
                  : n.call(e))
                ? void 0
                : r.getCurrentPages)
              ? void 0
              : t.call(r)) || []
          );
        })
      : (getCurrentPages = u.pluginGetCurrentPages);
  },
  s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  f = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
(exports.atob = function (e) {
  if (((e = String(e).replace(/[\t\n\f\r ]+/g, "")), !f.test(e)))
    throw new TypeError(
      "Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."
    );
  var n;
  e += "==".slice(2 - (3 & e.length));
  for (var r, t, o = "", i = 0; i < e.length; )
    (n =
      (s.indexOf(e.charAt(i++)) << 18) |
      (s.indexOf(e.charAt(i++)) << 12) |
      ((r = s.indexOf(e.charAt(i++))) << 6) |
      (t = s.indexOf(e.charAt(i++)))),
      (o +=
        64 === r
          ? String.fromCharCode((n >> 16) & 255)
          : 64 === t
          ? String.fromCharCode((n >> 16) & 255, (n >> 8) & 255)
          : String.fromCharCode((n >> 16) & 255, (n >> 8) & 255, 255 & n));
  return o;
}),
  (exports.clearStorageSync = d),
  (exports.getColorMode = function () {
    var e, n, r, t;
    return (
      (null ==
      (t =
        null ==
        (r =
          null ==
          (n = null == (e = requireMiniProgram()) ? void 0 : e.main2Plugin)
            ? void 0
            : n.call(e))
          ? void 0
          : r.getColorMode)
        ? void 0
        : t.call(r)) || "redRise"
    );
  }),
  (exports.getTheme = function () {
    var e,
      n,
      r,
      t,
      o,
      i,
      u = l.getAccountInfo();
    return (null == (e = null == u ? void 0 : u.miniProgram)
      ? void 0
      : e.appId) === a.MP_INFO.wzqxcx
      ? "light"
      : ((i =
          null ==
          (o =
            null ==
            (t =
              null ==
              (r = null == (n = requireMiniProgram()) ? void 0 : n.main2Plugin)
                ? void 0
                : r.call(n))
              ? void 0
              : t.getTheme)
            ? void 0
            : o.call(t)),
        (global.getVm().globalData.theme = i || "light"),
        i);
  }),
  (exports.initMpPlugin = function () {
    var e, n;
    g();
    var r = getCurrentPages();
    (null == r ? void 0 : r.length) >= 1 &&
      (null == (n = null == (e = r[r.length - 1]) ? void 0 : e.route)
        ? void 0
        : n.includes("account/bind")) &&
      d();
  }),
  (exports.resetGetCurrentPages = g),
  (exports.setSkinConfig = function (n) {
    "light" === n
      ? (e.index.setNavigationBarColor({
          frontColor: "#000000",
          backgroundColor: "#ffffff",
          animation: { duration: 0, timingFunc: "easeIn" },
          complete: function () {},
        }),
        e.index.setBackgroundTextStyle({
          textStyle: "dark",
          complete: function () {},
        }),
        e.index.setBackgroundColor({
          backgroundColor: "#F5F6FA",
          complete: function () {},
        }))
      : (e.index.setNavigationBarColor({
          frontColor: "#ffffff",
          backgroundColor: "#1d2228",
          animation: { duration: 0, timingFunc: "easeIn" },
          complete: function () {},
        }),
        e.index.setBackgroundTextStyle({
          textStyle: "light",
          complete: function () {},
        }),
        e.index.setBackgroundColor({
          backgroundColor: "#101419",
          complete: function () {},
        }));
  }),
  (exports.updateStatData = function () {
    var e, r, t;
    if (n.getPlatform().isMpPlugin) {
      var i =
        null ==
        (t =
          null ==
          (r =
            null ==
            (e = null == requireMiniProgram ? void 0 : requireMiniProgram())
              ? void 0
              : e.main2Plugin)
            ? void 0
            : r.call(e))
          ? void 0
          : t.getStatData();
      i && o.useAppContext().stat.update({ query: { stat_data: i } });
    }
  });
