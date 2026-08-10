var e = require("../@babel/runtime/helpers/objectSpread2");
require("../app.js");
var r = require("../common/vendor.js"),
  t = require("./index.js"),
  i = require("../service/broker.js"),
  a = require("../config/mpConfig.js"),
  n = require("../service/navigateMp.js"),
  o = require("./getPlatform.js"),
  s = require("../service/stat/mp-weixin.js");
require("../service/sdk/lib/api.js");
var c = require("../service/sdk/platform/mp-weixin.js"),
  l = function (e, i) {
    var s = o.getPlatform().isMpPlugin,
      c = e;
    (c = "".concat(t.getWebviewUrl(), "?url=").concat(encodeURIComponent(e))),
      s
        ? n.navigateTo({ url: c, linkType: a.linkTypeMap.plugin2Plugin })
        : r.index.navigateTo({ url: c });
  };
function p() {
  var e = o.getPlatform(),
    r = e.isZxg,
    t = e.isInWzqXcx,
    i = e.isInZxgXcx,
    a = e.isSimpleMode,
    n = e.isWzqXcx,
    s = e.isZxgXcx,
    c = e.isInZxgXcxH5,
    l = 14;
  return (
    r
      ? (l = 74)
      : t || n
      ? (l = 17)
      : c
      ? (l = 250)
      : i || s
      ? (l = 75)
      : a && (l = 18),
    l
  );
}
(exports.getAICSChannel = p),
  (exports.hrefToKnowledge = function (e) {
    if (!e) throw new Error("Knowledge qid is required");
    var r = "https://"
      .concat(
        i.tenpayDomain(),
        "/wzq/front/aics/#/aiserviceV2/knowledgeDetail?channel="
      )
      .concat(p(), "&qid=")
      .concat(e);
    o.getPlatform().isZxg ? c.sdk.redirect("WebBrowser", { p_url: r }) : l(r);
  }),
  (exports.hrefToStrategyIndex = function () {
    var e = o.getPlatform(),
      r = e.isZxg,
      t = e.isInIframe;
    r
      ? c.sdk.redirect(
          "GotoAppLocation?info=%7B%22path%22%3A%22hangqing%2Fxuangu%22%7D"
        )
      : t
      ? c.sdk.navigateTo({ url: "/market/strategy" })
      : l("https://wzq.tenpay.com/mp/v2/index.html#/market/strategy");
  }),
  (exports.hrefToWzqDomain = function (a) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    try {
      s.stat.update({ query: n });
    } catch (e) {}
    var l = e(e({}, n), {}, { stat_data: s.stat.getStorageChannelStr() }),
      p = i.tenpayDomain(),
      g = t.keepClientURlArgs(
        "https://"
          .concat(p)
          .concat(t.getStaticPath(!0), "#")
          .concat(r.dist.urltools.make(a, l))
      );
    o.openUrlWithExtraWebview
      ? c.sdk.openUrlWithExtraWebview({ url: g })
      : o.replace
      ? location.replace(g)
      : (location.href = g);
  }),
  (exports.uniHref = l);
