var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "st-button",
    props: {
      text: { type: String, default: "查看" },
      type: { type: String, default: "default" },
      size: String,
      disabled: { type: Boolean, default: !1 },
      customStyle: {
        type: Object,
        default: function () {
          return {};
        },
      },
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
      function (e, n, o, i, r, u) {
        return {
          a: t.t(o.text),
          b: o.disabled,
          c: t.n(o.type ? "yy-button-" + o.type : ""),
          d: t.n(o.size ? "yy-button-" + o.size : ""),
          e: t.s(o.customStyle),
          f: t.o(function () {
            return u.onClick && u.onClick.apply(u, arguments);
          }, 4105),
        };
      },
    ],
  ]);
wx.createComponent(n);
