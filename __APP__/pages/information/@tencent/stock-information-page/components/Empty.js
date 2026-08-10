var e = require("../../../../../common/vendor.js"),
  t = {
    props: {
      text: { type: String, default: "" },
      isShowIcon: { type: Boolean, default: !0 },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, n, r, a, c) {
        return e.e({ a: n.isShowIcon }, (n.isShowIcon, {}), {
          b: e.t(n.text || "暂无内容"),
        });
      },
    ],
    ["__scopeId", "data-v-4930a772"],
  ]);
wx.createComponent(o);
