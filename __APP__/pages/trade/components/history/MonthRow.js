require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = {
    props: {
      time: { type: String, default: "" },
      total: { type: Number, default: 0 },
    },
    setup: function (e, t) {
      return { emit: t.emit };
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, i, o, u) {
        return {
          a: e.t(n.time),
          b: e.o(function (e) {
            return i.emit("filterTime");
          }),
          c: e.t(n.total),
        };
      },
    ],
    ["__scopeId", "data-v-ae607a6d"],
  ]);
wx.createComponent(r);
