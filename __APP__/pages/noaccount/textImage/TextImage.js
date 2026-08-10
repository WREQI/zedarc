var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../OpenAccount/utils.js"),
  t = require("../../../common/vendor.js"),
  r = {
    components: {
      OpenTransferPageB: function () {
        return "../OpenAccount/OpenTransferPageB.js";
      },
    },
    setup: function (r, a) {
      var o = this,
        u = a.emit,
        s = t.ref(""),
        i = t.ref(""),
        S = t.ref(""),
        c = t.useBrokerInfo(),
        E = c.isDataFetched,
        l = c.highestPriorityDealer,
        _ = void 0 === l ? {} : l,
        v = c.hasBind,
        B = c.isBrokerPluginEnable,
        P = t.computed(function () {
          return (
            B(_.value.code) &&
            (Boolean(_.value.userstateFront & t.USERSTATE_PID.BIND_ACTIVE) ||
              (!Boolean(
                _.value.userstateFront & t.USERSTATE_PID.EXTERNAL_CHANNEL_APPLY
              ) &&
                (Boolean(_.value.userstateFront & t.USERSTATE_PID.VERIFYING) ||
                  Boolean(_.value.userstateFront & t.USERSTATE_PID.FAILED))))
          );
        });
      return (
        t.watch(
          function () {
            return E.value;
          },
          function (e) {
            e &&
              (P.value && c.isTradeEnable.value
                ? (s.value = n.USER_SUB_OPEN_STATUS.SUBSCRIBED_OPENED)
                : t.userinfo.get(
                    !0,
                    function (e) {
                      var t = "1" === e.subscribe;
                      t || v.value
                        ? t && !v.value
                          ? (s.value =
                              n.USER_SUB_OPEN_STATUS.SUBSCRIBED_NO_OPEN)
                          : !t && v.value
                          ? (s.value =
                              n.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_OPENED)
                          : (s.value = n.USER_SUB_OPEN_STATUS.SUBSCRIBED_OPENED)
                        : (s.value =
                            n.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_NO_OPEN);
                    },
                    function () {
                      s.value = v.value
                        ? n.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_OPENED
                        : n.USER_SUB_OPEN_STATUS.NO_SUBSCRIBE_NO_OPEN;
                    },
                    !0
                  ));
          },
          { immediate: !0 }
        ),
        t.onMounted(function () {
          return (
            (n = o),
            null,
            (t = e().mark(function n() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      u("pageInit");
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })),
            new Promise(function (e, r) {
              var a = function (e) {
                  try {
                    u(t.next(e));
                  } catch (e) {
                    r(e);
                  }
                },
                o = function (e) {
                  try {
                    u(t.throw(e));
                  } catch (e) {
                    r(e);
                  }
                },
                u = function (n) {
                  return n.done
                    ? e(n.value)
                    : Promise.resolve(n.value).then(a, o);
                };
              u((t = t.apply(n, null)).next());
            })
          );
          var n, t;
        }),
        {
          isSupportBrokerPlugin: P,
          isDataFetched: E,
          highestPriorityDealer: _,
          hasBind: v,
          status: s,
          scode: i,
          market: S,
          onPluginReady: function () {
            u("pluginReady");
          },
        }
      );
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("OpenTransferPageB")
  )();
var a = t._export_sfc(r, [
  [
    "render",
    function (e, n, r, a, o, u) {
      return t.e(
        { a: e.rootFontSize, b: t.p({ "no-auto": !0 }), c: a.isDataFetched },
        a.isDataFetched
          ? {
              d: t.o(a.onPluginReady, 73),
              e: t.p({
                scode: a.scode,
                market: a.market,
                "user-open-sub-status": a.status,
              }),
            }
          : {}
      );
    },
  ],
]);
wx.createPage(a);
