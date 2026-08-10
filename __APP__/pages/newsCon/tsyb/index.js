var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  t = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  s = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  c = require("../../../common/vendor.js"),
  p = {
    components: {
      TsybTransfer: function () {
        return "../@tencent/stock-tsyb-transfer/modules/Supplier.js";
      },
    },
    data: function () {
      return { skin: "white", params: {} };
    },
    onLoad: function (r) {
      try {
        var p = c.wx$1.getStorageSync("user/skin"),
          l = c.wx$1.getStorageSync("_qluin");
        (this.skin = p || this.skin),
          (this.params =
            ((u = (function (r, t) {
              for (var n in t || (t = {})) a.call(t, n) && s(r, n, t[n]);
              if (o) {
                var c,
                  p = e(o(t));
                try {
                  for (p.s(); !(c = p.n()).done; ) {
                    n = c.value;
                    i.call(t, n) && s(r, n, t[n]);
                  }
                } catch (e) {
                  p.e(e);
                } finally {
                  p.f();
                }
              }
              return r;
            })({}, r)),
            t(u, n({ openid: l }))));
      } catch (e) {
        this.params = r;
      }
      var u;
      c.wx$1.setNavigationBarTitle({ title: "脱水研报" });
    },
    methods: {
      onPageReady: function (e) {
        c.wx$1.redirectTo({
          url: "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(e)
          ),
        });
      },
    },
  };
Array ||
  (
    c.resolveComponent("mp-privacy-dialog") +
    c.resolveComponent("stock-privacy-dialog") +
    c.resolveComponent("TsybTransfer")
  )();
var l = c._export_sfc(p, [
  [
    "render",
    function (e, r, t, n, o, a) {
      return {
        a: e.rootFontSize,
        b: c.p({ "no-auto": !0 }),
        c: c.o(a.onPageReady, 293),
        d: c.p({ params: o.params }),
        e: o.skin,
      };
    },
  ],
  ["__scopeId", "data-v-0afd03de"],
]);
wx.createPage(l);
