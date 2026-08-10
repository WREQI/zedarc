require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  t = require("../../node-modules/@tencent/st-tools/dist/index.js"),
  n = e.defineComponent({
    name: "BuyIndexNavBar",
    components: {
      Navigation: function () {
        return "../../components/Navigation.js";
      },
    },
    props: {
      title: { type: String, default: "买指数" },
      opacity: { type: Number, default: 1 },
      appTitleVisible: { type: Boolean, default: !1 },
    },
    emits: ["back", "layout"],
    setup: function (n, i) {
      var a = i.emit,
        o = ["mpwzq", "mpweapp"].includes("mpweapp"),
        l = ["mpwzq", "wzqlight"].includes("mpweapp"),
        u = !1;
      if (!o && "undefined" != typeof navigator) {
        var r = t.dist.detect(navigator.userAgent).env.IS_ZXG;
        u = r;
      }
      var c = e.ref(0),
        d = e.ref(88),
        p = e.ref(null),
        s = e.computed(function () {
          return {
            opacity: n.opacity,
            height: "".concat(c.value + d.value, "px"),
          };
        }),
        v = e.computed(function () {
          return { height: "".concat(c.value, "px") };
        }),
        f = e.computed(function () {
          return { height: "".concat(d.value, "px") };
        }),
        g = e.computed(function () {
          return { top: "".concat(c.value, "px") };
        }),
        m = e.computed(function () {
          return (function () {
            if (o) {
              var t = e.StockBridge.getStorage("user/skin");
              return ("dark" === t || "black" === t) && !l;
            }
            if ("undefined" == typeof document) return !1;
            var n = document.body.getAttribute("data-theme") || "light";
            return "dark" === n || "black" === n;
          })()
            ? "https://st.gtimg.com/design/eab06029a363028f7b19d1e4aeb5f12c.png"
            : "https://st.gtimg.com/design/2de309bd00716133dd871f1b24307783.png";
        });
      function y() {
        a("layout", { safeTop: c.value, navBarHeight: d.value });
      }
      var h = e.computed(function () {
        return (
          "undefined" != typeof window &&
          window.history &&
          window.history.length > 1
        );
      });
      return (
        e.onMounted(function () {
          !(function () {
            var t, n, i;
            if (u)
              e.nextTick$1(function () {
                var e,
                  t = p.value,
                  n = (null == t ? void 0 : t.$el) || t,
                  i =
                    null == (e = null == n ? void 0 : n.getBoundingClientRect)
                      ? void 0
                      : e.call(n);
                (c.value = 0),
                  (d.value = (null == i ? void 0 : i.height) || 0),
                  y();
              });
            else if (o) {
              var a = void 0 !== e.wx$1 ? e.wx$1 : null,
                l =
                  (null == (t = null == a ? void 0 : a.getWindowInfo)
                    ? void 0
                    : t.call(a)) ||
                  (null == (n = null == a ? void 0 : a.getSystemInfoSync)
                    ? void 0
                    : n.call(a)) ||
                  {},
                r = l.statusBarHeight,
                s = void 0 === r ? 0 : r,
                v = l.safeArea,
                f = void 0 === v ? {} : v,
                g =
                  null ==
                  (i = null == a ? void 0 : a.getMenuButtonBoundingClientRect)
                    ? void 0
                    : i.call(a);
              (c.value = Math.max((null == f ? void 0 : f.top) || 0, s)),
                (d.value = (null == g ? void 0 : g.bottom)
                  ? g.bottom - c.value + 8
                  : 88),
                y();
            }
          })();
        }),
        {
          isMP: o,
          isAPP: u,
          appNavigationRef: p,
          canAppRouteBack: h,
          titleLayerStyle: s,
          safeAreaStyle: v,
          contentStyle: f,
          backStyle: g,
          backSrc: m,
          handleBack: function () {
            a("back");
          },
        }
      );
    },
  });
Array || e.resolveComponent("Navigation")();
var i = e._export_sfc(n, [
  [
    "render",
    function (t, n, i, a, o, l) {
      return e.e(
        { a: t.isAPP },
        t.isAPP
          ? {
              b: e.sr("appNavigationRef", "029c1939-0"),
              c: e.o(t.handleBack, 2701),
              d: e.p({
                title: t.title,
                fixed: t.appTitleVisible,
                "show-first": t.appTitleVisible,
                "custom-back": t.canAppRouteBack,
              }),
            }
          : t.isMP
          ? {
              f: e.s(t.safeAreaStyle),
              g: e.t(t.title),
              h: e.s(t.contentStyle),
              i: e.s(t.titleLayerStyle),
              j: e.s(t.backStyle),
              k: t.backSrc,
              l: e.o(function () {
                return t.handleBack && t.handleBack.apply(t, arguments);
              }, 2702),
            }
          : {},
        { e: t.isMP }
      );
    },
  ],
  ["__scopeId", "data-v-029c1939"],
]);
wx.createComponent(i);
