var t = require("../../../../../../../common/vendor.js"),
  e = {
    name: "st-button",
    props: {
      text: { type: String, default: "查看" },
      type: { type: String, default: "default" },
      size: String,
      disabled: { type: Boolean, default: !0 },
      buttonStyle: { type: Object, default: function () {} },
    },
    methods: {
      onClick: function (t) {
        this.$emit("click", t);
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, o, i, u, r) {
        return {
          a: t.t(o.text),
          b: o.disabled,
          c: t.n(o.type ? "st-button-" + o.type : ""),
          d: t.n(o.size ? "st-button-" + o.size : ""),
          e: t.s(o.buttonStyle),
          f: t.o(function () {
            return r.onClick && r.onClick.apply(r, arguments);
          }, 4878),
        };
      },
    ],
  ]);
wx.createComponent(n);
