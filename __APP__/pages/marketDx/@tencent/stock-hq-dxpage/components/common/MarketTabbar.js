var e = require("../../../../../../common/vendor.js"),
  t = {
    inject: ["hqBridge"],
    components: {
      Tabs: function () {
        return "./Tab/Tabbar.js";
      },
      Tab: function () {
        return "./Tab/Tab.js";
      },
    },
    props: {
      marketTab: { type: Number, default: 0 },
      isCeiling: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        marketList: ["沪深", "港股", "美股"],
        isShow: !0,
        isInitialState: !0,
        env: this.hqBridge.ENV,
      };
    },
    mounted: function () {
      var e = this;
      this.marketList.forEach(function (t, a) {
        e.$refs["marketTabItem".concat(a)][0].changeTab(0);
      });
    },
    methods: {
      switchTab: function (e) {
        var t = this;
        this.marketTab !== e &&
          (this.$emit("updateMarketTab", e),
          this.marketList.forEach(function (a, i) {
            t.$refs["marketTabItem".concat(i)][0].changeTab(e);
          }),
          this.hqBridge.report(
            "hq.xingurili.switch_".concat(["hs", "hk", "us"][e])
          ));
      },
      navigateToDaxinStrategy: function () {
        var e = "https://gu.qq.com/resource/newTeach/?skin=white&tag=gu";
        if ("wzq" === this.env) location.href = e;
        else if ("mp" === this.env)
          this.hqBridge.routeTo({
            path: "/pages/marketDx/DxIntroducePage",
            query: { tag: "gu" },
          });
        else if ("app" === this.env) {
          var t = encodeURIComponent(
            JSON.stringify({ p_url: e, p_showNav: !0 })
          );
          this.hqBridge.routeTo({
            url: "qqstock://webbrowser?info=".concat(t),
          });
        }
        this.hqBridge.report("hq.xingurili.click_daxingonglve");
      },
    },
  };
Array || (e.resolveComponent("Tab") + e.resolveComponent("Tabs"))();
var a = e._export_sfc(t, [
  [
    "render",
    function (t, a, i, n, r, o) {
      return {
        a: e.f(r.marketList, function (t, a, i) {
          return {
            a: e.t(t),
            b: e.sr("marketTabItem" + a, "b1f8255e-1-" + i + ",b1f8255e-0", {
              f: 1,
            }),
            c: "marketTabItem" + a,
            d: a,
            e: "b1f8255e-1-" + i + ",b1f8255e-0",
            f: e.p({ name: a, isTitle: !0 }),
          };
        }),
        b: e.o(o.switchTab, 2151),
        c: e.p({ index: i.marketTab, indicator: !1 }),
        d: e.o(function () {
          return (
            o.navigateToDaxinStrategy &&
            o.navigateToDaxinStrategy.apply(o, arguments)
          );
        }, 2152),
        e: e.n(i.isCeiling ? "market-container-ceiling" : ""),
      };
    },
  ],
  ["__scopeId", "data-v-b1f8255e"],
]);
wx.createComponent(a);
