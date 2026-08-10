var e = require("../../../../../../common/vendor.js"),
  t = {
    props: {
      text: { type: String, default: "" },
      showIcon: { type: Boolean, default: !0 },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, n, r, c, s) {
        return e.e({ a: 1 == n.showIcon }, (n.showIcon, {}), {
          b: e.t(n.text ? n.text : "暂无内容"),
        });
      },
    ],
    ["__scopeId", "data-v-2614e97b"],
  ]);
wx.createComponent(o);
