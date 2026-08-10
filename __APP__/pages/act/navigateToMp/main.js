var e = require("../../../common/vendor.js"),
  t = {
    data: function () {
      return { logo: "", desc: "", btnText: "", miniPath: "", envVersion: "" };
    },
    onLoad: function (e) {
      var t = e.json_str,
        a = void 0 === t ? "" : t;
      if (a) {
        var n = JSON.parse(decodeURIComponent(a));
        (this.logo = n.logo),
          (this.desc = n.desc),
          (this.btnText = n.btnText || "立即前往"),
          (this.envVersion = n.envVersion || "release"),
          (this.appId = n.appId),
          (this.miniPath = decodeURIComponent(n.miniPath)),
          (this.extraData = n.extraData || {});
      }
    },
    methods: {
      handleNavigate: function () {
        e.wx$1.navigateToMiniProgram({
          appId: this.appId,
          path: this.miniPath,
          envVersion: this.envVersion,
          extraData: this.extraData,
        });
      },
    },
  };
Array || e.resolveComponent("mp-privacy-dialog")();
var a = e._export_sfc(t, [
  [
    "render",
    function (t, a, n, o, i, r) {
      return {
        a: t.rootFontSize,
        b: i.logo,
        c: e.t(i.desc),
        d: e.t(i.btnText),
        e: e.o(function () {
          return r.handleNavigate && r.handleNavigate.apply(r, arguments);
        }, 369),
      };
    },
  ],
]);
wx.createPage(a);
