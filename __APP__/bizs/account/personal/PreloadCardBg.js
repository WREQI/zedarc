require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../../../model/biz/permission/constants.js"),
  n = e.defineComponent({
    name: "PreloadCardBg",
    setup: function () {
      return { imageUrls: r.getCardBgUrls() };
    },
  }),
  t = e._export_sfc(n, [
    [
      "render",
      function (r, n, t, o, a, s) {
        return {
          a: e.f(r.imageUrls, function (e, r, n) {
            return { a: e, b: "url(".concat(e, ")") };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-3b0e5d99"],
  ]);
wx.createComponent(t);
