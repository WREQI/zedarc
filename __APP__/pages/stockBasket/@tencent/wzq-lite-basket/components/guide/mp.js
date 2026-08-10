var e = require("../../../../../../common/vendor.js"),
  t = {
    props: { show: { type: Boolean, default: !1 } },
    inject: {
      stockBridge: {
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return {};
    },
    methods: {
      clickBg: function () {
        this.$emit("close");
      },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, n, c, r, i) {
        return e.e(
          { a: n.show },
          n.show
            ? {
                b: e.o(function () {
                  return i.clickBg && i.clickBg.apply(i, arguments);
                }, 2204),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-272f35ce"],
  ]);
wx.createComponent(o);
