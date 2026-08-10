var t = require("../../../common/vendor.js"),
  n = t._export_sfc(
    {
      props: ["title", "leftButton", "rightButton", "landscape"],
      methods: {
        onLeft: function () {
          this.$emit("onLeft");
        },
        onRight: function () {
          this.$emit("onRight");
        },
      },
    },
    [
      [
        "render",
        function (n, e, o, i, r, u) {
          return t.e(
            { a: o.title },
            o.title ? { b: t.t(o.title) } : {},
            { c: o.leftButton },
            o.leftButton
              ? {
                  d: t.t(o.leftButton),
                  e: t.o(function (t) {
                    return u.onLeft();
                  }, 3722),
                }
              : {},
            {
              f: t.t(o.rightButton),
              g: t.o(function (t) {
                return u.onRight();
              }, 3723),
              h: o.landscape ? 1 : "",
              i: t.o(function () {}, 3724),
            }
          );
        },
      ],
      ["__scopeId", "data-v-d902a6d8"],
    ]
  );
wx.createComponent(n);
