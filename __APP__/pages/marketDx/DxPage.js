require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  a = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  u = require("../../common/vendor.js"),
  c = require("../../module/delivery/deliveryMixin.js"),
  s = u.useBrokerInfo().navigateToTrade,
  l = "你的好友推荐你一批新股新债",
  p = {
    components: {
      DxHomePage: function () {
        return "./@tencent/stock-hq-dxpage/Index.js";
      },
      mpBubble: function () {
        return "../asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.js";
      },
    },
    mixins: [c.deliveryMixin],
    watch: {
      premoteMixin: function (e) {
        var r = this;
        e &&
          e.BubbleMpwzqAll &&
          setTimeout(function () {
            var e;
            null == (e = r.hqBridge) || e.busEmit("mp-bubble-show-funcshare");
          }, 300);
      },
    },
    onShareAppMessage: function () {
      return (
        (t = this),
        null,
        (u = e().mark(function t() {
          var u, c, s, p, m;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      null ==
                      (c =
                        null == (u = getApp().globalData.detect)
                          ? void 0
                          : u.env)
                        ? void 0
                        : c.IS_PCWEIXIN
                    );
                  case 2:
                    if (!e.sent) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return", { title: l });
                  case 4:
                    if (
                      ((e.prev = 4),
                      (s = this.$refs.dxhomepage || {}),
                      "function" != typeof (p = s.handleShareAppMessage))
                    ) {
                      e.next = 11;
                      break;
                    }
                    return (e.next = 9), p();
                  case 9:
                    return (
                      (m = e.sent),
                      e.abrupt(
                        "return",
                        (function (e, t) {
                          for (var u in t || (t = {}))
                            o.call(t, u) && a(e, u, t[u]);
                          if (n) {
                            var c,
                              s = r(n(t));
                            try {
                              for (s.s(); !(c = s.n()).done; ) {
                                u = c.value;
                                i.call(t, u) && a(e, u, t[u]);
                              }
                            } catch (e) {
                              s.e(e);
                            } finally {
                              s.f();
                            }
                          }
                          return e;
                        })({ title: l }, m)
                      )
                    );
                  case 11:
                    return e.abrupt("return", { title: l });
                  case 14:
                    return (
                      (e.prev = 14),
                      (e.t0 = e.catch(4)),
                      e.abrupt("return", { title: l })
                    );
                  case 17:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this,
            [[4, 14]]
          );
        })),
        new Promise(function (e, r) {
          var n = function (e) {
              try {
                i(u.next(e));
              } catch (e) {
                r(e);
              }
            },
            o = function (e) {
              try {
                i(u.throw(e));
              } catch (e) {
                r(e);
              }
            },
            i = function (r) {
              return r.done ? e(r.value) : Promise.resolve(r.value).then(n, o);
            };
          i((u = u.apply(t, null)).next());
        })
      );
      var t, u;
    },
    provide: function () {
      return { hqBridge: this.hqBridge };
    },
    data: function () {
      return {
        hqBridge: new u.HQBridge(),
        userInfo: {},
        isAccountOpen: !1,
        scrollTop: 0,
      };
    },
    computed: {},
    onReachBottom: function () {
      var e = this;
      setTimeout(function () {
        e.$refs.dxhomepage && e.$refs.dxhomepage.handleReachBottom();
      }, 500);
    },
    onPageScroll: function (e) {
      this.scrollTop = e && e.scrollTop;
    },
    created: function () {
      var e = this;
      this.hqBridge.setTitle("打新日历"),
        u.userinfo.get(function (r) {
          e.userInfo = r;
          var t = e.userInfo.userstate;
          e.isAccountOpen = [
            u.USERSTATE.HASACCOUNT,
            u.USERSTATE.HASBUNDLE,
          ].includes(t);
        }),
        this.hqBridge.busOn("daxinCalendarYijiandaxin", function (e) {
          "yijian" === e && s({ name: "NewStock" }),
            "booking" === e && s({ name: "NewStock", query: { tab: 1 } }),
            "apply" === e &&
              s({ name: "ApplyIndex", query: { stat_data: "" } });
        });
    },
  };
Array ||
  (
    u.resolveComponent("mp-privacy-dialog") +
    u.resolveComponent("stock-privacy-dialog") +
    u.resolveComponent("DxHomePage") +
    u.resolveComponent("mp-bubble")
  )();
var m = u._export_sfc(p, [
  [
    "render",
    function (e, r, t, n, o, i) {
      return {
        a: e.rootFontSize,
        b: u.p({ "no-auto": !0 }),
        c: u.sr("dxhomepage", "f8a035e0-2"),
        d: u.p({
          "accout-opened": o.isAccountOpen,
          "mp-scroll-top": o.scrollTop,
        }),
        e: e.premoteMixin && e.premoteMixin.BubbleMpwzqAll,
        f: u.p({ premote: e.premoteMixin && e.premoteMixin.BubbleMpwzqAll }),
      };
    },
  ],
  ["__scopeId", "data-v-f8a035e0"],
]);
(p.__runtimeHooks = 3), wx.createPage(m);
