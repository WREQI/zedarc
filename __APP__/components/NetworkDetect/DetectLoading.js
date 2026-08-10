require("../../app.js");
var e = require("../../common/vendor.js");
Array || (e.resolveComponent("st-loading") + e.resolveComponent("popup"))();
var n = e._export_sfc(
  {
    components: {
      Popup: function () {
        return "../../common/components/Popup/index.js";
      },
      StLoading: function () {
        return "../../common/components/Loading/index.js";
      },
    },
  },
  [
    [
      "render",
      function (n, o, r, p, s, t) {
        return {
          a: e.p({
            type: "spinner",
            size: "65rpx",
            color: "rgba(255, 255, 255, 0.9)",
          }),
          b: e.p({
            show: !0,
            center: !0,
            mask: !0,
            name: "mp-slide-up",
            "mask-closable": !1,
            "custom-style": "z-index: 104",
          }),
        };
      },
    ],
  ]
);
wx.createComponent(n);
