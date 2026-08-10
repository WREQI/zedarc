require("../../../app.js");
var e = require("../../../common/vendor.js"),
  n = require("../../../model/debt/useDebtAutoOrderTimeGuide.js"),
  o = e.defineComponent({
    name: "DebtAutoOrderTimeGuide",
    components: {
      BubbleTip: function () {
        return "../../../components/BubbleTip/BubbleTip.js";
      },
    },
    props: { enabled: { type: Boolean, default: !1 } },
    emits: ["close"],
    setup: function (o, t) {
      var i = t.emit,
        r = n.useDebtAutoOrderTimeGuide(),
        u = r.visible,
        s = r.tryShow,
        l = r.close,
        c = null;
      function b() {
        c && (clearTimeout(c), (c = null));
      }
      function a() {
        b(), l(), i("close");
      }
      return (
        e.watch(
          function () {
            return o.enabled;
          },
          function (n) {
            b(),
              n
                ? e.nextTick$1(function () {
                    s() &&
                      (b(),
                      (c = setTimeout(function () {
                        a();
                      }, 3e3)));
                  })
                : l();
          },
          { immediate: !0 }
        ),
        e.onBeforeUnmount(function () {
          b();
        }),
        { visible: u, handleClose: a }
      );
    },
  });
Array || e.resolveComponent("BubbleTip")(), Math;
var t = e._export_sfc(o, [
  [
    "render",
    function (n, o, t, i, r, u) {
      return e.e(
        { a: n.visible && n.enabled },
        n.visible && n.enabled
          ? {
              b: e.o(n.handleClose),
              c: e.p({
                "is-show": !0,
                "arrow-position": "bottom-right",
                "show-close-btn": !0,
              }),
              d: e.o(function () {}),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-fee49b0f"],
]);
wx.createComponent(t);
