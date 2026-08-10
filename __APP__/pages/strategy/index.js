var e = require("../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../common/vendor.js"),
  n = getApp().globalData,
  o = {
    components: {
      zxgWebview: function () {
        return "../../components/webView.js";
      },
    },
    data: function () {
      return {
        url: "",
        path: "",
        skin: t.wx$1.getStorageSync("user/skin") || "white",
      };
    },
    onLoad: function (e) {
      var o = this;
      n.setSkin(function (e) {
        o.skin = "black" === e ? "black" : "white";
      });
      var r = "";
      if (e.url && e.is_full_url) r = decodeURIComponent(e.url);
      else {
        r = "https://wzq.tenpay.com/mp/v2/index.html#/strategy/".concat(
          decodeURIComponent(e.path)
        );
        var a = Object.keys(e);
        if (a.length > 1) {
          var i = "?";
          a.forEach(function (t) {
            "path" !== t && (i += "".concat(t, "=").concat(e[t], "&"));
          }),
            (r += i);
        }
      }
      (this.path = e.path || ""),
        (this.url = r),
        e.title &&
          t.wx$1.setNavigationBarTitle({ title: decodeURIComponent(e.title) });
    },
    onShow: function () {
      var e = this;
      n.setSkin(function (t) {
        e.skin = "black" === t ? "black" : "white";
      });
    },
    onShareAppMessage: function (t) {
      var n = t.webViewUrl.split("#")[1].split("?"),
        o = e(n, 2),
        r = o[0],
        a = o[1],
        i = r.replace(/^\/strategy\//, ""),
        c = "";
      try {
        c = decodeURIComponent(a.match(/title=([^&]+)/)[1]) || "";
      } catch (e) {}
      return {
        title: c,
        path: "/pages/strategy/index?srcsite=zxgxcx_h5&srcshell=h5&path="
          .concat(i, "&")
          .concat(a),
      };
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("zxg-webview")
  )();
var r = t._export_sfc(o, [
  [
    "render",
    function (e, n, o, r, a, i) {
      return {
        a: e.rootFontSize,
        b: t.p({ "no-auto": !0 }),
        c: t.p({ src: a.url }),
        d: t.n("black" == a.skin ? "skin-black" : "skin-white"),
      };
    },
  ],
]);
(o.__runtimeHooks = 2), wx.createPage(r);
