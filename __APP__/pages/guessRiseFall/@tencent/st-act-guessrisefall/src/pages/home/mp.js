var e = require("../../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  o = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  l = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  d = function (e, t) {
    for (var n in t || (t = {})) c.call(t, n) && l(e, n, t[n]);
    if (a) {
      var r,
        o = i(a(t));
      try {
        for (o.s(); !(r = o.n()).done; ) {
          n = r.value;
          u.call(t, n) && l(e, n, t[n]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  p = function (e, t) {
    return o(e, s(t));
  },
  h = function (e, t, n) {
    return new Promise(function (i, r) {
      var o = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        s = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(o, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  f = require("../../../../../../../common/vendor.js"),
  m = require("../../mixins/guess-page-mixin.js"),
  g = getApp().globalData,
  v = {
    name: "MainPage",
    mixins: [
      m.createGuessPageMixin({ isGuest: !1, isH5: !1 }),
      (function () {
        var i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = i.isH5,
          o = void 0 !== r && r;
        return {
          methods: {
            getTextId: function (e) {
              if (e)
                return e.indexOf("来晚一步") > -1
                  ? 1
                  : e.indexOf("竞猜错误别气馁") > -1
                  ? 2
                  : e.indexOf("为保证准确领取红包") > -1
                  ? 3
                  : e.indexOf("已使用其他账户参与") > -1
                  ? 4
                  : void 0;
            },
            checkIsLottieModalCommon: function (e, i) {
              return h(
                this,
                null,
                t().mark(function r() {
                  var o,
                    s = this;
                  return t().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (e && 0 !== e.length) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return");
                          case 2:
                            if (
                              !e.some(function (e) {
                                return "" !== e.reward_desc;
                              })
                            ) {
                              t.next = 8;
                              break;
                            }
                            (this.rewardList = e.map(function (e, t) {
                              return d(
                                d({ id: t }, e),
                                m.REWARD_CONFIG[e.type] || {}
                              );
                            })),
                              0 !==
                                (o = this.rewardList.filter(function (e) {
                                  return "3" === e.type;
                                })).length &&
                                (this.helpList = o.map(function (e) {
                                  var t = i["reward_detail_".concat(e.date)];
                                  return (
                                    void 0 !== s.isHelp && (s.isHelp = t || []),
                                    { id: e.id, list: t ? n(t) : [] }
                                  );
                                })),
                              (this.lottieShow = !0),
                              (t.next = 10);
                            break;
                          case 8:
                            return (t.next = 10), this.handleNonLottieModal(e);
                          case 10:
                          case "end":
                            return t.stop();
                        }
                    },
                    r,
                    this
                  );
                })
              );
            },
            handleNonLottieModal: function (n) {
              return h(
                this,
                null,
                t().mark(function i() {
                  var r,
                    s,
                    a,
                    c,
                    u,
                    l,
                    d,
                    p,
                    h,
                    m,
                    g,
                    v,
                    w,
                    x,
                    k,
                    b = this;
                  return t().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (r = n.map(function (e) {
                              return {
                                id: b.getTextId(e.msg),
                                msg: e.msg,
                                type: e.type,
                              };
                            })),
                              (s = {}),
                              r.forEach(function (e) {
                                void 0 === s["textId_".concat(e.id)] &&
                                  (s["textId_".concat(e.id)] = e.msg);
                              }),
                              (a = Object.keys(s).map(function (e) {
                                return { msg: s[e] };
                              })),
                              (c = ["猜对", "猜错", "未实名", "实名冲突"]),
                              (u = 0);
                          case 4:
                            if (!(u < a.length)) {
                              t.next = 16;
                              break;
                            }
                            if (
                              ((l = this.getTextId(a[u].msg)),
                              (d = c[l ? l - 1 : -1] || "未知"),
                              f.StockBridge.report(
                                "yy.czdupgrade.un_lottie_modal.baoguang",
                                {
                                  yy_public_str1: ""
                                    .concat(d, "_")
                                    .concat(u + 1),
                                }
                              ),
                              !o || !this.showModal)
                            ) {
                              t.next = 12;
                              break;
                            }
                            return (
                              (p = (a[u].msg || "").split(";")),
                              (h = e(p, 2)),
                              (m = h[0]),
                              (g = h[1]),
                              (t.next = 10),
                              this.showModal("simple", {
                                type: "ordinary",
                                title: m,
                                tipText: g,
                              })
                            );
                          case 10:
                            t.next = 13;
                            break;
                          case 12:
                            this.$refs.simpleModal &&
                              (this.$refs.simpleModal.open(),
                              (this.closeBuriedPoint = ""
                                .concat(d, "_")
                                .concat(u + 1)),
                              (this.iKnowBuriedPoint = "".concat(d)),
                              (v = (a[u].msg || "").split(";")),
                              (w = e(v, 2)),
                              (x = w[0]),
                              (k = w[1]),
                              (this.title = x),
                              (this.tipText = k));
                          case 13:
                            u++, (t.next = 4);
                            break;
                          case 16:
                          case "end":
                            return t.stop();
                        }
                    },
                    i,
                    this
                  );
                })
              );
            },
            closeLottieModal: function () {
              this.lottieShow = !1;
            },
            guessedInvite: function (e, t) {
              var n = this,
                i = parseInt(e, 10),
                r = parseInt(t, 10);
              ((e && 0 !== i) || (t && 0 !== r)) &&
                (this.$nextTick(function () {
                  setTimeout(function () {
                    o
                      ? n.pointInvite && n.pointInvite()
                      : n.$nextTick(function () {
                          n.bulletAnchorPointFz &&
                            n.bulletAnchorPointFz("invitePoint", 90);
                        });
                  }, 300);
                }),
                f.StockBridge.report("yy.czdlanew.index.helpbtn.baoguang"));
            },
          },
        };
      })({ isH5: !1 }),
    ],
    components: {
      task: function () {
        return "../../../../../../asyncCom/@tencent/st-act-task/components/task/index.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC10YXNrL2NvbXBvbmVudHMvdGFzay9pbmRleC52dWU;
          }
        );
      },
      rank: function () {
        return "../../components/guess-ranking/index.js";
      },
      marketGuessing: function () {
        return "../../components/market-guessing/mp.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC1ndWVzc3Jpc2VmYWxsL3NyYy9jb21wb25lbnRzL21hcmtldC1ndWVzc2luZy9tcC52dWU;
        });
      },
      individualGuess: function () {
        return "../../components/individual-guess/index.js";
      },
      viewpoint: function () {
        return "../../components/user-opinion/index.js";
      },
      goldEntry: function () {
        return "../../components/gold-entry/index.js";
      },
      SimpleModal: function () {
        return "../../components/popup-modal/simple-modal.js";
      },
      RewardModal: function () {
        return "../../components/popup-modal/reward-modal.js";
      },
      lottieModal: function () {
        return "../../components/popup-modal/lottie-modal/mp.js";
      },
      EvaluatePopup: function () {
        return "../../components/popup-modal/evaluate-popup.js";
      },
      HalfScreenAiEntry: function () {
        return "../../../../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
      MarketAnalysis: function () {
        return "../../components/market-analysis/index.js";
      },
      GuideModal: function () {
        return "../../components/popup-modal/guide-modal.js";
      },
    },
    provide: function () {
      var e = this;
      return {
        stockBridge: this.stockBridge,
        getShowAiGuideTips: function () {
          return e.showAiGuideTips;
        },
        getInviterGuessResult: function () {
          return "";
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
        stockBridge: f.StockBridge,
        skin: f.StockBridge.getStorage("user/skin") || "white",
        dateList: [],
        TInfo: {},
        TpInfo: {},
        FTInfo: {},
        TDate: null,
        stockInfo1: {
          code: "000001",
          market: "1",
          name: "上证指数",
          symbol: "sh000001",
        },
        noticeInfo: [],
        interval: null,
        activityInfo: { act_id: 3 },
        myPerformance: {},
        allPerformance: [],
        commentId: "topic201807191654450080715531",
        commentAgreement: "",
        loaded: !1,
        shop_asset: {},
        guessInfo: {},
        outerSrc: m.OUTER_SRC.inner,
        global_ratio_new: null,
        p_perform: null,
        guessLocalData: [],
        riseTopic: "",
        fallTopic: "",
        checkResult: 0,
        riseResults: [],
        fallResults: [],
        tradeDateString: "",
        lottieShow: !1,
        rewardList: [],
        helpList: [],
        title: null,
        tipText: null,
        isPageDestroyed: !1,
        guessErrorRewardModalData: { rewardDesc: "", rewardMemo: "", type: "" },
        inviteCode: "",
        userAllInfo: null,
        closeBuriedPoint: "",
        iKnowBuriedPoint: "",
        isHelp: null,
        activityProgressStatus: !1,
        canvasWidth: g.device.windowWidth,
        canvasHeight: g.rpxToPx(622),
        stockInfo: {
          showRise: "hide",
          showDrop: "hide",
          zdColor: "gray",
          dqj: "-.--",
          zde: "--",
          zdf: "--",
        },
        stockPool: [],
        etfList: [],
        etfLoaded: !1,
        maskListData: null,
        mpEvaluateType: "",
        isEvaluateGuideVisible: !0,
        mpEvaluateConf: {},
        allTimes: {},
        cgitime: 0,
        rankLoad: !1,
        pointLoad: !1,
        isFollow: !1,
        showKline: !1,
        showAnalysis: !1,
        showAiDialog: !1,
        aiDialogQuestion: "",
        aiDialogQuery: "",
        aiChannel: "guessrisefall",
        experienceAi: !1,
        cashPointInfo: {},
        showAiGuideTips: !1,
        showGuideModal: !1,
        showFollowModal: !1,
        successModalShow: !1,
        czdModalInfo: null,
        czdModalFollow: null,
        akeyToFollowData: {},
        hasAccount: !1,
        hasDoubleCoupon: !1,
        newUserFlag: !1,
        STInfo: null,
        inviteInfo: {},
        vip_info: {},
      };
    },
    computed: {
      actId: function () {
        return this.activityInfo.act_id;
      },
      isShowEvaluateModule: function () {
        var e;
        return (
          this.loaded &&
          (null == (e = this.mpEvaluateConf) ? void 0 : e.bottomsuction_switch)
        );
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
          this.swiperData(!1, !0);
        },
        immediate: !1,
      },
      pageOptions: {
        immediate: !0,
        handler: function (e) {
          e &&
            !this._hasInitialized &&
            ((this._hasInitialized = !0), this.handlePageLoad(e));
        },
      },
    },
    mounted: function () {
      return h(
        this,
        null,
        t().mark(function e() {
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    this.addEvent();
                  case 1:
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
    beforeDestroy: function () {
      (this.isPageDestroyed = !0), this.removeEvent();
    },
    methods: p(d({}, m.guessHelpers), {
      handlePageLoad: function (e) {
        return h(
          this,
          null,
          t().mark(function n() {
            var i,
              r,
              o,
              s = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        e &&
                          "Imn58p00r5001" !== e.stat_data &&
                          (this.outerSrc = m.OUTER_SRC.outer),
                        (i = f.StockBridge.getStorage("guess_home_cache")),
                        (r = f.StockBridge.getStorage("guess_stock_cache")),
                        i && this.applyHomeData(i, !0),
                        r && this.applyStockInfo(r),
                        this.getUserInfo(),
                        (o = Promise.all([
                          this.getHomeData(),
                          this.getStockInfo(),
                        ])),
                        this.getWujiConfig(),
                        this.getGuessRecommend(),
                        setTimeout(function () {
                          s.getRankData(), s.getOpinionData();
                        }, m.DELAY_CONFIG.SECONDARY),
                        (t.next = 9),
                        o
                      );
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      onPageShow: function () {},
      onPageHide: function () {
        this.interval && clearInterval(this.interval);
      },
      getShareConfig: function (e) {
        return h(
          this,
          null,
          t().mark(function n() {
            var i, r, o, s, a, c, u, l;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), (t.t0 = this.inviteCode), t.t0)) {
                        t.next = 5;
                        break;
                      }
                      return (t.next = 5), this.updateInviteCode();
                    case 5:
                      if (
                        ((o = ""),
                        (s = this.getRandomShareXcx()),
                        (a = s.title),
                        (c =
                          null ==
                          (r =
                            null == (i = null == e ? void 0 : e.target)
                              ? void 0
                              : i.dataset)
                            ? void 0
                            : r.aiquestion),
                        "button" !== (null == e ? void 0 : e.from) || !c)
                      ) {
                        t.next = 14;
                        break;
                      }
                      return (t.next = 10), this.getAiShareImg(c);
                    case 10:
                      (o = t.sent),
                        (a =
                          "【全民猜涨跌】送你一次免费体验AI大盘分析，还能领红包哦～"),
                        (t.next = 17);
                      break;
                    case 14:
                      return (t.next = 16), this.getShareSnapshot();
                    case 16:
                      o = t.sent;
                    case 17:
                      if (
                        ((u = (o || {}).tempFilePath),
                        (l =
                          u ||
                          "https://st.gtimg.com/design/5190cd22002b9660dbc73cda74f72289.png"),
                        "button" !== (null == e ? void 0 : e.from) ||
                          !this.inviteCode)
                      ) {
                        t.next = 21;
                        break;
                      }
                      return (
                        "Otr03p00r5001",
                        t.abrupt("return", {
                          title: a,
                          imageUrl: l,
                          path: "/pages/guessRiseFall/guest/main?invite_code="
                            .concat(this.inviteCode, "&stat_data=")
                            .concat("Otr03p00r5001", "&ai_question=")
                            .concat(encodeURIComponent(c)),
                        })
                      );
                    case 21:
                      return t.abrupt("return", {
                        title: a,
                        imageUrl: l,
                        path: "/pages/guessRiseFall/main?stat_data=FMxcx2M06PG00100",
                      });
                    case 24:
                      return (
                        (t.prev = 24),
                        (t.t1 = t.catch(0)),
                        t.abrupt("return", {
                          title: m.SHARE_TITLES[0],
                          imageUrl:
                            "https://st.gtimg.com/design/5190cd22002b9660dbc73cda74f72289.png",
                          path: "/pages/guessRiseFall/main?stat_data=FMxcx2M06PG00100",
                        })
                      );
                    case 27:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[0, 24]]
            );
          })
        );
      },
      getCopyUrlConfig: function () {
        try {
          var e = this.getRandomShareXcx().title,
            t = "https://wzq.gtimg.com/image/activity/guessRiseFall/right.png";
          return this.inviteCode
            ? {
                title: e,
                imageUrl: t,
                path: "/pages/guessRiseFall/guest/main?invite_code=".concat(
                  this.inviteCode,
                  "&stat_data=FMxcx4M06PG00100"
                ),
              }
            : {
                title: e,
                imageUrl: t,
                path: "/pages/guessRiseFall/main?stat_data=FMxcx4M06PG00100",
              };
        } catch (e) {
          return {
            title: m.SHARE_TITLES[0],
            imageUrl:
              "https://wzq.gtimg.com/image/activity/guessRiseFall/right.png",
            path: "/pages/guessRiseFall/main?stat_data=FMxcx4M06PG00100",
          };
        }
      },
      addEvent: function () {
        this.stockBridge.busOn("onClickAiDialog", this.onshowAidialog),
          this.stockBridge.busOn(
            "common-ai-answer-finish",
            this.finishExperienceAi
          );
      },
      removeEvent: function () {
        this.stockBridge.busOff("onClickAiDialog", this.onshowAidialog),
          this.stockBridge.busOff(
            "common-ai-answer-finish",
            this.finishExperienceAi
          );
      },
      onMarketGuessingShellReady: function () {},
      onKlineReady: function () {
        this.showAnalysis || (this.showAnalysis = !0);
      },
      onshowAidialog: function (e, t) {
        if ("btn" === t) return this.scrollToAIModule();
        if (e && e.title) {
          var n = e.title,
            i = e.prompt;
          (this.showAiDialog = !0),
            (this.aiDialogQuestion = n),
            (this.aiDialogQuery = i);
        }
      },
      finishExperienceAi: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var n;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        m.submitGuessAnswer({
                          action: 7,
                          date: this.TDate,
                          outer_src: this.outerSrc,
                        })
                      );
                    case 3:
                      if (!(n = e.sent) || 0 != +n.retcode) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 7), this.swiperData(!0, !1);
                    case 7:
                      (this.experienceAi = !0),
                        (this.showAiGuideTips = !1),
                        (e.next = 12);
                      break;
                    case 11:
                      f.StockBridge.modal({
                        title: "温馨提示",
                        confirmText: "知道了",
                        content: n && n.retmsg,
                        showCancel: !1,
                      });
                    case 12:
                      e.next = 16;
                      break;
                    case 14:
                      (e.prev = 14), (e.t0 = e.catch(0));
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 14]]
            );
          })
        );
      },
      getUserInfo: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), m.getUserinfo();
                    case 2:
                      (this.userAllInfo = e.sent),
                        (this.isFollow = !!+this.userAllInfo.subscribe);
                    case 4:
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
      getShareSnapshot: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var n, i;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        (n = this.getFixedStockData()) &&
                          n.nowServeTime &&
                          n.price)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return", null);
                    case 4:
                      return (
                        "https://st.gtimg.com/design/b5900e64b1bbe96164fec348b3d7d4f9.png",
                        (i = this.getShareSnapshotDrawArr(
                          n,
                          "https://st.gtimg.com/design/b5900e64b1bbe96164fec348b3d7d4f9.png"
                        )),
                        (e.next = 7),
                        m.OffscreenCanvasImage.draw(i)
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
      getAiShareImg: function (e) {
        return h(
          this,
          null,
          t().mark(function n() {
            var r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), e)) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return", null);
                    case 3:
                      return (
                        (r = [
                          {
                            type: "image",
                            url: "https://st.gtimg.com/design/9171afff2e283cd0f0e9187c435a13e9.png?t=".concat(
                              Date.parse(new Date().toString())
                            ),
                            x: 0,
                            y: 0,
                          },
                        ]),
                        (function (e, t, n, r) {
                          var o,
                            s =
                              arguments.length > 4 && void 0 !== arguments[4]
                                ? arguments[4]
                                : 400;
                          if (!e) return [];
                          try {
                            o =
                              m.OffscreenCanvasImage.initCanvas().getContext(
                                "2d"
                              );
                          } catch (e) {
                            "undefined" != typeof document &&
                              (o = document
                                .createElement("canvas")
                                .getContext("2d"));
                          }
                          if (!o) return [];
                          o.font = "".concat(s, " ").concat(r, "px stockFont");
                          var a,
                            c = [],
                            u = "",
                            l = i(e);
                          try {
                            for (l.s(); !(a = l.n()).done; ) {
                              var d = a.value;
                              o.measureText(u + d).width <= t
                                ? (u += d)
                                : (c.push(u), (u = d));
                            }
                          } catch (e) {
                            l.e(e);
                          } finally {
                            l.f();
                          }
                          if ((u && c.push(u), c.length > n)) {
                            var p,
                              h = "...",
                              f = o.measureText(h).width,
                              g = c[n - 1],
                              v = "",
                              w = 0,
                              x = i(g);
                            try {
                              for (x.s(); !(p = x.n()).done; ) {
                                var k = p.value,
                                  b = o.measureText(k).width;
                                if (w + b + f >= t) break;
                                (v += k), (w += b);
                              }
                            } catch (e) {
                              x.e(e);
                            } finally {
                              x.f();
                            }
                            return (c[n - 1] = v + h), c.slice(0, n);
                          }
                          return c;
                        })(e, 356, 2, 32, 500).forEach(function (e, t) {
                          r.push({
                            type: "text",
                            text: e,
                            x: 70,
                            y: 78 + 44 * t,
                            color: "#262e40",
                            fontSize: 32,
                            fontWeight: 500,
                          });
                        }),
                        (t.next = 7),
                        m.OffscreenCanvasImage.draw(r)
                      );
                    case 7:
                      return t.abrupt("return", t.sent);
                    case 10:
                      return (
                        (t.prev = 10),
                        (t.t0 = t.catch(0)),
                        t.abrupt("return", null)
                      );
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              null,
              [[0, 10]]
            );
          })
        );
      },
      getWujiConfig: function () {
        return h(
          this,
          null,
          t().mark(function n() {
            var i, r, o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        f.Wuji.get({
                          appid: "act",
                          schemaid: "yy_activity_page_config",
                          filter: encodeURIComponent(
                            "act_id = guess_rise_drop"
                          ),
                        })
                      );
                    case 3:
                      (i = t.sent),
                        (r = e(i.data, 1)),
                        (o = r[0].ui_conf),
                        (this.mpEvaluateConf =
                          JSON.parse(o).mp_evaluate_conf || {}),
                        (t.next = 12);
                      break;
                    case 9:
                      (t.prev = 9),
                        (t.t0 = t.catch(0)),
                        (this.mpEvaluateConf = {});
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[0, 9]]
            );
          })
        );
      },
      showRightEvaluateGuide: function () {
        (this.mpEvaluateType = "rightguide"),
          (this.isEvaluateGuideVisible = !0);
      },
      getGuessRecommend: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var n,
              i,
              r,
              o = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0), (e.next = 3), m.fetchGuessRecommend()
                      );
                    case 3:
                      (n = e.sent) &&
                        0 == +n.retcode &&
                        ((i = n.recommend_etf),
                        (r = void 0 === i ? [] : i) && r.length
                          ? (this.etfList = r.map(function (e) {
                              return p(d({}, e), {
                                zdf:
                                  e.zdf > 0 && !String(e.zdf).startsWith("+")
                                    ? "+".concat(e.zdf)
                                    : e.zdf,
                              });
                            }))
                          : (this.etfList = [])),
                        setTimeout(function () {
                          o.etfLoaded = !0;
                        }, m.DELAY_CONFIG.SECONDARY),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        (this.etfLoaded = !0),
                        f.StockBridge.aegisReportEvent(
                          "GET-GUESS-RECOMMEND-ETF-ERROR",
                          {
                            ext3: JSON.stringify(
                              (e.t0 && e.t0.message) || "获取ETF列表失败"
                            ),
                          }
                        );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 8]]
            );
          })
        );
      },
      updateInviteCode: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var n, i;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        m.fetchGuessHomeData({
                          source: 2,
                          expose_flag: "2",
                          new_version: 3,
                        })
                      );
                    case 3:
                      (n = e.sent) &&
                        0 == +n.retcode &&
                        ((i = n.new_invite_info),
                        (this.inviteCode =
                          (null == i ? void 0 : i.invite_code) || "")),
                        (e.next = 9);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0));
                    case 9:
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
      jumpRules: function () {
        f.StockBridge.report("yy.guessrisefall.click_rule");
        var e = encodeURIComponent(
          "https://wzq.tenpay.com/activity/page/guessRiseFall/#/strategy"
        );
        g.navigateTo({
          url: "/pages/act/webview/main?url="
            .concat(e, "&shareTitle=")
            .concat(encodeURIComponent("猜涨跌")),
        });
      },
      swiperData: function (e, n) {
        return h(
          this,
          null,
          t().mark(function i() {
            var r, o, s, a, c, u, l, d, p, h, f, g, v;
            return t().wrap(
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
                        m.fetchGuessHomeData({
                          source: 2,
                          expose_flag: "2",
                          new_version: 2,
                        })
                      );
                    case 4:
                      (a = t.sent) &&
                        0 == +a.retcode &&
                        ((c = a.T_info),
                        (u = void 0 === c ? [] : c),
                        (l = a.T1_info),
                        (d = void 0 === l ? [] : l),
                        (p = a.global_ratio_new),
                        (h = a.new_invite_info),
                        (this.global_ratio_new = p),
                        (this.TInfo = u[0]),
                        (this.TpInfo = d[0]),
                        (this.FTInfo = (
                          null == (r = this.TpInfo) ? void 0 : r.user_answer
                        )
                          ? this.TpInfo
                          : this.TInfo),
                        (f = (null == h ? void 0 : h.invite_code) || "") &&
                          (this.inviteCode = f));
                    case 6:
                      return (
                        (t.next = 8),
                        m.fetchMainFunds({
                          h5ver: "2.0.1",
                          code: "sh000001",
                          type: "todayFundFlow",
                          zsPage: "1",
                        })
                      );
                    case 8:
                      if (((t.t0 = o = t.sent.data), null != t.t0)) {
                        t.next = 13;
                        break;
                      }
                      (t.t1 = void 0), (t.next = 14);
                      break;
                    case 13:
                      t.t1 = o.todayFundFlow;
                    case 14:
                      if (((t.t2 = s = t.t1), null != t.t2)) {
                        t.next = 19;
                        break;
                      }
                      (t.t3 = void 0), (t.next = 20);
                      break;
                    case 19:
                      t.t3 = s.mainNetIn;
                    case 20:
                      return (
                        (g = t.t3),
                        (v = this.formatMoneyOne(g)),
                        (t.next = 24),
                        this.swiperDataDivisionCommon(v, n)
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
              i,
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
          t().mark(function e() {
            var n, i, r;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        12,
                        (n = f.index.getStorageSync("_qluin")),
                        (e.next = 5),
                        m.fetchLongShortOpinions({
                          date: this.TDate,
                          activity_id: this.actId,
                          stock_id: this.stockInfo1.symbol,
                          limit: 20,
                          check: 12,
                          openid: n,
                        })
                      );
                    case 5:
                      return (
                        (i = e.sent), (e.next = 8), m.CommentParser(i.data)
                      );
                    case 8:
                      (r = e.sent),
                        this.applyOpinionData(r),
                        (this.pointLoad = !0),
                        (e.next = 15);
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t0 = e.catch(0)),
                        f.StockBridge.aegisReportEvent(
                          "GET-OPINION-DATA-ERROR",
                          {
                            ext3: JSON.stringify(
                              (null == e.t0 ? void 0 : e.t0.message) ||
                                "获取评论数据失败"
                            ),
                          }
                        ),
                        (this.pointLoad = !0);
                    case 15:
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
      getHomeData: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var n;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        m.fetchGuessHomeData({
                          source: 2,
                          expose_flag: "2",
                          new_version: 3,
                        })
                      );
                    case 3:
                      if (!(n = e.sent) || 0 != +n.retcode) {
                        e.next = 10;
                        break;
                      }
                      return (
                        f.StockBridge.setStorage("guess_home_cache", n),
                        (e.next = 8),
                        this.applyHomeData(n, !1)
                      );
                    case 8:
                      e.next = 11;
                      break;
                    case 10:
                      f.wx$1.showModal({
                        title: "温馨提示",
                        confirmText: "知道了",
                        content: n && n.retmsg,
                        showCancel: !1,
                      });
                    case 11:
                      e.next = 15;
                      break;
                    case 13:
                      (e.prev = 13), (e.t0 = e.catch(0));
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 13]]
            );
          })
        );
      },
      applyHomeData: function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return h(
          this,
          null,
          t().mark(function i() {
            var r,
              o,
              s,
              a,
              c,
              u,
              l,
              d,
              p,
              h,
              m,
              g,
              v,
              w,
              x,
              k,
              b,
              y,
              _,
              S,
              M,
              I,
              T,
              D,
              R,
              E,
              C,
              A;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((c = (a = e || {}).activity_info),
                        (u = void 0 === c ? [] : c),
                        (l = a.p_perform),
                        (d = void 0 === l ? [] : l),
                        (p = a.notice_info),
                        (h = void 0 === p ? [] : p),
                        (m = a.comment_agreement),
                        (g = a.invite_info),
                        (v = void 0 === g ? {} : g),
                        (w = a.vip_info),
                        void 0 === w ? {} : w,
                        (x = a.new_user_tip),
                        (k = a.new_invite_info),
                        (b = a.reward_tips),
                        (y = a.new_notice),
                        (_ = a.recommend),
                        (S = void 0 === _ ? [] : _),
                        (M = a.profit_rate),
                        (I = void 0 === M ? "" : M),
                        (T = a.win_percent),
                        (D = void 0 === T ? "" : T),
                        (R = a.pr_type),
                        (E = void 0 === R ? "" : R),
                        (C = a.cash_point_info),
                        (A = void 0 === C ? {} : C),
                        this.applyHomeDataCommon(e, n),
                        (this.cashPointInfo = A),
                        (this.akeyToFollowData = {
                          profit_rate: I,
                          win_percent: D,
                          pr_type: E,
                        }),
                        (this.p_perform = d),
                        S && S.length && (this.stockPool = S.slice(0, 30)),
                        (this.activityInfo = u[0]),
                        (this.commentId =
                          null == (r = this.activityInfo)
                            ? void 0
                            : r.comment_id),
                        (this.noticeInfo = h),
                        (this.commentAgreement = m),
                        (this.inviteCode =
                          (null == k ? void 0 : k.invite_code) || ""),
                        (this.experienceAi =
                          "1" === (null == k ? void 0 : k.wenai_taskdone)),
                        (this.inviteInfo = v),
                        (this.hasDoubleCoupon = 1 == +this.vip_info.status),
                        (this.newUserFlag = 1 == +x),
                        (null == (o = this.TpInfo) ? void 0 : o.user_answer) &&
                          (null == (s = this.TInfo) ? void 0 : s.user_answer) &&
                          (this.STInfo = this.TInfo),
                        (t.prev = 2),
                        (t.t0 = n),
                        t.t0)
                      ) {
                        t.next = 7;
                        break;
                      }
                      return (t.next = 7), this.checkModal();
                    case 7:
                      if (
                        ((this.showKline = !0),
                        (this.loaded = !0),
                        (t.t1 = n),
                        t.t1)
                      ) {
                        t.next = 19;
                        break;
                      }
                      if (((t.t2 = b), !t.t2)) {
                        t.next = 15;
                        break;
                      }
                      return (t.next = 15), this.checkNewUserModal(b);
                    case 15:
                      if (((t.t3 = y), !t.t3)) {
                        t.next = 19;
                        break;
                      }
                      return (t.next = 19), this.checkIsLottieModal(y, e);
                    case 19:
                      t.next = 24;
                      break;
                    case 21:
                      (t.prev = 21),
                        (t.t4 = t.catch(2)),
                        f.StockBridge.aegisReportEvent("GET-HOME-DATA-ERROR", {
                          ext3: JSON.stringify(
                            (null == t.t4 ? void 0 : t.t4.message) ||
                              "首页数据加载失败"
                          ),
                        });
                    case 24:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this,
              [[2, 21]]
            );
          })
        );
      },
      checkNewUserModal: function (e) {
        return h(
          this,
          null,
          t().mark(function n() {
            var i,
              r,
              o,
              s,
              a,
              c,
              u = this;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (0 !== e.length) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    if (
                      ((a = function (e, t, n) {
                        return new Promise(function (i) {
                          setTimeout(function () {
                            n && f.StockBridge.report(n),
                              u.$refs.rewardModal.open(),
                              (u.guessErrorRewardModalData.rewardDesc =
                                e.reward_desc),
                              (u.guessErrorRewardModalData.rewardMemo =
                                e.reward_memo),
                              (u.guessErrorRewardModalData.type = t),
                              i();
                          }, 100);
                        });
                      }),
                      (c = 0),
                      (t.t0 =
                        -1 !==
                        (null ==
                        (r = null == (i = e[0]) ? void 0 : i.reward_desc)
                          ? void 0
                          : r.indexOf("元"))),
                      !t.t0)
                    ) {
                      t.next = 10;
                      break;
                    }
                    return (
                      (t.next = 8),
                      a(
                        e[0],
                        "newUser",
                        "yy.czdlanew.index.newuser.reward.baoguang"
                      )
                    );
                  case 8:
                    (c += 1), (t.t0 = 1 === e.length);
                  case 10:
                    if (((t.t1 = t.t0), t.t1)) {
                      t.next = 22;
                      break;
                    }
                    if (
                      ((t.t2 =
                        -1 ===
                        (null ==
                        (s = null == (o = e[c]) ? void 0 : o.reward_desc)
                          ? void 0
                          : s.indexOf("元"))),
                      !t.t2)
                    ) {
                      t.next = 22;
                      break;
                    }
                    return (
                      f.StockBridge.report(
                        "yy.czdlanew.index.guessfail.reward.baoguang"
                      ),
                      (t.next = 17),
                      a(e[c], "guessError")
                    );
                  case 17:
                    if (((c += 1), (t.t3 = e.length > c), !t.t3)) {
                      t.next = 22;
                      break;
                    }
                    return (t.next = 22), a(e[c], "guessError");
                  case 22:
                  case "end":
                    return t.stop();
                }
            }, n);
          })
        );
      },
      checkIsLottieModal: function (i, r) {
        return h(
          this,
          null,
          t().mark(function o() {
            var s,
              a,
              c,
              u,
              l,
              p,
              h,
              m = this;
            return t().wrap(
              function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      if (0 !== i.length) {
                        o.next = 2;
                        break;
                      }
                      return o.abrupt("return");
                    case 2:
                      if (
                        !i.some(function (e) {
                          return "" !== e.reward_desc;
                        })
                      ) {
                        o.next = 8;
                        break;
                      }
                      (this.rewardList = i.map(function (e, t) {
                        return d({ id: t }, e);
                      })),
                        0 !==
                          (s = this.rewardList.filter(function (e) {
                            return "3" === e.type;
                          })).length &&
                          (this.helpList = s.map(function (e) {
                            var t = r["reward_detail_".concat(e.date)];
                            return (
                              (m.isHelp = t || []),
                              { id: e.id, list: t ? n(t) : [] }
                            );
                          })),
                        this.rewardList && (this.lottieShow = !0),
                        (o.next = 18);
                      break;
                    case 8:
                      (a = i.map(function (e) {
                        return {
                          id: m.getTextId(e.msg),
                          msg: e.msg,
                          type: e.type,
                        };
                      })),
                        (c = {}),
                        a.forEach(function (e) {
                          void 0 === c["textId_".concat(e.id)] &&
                            (c["textId_".concat(e.id)] = e.msg);
                        }),
                        (u = Object.keys(c).map(function (e) {
                          return { msg: c[e] };
                        })),
                        (l = ["猜对", "猜错", "未实名", "实名冲突"]),
                        (p = t().mark(function n(i) {
                          var r, o;
                          return t().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (r = m.getTextId(u[i].msg)),
                                    (o = r ? r - 1 : -1),
                                    (t.next = 3),
                                    new Promise(function (t) {
                                      setTimeout(function () {
                                        if (m.isPageDestroyed) t();
                                        else {
                                          var n = l[o] || "未知";
                                          f.StockBridge.report(
                                            "yy.czdupgrade.un_lottie_modal.baoguang",
                                            {
                                              yy_public_str1: ""
                                                .concat(n, "_")
                                                .concat(i + 1),
                                            }
                                          ),
                                            m.$refs.simpleModal &&
                                              "function" ==
                                                typeof m.$refs.simpleModal
                                                  .open &&
                                              m.$refs.simpleModal.open(),
                                            (m.closeBuriedPoint = ""
                                              .concat(n, "_")
                                              .concat(i + 1)),
                                            (m.iKnowBuriedPoint = "".concat(n));
                                          var r = (u[i].msg || "").split(";"),
                                            s = e(r, 2),
                                            a = s[0],
                                            c = s[1];
                                          (m.title = a), (m.tipText = c), t();
                                        }
                                      }, 100);
                                    })
                                  );
                                case 3:
                                case "end":
                                  return t.stop();
                              }
                          }, n);
                        })),
                        (h = 0);
                    case 13:
                      if (!(h < u.length)) {
                        o.next = 18;
                        break;
                      }
                      return o.delegateYield(p(h), "t0", 15);
                    case 15:
                      h++, (o.next = 13);
                      break;
                    case 18:
                    case "end":
                      return o.stop();
                  }
              },
              o,
              this
            );
          })
        );
      },
      isGuess: function (e) {
        return !e || 0 == +e.user_answer || !!this.isFollow;
      },
      inviteBtn: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var n = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = this.inviteCode), e.t0)) {
                        e.next = 4;
                        break;
                      }
                      return (e.next = 4), this.updateInviteCode();
                    case 4:
                      +this.userAllInfo.subscribe ||
                        this.activityProgressStatus ||
                        f.wx$1.requestSubscribeMessage({
                          tmplIds: [m.MSG_SUBSCRIBE_TMPL_ID],
                          success: function (e) {
                            return h(
                              n,
                              null,
                              t().mark(function n() {
                                var i, r, o;
                                return t().wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          (i = 0), (r = Object.keys(e));
                                        case 1:
                                          if (!(i < r.length)) {
                                            t.next = 15;
                                            break;
                                          }
                                          if (((o = r[i]), "accept" !== e[o])) {
                                            t.next = 12;
                                            break;
                                          }
                                          return (
                                            (t.prev = 4),
                                            (t.next = 7),
                                            m.handleMessageSubscription({
                                              oper: 3,
                                              tmpl_id: m.MSG_SUBSCRIBE_TMPL_ID,
                                              bid: "100043",
                                            })
                                          );
                                        case 7:
                                          (this.activityProgressStatus = !0),
                                            (t.next = 12);
                                          break;
                                        case 10:
                                          (t.prev = 10), (t.t0 = t.catch(4));
                                        case 12:
                                          i++, (t.next = 1);
                                          break;
                                        case 15:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  n,
                                  this,
                                  [[4, 10]]
                                );
                              })
                            );
                          },
                          fail: function (e) {
                            return h(
                              n,
                              null,
                              t().mark(function e() {
                                return t().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                          },
                        });
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
      activityProgress: function (e) {
        this.activityProgressStatus = !!+e.status;
      },
      getStockInfo: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var n;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), m.fetchStockInfo();
                    case 3:
                      return (
                        (n = e.sent),
                        e.abrupt(
                          "return",
                          (f.StockBridge.setStorage("guess_stock_cache", n),
                          this.applyStockInfo(n),
                          n)
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
        this.applyStockInfoCommon(e),
          (null == e ? void 0 : e.secu_quote) &&
            (this.tradeDateString = f
              .dayjs(1e3 * e.secu_quote.utime)
              .format("MM月DD日"));
      },
      checkModal: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var n,
              r,
              o,
              s,
              a = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(null == (n = this.noticeInfo) ? void 0 : n.length)
                      ) {
                        e.next = 23;
                        break;
                      }
                      (e.prev = 1),
                        (r = i(this.noticeInfo)),
                        (e.prev = 3),
                        (s = t().mark(function e() {
                          var n, i;
                          return t().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((n = o.value),
                                    (i =
                                      "6" != n.notice_type &&
                                      "4" != n.notice_type
                                        ? 100
                                        : 300),
                                    (e.t0 = "4" != n.notice_type),
                                    !e.t0)
                                  ) {
                                    e.next = 6;
                                    break;
                                  }
                                  return (
                                    (e.next = 6),
                                    new Promise(function (e) {
                                      setTimeout(function () {
                                        (a.guessInfo = n), e();
                                      }, i);
                                    })
                                  );
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })),
                        r.s();
                    case 6:
                      if ((o = r.n()).done) {
                        e.next = 10;
                        break;
                      }
                      return e.delegateYield(s(), "t0", 8);
                    case 8:
                      e.next = 6;
                      break;
                    case 10:
                      e.next = 15;
                      break;
                    case 12:
                      (e.prev = 12), (e.t1 = e.catch(3)), r.e(e.t1);
                    case 15:
                      return (e.prev = 15), r.f(), e.finish(15);
                    case 18:
                      e.next = 23;
                      break;
                    case 20:
                      (e.prev = 20),
                        (e.t2 = e.catch(1)),
                        f.StockBridge.aegisReportEvent("CHECK-MODAL-ERROR", {
                          ext3: JSON.stringify(
                            (null == e.t2 ? void 0 : e.t2.message) ||
                              "弹窗检查失败"
                          ),
                        });
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [
                [1, 20],
                [3, 12, 15, 18],
              ]
            );
          })
        );
      },
      getRankData: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var n, i, r, o, s, a;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        m.fetchRankList({ actid: this.activityInfo.act_id })
                      );
                    case 3:
                      (n = e.sent),
                        (i = n.GuessMonth),
                        (r = n.GuessMonthUserContinCorrect),
                        (o = n.GuessMonthUserCorrect),
                        (s = n.GuessMonthUserPerform),
                        (a = n.GuessMonthUserRank),
                        i && (this.allPerformance = i.slice(0, 4) || []),
                        (this.myPerformance = d({}, this.userAllInfo)),
                        (this.myPerformance = p(d({}, this.myPerformance), {
                          continCorrect: r,
                          correct: o,
                          perform: s,
                          rank: a,
                        })),
                        (this.rankLoad = !0),
                        (e.next = 15);
                      break;
                    case 12:
                      (e.prev = 12), (e.t0 = e.catch(0)), (this.rankLoad = !0);
                    case 15:
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
      guessOpResult: function (e) {
        return h(
          this,
          null,
          t().mark(function n() {
            var i;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        m.submitGuessAnswer({
                          action: 2,
                          act_id: this.activityInfo.act_id || "3",
                          user_answer: e,
                          date: this.TDate,
                          outer_src: this.outerSrc,
                        })
                      );
                    case 3:
                      (i = t.sent) && 0 == +i.retcode
                        ? (this.swiperData(!0, !1),
                          (this.hasAccount = f.sdkBridge.isBind()),
                          this.showAfterGuessModal())
                        : f.StockBridge.modal({
                            title: "温馨提示",
                            confirmText: "知道了",
                            content: i && i.retmsg,
                            showCancel: !1,
                          }),
                        this.stockBridge.busEmit("growth-user.behavior.union", {
                          type: "click",
                          event: "guess_change",
                        }),
                        (t.next = 9);
                      break;
                    case 7:
                      (t.prev = 7), (t.t0 = t.catch(0));
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[0, 7]]
            );
          })
        );
      },
      showAfterGuessModal: function () {
        return h(
          this,
          null,
          t().mark(function n() {
            var i, r, o, s, a, c, u, l, h, g, v, w, x;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), m.fetchAdConfig();
                    case 3:
                      if (
                        ((i = t.sent),
                        (r = i.retcode),
                        (o = i.data),
                        (s = (null == o ? void 0 : o[0]) || {}),
                        (a = s.guess_tips),
                        (u = (c = void 0 === a ? {} : a).show_bubble),
                        (l = c.plan_id),
                        (h = c.text),
                        0 == +r && u && l)
                      ) {
                        t.next = 14;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void this.showDefaultAfterGuessModal()
                      );
                    case 14:
                      (t.t0 = l),
                        (t.next =
                          t.t0 === m.MODAL_TYPE.SENTIMENT
                            ? 17
                            : t.t0 === m.MODAL_TYPE.INVEST
                            ? 20
                            : 22);
                      break;
                    case 17:
                      return (
                        (g = (null == h ? void 0 : h.split("-")) || []),
                        (v = e(g, 2)),
                        (w = v[0]),
                        (x = v[1]),
                        (this.czdModalInfo = { winPercent: w, stockName: x }),
                        (this.showGuideModal = !0),
                        t.abrupt("break", 23)
                      );
                    case 20:
                      return (
                        this.akeyToFollowData.profit_rate &&
                          this.akeyToFollowData.win_percent &&
                          this.akeyToFollowData.pr_type &&
                          ((this.czdModalFollow = p(
                            d({}, this.akeyToFollowData),
                            {
                              hasAccount: this.hasAccount,
                              ETFIDS: { wzq: m.GUESS_ETF_RECOMMEND_URL },
                            }
                          )),
                          (this.showFollowModal = !0)),
                        t.abrupt("break", 23)
                      );
                    case 22:
                      this.showDefaultAfterGuessModal();
                    case 23:
                      t.next = 28;
                      break;
                    case 25:
                      (t.prev = 25),
                        (t.t1 = t.catch(0)),
                        f.StockBridge.aegisReportEvent(
                          "SHOW-AFTER-GUESS-MODAL-ERROR",
                          {
                            ext3: JSON.stringify(
                              (null == t.t1 ? void 0 : t.t1.message) ||
                                "竞猜后弹窗显示失败"
                            ),
                          }
                        ),
                        this.showDefaultAfterGuessModal();
                    case 28:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[0, 25]]
            );
          })
        );
      },
      showDefaultAfterGuessModal: function () {
        var e = this;
        this.$nextTick(function () {
          var t;
          null == (t = e.$refs.MarketAnalysis) || t.openGuessSuccessPopup();
        });
      },
      bulletAnchorPoint: function (e) {
        var t = e.content.newsId;
        t
          ? (f.StockBridge.report("yy.czdupdate_bullet_click", {
              yy_public_str1: "重磅新闻",
            }),
            f.wx$1.navigateTo({
              url: "/pages/newsCon/newsDetail/main?id=".concat(t),
            }))
          : (f.StockBridge.report("yy.czdupdate_bullet_click", {
              yy_public_str1: "社区",
            }),
            this.bulletAnchorPointFz("guess-home__viewpoint--anchor"));
      },
      bulletAnchorPointFz: function (e) {
        var t = this,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        f.index
          .createSelectorQuery()
          .in(this)
          .select(".".concat(e))
          .boundingClientRect(function (e) {
            e &&
              void 0 !== e.top &&
              f.index
                .createSelectorQuery()
                .in(t)
                .select(".guess-home--mp")
                .boundingClientRect(function (t) {
                  t &&
                    void 0 !== t.top &&
                    f.index.pageScrollTo({
                      duration: 600,
                      scrollTop: e.top - t.top - n,
                    });
                })
                .exec();
          })
          .exec();
      },
      userSetting: function (e, n) {
        return h(
          this,
          null,
          t().mark(function i() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        m.saveUserProfile({ nickname: e, headimgurl: n })
                      );
                    case 3:
                      return (t.next = 5), this.getHomeData();
                    case 5:
                      return (t.next = 7), this.getRankData();
                    case 7:
                      t.next = 12;
                      break;
                    case 9:
                      (t.prev = 9),
                        (t.t0 = t.catch(0)),
                        f.StockBridge.aegisReportEvent(
                          "USER-SETTING-SAVE-ERROR",
                          {
                            ext3: JSON.stringify(
                              (null == t.t0 ? void 0 : t.t0.message) ||
                                "保存用户信息失败"
                            ),
                          }
                        );
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this,
              [[0, 9]]
            );
          })
        );
      },
    }),
  };
Array ||
  (
    f.resolveComponent("task") +
    f.resolveComponent("marketGuessing") +
    f.resolveComponent("MarketAnalysis") +
    f.resolveComponent("individualGuess") +
    f.resolveComponent("viewpoint") +
    f.resolveComponent("rank") +
    f.resolveComponent("goldEntry") +
    f.resolveComponent("EvaluatePopup") +
    f.resolveComponent("GuideModal") +
    f.resolveComponent("SimpleModal") +
    f.resolveComponent("RewardModal") +
    f.resolveComponent("lottieModal") +
    f.resolveComponent("half-screen-ai-entry")
  )();
var w = f._export_sfc(v, [
  [
    "render",
    function (e, t, n, i, r, o) {
      return f.e(
        {
          a: f.o(function () {
            return o.jumpRules && o.jumpRules.apply(o, arguments);
          }, 1119),
          b: r.showKline,
        },
        r.showKline
          ? {
              c: f.o(o.guessOpResult, 1120),
              d: f.o(o.bulletAnchorPoint, 1121),
              e: f.o(o.activityProgress, 1122),
              f: f.o(o.onMarketGuessingShellReady, 1123),
              g: f.o(o.onKlineReady, 1124),
              h: f.p({
                "rise-results": r.riseResults,
                "fall-results": r.fallResults,
                FTInfo: r.FTInfo,
                "guess-local-data": r.guessLocalData,
                "stock-info": r.stockInfo,
                "clock-list": r.dateList,
                "trade-date-string": r.tradeDateString,
              }),
            }
          : {},
        { i: r.showAnalysis },
        r.showAnalysis
          ? {
              j: f.sr("MarketAnalysis", "7b8bdff3-2"),
              k: f.o(o.getHomeData, 1125),
              l: f.o(o.inviteBtn, 1126),
              m: f.o(o.onshowAidialog, 1127),
              n: f.p({
                "is-guess": r.FTInfo && "0" !== r.FTInfo.user_answer,
                "experience-ai": r.experienceAi,
                "cash-point-info": r.cashPointInfo,
                "need-request": !1,
                "customize-ai-config": { title: r.aiDialogQuestion },
              }),
            }
          : {},
        { o: r.etfLoaded },
        r.etfLoaded
          ? { p: f.p({ "stock-pool": r.stockPool, "etf-list": r.etfList }) }
          : {},
        { q: r.pointLoad },
        r.pointLoad
          ? {
              r: f.p({
                "rise-results": r.riseResults,
                "fall-results": r.fallResults,
                "rise-topic": r.riseTopic,
                "fall-topic": r.fallTopic,
                TDate: r.TDate,
                "stock-info": r.stockInfo,
                "comment-id": r.commentId,
                "check-result": r.checkResult,
                "comment-agreement": r.commentAgreement,
                "act-id": o.actId,
              }),
            }
          : {},
        { s: r.rankLoad },
        r.rankLoad
          ? {
              t: f.o(o.userSetting, 1128),
              v: f.p({
                "my-performance": r.myPerformance,
                "all-performance": r.allPerformance,
                "act-id": o.actId,
              }),
            }
          : {},
        { w: r.loaded },
        r.loaded ? { x: f.p({ shop_asset: r.shop_asset }) } : {},
        { y: o.isShowEvaluateModule },
        o.isShowEvaluateModule
          ? {
              z: f.o(o.showRightEvaluateGuide, 1129),
              A: f.p({
                pageid: "guessrisefall",
                "mp-evaluate-type": "bottomsuction",
                "bottom-suction-img": r.mpEvaluateConf.bottomsuction_img,
              }),
            }
          : {},
        {
          B: r.canvasWidth + "px",
          C: r.canvasHeight + "px",
          D: r.showGuideModal,
        },
        r.showGuideModal
          ? {
              E: f.o(function (e) {
                return (r.showGuideModal = e);
              }, 1130),
              F: f.o(function (e) {
                return (r.showGuideModal = !1);
              }, 1131),
              G: f.p({
                type: "account",
                visible: r.showGuideModal,
                "modal-info": r.czdModalInfo,
              }),
            }
          : {},
        { H: r.successModalShow },
        r.successModalShow
          ? {
              I: f.o(function (e) {
                return (r.successModalShow = e);
              }, 1132),
              J: f.o(function (e) {
                return (r.successModalShow = !1);
              }, 1133),
              K: f.p({ visible: r.successModalShow, type: "success" }),
            }
          : {},
        { L: r.showFollowModal },
        r.showFollowModal
          ? {
              M: f.o(function (e) {
                return (r.showFollowModal = e);
              }, 1134),
              N: f.o(function (e) {
                return (r.showFollowModal = !1);
              }, 1135),
              O: f.p({
                type: "follow",
                visible: r.showFollowModal,
                "follow-info": r.czdModalFollow,
              }),
            }
          : {},
        {
          P: f.sr("simpleModal", "7b8bdff3-11"),
          Q: f.p({
            type: "info",
            title: r.title,
            content: r.tipText,
            "close-buried-point": r.closeBuriedPoint,
            "confirm-buried-point": r.iKnowBuriedPoint,
          }),
          R: f.sr("rewardModal", "7b8bdff3-12"),
          S: f.p({
            "reward-desc": r.guessErrorRewardModalData.rewardDesc,
            "reward-memo": r.guessErrorRewardModalData.rewardMemo,
            type: r.guessErrorRewardModalData.type,
          }),
          T: r.lottieShow,
        },
        r.lottieShow
          ? {
              U: f.o(e.closeLottieModal, 1136),
              V: f.p({
                "reward-list": r.rewardList,
                "help-list": r.helpList,
                "is-help": r.isHelp,
              }),
            }
          : {},
        {
          W: f.o(function (e) {
            return (r.isEvaluateGuideVisible = e);
          }, 1137),
          X: f.p({
            pageid: "guessrisefall",
            "mp-evaluate-type": r.mpEvaluateType,
            "right-guide-img": r.mpEvaluateConf.right_guide_img,
            "is-evaluate-guide-visible": r.isEvaluateGuideVisible,
          }),
          Y: r.showAiDialog,
        },
        r.showAiDialog
          ? {
              Z: f.o(function (e) {
                return (r.showAiDialog = !1);
              }, 1138),
              aa: f.p({
                "show-ai-dialog": r.showAiDialog,
                "need-preset-question": !0,
                "ai-dialog-question": r.aiDialogQuestion,
                "ai-question-query": r.aiDialogQuery,
                "source-from": r.aiChannel,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-7b8bdff3"],
]);
wx.createComponent(w);
