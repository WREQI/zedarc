require("../../app.js");
var e = require("../../common/vendor.js"),
  t = {
    name: "StCheckbox",
    components: {},
    emits: ["input"],
    props: {
      value: { type: [Boolean, String], required: !0 },
      disabled: { type: Boolean, default: !1 },
      hollowStyle: { type: Boolean, default: !1 },
      square: { type: Boolean, default: !1 },
      size: { type: String, default: "" },
    },
    computed: {
      classString: function () {
        return [
          this.value ? "st-checkbox-checked" : "",
          this.disabled ? "st-checkbox-disabled" : "",
          this.square ? "st-checkbox-square" : "",
          this.hollowStyle ? "st-checkbox-hollow" : "",
          "st-checkbox-".concat(this.size),
        ];
      },
    },
    methods: {
      oninput: function () {
        this.$emit("input", !this.value);
      },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, s, n, i, a) {
        return { a: s.disabled, b: s.value, c: e.n(a.classString) };
      },
    ],
  ]);
wx.createComponent(o);
