var t = require("../../common/vendor.js"),
  e = {
    components: {
      AiStrategy: function () {
        return "./@tencent/stock-ai-strategy/modules/Detail.js";
      },
    },
    data: function () {
      return {
        filter: "",
        context: {},
        version: "v1",
        skin: t.wx$1.getStorageSync("user/skin") || "white",
      };
    },
    onLoad: function (e) {
      var o = e.filter,
        n = e.requestId,
        r = e.sessionId;
      (null == o ? void 0 : o.length) < 128 && (this.version = "v2"),
        (this.filter = o),
        (this.context = { requestId: n, sessionId: r }),
        t.wx$1.setNavigationBarTitle({ title: "智能选股" });
    },
    methods: {
      onStockClick: function (e) {
        var o = e.code;
        t.wx$1.navigateTo({ url: "/pages/quote/quote?s=".concat(o) });
      },
      onFetchError: function (e) {
        t.wx$1.showToast({
          title: "服务异常，请稍后再试",
          icon: "none",
          duration: 2e3,
        });
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("AiStrategy")
  )();
var o = t._export_sfc(e, [
  [
    "render",
    function (e, o, n, r, i, s) {
      return t.e(
        { a: e.rootFontSize, b: t.p({ "no-auto": !0 }), c: i.filter },
        i.filter
          ? {
              d: t.o(s.onStockClick, 309),
              e: t.o(s.onFetchError, 310),
              f: t.p({
                version: i.version,
                filter: i.filter,
                context: i.context,
              }),
            }
          : {},
        { g: i.skin }
      );
    },
  ],
  ["__scopeId", "data-v-8dabb965"],
]);
wx.createPage(o);
