require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  i = require("../../stock-crypto-modules-hq/src/config.js"),
  o = require("../../../js-cookie/src/js.cookie.js");
function n(o) {
  var n,
    r,
    c = (null == (n = e.wx$1) ? void 0 : n.getStorageSync("_qluin")) || "",
    s = (null == (r = e.wx$1) ? void 0 : r.getStorageSync("_qlskey")) || "",
    t = i.APPIDENUM.wzqlight,
    u = e.OriginTypeEnum.mpweapp;
  return {
    appid: t,
    qlappid: t,
    openid: c,
    qluin: c,
    device_id: c,
    fskey: s,
    qlskey: s,
    access_token: s,
    check: (null == o ? void 0 : o.includes("group/newstockgroup")) ? 12 : 11,
    app: u,
  };
}
(exports.getLoginParamsMp = n),
  (exports.getLoginParamsObject = function (r) {
    return e.StockBridge.ENV === e.EnvTypeEnum.SHY_NATIVE
      ? {}
      : e.wx$1
      ? n(r)
      : (function (n) {
          var r = o.cookie.get("wzq_qluin") || o.cookie.get("qluin") || "",
            c = o.cookie.get("wzq_qlskey") || o.cookie.get("qlskey") || "",
            s = i.APPIDENUM.wzqlight,
            t = e.OriginTypeEnum.wzqlight;
          return {
            appid: s,
            qlappid: s,
            openid: r,
            qluin: r,
            device_id: r,
            fskey: c,
            qlskey: c,
            access_token: c,
            check: (null == n ? void 0 : n.includes("group/newstockgroup"))
              ? 12
              : 11,
            app: t,
          };
        })(r);
  });
