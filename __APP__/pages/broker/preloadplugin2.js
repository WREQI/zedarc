var r = require("../../common/vendor.js");
Array || r.resolveComponent("preloadplugin")();
var e = r._export_sfc(
  {
    components: {
      preloadplugin: function () {
        return "./preloadplugin4.js";
      },
    },
  },
  [
    [
      "render",
      function (r, e, n, o, t, p) {
        return {};
      },
    ],
  ]
);
wx.createComponent(e);
