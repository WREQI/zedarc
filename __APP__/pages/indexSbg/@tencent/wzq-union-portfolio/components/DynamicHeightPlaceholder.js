var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  i = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  a = require("../../../../../common/vendor.js"),
  c = require("../../stock-mini-mins/api/StockMiniChartApiV2.js"),
  p = a.defineComponent({
    name: "DynamicHeightPlaceholder",
    computed: (function (r, a) {
      for (var c in a || (a = {})) n.call(a, c) && i(r, c, a[c]);
      if (t) {
        var p,
          l = e(t(a));
        try {
          for (l.s(); !(p = l.n()).done; ) {
            c = p.value;
            o.call(a, c) && i(r, c, a[c]);
          }
        } catch (e) {
          l.e(e);
        } finally {
          l.f();
        }
      }
      return r;
    })({}, a.mapState(c.useViewStore, ["mpHideTitle"])),
  }),
  l = a._export_sfc(p, [
    [
      "render",
      function (e, r, t, n, o, i) {
        return { a: a.n(e.mpHideTitle ? "" : "show-bar") };
      },
    ],
    ["__scopeId", "data-v-ff8754cc"],
  ]);
wx.createComponent(l);
