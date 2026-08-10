var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "bar-swiper",
    props: {
      list: {
        type: Array,
        default: function () {
          return [];
        },
      },
      skin: { type: String, default: "white" },
      isLite: { type: Boolean, default: !0 },
    },
    methods: {
      changeBulletItem: function (e) {
        var t,
          n =
            (null == (t = null == e ? void 0 : e.detail)
              ? void 0
              : t.current) || 0;
        this.$emit("change", n);
      },
      handleClick: function (e) {
        this.$emit("click", e);
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, i, c, r, a) {
        return {
          a: e.f(i.list, function (t, n, c) {
            return e.e(
              { a: e.t(t.text), b: t.icon },
              t.icon ? { c: e.n(i.isLite ? "" : "blue") } : {},
              {
                d: "bar-item-".concat(n),
                e: e.o(
                  function (e) {
                    return a.handleClick(n);
                  },
                  3144,
                  "bar-item-".concat(n)
                ),
              }
            );
          }),
          b: e.n(i.isLite ? "" : "blue"),
          c: e.o(function () {
            return a.changeBulletItem && a.changeBulletItem.apply(a, arguments);
          }, 3145),
        };
      },
    ],
    ["__scopeId", "data-v-482c950e"],
  ]);
wx.createComponent(n);
