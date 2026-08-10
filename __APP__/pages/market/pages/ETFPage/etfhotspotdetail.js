var e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  i = function (e, o, r) {
    return o in e
      ? t(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[o] = r);
  },
  a = require("../../../../common/vendor.js"),
  c = require("../../@tencent/stock-base/bridge/mpwzq.js"),
  l = {
    name: "HotTopicDetailRoutePage",
    components: {
      HotTopicDetailPage: function () {
        return "../../../marketSbg/@tencent/stock-hq-etf/hotTopicPages/DetailPage.js";
      },
    },
    provide: function () {
      return {
        stockBridge: c.StockBridge,
        stockRouter: a.StockRouter,
        hqBridge: c.StockBridge,
      };
    },
    data: function () {
      return { query: {}, skin: a.wx$1.getStorageSync("user/skin") || "white" };
    },
    onLoad: function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.query = (function (t, a) {
        for (var c in a || (a = {})) r.call(a, c) && i(t, c, a[c]);
        if (o) {
          var l,
            u = e(o(a));
          try {
            for (u.s(); !(l = u.n()).done; ) {
              c = l.value;
              n.call(a, c) && i(t, c, a[c]);
            }
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }
        }
        return t;
      })({}, t);
    },
    onPageScroll: function (e) {
      var t,
        o,
        r,
        n = null != (t = null == e ? void 0 : e.scrollTop) ? t : 0;
      null ==
        (r =
          null == (o = this.$refs.hotTopicDetailPageRef)
            ? void 0
            : o.setScrollTop) || r.call(o, n),
        a.scrollDepthStat.onScroll(n, this.__route__);
    },
  };
Array ||
  (
    a.resolveComponent("HotTopicDetailPage") +
    a.resolveComponent("mp-privacy-dialog") +
    a.resolveComponent("stock-privacy-dialog")
  )();
var u = a._export_sfc(l, [
  [
    "render",
    function (e, t, o, r, n, i) {
      return {
        a: e.rootFontSize,
        b: a.sr("hotTopicDetailPageRef", "38db5445-0"),
        c: n.skin,
        d: a.p({ query: n.query }),
        e: a.p({ "no-auto": !0 }),
      };
    },
  ],
]);
(l.__runtimeHooks = 1), wx.createPage(u);
