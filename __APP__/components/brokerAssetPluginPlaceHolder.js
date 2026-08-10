var e = require("../common/vendor.js"),
  t = {
    components: {},
    props: { type: { type: String, default: "asset-card" } },
    setup: function () {
      return {};
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, o, s, p) {
        return { a: e.n("broker-asset" === n.type ? "long" : "") };
      },
    ],
    ["__scopeId", "data-v-db8373e7"],
  ]);
wx.createComponent(r);
