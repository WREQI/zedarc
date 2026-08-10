require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../../adapter/router.js"),
  t = e.defineStore("actconfig", function () {
    var t = e.ref(""),
      a = e.ref("");
    function u() {
      t.value, a.value;
    }
    return {
      actTempID: t,
      actRechargeID: a,
      setActTempID: function () {
        var e = r.route().query;
        (null == e ? void 0 : e.hasOwnProperty("act_temp"))
          ? (t.value = e.act_temp.toLowerCase() || "")
          : (t.value = (null == "" ? void 0 : "".actTempID) || ""),
          u();
      },
      setActRechargeID: function () {
        var e = r.route().query;
        (null == e ? void 0 : e.hasOwnProperty("act_recharge"))
          ? (a.value = e.act_recharge || "")
          : (a.value = (null == "" ? void 0 : "".actRechargeID) || ""),
          u();
      },
    };
  });
exports.useActConfigStore = t;
