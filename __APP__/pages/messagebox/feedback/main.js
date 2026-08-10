var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../common/vendor.js"),
  t = {
    components: {
      feedback: function () {
        return "../@tencent/st-message-box/pages/feedback/mp.js";
      },
    },
    provide: function () {
      return { TradeFunc: n.sdkBridge, stockBridge: this.stockBridge };
    },
    data: function () {
      return { stockBridge: n.StockBridge };
    },
    onLoad: function () {
      this.stockBridge.setTitle("意见反馈提醒");
    },
    mounted: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
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
                i(t.next(e));
              } catch (e) {
                o(e);
              }
            },
            c = function (e) {
              try {
                i(t.throw(e));
              } catch (e) {
                o(e);
              }
            },
            i = function (n) {
              return n.done ? e(n.value) : Promise.resolve(n.value).then(r, c);
            };
          i((t = t.apply(n, null)).next());
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
    n.resolveComponent("feedback")
  )();
var o = n._export_sfc(t, [
  [
    "render",
    function (e, t, o, r, c, i) {
      return { a: e.rootFontSize, b: n.p({ "no-auto": !0 }) };
    },
  ],
  ["__scopeId", "data-v-fd7b2331"],
]);
(t.__runtimeHooks = 2), wx.createPage(o);
