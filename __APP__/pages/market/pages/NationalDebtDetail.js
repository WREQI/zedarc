var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../@babel/runtime/helpers/Arrayincludes");
var n = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  a = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  s = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, a);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  u = require("../../../common/vendor.js"),
  c = require("../@tencent/stock-hq-data/index.js"),
  l = require("../../../module/delivery/deliveryMixin.js"),
  d = u.useBrokerInfo(),
  h = d.hasBind,
  p = d.navigateToTrade,
  b = d.shouldShowTradeEmbeddedComp,
  f = "一起轻松躺着赚钱！点击查看今日的国债理财机会",
  m = {
    components: {
      nationalDebtIndex: function () {
        return "../@tencent/stock-national-debt/nationalDebtIndex.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLW5hdGlvbmFsLWRlYnQvbmF0aW9uYWxEZWJ0SW5kZXgudnVl;
          }
        );
      },
      FollowGuide: function () {
        return "../../asyncCom/components/followGuide.js";
      },
      mpBubble: function () {
        return "../../asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.js";
      },
    },
    mixins: [l.deliveryMixin],
    provide: function () {
      return { hqBridge: this.hqBridge };
    },
    data: function () {
      return {
        hqBridge: new u.HQBridge(),
        userInfo: {},
        skin: ["black", "dark"].includes(u.StockBridge.getStorage("user/skin"))
          ? "black"
          : "white",
        loaded: !1,
        showFollowGuide: !1,
        stockName: "",
        scode: "",
        market: "",
        hasBind: h,
      };
    },
    watch: {
      premoteMixin: function (e) {
        var t = this;
        e &&
          e.BubbleMpwzqAll &&
          setTimeout(function () {
            var e;
            null == (e = t.hqBridge) || e.busEmit("mp-bubble-show-funcshare");
          }, 300);
      },
    },
    computed: {
      isAccountOpen: function () {
        return h.value;
      },
    },
    created: function () {
      var e = this;
      u.wx$1.setBackgroundColor({ backgroundColor: "#f5f6fa" }),
        u.userinfo.get(function (t) {
          e.userInfo = t;
        });
    },
    onShow: function () {
      u.querySubscribedByuserinfo(),
        this.$refs.nationalDebtContent && this.$refs.nationalDebtContent.init();
    },
    onHide: function () {
      this.clear(), this.hqBridge.report("hq.nationaldebtbuy.page_index_hide");
    },
    beforeDestroy: function () {
      this.clear();
    },
    onPullDownRefresh: function () {
      this.$refs.nationalDebtContent &&
        this.$refs.nationalDebtContent.loadData(!0),
        this.hqBridge.report("hq.nationaldebtbuy.page_index_refresh");
    },
    onPageScroll: function (e) {
      var t = this;
      this.$nextTick(function () {
        t.isReported ||
          (e.scrollTop > 200 &&
            ((t.isReported = !0),
            t.hqBridge.report("hq.nationaldebtbuy.teach_more_brow")));
      });
    },
    onShareAppMessage: function () {
      return s(
        this,
        null,
        e().mark(function n() {
          var s, u, c, l, d;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      this.hqBridge.report(
                        "hq.nationaldebtbuy.page_index_share"
                      ),
                      (e.next = 3),
                      null ==
                      (u =
                        null == (s = getApp().globalData.detect)
                          ? void 0
                          : s.env)
                        ? void 0
                        : u.IS_PCWEIXIN
                    );
                  case 3:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 6;
                      break;
                    }
                    e.t0 = !1;
                  case 6:
                    if (!e.t0) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt("return", { title: f });
                  case 8:
                    if (
                      ((e.prev = 8),
                      (c = this.$refs.nationalDebtContent || {}),
                      "function" != typeof (l = c.handleShareAppMessage))
                    ) {
                      e.next = 15;
                      break;
                    }
                    return (e.next = 13), l();
                  case 13:
                    return (
                      (d = e.sent),
                      e.abrupt(
                        "return",
                        (function (e, n) {
                          for (var s in n || (n = {}))
                            o.call(n, s) && a(e, s, n[s]);
                          if (r) {
                            var u,
                              c = t(r(n));
                            try {
                              for (c.s(); !(u = c.n()).done; ) {
                                s = u.value;
                                i.call(n, s) && a(e, s, n[s]);
                              }
                            } catch (e) {
                              c.e(e);
                            } finally {
                              c.f();
                            }
                          }
                          return e;
                        })({ title: f }, d)
                      )
                    );
                  case 15:
                    return e.abrupt("return", { title: f });
                  case 18:
                    return (
                      (e.prev = 18),
                      (e.t1 = e.catch(8)),
                      e.abrupt("return", { title: f })
                    );
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            n,
            this,
            [[8, 18]]
          );
        })
      );
    },
    methods: {
      clear: function () {
        this.$refs.nationalDebtContent &&
          this.$refs.nationalDebtContent.clear();
      },
      handleSubscribe: function (e) {
        var t = "";
        e.hasSubscribed
          ? u.getAccountChatSubscribed()
            ? (t = "订阅成功！")
            : (this.showFollowGuide = !0)
          : (t = "取消成功！"),
          t &&
            setTimeout(function () {
              u.wx$1.showToast({ title: t });
            }, 300);
      },
      onClickTrade: function (e) {
        var t = this;
        if (
          (setTimeout(function () {
            t.hqBridge.report("hq.nationaldebtbuy.list_item_tradebtn_click", {
              stockid: e.code,
              fchannel_id_fm_i: "I9K00p000b129",
            });
          }, 300),
          this.isAccountOpen)
        ) {
          var n = c.utils.splitSymbol(e.code),
            r = n.market,
            o = n.scode;
          (this.market = r),
            (this.scode = o),
            (this.stockName = e.stockName),
            this.goToTrade("TradeDebt");
        } else this.goToTrade("ApplyIndex");
      },
      goToTrade: function (t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "buy";
        return s(
          this,
          null,
          e().mark(function r() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      p({
                        name: t,
                        query: {
                          market: this.market,
                          code: this.scode,
                          stat_data: "I9K00p000b129",
                          entrust_type: n,
                        },
                      }).catch(function (e) {
                        var t = e.retcode,
                          n = e.retmsg;
                        "ERR_MAINTAIN" === t
                          ? u.wx$1.showModal({
                              content: n || "系统繁忙 请稍后再试",
                              showCancel: !1,
                            })
                          : u.wx$1.switchTab({ url: "/pages/index/trade" });
                      });
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              this
            );
          })
        );
      },
      shouldShowTradeEmbedded: function () {
        return s(
          this,
          null,
          e().mark(function t() {
            var n, r;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.isAccountOpen) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 2:
                      return (
                        (e.next = 4),
                        null ==
                        (r =
                          null == (n = getApp().globalData.detect)
                            ? void 0
                            : n.env)
                          ? void 0
                          : r.IS_PCWEIXIN
                      );
                    case 4:
                      if (((e.t1 = e.sent), e.t1)) {
                        e.next = 7;
                        break;
                      }
                      e.t1 = !1;
                    case 7:
                      if (((e.t0 = !e.t1), !e.t0)) {
                        e.next = 12;
                        break;
                      }
                      return (e.next = 11), b();
                    case 11:
                      e.t0 = !!e.sent;
                    case 12:
                      return e.abrupt("return", e.t0);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      onClickAccount: function () {
        this.goToTrade("ApplyIndex"),
          this.hqBridge.report("hq.nationaldebtbuy.open_account_click", {
            fchannel_id_fm_i: "I9K00p000b129",
          });
      },
      goToStockDetail: function (e) {
        var t = c.utils.splitSymbol(e.code),
          n = t.market,
          r = t.scode;
        this.hqBridge.routeTo({
          path: "/pages/quote/quote",
          query: { market: n, scode: r },
        }),
          this.hqBridge.report("hq.nationaldebtbuy.list_item_click", {
            stockid: e.code,
          });
      },
      onShareTimeline: function () {
        return (
          this.hqBridge.report("hq.nationaldebtbuy.page_share_timeline"),
          this.onShare()
        );
      },
      onShare: function () {
        var e = getCurrentPages(),
          t = e[e.length - 1];
        return {
          title: "".concat(this.userInfo.nickname, "@你，向你推荐国债逆回购"),
          path: "/".concat(t.route, "?stat_data=FMzxgxcxW006020001"),
        };
      },
    },
  };
Array ||
  (
    u.resolveComponent("mp-privacy-dialog") +
    u.resolveComponent("stock-privacy-dialog") +
    u.resolveComponent("nationalDebtIndex") +
    u.resolveComponent("follow-guide") +
    u.resolveComponent("mp-bubble")
  )();
var v = u._export_sfc(m, [
  [
    "render",
    function (e, t, n, r, o, i) {
      return {
        a: e.rootFontSize,
        b: u.p({ "no-auto": !0 }),
        c: u.sr("nationalDebtContent", "0dae30e5-2"),
        d: u.o(i.onClickTrade, 206),
        e: u.o(i.onClickAccount, 207),
        f: u.o(i.handleSubscribe, 208),
        g: u.p({
          market: o.market,
          theme: o.skin,
          userInfo: o.userInfo,
          hasBind: o.hasBind,
        }),
        h: u.o(function (e) {
          return (o.showFollowGuide = !1);
        }, 209),
        i: u.p({ show: o.showFollowGuide, stat: "IKP00p000q012" }),
        j: e.premoteMixin && e.premoteMixin.BubbleMpwzqAll,
        k: u.p({ premote: e.premoteMixin && e.premoteMixin.BubbleMpwzqAll }),
        l: o.skin,
      };
    },
  ],
  ["__scopeId", "data-v-0dae30e5"],
]);
(m.__runtimeHooks = 7), wx.createPage(v);
