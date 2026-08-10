require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../../utils/getPlatform.js"),
  a = require("../user/useUserinfo.js"),
  n = e.defineStore("navbar", function () {
    var n = e.ref(!1),
      t = e.ref(!1),
      i = e.ref(!1),
      u = a.useUserinfoStore(),
      o = e.computed(function () {
        var a = r.getPlatform(),
          t = a.isWeixin,
          i = a.isMiniProgram,
          o = a.isLctXcx,
          s = a.isInZxgXcxH5;
        return !!t && (!i || !!o || !!s) && n.value && !e.isEmpty(u.userinfo);
      });
    return {
      navbar: n,
      externalNavBar: t,
      externalNavBar4Mp: i,
      shownav: o,
      showNavBar: function () {
        n.value = !0;
      },
      hideNavBar: function () {
        n.value = !1;
      },
      toggleExternalNav: function (e) {
        t.value = e;
      },
      toggleExternalNav4Mp: function (e) {
        i.value = e;
      },
    };
  });
exports.useNavbarStore = n;
