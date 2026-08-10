var e = require("../../../../../../common/vendor.js"),
  n = {
    props: {
      selectorConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      currentIndex: { type: Number, default: 0 },
    },
    setup: function (n, t) {
      var o = t.emit,
        r = e.ref({ show: !1 }),
        c = function () {
          r.value.show = !1;
        },
        u = e.ref(null);
      return {
        popup: r,
        maskClick: c,
        showSelector: function (e) {
          r.value.show = !0;
        },
        onItemClick: function (e) {
          o("onSelectChange", e), c();
        },
        skin: u,
      };
    },
  },
  t = e._export_sfc(n, [
    [
      "render",
      function (n, t, o, r, c, u) {
        return {
          a: e.f(o.selectorConfig, function (n, t, c) {
            return {
              a: e.t(n.name),
              b: e.n(o.currentIndex === t ? "item-selected" : ""),
              c: "sort-selector-".concat(t),
              d: e.o(
                function (e) {
                  return r.onItemClick(t);
                },
                2538,
                "sort-selector-".concat(t)
              ),
            };
          }),
          b: r.popup.show,
          c: e.n("dark" === r.skin ? "skin-dark" : ""),
          d: e.o(function () {}, 2539),
          e: e.o(function () {
            return r.maskClick && r.maskClick.apply(r, arguments);
          }, 2540),
        };
      },
    ],
    ["__scopeId", "data-v-7e088345"],
  ]);
wx.createComponent(t);
