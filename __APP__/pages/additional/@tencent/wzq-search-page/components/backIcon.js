require("../../../../../@babel/runtime/helpers/Arrayincludes");
var o = require("../../../../../common/vendor.js"),
  e = o.defineComponent({
    props: {},
    emits: ["goHome", "goBack"],
    setup: function () {
      var e = o.ref(!1),
        n = o.ref(!1),
        t = o.ref(0),
        a = function () {
          var a = o.wx$1.getMenuButtonBoundingClientRect().top,
            r = void 0 === a ? 0 : a;
          t.value = r;
          var c = getApp().globalData.systemInfo || {},
            s = c.platform,
            u = c.SDKVersion,
            p = o.gte(u, "3.6.1");
          (["ios", "android", "devtools"].includes(s) || p) && (n.value = !0),
            getCurrentPages().length <= 1 && (e.value = !0);
        };
      return (
        o.onMounted(function () {
          a();
        }),
        {
          safeTop: t,
          showHome: e,
          showTopIcon: n,
          goHome: function () {
            o.wx$1.switchTab({ url: "/pages/index/index" });
          },
          goBack: function () {
            o.wx$1.navigateBack();
          },
          getSafeArea: a,
        }
      );
    },
  }),
  n = o._export_sfc(e, [
    [
      "render",
      function (e, n, t, a, r, c) {
        return o.e(
          { a: e.showHome && e.showTopIcon },
          e.showHome && e.showTopIcon
            ? {
                b: "".concat(e.safeTop, "px"),
                c: o.o(function () {
                  return e.goHome && e.goHome.apply(e, arguments);
                }, 3017),
              }
            : {},
          { d: !e.showHome && e.showTopIcon },
          !e.showHome && e.showTopIcon
            ? {
                e: "".concat(e.safeTop, "px"),
                f: o.o(function () {
                  return e.goBack && e.goBack.apply(e, arguments);
                }, 3018),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-5b246434"],
  ]);
wx.createComponent(n);
