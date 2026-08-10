var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  s = require("../../../common/vendor.js"),
  l = getApp().globalData,
  p = {
    components: {
      zxgWebview: function () {
        return "../../../components/webView.js";
      },
    },
    data: function () {
      return {
        url: "",
        time: 0,
        resUrl: "",
        skin: s.wx$1.getStorageSync("user/skin") || "white",
        query: {},
      };
    },
    onShareAppMessage: function () {
      var t,
        l =
          ((t = (function (t, r) {
            for (var n in r || (r = {})) i.call(r, n) && c(t, n, r[n]);
            if (o) {
              var s,
                l = e(o(r));
              try {
                for (l.s(); !(s = l.n()).done; ) {
                  n = s.value;
                  a.call(r, n) && c(t, n, r[n]);
                }
              } catch (e) {
                l.e(e);
              } finally {
                l.f();
              }
            }
            return t;
          })({}, this.query || {})),
          r(t, n({ stat_data: "OGD00p000h018" })));
      return {
        title: "你的好友邀你查看",
        path: "/pages/comment/personal/main?".concat(s.Fns.queryStringify(l)),
      };
    },
    onLoad: function (e) {
      this.query = e;
      var t = this;
      l.setSkin(function (e) {
        t.skin = "black" === e ? "black" : "white";
      });
      var r =
          "https://wzq.tenpay.com/mp/v2/index.html#/personal/index?from=miniapp&",
        n = Object.keys(e);
      if (n.length > 0) {
        var o = "";
        n.forEach(function (t) {
          "path" !== t && (o += "".concat(t, "=").concat(e[t], "&"));
        }),
          (r += o);
      }
      this.url = r;
    },
    onShow: function () {
      var e = this;
      l.setSkin(function (t) {
        e.skin = "black" === t ? "black" : "white";
      }),
        (this.time += 1),
        (this.resUrl = "".concat(this.url, "time=").concat(this.time));
    },
    methods: {},
  };
Array ||
  (
    s.resolveComponent("mp-privacy-dialog") +
    s.resolveComponent("stock-privacy-dialog") +
    s.resolveComponent("zxg-webview")
  )();
var u = s._export_sfc(p, [
  [
    "render",
    function (e, t, r, n, o, i) {
      return {
        a: e.rootFontSize,
        b: s.p({ "no-auto": !0 }),
        c: s.p({ src: o.resUrl }),
        d: s.n("black" == o.skin ? "skin-black" : "skin-white"),
      };
    },
  ],
]);
(p.__runtimeHooks = 2), wx.createPage(u);
