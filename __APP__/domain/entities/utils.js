var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var r = require("../../config/enum/trade.js");
require("../../service/broker.js");
var t = require("../../config/broker/11100/index.js"),
  E =
    "mp-weixin" ===
    {
      VITE_CDN_IMAGE_PATH: "https://st.gtimg.com/image/mp-broker",
      VITE_CDN_PATH: "https://wzq.gtimg.com/resources/broker",
      VITE_CDN_COS: "https://st.gtimg.com/design",
      VITE_BROKER_RESOURCES: "/mp/resources",
      VITE_CJS_IGNORE_WARNING: "true",
      VITE_USER_NODE_ENV: "production",
      VITE_ROOT_DIR: "/data/workspace/p-99600de346e9458a90915266b1534349/83657",
      VITE_RELEASE: "undefined",
      VITE_dnsPrefetch: "",
      VITE_testDomain: "",
      VITE_MP_BROKER: "zhongxinjiantou",
      VITE_BROKER_CDN_PATH: "",
      VITE_BROKER_BACKUP_CDN: "",
      VITE_BROKER_TENCENT_CDN: "wzq.gtimg.com",
      BASE_URL: "/",
      MODE: "production",
      DEV: !1,
      PROD: !0,
      SSR: !1,
      VITE_BUILD_VERSION: "202607271629",
    }.VITE_PLATFORM;
(exports.getMarketFee = function (E) {
  var _ = e({}, r.DefaultTradeFee);
  if (E) {
    var i = r.MarketTradeFeeMap[E],
      o = t.brokerConfig.trade[i];
    o && (_ = o);
  }
  return _;
}),
  (exports.isMp = E),
  (exports.isZeroValue = function (e) {
    return !e || 0 == +e || "-" === e;
  });
