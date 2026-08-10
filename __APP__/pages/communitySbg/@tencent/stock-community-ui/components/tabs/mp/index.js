var t = require("../../../../../../../common/vendor.js"),
  e = {
    components: {
      redDot: function () {
        return "../redDot.js";
      },
    },
    inject: {
      hqBridge: {
        default: function () {
          return {};
        },
      },
      stockBridge: {
        default: function () {
          return {};
        },
      },
    },
    props: {
      tabConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      curIndex: { type: Number, default: 0 },
      showRedDot: { type: Boolean, default: !1 },
    },
    data: function () {
      return { currTabBarIndex: 0 };
    },
    computed: {
      colorClass: function () {
        return "zxg-color";
      },
    },
    methods: {
      switchTab: t.debounce(function (t) {
        this.value !== t && this.$emit("switchTab", t);
      }, 200),
    },
  };
Array || t.resolveComponent("redDot")();
var r = t._export_sfc(e, [
  [
    "render",
    function (e, r, n, o, c, u) {
      return {
        a: t.f(n.tabConfig, function (e, r, o) {
          return t.e(
            { a: t.t(e.label), b: n.showRedDot && n.curIndex !== r && 1 === r },
            n.showRedDot && n.curIndex !== r && 1 === r
              ? { c: "02345cc2-0-" + o }
              : {},
            {
              d: "tab-".concat(r),
              e: r,
              f: t.n(n.curIndex === r ? ["select-tab", u.colorClass] : ""),
              g: t.o(
                function (t) {
                  return u.switchTab(r);
                },
                4218,
                r
              ),
            }
          );
        }),
        b: "tab-".concat(c.currTabBarIndex),
      };
    },
  ],
  ["__scopeId", "data-v-02345cc2"],
]);
wx.createComponent(r);
