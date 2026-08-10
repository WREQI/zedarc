var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, i) {
    return new Promise(function (n, s) {
      var r = function (e) {
          try {
            a(i.next(e));
          } catch (e) {
            s(e);
          }
        },
        o = function (e) {
          try {
            a(i.throw(e));
          } catch (e) {
            s(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(r, o);
        };
      a((i = i.apply(e, t)).next());
    });
  },
  i = require("../../mixins/guess-page-mixin.js"),
  n = require("../../../../../../../common/vendor.js"),
  s = { title: "上证指数今天会涨还是跌?", prompt: "上证指数今天会涨还是跌?" },
  r = "guest",
  o = {
    name: "MarketAnalysis",
    components: {
      HistoryModal: function () {
        return "../popup-modal/history-modal.js";
      },
      SimpleModal: function () {
        return "../popup-modal/simple-modal.js";
      },
    },
    props: {
      pageType: { type: String, default: "" },
      isGuess: { type: Boolean, default: !1 },
      experienceAi: { type: Boolean, default: !1 },
      aiDialogQuestion: { type: String, default: "" },
      cashPointInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      needRequest: { type: Boolean, default: !0 },
      customizeAiConfig: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return {
        aiConfig: null,
        IS_ZXG: i.IS_ZXG,
        showGuessPopup: !1,
        showGuestPopup: !1,
        showHistoryList: !1,
        rewardList: [],
        GUEST_PAGE: r,
      };
    },
    computed: {
      notCompleted: function () {
        return !this.isGuess || !this.experienceAi;
      },
      aiQuestion: function () {
        var e;
        return null == (e = this.aiConfig) ? void 0 : e.title;
      },
    },
    mounted: function () {
      this.pageType === r
        ? n.StockBridge.report(
            "yy.caizhangdie.guest_marketanalysis_module_brow"
          )
        : n.StockBridge.report("yy.caizhangdie.marketanalysis_module_brow"),
        this.needRequest,
        this.getAIconfig();
    },
    methods: {
      openGuessSuccessPopup: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (this.aiConfig = null), (e.next = 3), this.getAIconfig()
                      );
                    case 3:
                      (this.showGuessPopup = !0),
                        n.StockBridge.report(
                          "yy.caizhangdie.marketanalysis_wenaiguide_popup_brow"
                        );
                    case 5:
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
      openGuestPopup: function () {
        (this.showGuestPopup = !0),
          n.StockBridge.report(
            "yy.caizhangdie.guest_marketanalysis_help_popup_brow"
          );
      },
      closePopup: function () {
        (this.showGuessPopup = !1), (this.showGuestPopup = !1);
      },
      openAI: function (i) {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        "btn" === i
                          ? this.pageType === r
                            ? n.StockBridge.report(
                                "yy.caizhangdie.guest_marketanalysis_module_wenai_click"
                              )
                            : n.StockBridge.report(
                                "yy.caizhangdie.marketanalysis_module_wenai_click"
                              )
                          : "guess" === i
                          ? n.StockBridge.report(
                              "yy.caizhangdie.marketanalysis_wenaiguide_popup_click"
                            )
                          : "help" === i &&
                            n.StockBridge.report(
                              "yy.caizhangdie.guest_marketanalysis_help_popup_click"
                            ),
                        (e.next = 3),
                        this.getAIconfig()
                      );
                    case 3:
                      this.closePopup(),
                        this.$emit("onClickAiDialog", this.aiConfig, i);
                    case 5:
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
      getAIconfig: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n, r;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !this.needRequest &&
                        (null == (n = this.customizeAiConfig)
                          ? void 0
                          : n.title)
                      ) {
                        e.next = 16;
                        break;
                      }
                      if (this.aiConfig) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (e.prev = 2),
                        (e.next = 5),
                        i.fetchMarketAnalysisQuestion({
                          channel: this.isGuess
                            ? "postguessrisefall"
                            : "preguessrisefall",
                          content_id: "sh000001",
                        })
                      );
                    case 5:
                      if ((r = e.sent) && Array.isArray(r.questions)) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return");
                    case 8:
                      (this.aiConfig = r.questions[0] || s), (e.next = 14);
                      break;
                    case 11:
                      (e.prev = 11), (e.t0 = e.catch(2)), (this.aiConfig = s);
                    case 14:
                      e.next = 17;
                      break;
                    case 16:
                      this.aiConfig = this.customizeAiConfig;
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[2, 11]]
            );
          })
        );
      },
      inviteFriends: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = this.notCompleted), e.t0)) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 4), this.getAIconfig();
                    case 4:
                      n.StockBridge.report(
                        "yy.caizhangdie.marketanalysis_module_sharebtn_click"
                      ),
                        this.$emit("inviteFriendHelp", {
                          title:
                            "【全民猜涨跌】送你一次免费体验AI大盘分析，还能领红包哦～",
                          description: this.aiConfig.title,
                          aiQuestion: this.aiConfig.title,
                        });
                    case 6:
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
      withdraw: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (n.StockBridge.report(
                          "yy.caizhangdie.marketanalysis_module_withdraw_click"
                        ),
                        this.cashPointInfo &&
                          !((+this.cashPointInfo.cash_point || 0) < 10))
                      ) {
                        e.next = 4;
                        break;
                      }
                      this.$refs.simpleModal.open({
                        type: "error",
                        title: "提现失败",
                        content:
                          "微信规定满0.1元才可提现<br/>继续邀请好友体验大盘分析，领更多奖励!",
                        iconType: "fail",
                      }),
                        (e.next = 14);
                      break;
                    case 4:
                      return (e.prev = 4), (e.next = 7), i.withdrawRewardCash();
                    case 7:
                      this.$refs.simpleModal.open({
                        type: "success",
                        title: "提现成功",
                        content: "24小时内到账微信零钱/QQ钱包",
                        iconType: "success",
                      }),
                        this.$emit("refresh"),
                        (e.next = 14);
                      break;
                    case 11:
                      (e.prev = 11),
                        (e.t0 = e.catch(4)),
                        n.StockBridge.toast("系统繁忙，请稍后再试", "error");
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[4, 11]]
            );
          })
        );
      },
      showRewardList: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var s, r;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        n.StockBridge.report(
                          "yy.caizhangdie.marketanalysis_module_rewardlist_click"
                        ),
                        (e.prev = 1),
                        (e.next = 4),
                        i.fetchRewardPointList()
                      );
                    case 4:
                      (s = e.sent),
                        (r = s.reward_list),
                        (this.showHistoryList = !0),
                        (this.rewardList = r || []),
                        (e.next = 12);
                      break;
                    case 9:
                      (e.prev = 9), (e.t0 = e.catch(1)), (this.rewardList = []);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[1, 9]]
            );
          })
        );
      },
    },
  };
Array ||
  (n.resolveComponent("HistoryModal") + n.resolveComponent("SimpleModal"))();
var a = n._export_sfc(o, [
  [
    "render",
    function (e, t, i, s, r, o) {
      return n.e(
        { a: i.pageType !== r.GUEST_PAGE },
        (i.pageType, r.GUEST_PAGE, {}),
        { b: !i.experienceAi },
        i.experienceAi
          ? {}
          : {
              c: n.o(function (e) {
                return o.openAI("btn");
              }, 3829),
            },
        { d: i.pageType !== r.GUEST_PAGE },
        i.pageType !== r.GUEST_PAGE
          ? n.e(
              { e: !i.isGuess },
              (i.isGuess, {}),
              { f: o.notCompleted },
              o.notCompleted
                ? {}
                : {
                    g: o.aiQuestion,
                    h: n.o(function () {
                      return (
                        o.inviteFriends && o.inviteFriends.apply(o, arguments)
                      );
                    }, 3830),
                  }
            )
          : {},
        { i: i.pageType !== r.GUEST_PAGE && i.cashPointInfo },
        i.pageType !== r.GUEST_PAGE && i.cashPointInfo
          ? {
              j: n.t(i.cashPointInfo.cash_point_desc || "0元"),
              k: n.o(function () {
                return o.withdraw && o.withdraw.apply(o, arguments);
              }, 3831),
              l: n.o(function () {
                return o.showRewardList && o.showRewardList.apply(o, arguments);
              }, 3832),
            }
          : {},
        { m: r.showGuessPopup },
        r.showGuessPopup
          ? {
              n: n.t(r.IS_ZXG ? "" : "公众号"),
              o: n.t(r.aiConfig.title),
              p: n.o(function (e) {
                return o.openAI("guess");
              }, 3833),
              q: n.o(function () {
                return o.closePopup && o.closePopup.apply(o, arguments);
              }, 3834),
            }
          : {},
        { r: r.showGuestPopup },
        r.showGuestPopup
          ? {
              s: n.t(i.aiDialogQuestion),
              t: n.o(function (e) {
                return o.openAI("help");
              }, 3835),
              v: n.o(function () {
                return o.closePopup && o.closePopup.apply(o, arguments);
              }, 3836),
            }
          : {},
        {
          w: n.o(function (e) {
            return (r.showHistoryList = e);
          }, 3837),
          x: n.p({ visible: r.showHistoryList, "reward-list": r.rewardList }),
          y: n.sr("simpleModal", "0b0bba30-1"),
          z: n.p({ "show-close": !1 }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-0b0bba30"],
]);
wx.createComponent(a);
