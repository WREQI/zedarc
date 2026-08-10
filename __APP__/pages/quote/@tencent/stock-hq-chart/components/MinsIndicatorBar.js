var t = require("constants.js"),
  n = require("../../../../../common/vendor.js"),
  r = {
    props: ["indicator"],
    data: function () {
      return { indicators: t.MINS_INDICATORS, text: t.MINS_INDICATORS_TEXT };
    },
    methods: {
      switchIndicator: function (t) {
        this.$emit("switchIndicator", t);
      },
    },
  },
  i = n._export_sfc(r, [
    [
      "render",
      function (t, r, i, o, c, e) {
        return {
          a: n.f(c.indicators, function (t, r, o) {
            return {
              a: n.t(c.text[r]),
              b: t == i.indicator ? 1 : "",
              c: t,
              d: n.o(
                function (n) {
                  return e.switchIndicator(t);
                },
                3667,
                t
              ),
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-bed6129d"],
  ]);
wx.createComponent(i);
