require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../common/vendor.js"),
  t = {
    components: {
      ChartSettingParams: function () {
        return "../quote/@tencent/stock-hq-chart/components/SettingPopup/chartSettingParams.js";
      },
    },
    data: function () {
      return {
        type: "",
        skin: ["black", "dark"].includes(e.StockBridge.getStorage("user/skin"))
          ? "black"
          : "white",
      };
    },
    onLoad: function (e) {
      this.type = e.type;
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("ChartSettingParams")
  )();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, r, o, a, i) {
      return e.e(
        { a: t.rootFontSize, b: e.p({ "no-auto": !0 }), c: a.type },
        a.type ? { d: e.p({ type: a.type, skin: a.skin }) } : {},
        { e: a.skin }
      );
    },
  ],
  ["__scopeId", "data-v-04d494a3"],
]);
wx.createPage(n);
