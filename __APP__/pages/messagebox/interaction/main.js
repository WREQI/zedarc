var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../common/vendor.js"),
  t = new n.HQBridge(),
  o = {
    components: {
      interaction: function () {
        return "../@tencent/st-message-box/components/interaction/mp/index.js";
      },
    },
    provide: function () {
      return {
        hqBridge: t,
        TradeFunc: n.sdkBridge,
        stockBridge: this.stockBridge,
      };
    },
    data: function () {
      return { stockBridge: n.StockBridge };
    },
    onLoad: function () {
      this.stockBridge.setTitle("互动消息");
    },
    mounted: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {
      this.shareWidget = null;
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
        new Promise(function (e, o) {
          var r = function (e) {
              try {
                c(t.next(e));
              } catch (e) {
                o(e);
              }
            },
            i = function (e) {
              try {
                c(t.throw(e));
              } catch (e) {
                o(e);
              }
            },
            c = function (n) {
              return n.done ? e(n.value) : Promise.resolve(n.value).then(r, i);
            };
          c((t = t.apply(n, null)).next());
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
    n.resolveComponent("interaction")
  )();
var r = n._export_sfc(o, [
  [
    "render",
    function (e, t, o, r, i, c) {
      return { a: e.rootFontSize, b: n.p({ "no-auto": !0 }) };
    },
  ],
  ["__scopeId", "data-v-afe56542"],
]);
(o.__runtimeHooks = 2), wx.createPage(r);
