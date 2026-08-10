var t = require("../../../../../../common/vendor.js"),
  n = {
    props: { buttonText: { type: String, default: "" } },
    data: function () {
      return { pop: null };
    },
    methods: {
      buttonClick: function () {
        this.$emit("buttonClick");
      },
    },
  },
  e = t._export_sfc(n, [
    [
      "render",
      function (n, e, o, r, u, c) {
        return {
          a: t.t(o.buttonText),
          b: t.o(function () {
            return c.buttonClick && c.buttonClick.apply(c, arguments);
          }, 3055),
        };
      },
    ],
    ["__scopeId", "data-v-22b9e234"],
  ]);
wx.createComponent(e);
