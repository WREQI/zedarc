var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, n, r) {
    return new Promise(function (o, i) {
      var t = function (e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(t, a);
        };
      s((r = r.apply(e, n)).next());
    });
  },
  r = require("../../../common/vendor.js"),
  o = require("../hooks/useMultiBrokerCardInfo.js"),
  i = require("./useCardLoad.js"),
  t = {
    components: {
      BrokerUnbindCard: function () {
        return "../@tencent/wzq-profile-page/components/brokerUnbindCard.js";
      },
      BrokerAssetCard: function () {
        return "../../../components/accountBrokerAsset.js";
      },
      AccountBrokerPassword: function () {
        return "./accountBrokerPassword.js";
      },
    },
    setup: function (t, a) {
      var s = this,
        u = a.emit,
        c = r.ref(!1);
      r.onMounted(function () {
        return n(
          s,
          null,
          e().mark(function n() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.getPcIsDisabledTrade();
                  case 2:
                    c.value = e.sent;
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        );
      });
      var p = r.useBrokerInfo(),
        l = p.rawHighestPriorityDealer,
        d = p.fetchData,
        f = p.setActiveBroker,
        g = o.useMultiBrokerCard(),
        v = g.applyingList,
        y = g.verifyingList,
        h = g.failedList,
        k = g.bindingList,
        B = g.isMaintain,
        b = g.toApplyProgressPage,
        A = i.useCardLoad();
      r.provide("cardLoadManager", A);
      var w = r.computed(function () {
          var e;
          return (
            (null ==
            (e = k.value.filter(function (e) {
              return e.code === l.value.code;
            }))
              ? void 0
              : e[0]) || null
          );
        }),
        P = r.computed(function () {
          var e;
          return v.value.length > 0
            ? null == (e = v.value)
              ? void 0
              : e[0]
            : null;
        }),
        L = r.computed(function () {
          var e;
          return y.value.length > 0
            ? null == (e = y.value)
              ? void 0
              : e[0]
            : null;
        }),
        m = r.computed(function () {
          var e;
          return h.value.length > 0
            ? null == (e = h.value)
              ? void 0
              : e[0]
            : null;
        });
      return {
        highestPriorityDealer: l,
        fetchData: d,
        setActiveBroker: f,
        binding: w,
        applying: P,
        verifying: L,
        failed: m,
        isMaintain: B,
        BULLETIN_TYPE: r.BULLETIN_TYPE,
        toApplyProgress: function (e) {
          b(e);
        },
        isShowAsset: function (e) {
          var n;
          return (
            (null == (n = r.brokerFuncConfig[e])
              ? void 0
              : n.supportAssetShow) || !1
          );
        },
        toAsset: function (o) {
          return n(
            s,
            null,
            e().mark(function n() {
              var i;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (i = o.code),
                        r.navigateToTrade({
                          dealercode: i,
                          name: "AssetIndex",
                        });
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          );
        },
        isPcDisable: c,
        openAccount: function () {
          u("openAccount");
        },
        loginAccount: function () {
          u("loginAccount");
        },
      };
    },
  };
Array ||
  (
    r.resolveComponent("broker-unbind-card") +
    r.resolveComponent("BrokerAssetCard") +
    r.resolveComponent("account-broker-password")
  )();
var a = r._export_sfc(t, [
  [
    "render",
    function (e, n, o, i, t, a) {
      return r.e(
        { a: i.binding },
        i.binding
          ? r.e(
              { b: i.isMaintain(i.binding, i.BULLETIN_TYPE.TRADE) },
              i.isMaintain(i.binding, i.BULLETIN_TYPE.TRADE)
                ? {
                    c: r.p({
                      "is-current-broker": !0,
                      type: "maintain",
                      broker: i.binding,
                      showMore: !0,
                      showBrokerBg: !0,
                    }),
                  }
                : i.isShowAsset(i.binding.code)
                ? {
                    g: r.p({
                      from: "accountMain",
                      "is-current-broker": !0,
                      "broker-code": i.binding.code,
                      showMore: !0,
                      showBrokerBg: !0,
                    }),
                  }
                : {
                    e: r.o(function (e) {
                      return i.toAsset(i.binding);
                    }, 1565),
                    f: r.p({
                      "is-current-broker": !0,
                      type: "unsupport",
                      broker: i.binding,
                      showMore: !0,
                      showBrokerBg: !0,
                    }),
                  },
              { d: !i.isShowAsset(i.binding.code) }
            )
          : i.applying
          ? r.e(
              { i: i.isMaintain(i.applying, i.BULLETIN_TYPE.TRADE) },
              i.isMaintain(i.applying, i.BULLETIN_TYPE.TRADE)
                ? {
                    j: r.p({
                      type: "maintain",
                      broker: i.applying,
                      showMore: !0,
                      showBrokerBg: !0,
                    }),
                  }
                : {
                    k: r.o(function (e) {
                      return i.toApplyProgress(i.applying);
                    }, 1566),
                    l: r.p({
                      type: "continue",
                      broker: i.applying,
                      showMore: !0,
                      showBrokerBg: !0,
                    }),
                  }
            )
          : i.verifying
          ? r.e(
              { n: i.isMaintain(i.verifying, i.BULLETIN_TYPE.APPLY) },
              i.isMaintain(i.verifying, i.BULLETIN_TYPE.APPLY)
                ? {
                    o: r.p({
                      type: "maintain",
                      broker: i.verifying,
                      showMore: !0,
                      showBrokerBg: !0,
                    }),
                  }
                : {
                    p: r.o(function (e) {
                      return i.toApplyProgress(i.verifying);
                    }, 1567),
                    q: r.p({
                      type: "verify",
                      broker: i.verifying,
                      showMore: !0,
                      showBrokerBg: !0,
                    }),
                  }
            )
          : i.failed
          ? r.e(
              { s: i.isMaintain(i.failed, i.BULLETIN_TYPE.APPLY) },
              i.isMaintain(i.failed, i.BULLETIN_TYPE.APPLY)
                ? {
                    t: r.p({
                      type: "maintain",
                      broker: e.failedList,
                      showMore: !0,
                      showBrokerBg: !0,
                    }),
                  }
                : {
                    v: r.o(function (e) {
                      return i.toApplyProgress(i.failed);
                    }, 1568),
                    w: r.p({
                      type: "recover",
                      broker: i.failed,
                      showMore: !0,
                      showBrokerBg: !0,
                    }),
                  }
            )
          : {
              x: r.o(function () {
                return i.openAccount && i.openAccount.apply(i, arguments);
              }, 1569),
              y: r.o(function () {
                return i.loginAccount && i.loginAccount.apply(i, arguments);
              }, 1570),
            },
        { h: i.applying, m: i.verifying, r: i.failed, z: !i.isPcDisable },
        i.isPcDisable ? {} : { A: r.p({ from: "accountMain" }) }
      );
    },
  ],
  ["__scopeId", "data-v-39e21785"],
]);
wx.createComponent(a);
