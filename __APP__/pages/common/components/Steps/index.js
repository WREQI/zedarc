require("../../../app.js");
var t = require("../../vendor.js"),
  e = {
    name: "StSteps",
    props: {
      direction: { type: String, default: "horizontal" },
      current: { type: Number, default: 0 },
      steps: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    computed: {},
    methods: {
      getStatus: function (t, e) {
        return t < e ? "finish" : t === e ? "process" : "wait";
      },
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, n, c, i, s) {
        return {
          a: t.f(n.steps, function (e, r, c) {
            return t.e(
              "vertical" === n.direction
                ? {}
                : e.icon
                ? { b: t.n("icon-".concat(e.icon)) }
                : { c: t.t(r + 1) },
              { a: e.icon, d: e.text, e: e.desc },
              e.desc ? { f: t.t(e.desc) } : {},
              {
                g: r,
                h: t.n("st-steps-item-".concat(s.getStatus(r, n.current))),
              }
            );
          }),
          b: "vertical" === n.direction,
          c: t.n(
            "horizontal" === n.direction
              ? "st-steps-label-vertical"
              : "st-steps-vertical"
          ),
        };
      },
    ],
  ]);
wx.createComponent(r);
