var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  c = function (e, n, r) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  s = require("../../../common/vendor.js"),
  l = s.Fns || s.__CJS__import__0__$1,
  p = getApp().globalData,
  u = {
    components: {
      zxgWebview: function () {
        return "../../../components/webView.js";
      },
    },
    data: function () {
      return {
        key: "",
        url: "",
        time: 0,
        resUrl: "",
        skin: s.wx$1.getStorageSync("user/skin") || "white",
        query: {},
      };
    },
    onLoad: function (e) {
      this.query = e;
      var t = this;
      p.setSkin(function (e) {
        t.skin = "black" === e ? "black" : "white";
      });
      var n = "https://wzq.tenpay.com/mp/v2/index.html#/comment/detail/detail",
        r = Object.keys(e);
      if (r.length >= 1) {
        var i = "?";
        r.forEach(function (t) {
          "path" !== t && (i += "".concat(t, "=").concat(e[t], "&"));
        }),
          (n += i);
      }
      (this.url = n + "from=miniapp&"),
        (this.key = this.url),
        (this.resUrl = n);
    },
    onShow: function () {
      var e = this;
      p.setSkin(function (t) {
        e.skin = "black" === t ? "black" : "white";
      }),
        (this.time += 1),
        (this.resUrl = "".concat(this.url, "time=").concat(this.time));
    },
    onShareAppMessage: function () {
      var t,
        s =
          ((t = (function (t, n) {
            for (var r in n || (n = {})) a.call(n, r) && c(t, r, n[r]);
            if (i) {
              var s,
                l = e(i(n));
              try {
                for (l.s(); !(s = l.n()).done; ) {
                  r = s.value;
                  o.call(n, r) && c(t, r, n[r]);
                }
              } catch (e) {
                l.e(e);
              } finally {
                l.f();
              }
            }
            return t;
          })({}, this.query || {})),
          n(t, r({ stat_data: "OCi00p000h017" })));
      return {
        title: "你的好友邀你查看",
        path: "pages/comment/detailView/main?".concat(l.queryStringify(s)),
      };
    },
    methods: {
      updateTimeline: function (e) {
        var t = getApp().globalData.Event,
          n = e || {};
        s.StockBridge.busEmit("updateTimelineInNewsTab", n),
          t.emit("updateTimeline", n);
      },
      handleMessage: function (e) {
        var t = this,
          n = e.detail.data;
        (void 0 === n ? [] : n).forEach(function (e) {
          t.updateTimeline(e);
        });
      },
    },
  };
Array ||
  (
    s.resolveComponent("mp-privacy-dialog") +
    s.resolveComponent("stock-privacy-dialog") +
    s.resolveComponent("zxg-webview")
  )();
var m = s._export_sfc(u, [
  [
    "render",
    function (e, t, n, r, i, a) {
      return {
        a: e.rootFontSize,
        b: s.p({ "no-auto": !0 }),
        c: s.o(a.handleMessage, 345),
        d: s.p({ src: i.resUrl }),
        e: s.n("black" == i.skin ? "skin-black" : "skin-white"),
      };
    },
  ],
]);
(u.__runtimeHooks = 2), wx.createPage(m);
