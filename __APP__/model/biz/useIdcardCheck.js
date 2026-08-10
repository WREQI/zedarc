require("../../app.js");
var e = require("../../stores/user/useUserinfo.js"),
  r = require("../../common/vendor.js"),
  u = require("../../config/enum/account.js");
exports.useIdcardCheck = function () {
  var s = e.useUserinfoStore(),
    i = s.getUserInfo,
    n = r.storeToRefs(s).userinfo;
  return (
    i(),
    {
      isIdcardExpiring: r.computed(function () {
        var e;
        return (
          (null == (e = n.value) ? void 0 : e.cred_expired_status) ===
          u.IDCARD_STATUS.EXPIRING
        );
      }),
      isIdcardExpired: r.computed(function () {
        var e;
        return (
          (null == (e = n.value) ? void 0 : e.cred_expired_status) ===
          u.IDCARD_STATUS.EXPIRED
        );
      }),
    }
  );
};
