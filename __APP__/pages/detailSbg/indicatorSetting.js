require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../common/vendor.js"),
  t = {
    components: {
      IndicatorSetting: function () {
        return "../quote/@tencent/stock-hq-chart/components/SettingPopup/IndicatorSetting.js";
      },
    },
    data: function () {
      return {
        skin: ["black", "dark"].includes(e.StockBridge.getStorage("user/skin"))
          ? "black"
          : "white",
      };
    },
    onLoad: function () {
      e.StockBridge.report("hq.stock_detail.kline_indicator_set_brow");
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("indicator-setting")
  )();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, o, r, i, c) {
      return {
        a: t.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.p({ skin: i.skin }),
        d: i.skin,
      };
    },
  ],
  ["__scopeId", "data-v-63b9723d"],
]);
wx.createPage(n);
