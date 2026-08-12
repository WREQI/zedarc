require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("../../vendor.js"),
  t = {
    name: "StCell",
    emits: ["click"],
    props: {
      label: { type: String, default: "" },
      title: { type: String, default: "" },
      value: { type: String, default: "" },
      disabled: { type: Boolean, default: !1 },
      border: { type: Boolean, default: !0 },
      arrowDirection: {
        type: String,
        default: "",
        validator: function (e) {
          return ["", "up", "down", "left", "right"].includes(e);
        },
      },
    },
    methods: {
      onClick: function () {
        this.disabled || this.$emit("click");
      },
    },
  },
  l = e._export_sfc(t, [
    [
      "render",
      function (t, l, i, r, n, o) {
        return e.e(
          { a: i.title || t.$slots.title },
          i.title || t.$slots.title
            ? e.e(
                { b: e.t(i.title), c: i.label },
                i.label ? { d: e.t(i.label) } : {}
              )
            : {},
          {
            e: e.t(i.value),
            f: e.n(t.$slots.title || i.title ? "" : "st-cell__value--alone"),
            g: i.arrowDirection,
          },
          i.arrowDirection ? { h: e.n(i.arrowDirection) } : {},
          {
            i: i.disabled ? 1 : "",
            j: i.border ? "" : 1,
            k: e.o(function () {
              return o.onClick && o.onClick.apply(o, arguments);
            }),
          }
        );
      },
    ],
  ]);
wx.createComponent(l);
