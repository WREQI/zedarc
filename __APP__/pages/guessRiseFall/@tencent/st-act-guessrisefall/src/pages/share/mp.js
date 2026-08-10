require("../../../../../../../@babel/runtime/helpers/Objectvalues");
var e,
  t,
  n = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = Object.defineProperty,
  s = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  l = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  h = function (e, t, n) {
    return new Promise(function (i, r) {
      var s = function (e) {
          try {
            o(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          try {
            o(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        o = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(s, a);
        };
      o((n = n.apply(e, t)).next());
    });
  },
  d = require("../../../../../../../common/vendor.js"),
  p = require("../../mixins/guess-page-mixin.js"),
  f = getApp().globalData,
  g = {
    name: "GuestPage",
    mixins: [
      p.createGuessPageMixin({ isGuest: !0, isH5: !1 }),
      {
        methods: {
          truncateNickname: function (e, t) {
            return !e || e.length <= t
              ? e || ""
              : "".concat(e.substring(0, t), "...");
          },
          formatInviteText: function (e) {
            var t = e ? p.removeEmoji(e) : "";
            return t && 0 !== t.length
              ? "".concat(
                  this.truncateNickname(t, 6),
                  "，我需要你的帮助呀！体验AI大<br/>盘分析，即可帮我完成助力~"
                )
              : "hi，我需要你的帮助呀！体验AI大盘分析，<br/>即可帮我完成助力~";
          },
          getModalOptions: function (e, t) {
            if ("0" === e) return null;
            var n = {
              title: "温馨提示",
              content: "你已参与过竞猜，无法为好友助力。",
              tips: "将自动跳转至活动主页",
            };
            return t && t[e] && (n.content = t[e].content), n;
          },
          statClick: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            d.StockBridge.report(e, t);
          },
          getInviterGuessResultText: function (e, t) {
            var n = (e && p.removeEmoji(e)) || "好友",
              i = "1" === t ? "看涨" : "看跌";
            return "".concat(this.truncateNickname(n, 3)).concat(i);
          },
          applyInviteeInfo: function (e) {
            e &&
              ((this.inviterNickname = e.inviter_nickname),
              (this.inviterGuessStatus = e.inviter_result),
              (this.headImgUrl = e.inviter_headimgurl),
              (this.isNewuser = 0 == +e.auth),
              (this.authScope = e.auth),
              void 0 !== e.inviter_result &&
                (this.inviterResult = +e.inviter_result),
              this.subscribeGuideOnce ||
                void 0 === e.subscribe_guide ||
                (this.subscribeGuide = e.subscribe_guide));
          },
        },
      },
    ],
    components: {
      SimpleModal: function () {
        return "../../components/popup-modal/simple-modal.js";
      },
      marketGuessing: function () {
        return "../../components/market-guessing/mp.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC1ndWVzc3Jpc2VmYWxsL3NyYy9jb21wb25lbnRzL21hcmtldC1ndWVzc2luZy9tcC52dWU;
        });
      },
      HalfScreenAiEntry: function () {
        return "../../../../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
      MarketAnalysis: function () {
        return "../../components/market-analysis/index.js";
      },
      RewardModal: function () {
        return "../../components/popup-modal/reward-modal.js";
      },
    },
    provide: function () {
      var e = this;
      return {
        getShowAiGuideTips: function () {
          return e.showAiGuideTips;
        },
        getInviterGuessResult: function () {
          return e.inviterGuessResult;
        },
      };
    },
    props: {
      pageOptions: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    emits: ["update:shareConfig"],
    data: function () {
      return {
        stockBridge: d.StockBridge,
        rateInfo: {},
        TpInfo: {},
        TInfo: {},
        FTInfo: {},
        stockInfo1: {},
        authScope: "1",
        dateList: [],
        subscribeGuide: "1",
        subscribeGuideOnce: !1,
        loaded: !1,
        userInfo: {},
        actConfig: null,
        inviterNickname: "",
        headImgUrl: "",
        inviterGuessStatus: "",
        inviteText: "",
        qrcodeShow: !1,
        signStatus: "0",
        isLogin: !1,
        TDate: "",
        inviteCode: "",
        inviterGuessResult: "",
        onceStatus: !1,
        isExceptionModalVisible: !1,
        modalOptions: null,
        isNewuser: !1,
        guessLocalData: [],
        riseResults: [],
        fallResults: [],
        global_ratio_new: null,
        inviterResult: null,
        outerSrcExposure: p.OUTER_SRC_EXPOSURE.already,
        tradeDateString: "",
        canvasWidth: f.device.windowWidth,
        canvasHeight: f.rpxToPx(622),
        stockInfo: {
          showRise: "hide",
          showDrop: "hide",
          zdColor: "gray",
          dqj: "-.--",
          zde: "--",
          zdf: "--",
        },
        showAiDialog: !1,
        aiDialogQuestion: "",
        aiDialogQuery: "",
        experienceAi: !1,
        showAiGuideTips: !1,
      };
    },
    computed: {
      isGuessed: function () {
        return this.FTInfo && "0" !== this.FTInfo.user_answer;
      },
      isJumpMainPage: function () {
        return !(
          ("0" !== this.subscribeGuide && !this.isGuessed) ||
          (this.loaded &&
            d.StockBridge.report("yy.czdlanew.guest_gotoactivity_baoguang"),
          0)
        );
      },
      actId: function () {
        return this.activityInfo && this.activityInfo.act_id;
      },
      tInfoTime: function () {
        var e;
        return (null == (e = this.TInfo) ? void 0 : e.T_resultts) || "";
      },
      tpInfoTime: function () {
        var e;
        return (null == (e = this.TpInfo) ? void 0 : e.T_resultts) || "";
      },
    },
    watch: {
      FTInfo: {
        handler: function () {
          this.swiperData(!1);
        },
        immediate: !1,
      },
      pageOptions: {
        immediate: !0,
        handler: function (e) {
          e &&
            e.invite_code &&
            !this._hasInitialized &&
            ((this._hasInitialized = !0), this.handlePageLoad(e));
        },
      },
    },
    beforeDestroy: function () {
      this.stockBridge.busOff("onClickAiDialog", this.onClickAiDialog),
        this.stockBridge.busOff("common-ai-answer-finish", this.openRedPacket);
    },
    created: function () {
      d.StockBridge.report("yy.czdlanew.guest_guessshouye_baoguang");
    },
    mounted: function () {
      return h(
        this,
        null,
        i().mark(function e() {
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), this.inviteTextHandle();
                  case 2:
                    (this.inviteText = e.sent),
                      this.stockBridge.busOn(
                        "onClickAiDialog",
                        this.onClickAiDialog
                      ),
                      this.stockBridge.busOn(
                        "common-ai-answer-finish",
                        this.openRedPacket
                      );
                  case 5:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    methods:
      ((e = (function (e, t) {
        for (var i in t || (t = {})) c.call(t, i) && l(e, i, t[i]);
        if (o) {
          var r,
            s = n(o(t));
          try {
            for (s.s(); !(r = s.n()).done; ) {
              i = r.value;
              u.call(t, i) && l(e, i, t[i]);
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
        }
        return e;
      })({}, p.guessHelpers)),
      (t = {
        handlePageLoad: function (e) {
          return h(
            this,
            null,
            i().mark(function t() {
              var n,
                r,
                s,
                a = this;
              return i().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (this.inviteCode = e.invite_code),
                          (this.aiDialogQuestion = e.ai_question
                            ? decodeURIComponent(e.ai_question)
                            : ""),
                          (n = d.StockBridge.getStorage("guess_home_cache")),
                          (r = d.StockBridge.getStorage("guess_stock_cache")),
                          n && this.applyHomeData(n, !0),
                          r && this.applyCachedStockInfo(r),
                          (s = Promise.all([
                            this.getHomedata(),
                            this.getStockInfo(),
                          ])),
                          setTimeout(function () {
                            a.getOpinionData();
                          }, p.DELAY_CONFIG.SECONDARY),
                          (t.next = 7),
                          s
                        );
                      case 7:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
        },
        getShareConfig: function () {
          return h(
            this,
            null,
            i().mark(function e() {
              var t, n, r, s;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (t = this.getRandomShareXcx()),
                          (n = t.title),
                          (e.next = 5),
                          this.getShareSnapshot()
                        );
                      case 5:
                        return (
                          (r = e.sent),
                          (s = (r || {}).tempFilePath),
                          e.abrupt("return", {
                            title: n,
                            imageUrl: s || p.DEFAULT_SHARE_IMG,
                            path: "/pages/guessRiseFall/main?stat_data=FMxcx2M06PG00100",
                          })
                        );
                      case 11:
                        return (
                          (e.prev = 11),
                          (e.t0 = e.catch(0)),
                          e.abrupt("return", {
                            title: p.SHARE_TITLES[0],
                            imageUrl: p.DEFAULT_SHARE_IMG,
                            path: "/pages/guessRiseFall/main?stat_data=FMxcx2M06PG00100",
                          })
                        );
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 11]]
              );
            })
          );
        },
        onClickAiDialog: function (e, t) {
          var n = this.handleAiDialogClick(e, t);
          if (n) {
            var i = n.title,
              r = n.prompt;
            (this.showAiDialog = !0),
              (this.aiDialogQuestion = i),
              (this.aiDialogQuery = r);
          }
        },
        goMainPage: function () {
          d.StockBridge.report("yy.czdlanew.guest_gotoactivity_click"),
            setTimeout(function () {
              d.index.redirectTo({
                url: "/pages/guessRiseFall/main?stat_data=Ieu59p00qb213",
              });
            }, 100);
        },
        inviteTextHandle: function () {
          return h(
            this,
            null,
            i().mark(function e() {
              var t;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), p.getUserinfo();
                      case 3:
                        return (
                          (t = e.sent),
                          e.abrupt(
                            "return",
                            this.formatInviteText(
                              null == t ? void 0 : t.nickName
                            )
                          )
                        );
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          e.abrupt(
                            "return",
                            "hi，我需要你的帮助呀！体验AI大盘分析，<br/>即可帮我完成助力~"
                          )
                        );
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 7]]
              );
            })
          );
        },
        swiperData: function (e) {
          return h(
            this,
            null,
            i().mark(function t() {
              var n, r, s, a, o, c, u, l, h, d;
              return i().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (((t.prev = 0), !e)) {
                          t.next = 6;
                          break;
                        }
                        return (
                          (t.next = 4),
                          p.fetchAssistPageData({
                            invite_code: this.inviteCode,
                          })
                        );
                      case 4:
                        (s = t.sent) &&
                          0 == +s.retcode &&
                          ((a = s.T_info),
                          (o = void 0 === a ? [] : a),
                          (c = s.T1_info),
                          (u = void 0 === c ? [] : c),
                          (l = s.global_ratio_new),
                          (this.global_ratio_new = l),
                          (this.TInfo = o[0]),
                          (this.TpInfo = u[0]));
                      case 6:
                        return (
                          (t.next = 8),
                          p.fetchMainFunds({
                            h5ver: "2.0.1",
                            code: "sh000001",
                            type: "todayFundFlow",
                            zsPage: "1",
                          })
                        );
                      case 8:
                        if (((t.t0 = n = t.sent.data), null != t.t0)) {
                          t.next = 13;
                          break;
                        }
                        (t.t1 = void 0), (t.next = 14);
                        break;
                      case 13:
                        t.t1 = n.todayFundFlow;
                      case 14:
                        if (((t.t2 = r = t.t1), null != t.t2)) {
                          t.next = 19;
                          break;
                        }
                        (t.t3 = void 0), (t.next = 20);
                        break;
                      case 19:
                        t.t3 = r.mainNetIn;
                      case 20:
                        return (
                          (h = t.t3),
                          (d = this.formatMoneyOne(h)),
                          (t.next = 24),
                          this.swiperDataDivisionCommon(d, !1)
                        );
                      case 24:
                        t.next = 28;
                        break;
                      case 26:
                        (t.prev = 26), (t.t4 = t.catch(0));
                      case 28:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[0, 26]]
              );
            })
          );
        },
        getOpinionData: function () {
          return h(
            this,
            null,
            i().mark(function e() {
              var t, n, r, s;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          12,
                          (n = d.index.getStorageSync("_qluin")),
                          (e.next = 5),
                          p.fetchLongShortOpinions({
                            date: this.TDate,
                            activity_id:
                              null == (t = this.activityInfo)
                                ? void 0
                                : t.act_id,
                            stock_id: this.stockInfo1.symbol,
                            limit: 20,
                            check: 12,
                            openid: n,
                          })
                        );
                      case 5:
                        return (
                          (r = e.sent), (e.next = 8), p.CommentParser(r.data)
                        );
                      case 8:
                        (s = e.sent), this.applyOpinionData(s), (e.next = 14);
                        break;
                      case 12:
                        (e.prev = 12), (e.t0 = e.catch(0));
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 12]]
              );
            })
          );
        },
        getBtnTipTxt: function () {
          this.inviterGuessResult = this.getInviterGuessResultText(
            this.inviterNickname,
            this.inviterGuessStatus
          );
        },
        getHomedata: function () {
          return h(
            this,
            null,
            i().mark(function e() {
              var t, n;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          p.fetchAssistPageData({
                            invite_code: this.inviteCode,
                          })
                        );
                      case 3:
                        return (
                          (n = e.sent),
                          d.StockBridge.setStorage("guess_home_cache", n),
                          (e.next = 7),
                          this.applyHomeData(n, !1)
                        );
                      case 7:
                        return e.abrupt("return", n);
                      case 10:
                        throw (
                          ((e.prev = 10),
                          (e.t0 = e.catch(0)),
                          d.index.showToast({
                            title:
                              (null == (t = null == e.t0 ? void 0 : e.t0.data)
                                ? void 0
                                : t.retmsg) || "哎哟～系统繁忙，请稍后再试",
                            icon: "none",
                            duration: 2e3,
                          }),
                          e.t0)
                        );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 10]]
              );
            })
          );
        },
        applyHomeData: function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return h(
            this,
            null,
            i().mark(function n() {
              var r, s, a, o;
              return i().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        (r = e.activity_info),
                          (s = void 0 === r ? [] : r),
                          (a = e.invitee_info),
                          (o = void 0 === a ? {} : a),
                          this.applyHomeDataCommon(e, t),
                          o &&
                            (!t &&
                              o.state &&
                              (this.onceStatus ||
                                (this.modalHandle(o.state),
                                (this.onceStatus = !0))),
                            (this.inviterNickname = o.inviter_nickname),
                            (this.inviterResult = +o.inviter_result),
                            !this.subscribeGuideOnce &&
                              (this.subscribeGuide = o.subscribe_guide),
                            (this.inviterGuessStatus = o.inviter_result),
                            (this.headImgUrl = o.inviter_headimgurl),
                            (this.isNewuser = 0 == +o.auth),
                            (this.authScope = o.auth)),
                          (this.activityInfo = s[0]),
                          this.getBtnTipTxt();
                      case 2:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                this
              );
            })
          );
        },
        bulletAnchorPoint: function (e) {
          var t = e.content.newsId;
          t &&
            (d.StockBridge.report("yy.czdupdate_bullet_click", {
              yy_public_str1: "重磅新闻",
            }),
            d.wx$1.navigateTo({
              url: "/pages/newsCon/newsDetail/main?id=".concat(t),
            }));
        },
        isGuess: function (e) {
          return h(
            this,
            null,
            i().mark(function t() {
              var n;
              return i().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e && 0 != +e.user_answer) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return", !0);
                      case 2:
                        return (t.prev = 2), (t.next = 5), p.getUserinfo();
                      case 5:
                        return (
                          (n = t.sent),
                          t.abrupt(
                            "return",
                            !!(null == n ? void 0 : n.subscribe)
                          )
                        );
                      case 9:
                        return (
                          (t.prev = 9),
                          (t.t0 = t.catch(2)),
                          t.abrupt("return", !1)
                        );
                      case 12:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[2, 9]]
              );
            })
          );
        },
        getShareSnapshot: function () {
          return h(
            this,
            null,
            i().mark(function e() {
              var t, n;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((e.prev = 0),
                          (t = this.getFixedStockData()) &&
                            t.nowServeTime &&
                            t.price)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return", null);
                      case 4:
                        return (
                          "https://st.gtimg.com/design/b5900e64b1bbe96164fec348b3d7d4f9.png",
                          (n = this.getShareSnapshotDrawArr(
                            t,
                            "https://st.gtimg.com/design/b5900e64b1bbe96164fec348b3d7d4f9.png"
                          )),
                          (e.next = 7),
                          p.OffscreenCanvasImage.draw(n)
                        );
                      case 7:
                        return e.abrupt("return", e.sent);
                      case 10:
                        return (
                          (e.prev = 10),
                          (e.t0 = e.catch(0)),
                          e.abrupt("return", null)
                        );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 10]]
              );
            })
          );
        },
        getStockInfo: function () {
          return h(
            this,
            null,
            i().mark(function e() {
              var t;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), p.fetchStockInfo();
                      case 3:
                        return (
                          (t = e.sent),
                          e.abrupt(
                            "return",
                            (d.StockBridge.setStorage("guess_stock_cache", t),
                            this.applyStockInfo(t),
                            t)
                          )
                        );
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          e.abrupt("return", null)
                        );
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 7]]
              );
            })
          );
        },
        applyStockInfo: function (e) {
          var t;
          this.applyStockInfoCommon(e),
            (null == (t = this.stockInfo1) ? void 0 : t.tradeDateString) &&
              (this.tradeDateString = this.stockInfo1.tradeDateString);
        },
        applyCachedStockInfo: function (e) {
          var t;
          this.applyStockInfoCommon(e),
            (null == (t = this.stockInfo1) ? void 0 : t.tradeDateString) &&
              (this.tradeDateString = this.stockInfo1.tradeDateString);
        },
        getGlobleConfig: function () {
          return h(
            this,
            null,
            i().mark(function e() {
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0), (e.next = 3), p.fetchVToolsConfig()
                        );
                      case 3:
                        (this.actConfig = e.sent), (e.next = 8);
                        break;
                      case 6:
                        (e.prev = 6), (e.t0 = e.catch(0));
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 6]]
              );
            })
          );
        },
        modalHandle: function (e) {
          var t = this;
          "0" !== e
            ? ((this.modalOptions = {
                title: "温馨提示",
                content: "你已参与过竞猜，无法为好友助力。",
                tips: "将自动跳转至活动主页",
                helpstatus: 0,
                button: { text: "返回活动主页", countdown: 3 },
              }),
              (this.modalOptions.content = p.HELP_MODAL_TEXT[e].content),
              (this.isExceptionModalVisible = !0),
              d.StockBridge.report("yy.czdlanew.guest_error_pupon_baoguang", {
                yy_public_str1: e,
              }))
            : this.inviteCode &&
              this.aiDialogQuestion &&
              this.$nextTick(function () {
                var e;
                null == (e = t.$refs.MarketAnalysis) || e.openGuestPopup();
              });
        },
        openRedPacket: function () {
          return h(
            this,
            null,
            i().mark(function e() {
              var t, n, r, s, a, o, c;
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!this.inviteCode || this.experienceAi) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (e.prev = 1),
                          (this.experienceAi = !0),
                          (e.next = 5),
                          p.submitGuessAnswer({
                            action: 7,
                            date: this.TDate,
                            invite_code: this.inviteCode || "",
                          })
                        );
                      case 5:
                        (r = e.sent),
                          (s = r.reward_desc),
                          (a = r.reward_type),
                          Object.values(p.REWARD_TYPE).includes(a) &&
                            s &&
                            (d.StockBridge.report(
                              "yy.caizhangdie.guest_marketanalysis_helpsuccess_popup_brow"
                            ),
                            null == (t = this.$refs.rewardModal) ||
                              t.showPopup({
                                type: "reward",
                                rewardDesc: s,
                                rewardType: a,
                                onConfirm: function () {
                                  d.StockBridge.report(
                                    "yy.caizhangdie.guest_marketanalysis_helpsuccess_popup_withdrawal_click"
                                  ),
                                    d.index.redirectTo({
                                      url: "/pages/guessRiseFall/main?stat_data=Ieu59p00qb213",
                                    });
                                },
                              }),
                            this.stockBridge.busOff(
                              "common-ai-answer-finish",
                              this.openRedPacket
                            )),
                          (e.next = 16);
                        break;
                      case 11:
                        (e.prev = 11),
                          (e.t0 = e.catch(1)),
                          (this.experienceAi = !1),
                          (o = (null == e.t0 ? void 0 : e.t0.data) || {}),
                          (c = o.retmsg),
                          null == (n = this.$refs.rewardModal) ||
                            n.showPopup({
                              title: "温馨提示",
                              desc: c || "操作失败，请稍后重试",
                            });
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 11]]
              );
            })
          );
        },
        receiveAndContinue: function () {
          d.StockBridge.report(
            "yy.caizhangdie.guest_marketanalysis_helpsuccess_popup_wenai_click"
          );
        },
        guessOpResult: function (e) {
          return h(
            this,
            null,
            i().mark(function t() {
              var n,
                r = this;
              return i().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          d.StockBridge.report(
                            "yy.czdlanew.guest_guess_fallorrise_click",
                            { yy_public_str1: e }
                          ),
                          (t.next = 4),
                          p.submitGuessAnswer({
                            action: 2,
                            act_id: this.actId || "3",
                            user_answer: e,
                            date: this.TDate,
                            invite_code: this.inviteCode || "",
                          })
                        );
                      case 4:
                        "1" === this.subscribeGuide
                          ? ((this.qrcodeShow = !0),
                            d.StockBridge.report(
                              "yy.czdlanew.guest_sucsess_newuser_helpguess_baoguang"
                            ),
                            (this.subscribeGuideOnce = !0),
                            setTimeout(function () {
                              return h(
                                r,
                                null,
                                i().mark(function e() {
                                  return i().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2), this.swiperData(!0)
                                            );
                                          case 2:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    this
                                  );
                                })
                              );
                            }, 300))
                          : setTimeout(function () {
                              return h(
                                r,
                                null,
                                i().mark(function e() {
                                  return i().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2), this.swiperData(!0)
                                            );
                                          case 2:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    this
                                  );
                                })
                              );
                            }, 300),
                          (t.next = 15);
                        break;
                      case 7:
                        if (
                          ((t.prev = 7),
                          (t.t0 = t.catch(0)),
                          d.StockBridge.report(
                            "yy.czdlanew.guest_fail_helpguess_baoguang"
                          ),
                          d.index.showToast({
                            title:
                              (null == (n = t.t0.data) ? void 0 : n.retmsg) ||
                              "操作失败",
                            icon: "none",
                            duration: 1500,
                          }),
                          (t.t1 =
                            t.t0.data && "171600014" === t.t0.data.retcode),
                          !t.t1)
                        ) {
                          t.next = 15;
                          break;
                        }
                        return (t.next = 15), this.swiperData(!0);
                      case 15:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[0, 7]]
              );
            })
          );
        },
      }),
      s(e, a(t))),
  };
Array ||
  (
    d.resolveComponent("marketGuessing") +
    d.resolveComponent("MarketAnalysis") +
    d.resolveComponent("SimpleModal") +
    d.resolveComponent("half-screen-ai-entry") +
    d.resolveComponent("RewardModal")
  )();
var v = d._export_sfc(g, [
  [
    "render",
    function (e, t, n, i, r, s) {
      return d.e(
        { a: r.loaded },
        r.loaded
          ? d.e(
              { b: r.headImgUrl },
              r.headImgUrl ? { c: "url(" + r.headImgUrl + ")" } : {},
              { d: r.inviterNickname && r.inviterNickname.length <= 3 },
              r.inviterNickname && r.inviterNickname.length <= 3
                ? { e: d.t(r.inviterNickname) }
                : {},
              { f: r.inviterNickname && r.inviterNickname.length > 3 },
              r.inviterNickname && r.inviterNickname.length > 3
                ? { g: d.t(r.inviterNickname) }
                : {},
              { h: r.inviteText }
            )
          : {},
        {
          i: d.o(s.guessOpResult, 1139),
          j: d.o(s.bulletAnchorPoint, 1140),
          k: d.p({
            "rise-results": r.riseResults,
            "fall-results": r.fallResults,
            "guess-local-data": r.guessLocalData,
            "trade-date-string": r.tradeDateString,
            FTInfo: r.FTInfo,
            "stock-info": r.stockInfo,
            "clock-list": r.dateList,
            "inviter-guess-result": r.inviterGuessResult,
            "inviter-result": r.inviterResult,
            "rate-info": r.rateInfo,
            TpInfo: r.TpInfo,
            TInfo: r.TInfo,
            "guest-title": "猜今日涨跌 帮好友助力",
            "subscribe-guide": "1" === r.subscribeGuide,
          }),
          l: d.sr("MarketAnalysis", "8736b962-1"),
          m: d.o(s.onClickAiDialog, 1141),
          n: d.p({
            "page-type": "guest",
            "need-request": !1,
            "customize-ai-config": { title: r.aiDialogQuestion },
            "ai-dialog-question": r.aiDialogQuestion,
          }),
          o: r.qrcodeShow,
        },
        r.qrcodeShow
          ? {
              p: d.o(function (e) {
                return (r.qrcodeShow = e);
              }, 1142),
              q: d.o(function (e) {
                return (r.qrcodeShow = !1);
              }, 1143),
              r: d.p({
                visible: r.qrcodeShow,
                type: "qrcode",
                "friend-nickname": r.inviterNickname,
              }),
            }
          : {},
        {
          s: r.canvasWidth + "px",
          t: r.canvasHeight + "px",
          v: d.o(function (e) {
            return (r.isExceptionModalVisible = e);
          }, 1144),
          w: d.p({
            visible: r.isExceptionModalVisible,
            type: "exception",
            "z-index": 101,
            "show-close": !1,
            options: r.modalOptions,
            "is-newuser": r.isNewuser,
          }),
          x: r.showAiDialog,
        },
        r.showAiDialog
          ? {
              y: d.o(function (e) {
                return (r.showAiDialog = !1);
              }, 1145),
              z: d.p({
                "show-ai-dialog": r.showAiDialog,
                "ai-dialog-question": r.aiDialogQuestion,
                "ai-question-query": r.aiDialogQuery,
                "source-from": "guessrisefall",
              }),
            }
          : {},
        {
          A: d.sr("rewardModal", "8736b962-5"),
          B: d.o(s.receiveAndContinue, 1146),
        }
      );
    },
  ],
  ["__scopeId", "data-v-8736b962"],
]);
wx.createComponent(v);
