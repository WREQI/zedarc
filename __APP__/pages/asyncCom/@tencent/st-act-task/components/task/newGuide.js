var e = require("../../../../../../common/vendor.js"),
  t = {
    props: { config: { type: Object, default: function () {} } },
    setup: function (e, t) {
      var n = t.emit;
      n("taskRealShow"),
        setTimeout(function () {
          n("hideNewguide");
        }, 2e3);
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, o, c, r, i) {
        return { a: e.t(o.config.text) };
      },
    ],
    ["__scopeId", "data-v-55c22326"],
  ]);
wx.createComponent(n);
