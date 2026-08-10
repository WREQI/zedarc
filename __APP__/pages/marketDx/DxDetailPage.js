require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../common/vendor.js"),
  t = e.useBrokerInfo().navigateToTrade,
  r = {
    components: {
      DxDetailPage: function () {
        return "./@tencent/stock-hq-dxpage/DetailIndex.js";
      },
    },
    onShareAppMessage: function () {
      return { title: "你的好友推荐你一只新股新债" };
    },
    provide: function () {
      return { hqBridge: this.hqBridge };
    },
    data: function () {
      return {
        hqBridge: new e.HQBridge(),
        userInfo: {},
        query: null,
        isReported: !1,
      };
    },
    computed: {},
    onLoad: function (e) {
      this.query = e;
    },
    created: function () {
      var t = this;
      this.hqBridge.setTitle("打新日历"),
        e.userinfo.get(function (e) {
          (t.userInfo = e), t.hqBridge.busOn("mp-purchase", t.purchaseClick);
        });
    },
    onPageScroll: function () {
      var e = this;
      this.$nextTick(function () {
        e.isReported ||
          (e.$refs.dxdetailpage && e.$refs.dxdetailpage.handleScroll(),
          (e.isReported = !0));
      });
    },
    methods: {
      purchaseClick: function () {
        var r = this.userInfo.userstate;
        [e.USERSTATE.HASACCOUNT, e.USERSTATE.HASBUNDLE].includes(r)
          ? t({ name: "NewStock" })
          : (e.wx$1.showToast({
              title: "您还没有开通股票账户，请先开通后再申购",
              icon: "none",
              duration: 3e3,
            }),
            setTimeout(function () {
              t({ name: "ApplyIndex", query: { stat_data: "" } });
            }, 1e3));
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("DxDetailPage")
  )();
var n = e._export_sfc(r, [
  [
    "render",
    function (t, r, n, o, i, a) {
      return {
        a: t.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.sr("dxdetailpage", "5932aa70-2"),
        d: e.p({ query: i.query }),
      };
    },
  ],
]);
(r.__runtimeHooks = 3), wx.createPage(n);
