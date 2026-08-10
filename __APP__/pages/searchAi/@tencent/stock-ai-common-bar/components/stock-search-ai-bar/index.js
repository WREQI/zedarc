var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  t = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = require("../../../../../../common/vendor.js"),
  s = require("../../hooks/zxg/useAiCommonBarEntry.js"),
  u = l.defineComponent({
    name: "SearchAiBar",
    components: {
      scrollboard: function () {
        return "./scrollboard.js";
      },
    },
    props: {
      scene: { type: String, default: "" },
      contentId: { type: String, default: "" },
      reportPrefix: { type: String, default: "" },
      reportInfo: { type: Object, default: null },
      componentType: { type: String, default: "common" },
      material: { type: Object, default: null },
      preData: { type: Object, default: null },
    },
    setup: function (r, u) {
      var p = u.emit,
        y = l.getCurrentInstance().proxy || l.getCurrentInstance(),
        f = {},
        b = l._default().env.IS_ZXG;
      try {
        f =
          b && shy
            ? s.useSearchBar(r, { emit: p }, y)
            : s.useSearchBar$1(r, { emit: p }, y);
      } catch (e) {
        f = s.useSearchBar$1(r, { emit: p }, y);
      }
      var h,
        d = l.computed(function () {
          return "xiaobao" === r.scene;
        });
      return (
        (h = (function (r, t) {
          for (var n in t || (t = {})) i.call(t, n) && c(r, n, t[n]);
          if (o) {
            var l,
              s = e(o(t));
            try {
              for (s.s(); !(l = s.n()).done; ) {
                n = l.value;
                a.call(t, n) && c(r, n, t[n]);
              }
            } catch (e) {
              s.e(e);
            } finally {
              s.f();
            }
          }
          return r;
        })({}, f)),
        t(h, n({ isAiXiaobaoScene: d }))
      );
    },
  });
Array || l.resolveComponent("scrollboard")();
var p = l._export_sfc(u, [
  [
    "render",
    function (e, r, t, n, o, i) {
      return l.e(
        { a: e.showSearchBarObj || e.showSearchBarList },
        e.showSearchBarObj || e.showSearchBarList
          ? l.e(
              {
                b: l.o(function (r) {
                  return e.isAiXiaobaoScene
                    ? e.onClickAiIcon()
                    : e.onClickEntireEntry();
                }, 2815),
                c: e.isSingleEntry,
              },
              e.isSingleEntry
                ? {
                    d: l.t(e.showSearchBarObj.title),
                    e: l.o(function (r) {
                      return e.onClickAiDialog();
                    }, 2816),
                  }
                : 2 === e.displayType
                ? {
                    g: l.o(e.onScrollShowAiDialog, 2817),
                    h: l.p({ items: e.showSearchBarList }),
                  }
                : {},
              {
                f: 2 === e.displayType,
                i: l.o(function (r) {
                  return e.onClickEntireEntry();
                }, 2818),
                j: e.isWzq || e.isWzqLight,
              },
              (e.isWzq || e.isWzqLight, {}),
              {
                k: l.n(e.componentType),
                l: l.o(function (r) {
                  return e.isAiXiaobaoScene ? void 0 : e.onClickEntireEntry();
                }, 2819),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-61b7c22b"],
]);
wx.createComponent(p);
