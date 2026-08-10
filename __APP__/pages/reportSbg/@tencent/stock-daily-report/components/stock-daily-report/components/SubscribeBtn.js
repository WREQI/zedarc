var e = require("../../../../../../../common/vendor.js"),
  r = e._export_sfc(
    {
      props: ["hasSubscribed"],
      methods: {
        onSubscribe: function () {
          this.$emit("subscribe");
        },
      },
      data: function () {
        return {};
      },
    },
    [
      [
        "render",
        function (r, s, n, c, u, b) {
          return e.e({ a: n.hasSubscribed }, (n.hasSubscribed, {}), {
            b: e.o(function () {
              return b.onSubscribe && b.onSubscribe.apply(b, arguments);
            }, 4471),
            c: null !== n.hasSubscribed,
          });
        },
      ],
      ["__scopeId", "data-v-d3c8d4e3"],
    ]
  );
wx.createComponent(r);
