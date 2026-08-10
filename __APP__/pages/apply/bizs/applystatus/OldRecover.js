var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var n = require("../../../../model/apply/useApply.js");
require("../../../../service/broker.js");
var t = require("../../../../utils/getPlatform.js"),
  o = require("../../../../utils/index.js"),
  i = require("../../../../common/vendor.js"),
  s = require("../../../../service/navigateMp.js"),
  a = require("../../../../config/mpConfig.js"),
  u = require("../../../../model/apply/useProgressBar.js"),
  p = require("../../../../stores/app/useNavbar.js"),
  l = require("../../../../config/broker/11100/index.js"),
  c = t.getPlatform(),
  f = c.isZxg,
  g = c.isQuickApp,
  d = c.isMiniProgram,
  m = c.isMpPlugin,
  b = c.isPCWeixin,
  v = "reopen",
  h = "ban",
  y = "bind",
  x = {
    options: { styleIsolation: "shared" },
    components: {
      StSteps: function () {
        return "../../../../common/components/Steps/index.js";
      },
      MpDialog: function () {
        return "../../../../common/components/Dialog/Dialog.js";
      },
      FootPrint: function () {
        return "../../../../bizs/apply/FootPrint.js";
      },
      MultiBrokerEntry: function () {
        return "../../../../components/MultiBrokerEntry/MultiBrokerEntry.js";
      },
      ProgressBar: function () {
        return "../../../../bizs/apply/ProgressBar.js";
      },
      SubscribeDialog: function () {
        return "../../../../bizs/apply/recover/SubscribeDialog.js";
      },
    },
    setup: function () {
      var e = n.useApply(),
        r = e.applyInfo,
        t = e.fetchApplyInfo,
        s = e.curStepConf,
        a = e.curStepInfo,
        c = e.nextStepInfo,
        f = e.navigateNextStep,
        g = i.storeToRefs(p.useNavbarStore()).shownav,
        b = u.showNewProgressBar(),
        v = i.inject("scrollHeight", function () {
          return i.ref(0);
        }),
        h = o.getCurRouteInfo() || {},
        y = i.computed(function () {
          if ("pages/index/trade" === (null == h ? void 0 : h.route)) {
            var e = v.value;
            return e && e > 0 ? "".concat(e, "px") : "100vh";
          }
          return "";
        }),
        x = i.computed(function () {
          var e;
          return (
            !(null == (e = l.brokerConfig.common) ? void 0 : e.hideNav) &&
            (g.value || (d && !m))
          );
        }),
        k = i.ref(!1),
        j = i.computed(function () {
          return [
            {
              text: "申请提交成功",
              desc: i.dayjs(r.value.apply_time).format("YYYY-MM-DD HH:mm"),
              icon: "check",
            },
            {
              text: "审核未通过",
              desc: o.isTradeTime() ? "请联系客服" : "请重新提交",
              icon: "more",
            },
            { text: "开户成功", desc: "消息提醒", icon: "_" },
          ];
        }),
        P = i.computed(function () {
          return [
            {
              text: "申请提交成功",
              desc: i.dayjs(r.value.apply_time).format("YYYY-MM-DD HH:mm"),
              done: !0,
              active: !1,
            },
            {
              text: "审核未通过",
              desc: o.isTradeTime() ? "请联系客服" : "请重新提交",
              icon: "more",
              done: !1,
              active: !0,
            },
          ];
        }),
        M = i.ref(!1);
      return {
        applyInfo: r,
        fetchApplyInfo: t,
        curStepConf: s,
        curStepInfo: a,
        nextStepInfo: c,
        navigateNextStep: f,
        hasProgressBar: b,
        loading: !0,
        buttonText: "",
        isPending: !1,
        steps: j,
        progressBarTitle: P,
        showMoreFailDialog: M,
        shownav: x,
        pageHeight: y,
        subscribleDialogVisible: k,
      };
    },
    computed: {
      btnText: function () {
        var e;
        switch (this.failType) {
          case v:
            e = "重新开户";
            break;
          case h:
            e = "返回开户首页";
            break;
          case y:
            e = "立即绑户交易";
            break;
          default:
            e = "快速完善资料";
        }
        return e;
      },
      reasons: function () {
        var e = this.applyInfo.fail_reasons || [];
        return e.map(function (r, n) {
          var t = r.reason,
            o = e.length > 1 ? "".concat(n + 1, "、") : "",
            i = t.includes("。") ? t.indexOf("。") : t.length;
          return {
            seriaNumber: o,
            outline: t.substring(0, i + 1),
            text: t.substring(i + 1),
          };
        });
      },
      failType: function () {
        if ("1" === this.applyInfo.has_account) return y;
        switch (this.applyInfo.reject_type) {
          case "2":
            return h;
          case "1":
            return v;
          default:
            return "recover";
        }
      },
    },
    mounted: function () {
      var n = this;
      (f || g) &&
        this.$sdk.pageWillAppear(
          r(
            e().mark(function r() {
              var t = arguments;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          !(t.length > 0 && void 0 !== t[0] ? t[0] : {}).refresh
                        ) {
                          e.next = 10;
                          break;
                        }
                        return (
                          (e.prev = 2),
                          (e.next = 5),
                          n.fetchApplyInfo({ force: !0 })
                        );
                      case 5:
                        n.$router.replace({ name: "ApplyGuide" }),
                          (e.next = 10);
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(2));
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [[2, 8]]
              );
            })
          )
        );
    },
    methods: {
      takeAction: function () {
        var n = this;
        return r(
          e().mark(function r() {
            var t, i, u, p;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    b
                      ? (n.subscribleDialogVisible = !0)
                      : n.failType !== h
                      ? n.failType !== y
                        ? n.isPending ||
                          ((n.isPending = !0),
                          f || g
                            ? ((t = [
                                ""
                                  .concat(location.origin)
                                  .concat(location.pathname),
                                "/apply/guide?to=apply",
                              ]
                                .filter(Boolean)
                                .join("#")),
                              (i = o.keepClientURlArgs(t)),
                              n.$sdk.openUrlWithExtraWebview({ url: i }))
                            : n.showMpPluginSubscribe().then(function () {
                                n.navigateNextStep();
                              }),
                          (n.isPending = !1),
                          n.$stat.click("trade.apply.recover.improvedata"))
                        : f
                        ? ((u = [
                            ""
                              .concat(location.origin)
                              .concat(location.pathname),
                            "/apply/bind",
                          ]
                            .filter(Boolean)
                            .join("#")),
                          (p = o.keepClientURlArgs(u)),
                          n.$sdk.openUrlWithExtraWebview({ url: p }))
                        : g
                        ? n.$sdk.launchZxgApp()
                        : n.$router.push({ name: "AccountBind" })
                      : s.navigateTo({
                          url: "/pages/apply/index",
                          linkType: a.linkTypeMap.plugin2MainMp,
                        });
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )();
      },
      showMpPluginSubscribe: function () {
        var e,
          r,
          n,
          t,
          o =
            null ==
            (t =
              null ==
              (n =
                null ==
                (r =
                  null == (e = requireMiniProgram()) ? void 0 : e.main2Plugin)
                  ? void 0
                  : r.call(e))
                ? void 0
                : n.subscribeApplyInfo)
              ? void 0
              : t.call(n),
          i = o.hasSubscribeCount,
          s = o.requestSubscibe,
          a = o.getIsOfficialAccountSubscribed;
        return !a || (null == a ? void 0 : a())
          ? Promise.resolve(!0)
          : null == i
          ? void 0
          : i()
              .then(function (e) {
                return (
                  !!e ||
                  s()
                    .then(function () {
                      return !1;
                    })
                    .catch(function () {
                      return !1;
                    })
                );
              })
              .catch(function (e) {
                return !0;
              });
      },
    },
  };
Array ||
  (
    i.resolveComponent("progress-bar") +
    i.resolveComponent("st-steps") +
    i.resolveComponent("CommonResult") +
    i.resolveComponent("multi-broker-entry") +
    i.resolveComponent("FootPrint") +
    i.resolveComponent("mp-dialog") +
    i.resolveComponent("subscribe-dialog")
  )(),
  Math;
var k = i._export_sfc(x, [
  [
    "render",
    function (e, r, n, t, o, s) {
      return i.e(
        { a: t.hasProgressBar },
        t.hasProgressBar
          ? {
              b: i.p({
                titles: t.progressBarTitle,
                "step-name": t.curStepInfo.name,
                "status-page": !0,
              }),
            }
          : { c: i.p({ current: 1, steps: t.steps }) },
        {
          d: i.f(s.reasons.slice(0, 2), function (e, r, n) {
            return {
              a: i.t(e.seriaNumber),
              b: i.t(e.outline),
              c: i.t(e.text),
              d: r,
            };
          }),
          e: 1 === s.reasons.length ? 1 : "",
          f: s.reasons.length > 2,
        },
        s.reasons.length > 2
          ? {
              g: i.o(function (e) {
                return (t.showMoreFailDialog = !0);
              }),
            }
          : {},
        { h: i.p({ status: "fail" }), i: t.applyInfo.opertips },
        t.applyInfo.opertips ? { j: i.t(t.applyInfo.opertips) } : {},
        {
          k: i.t(s.btnText),
          l: i.o(function () {
            return s.takeAction && s.takeAction.apply(s, arguments);
          }),
          m: i.p({ "page-type": "recover" }),
          n: i.f(s.reasons, function (e, r, n) {
            return {
              a: i.t(e.seriaNumber),
              b: i.t(e.outline),
              c: i.t(e.text),
              d: r,
            };
          }),
          o: i.o(function (e) {
            return (t.showMoreFailDialog = !1);
          }),
          p: i.p({
            visible: t.showMoreFailDialog,
            title: "审核未通过的原因",
            "confirm-button-text": "我知道了",
          }),
          q: i.o(function (e) {
            return (t.subscribleDialogVisible = !1);
          }),
          r: i.p({ visible: t.subscribleDialogVisible }),
          s: i.p({ id: "mp-dialog" }),
          t: t.shownav ? 1 : "",
          v: t.pageHeight,
        }
      );
    },
  ],
  ["__scopeId", "data-v-8ae7438f"],
]);
wx.createComponent(k);
