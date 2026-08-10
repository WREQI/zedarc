require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  o = e.defineComponent({
    emits: ["getTopBarHeight"],
    setup: function (o, n) {
      var t = n.emit,
        a = e.ref(!1),
        c = e.ref(!1),
        r = e.ref(0),
        s = e.inject("skin"),
        i = e.computed(function () {
          return "dark" === s
            ? "https://st.gtimg.com/design/904532cd01ebe4824228da2fe2ab6734.png"
            : "https://st.gtimg.com/design/b1561109764528086768175f9374b493.png";
        }),
        p = e.computed(function () {
          return "dark" === s
            ? "https://st.gtimg.com/design/05fd6b2b5b25deaf25a314e5e8754410.png"
            : "https://st.gtimg.com/design/4fc49b44a693b62af721734253401c8d.png";
        });
      return (
        (function () {
          !(function () {
            var o =
                (e.wx$1.getWindowInfo && e.wx$1.getWindowInfo()) ||
                e.wx$1.getSystemInfoSync(),
              n = o.statusBarHeight,
              t = void 0 === n ? 0 : n,
              a = o.safeArea,
              c = void 0 === a ? {} : a;
            r.value = Math.max(c.top, t);
          })();
          var o = getApp().globalData.systemInfo || {},
            n = o.platform,
            t = o.SDKVersion,
            s = e.gte(t, "3.6.1");
          (["ios", "android", "devtools"].includes(n) || s) && (c.value = !0),
            getCurrentPages().length <= 1 && (a.value = !0);
        })(),
        {
          safeTop: r,
          showHome: a,
          showTopIcon: c,
          goBack: function () {
            e.wx$1.navigateBack();
          },
          goHome: function () {
            e.wx$1.switchTab({ url: "/pages/index/index" });
          },
          clearAll: function () {
            t("clearAll");
          },
          backHomeIcon: i,
          backIcon: p,
        }
      );
    },
  }),
  n = e._export_sfc(o, [
    [
      "render",
      function (o, n, t, a, c, r) {
        return e.e(
          { a: "".concat(o.safeTop, "px"), b: o.showHome && o.showTopIcon },
          o.showHome && o.showTopIcon
            ? {
                c: o.backHomeIcon,
                d: e.o(function () {
                  return o.goHome && o.goHome.apply(o, arguments);
                }, 3059),
              }
            : {},
          { e: !o.showHome && o.showTopIcon },
          !o.showHome && o.showTopIcon
            ? {
                f: o.backIcon,
                g: e.o(function () {
                  return o.goBack && o.goBack.apply(o, arguments);
                }, 3060),
              }
            : {},
          {
            h: e.o(function () {
              return o.clearAll && o.clearAll.apply(o, arguments);
            }, 3061),
            i: "".concat(o.safeTop, "px"),
          }
        );
      },
    ],
    ["__scopeId", "data-v-ea205448"],
  ]);
wx.createComponent(n);
