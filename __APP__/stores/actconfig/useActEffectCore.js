var e = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var r = require("../../common/vendor.js"),
  t = require("../../service/aegis/platform/not-wujie.js"),
  n = (function (e) {
    return (e.thirdCustodyCoin = "reward_desc"), e;
  })(n || {}),
  i = r.defineStore("actEffectCore", function () {
    var i = r.reactive({});
    function c(e) {
      e.forEach(function (e) {
        i[e.serial_num] = {};
      });
    }
    return {
      cftBankcardActConfig: i,
      setCftBankcardActConfig: function (r, a) {
        try {
          r.forEach(function (r) {
            var t = JSON.parse(r.act_config || "{}");
            i[r.serial_num]
              ? (i[r.serial_num][a] = t[n[a]] || "")
              : (i[r.serial_num] = e({}, a, t[n[a]] || ""));
          });
        } catch (e) {
          t.aegisReporter.reportEvent("MONITOR-APPLY-BANKCARD-ACTCONFIG-FAIL", {
            ext2: JSON.stringify(e),
          }),
            c(r);
        }
      },
      resetCftBankcardActConfig: c,
    };
  });
exports.useActEffectCoreStore = i;
