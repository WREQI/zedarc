require("../../@babel/runtime/helpers/Objectvalues"), require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("./useActEffectCore.js"),
  t = require("../apply/useCommonData.js"),
  o = require("../../service/aegis/platform/not-wujie.js"),
  s = e.defineStore("thirdCustody", function () {
    var s = e.ref(!1);
    return {
      isThirdCustody: s,
      judgeThirdCustody: function (u) {
        var i = r.useActEffectCoreStore(),
          a = i.setCftBankcardActConfig,
          n = i.resetCftBankcardActConfig,
          c = e.storeToRefs(r.useActEffectCoreStore()).cftBankcardActConfig,
          f = t.useCommonData(),
          d = e.storeToRefs(f).applyArgs;
        try {
          (s.value =
            u.some(function (e) {
              return JSON.parse(e.act_config || "{}").reward_desc;
            }) && !d.value.activity_channel_id),
            s.value &&
              (a(u, "thirdCustodyCoin"),
              Object.values(c.value).some(function (e) {
                return e.thirdCustodyCoin;
              }) || (s.value = !1));
        } catch (e) {
          n(u),
            (s.value = !1),
            o.aegisReporter.reportEvent(
              "MONITOR-APPLY-BANKCARD-JUDGETHIRDCUSTODY-FAIL",
              { ext2: JSON.stringify(e) }
            );
        }
      },
    };
  });
exports.useThirdCustodyStore = s;
