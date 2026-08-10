require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  n = {
    setup: function (n, r) {
      var t = r.emit;
      return (
        e.onMounted(function () {
          t("mounted");
        }),
        {}
      );
    },
  },
  r = e._export_sfc(n, [
    [
      "render",
      function (e, n, r, t, o, u) {
        return {};
      },
    ],
  ]);
wx.createComponent(r);
