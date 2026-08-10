var t = require("../../../common/vendor.js"),
  e = {
    props: {
      tabs: {
        type: Array,
        default: function () {
          return [];
        },
      },
      current: { type: [Number, String], default: 0 },
    },
    setup: function (e, r) {
      var n = r.emit;
      return {
        switchTab: t.debounce(function (t) {
          e.current !== t && n("change", t);
        }, 200),
      };
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, n, c, u, a) {
        return {
          a: t.f(n.tabs, function (e, r, u) {
            return {
              a: t.t(e.name),
              b: r,
              c: t.n(n.current === r ? "select-tab" : ""),
              d: t.o(
                function (t) {
                  return c.switchTab(r);
                },
                666,
                r
              ),
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-16c5db65"],
  ]);
wx.createComponent(r);
