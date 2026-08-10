var e = require("../../../../../common/vendor.js"),
  n = require("../utils/util.js"),
  t = e.defineComponent({
    name: "CloseMonitoringPop",
    props: { enableTheme: { type: Boolean, default: !1 } },
    emits: ["cancel", "confirm"],
    setup: function (t, i) {
      var o = i.emit,
        r = e.ref(!0),
        c = n.getTheme(),
        l = e.computed(function () {
          return t.enableTheme ? c : "white";
        }),
        a = function () {
          r.value = !1;
        },
        u = function () {
          a(), o("cancel");
        };
      return {
        visible: r,
        lite: !1,
        currentTheme: l,
        show: function () {
          r.value = !0;
        },
        hide: a,
        handleCancel: u,
        handleConfirm: function () {
          a(), o("confirm");
        },
        handleMaskClick: function () {
          u();
        },
      };
    },
  }),
  i = e._export_sfc(t, [
    [
      "render",
      function (n, t, i, o, r, c) {
        return e.e(
          { a: n.visible },
          n.visible
            ? {
                b: e.o(function () {
                  return n.handleCancel && n.handleCancel.apply(n, arguments);
                }, 2364),
                c: e.n(n.lite ? "lite-style" : ""),
                d: e.o(function () {
                  return n.handleConfirm && n.handleConfirm.apply(n, arguments);
                }, 2365),
                e: e.n("theme-".concat(n.currentTheme)),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-f4b9004b"],
  ]);
wx.createComponent(i);
