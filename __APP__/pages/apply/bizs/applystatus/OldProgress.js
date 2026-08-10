var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var n = require("../../../../common/vendor.js"),
  r = require("../../../../utils/getPlatform.js"),
  i = require("../../../../model/apply/useApply.js");
require("../../../../service/broker.js");
var s = require("../../../../utils/index.js"),
  o = require("../../../../config/mpConfig.js"),
  a = require("../../../../service/navigateMp.js");
require("../../../../service/stat/mp-weixin.js"),
  require("../../../../service/sdk/lib/api.js");
var u = require("../../../../service/sdk/platform/mp-weixin.js"),
  c = require("../../../../cgi/apply.js"),
  p = require("../../../../model/apply/useProgressBar.js"),
  l = require("../../../../stores/app/useNavbar.js"),
  f = require("../../../../config/broker/11100/index.js"),
  v = r.getPlatform(),
  b = v.platform,
  h = v.bizPlatformVer,
  m = v.isZxg,
  d = v.isWeixin,
  g = v.isQuickApp,
  w = (v.isEmbeddedMiniProgram, v.isMpPlugin),
  S = v.isMiniProgram,
  T = { NOACCOUNT: "0", HASACCOUNT: "1" },
  I = { NOTNEED: "-1", NOTCALL: "0", NOTANSWER: "1", PASS: "2", NOTPASS: "3" },
  y = "0",
  k = {
    components: {
      StSteps: function () {
        return "../../../../common/components/Steps/index.js";
      },
      FootPrint: function () {
        return "../../../../bizs/apply/FootPrint.js";
      },
      SubscribeModal: function () {
        return "../../../../bizs/apply/progress/SubscribeModal.js";
      },
      SubscribePopup: function () {
        return "../../../../bizs/apply/progress/SubscribePopup.js";
      },
      ProgressBar: function () {
        return "../../../../bizs/apply/ProgressBar.js";
      },
      MultiBrokerEntry: function () {
        return "../../../../components/MultiBrokerEntry/MultiBrokerEntry.js";
      },
      ProgressOperate: function () {
        return "../../../../bizs/apply/progress/Operate.js";
      },
      CommonBulletinBar: function () {
        return "../../../../components/CommonBulletinBar/CommonBulletinBar.js";
      },
    },
    export: function () {
      return {};
    },
    setup: function () {
      var e = n.getCurrentInstance().proxy,
        t = i.useApply(),
        r = t.applyInfo,
        o = t.fetchApplyInfo,
        a = t.curStepConf,
        u = t.curStepInfo,
        v = n.storeToRefs(l.useNavbarStore()).shownav,
        b = !0,
        h = n.ref(!1),
        T = n.computed(function () {
          var e, t;
          return (
            "1" ===
              (null == (t = null == (e = r.value) ? void 0 : e.activity_info)
                ? void 0
                : t.bank_activity) &&
            !(null == a ? void 0 : a.hideThirdBankActSubscribe)
          );
        });
      d &&
        (n.onMounted(function () {
          e.startVisitInfoTimer(),
            setTimeout(function () {
              b || (h.value = !0);
            }, 1500);
        }),
        n.onUnmounted(function () {
          return e.stopVisitInfoTimer();
        }),
        n.onActivated(function () {
          return e.startVisitInfoTimer();
        }),
        n.onDeactivated(function () {
          return e.stopVisitInfoTimer();
        }),
        c.applyCgi.querySubscribeInfo().then(function (e) {
          return (b = e);
        }));
      var I = n.computed(function () {
          var t;
          return (
            (null == (t = e.$route.query) ? void 0 : t.subscribe) &&
            "1" !== e.$route.query.subscribe
          );
        }),
        y = n.computed(function () {
          return d && I.value;
        });
      n.onMounted(function () {
        var t;
        (null == (t = e.$route.query) ? void 0 : t.submittip) &&
          n.index.showToast({ title: "开户审核中 请耐心等待", icon: "none" }),
          y.value && e.$stat.click("trade.apply.progress.subscribebtn_show");
      });
      var k = n.inject("scrollHeight", function () {
          return n.ref(0);
        }),
        C = s.getCurRouteInfo() || {},
        x = n.computed(function () {
          if ("pages/index/trade" === (null == C ? void 0 : C.route)) {
            var e = k.value;
            return e && e > 0 ? "".concat(e, "px") : "100vh";
          }
          return "";
        }),
        A = n.computed(function () {
          var e;
          return (
            !(null == (e = f.brokerConfig.common) ? void 0 : e.hideNav) &&
            (v.value || (S && !w))
          );
        }),
        B = p.showNewProgressBar(),
        _ = m && "yanbao" === n.index.$host.openExtraWebview;
      return {
        applyInfo: r,
        fetchApplyInfo: o,
        curStepConf: a,
        curStepInfo: u,
        isZxg: m,
        isWeixin: d,
        isQuickApp: g,
        subscribeModal: h,
        hasProgressBar: B,
        isThirdBankActUser: T,
        shownav: A,
        pageHeight: x,
        showYanBao: _,
        backYanBao: function () {
          e.$sdk.setAppDiskStorage("trade_task", "closeWindow"),
            e.$sdk.closeWindow();
        },
        showSubscribeBtn: y,
        showSubscribe: I,
      };
    },
    data: function () {
      return {
        loading: !0,
        timer: null,
        refreshCount: 5,
        pageAppearFlag: !1,
        ACCOUNT_STATE: T,
        VISIT_STATE: I,
        broker: f.brokerConfig,
      };
    },
    computed: {
      progressBarTitle: function () {
        var e = this.applyInfo.audit_progress;
        return [
          {
            text: "申请提交成功",
            desc: n.dayjs(this.applyInfo.apply_time).format("YYYY-MM-DD HH:mm"),
            done: !0,
            active: !1,
          },
          { text: "开户审核中", desc: e, done: !1, active: !0 },
        ];
      },
      viewInfo: function () {
        var e = this.applyInfo,
          t = e.has_fund_account,
          r = e.visit_status,
          i = e.audit_progress,
          s = [
            {
              text: "申请提交成功",
              desc: n
                .dayjs(this.applyInfo.apply_time)
                .format("YYYY-MM-DD HH:mm"),
              icon: "check",
            },
            { text: "开户审核中", desc: i, icon: "clock-l" },
            { text: "开户成功", desc: "消息提醒", icon: "_" },
          ],
          o = {
            hasAccount: t === T.HASACCOUNT,
            visited: !0,
            visitState: r,
            view: "fail",
            link: "home",
            status: "",
            steps: s,
            text: [],
            showSubmitTips: !0,
          };
        if (o.hasAccount)
          switch (r) {
            case I.NOTCALL:
              (o.visited = !1),
                (o.status = "账户待激活"),
                o.text.push(
                  '请注意接听回访电话<span class="warning">'.concat(
                    this.returnVisitTel,
                    "</span>，激活证券账户"
                  )
                );
              break;
            case I.NOTANSWER:
              (o.link = "tel"),
                (o.status = "账户待激活"),
                o.text.push(
                  '回访电话未接听，请拨打回访电话<span class="warning">'.concat(
                    this.returnVisitTel,
                    "</span>激活证券账户"
                  )
                );
              break;
            case I.PASS:
              (o.view = "suc"),
                (o.status = "开户申请提交成功"),
                o.text.push("电话回访已通过");
              break;
            case I.NOTPASS:
              (o.link = "tel"),
                (o.status = "账户激活失败"),
                o.text.push(
                  '如需激活账户，请拨打回访电话<span class="warning">'.concat(
                    this.returnVisitTel,
                    "</span>激活证券账户"
                  )
                );
              break;
            case I.NOTNEED:
              (o.view = "suc"),
                (o.status = "开户申请提交成功"),
                o.text.push("".concat(i || "审核结果更新中")),
                (o.showSubmitTips = !1);
          }
        else
          switch (r) {
            case I.NOTCALL:
              o.visited = !1;
              break;
            case I.NOTANSWER:
              (o.link = "tel"),
                (o.status = "电话回访未接听"),
                o.text.push(
                  '如需使用账户，可拨打客服电话<span class="warning">'.concat(
                    this.returnVisitTel,
                    "</span>咨询"
                  )
                );
              break;
            case I.PASS:
              (o.view = "suc"),
                (o.status = "电话回访已通过"),
                o.text.push("".concat(i || "审核结果更新中"));
              break;
            case I.NOTPASS:
              (o.link = "tel"),
                (o.status = "电话回访未通过"),
                o.text.push(
                  '如需使用账户，请拨打客服电话<span class="warning">'.concat(
                    this.returnVisitTel,
                    "</span>咨询"
                  )
                );
              break;
            case I.NOTNEED:
              (o.view = "suc"),
                (o.status = "开户申请提交成功"),
                o.text.push("".concat(i || "审核结果更新中")),
                (o.showSubmitTips = !1);
          }
        return o;
      },
      returnVisitTel: function () {
        var e = f.brokerConfig.base.tel,
          t = this.curStepConf.returnVisitTel;
        return (
          !1 === t ? (e = "") : t && (e = this.curStepConf.returnVisitTel),
          String(e).replace(/-/g, "")
        );
      },
      isSupportQueue: function () {
        var e = this.applyInfo.visitinfo;
        return (
          (null == e ? void 0 : e.query_result) === y ||
          "1" === (null == e ? void 0 : e.query_result)
        );
      },
      isMyTurn: function () {
        var e = this.applyInfo.visitinfo;
        return (
          (null == e ? void 0 : e.query_result) === y &&
          +(null == e ? void 0 : e.waiting_num) < 1
        );
      },
      waitingInfo: function () {
        var e = this.applyInfo,
          t = e.visitinfo,
          n = e.audit_progress;
        if (!t) return n;
        if (t.query_result === y && t.waiting_num > 0) {
          var r = Math.max(t.waiting_time, 60);
          return "预计等待 "
            .concat(Math.ceil(r / 60), " 分钟（前方排队")
            .concat(t.waiting_num, "人）");
        }
        return n;
      },
      subcribeText: function () {
        return "关注公众号";
      },
      isSupportCall: function () {
        return !(
          this.curStepConf.notSupportCall ||
          (m && "android" === b && n.lt(h || "0.0.0", "9.2.0"))
        );
      },
    },
    created: function () {
      var r = this;
      return t(
        e().mark(function i() {
          var s;
          return e().wrap(function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  if (!m && !g) {
                    i.next = 5;
                    break;
                  }
                  return (
                    r.$sdk.pageWillAppear(
                      t(
                        e().mark(function t() {
                          return e().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  r.startVisitInfoTimer();
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, t);
                        })
                      )
                    ),
                    r.$sdk.pageWillDisAppear(function () {
                      r.stopVisitInfoTimer();
                    }),
                    (s = f.brokerConfig.apply.applyRetainInfos),
                    (i.next = 5),
                    u.sdk.applyAccountRetain(s, !0).catch(n.noop)
                  );
                case 5:
                case "end":
                  return i.stop();
              }
          }, i);
        })
      )();
    },
    methods: {
      openSubscribe: function () {
        (this.subscribeModal = !0),
          this.$stat.click("trade.apply.progress.subscribe_platform");
      },
      toChooseIndex: function () {
        var e = "/pages/index/index";
        w
          ? a.navigateTo({ url: e, linkType: o.linkTypeMap.plugin2MainMp })
          : a.navigateBackMiniProgram({
              extraData: { path: "".concat(e, "?isRelaunch=1") },
            });
      },
      toRingUp: function () {
        this.$stat.click("trade.apply.progress.receive_no_call");
        var e = this.returnVisitTel.replace(/-/g, "");
        try {
          this.$sdk.makePhoneCall(e);
        } catch (e) {}
      },
      startVisitInfoTimer: function () {
        var n = this;
        return t(
          e().mark(function t() {
            var r, i;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    ((null == (r = n.applyInfo.visitinfo)
                      ? void 0
                      : r.query_result) !== y &&
                      "1" !== (null == r ? void 0 : r.query_result)) ||
                      ((i = 1e3 * r.refresh_interval),
                      (n.refreshCount = r.refresh_times - 1),
                      i > 0 &&
                        (n.timer = setInterval(function () {
                          n.refreshCount > 0 &&
                            ((n.refreshCount -= 1),
                            n.fetchApplyInfo({ force: !0 })),
                            n.refreshCount <= 0 && clearInterval(n.timer);
                        }, i)));
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )();
      },
      stopVisitInfoTimer: function () {
        clearInterval(this.timer);
      },
    },
  };
Array ||
  (
    n.resolveComponent("CommonBulletinBar") +
    n.resolveComponent("progress-bar") +
    n.resolveComponent("st-steps") +
    n.resolveComponent("progress-operate") +
    n.resolveComponent("multi-broker-entry") +
    n.resolveComponent("FootPrint") +
    n.resolveComponent("SubscribePopup")
  )(),
  Math;
var C = n._export_sfc(k, [
  [
    "render",
    function (e, t, r, i, s, o) {
      return n.e(
        { a: n.p({ scene: "APPLY_PROGRESS" }), b: i.hasProgressBar },
        i.hasProgressBar
          ? {
              c: n.p({
                titles: o.progressBarTitle,
                "step-name": i.curStepInfo.name,
                "status-page": !0,
              }),
            }
          : {},
        { d: !o.viewInfo.hasAccount },
        o.viewInfo.hasAccount
          ? n.e(
              {
                r: n.n("suc" === o.viewInfo.view ? "success" : "icon-fail"),
                s: n.t(o.viewInfo.status),
                t: o.viewInfo.text[0],
                v:
                  o.viewInfo.visitState === s.VISIT_STATE.NOTCALL &&
                  "home" === o.viewInfo.link,
              },
              (o.viewInfo.visitState === s.VISIT_STATE.NOTCALL &&
                o.viewInfo.link,
              {}),
              { w: "tel" === o.viewInfo.link },
              (o.viewInfo.link, {})
            )
          : n.e(
              { e: !i.hasProgressBar },
              i.hasProgressBar
                ? {}
                : n.e(
                    { f: o.viewInfo.showSubmitTips },
                    (o.viewInfo.showSubmitTips, {}),
                    { g: n.p({ current: 1, steps: o.viewInfo.steps }) }
                  ),
              { h: !o.viewInfo.visited },
              o.viewInfo.visited
                ? {
                    o: n.n("suc" === o.viewInfo.view ? "success" : "icon-fail"),
                    p: n.t(o.viewInfo.status),
                    q: o.viewInfo.text[0],
                  }
                : n.e(
                    {
                      i: n.n("icon-tel-".concat(s.broker.base.code)),
                      j: o.isMyTurn,
                    },
                    o.isMyTurn
                      ? {}
                      : {
                          k: n.t(o.returnVisitTel),
                          l: n.t(s.broker.base.name),
                          m: n.t(o.waitingInfo),
                        },
                    {
                      n: n.n(
                        i.showSubscribeBtn ? "visit-info-subscribe-scene" : ""
                      ),
                    }
                  )
            ),
        { x: "home" === o.viewInfo.link },
        "home" === o.viewInfo.link
          ? n.e(
              { y: i.showSubscribeBtn },
              i.showSubscribeBtn
                ? {
                    z: n.t(o.subcribeText),
                    A: n.o(function () {
                      return (
                        o.openSubscribe && o.openSubscribe.apply(o, arguments)
                      );
                    }),
                  }
                : {},
              { B: !o.viewInfo.visited && o.isMyTurn && o.isSupportCall },
              !o.viewInfo.visited && o.isMyTurn && o.isSupportCall
                ? {
                    C: n.o(function () {
                      return o.toRingUp && o.toRingUp.apply(o, arguments);
                    }),
                  }
                : i.isWeixin && !i.showSubscribeBtn
                ? {
                    E: n.o(function () {
                      return (
                        o.toChooseIndex && o.toChooseIndex.apply(o, arguments)
                      );
                    }),
                  }
                : {},
              { D: i.isWeixin && !i.showSubscribeBtn }
            )
          : "tel" === o.viewInfo.link
          ? n.e(
              { G: o.isSupportCall },
              o.isSupportCall
                ? {
                    H: n.o(function () {
                      return o.toRingUp && o.toRingUp.apply(o, arguments);
                    }),
                  }
                : {}
            )
          : {},
        { F: "tel" === o.viewInfo.link, I: i.showYanBao },
        i.showYanBao
          ? {
              J: n.o(function () {
                return i.backYanBao && i.backYanBao.apply(i, arguments);
              }),
            }
          : {},
        { K: n.p({ "page-type": "progress" }), L: i.curStepConf.bottomText },
        i.curStepConf.bottomText ? { M: i.curStepConf.bottomText } : {},
        {
          N: n.o(function (e) {
            return (i.subscribeModal = e);
          }),
          O: n.p({ value: i.subscribeModal }),
          P: i.shownav ? 1 : "",
          Q: i.pageHeight,
        }
      );
    },
  ],
  ["__scopeId", "data-v-210cee12"],
]);
wx.createComponent(C);
