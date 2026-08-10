var e = require("../../../../../common/vendor.js"),
  n = {
    name: "OldPermissionDialog",
    props: {
      isMP: { required: !0, type: Boolean, default: !1 },
      isHalfScreen: { required: !1, type: Boolean, default: !1 },
    },
    methods: {
      onClickKnowBtn: function () {
        this.$emit("dismiss-old-permission-dialog");
      },
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (n, o, i, r, s, t) {
        return {
          a: e.o(function (e) {
            return t.onClickKnowBtn(!1);
          }, 4785),
          b: e.n(i.isHalfScreen ? "modal-body-half-screen" : ""),
          c: e.n(i.isMP ? "mp" : ""),
        };
      },
    ],
    ["__scopeId", "data-v-524f8cfd"],
  ]);
wx.createComponent(o);
