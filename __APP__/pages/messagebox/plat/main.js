var e = require("../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../../common/vendor.js"),
  t = {
    components: {
      plat: function () {
        return "../@tencent/st-message-box/pages/plat/mp.js";
      },
    },
    provide: function () {
      return {
        TradeFunc: n.sdkBridge,
        stockBridge: this.stockBridge,
        skin: this.skin,
      };
    },
    data: function () {
      return {
        stockBridge: n.StockBridge,
        skin: ["black", "dark"].includes(n.StockBridge.getStorage("user/skin"))
          ? "dark"
          : "light",
      };
    },
    onLoad: function () {
      this.stockBridge.setTitle("平台消息");
    },
    mounted: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPageShow: function () {
      this.skin = ["black", "dark"].includes(
        n.StockBridge.getStorage("user/skin")
      )
        ? "dark"
        : "light";
    },
    onShareAppMessage: function () {
      return (
        (n = this),
        null,
        (t = e().mark(function n() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                case "end":
                  return e.stop();
              }
          }, n);
        })),
        new Promise(function (e, r) {
          var o = function (e) {
              try {
                a(t.next(e));
              } catch (e) {
                r(e);
              }
            },
            i = function (e) {
              try {
                a(t.throw(e));
              } catch (e) {
                r(e);
              }
            },
            a = function (n) {
              return n.done ? e(n.value) : Promise.resolve(n.value).then(o, i);
            };
          a((t = t.apply(n, null)).next());
        })
      );
      var n, t;
    },
    methods: {},
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog") +
    n.resolveComponent("plat")
  )();
var r = n._export_sfc(t, [
  [
    "render",
    function (e, t, r, o, i, a) {
      return { a: e.rootFontSize, b: n.p({ "no-auto": !0 }), c: i.skin };
    },
  ],
  ["__scopeId", "data-v-3ffa95d7"],
]);
(t.__runtimeHooks = 2), wx.createPage(r);
