var t = require("../../../../../../../common/vendor.js"),
  o = t._export_sfc(
    {
      name: "instructions",
      components: {},
      props: {},
      data: function () {
        return {
          protocolList: [
            { title: "《腾讯自选股软件许可协议》", key: "copyright" },
            { title: "《腾讯自选股隐私政策》", key: "privacy" },
          ],
        };
      },
      methods: {
        goProtocol: function (t) {
          this.$emit("tapProtocol", { key: t });
        },
      },
      created: function () {},
      mounted: function () {},
      watch: {},
    },
    [
      [
        "render",
        function (o, e, n, r, c, i) {
          return {
            a: t.f(c.protocolList, function (o, e, n) {
              return {
                a: t.t(o.title),
                b: e,
                c: t.o(
                  function (t) {
                    return i.goProtocol(o.key);
                  },
                  3916,
                  e
                ),
              };
            }),
          };
        },
      ],
      ["__scopeId", "data-v-9c8832c0"],
    ]
  );
wx.createComponent(o);
