var e = require("../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../common/vendor.js"),
  n = new t.HQBridge(),
  r = {
    components: {
      homeV2: function () {
        return "../@tencent/st-message-box/pages/home/indexV2.js";
      },
      TradeMessage: function () {
        return "../tradeMessage.js";
      },
    },
    provide: function () {
      return {
        hqBridge: n,
        stockBridge: this.stockBridge,
        TradeFunc: t.sdkBridge,
        skin: this.skin,
      };
    },
    setup: function () {
      var e = t.ref(!1),
        n = t.ref(
          ["black", "dark"].includes(t.StockBridge.getStorage("user/skin"))
            ? "dark"
            : "light"
        ),
        r = t.computed(function () {
          return !e.value && t.COMMON_PAGE_STATUS.LOADING;
        });
      return { isRendered: e, pageStatus: r, skin: n };
    },
    data: function () {
      return { stockBridge: t.StockBridge };
    },
    onLoad: function () {
      this.stockBridge.setTitle("消息盒子");
    },
    mounted: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPageShow: function () {
      this.skin = ["black", "dark"].includes(
        t.StockBridge.getStorage("user/skin")
      )
        ? "dark"
        : "light";
    },
    onShareAppMessage: function () {
      return (
        (t = this),
        null,
        (n = e().mark(function t() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                case "end":
                  return e.stop();
              }
          }, t);
        })),
        new Promise(function (e, r) {
          var o = function (e) {
              try {
                i(n.next(e));
              } catch (e) {
                r(e);
              }
            },
            s = function (e) {
              try {
                i(n.throw(e));
              } catch (e) {
                r(e);
              }
            },
            i = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(o, s);
            };
          i((n = n.apply(t, null)).next());
        })
      );
      var t, n;
    },
    methods: {
      handleStyleChange: function () {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (null == (e = this.$refs.homeRef) ? void 0 : e.setTradeHover) &&
          this.$refs.homeRef.setTradeHover(t.status, t.code);
      },
      handlePullRefresh: function (e) {
        var t;
        (null == (t = this.$refs.homeRef) ? void 0 : t.readMessage) &&
          this.$refs.homeRef.readMessage({
            msg_box_type: "trade",
            dealer_code: e,
          });
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("st-status") +
    t.resolveComponent("trade-message") +
    t.resolveComponent("homeV2")
  )();
var o = t._export_sfc(r, [
  [
    "render",
    function (e, n, r, o, s, i) {
      return t.e(
        { a: e.rootFontSize, b: t.p({ "no-auto": !0 }), c: o.pageStatus },
        o.pageStatus ? { d: t.p({ type: o.pageStatus }) } : {},
        {
          e: t.w(
            function (e, n, r) {
              var o = e.curBrokerCode,
                s = e.brokerList,
                i = e.tabHeight,
                a = e.contentHeight;
              return {
                a: "42933776-4-" + r + ",42933776-3",
                b: t.p({
                  "cur-broker-code": o,
                  "broker-list": s,
                  "tab-height": i,
                  "content-height": a,
                }),
                c: r,
                d: n,
              };
            },
            { name: "plugin", path: "e", vueId: "42933776-3" }
          ),
          f: t.o(i.handleStyleChange, 405),
          g: t.o(i.handlePullRefresh, 406),
          h: t.sr("homeRef", "42933776-3"),
          i: t.o(function (e) {
            return (o.isRendered = !0);
          }, 407),
          j: o.skin,
        }
      );
    },
  ],
  ["__scopeId", "data-v-42933776"],
]);
(r.__runtimeHooks = 2), wx.createPage(o);
