var e = require("../../../../../common/vendor.js");
(exports.getAppId = function () {
  return "wx9cf8c670ebd68ce4", "wx9cf8c670ebd68ce4";
}),
  (exports.getAppValue = function () {
    return "mpweapp" === e.ShellTypeEnum.SHY
      ? "zxg"
      : "mpweapp" === e.ShellTypeEnum.SHY
      ? /\bAndroid([^;]+)/.test(
          null == navigator ? void 0 : navigator.userAgent
        )
        ? "Android"
        : /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/.test(
            null == navigator ? void 0 : navigator.userAgent
          )
        ? "iOS"
        : "Harmony"
      : "zxg_xcx";
  }),
  (exports.getUserInfo = function () {
    return new Promise(function (n) {
      if ("mpweapp" === e.ShellTypeEnum.SHY)
        shy.getUserInfo(function (e) {
          n(e);
        });
      else {
        var t = {};
        (t.openid = e.wx$1.getStorageSync("_qluin")),
          (t.fskey = e.wx$1.getStorageSync("_qlskey")),
          (t.check = 10),
          n(t);
      }
    });
  });
