var t = require("../../../../../common/vendor.js"),
  e = t._export_sfc(
    {
      inject: ["hqBridge"],
      components: {},
      props: ["total", "curCount"],
      data: function () {
        return {};
      },
      computed: {},
      created: function () {},
      mounted: function () {},
      methods: {},
    },
    [
      [
        "render",
        function (e, n, o, r, c, u) {
          return { a: t.t(o.curCount || "-"), b: t.t(o.total || "-") };
        },
      ],
      ["__scopeId", "data-v-65422e50"],
    ]
  );
wx.createComponent(e);
