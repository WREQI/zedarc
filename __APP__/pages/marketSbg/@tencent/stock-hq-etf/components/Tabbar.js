var e = require("../node-modules/@tencent/st-tools/dist/index.js"),
  t = require("../../../../../common/vendor.js"),
  n = {
    inject: {
      hqBridge: {},
      isZxgMiniApp: { default: !1 },
      isLiteWeb: { default: !1 },
    },
    props: {
      rankConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      rankIndex: { type: Number, default: 0 },
      alignLeft: { type: Boolean, default: !1 },
    },
    data: function () {
      var t = !1;
      navigator && (t = e.dist.detect(navigator.userAgent).env.IS_ZXG_IMAC);
      return { isWzqMp: !1, isLiteShell: !1, IS_ZXG_IMAC: t };
    },
    components: {
      Tabs: function () {
        return "../../../../detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.js";
      },
      Tab: function () {
        return "../../../../detailSbg/@tencent/stock-hq-core/components/Tab/Tab.js";
      },
    },
    computed: {
      isPro: function () {
        return "wzq" === this.hqBridge.ENV || !0;
      },
      isMp: function () {
        return this.isZxgMiniApp || this.isLite;
      },
    },
    methods: {
      switchTab: function (e) {
        this.$emit("switchTab", e);
      },
    },
  };
Array || (t.resolveComponent("tab") + t.resolveComponent("tabs"))();
var a = t._export_sfc(n, [
  [
    "render",
    function (e, n, a, i, r, o) {
      return {
        a: t.f(a.rankConfig, function (e, n, i) {
          return {
            a: t.t(e.name),
            b: "tab-".concat(n),
            c: n,
            d: t.n(
              o.isLiteWeb || r.isLiteShell
                ? a.rankIndex === n
                  ? "select-tab-lite"
                  : ""
                : a.rankIndex === n
                ? "select-tab"
                : ""
            ),
            e: "48f3955d-1-" + i + ",48f3955d-0",
            f: t.p({ id: "tab-".concat(n), name: n, isPc: r.IS_ZXG_IMAC }),
          };
        }),
        b: t.n(a.alignLeft ? "tab--align-left" : ""),
        c: t.n(o.isPro ? "tabbar-wrapper-pro" : ""),
        d: t.n(a.alignLeft ? "tabbar-wrapper--align-left" : ""),
        e: t.o(o.switchTab, 4022),
        f: t.p({ index: a.rankIndex, indicator: !1 }),
      };
    },
  ],
  ["__scopeId", "data-v-48f3955d"],
]);
wx.createComponent(a);
