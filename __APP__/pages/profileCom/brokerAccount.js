require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, r, n) {
    return new Promise(function (t, o) {
      var i = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(i, c);
        };
      a((n = n.apply(e, r)).next());
    });
  },
  n = require("../../common/vendor.js"),
  t = require("./hooks/useMultiBrokerCardInfo.js"),
  o = require("./hooks/useJumpDetail.js"),
  i = require("./components/useCardLoad.js");
getApp().globalData;
var c = {
  components: {
    AddBrokerAccountCard: function () {
      return "./@tencent/wzq-profile-page/components/addBrokerAccountCard.js";
    },
    BrokerUnbindCard: function () {
      return "./@tencent/wzq-profile-page/components/brokerUnbindCard.js";
    },
    BrokerAssetCard: function () {
      return "../../components/accountBrokerAsset.js";
    },
    AccountBrokerSheet: function () {
      return "../apply/components/BrokerActionSheet.js";
    },
    AccountBrokerPassword: function () {
      return "./components/accountBrokerPassword.js";
    },
  },
  setup: function () {
    var c = this,
      a = n.ref(!1);
    n.onMounted(function () {
      return r(
        c,
        null,
        e().mark(function r() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), n.getPcIsDisabledTrade();
                case 2:
                  a.value = e.sent;
                case 3:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      );
    });
    var s = n.ref(
        ["black", "dark"].includes(n.StockBridge.getStorage("user/skin"))
          ? "dark"
          : "light"
      ),
      u = t.useMultiBrokerCard(),
      d = u.applyingList,
      p = u.verifyingList,
      l = u.failedList,
      f = u.bindingList,
      g = u.isMaintain,
      h = u.canApplyList,
      k = u.canBindList,
      L = u.toApplyProgressPage,
      y = n.useBrokerInfo(),
      B = y.rawHighestPriorityDealer,
      b = y.fetchData,
      v = y.setActiveBroker,
      A = o.useJumpDetail(),
      P = A.tapAccountBroker,
      m = A.showAccountBrokerSheet,
      w = A.accountBrokerSheetType,
      S = A.closeAccountBrokerSheet,
      T = i.useCardLoad();
    n.provide("cardLoadManager", T);
    var E = n.computed(function () {
      return !n.hasFixedPluginRender();
    });
    return (
      n.onBeforeUnmount(function () {
        m.value = !1;
      }),
      {
        highestPriorityDealer: B,
        applyingList: d,
        verifyingList: p,
        failedList: l,
        bindingList: f,
        isMaintain: g,
        isShowAsset: function (e) {
          var r;
          return (
            (null == (r = n.brokerFuncConfig[e])
              ? void 0
              : r.supportAssetShow) || !1
          );
        },
        showAccountBrokerSheet: m,
        accountBrokerSheetType: w,
        closeAccountBrokerSheet: S,
        BULLETIN_TYPE: n.BULLETIN_TYPE,
        toApplyProgress: function (e) {
          L(e);
        },
        goAddBrokerAccount: function () {
          0 !== h.value.length || 0 !== k.value.length
            ? P()
            : n.wx$1.showToast({
                title: "当前没有可新开/绑定的券商账户",
                icon: "none",
                duration: 2e3,
              });
        },
        isPcDisable: a,
        fetchData: b,
        toAsset: function (t) {
          return r(
            c,
            null,
            e().mark(function r() {
              var o, i, c, a;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((o = t.code), (i = o === B.value.code), (c = ""), i)
                        ) {
                          e.next = 12;
                          break;
                        }
                        return (e.prev = 3), (e.next = 6), v(o);
                      case 6:
                        (c = "1"), (e.next = 12);
                        break;
                      case 9:
                        (e.prev = 9), (e.t0 = e.catch(3)), (c = "2");
                      case 12:
                        (a = !i && E.value),
                          n.navigateToTrade({
                            dealercode: o,
                            name: "AssetIndex",
                            query: { showSwitchToast: i ? "" : c },
                            relaunch: a,
                          });
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [[3, 9]]
              );
            })
          );
        },
        skin: s,
        needDownGrade: E,
      }
    );
  },
  methods: {
    getMultiBrokerStr: function () {
      if (n.hasFixedPluginRender()) return "";
      var e = n.getInstance().multiBrokerRes,
        r = "";
      try {
        r = JSON.stringify(e);
      } catch (e) {
        r = "";
      }
      return r;
    },
  },
  onShow: function () {
    return r(
      this,
      null,
      e().mark(function r() {
        var t;
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
                  if (n.hasFixedPluginRender()) {
                    e.next = 6;
                    break;
                  }
                  (t = this.getMultiBrokerStr()),
                    this.preStr !== t &&
                      n.wx$1.reLaunch({
                        url: "/pages/profileCom/brokerAccount",
                      });
                case 6:
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
  onHide: function () {
    this.preStr = this.getMultiBrokerStr();
  },
  onPageShow: function () {
    this.skin = ["black", "dark"].includes(
      n.StockBridge.getStorage("user/skin")
    )
      ? "dark"
      : "light";
  },
};
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog") +
    n.resolveComponent("broker-unbind-card") +
    n.resolveComponent("BrokerAssetCard") +
    n.resolveComponent("add-broker-account-card") +
    n.resolveComponent("account-broker-sheet") +
    n.resolveComponent("account-broker-password")
  )();
var a = n._export_sfc(c, [
  [
    "render",
    function (e, r, t, o, i, c) {
      return n.e(
        {
          a: e.rootFontSize,
          b:
            o.verifyingList.length +
              o.failedList.length +
              o.applyingList.length >
            0,
        },
        (o.verifyingList.length,
        o.failedList.length,
        o.applyingList.length,
        {}),
        {
          c: n.f(o.verifyingList, function (e, r, t) {
            return n.e(
              { a: o.isMaintain(e, o.BULLETIN_TYPE.APPLY) },
              o.isMaintain(e, o.BULLETIN_TYPE.APPLY)
                ? {
                    b: "55f1c729-2-" + t,
                    c: n.p({ type: "maintain", broker: e }),
                  }
                : {
                    d: n.o(
                      function (e) {
                        return o.toApplyProgress(o.verifyingList[r]);
                      },
                      264,
                      "verifyingBroker".concat(e.code)
                    ),
                    e: "55f1c729-3-" + t,
                    f: n.p({ type: "verify", broker: e }),
                  },
              { g: "verifyingBroker".concat(e.code), h: "".concat(e.code) }
            );
          }),
          d: n.f(o.failedList, function (e, r, t) {
            return n.e(
              { a: o.isMaintain(e, o.BULLETIN_TYPE.APPLY) },
              o.isMaintain(e, o.BULLETIN_TYPE.APPLY)
                ? {
                    b: "55f1c729-4-" + t,
                    c: n.p({ type: "maintain", broker: e }),
                  }
                : {
                    d: n.o(
                      function (e) {
                        return o.toApplyProgress(o.failedList[r]);
                      },
                      265,
                      "verifyingBroker".concat(e.code)
                    ),
                    e: "55f1c729-5-" + t,
                    f: n.p({ type: "recover", broker: e }),
                  },
              { g: "verifyingBroker".concat(e.code), h: "".concat(e.code) }
            );
          }),
          e: n.f(o.applyingList, function (e, r, t) {
            return n.e(
              { a: o.isMaintain(e, o.BULLETIN_TYPE.TRADE) },
              o.isMaintain(e, o.BULLETIN_TYPE.TRADE)
                ? {
                    b: "55f1c729-6-" + t,
                    c: n.p({ type: "maintain", broker: e }),
                  }
                : {
                    d: n.o(
                      function (e) {
                        return o.toApplyProgress(o.applyingList[r]);
                      },
                      266,
                      "applyingBroker".concat(e.code)
                    ),
                    e: "55f1c729-7-" + t,
                    f: n.p({ type: "continue", broker: e }),
                  },
              { g: "applyingBroker".concat(e.code), h: "".concat(e.code) }
            );
          }),
          f: o.bindingList.length > 0,
        },
        o.bindingList.length > 0 ? { g: n.t(o.bindingList.length) } : {},
        {
          h: n.f(o.bindingList, function (e, r, t) {
            return n.e(
              { a: o.isMaintain(e, o.BULLETIN_TYPE.TRADE) },
              o.isMaintain(e, o.BULLETIN_TYPE.TRADE)
                ? {
                    b: "55f1c729-8-" + t,
                    c: n.p({
                      "is-current-broker":
                        e.code === o.highestPriorityDealer.code,
                      type: "maintain",
                      broker: e,
                    }),
                  }
                : !o.isShowAsset(e.code) || o.needDownGrade
                ? {
                    e: n.o(
                      function (e) {
                        return o.toAsset(o.bindingList[r]);
                      },
                      267,
                      "bindingBroker".concat(e.code)
                    ),
                    f: "55f1c729-9-" + t,
                    g: n.p({
                      "is-current-broker":
                        e.code === o.highestPriorityDealer.code,
                      type: o.needDownGrade ? "downgrade" : "unsupport",
                      broker: e,
                    }),
                  }
                : {
                    h: "55f1c729-10-" + t,
                    i: n.p({
                      "is-current-broker":
                        e.code === o.highestPriorityDealer.code,
                      "broker-code": e.code,
                      from: "brokerAccount",
                    }),
                  },
              {
                d: !o.isShowAsset(e.code) || o.needDownGrade,
                j: "bindingBroker".concat(e.code),
                k: "".concat(e.code),
              }
            );
          }),
          i: n.o(o.goAddBrokerAccount, 268),
          j: o.showAccountBrokerSheet,
          k: n.o(o.closeAccountBrokerSheet, 269),
          l: n.p({ type: o.accountBrokerSheetType }),
          m: !o.isPcDisable,
        },
        o.isPcDisable ? {} : { n: n.p({ from: "brokerAccount" }) },
        { o: o.skin, p: o.skin }
      );
    },
  ],
  ["__scopeId", "data-v-55f1c729"],
]);
wx.createPage(a);
