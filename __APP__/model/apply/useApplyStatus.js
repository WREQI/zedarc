require("../../app.js");
var e = require("../../common/vendor.js"),
  t = require("./useApplyInfo.js"),
  u = require("../../config/enum.js"),
  r = t.useApplyInfo(),
  n = r.isRecoverMode,
  c = r.applyInfo,
  o = e.computed(function () {
    if ("1" === c.value.has_account) return u.FAIL_TYPE.BIND;
    switch (c.value.reject_type) {
      case "2":
        return u.FAIL_TYPE.BAN;
      case "1":
        return u.FAIL_TYPE.REOPEN;
      default:
        return u.FAIL_TYPE.RECOVER;
    }
  }),
  a = e.ref(!1),
  s = e.computed(function () {
    return n.value && !a.value;
  }),
  i = e.computed(function () {
    var e = "";
    switch (o.value) {
      case u.FAIL_TYPE.REOPEN:
        e = "重新开户";
        break;
      case u.FAIL_TYPE.BAN:
        e = "返回开户首页";
        break;
      case u.FAIL_TYPE.BIND:
        e = "立即绑户交易";
        break;
      default:
        e = "快速完善资料";
    }
    return e;
  });
exports.useApplyStatus = function () {
  return { isRejectButtonShown: a, showRejectButton: s, rejectButtonTitle: i };
};
