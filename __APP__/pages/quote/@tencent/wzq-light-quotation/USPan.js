require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../common/vendor.js"),
  a = e.defineComponent({
    props: {
      panData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (a) {
      return {
        isLite: ["mpwzq", "wzqlight"].includes("mpweapp"),
        colorClass: e.computed(function () {
          return 0 == +a.panData.netchange
            ? "color-equal"
            : a.panData.netchange > 0
            ? "color-rise"
            : "color-drop";
        }),
      };
    },
  }),
  t = e._export_sfc(a, [
    [
      "render",
      function (a, t, n, r, o, p) {
        return e.e(
          {
            a: e.t("before" === a.panData.tag ? "盘前" : "盘后"),
            b: a.panData.volume > 0,
          },
          a.panData.volume > 0
            ? {
                c: e.t(a.panData.last),
                d: e.t(a.panData.netchange),
                e: e.t(a.panData.pct),
                f: e.n(a.colorClass),
                g: e.t(a.panData.time.slice(11, 16)),
              }
            : {},
          { h: a.isLite ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-48697cbb"],
  ]);
wx.createComponent(t);
