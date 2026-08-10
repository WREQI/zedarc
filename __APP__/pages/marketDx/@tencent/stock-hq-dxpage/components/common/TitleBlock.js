var e = require("../../../../../../common/vendor.js"),
  t = {
    inject: ["hqBridge"],
    props: { name: { type: String, default: "" } },
    data: function () {
      return { env: this.hqBridge.ENV };
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, r, c, o, a) {
        return {
          a: e.n("title-icon-".concat(o.env)),
          b: e.t(r.name),
          c: e.n("title-text-".concat(o.env)),
          d: e.n("title-container-".concat(o.env)),
        };
      },
    ],
    ["__scopeId", "data-v-6e75975b"],
  ]);
wx.createComponent(n);
