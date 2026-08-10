require("../../../@babel/runtime/helpers/Arrayincludes");
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
      var l,
        u =
          ((l = (function (r, t) {
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
          t(l, n({ srcsite: "zxgxcx_h5" }))),
        p = Object.keys(u)
          .map(function (e) {
            return "".concat(e, "=").concat(u[e]);
          })
          .join("&"),
        h = "https://zqact04.tenpay.com/activity/page/oldWithNew/#/"
          .concat(p.includes("type=home") ? "index" : "transfer", "?")
          .concat(p);
      (this.url = h), s.wx$1.setNavigationBarTitle({ title: "腾讯自选股" });
    },
    onShareAppMessage: function () {
      return {
        title: this.shareInfo.title,
        description: this.shareInfo.desc,
        path: this.shareInfo.link,
        imageUrl: this.shareInfo.imgUrl,
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
              d: s.o(a.handleMessage, 374),
              e: s.p({ src: o.url }),
            }
          : {}
      );
    },
  ],
]);
(l.__runtimeHooks = 2), wx.createPage(u);
