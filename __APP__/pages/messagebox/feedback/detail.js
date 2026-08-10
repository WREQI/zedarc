var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../common/vendor.js"),
  t = {
    components: {
      feedbackDetail: function () {
        return "../@tencent/st-message-box/pages/feedback/detail.js";
      },
    },
    provide: function () {
      return { TradeFunc: n.sdkBridge, stockBridge: this.stockBridge };
    },
    data: function () {
      return { stockBridge: n.StockBridge };
    },
    onLoad: function () {
      this.stockBridge.setTitle("进度详情");
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
    n.resolveComponent("feedback-detail")
  )();
var o = n._export_sfc(t, [
  [
    "render",
    function (e, t, o, r, i, c) {
      return { a: e.rootFontSize, b: n.p({ "no-auto": !0 }) };
    },
  ],
  ["__scopeId", "data-v-3d9b2c06"],
]);
(t.__runtimeHooks = 2), wx.createPage(o);
