var t = require("../../../../../../common/vendor.js"),
  a = {
    inject: ["hqBridge"],
    components: {
      Tabs: function () {
        return "./Tab/Tabbar.js";
      },
      Tab: function () {
        return "./Tab/Tab.js";
      },
    },
    props: { categoryTab: { type: Number, default: 1 } },
    data: function () {
      return {
        categoryList: ["待申购", "可申购", "待上市", "已上市"],
        env: this.hqBridge.ENV,
      };
    },
    mounted: function () {
      var t = this;
      this.categoryList.forEach(function (a, e) {
        t.$refs["tabItem".concat(e)][0].changeTab(t.categoryTab);
      });
    },
    methods: {
      switchTab: function (t) {
        var a = this;
        this.categoryTab !== t &&
          (this.categoryList.forEach(function (e, n) {
            a.$refs["tabItem".concat(n)][0].changeTab(t);
          }),
          this.$emit("updateCategoryTab", t),
          this.hqBridge.report(
            "hq.daxin_calendar.hstab.".concat(
              [
                "pending_subscription",
                "available_subscription",
                "pending_go_public",
                "already_go_public",
              ][t],
              "_tab_click"
            )
          ));
      },
    },
  };
Array || (t.resolveComponent("Tab") + t.resolveComponent("Tabs"))();
var e = t._export_sfc(a, [
  [
    "render",
    function (a, e, n, r, o, c) {
      return {
        a: t.f(o.categoryList, function (a, e, n) {
          return {
            a: t.t(a),
            b: t.sr("tabItem" + e, "bbd6294f-1-" + n + ",bbd6294f-0", { f: 1 }),
            c: "tabItem" + e,
            d: e,
            e: "bbd6294f-1-" + n + ",bbd6294f-0",
            f: t.p({ name: e }),
          };
        }),
        b: t.o(c.switchTab, 3047),
        c: t.p({ index: n.categoryTab, indicator: !1 }),
      };
    },
  ],
  ["__scopeId", "data-v-bbd6294f"],
]);
wx.createComponent(e);
