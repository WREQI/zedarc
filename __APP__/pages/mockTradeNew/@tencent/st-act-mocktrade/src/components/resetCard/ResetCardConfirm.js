var e = require("../../../../../../../common/vendor.js"),
  n = {
    name: "ResetCardConfirm",
    props: {
      visible: { type: Boolean, default: !1 },
      loading: { type: Boolean, default: !1 },
      skin: { type: String, default: "light" },
      isLight: { type: Boolean, default: !1 },
    },
    watch: {
      visible: function (e) {
        e && this.$emit("brow");
      },
    },
    methods: {
      handleCancel: function () {
        this.$emit("cancel");
      },
      handleConfirm: function () {
        this.loading || this.$emit("confirm");
      },
    },
  },
  i = e._export_sfc(n, [
    [
      "render",
      function (n, i, t, a, r, o) {
        return e.e(
          { a: t.visible },
          t.visible
            ? {
                b: e.o(function () {
                  return o.handleCancel && o.handleCancel.apply(o, arguments);
                }, 4523),
                c: e.t(t.loading ? "处理中..." : "确定"),
                d: e.n(
                  t.isLight
                    ? "reset-card-confirm__btn--light"
                    : "reset-card-confirm__btn--classic"
                ),
                e: e.n(t.loading ? "reset-card-confirm__btn--disabled" : ""),
                f: e.o(function () {
                  return o.handleConfirm && o.handleConfirm.apply(o, arguments);
                }, 4524),
                g: e.n("dark" === t.skin ? "reset-card-confirm--dark" : ""),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-b952c976"],
  ]);
wx.createComponent(i);
