var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  t = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  u = function (e, n, t) {
    return n in e
      ? r(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t);
  },
  c = function (r, c) {
    for (var a in c || (c = {})) t.call(c, a) && u(r, a, c[a]);
    if (n) {
      var i,
        l = e(n(c));
      try {
        for (l.s(); !(i = l.n()).done; ) {
          a = i.value;
          o.call(c, a) && u(r, a, c[a]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return r;
  },
  a = require("../../../../../../common/vendor.js"),
  i = {
    components: {
      StockFriend: function () {
        return "../../components/stock-friends/index.js";
      },
    },
    setup: function () {
      var e,
        r,
        n =
          (null == (e = a.getCurrentInstance()) ? void 0 : e.proxy) ||
          a.getCurrentInstance(),
        t = a.ref(""),
        o = a.ref("light");
      try {
        var u = null == (r = a.wx$1) ? void 0 : r.getStorageSync("user/skin");
        u && (o.value = u);
      } catch (e) {}
      return (
        a.onMounted(function () {
          var e = (function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null;
            if (null == e ? void 0 : e.$route)
              return c(c({}, e.$route.params || {}), e.$route.query || {});
            if (a.StockBridge.ENV === a.EnvTypeEnum.MP)
              try {
                var r = getCurrentPages(),
                  n = r[r.length - 1];
                if (null == n ? void 0 : n.options) return c({}, n.options);
              } catch (e) {}
            return {};
          })(n);
          t.value = e.yb_scene || "";
        }),
        { ybScene: t, theme: o }
      );
    },
  };
Array || a.resolveComponent("StockFriend")();
var l = a._export_sfc(i, [
  [
    "render",
    function (e, r, n, t, o, u) {
      return { a: a.p({ yb_scene: t.ybScene, theme: t.theme }) };
    },
  ],
]);
wx.createComponent(l);
