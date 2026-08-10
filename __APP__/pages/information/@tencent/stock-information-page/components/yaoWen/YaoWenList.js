var e,
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/typeof"),
  i = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  o = require("../../../../../../@babel/runtime/helpers/createClass"),
  s = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  a = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  l = Object.getOwnPropertySymbols,
  d = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  f = function (e, t) {
    for (var n in t || (t = {})) d.call(t, n) && u(e, n, t[n]);
    if (l) {
      var i,
        o = s(l(t));
      try {
        for (o.s(); !(i = o.n()).done; ) {
          n = i.value;
          p.call(t, n) && u(e, n, t[n]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  h = function (e, t) {
    return a(e, c(t));
  },
  m = function (e, t, n) {
    return new Promise(function (i, o) {
      var s = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        r = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(s, r);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  g = require("../../../../../../common/vendor.js"),
  w = require("../../pages/information/mp.js"),
  v = require("../../../stock-news-base/service/market/RelatedStockUtils.js"),
  y = require("../../hooks/useYaowenFeedback.js"),
  x = require("../../../../js-cookie/src/js.cookie.js"),
  _ = require("../../../stock-community-base/utils/privacyCheck.js"),
  b = (
    (g.wx$1.getWindowInfo && g.wx$1.getWindowInfo()) ||
    g.wx$1.getSystemInfoSync()
  ).windowHeight;
e = b;
var k,
  I = Date.now(),
  T = (function () {
    function e(t) {
      var o;
      i(this, e),
        u(
          this,
          "symbol" != n((o = "baseURL")) ? o + "" : o,
          "https://wzq.gtimg.com/resources/vtools/"
        ),
        (this.stockBridge = t);
    }
    return (
      o(e, [
        {
          key: "getCfg",
          value: function (e, t) {
            return this.stockBridge.request(this.baseURL + e, "get", t);
          },
        },
      ]),
      e
    );
  })();
function S(e, t, n) {
  var i,
    o = {},
    s = o.noTrailing,
    r = void 0 !== s && s,
    a = o.noLeading,
    c = void 0 !== a && a,
    l = o.debounceMode,
    d = void 0 === l ? void 0 : l,
    p = !1,
    u = 0;
  function f() {
    i && clearTimeout(i);
  }
  function h() {
    for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
      o[s] = arguments[s];
    var a = this,
      l = Date.now() - u;
    function h() {
      (u = Date.now()), t.apply(a, o);
    }
    function m() {
      i = void 0;
    }
    p ||
      (c || !d || i || h(),
      f(),
      void 0 === d && l > e
        ? c
          ? ((u = Date.now()), r || (i = setTimeout(d ? m : h, e)))
          : h()
        : !0 !== r && (i = setTimeout(d ? m : h, void 0 === d ? e - l : e)));
  }
  return (
    (h.cancel = function (e) {
      var t = (e || {}).upcomingOnly,
        n = void 0 !== t && t;
      f(), (p = !n);
    }),
    h
  );
}
var E = function () {
    var e =
      x.js_cookieExports.get("wzq_wxuin") || x.js_cookieExports.get("qluin");
    return e && -1 !== e.indexOf("@wx.tenpay.com") ? e : "";
  },
  R = function () {
    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
      n[i] = arguments[i];
    return m(exports, [].concat(n), function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return t().mark(function i() {
        var o,
          s,
          r,
          a,
          c,
          l,
          d,
          p,
          u,
          h,
          w,
          v,
          y,
          _,
          b,
          I,
          T,
          S,
          R,
          D,
          C,
          M,
          B,
          P,
          j,
          N;
        return t().wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                if (
                  ((o = parseInt(new Date().getTime() / 1e3, 10).toString()),
                  (s = e.fitemId),
                  (r = e.flowId),
                  (a = e.recallType),
                  (c = e.factionTime),
                  (l = e.fsessionId),
                  (d = e.fpositionId),
                  (p = e.factionType),
                  (u = e.fstayTime),
                  (h = e.fsceneType),
                  (w = e.fromPage),
                  (v = e.currentPage),
                  (y = e.type),
                  (_ = e.playPercent),
                  (b = void 0 === _ ? 0 : _),
                  (I = e.playTime),
                  (T = void 0 === I ? 0 : I),
                  (S = e.watchTime),
                  (R = void 0 === S ? 0 : S),
                  (D = e.platform),
                  (C = e.platformVersion),
                  (i.t0 = k),
                  i.t0)
                ) {
                  i.next = 6;
                  break;
                }
                return (
                  (i.next = 5),
                  m(
                    exports,
                    null,
                    t().mark(function e() {
                      return t().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new Promise(function (e) {
                                  g.wx$1.getNetworkType({
                                    success: function (t) {
                                      "getNetworkType:ok" === t.errMsg
                                        ? e(
                                            (
                                              t.networkType || t.subtype
                                            ).toUpperCase()
                                          )
                                        : e(!1);
                                    },
                                  });
                                })
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 5:
                k = i.sent;
              case 6:
                return (
                  (M = {
                    fuid: "",
                    fuin: E(),
                    fopenid_zxg: x.js_cookieExports.get("zxg_openid"),
                    fdevid: "",
                    fuid_type: "wx",
                  }),
                  (B = {
                    fdevice: "",
                    fnetwork_type: k,
                    fplatform: D,
                    fapp_version: C,
                    freport_version: "1.0.0",
                  }),
                  (P = {
                    fapp_id: "wzq",
                    fscene_type: h || "yaowen",
                    faction_time: c || o,
                    freport_time: o,
                    faction_type: p || "",
                    fstay_time: u || 0,
                    ffrom_page: w || "",
                    fcurrent_page: v || "",
                    play_percentge: b,
                    fplay_time: T,
                    time: R,
                  }),
                  (j = {
                    fitem_id: s || "",
                    fitem_extend_id: "",
                    fitem_type: "0",
                    fpos_id: "",
                    fposition_id: d,
                  }),
                  (N = {
                    type: y,
                    fflow_id: r || "",
                    frecall_type: a || "",
                    fsession_id:
                      l ||
                      ""
                        .concat(new Date().getTime(), "_")
                        .concat(
                          (0, 9999, parseInt(1e4 * Math.random() + 0, 10) || 0)
                        ),
                  }),
                  i.abrupt(
                    "return",
                    f(f(f(f(f(f({}, M), B), P), j), N), {
                      extend: JSON.stringify(n),
                    })
                  )
                );
              case 8:
              case "end":
                return i.stop();
            }
        }, i);
      })();
    });
  },
  D = {
    components: {
      yaoWenListContent: function () {
        return "./yaoWenListContent.js";
      },
    },
    inject: {
      stockBridge: { default: {} },
      platform: { default: "weixin" },
      platformVersion: { default: "1.0.0" },
    },
    props: [
      "list",
      "importantBanners",
      "isCurrSlide",
      "dataReady",
      "showHeadline",
      "activeIndex",
      "refreshYaowenList",
      "mpScrollHeight",
      "isMpPageShow",
    ],
    setup: function () {
      return f({}, y.useYaowenFeedback());
    },
    data: function () {
      return {
        currentBanner: 0,
        loadAll: !1,
        pullupText: "",
        enterTime: 0,
        showErr: !0,
        collectReportedMap: [],
        fitemIds: [],
        factionTimes: [],
        fflowIds: [],
        recallTypes: [],
        newsTypes: [],
        reportInfo: [],
        fpositionIds: [],
        fsessionIds: [],
        flashIndex: -1,
        eventIndex: -1,
        videoCssError: !1,
        isCeiling: !1,
        wntjTab: {},
        scrollTop: 0,
        loadingText: "",
        textList: [
          "下滑看看，更多内容为你推荐",
          "右滑有视频栏目，可边看边听",
          "利好利空早报，可微信订阅提醒",
          "常常资讯评论，与股友交流见识",
          "欢迎分享资讯，和好友一起投资",
          "资讯语音播报，解放双眼一键收听",
          "每晚睡前，“夜读”栏目陪伴你",
          "每日盘前，“开盘速递”准时恭候",
          "每日午间，“一文看市”总览市场",
          "“利好利空晚报”，晚间消息一文知",
          "“A股周报”，每周大事汇总给你",
          "股市震荡期，用理性战胜恐惧",
          "在别人贪婪时要保持警惕",
          "股市有风险，投资需谨慎",
        ],
        feedbackDialogNewsItem: "",
        playerMute: !0,
        mpRefreshTriggered: !1,
        mpPullDisabled: !1,
        isFirstLoad: !0,
      };
    },
    computed: {
      disableReachBtm: function () {
        return !this.isCurrSlide || !this.dataReady;
      },
      isMP: function () {
        return "mp" === this.stockBridge.ENV;
      },
      skin: function () {
        return (
          (this.isMP &&
            g.wx$1.getStorageSync &&
            g.wx$1.getStorageSync("user/skin")) ||
          "white"
        );
      },
      mpVersion: function () {
        return this.isMP ? g.wx$1.getSystemInfoSync().version : "1.0.0";
      },
      isFeedRecom: function () {
        var e;
        return (
          (null == (e = this.stockBridge.getStorage(w.FEED_RECOM_SETTING_VAL))
            ? void 0
            : e.indexOf("confirm")) > -1
        );
      },
    },
    watch: {
      list: function (e) {
        for (var t = 0; t < e.length; t++)
          11 === e[t].articletype && (this.eventIndex = t),
            20 === e[t].type && (this.flashIndex = t);
        this.getPosiInfo();
      },
      activeIndex: function (e) {
        1 === e && this.getPosiInfo();
      },
      isMpPageShow: function (e) {
        1 === this.activeIndex &&
          (e
            ? (this.updateVoiceControlSetting(),
              this.requestStockIsInPortfolio())
            : this.sendAndReset());
      },
    },
    mounted: function () {
      return m(
        this,
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
    created: function () {},
    beforeDestroy: function () {},
    activated: function () {
      this.updateVoiceControlSetting(), this.requestStockIsInPortfolio();
    },
    deactivated: function () {
      this.sendAndReset();
    },
    methods: {
      onActivated: function () {
        this.updateVoiceControlSetting(), this.requestStockIsInPortfolio();
      },
      onMpScroll: function (e) {
        this.$emit("onMpScroll", e),
          (this.scrollTop = e.detail.scrollTop),
          this.judgeCeiling(),
          this.mpScrollEventHandle();
      },
      mpScrollEventHandle: S(300, function () {
        this.reportScrollDistance(),
          this.sendExposure(),
          this.sendHorizontalExposure();
      }),
      getStockCodeList: function () {
        for (
          var e, t, n, i, o, s = [], r = 0;
          r < (null == (e = this.list) ? void 0 : e.length);
          r++
        ) {
          var a =
            null == (n = null == (t = this.list[r]) ? void 0 : t.extra_info)
              ? void 0
              : n.stock_code;
          a && s.push(a);
        }
        if (this.tzbd && this.tzbd.length > 0) {
          var c =
            null == (o = null == (i = this.tzbd[0]) ? void 0 : i.extra_info)
              ? void 0
              : o.stock_code;
          c && s.push(c);
        }
        return s;
      },
      requestStockIsInPortfolio: function () {
        v.RelatedStockUtils.getInstance().requestStockIsInPortfolio(
          this.getStockCodeList()
        );
      },
      isNeedToShowInVideoCard: function (e, t) {
        return (
          1 !== e.isFeedback &&
          (7 === e.type || 8 === e.type || (21 === e.type && t >= 7))
        );
      },
      getVtoolsData: function () {
        return m(
          this,
          null,
          t().mark(function e() {
            var n, i, o;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = new T(this.stockBridge)),
                        (e.next = 3),
                        n.getCfg(w.FRESH_TEXT_CONFIG)
                      );
                    case 3:
                      (i = e.sent) &&
                        i.list_text_config_wzq &&
                        i.list_text_config_wzq[0] &&
                        i.list_text_config_wzq[0].textList &&
                        (o = i.list_text_config_wzq[0].textList || "") &&
                        (this.textList = o.split("\n"));
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
      getLoadingText: function () {
        return "";
      },
      handleVideoPlayerCssError: function (e) {
        e &&
          e.target &&
          e.target.href &&
          /txp_mobile.css+.*(_t3=)/.test(e.target.href) &&
          ((this.videoCssError = !0),
          window.Raven &&
            window.Raven.captureMessage("腾讯视频播放器 css 加载失败"));
      },
      randomNum: function (e, t) {
        return parseInt(Math.random() * (t - e + 1) + e, 10) || 0;
      },
      reportScrollDistance: function () {
        this.recommentExposured ||
          (Math.abs(this.scrollTop) >= 425 &&
            !this.goodbadnewsExposured &&
            (this.stockBridge.report("news.index.scroll_to_goodbadnews"),
            (this.goodbadnewsExposured = !0)),
          Math.abs(this.scrollTop) >= 1350 &&
            !this.recommentExposured &&
            (this.stockBridge.report("news.index.scroll_to_recommend"),
            (this.recommentExposured = !0)));
      },
      handleTouchmove: function () {
        this.reportScrollDistance(),
          this.sendExposure(),
          this.sendHorizontalExposure(),
          this.checkVideoPlay();
      },
      checkVideoPlay: function () {},
      sendAndReset: function () {
        return m(
          this,
          null,
          t().mark(function e() {
            var n, i, o;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.fitemIds.length) {
                        e.next = 10;
                        break;
                      }
                      if (!((n = this.fitemIds.join(",")).length <= 0)) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      return (
                        (i = {
                          fitemId: n,
                          flowId: this.fflowIds.join(","),
                          type: this.newsTypes.join(","),
                          recallType: this.recallTypes.join(","),
                          factionTime: this.factionTimes.join(","),
                          fsessionId: this.fsessionIds.join(","),
                          fpositionId: this.fpositionIds.join(","),
                          factionType: 1,
                          report_info: this.reportInfo.join(","),
                          platform: this.platform,
                          platformVersion: this.isMP
                            ? this.mpVersion
                            : this.platformVersion,
                        }),
                        this.resetCollectData(),
                        (e.next = 8),
                        R(i)
                      );
                    case 8:
                      (o = e.sent),
                        this.stockBridge.report(
                          "information.item_exposure",
                          h(f({}, o), { newslist: n })
                        );
                    case 10:
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
      resetCollectData: function () {
        (this.fitemIds = []),
          (this.fflowIds = []),
          (this.recallTypes = []),
          (this.fpositionIds = []),
          (this.factionTimes = []),
          (this.fsessionIds = []),
          (this.newsTypes = []),
          (this.reportInfo = []);
      },
      sendHorizontalExposure: function () {
        var e = this;
        this.showHeadline &&
          (this.importantBanners || []).forEach(function (t, n) {
            var i = t.id,
              o = t.flow_id,
              s = t.recall_type,
              r = t.type,
              a = (t.extra_info && t.extra_info.ab_test_report_info) || "";
            Array.isArray(e.collectReportedMap) &&
              -1 === e.collectReportedMap.indexOf(i) &&
              e.handleSendData(i, o, s, n, r, 6, a);
          });
      },
      sendExposure: function (e) {
        if (e) {
          var t = (this.tzbd && this.tzbd[0]) || {},
            n = t.id,
            i = t.flow_id,
            o = t.recall_type,
            s = t.type;
          Array.isArray(this.collectReportedMap) &&
            -1 === this.collectReportedMap.indexOf(n) &&
            i &&
            this.handleSendData(n, i, o, 0, s);
        }
      },
      handleSendReportData: function (e) {
        return m(
          this,
          null,
          t().mark(function n() {
            var i, o, s, r, a, c;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (i = e.id),
                        (o = e.flow),
                        (s = e.recall),
                        (r = e.index),
                        (a = e.type),
                        (c = e.limit),
                        Array.isArray(this.collectReportedMap) &&
                          -1 === this.collectReportedMap.indexOf(i) &&
                          this.handleSendData(i, o, s, r, a, c);
                    case 2:
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
      handleSendData: function (e, n, i, o, s) {
        var r =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 10,
          a = arguments.length > 6 ? arguments[6] : void 0;
        return m(
          this,
          null,
          t().mark(function c() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.t0 = n), !t.t0)) {
                        t.next = 15;
                        break;
                      }
                      if (
                        (this.collectReportedMap.push(e),
                        this.fitemIds.push(e),
                        this.fflowIds.push(n),
                        this.recallTypes.push(i),
                        this.fpositionIds.push(o),
                        this.newsTypes.push(s),
                        this.reportInfo.push(a),
                        this.factionTimes.push(
                          parseInt(new Date().getTime() / 1e3, 10).toString()
                        ),
                        this.fsessionIds.push(
                          ""
                            .concat(new Date().getTime(), "_")
                            .concat(this.randomNum(0, 9999))
                        ),
                        (t.t1 = this.fitemIds.length >= r),
                        !t.t1)
                      ) {
                        t.next = 15;
                        break;
                      }
                      return (t.next = 15), this.sendAndReset();
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              c,
              this
            );
          })
        );
      },
      onShow: function () {
        var e = this;
        setTimeout(function () {
          e.sendExposure(!0),
            e.sendHorizontalExposure(),
            e.updateVoiceControlSetting();
        }, 0),
          this.isFirstLoad && ((this.isFirstLoad = !1), this.onActivated()),
          (this.enterTime = Date.now()),
          this.stockBridge.report(w.INDEX_YAOWEN_VISITED),
          this.$emit("changeYaowenShow", !0),
          this.checkFeedback();
      },
      onHide: function () {
        this.sendAndReset(),
          0 !== this.enterTime &&
            this.stockBridge.report(w.INDEX_YAOWEN_STAY_TIME, {
              ftime: Date.now() - this.enterTime,
            }),
          this.sendExposure(!0),
          this.sendHorizontalExposure(),
          this.stockBridge.busEmit("news-yaoWenList_onHide"),
          this.$emit("changeYaowenShow", !1);
      },
      refreshMySwiper: function () {
        this.$refs.mySwiper && this.$refs.mySwiper.refresh();
      },
      openHeadlineItem: function (e, t) {
        this.openReport(e, t, { verify_from: "headline_click" }),
          this.$emit("open", { columnId: "yaowen", item: e });
      },
      open: function (e, t) {
        this.openReport(e, t),
          this.$emit("open", { columnId: "yaowen", item: e }),
          this.stockBridge.setSession("session_feedback_news_item", e);
      },
      openVideoCard: function (e, t) {
        this.openReport(e, t),
          this.$emit("open", { item: e, type: "video_card" });
      },
      indexOfNews: function (e, t) {
        for (var n = -1, i = 0; i < e.length; i++)
          if (e[i].id === t) {
            n = i;
            break;
          }
        return n;
      },
      showFeedback: function (e) {
        (this.feedbackDialogNewsItem = e),
          this.$emit("showYaowenFeedbackDialog");
      },
      checkFeedback: function () {
        if (this.yaowenFeedbackEnable && _.isPrivacyAgreementAgreed()) {
          var e = this.stockBridge.getSession("session_feedback_news_item");
          e &&
            (this.$emit("getYaowenFeedbackDataList", e),
            this.stockBridge.setSession("session_feedback_news_item", null));
        }
      },
      onFeedbackConfirm: function (e) {
        if (this.feedbackDialogNewsItem) {
          this.feedbackDialogNewsItem.feedbackDismiss = !0;
          var t = this.indexOfNews(this.list, this.feedbackDialogNewsItem.id);
          if (
            (t >= 0 && this.list.splice(t, 1, this.feedbackDialogNewsItem), e)
          ) {
            var n = !e.checked;
            this.yaowenFeedbackEnable !== n && this.switchYaoWenFeedBack();
          }
        }
      },
      feedbackDismiss: function (e) {
        var t = this.indexOfNews(this.list, e.id);
        t >= 0 && this.list.splice(t, 1);
      },
      feedbackExposed: function (e, t) {
        this.feedbackExposedReport(e, t), (e.feedbackExposed = !0);
      },
      feedbackExposedReport: function (e, n) {
        return m(this, arguments, function (e, n) {
          var i = this,
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          return t().mark(function s() {
            var r, a, c, l, d, p;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = e.id),
                      (a = e.flow_id),
                      (c = e.recall_type),
                      (l = e.type),
                      (d =
                        (e.extra_info && e.extra_info.ab_test_report_info) ||
                        ""),
                      (t.next = 7),
                      R({
                        fitemId: r,
                        flowId: a,
                        recallType: c,
                        fpositionId: n,
                        factionType: 2,
                        type: l,
                        platform: i.platform,
                        platformVersion: i.isMP
                          ? i.mpVersion
                          : i.platformVersion,
                      })
                    );
                  case 7:
                    (p = t.sent),
                      i.stockBridge.report(
                        "news.index.information.feedcack_item_expose",
                        f(h(f({}, p), { report_info: d }), o)
                      );
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, s);
          })();
        });
      },
      goodAndBadNewsExposure: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n = arguments.length > 1 ? arguments[1] : void 0,
          i = arguments.length > 2 ? arguments[2] : void 0;
        t.forEach(function (t) {
          e.handleSendData(t.id, t.flow_id, t.recall_type, n, i, 10, "");
        });
      },
      goodAndBadClick: function (e, t, n) {
        var i = {
          flow_id: e.flow_id,
          id: e.id,
          type: n,
          recall_type: e.recall_type,
        };
        this.openReport(i, t);
      },
      openReport: function (e, n) {
        return m(this, arguments, function (e, n) {
          var i = this,
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          return t().mark(function s() {
            var r, a, c, l, d, p, u, m;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = e.id),
                      (a = e.flow_id),
                      (c = e.recall_type),
                      (l = e.type),
                      (d = e.isFeedback),
                      (p =
                        (e.extra_info && e.extra_info.ab_test_report_info) ||
                        ""),
                      (t.next = 8),
                      R({
                        fitemId: r,
                        flowId: a,
                        recallType: c,
                        fpositionId: n,
                        factionType: 2,
                        type: l,
                        platform: i.platform,
                        platformVersion: i.isMP
                          ? i.mpVersion
                          : i.platformVersion,
                      })
                    );
                  case 8:
                    (u = t.sent),
                      (m = d
                        ? "news.index.feedback_item_click"
                        : "information.item_click"),
                      i.stockBridge.report(
                        m,
                        f(h(f({}, u), { report_info: p }), o)
                      );
                  case 11:
                  case "end":
                    return t.stop();
                }
            }, s);
          })();
        });
      },
      onMpReachBottom: function () {
        this.onPullingUp();
      },
      onPullingUp: function () {
        return (
          this.stockBridge.report(w.INDEX_YAOWEN_PULLUP),
          this.loadAll
            ? Promise.resolve(!0)
            : this.refreshYaowenList &&
              this.refreshYaowenList(10, 0, this.pullingUpSuccess)
        );
      },
      pullingUpSuccess: function (e) {
        (this.loadAll = !e.hasNext), this.$emit("refreshListSuccess");
      },
      onPullingDown: function () {
        var e = this.$refs,
          t = e.reachBottom,
          n = e.errlist;
        t && w.initReachBottomCompStatus(t),
          n && (this.showErr = !1),
          (this.mpRefreshTriggered = !0),
          this.refreshYaowenList &&
            this.refreshYaowenList(
              20,
              1,
              this.pullingDownSuccess,
              this.pullingDownFail
            );
      },
      pullingDownSuccess: function (e) {
        return m(
          this,
          null,
          t().mark(function n() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (this.loadAll = !e.hasNext),
                        (this.mpRefreshTriggered = !1),
                        this.stockBridge.report(w.INDEX_YAOWEN_PULLDOWN),
                        (t.next = 5),
                        this.sendAndReset()
                      );
                    case 5:
                      (this.collectReportedMap = []),
                        (this.loadingText = this.getLoadingText()),
                        this.$emit("refreshListSuccess");
                    case 8:
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
      pullingDownFail: function () {
        (this.mpRefreshTriggered = !1),
          this.$refs.errlist && (this.showErr = !0);
      },
      getPosiInfo: function () {
        var e = this,
          t = this.list.find(function (e) {
            return e.showSpliter;
          });
        this.$nextTick(function () {
          t && e.getTabOffsetTop(), e.judgeCeiling();
        });
      },
      getTabOffsetTop: function () {
        var e = this;
        g.wx$1
          .createSelectorQuery()
          .in(this)
          .select(".refresh-yaowen >>> .common-spliter-content")
          .boundingClientRect()
          .select(".refresh-yaowen >>> .yaowen")
          .boundingClientRect()
          .exec(function (t) {
            var n = null == t ? void 0 : t[0],
              i = null == t ? void 0 : t[1];
            i && n && (e.wntjTab.top = n.top - i.top);
          });
      },
      handleYaowenCeiling: function () {},
      judgeCeiling: function () {
        var e;
        this.wntjTab &&
        this.wntjTab.top &&
        Math.abs(this.wntjTab.top) <= this.scrollTop
          ? (this.wntjTab.isCeiling = !0)
          : this.wntjTab && (this.wntjTab.isCeiling = !1),
          this.$emit(
            "showYaowenCeiling",
            (null == (e = this.wntjTab) ? void 0 : e.isCeiling) || !1
          );
      },
      onMuteStatusChange: function (e) {
        (this.playerMute = !!e.playerMute),
          this.stockBridge.setSession(
            "video_player_mute",
            this.playerMute ? "1" : "0"
          );
      },
      updateVoiceControlSetting: function () {
        var e = this.stockBridge.getSession("video_player_mute");
        this.playerMute = null == e || "1" === e;
      },
    },
  };
Array ||
  (
    g.resolveComponent("yao-wen-list-content") +
    g.resolveComponent("st-reach-bottom") +
    g.resolveComponent("st-pull-refresh")
  )();
var C = g._export_sfc(D, [
  [
    "render",
    function (e, t, n, i, o, s) {
      return g.e(
        { a: !s.isMP },
        s.isMP
          ? g.e(
              { v: s.isMP },
              s.isMP
                ? g.e(
                    {
                      w: g.sr("contentRef", "ca973a53-3"),
                      x: g.o(s.openHeadlineItem, 2586),
                      y: g.o(s.openVideoCard, 2587),
                      z: g.o(s.onMuteStatusChange, 2588),
                      A: g.o(s.goodAndBadClick, 2589),
                      B: g.o(s.goodAndBadNewsExposure, 2590),
                      C: g.o(s.open, 2591),
                      D: g.o(s.feedbackExposed, 2592),
                      E: g.o(s.feedbackDismiss, 2593),
                      F: g.o(s.showFeedback, 2594),
                      G: g.o(s.handleSendReportData, 2595),
                      H: g.p({
                        "show-headline": n.showHeadline,
                        "current-banner": o.currentBanner,
                        "important-banners": n.importantBanners,
                        list: n.list,
                        "video-css-error": o.videoCssError,
                        "player-mute": o.playerMute,
                        "is-feed-recom": s.isFeedRecom,
                        "load-all": o.loadAll,
                        "event-index": o.eventIndex,
                      }),
                      I: 0 === n.list.length && n.dataReady,
                    },
                    0 === n.list.length && n.dataReady
                      ? { J: g.t(o.showErr ? "数据异常，请下拉重试" : "") }
                      : {},
                    {
                      K: "".concat(n.mpScrollHeight, "px"),
                      L: !o.mpPullDisabled,
                      M: o.mpRefreshTriggered,
                      N: "black" === s.skin ? "white" : "black",
                      O: g.o(function (e) {
                        return s.onPullingDown();
                      }, 2596),
                      P: g.o(function () {
                        return s.onMpScroll && s.onMpScroll.apply(s, arguments);
                      }, 2597),
                      Q: g.o(function () {
                        return (
                          s.onMpReachBottom &&
                          s.onMpReachBottom.apply(s, arguments)
                        );
                      }, 2598),
                    }
                  )
                : {}
            )
          : g.e(
              {
                b: g.sr("contentRef", "ca973a53-2,ca973a53-1"),
                c: g.o(s.openHeadlineItem, 2575),
                d: g.o(s.openVideoCard, 2576),
                e: g.o(s.onMuteStatusChange, 2577),
                f: g.o(s.goodAndBadClick, 2578),
                g: g.o(s.goodAndBadNewsExposure, 2579),
                h: g.o(s.open, 2580),
                i: g.o(s.feedbackExposed, 2581),
                j: g.o(s.feedbackDismiss, 2582),
                k: g.o(s.showFeedback, 2583),
                l: g.o(s.handleSendReportData, 2584),
                m: g.p({
                  "show-headline": n.showHeadline,
                  "current-banner": o.currentBanner,
                  "important-banners": n.importantBanners,
                  list: n.list,
                  "video-css-error": o.videoCssError,
                  "player-mute": o.playerMute,
                  "is-feed-recom": s.isFeedRecom,
                  "load-all": o.loadAll,
                  "event-index": o.eventIndex,
                }),
                n: g.sr("reachBottom", "ca973a53-1,ca973a53-0"),
                o: g.p({
                  "on-reach-bottom": s.onPullingUp,
                  "finished-text": o.pullupText,
                  disabled: s.disableReachBtm,
                }),
                p: 0 === n.list.length && n.dataReady,
              },
              0 === n.list.length && n.dataReady
                ? { q: g.t(o.showErr ? "数据异常，请下拉重试" : "") }
                : {},
              {
                r: g.sr("ywScroll", "ca973a53-0"),
                s: g.o(s.onPullingDown, 2585),
                t: g.p({ "loosing-text": o.loadingText }),
              }
            )
      );
    },
  ],
  ["__scopeId", "data-v-ca973a53"],
]);
wx.createComponent(C);
var M = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWluZm9ybWF0aW9uLXBhZ2UvY29tcG9uZW50cy95YW9XZW4vWWFvV2VuTGlzdC52dWU =
  M),
  (exports.checkHeightInWindow = function (t, n, i) {
    var o =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : { tabBarHeight: 0 };
    return (
      Date.now() - I > n &&
      ((I = Date.now()),
      (function (t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = t;
        if (!t || !o.getBoundingClientRect) return !1;
        var s = o.getBoundingClientRect(),
          r = s.bottom,
          a = s.top,
          c = s.height,
          l = e - (i.tabBarHeight || 0);
        return (
          (c >= l && a <= 0) ||
          (!(a < 0 || r < 0) && (c - (r - l) >= c * n || (r >= c && r <= l)))
        );
      })(t, i, o))
    );
  }),
  (exports.throttle = S);
