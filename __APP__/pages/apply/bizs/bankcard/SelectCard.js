var e = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var r = require("../../../../common/vendor.js"),
  o = require("../../../../service/stat/mp-weixin.js"),
  a = require("../../../../model/apply/useApply.js"),
  u = require("../../../../cgi/apply.js"),
  i = require("../../../../common/components/Dialog/index.js"),
  s = require("../../../../stores/actconfig/useActEffectCore.js"),
  c = require("../../../../stores/actconfig/useThirdCustody.js"),
  p = require("../../../../config/activity/actRules.js");
require("../../../../service/broker.js");
var l = require("../../../../adapter/router.js"),
  d = require("../../../../service/mpPluginSub/index.js"),
  f = require("../../../../stores/apply/useDigitalHuman.js"),
  b = require("../../../../stores/apply/useCommonData.js"),
  m = require("../../../../config/bank.js"),
  h = require("./useBankPasswordFlow.js"),
  k = require("../../../../config/broker/11100/index.js"),
  C = require("../../../../service/mpPluginSub/config.js"),
  v = {
    components: {
      BankCardItem: function () {
        return "../../components/BankCardItem/BankCardItem.js";
      },
      StepButtons: function () {
        return "../../components/StepButtons/StepButtons.js";
      },
      BankAuthPopup: function () {
        return "./BankAuthPopup.js";
      },
      ActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
    },
    props: {
      bankcards: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    options: { styleIsolation: "shared" },
    setup: function (v, S) {
      var g,
        y = S.emit,
        A = r.getCurrentInstance().proxy,
        w = a.useApply(),
        B = w.curStepConf,
        x = w.curStepInfo,
        j = w.applyInfo,
        q = w.commitApplyData,
        P = r.storeToRefs(f.useDigitalHuman()).isSupportDigitalHuman,
        _ = r.ref(""),
        N = r.reactive({ bankAuthPopup: !1 }),
        I = B.isNewUnionpayAuth,
        R = void 0 !== I && I,
        T = B.unionpayBankcardProtocol,
        D = void 0 === T ? {} : T,
        L = h.useBankPasswordFlow({
          getRouter: function () {
            return A.$router;
          },
          onSubmit:
            ((g = t(
              n().mark(function e(t) {
                return n().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.t0 = U.value), !e.t0)) {
                          e.next = 5;
                          break;
                        }
                        return (e.next = 4), H(U.value, t);
                      case 4:
                        U.value = null;
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return g.apply(this, arguments);
            }),
          onCancel: function () {
            (U.value = null), (_.value = "");
          },
          emitProcessing: function (e) {
            return y("bankPwdProcessing", e);
          },
        }),
        U = r.ref(null);
      function H(e) {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = t(
          n().mark(function e(t) {
            var a,
              s,
              c,
              p,
              d,
              f,
              h,
              k,
              C,
              v,
              S,
              g,
              y,
              A = arguments;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = A.length > 1 && void 0 !== A[1] ? A[1] : ""),
                        r.index.showLoading({ mask: !0, title: "提交中" }),
                        o.stat.click("trade.apply.bankcard.selectcard"),
                        (c = t.cardSno),
                        (p = t.bankCode),
                        (d = b.useCommonData()),
                        (f = r.storeToRefs(d)),
                        (h = f.applyArgs),
                        (k = h.value),
                        (C = k.bank_sell_code),
                        (v = k.out_abbr),
                        (S = void 0 === v ? "" : v),
                        (g = {
                          serial_num: c,
                          bank_code: p,
                          bank_sell_code: C || "",
                          bank_activity_from:
                            (null == (s = m.BANKS[S]) ? void 0 : s.code) || "",
                        }),
                        a && (g.bank_pwd = a),
                        (e.prev = 4),
                        (e.next = 7),
                        q(u.ACTION.CARD_SET_CFT_BANKCARD, g)
                      );
                    case 7:
                      if (
                        ((y = e.sent),
                        r.index.hideLoading(),
                        "1" !== y.need_auth)
                      ) {
                        e.next = 14;
                        break;
                      }
                      if (!R) {
                        e.next = 11;
                        break;
                      }
                      return e.abrupt("return", void (N.bankAuthPopup = !0));
                    case 11:
                      l.router().push({ name: "ApplyBankAuth" }), (e.next = 15);
                      break;
                    case 14:
                      (_.value = ""), M();
                    case 15:
                      e.next = 20;
                      break;
                    case 17:
                      (e.prev = 17),
                        (e.t0 = e.catch(4)),
                        r.index.hideLoading(),
                        setTimeout(function () {
                          i.Dialog({
                            message:
                              (null == e.t0 ? void 0 : e.t0.retmsg) ||
                              "网络繁忙 请稍后再试",
                            onConfirm: function () {
                              _.value = "";
                            },
                          });
                        }, 500);
                    case 20:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 17]]
            );
          })
        )).apply(this, arguments);
      }
      function M() {
        y("navigateNextStep");
      }
      r.onBeforeUnmount(function () {
        L.cleanupIfPending();
      }),
        r.watch(
          function () {
            return N.bankAuthPopup;
          },
          function () {
            _.value = "";
          }
        );
      var E,
        K = r.computed(function () {
          return e(v.bankcards).sort(function (e, n) {
            var t = !e.isSupport || e.disabled,
              r = !n.isSupport || n.disabled;
            return t && !r ? 1 : 0;
          });
        }),
        $ = s.useActEffectCoreStore(),
        G = c.useThirdCustodyStore(),
        O = r.storeToRefs($).cftBankcardActConfig,
        z = r.storeToRefs(G).isThirdCustody,
        J = r.ref(!1),
        Q = r.computed(function () {
          return z.value ? p.actRulesConfig.thirdCustody : {};
        }),
        V = r.computed(function () {
          var e;
          return (
            (z.value &&
              (null == (e = Q.value.ruleContent[k.brokerConfig.base.code])
                ? void 0
                : e.rules)) ||
            []
          );
        });
      return {
        applyInfo: j,
        curStepInfo: x,
        isNewUnionpayAuth: R,
        authScene: u.BankAuthScene.cft,
        unionpayBankcardProtocol: D,
        showStatus: N,
        selectedCard: _,
        sortedBankcards: K,
        onSelectCard:
          ((E = t(
            n().mark(function e(t) {
              var r, o, a, u;
              return n().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      try {
                        A.$route.query.amssub &&
                          d.asyncShowMpSub(
                            "trade_selectCard",
                            C.TMPIDARR.AMSSUB
                          );
                      } catch (e) {}
                      if (
                        ((r = t.cardSno),
                        t.bankCode,
                        (o = t.bankAbbr),
                        (a = t.bankName),
                        (u = t.cardNum),
                        (_.value = r),
                        !L.isNeedPassword(o))
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        ((U.value = t),
                        void L.startFlow(
                          o,
                          a,
                          (null == u ? void 0 : u.slice(-3)) || ""
                        ))
                      );
                    case 4:
                      return (e.next = 6), H(t);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          function (e) {
            return E.apply(this, arguments);
          }),
        showSupportCardList: function () {
          y("showSupportCardList");
        },
        onAddNewCardClick: function () {
          o.stat.click("trade.apply.bankcard.add"), y("switchMode");
        },
        onCommitSuccess: M,
        isThirdCustody: z,
        cftBankcardActConfig: O,
        showActRule: function () {
          J.value = !0;
        },
        ruleActionSheet: J,
        ruleConfig: Q,
        ruleContent: V,
        broker: k.brokerConfig,
        isSupportDigitalHuman: P,
      };
    },
  };
Array ||
  (
    r.resolveComponent("BankCardItem") +
    r.resolveComponent("StepButtons") +
    r.resolveComponent("BankAuthPopup") +
    r.resolveComponent("action-sheet")
  )();
var S = r._export_sfc(v, [
  [
    "render",
    function (e, n, t, o, a, u) {
      return r.e(
        {
          a: r.o(function () {
            return (
              o.showSupportCardList && o.showSupportCardList.apply(o, arguments)
            );
          }),
          b: o.ruleConfig.tips,
        },
        o.ruleConfig.tips
          ? r.e(
              { c: r.t(o.ruleConfig.tips), d: o.ruleContent.length },
              o.ruleContent.length
                ? {
                    e: r.t(
                      o.ruleConfig.ruleContent[o.broker.base.code].tipsbtn
                    ),
                    f: r.o(function () {
                      return o.showActRule && o.showActRule.apply(o, arguments);
                    }),
                  }
                : {}
            )
          : {},
        {
          g: r.f(o.sortedBankcards, function (e, n, t) {
            return {
              a: e.cardSno,
              b: r.o(o.onSelectCard, e.cardSno),
              c: "9256e628-0-" + t,
              d: r.p({
                "bank-abbr": e.bankAbbr,
                "bank-name": e.bankName,
                "bank-code": e.bankCode,
                "serial-num": e.cardSno,
                "card-num": e.cardNum,
                selected: o.selectedCard === e.cardSno,
                disabled: !e.isSupport || e.disabled,
                "act-config": o.cftBankcardActConfig[e.cardSno],
                "last-chosen": e.isChoose,
              }),
            };
          }),
          h: r.o(function () {
            return (
              o.onAddNewCardClick && o.onAddNewCardClick.apply(o, arguments)
            );
          }),
          i: r.p({ "pure-mode": !0, stat: "bankcard", "hide-next-button": !0 }),
          j: o.isNewUnionpayAuth,
        },
        o.isNewUnionpayAuth
          ? {
              k: r.o(function (e) {
                return (o.showStatus.bankAuthPopup = e);
              }),
              l: r.o(o.onCommitSuccess),
              m: r.p({
                value: o.showStatus.bankAuthPopup,
                "apply-info-tel": o.applyInfo.tel,
                "unionpay-bankcard-protocol": o.unionpayBankcardProtocol,
                "auth-scene": o.authScene,
              }),
            }
          : {},
        { n: o.ruleContent.length },
        o.ruleContent.length
          ? {
              o: r.f(o.ruleContent, function (e, n, t) {
                return {
                  a: r.t(e.title),
                  b: r.f(e.content, function (e, n, t) {
                    return { a: r.t(e), b: n };
                  }),
                  c: n,
                };
              }),
              p: r.n(o.isSupportDigitalHuman ? "rule-sheet--digita-human" : ""),
            }
          : {},
        {
          q: r.o(function (e) {
            return (o.ruleActionSheet = e);
          }),
          r: r.p({
            value: o.ruleActionSheet,
            title: "活动规则",
            "confirm-txt": " ",
            "picker-style": !0,
            "close-button": !0,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-9256e628"],
]);
wx.createComponent(S);
