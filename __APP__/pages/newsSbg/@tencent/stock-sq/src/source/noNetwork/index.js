var e = require("../../../../../../../common/vendor.js"),
  t = e._export_sfc(
    {
      name: "noNetwork",
      data: function () {
        return {};
      },
      props: {
        text: { default: "网络不可用，请检查网络设置" },
        useBlack: { default: !0 },
      },
      computed: {},
      methods: {
        clickHandle: function () {
          this.$emit("clickReload");
        },
      },
      created: function () {},
      mounted: function () {},
    },
    [
      [
        "render",
        function (t, n, c, a, o, r) {
          return {
            a: e.t(c.text),
            b: e.o(function () {
              return r.clickHandle && r.clickHandle.apply(r, arguments);
            }, 3135),
            c: e.n(c.useBlack ? "enableBlack" : "disableBlack"),
          };
        },
      ],
      ["__scopeId", "data-v-80faff13"],
    ]
  );
wx.createComponent(t);
