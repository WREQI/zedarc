var r = require("../../../../../common/vendor.js"),
  e = {
    name: "ExtraImages",
    props: {
      extraImage: {
        type: Array,
        default: function () {
          return [];
        },
      },
      imgUrl: { type: String, default: "" },
    },
  },
  t = r._export_sfc(e, [
    [
      "render",
      function (e, t, a, n, m, c) {
        return r.e(
          { a: a.imgUrl },
          a.imgUrl
            ? { b: a.imgUrl }
            : {
                c: r.f(a.extraImage, function (r, e, t) {
                  return { a: r.img, b: "extra-" + e };
                }),
              }
        );
      },
    ],
    ["__scopeId", "data-v-94fb6cc4"],
  ]);
wx.createComponent(t);
