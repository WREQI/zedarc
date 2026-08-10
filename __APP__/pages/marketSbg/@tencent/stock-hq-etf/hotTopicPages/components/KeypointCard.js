var e = require("../../../../../../common/vendor.js"),
  t = e.defineComponent({
    name: "KeypointCard",
    props: {
      point: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function () {
      var t,
        n =
          (null == (t = e.getCurrentInstance()) ? void 0 : t.proxy) ||
          e.getCurrentInstance();
      e.onMounted(function () {
        e.StockBridge.mtaReport({
          busi: "hq",
          eventName: "highlight_module_brow",
          exposure: { selector: ".keypoint-card", context: n },
        });
      });
    },
  }),
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, o, r, i, c) {
        return e.e(
          { a: t.point.news },
          t.point.news ? { b: e.t(t.point.news) } : {},
          { c: t.point.affect },
          t.point.affect ? { d: e.t(t.point.affect) } : {}
        );
      },
    ],
    ["__scopeId", "data-v-fbbd98f5"],
  ]);
wx.createComponent(n);
