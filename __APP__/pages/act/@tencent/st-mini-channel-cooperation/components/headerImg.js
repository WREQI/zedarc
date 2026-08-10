var e = require("../../../../../common/vendor.js"),
  n = e.defineComponent({
    props: {
      received: { type: Boolean, required: !0 },
      config: { type: Object, default: function () {} },
    },
    setup: function (n) {
      return {
        imgUrl: e.computed(function () {
          return n.received
            ? n.config.joinedConfig.header
            : n.config.uiConfig.header;
        }),
      };
    },
  }),
  r = e._export_sfc(n, [
    [
      "render",
      function (n, r, o, i, t, c) {
        return e.e({ a: n.imgUrl }, n.imgUrl ? { b: n.imgUrl } : {});
      },
    ],
    ["__scopeId", "data-v-b62a8759"],
  ]);
wx.createComponent(r);
