require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  t = require("../../node-modules/@tencent/st-tools/dist/index.js"),
  n = e.defineComponent({
    name: "HotTopicNavBar",
    components: {
      Navigation: function () {
        return "../../components/Navigation.js";
      },
    },
    props: {
      title: { type: String, default: "" },
      opacity: { type: Number, default: 1 },
      appTitleVisible: { type: Boolean, default: !1 },
    },
    emits: ["back", "layout"],
    setup: function (n, a) {
      var i = a.emit,
        o = !1,
        u = ["mpwzq", "mpweapp"].includes("mpweapp"),
        r = ["mpwzq", "wzqlight"].includes("mpweapp");
      if (!u && "undefined" != typeof navigator) {
        var c = t.dist.detect(navigator.userAgent).env.IS_ZXG;
        o = c;
      }
      var l = e.ref(0),
        d = e.ref(44),
        p = e.ref(null),
        s = e.computed(function () {
          return {
            opacity: n.opacity,
            height: "".concat(l.value + d.value, "px"),
          };
        }),
        f = e.computed(function () {
          return { height: "".concat(l.value, "px") };
        }),
        v = e.computed(function () {
          return { height: "".concat(d.value, "px") };
        }),
        g = e.computed(function () {
          return { top: "".concat(l.value, "px") };
        }),
        m = e.computed(function () {
          return (function () {
            if (u) {
              var t = e.StockBridge.getStorage("user/skin");
              return ("dark" === t || "black" === t) && !r;
            }
            if ("undefined" == typeof document) return !1;
            var n = document.body.getAttribute("data-theme") || "light";
            return "dark" === n || "black" === n;
          })()
            ? "https://st.gtimg.com/design/eab06029a363028f7b19d1e4aeb5f12c.png"
            : "https://st.gtimg.com/design/2de309bd00716133dd871f1b24307783.png";
        });
      function y() {
        i("layout", { safeTop: l.value, navBarHeight: d.value });
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
            var t, n;
            if (o)
              e.nextTick$1(function () {
                var e,
                  t = p.value,
                  n = (null == t ? void 0 : t.$el) || t,
                  a =
                    null == (e = null == n ? void 0 : n.getBoundingClientRect)
                      ? void 0
                      : e.call(n);
                (l.value = 0),
                  (d.value = (null == a ? void 0 : a.height) || 0),
                  y();
              });
            else if (u) {
              var a =
                  (e.wx$1.getWindowInfo && e.wx$1.getWindowInfo()) ||
                  e.wx$1.getSystemInfoSync() ||
                  {},
                i = a.statusBarHeight,
                r = void 0 === i ? 0 : i,
                c = a.safeArea,
                s = void 0 === c ? {} : c,
                f =
                  null == (n = (t = e.wx$1).getMenuButtonBoundingClientRect)
                    ? void 0
                    : n.call(t);
              (l.value = Math.max((null == s ? void 0 : s.top) || 0, r)),
                (d.value = (null == f ? void 0 : f.bottom)
                  ? f.bottom - l.value + 8
                  : 44),
                y();
            }
          })();
        }),
        {
          isMP: u,
          isAPP: o,
          appNavigationRef: p,
          canAppRouteBack: h,
          titleLayerStyle: s,
          safeAreaStyle: f,
          contentStyle: v,
          backStyle: g,
          backSrc: m,
          handleBack: function () {
            i("back");
          },
        }
      );
    },
  });
Array || e.resolveComponent("Navigation")();
var a = e._export_sfc(n, [
  [
    "render",
    function (t, n, a, i, o, u) {
      return e.e(
        { a: t.isAPP },
        t.isAPP
          ? {
              b: e.sr("appNavigationRef", "ce817551-0"),
              c: e.o(t.handleBack, 2431),
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
              }, 2432),
            }
          : {},
        { e: t.isMP }
      );
    },
  ],
  ["__scopeId", "data-v-ce817551"],
]);
wx.createComponent(a);
