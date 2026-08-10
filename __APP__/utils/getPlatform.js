require("../app.js");
var i = require("../common/vendor.js"),
  o = require("../config/index.js"),
  r = require("./system.js"),
  n = {};
function e() {
  return (function () {
    var e, t, l, s, a, u;
    0 === (null == (e = Object.keys(n)) ? void 0 : e.length) &&
      (n = i.index.getSystemInfoSync());
    var x = n,
      c = x.platform,
      m = x.version,
      p = x.system,
      d =
        (null ==
        (s =
          null ==
          (l =
            null == (t = null == global ? void 0 : global.getVm)
              ? void 0
              : t.call(global))
            ? void 0
            : l.globalData)
          ? void 0
          : s.mpNoproxy) || !1;
    var g = r.getAccountInfo(),
      v =
        (null == (a = null == g ? void 0 : g.miniProgram)
          ? void 0
          : a.appId) === o.MP_INFO.zxgxcx,
      P =
        (null == (u = null == g ? void 0 : g.miniProgram)
          ? void 0
          : u.appId) === o.MP_INFO.wzqxcx;
    return {
      isWeixin: !0,
      platform: c,
      platformVer: p,
      bizPlatform: "mp-weixin",
      bizPlatformVer: m,
      isMiniProgram: !0,
      isEmbeddedMiniProgram: !1,
      isMpPlugin: !0,
      isNoProxyEnv: d,
      isZxgXcx: v,
      isWzqXcx: P,
      isPCWeixin: /(Windows|Mac)/i.test(c),
      isSimpleMode: P,
    };
  })();
}
(exports.PLATFORM_HARMONY = "ohos"),
  (exports.getPlatform = e),
  (exports.isInXcx = function () {
    var i = e(),
      o = i.isInMainXcx,
      r = i.isLctXcx,
      n = i.isBrokerXcx;
    return !!(o || r || n);
  }),
  (exports.isNotSupportStorageAPI = function (o, r) {
    return !("ohos" !== o || !i.gt(r, "1.0.2"));
  });
