var e = require("../../common/vendor.js"),
  t = {
    components: {
      DaZongJiaoYiDetail: function () {
        return "./@tencent/wzq-detail-subpage/hs-fund-pages/DzjyDetail.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge(this) };
    },
    onReachBottom: function () {
      this.$refs.dzjyDetail.pageToBottom();
    },
    data: function () {
      return { hqBridge: new e.HQBridge(), reqData: {}, isShow: !1, toTop: 0 };
    },
    onLoad: function (t) {
      (this.reqData = t),
        (this.isShow = !0),
        e.wx$1.setNavigationBarTitle({ title: "大宗交易" });
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("DaZongJiaoYiDetail")
  )();
var a = e._export_sfc(t, [
  [
    "render",
    function (t, a, o, i, r, n) {
      return e.e(
        { a: t.rootFontSize, b: e.p({ "no-auto": !0 }), c: r.isShow },
        r.isShow
          ? {
              d: e.sr("dzjyDetail", "88d0fc7b-2"),
              e: e.p({
                scode: r.reqData.scode,
                market: r.reqData.market,
                "stock-name": r.reqData.stockName,
                unit: r.reqData.unit,
                "price-fixed": r.reqData.priceFixed,
                "is-fund": r.reqData.isFund,
                type: r.reqData.type,
                tab: r.reqData.tab,
              }),
            }
          : {},
        { f: t.skin }
      );
    },
  ],
  ["__scopeId", "data-v-88d0fc7b"],
]);
wx.createPage(a);
