var e = require("../../../../../common/vendor.js"),
  t = e.defineComponent({
    emits: ["toggleRule"],
    setup: function (t, n) {
      var o = n.emit,
        c = e.inject("stockBridge"),
        r = e.computed(function () {
          return "mp" === c.ENV;
        });
      return {
        isMp: r,
        checkRule: function () {
          r.value || (document.body.style.overflow = "hidden"),
            o("toggleRule", !0);
        },
      };
    },
  }),
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, o, c, r, u) {
        return {
          a: e.o(function () {
            return t.checkRule && t.checkRule.apply(t, arguments);
          }, 3016),
        };
      },
    ],
    ["__scopeId", "data-v-f7199e52"],
  ]);
wx.createComponent(n);
