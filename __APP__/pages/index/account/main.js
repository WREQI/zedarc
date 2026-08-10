require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../common/vendor.js"),
  n = require("../../../module/delivery/deliveryMixin.js"),
  t = require("../../../utils/mixins/privacy.js"),
  o = new r.HQBridge(),
  i = {
    components: {
      accountCom: function () {
        return "../../profileCom/components/index.js";
      },
    },
    mixins: [n.deliveryMixin, t.privacy],
    provide: function () {
      return {
        hqBridge: o,
        stockBridge: r.StockBridge,
        accountContainer: this,
        TradeFunc: r.sdkBridge,
      };
    },
    onLoad: function (e) {
      this.params = e;
    },
    setup: function () {
      var e = r.ref(!1),
        n = r.ref({}),
        t = r.computed(function () {
          return !e.value && r.COMMON_PAGE_STATUS.LOADING;
        }),
        o = r.ref(
          ["black", "dark"].includes(r.StockBridge.getStorage("user/skin"))
            ? "dark"
            : "light"
        );
      return { params: n, isRendered: e, pageStatus: t, skin: o };
    },
    onTabItemTap: function () {
      r.Request.reportMTAData({ eventName: "xcx_mine_click" });
    },
    onPullDownRefresh: function () {
      return (
        (n = this),
        null,
        (t = e().mark(function n() {
          var t, o;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      null ==
                      (o = null == (t = this.$refs) ? void 0 : t.accountCom)
                        ? void 0
                        : o.refreshUserCenterData()
                    );
                  case 2:
                    r.wx$1.stopPullDownRefresh();
                  case 3:
                  case "end":
                    return e.stop();
                }
            },
            n,
            this
          );
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
            a = function (r) {
              return r.done ? e(r.value) : Promise.resolve(r.value).then(o, i);
            };
          a((t = t.apply(n, null)).next());
        })
      );
      var n, t;
    },
    onPageShow: function () {
      this.skin = ["black", "dark"].includes(
        r.StockBridge.getStorage("user/skin")
      )
        ? "dark"
        : "light";
    },
  };
Array ||
  (
    r.resolveComponent("mp-privacy-dialog") +
    r.resolveComponent("stock-privacy-dialog") +
    r.resolveComponent("st-status") +
    r.resolveComponent("accountCom")
  )();
var a = r._export_sfc(i, [
  [
    "render",
    function (e, n, t, o, i, a) {
      return r.e(
        { a: e.rootFontSize, b: r.p({ "no-auto": !0 }), c: o.pageStatus },
        o.pageStatus ? { d: r.p({ type: o.pageStatus }) } : {},
        {
          e: r.sr("accountCom", "19e3f6da-3"),
          f: r.o(function (e) {
            return (o.isRendered = !0);
          }, 34),
          g: r.p({ params: o.params, "premote-mixin": e.premoteMixin }),
          h: o.skin,
          i: o.skin,
        }
      );
    },
  ],
]);
wx.createPage(a);
