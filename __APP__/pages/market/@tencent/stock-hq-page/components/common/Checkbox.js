var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "StCheckbox",
    inject: ["hqBridge"],
    props: {
      value: { type: [Boolean, String] },
      disabled: { type: Boolean, default: !1 },
      isAdded: { type: Boolean, default: !1 },
    },
    computed: {
      classString: function () {
        return [
          this.value ? "st-checkbox-checked" : "",
          this.disabled ? "st-checkbox-disabled" : "",
          this.isAdded ? "st-checkbox-added" : "",
        ];
      },
    },
    methods: {
      onClick: function () {
        this.oninput();
      },
      oninput: function () {
        this.$emit("input", !this.value);
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, o, i, c, d) {
        return e.e(
          {
            a: o.disabled,
            b: o.value,
            c: e.o(function () {
              return d.oninput && d.oninput.apply(d, arguments);
            }, 4966),
            d: e.o(function () {
              return d.onClick && d.onClick.apply(d, arguments);
            }, 4967),
            e: o.value,
          },
          (o.value, {}),
          { f: e.n(d.classString) }
        );
      },
    ],
    ["__scopeId", "data-v-6d87e1c1"],
  ]);
wx.createComponent(n);
