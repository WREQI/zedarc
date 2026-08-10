var e = require("../../common/vendor.js"),
  r = {
    components: {
      DxIntroducePage: function () {
        return "./@tencent/stock-hq-dxpage/IntroduceIndex.js";
      },
    },
    onShareAppMessage: function () {
      return { title: "打新攻略" };
    },
    provide: function () {
      return { hqBridge: this.hqBridge };
    },
    data: function () {
      return { hqBridge: new e.HQBridge(), userInfo: {}, query: null };
    },
    computed: {},
    onLoad: function (e) {
      this.query = e;
    },
    created: function () {
      this.hqBridge.setTitle("打新攻略");
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("DxIntroducePage")
  )();
var n = e._export_sfc(r, [
  [
    "render",
    function (r, n, o, t, i, u) {
      return {
        a: r.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.p({ query: i.query }),
      };
    },
  ],
]);
(r.__runtimeHooks = 2), wx.createPage(n);
