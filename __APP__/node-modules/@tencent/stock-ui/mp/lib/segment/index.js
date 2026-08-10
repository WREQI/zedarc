require("../../../../../../app.js");
var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "StSegment",
    props: {
      value: { type: Number, default: 0 },
      segments: {
        type: Array,
        default: function () {
          return [];
        },
      },
      disabled: { type: Boolean, default: !1 },
    },
    methods: {
      handleItemClick: function (e, t) {
        if (this.disabled) return !1;
        this.$emit("input", e);
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, r, s, i, u) {
        return {
          a: e.f(r.segments, function (t, n, s) {
            return {
              a: e.t(t),
              b: e.n(r.value === n ? "st-segment-item-selected" : ""),
              c: e.o(function (e) {
                return u.handleItemClick(n, t);
              }, n),
              d: n,
            };
          }),
          b: e.n(r.disabled ? "st-segment-disabled" : ""),
        };
      },
    ],
  ]);
wx.createComponent(n);
