var e = require("../../../../../common/vendor.js"),
  n = e._export_sfc(
    {
      props: ["hasSubscribed", "theme"],
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
        function (n, r, s, c, t, o) {
          return e.e(
            { a: s.hasSubscribed },
            s.hasSubscribed
              ? { b: e.n("skin-".concat(s.theme)) }
              : { c: e.n("skin-".concat(s.theme)) },
            {
              d: e.o(function () {
                return o.onSubscribe && o.onSubscribe.apply(o, arguments);
              }, 3409),
              e: null !== s.hasSubscribed,
            }
          );
        },
      ],
      ["__scopeId", "data-v-49181af7"],
    ]
  );
wx.createComponent(n);
