var e = require("../../common/vendor.js"),
  t = {
    components: {
      PositionList: function () {
        return "../../pages/indexSbg/@tencent/wzq-union-portfolio/components/PositionList.js";
      },
    },
    props: {
      visible: { type: Boolean, default: !1 },
      containerHeight: { type: String, required: !0 },
      tabInfo: { type: Object, required: !0 },
      skin: { type: String, default: "white" },
    },
    setup: function () {
      var t = e.inject("stockBridge");
      return {
        onJumpStockDetail: function (e) {
          var o = e || {},
            n = o.scode,
            i = o.market;
          t.routeTo({
            url: "/pages/quote/quote?market=".concat(i, "&scode=").concat(n),
          });
        },
      };
    },
  };
Array || e.resolveComponent("position-list")();
var o = e._export_sfc(t, [
  [
    "render",
    function (t, o, n, i, r, c) {
      return e.e(
        {
          a: n.visible,
          b: n.containerHeight,
          c: n.tabInfo,
          d: n.skin,
          e: e.o(function () {
            return (
              i.onJumpStockDetail && i.onJumpStockDetail.apply(i, arguments)
            );
          }, 2286),
        },
        {}
      );
    },
  ],
]);
wx.createComponent(o);
