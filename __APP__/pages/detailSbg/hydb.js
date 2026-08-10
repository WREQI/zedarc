var e = require("../../common/vendor.js"),
  o = {
    components: {
      Hydb: function () {
        return "./@tencent/wzq-detail-subpage/brief-pages/Hydb.js";
      },
    },
    provide: function () {
      return { hqBridge: this.hqBridge };
    },
    data: function () {
      return { hqBridge: new e.HQBridge(), scode: "", type: "" };
    },
    onLoad: function (o) {
      (this.scode = o.symbol || o.scode || ""),
        (this.type = o.type || ""),
        e.wx$1.setBackgroundColor({ backgroundColor: "#f5f6fa" });
    },
    beforeUnmount: function () {},
    methods: {},
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("Hydb")
  )();
var t = e._export_sfc(o, [
  [
    "render",
    function (o, t, n, r, d, c) {
      return e.e(
        { a: o.rootFontSize, b: e.p({ "no-auto": !0 }), c: d.scode },
        d.scode ? { d: e.p({ scode: d.scode, type: d.type }) } : {}
      );
    },
  ],
  ["__scopeId", "data-v-a39d7cc1"],
]);
wx.createPage(t);
