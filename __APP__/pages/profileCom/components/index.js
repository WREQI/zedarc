var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, r, t) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            i(t.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            i(t.throw(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, u);
        };
      i((t = t.apply(e, r)).next());
    });
  },
  t = require("../../../common/vendor.js"),
  n = require("../hooks/useJumpDetail.js"),
  o = require("../hooks/useMultiBrokerCardInfo.js"),
  a = require("../@tencent/stock-news-core/hooks/useUserProtocol.js"),
  u = require("../utils.js");
getApp().globalData;
var i = {
  components: {
    account: function () {
      return "../@tencent/wzq-profile-page/Index.js".then(function (e) {
        return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1wcm9maWxlLXBhZ2UvSW5kZXgudnVl;
      });
    },
    extraCom: function () {
      return "./extraCom.js";
    },
    brokerUserName: function () {
      return "../brokerUserName.js";
    },
    accountMainCard: function () {
      return "./accountMainCard.js";
    },
  },
  props: {
    premoteMixin: { type: Object, default: function () {} },
    params: { type: Object, default: function () {} },
  },
  setup: function () {
    var n,
      i,
      s = this,
      c = t.getCurrentInstance().proxy,
      l = t.ref(!1);
    t.onMounted(function () {
      return r(
        s,
        null,
        e().mark(function r() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), t.getPcIsDisabledTrade();
                case 2:
                  l.value = e.sent;
                case 3:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      );
    });
    var d =
        (null == (i = null == (n = getApp().globalData.detect) ? void 0 : n.env)
          ? void 0
          : i.IS_PCWEIXIN) || !1,
      f = t.ref({}),
      p = t.ref(""),
      h = t.ref(null),
      m = a.useUserProtocol(),
      v = m.didAgreeUserAgreement,
      g = m.subUserAgreementStatus,
      k = m.unsubUserAgreementStatus;
    t.provide("didAgreeUserAgreement", v),
      t.provide("onCheckUserAgreementStatus", function () {
        var e, r;
        null ==
          (r =
            null == (e = t.StockBridge.privacyAgreement) ? void 0 : e.check) ||
          r.call(e).catch(function () {});
      }),
      g(),
      t.onBeforeUnmount(function () {
        k();
      }),
      c.onLoadFlag &&
        t.StockBridge.busEmit("growth-user.behavior.union", { type: "show" }),
      (c.onLoadFlag = !0);
    var x = t.ref(null);
    t.provide("taskSelector", x);
    var b = t.useBrokerInfo(),
      S = b.fetchData,
      w = b.hasBind,
      C = b.isTradeEnable;
    !(function () {
      r(
        this,
        null,
        e().mark(function r() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      t.userinfo.get(!0, function (e) {
                        f.value = e || {};
                      })
                    );
                  case 3:
                    e.next = 7;
                    break;
                  case 5:
                    (e.prev = 5), (e.t0 = e.catch(0));
                  case 7:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[0, 5]]
          );
        })
      );
    })(),
      t.provide("useMultiBrokerCardInfo", o.useMultiBrokerCard);
    var B = t.ref(!1);
    return (
      t.onBeforeMount(function () {
        !(function () {
          r(
            this,
            null,
            e().mark(function r() {
              var n;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.prev = 0), u.initCardSupportVersion())) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return", void (B.value = !1));
                      case 3:
                        return (
                          (n = t.wx$1.getStorageSync("_qluin")),
                          (e.next = 6),
                          t.judgeGrayUser(n, "6474787634")
                        );
                      case 6:
                        if (!e.sent) {
                          e.next = 10;
                          break;
                        }
                        (e.t0 = void (B.value = !0)), (e.next = 11);
                        break;
                      case 10:
                        e.t0 = void (B.value = !1);
                      case 11:
                        return e.abrupt("return", e.t0);
                      case 14:
                        return (
                          (e.prev = 14),
                          (e.t1 = e.catch(0)),
                          e.abrupt("return", void (B.value = !1))
                        );
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [[0, 14]]
              );
            })
          );
        })();
      }),
      {
        isPc: d,
        extraComRef: h,
        userInfo: f,
        isPcDisable: l,
        hasBind: w,
        userName: p,
        isTradeEnable: C,
        getTaskSelector: function (e) {
          x.value = e;
        },
        fetchData: S,
        toBrokerLoginCom: function () {
          var e;
          null == (e = h.value) || e.toBrokerLogin();
        },
        handleSetUserName: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          p.value = e;
        },
        cardGrayUser: B,
        toOpenAccount: function () {
          t.wx$1.switchTab({ url: "/pages/index/trade" });
        },
        goApplyWithPc: function () {
          t.wx$1.navigateTo({ url: "/pages/noaccount/textImage/TextImage" });
        },
      }
    );
  },
  data: function () {
    return { useJumpDetail: n.useJumpDetail, isRendered: !1 };
  },
  onPageShow: function () {
    return r(
      this,
      null,
      e().mark(function r() {
        var n;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    this.preStr || (this.preStr = this.getMultiBrokerStr()),
                    (e.next = 3),
                    this.fetchData()
                  );
                case 3:
                  if (t.hasFixedPluginRender()) {
                    e.next = 7;
                    break;
                  }
                  if (((n = this.getMultiBrokerStr()), this.preStr === n)) {
                    e.next = 7;
                    break;
                  }
                  return e.abrupt(
                    "return",
                    void t.wx$1.reLaunch({ url: "/pages/index/account/main" })
                  );
                case 7:
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
  onPageHide: function () {
    this.preStr = this.getMultiBrokerStr();
  },
  onShareAppMessage: function () {
    return { title: "你能用微信盯盘啦！", path: "/pages/index/index" };
  },
  onShareTimeline: function () {
    var e;
    return (
      null == (e = t.Request) ||
        e.reportMTAData({ eventName: "xcx_share_timeline" }),
      { title: "你能用微信盯盘啦" }
    );
  },
  methods: {
    handleComMounted: function () {
      (this.isRendered = !0), this.$emit("mounted");
    },
    getMultiBrokerStr: function () {
      if (t.hasFixedPluginRender()) return "";
      var e = t.getInstance().multiBrokerRes,
        r = "";
      try {
        r = JSON.stringify(e);
      } catch (e) {
        r = "";
      }
      return r;
    },
    refreshUserCenterData: function () {
      return r(
        this,
        null,
        e().mark(function r() {
          var t, n;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      null ==
                      (n = null == (t = this.$refs) ? void 0 : t.accountRef)
                        ? void 0
                        : n.getUserCenterData()
                    );
                  case 2:
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
  },
};
Array ||
  (
    t.resolveComponent("account-main-card") +
    t.resolveComponent("account") +
    t.resolveComponent("extraCom") +
    t.resolveComponent("brokerUserName")
  )();
var s = t._export_sfc(i, [
  [
    "render",
    function (e, r, n, o, a, u) {
      return t.e(
        {
          a: t.o(o.toOpenAccount, 424),
          b: t.o(o.toBrokerLoginCom, 425),
          c: t.sr("accountRef", "6164c925-0"),
          d: t.o(o.toBrokerLoginCom, 426),
          e: t.o(u.handleComMounted, 427),
          f: t.o(o.getTaskSelector, 428),
          g: t.o(o.goApplyWithPc, 429),
          h: t.p({
            "has-bind": o.hasBind,
            "is-pc-disable": o.isPcDisable,
            "is-pc": o.isPc,
            params: n.params,
            "premote-mixin": n.premoteMixin,
            "user-info": o.userInfo,
            "user-name": o.userName,
            "is-trade-enable": o.isTradeEnable,
            "is-card-gray-user": o.cardGrayUser,
          }),
          i: a.isRendered,
        },
        a.isRendered ? { j: t.sr("extraComRef", "6164c925-2") } : {},
        { k: t.o(o.handleSetUserName, 430) }
      );
    },
  ],
]);
wx.createComponent(s);
