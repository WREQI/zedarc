var e = require("../../../../../../common/vendor.js"),
  r = e.defineComponent({
    name: "MetricsCard",
    props: {
      metrics: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function () {
      return {
        valueClass: function (e) {
          return "down" === e.valueType
            ? "metrics-card__value--down"
            : "normal" === e.valueType
            ? "metrics-card__value--normal"
            : "metrics-card__value--up";
        },
      };
    },
  }),
  n = e._export_sfc(r, [
    [
      "render",
      function (r, n, t, a, u, c) {
        return {
          a: e.f(r.metrics, function (n, t, a) {
            return e.e(
              {
                a: e.t(n.label),
                b: e.t(n.value),
                c: e.n(r.valueClass(n)),
                d: n.sub,
              },
              n.sub ? { e: e.t(n.sub) } : {},
              { f: n.label || t }
            );
          }),
        };
      },
    ],
    ["__scopeId", "data-v-c5516d97"],
  ]);
wx.createComponent(n);
