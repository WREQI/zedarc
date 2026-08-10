var e = require("../../common/vendor.js"),
  t = getApp().globalData,
  o = {
    components: {
      ProtocolList: function () {
        return "./components/ProtocolList.js";
      },
      DebugFunctionEntry: function () {
        return "../../components/DebugFunctionEntry.js";
      },
    },
    data: function () {
      return {
        pageType: "zxg" === t.APPNAME ? "zxg" : "wzq",
        aboutTxt: "zxg" === t.APPNAME ? "自选股" : "微证券",
        newConfirmList: [],
        frompage: null,
        popupVisible: !1,
      };
    },
    onShareTimeline: function () {
      var t;
      null == (t = e.Request) ||
        t.reportMTAData({ eventName: "xcx_share_timeline" });
    },
    methods: {
      goProtocol: function (t) {
        var o,
          n,
          r = t.target.dataset.from,
          a = getCurrentPages(),
          i = a[a.length - 1].route;
        if (((this.frompage = i), "about" !== r))
          return (
            (o = t.detail.val),
            (n = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(o)
            )),
            e.wx$1.navigateTo({ url: n }),
            !1
          );
        (o = t.target.dataset.url),
          (n = "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(o)
          )),
          e.wx$1.navigateTo({ url: n }),
          e.Request.reportMTAData({ eventName: "ZXG.ABOUT.READ_PROTOCOL" });
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("DebugFunctionEntry") +
    e.resolveComponent("protocol-list")
  )();
var n = e._export_sfc(o, [
  [
    "render",
    function (t, o, n, r, a, i) {
      return e.e(
        {
          a: t.rootFontSize,
          b: e.p({ "no-auto": !0 }),
          c: e.t(a.aboutTxt),
          d: "wzq" == a.pageType,
        },
        (a.pageType, {}),
        { e: "zxg" == a.pageType },
        (a.pageType, {})
      );
    },
  ],
]);
(o.__runtimeHooks = 6), wx.createPage(n);
