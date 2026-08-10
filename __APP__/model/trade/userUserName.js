require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../../stores/user/useUserinfo.js");
exports.useUserName = function () {
  return {
    userName: e.computed(function () {
      var s,
        o = r.useUserinfoStore(),
        n = "",
        u = e.storeToRefs(o).userinfo.value,
        t = u.credentialname,
        i = void 0 === t ? "" : t,
        a = u.sex,
        c = void 0 === a ? "" : a,
        m = u.lastname;
      return (
        "" !== c && (n = c % 2 != 0 ? "先生" : "女士"),
        (s = (void 0 === m ? "" : m) || i || "") ? "".concat(s).concat(n) : s
      );
    }),
  };
};
