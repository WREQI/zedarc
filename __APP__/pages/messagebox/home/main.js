var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../common/vendor.js"),
  o = {
    components: {
      home: function () {
        return "../@tencent/st-message-box/pages/home/index.js";
      },
    },
    provide: function () {
      return { stockBridge: this.stockBridge, TradeFunc: n.sdkBridge };
    },
    data: function () {
      return { stockBridge: n.StockBridge };
    },
    onLoad: function () {
      this.stockBridge.setTitle("消息盒子");
    },
    mounted: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onShareAppMessage: function () {
      return (
        (n = this),
        null,
        (o = e().mark(function n() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                case "end":
                  return e.stop();
              }
          }, n);
        })),
        new Promise(function (e, t) {
          var r = function (e) {
              try {
                c(o.next(e));
              } catch (e) {
                t(e);
              }
            },
            i = function (e) {
              try {
                c(o.throw(e));
              } catch (e) {
                t(e);
              }
            },
            c = function (n) {
              return n.done ? e(n.value) : Promise.resolve(n.value).then(r, i);
            };
          c((o = o.apply(n, null)).next());
        })
      );
      var n, o;
    },
    methods: {},
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog") +
    n.resolveComponent("home")
  )();
var t = n._export_sfc(o, [
  [
    "render",
    function (e, o, t, r, i, c) {
      return { a: e.rootFontSize, b: n.p({ "no-auto": !0 }) };
    },
  ],
  ["__scopeId", "data-v-4fcc53bb"],
]);
(o.__runtimeHooks = 2), wx.createPage(t);
