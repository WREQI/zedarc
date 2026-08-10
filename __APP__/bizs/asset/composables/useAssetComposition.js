require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("../../../common/vendor.js"),
  o = require("../../../utils/index.js");
require("../../../service/broker.js");
var s = require("../../../service/aegis/platform/not-wujie.js"),
  i = require("../../../config/enum.js"),
  r = require("../../../stores/user/useUserinfo.js"),
  t = require("../../../service/stat/mp-weixin.js"),
  n = require("../../../adapter/router.js"),
  a = require("../../../config/broker/11100/index.js");
exports.useAssetComposition = function (u) {
  var l = u.asset,
    p = u.zxgSupport,
    c = e.storeToRefs(r.useUserinfoStore()).userinfo,
    d = e.ref(!1),
    v = e.ref(""),
    _ = e.ref(""),
    f = e.computed(function () {
      var e;
      return (
        "1" === (null == (e = c.value) ? void 0 : e.income_ver2024) &&
        Boolean(p && !a.brokerConfig.dictionary.Enties.analysis.hidden)
      );
    }),
    A = e.computed(function () {
      return [
        i.FUNDSINFO_ASSET_STATUS.ASSET_ABNORMAL,
        i.FUNDSINFO_ASSET_STATUS.ASSET_ABNORMAL_OPEN,
      ].includes(l.data.fundsinfo.asset_status);
    }),
    m = e.computed(function () {
      var i = A.value ? 0 : l.data.fundsinfo.bal_val,
        r = o.isZeroVal(l.data.fundsinfo.hold_val)
          ? 0
          : l.data.fundsinfo.hold_val,
        t = o.isZeroVal(i) ? 0 : i;
      return (
        (r < 0 || t < 0) &&
          s.aegisReporter.reportEvent("MONITOR-ASSET-HOLDVAL-NEGATIVE", {
            ext2: r < 0 ? "hold_val" : "bal_val",
          }),
        e.__CJS__export_add__(r, t)
      );
    });
  return (
    e.provide("showAssetComposition", d),
    e.provide("assetCompositionPopupTop", v),
    e.provide("compositionScrollHeight", _),
    e.provide("holdValWithBalance", m),
    e.provide("showAnalysisEntry", f),
    {
      showAssetComposition: d,
      assetCompositionPopupTop: v,
      compositionScrollHeight: _,
      showAnalysisEntry: f,
      showBalExplain: A,
      holdValWithBalance: m,
      onShowAssetComposition: function () {
        (d.value = !0), t.stat.click("trade.asset.composition_popup_show");
      },
      onCloseAssetComposition: function () {
        (d.value = !1), t.stat.click("trade.asset.composition_popup_close");
      },
      onAssetAnalysis: function () {
        t.stat.click("trade.asset.composition_analysis_click"),
          (d.value = !1),
          n.router().push({ name: "AnalysisIndex", query: { tab: "0" } });
      },
    }
  );
};
