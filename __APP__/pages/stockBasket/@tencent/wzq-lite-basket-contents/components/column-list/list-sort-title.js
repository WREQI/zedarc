var e = require("../../../../../../common/vendor.js"),
  t = {
    props: {
      selectorConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      currentIndex: { type: Number, default: 0 },
      onScroll: { type: Boolean, default: !1 },
    },
    setup: function (t, o) {
      var r = o.emit;
      return {
        sortTitle: e.computed(function () {
          return t.selectorConfig && t.selectorConfig.length > 0
            ? t.selectorConfig[t.currentIndex].name
            : null;
        }),
        showPlate: function (e) {
          r("showPlate", e);
        },
      };
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, r, n, l, c) {
        return e.e(
          { a: n.sortTitle },
          n.sortTitle
            ? {
                b: e.t(n.sortTitle),
                c: e.o(function () {
                  return n.showPlate && n.showPlate.apply(n, arguments);
                }, 2537),
              }
            : {},
          { d: e.n(r.onScroll ? "scroll-bg" : "") }
        );
      },
    ],
    ["__scopeId", "data-v-b6870a0a"],
  ]);
wx.createComponent(o);
