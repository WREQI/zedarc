var e = require("../../common/vendor.js"),
  o = {
    components: {
      CpyBuyback: function () {
        return "./@tencent/wzq-detail-subpage/brief-pages/CpyBuyback.js";
      },
    },
    provide: function () {
      return { hqBridge: this.hqBridge };
    },
    data: function () {
      return { hqBridge: new e.HQBridge(), code: "", market: "" };
    },
    onLoad: function (o) {
      var r = o || {},
        t = r.code,
        n = void 0 === t ? "" : t,
        a = r.market,
        c = void 0 === a ? "" : a;
      (this.code = n),
        (this.market = c),
        e.wx$1.setBackgroundColor({ backgroundColor: "#f5f6fa" });
    },
    created: function () {},
    beforeUnmount: function () {},
    methods: {},
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("CpyBuyback")
  )();
var r = e._export_sfc(o, [
  [
    "render",
    function (o, r, t, n, a, c) {
      return e.e(
        { a: o.rootFontSize, b: e.p({ "no-auto": !0 }), c: a.code || a.market },
        a.code || a.market ? { d: e.p({ code: a.code, market: a.market }) } : {}
      );
    },
  ],
  ["__scopeId", "data-v-32ccadac"],
]);
wx.createPage(r);
