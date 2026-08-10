var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../common/vendor.js"),
  s = require("../../model/apply/useApply.js"),
  o = require("../../model/apply/useApplyInit.js"),
  u = require("../../model/apply/useProgressBar.js");
require("../../service/sdk/lib/api.js"),
  require("../../service/sdk/platform/mp-weixin.js");
var a = require("../../utils/getPlatform.js");
require("../../service/broker.js"), require("../../cgi/base.js");
var l = require("../../utils/index.js");
require("../../utils/accountHelper.js");
var p = require("../../config/enum.js"),
  c = require("../../service/stat/mp-weixin.js"),
  d = require("../../stores/actconfig/useActconfig.js"),
  v = require("../../stores/subscribe/useSubscribe.js"),
  f = require("../../stores/apply/useChannel.js"),
  g = require("../../service/aegis/platform/not-wujie.js"),
  y = require("../../service/applyStepMonitor/monitor.js"),
  m = require("../../config/broker/11100/index.js"),
  A = p.USERSTATE,
  b = A.HASACCOUNT,
  h = A.HASBUNDLE,
  P = A.VERIFYING,
  q = A.FAILED,
  I = A.NOACCOUNT,
  S = i.ref(!1),
  j = u.useProgressBar(),
  x = j.updateConfig,
  T = j.setProgressInfo,
  C = j.getToolId,
  R = {
    name: "ApplyWrap",
    components: {
      Loading: function () {
        return "../../common/components/Loading/index.js";
      },
    },
    setup: function () {
      var p = i.getCurrentInstance().proxy,
        A = p.$route.name,
        j = a.getPlatform(),
        R = (j.bizPlatformVer, j.isZxg, j.isMpPlugin),
        E = (j.bizPlatform, i.inject("onPageInit", i.noop)),
        k = s.useApply(),
        $ = k.stepList,
        O = k.applyInfo,
        M = k.fetchApplyInfo,
        w = k.isRecoverMode,
        N = k.isFirstOpenAccount,
        _ = k.useTelAndIdFirstMode,
        L = k.curStepInfo,
        U = (k.nextStepInfo, k.setCurStep),
        B = k.resetApplyStep,
        Y = k.resetApplyInfo,
        F = (k.addExcludeStep, k.setApplyToolId),
        H = k.getWholeApplyQueue,
        V = k.addWholeQueueUpdatedListener,
        Q = o.useApplyInit().initArgs,
        W = f.useChannelStore();
      function D() {
        if (
          (a.getPlatform(),
          U(A),
          l.getIsMpPluginComponent() ||
            (_.value && "ApplyIdCard" === A
              ? p.$sdk.setPageTitle({ title: "基本信息" })
              : L.title && p.$sdk.setPageTitle({ title: L.title })),
          L.stat)
        ) {
          var e =
            { ApplyIdCard: { bindphone: _.value ? "1" : "0" } }[L.name] || {};
          w.value ||
            p.$stat.click("".concat(L.stat, ".first"), void 0, void 0, e, {
              syncMonitor: !0,
            }),
            N.value &&
              p.$stat.click("".concat(L.stat, ".new"), void 0, void 0, e, {
                syncMonitor: !0,
              });
        }
        try {
          var r = w.value ? "1" : "0",
            t = p.$route.path,
            n = getCurrentPages();
          (null == n ? void 0 : n.length) >= 1 &&
            (t = c.stat.getRetPath("", n[n.length - 1])),
            p.$stat.page(
              t || "",
              void 0,
              { is_recover: r },
              { syncMonitor: !0 }
            );
        } catch (e) {}
      }
      function G() {
        var e,
          r = !0,
          t = O.value,
          i = t.userstate,
          s = t.fundaccount;
        [b, h].includes(i) &&
          ((r = !1),
          p.$router.replace({
            name: "AccountBind",
            query: n(
              { accounts: s, tip: "您已开户 绑户后即可进行交易" },
              p.$route.query
            ),
          }),
          g.aegisReporter.reportEvent("MONITOR-APPLY-ROUTER-NOT-MATCH"));
        var o = {};
        if (R) {
          var u = l.getCurRouteInfo() || {};
          if ("pages/index/trade" === (null == u ? void 0 : u.route)) return r;
          (null == u ? void 0 : u.name) && A !== u.name && (A = u.name);
        }
        if (["ApplyIndex", "ApplyRecover", "ApplyProgress"].includes(A))
          switch (i) {
            case P:
              e = "ApplyProgress";
              break;
            case q:
              e = "ApplyRecover";
              break;
            case I:
              e = "ApplyGuide";
          }
        else
          i === P &&
            "ApplyAdvisory" !== A &&
            ((e = "ApplyProgress"), (o = { submittip: 1 }));
        return (
          e &&
            A !== e &&
            ((r = !1),
            p.$router.replace({ name: e, query: n(n({}, p.$route.query), o) }),
            g.aegisReporter.reportEvent("MONITOR-APPLY-ROUTER-NOT-MATCH", {
              ext2: e,
              ext3: A,
            })),
          r
        );
      }
      function z(e) {
        return Z.apply(this, arguments);
      }
      function Z() {
        return (Z = t(
          e().mark(function r(t) {
            var n, i, s;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      T(t),
                      (n = c.stat.getChannel()),
                      (i = n.fchannel_id_o),
                      (s = n.fchannel_id_fm_i),
                      (e.next = 4),
                      x(m.brokerConfig.base.code, { channelO: i, channelI: s })
                    );
                  case 4:
                    F(C());
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )).apply(this, arguments);
      }
      function J() {
        E && E();
      }
      var K = i.ref(!1);
      function X() {
        K.value && G() && (D(), J());
      }
      return (
        i.onMounted(
          t(
            e().mark(function t() {
              var s, o, a, l, c, f, b, h, P, q, I, j, x, T, C;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        i.wx$1.hideShareMenu({
                          menus: ["shareAppMessage", "shareTimeline"],
                        }),
                        "1" ===
                          (null ==
                          (o =
                            null == (s = null == p ? void 0 : p.$route)
                              ? void 0
                              : s.query)
                            ? void 0
                            : o._reset_apply_) &&
                          (Y(), B(), (S.value = !1), y.reset()),
                        (e.next = 3),
                        M({ force: !0 })
                      );
                    case 3:
                      if (G()) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return");
                    case 5:
                      if ((D(), !S.value)) {
                        e.next = 9;
                        break;
                      }
                      return (
                        J(),
                        (K.value = !0),
                        W.setApplyChannel(!1),
                        (b = (null == (a = p.$route) ? void 0 : a.name) || A),
                        e.abrupt(
                          "return",
                          void (b && y.recordStepView({ route: b }))
                        )
                      );
                    case 9:
                      return (
                        (h = n({}, p.$route.query)),
                        Q(h),
                        O.value,
                        (P = []),
                        (e.next = 14),
                        W.setApplyChannel(!0)
                      );
                    case 14:
                      if (
                        "1" !==
                        (null ==
                        (c =
                          null == (l = null == p ? void 0 : p.$route)
                            ? void 0
                            : l.query)
                          ? void 0
                          : c.amssub)
                      ) {
                        e.next = 17;
                        break;
                      }
                      (q = v.useSubscribeStore()),
                        (I = q.getSubscribeStatus),
                        P.push(I());
                    case 17:
                      return (
                        v.useSubscribeStore().initSubscribeApplyFlag(),
                        u.showNewProgressBar() &&
                          ((j = d.useActConfigStore()),
                          (0, j.setActTempID)(),
                          P.push(
                            H().then(function (e) {
                              z(e), V(z);
                            })
                          )),
                        (e.next = 20),
                        Promise.all(P)
                      );
                    case 20:
                      (S.value = !0), J(), (K.value = !0);
                      try {
                        (x = r($.value || [])),
                          (T = x
                            .map(function (e) {
                              var r;
                              return null ==
                                (r = m.brokerConfig.dictionary.APPLY_STEP[e])
                                ? void 0
                                : r.stat;
                            })
                            .slice(1, -1)),
                          w.value
                            ? (p.$stat.click(
                                "trade.recover.enterprocess",
                                void 0,
                                void 0,
                                { queue: T.join(",") }
                              ),
                              g.aegisReporter.reportEvent(
                                "MONITOR-APPLY-RECOVER-STEPQUEUE",
                                { ext2: x.join(",") }
                              ))
                            : (p.$stat.click(
                                "trade.apply.enterprocess",
                                void 0,
                                void 0,
                                { queue: T.join(",") }
                              ),
                              g.aegisReporter.reportEvent(
                                "MONITOR-APPLY-STEPQUEUE",
                                { ext2: x.join(",") }
                              ));
                      } catch (e) {}
                      (C = (null == (f = p.$route) ? void 0 : f.name) || A) &&
                        y.recordStepView({ route: C });
                    case 26:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )
        ),
        i.onActivated(function () {
          X();
        }),
        i.onPageShow(function () {
          X();
        }),
        {
          isApplyBusinessInit: S,
          isPageInit: K,
          setPageInfo: D,
          matchPageWithStatus: G,
          handlePageInit: J,
        }
      );
    },
  };
exports._sfc_main = R;
