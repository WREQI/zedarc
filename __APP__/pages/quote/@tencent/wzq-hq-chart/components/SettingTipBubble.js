var e = require("../../../../../common/vendor.js"),
  t = ["功能上新！券商分析，看黄/蓝柱", "一眼识别涨跌趋势"],
  n = e.defineComponent({
    name: "SettingTipBubble",
    props: {
      storageKey: { type: String, default: "hq_setting_ai_volatile_tip_shown" },
      lines: {
        type: Array,
        default: function () {
          return t;
        },
      },
      exposureEvent: {
        type: String,
        default: "hq.detail.chart.aiVolatile.bubble.exposure",
      },
      closeEvent: {
        type: String,
        default: "hq.detail.chart.aiVolatile.bubble.close",
      },
    },
    emits: ["close"],
    setup: function (n, o) {
      var r = o.emit,
        i = e.ref(!1),
        l = null,
        u = e.computed(function () {
          return Array.isArray(n.lines) && n.lines.length ? n.lines : t;
        }),
        a = function () {
          l && (clearTimeout(l), (l = null));
        },
        s = function () {
          i.value &&
            (a(),
            (i.value = !1),
            e.StockBridge.setStorage(n.storageKey, !0),
            n.closeEvent && e.StockBridge.report(n.closeEvent),
            r("close"));
        };
      return (
        e.onMounted(function () {
          e.StockBridge.getStorage(n.storageKey) ||
            ((i.value = !0),
            n.exposureEvent && e.StockBridge.report(n.exposureEvent),
            (l = setTimeout(function () {
              s();
            }, 5e3)));
        }),
        e.onBeforeUnmount(function () {
          a();
        }),
        { visible: i, displayLines: u, handleClose: s }
      );
    },
  }),
  o = e._export_sfc(n, [
    [
      "render",
      function (t, n, o, r, i, l) {
        return e.e(
          { a: t.visible },
          t.visible
            ? {
                b: e.f(t.displayLines, function (t, n, o) {
                  return { a: e.t(t), b: n };
                }),
                c: e.o(function () {
                  return t.handleClose && t.handleClose.apply(t, arguments);
                }, 6040),
                d: e.o(function () {}, 6041),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-41402d6a"],
  ]);
wx.createComponent(o);
