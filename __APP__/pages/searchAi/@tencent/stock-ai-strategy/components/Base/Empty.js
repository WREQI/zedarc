var e = require("../../../../../../common/vendor.js"),
  t = { props: { text: { type: String, default: "" } } },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, o, c, a) {
        return { a: e.t(n.text || "暂无内容") };
      },
    ],
    ["__scopeId", "data-v-c79b4ed1"],
  ]);
wx.createComponent(r);
