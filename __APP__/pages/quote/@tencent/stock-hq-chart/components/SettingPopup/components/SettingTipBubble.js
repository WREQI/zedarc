require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../common/vendor.js"),
  n = e.defineComponent({
    name: "SettingTipBubble",
    props: {
      skin: { type: String, default: "white" },
      storageKey: { type: String, required: !0 },
      lines: {
        type: Array,
        default: function () {
          return [];
        },
      },
      exposureEvent: { type: String, default: "" },
      closeEvent: { type: String, default: "" },
    },
    emits: ["close"],
    setup: function (n, t) {
      var r = t.emit,
        o = e.ref(!1),
        i = null,
        u = e.computed(function () {
          return ["black", "dark"].includes(n.skin);
        }),
        l = e.computed(function () {
          return Array.isArray(n.lines) && n.lines.length ? n.lines : [];
        }),
        s = function () {
          i && (clearTimeout(i), (i = null));
        },
        a = function () {
          o.value &&
            (s(),
            (o.value = !1),
            e.StockBridge.setStorage(n.storageKey, !0),
            n.closeEvent && e.StockBridge.report(n.closeEvent),
            r("close"));
        };
      return (
        e.onMounted(function () {
          l.value.length &&
            (e.StockBridge.getStorage(n.storageKey) ||
              ((o.value = !0),
              n.exposureEvent && e.StockBridge.report(n.exposureEvent),
              (i = setTimeout(function () {
                a();
              }, 5e3))));
        }),
        e.onBeforeUnmount(function () {
          s();
        }),
        { visible: o, isBlack: u, displayLines: l, handleClose: a }
      );
    },
  }),
  t = e._export_sfc(n, [
    [
      "render",
      function (n, t, r, o, i, u) {
        return e.e(
          { a: n.visible },
          n.visible
            ? {
                b: e.f(n.displayLines, function (n, t, r) {
                  return { a: e.t(n), b: t };
                }),
                c: e.o(function () {
                  return n.handleClose && n.handleClose.apply(n, arguments);
                }, 3685),
                d: n.isBlack ? 1 : "",
                e: e.o(function () {}, 3686),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-2f10bf77"],
  ]);
wx.createComponent(t);
