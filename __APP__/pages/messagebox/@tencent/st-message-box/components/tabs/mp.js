var e = require("../../../../../../common/vendor.js"),
  r = {
    components: {
      redNum: function () {
        return "./red-num.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      tabConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      curIndex: { type: Number, default: 0 },
      showMore: { type: Boolean, default: !0 },
    },
    data: function () {
      return { currTabBarIndex: 0 };
    },
    methods: {
      switchTab: e.debounce(function (e) {
        this.value !== e && this.$emit("switchTab", e);
      }, 200),
      viewMore: function () {
        this.$emit("viewMore");
      },
    },
  };
Array || e.resolveComponent("redNum")();
var t = e._export_sfc(r, [
  [
    "render",
    function (r, t, n, o, u, a) {
      return e.e(
        {
          a: e.f(n.tabConfig, function (r, t, o) {
            return {
              a: e.t(r.name),
              b: "3e57e40d-0-" + o,
              c: e.p({ "red-num": r.redNum }),
              d: "tab-".concat(t),
              e: t,
              f: e.n(n.curIndex === t ? "select-tab" : ""),
              g: e.o(
                function (e) {
                  return a.switchTab(t);
                },
                2333,
                t
              ),
            };
          }),
          b: "tab-".concat(u.currTabBarIndex),
          c: n.showMore,
        },
        n.showMore
          ? {
              d: e.o(function () {
                return a.viewMore && a.viewMore.apply(a, arguments);
              }, 2334),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-3e57e40d"],
]);
wx.createComponent(t);
