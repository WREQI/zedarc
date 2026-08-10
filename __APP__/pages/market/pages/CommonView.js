var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  t = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = require("../../../common/vendor.js"),
  l = {
    components: {
      zxgWebview: function () {
        return "../../../components/webView.js";
      },
    },
    data: function () {
      return { url: "", shareInfo: {} };
    },
    onLoad: function (r) {
      var l = decodeURIComponent(r.url) || "";
      if (l) {
        var u,
          p =
            ((u = (function (r, t) {
              for (var n in t || (t = {})) a.call(t, n) && c(r, n, t[n]);
              if (o) {
                var s,
                  l = e(o(t));
                try {
                  for (l.s(); !(s = l.n()).done; ) {
                    n = s.value;
                    i.call(t, n) && c(r, n, t[n]);
                  }
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
              }
              return r;
            })({}, r)),
            t(u, n({ url: "", srcsite: "zxgxcx_h5", env: "wzqxcx" }))),
          f = Object.keys(p)
            .map(function (e) {
              return "".concat(e, "=").concat(p[e]);
            })
            .join("&");
        (this.url =
          l.indexOf("?") > 0
            ? "".concat(l, "&").concat(f)
            : "".concat(l, "?").concat(f)),
          s.wx$1.setNavigationBarTitle({ title: "腾讯微证券" });
      }
    },
    onShareAppMessage: function () {
      return {
        title: this.shareInfo.title || "腾讯微证券",
        description: this.shareInfo.desc || "腾讯微证券",
        path: this.shareInfo.link || "",
        imageUrl: this.shareInfo.imgUrl || "",
      };
    },
    methods: {
      handleMessage: function (e) {
        var r = e.detail.data,
          t = void 0 === r ? [] : r;
        t && t.length && (this.shareInfo = t[t.length - 1]);
      },
    },
  };
Array ||
  (
    s.resolveComponent("mp-privacy-dialog") +
    s.resolveComponent("stock-privacy-dialog") +
    s.resolveComponent("zxg-webview")
  )();
var u = s._export_sfc(l, [
  [
    "render",
    function (e, r, t, n, o, a) {
      return s.e(
        { a: e.rootFontSize, b: o.url },
        o.url
          ? {
              c: s.p({ "no-auto": !0 }),
              d: s.o(a.handleMessage, 210),
              e: s.p({ src: o.url }),
            }
          : {}
      );
    },
  ],
]);
(l.__runtimeHooks = 2), wx.createPage(u);
