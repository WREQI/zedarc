var e = require("../../common/vendor.js"),
  n = getApp().globalData,
  t = {
    components: {
      zxgWebview: function () {
        return "../../components/webView.js";
      },
    },
    data: function () {
      return {
        url: "",
        time: 0,
        resUrl: "",
        skin: e.wx$1.getStorageSync("user/skin") || "white",
      };
    },
    onLoad: function (e) {
      var t = this,
        o = Object.keys(e)
          .map(function (n) {
            return "".concat(n, "=").concat(e[n]);
          })
          .join("&");
      n.setSkin(function (e) {
        t.skin = "black" === e ? "black" : "white";
      }),
        (this.url =
          "https://wzq.tenpay.com/mp/v2/index.html#/community/index?srcshell=h5&from=miniapp&" +
          o);
    },
    onShow: function () {
      var e = this;
      n.setSkin(function (n) {
        e.skin = "black" === n ? "black" : "white";
      }),
        (this.time += 1),
        (this.resUrl = "".concat(this.url, "&time=").concat(this.time));
    },
    onShareAppMessage: function (e) {},
    methods: { handleMessage: function (e) {} },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("zxg-webview")
  )();
var o = e._export_sfc(t, [
  [
    "render",
    function (n, t, o, i, r, s) {
      return {
        a: n.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.o(s.handleMessage, 360),
        d: e.p({ src: r.resUrl }),
        e: e.n("black" == r.skin ? "skin-black" : "skin-white"),
      };
    },
  ],
]);
(t.__runtimeHooks = 2), wx.createPage(o);
