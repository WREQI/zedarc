var e = require("../../../../../../common/vendor.js"),
  a = {
    name: "StCheckbox",
    props: {
      value: { type: [Boolean, String], default: !1 },
      disabled: { type: Boolean, default: !1 },
      isBlackSkin: { type: Boolean, default: !1 },
    },
    computed: {
      classString: function () {
        return [
          this.value ? "st-checkbox-checked" : "",
          this.disabled ? "st-checkbox-disabled" : "",
        ];
      },
    },
    methods: {
      change: function () {
        this.disabled || this.$emit("change", !this.value);
      },
    },
  },
  t = e._export_sfc(a, [
    [
      "render",
      function (a, t, n, c, s, i) {
        return e.e({ a: n.value || n.disabled }, (n.value || n.disabled, {}), {
          b: e.o(function () {
            return i.change && i.change.apply(i, arguments);
          }, 5213),
          c: e.n(i.classString),
          d: e.n({ "black-skin": n.isBlackSkin }),
        });
      },
    ],
    ["__scopeId", "data-v-9ac8954b"],
  ]);
wx.createComponent(t);
