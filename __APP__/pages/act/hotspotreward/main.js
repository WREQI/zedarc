var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  s = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  c = require("../../../common/vendor.js"),
  l = {
    components: {
      zxgWebview: function () {
        return "../../../components/webView.js";
      },
    },
    data: function () {
      return { url: "", shareInfo: {} };
    },
    onLoad: function (t) {
      var l,
        p =
          ((l = (function (t, r) {
            for (var n in r || (r = {})) a.call(r, n) && s(t, n, r[n]);
            if (o) {
              var c,
                l = e(o(r));
              try {
                for (l.s(); !(c = l.n()).done; ) {
                  n = c.value;
                  i.call(r, n) && s(t, n, r[n]);
                }
              } catch (e) {
                l.e(e);
              } finally {
                l.f();
              }
            }
            return t;
          })({}, t)),
          r(l, n({ srcsite: "zxgxcx_h5" }))),
        u = "https://zqact01.tenpay.com/activity/page/hotspotreward/#/?".concat(
          Object.keys(p)
            .map(function (e) {
              return "".concat(e, "=").concat(p[e]);
            })
            .join("&")
        );
      (this.url = u), c.wx$1.setNavigationBarTitle({ title: "腾讯自选股" });
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
        var t = e.detail.data,
          r = void 0 === t ? [] : t;
        r && r.length && (this.shareInfo = r[r.length - 1]);
      },
    },
  };
Array ||
  (
    c.resolveComponent("mp-privacy-dialog") +
    c.resolveComponent("stock-privacy-dialog") +
    c.resolveComponent("zxg-webview")
  )();
var p = c._export_sfc(l, [
  [
    "render",
    function (e, t, r, n, o, a) {
      return c.e(
        { a: e.rootFontSize, b: o.url },
        o.url
          ? {
              c: c.p({ "no-auto": !0 }),
              d: c.o(a.handleMessage, 373),
              e: c.p({ src: o.url }),
            }
          : {}
      );
    },
  ],
]);
(l.__runtimeHooks = 2), wx.createPage(p);
