var r,
  e = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js"), require("../../service/broker.js");
var o = require("../../stores/actconfig/useGovBondsStore.js"),
  n = require("../../common/vendor.js"),
  t = require("../../config/broker/11100/index.js"),
  i = (function (r) {
    return (r.ASSET = "ASSET"), (r.ALL = "ALL"), (r.INIT = ""), r;
  })(i || {}),
  s = {
    ASSET: { normal: "ICm00p000t014", info: "ICm01p000t014" },
    ALL: { normal: "Ij900p000t014", info: "IuW01p000t014" },
    "": { normal: "", info: "" },
  },
  u =
    (e((r = {}), t.brokerConfig.dictionary.Enties.quickTrade.routeName, {
      ASSET: "IgZ00p000t011",
      ALL: "IlZ00p000t011",
    }),
    e(r, t.brokerConfig.dictionary.Enties.duotianqi.routeName, {
      ASSET: "InU00p000t012",
      ALL: "IqK00p000t012",
    }),
    r);
(exports.EntryTypeEnum = i),
  (exports.GOV_CHANNEL_MAP = s),
  (exports.useEntryChannel = function () {
    var r = n.storeToRefs(o.useGovBondsStore()).isShowGovBondsAdv;
    return {
      getEntryChannelId: function (e, o) {
        var n;
        return o === t.brokerConfig.dictionary.Enties.debt.routeName
          ? null == (n = s[e])
            ? void 0
            : n[r.value ? "info" : "normal"]
          : u[o]
          ? u[o][e] || ""
          : void 0;
      },
    };
  });
