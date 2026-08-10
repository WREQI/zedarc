require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../common/vendor.js"),
  n = {
    components: {
      MoreKlineSetting: function () {
        return "../quote/@tencent/stock-hq-chart/components/SettingPopup/MoreKlineSetting.js";
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
      e.StockBridge.report("hq.stock_detail.kline_more_set_brow");
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("MoreKlineSetting")
  )();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, t, r, i, c) {
      return {
        a: n.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.p({ skin: i.skin }),
        d: i.skin,
      };
    },
  ],
  ["__scopeId", "data-v-49c97c5e"],
]);
wx.createPage(o);
