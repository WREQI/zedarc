require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  o = e.defineComponent({
    props: {
      max: { type: Number, default: 250 },
      min: { type: Number, default: 1 },
      value: { type: Number, default: 1 },
      showOperator: { type: Boolean, default: !0 },
      width: { type: Number, default: 320 },
      showMaxMin: { type: Boolean, default: !0 },
    },
    emits: ["emit"],
    setup: function (o, n) {
      var a = n.emit,
        t = ["mpwzq", "wzqlight"].includes("mpweapp"),
        u = e.ref(o.value),
        r = e.ref({
          backgroundColor: "#E9EBF0",
          activeColor: t ? "#E63535" : "#3077ec",
          blockSize: 18,
          min: o.min,
          max: o.max,
          showValue: !1,
        }),
        i = e.computed(function () {
          return o.width ? { width: "".concat(o.width, "px") } : "";
        });
      return (
        e.watch(
          function () {
            return o.value;
          },
          function (e) {
            u.value = e;
          }
        ),
        {
          contentStyle: i,
          options: r,
          curValue: u,
          reduce: function () {
            u.value <= o.min || ((u.value -= 1), a("valueChange", u.value));
          },
          add: function () {
            u.value >= o.max || ((u.value += 1), a("valueChange", u.value));
          },
          changeSlide: function (e) {
            var n;
            (u.value = (null == (n = e.detail) ? void 0 : n.value) || o.min),
              a("valueChange", u.value);
          },
        }
      );
    },
  }),
  n = e._export_sfc(o, [
    [
      "render",
      function (o, n, a, t, u, r) {
        return e.e(
          { a: o.showOperator },
          o.showOperator
            ? {
                b: e.o(function () {
                  return o.reduce && o.reduce.apply(o, arguments);
                }, 2283),
              }
            : {},
          { c: o.showMaxMin },
          o.showMaxMin ? { d: e.t(o.min) } : {},
          {
            e: o.options.backgroundColor,
            f: o.options.activeColor,
            g: o.curValue,
            h: o.options.blockSize,
            i: o.options.min,
            j: o.options.max,
            k: o.options.showValue,
            l: e.o(function () {
              return o.changeSlide && o.changeSlide.apply(o, arguments);
            }, 2284),
            m: o.showMaxMin,
          },
          o.showMaxMin ? { n: e.t(o.max) } : {},
          { o: o.showOperator },
          o.showOperator
            ? {
                p: e.o(function () {
                  return o.add && o.add.apply(o, arguments);
                }, 2285),
              }
            : {},
          { q: e.s(o.contentStyle) }
        );
      },
    ],
    ["__scopeId", "data-v-535470b8"],
  ]);
wx.createComponent(n);
