var e = require("../../../../../common/vendor.js"),
  o = e.defineComponent({
    components: {
      backIcon: function () {
        return "./backIcon.js";
      },
    },
    props: {
      scrollTop: { type: Number, default: 0 },
      scrollHeight: { type: Number, default: 0 },
      title: { type: String, default: "热搜" },
    },
    setup: function (o) {
      var t = e.ref(0),
        n = e.computed(function () {
          return o.scrollTop > 30
            ? o.scrollTop <= o.scrollHeight
              ? o.scrollTop / o.scrollHeight
              : 1
            : 0;
        }),
        r = function () {
          var o = e.wx$1.getMenuButtonBoundingClientRect().top,
            n = void 0 === o ? 0 : o;
          t.value = n;
        };
      return (
        e.onMounted(function () {
          r();
        }),
        { safeTop: t, headerAlpha: n, getSafeArea: r }
      );
    },
  });
Array || e.resolveComponent("back-icon")();
var t = e._export_sfc(o, [
  [
    "render",
    function (o, t, n, r, c, a) {
      return {
        a: "".concat(o.safeTop, "px"),
        b: e.t(o.title),
        c: 1.5 * o.headerAlpha,
      };
    },
  ],
  ["__scopeId", "data-v-f36e427a"],
]);
wx.createComponent(t);
