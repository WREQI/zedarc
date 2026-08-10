var e = require("../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../common/vendor.js"),
  r = require("./utils.js"),
  n = { chat: "chat", article: "article", trade: "trade" },
  a = {
    components: {
      OpenTransferPageB: function () {
        return "./OpenTransferPageB.js";
      },
      OpenTransferPageA: function () {
        return "./OpenTransferPageA.js";
      },
      TradePage: function () {
        return "../components/index.js";
      },
      BrokerPlugin: function () {
        return "../../../components/brokerPlugin.js";
      },
    },
    props: {
      pageHide: { type: Boolean, required: !0 },
      openfrom: {
        type: String,
        required: !0,
        default: r.OPEN_MESSAGE_PATH_PARAM.MY,
      },
      scode: { type: String, default: "" },
      market: { type: String, default: "" },
      statData: { type: String, default: "" },
    },
    setup: function (a, o) {
      var u,
        i,
        s = this,
        l = o.emit,
        p = t.ref(n.article),
        c = t.ref(null),
        d = t.ref(""),
        S =
          (null ==
          (i = null == (u = getApp().globalData.detect) ? void 0 : u.env)
            ? void 0
            : i.IS_PCWEIXIN) || !1,
        f = t.ref(!S),
        E = t.useBrokerInfo(),
        T = E.isDataFetched,
        v = E.highestPriorityDealer,
        _ = void 0 === v ? {} : v,
        P = E.hasBind,
        B = E.isBrokerPluginEnable,
        g = t.computed(function () {
          return (
            B(_.value.code) &&
            (Boolean(_.value.userstateFront & t.USERSTATE_PID.BIND_ACTIVE) ||
              (!Boolean(
                _.value.userstateFront & t.USERSTATE_PID.EXTERNAL_CHANNEL_APPLY
              ) &&
                (Boolean(_.value.userstateFront & t.USERSTATE_PID.VERIFYING) ||
                  Boolean(_.value.userstateFront & t.USERSTATE_PID.FAILED))))
          );
        }),
        h = t.ref(!1);
      function A() {
        t.userinfo.get(
          !0,
          function (e) {
            c.value = e;
            var t = "1" === e.subscribe;
            t || P.value
              ? t && !P.value
                ? (d.value = r.USER_SUB_OPEN_STATUS.SUBSCRIBED_NO_OPEN)
                : !t && P.value
                ? (d.value = r.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_OPENED)
                : (d.value = r.USER_SUB_OPEN_STATUS.SUBSCRIBED_OPENED)
              : (d.value = r.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_NO_OPEN);
          },
          function () {
            d.value = P.value
              ? r.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_OPENED
              : r.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_NO_OPEN;
          },
          !0
        ),
          (function () {
            var e = t.wx$1.getEnterOptionsSync().scene;
            1019 != e ||
              E.isTradeEnable.value ||
              t.mpReporter.reportEvent("trade-disable-from-9box"),
              1043 != e ||
                E.isTradeEnable.value ||
                "OyT00p000f063" !== a.statData ||
                t.mpReporter.reportEvent("trade-disable-from-msg");
          })();
      }
      function O() {
        l("pluginReady");
      }
      return (
        t.watch(
          function () {
            return [f.value, T.value];
          },
          function () {
            if (f.value && T.value) {
              if (h.value) return (p.value = n.article), void A();
              var e;
              try {
                e = t.hasHostAppId() || "";
              } catch (t) {
                e = "";
              }
              if (e && e !== r.OUTAPPID.LCTAPP)
                return (p.value = n.chat), void A();
              E.isTradeEnable.value && (p.value = n.trade), A();
            }
          },
          { immediate: !0 }
        ),
        t.watch(
          function () {
            return d.value;
          },
          function (e) {
            [
              r.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_NO_OPEN,
              r.USER_SUB_OPEN_STATUS.SUBSCRIBED_NO_OPEN,
            ].includes(e) &&
              "OyT00p000f063" === a.statData &&
              t.wx$1.switchTab({ url: "/pages/index/index" });
          },
          { immediate: !0 }
        ),
        t.watch(
          function () {
            return P.value;
          },
          function (e) {
            e ||
              setTimeout(function () {
                O();
              });
          },
          { immediate: !0 }
        ),
        t.onBeforeMount(function () {
          return (
            (r = s),
            null,
            (n = e().mark(function r() {
              var n;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.getPcIsDisabledTrade();
                    case 2:
                      (n = e.sent), (h.value = n), (f.value = !0);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })),
            new Promise(function (e, t) {
              var a = function (e) {
                  try {
                    u(n.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                o = function (e) {
                  try {
                    u(n.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                u = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(a, o);
                };
              u((n = n.apply(r, null)).next());
            })
          );
          var r, n;
        }),
        t.onMounted(function () {
          l("pageInit");
        }),
        {
          isLoadEnd: f,
          ABTestMap: n,
          showType: p,
          isSupportBrokerPlugin: g,
          isDataFetched: T,
          highestPriorityDealer: _,
          hasBind: P,
          status: d,
          onPluginReady: O,
          userinfo: c,
        }
      );
    },
  };
Array ||
  (
    t.resolveComponent("OpenTransferPageA") +
    t.resolveComponent("OpenTransferPageB") +
    t.resolveComponent("broker-plugin") +
    t.resolveComponent("trade-page")
  )();
var o = t._export_sfc(a, [
  [
    "render",
    function (e, r, n, a, o, u) {
      return t.e(
        { a: a.isDataFetched && a.isLoadEnd },
        a.isDataFetched && a.isLoadEnd
          ? t.e(
              {
                b:
                  a.showType === a.ABTestMap.chat &&
                  a.userinfo &&
                  a.userinfo.userstate,
              },
              a.showType === a.ABTestMap.chat &&
                a.userinfo &&
                a.userinfo.userstate
                ? {
                    c: t.p({
                      "page-hide": n.pageHide,
                      openfrom: n.openfrom,
                      puserinfo: a.userinfo,
                    }),
                  }
                : a.showType === a.ABTestMap.article
                ? {
                    e: t.o(a.onPluginReady, 1308),
                    f: t.p({
                      scode: n.scode,
                      market: n.market,
                      "user-open-sub-status": a.status,
                    }),
                  }
                : a.showType === a.ABTestMap.trade
                ? t.e(
                    { h: a.isSupportBrokerPlugin },
                    a.isSupportBrokerPlugin
                      ? { i: t.o(a.onPluginReady, 1309) }
                      : {
                          j: t.o(a.onPluginReady, 1310),
                          k: t.p({ "page-hide": n.pageHide }),
                        }
                  )
                : {},
              {
                d: a.showType === a.ABTestMap.article,
                g: a.showType === a.ABTestMap.trade,
              }
            )
          : {}
      );
    },
  ],
]);
wx.createComponent(o);
