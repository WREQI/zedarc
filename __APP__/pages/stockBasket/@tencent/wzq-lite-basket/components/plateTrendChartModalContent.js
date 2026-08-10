var e = require("../../../../../common/vendor.js"),
  t = e.defineComponent({
    props: { date: { type: String, default: "" } },
    setup: function (e) {
      return { props: e };
    },
  }),
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, n, o, p, a) {
        return { a: e.t(t.props.date) };
      },
    ],
    ["__scopeId", "data-v-195a96d6"],
  ]);
wx.createComponent(r);
