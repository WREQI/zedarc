var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "StCheckbox",
    props: {
      value: { type: [Boolean, String], default: !1 },
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
      oninput: function () {
        this.$emit("input", !this.value);
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, d, o, a, i) {
        return e.e(
          {
            a: d.disabled,
            b: d.value,
            c: e.o(function () {
              return i.oninput && i.oninput.apply(i, arguments);
            }, 3497),
            d: d.value,
          },
          (d.value, {}),
          { e: e.n(i.classString) }
        );
      },
    ],
    ["__scopeId", "data-v-b422f3db"],
  ]);
wx.createComponent(n);
