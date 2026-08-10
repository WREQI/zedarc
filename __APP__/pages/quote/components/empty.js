var e = require("../../../common/vendor.js"),
  n = {
    onShow: function () {
      setTimeout(function () {
        e.wx$1.navigateBack();
      }, 300);
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (e, n, o, t, r, c) {
        return {};
      },
    ],
  ]);
wx.createComponent(o);
