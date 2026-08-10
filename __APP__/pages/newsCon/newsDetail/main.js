require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../@babel/runtime/helpers/createClass"),
  o = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  r = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  d = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t) {
    for (var n in t || (t = {})) c.call(t, n) && d(e, n, t[n]);
    if (a) {
      var i,
        r = o(a(t));
      try {
        for (r.s(); !(i = r.n()).done; ) {
          n = i.value;
          u.call(t, n) && d(e, n, t[n]);
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    return e;
  },
  h = function (e, t, n) {
    return new Promise(function (o, i) {
      var r = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(r, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  m = require("../../../common/vendor.js"),
  p = require("../@tencent/stock-news-core/utils/report.js"),
  f = require("../@tencent/stock-halfscreen-editor/hooks/outter/useHalfEditor.js"),
  w = "activity/ad.fcgi",
  v = getApp().globalData,
  g = function (e) {
    return new Promise(function (t) {
      v.wx.request({
        url: "/cgi-bin/".concat(w),
        data: { action: 2, channel: 8, ad_type: "tip_global", adid: e },
        success: function (e) {
          t(e);
        },
      });
    });
  },
  y = function () {
    return new Promise(function (e) {
      v.wx.request({
        url: "/cgi-bin/".concat(w),
        data: { action: 1, channel: 8, ad_type: "tip_global" },
        success: function (t) {
          e(t);
        },
      });
    });
  },
  T = (function () {
    function e(n) {
      t(this, e);
      try {
        (this.mainPathName = (null != n ? n : "").toUpperCase()),
          (this.contentId = ""),
          this.check("start");
      } catch (e) {}
    }
    return (
      n(e, [
        {
          key: "setContentId",
          value: function (e) {
            (this.contentId = null != e ? e : ""), this.check("setid");
          },
        },
        {
          key: "check",
          value: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            try {
              if (!this.mainPathName || !e) return;
              var n = "MONITOR-MAIN-PATH-"
                .concat(this.mainPathName, "-")
                .concat(e.toUpperCase());
              this._report(n, t);
            } catch (e) {}
          },
        },
        {
          key: "_report",
          value: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            p.aegisReportEvent(e, { ext4: this.contentId, ext5: t });
          },
        },
      ]),
      e
    );
  })(),
  b = getApp().globalData,
  k = {
    components: {
      relatednews: function () {
        return "../components/relatedNews.js";
      },
      addToMyMpGuide: function () {
        return "../../asyncCom/components/addToMyMpGuide.js";
      },
      NewsBody: function () {
        return "../@tencent/stock-news-detail/components/NewsBody/index.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLW5ld3MtZGV0YWlsL2NvbXBvbmVudHMvTmV3c0JvZHkvaW5kZXgudnVl;
          }
        );
      },
      yyAdv: function () {
        return "../../asyncCom/@tencent/st-activity-premotes/dist/component/adv/index.js";
      },
      yyBanner: function () {
        return "../../profileCom/@tencent/st-act-adv/components/banner.js";
      },
      task: function () {
        return "../../asyncCom/@tencent/st-act-component/h5/task/index.js";
      },
      BottomBar: function () {
        return "../../newsSbg/@tencent/stock-common-bar/component/commonbar-pro/index.js";
      },
      NewsComList: function () {
        return "../../newsSbg/@tencent/stock-sq/src/source/NewsComList/index.js";
      },
      BackMpBtn: function () {
        return "../../../components/BackMpButton.js";
      },
      PrivacyPolicyModal: function () {
        return "../../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
      },
      shareLayer: function () {
        return "../../report/components/shareLayer.js";
      },
      ThirteenAnniversaryTask: function () {
        return "../../searchAi/@tencent/st-act-ai-activity-plugins/task/index.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC1haS1hY3Rpdml0eS1wbHVnaW5zL3Rhc2svaW5kZXgudnVl;
          }
        );
      },
      profilePop: function () {
        return "../../newsSbg/@tencent/stock-sq/src/source/profilePop/index.js";
      },
      TxvVideoPlayer: function () {
        return "../../information/components/txvVideoPlayer.js";
      },
      HalfEditor: function () {
        return "../../halfScreenEditor/@tencent/stock-halfscreen-editor/components/halfscreen-editor.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhhbGZzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvaGFsZnNjcmVlbi1lZGl0b3IudnVl;
          }
        );
      },
    },
    provide: function () {
      var e = this;
      return {
        isNewZxgMp: !0,
        hqBridge: this.hqBridge,
        stockBridge: this.stockBridge,
        useBroker: m.useBrokerInfo(),
        didAgreeUserAgreement: this.didAgreeUserAgreement,
        onCheckUserAgreementStatus: this.onCheckUserAgreementStatus,
        communityComCanOpt: !1,
        tradeFunc: m.sdkBridge,
        mainPathReporter: this.mainPathReporter,
        isAbtRelatedHq: Object.defineProperty({}, "value", {
          enumerable: !0,
          get: function () {
            return e.isAbtRelatedHq;
          },
        }),
      };
    },
    setup: function (e, t) {
      var n = m.getCurrentInstance().proxy || m.getCurrentInstance(),
        o = "news",
        i = f.useHalfEditor(n, e, t, o, {
          postSuccessFunc: function () {
            var e;
            null == (e = n.$refs.newsCommentList) || e.updateComList();
          },
        });
      return l({ pageType: o }, i);
    },
    data: function () {
      return {
        mainPathReporter: new T("newsdetail"),
        showLoading: !0,
        hqBridge: new m.HQBridge(),
        stockBridge: m.StockBridge,
        errorStatusType: "",
        news: [],
        showAddToMyMiniAppGuide: !1,
        guideText: "",
        adinfo: function () {},
        newsId: null,
        detailInfo: function () {},
        showAdditionalElements: !1,
        scrollHeight: 0,
        shareGroup: !1,
        shareSuccess: !1,
        actTackQuery: "",
        enableHandleScroll: !0,
        isShowComment: !0,
        forwardNum: 0,
        commentCnt: 0,
        bottomBarType: "comment",
        communityTop: 0,
        forbidComment: !1,
        pageNum: 0,
        pageMaxNum: 0,
        min_id: "",
        news_min_id: "",
        userinfo: null,
        isDataReady: !1,
        firstTime: !0,
        isFullTeach: !1,
        anchorTitle: null,
        userTouched: !1,
        fullTeachTimeout: null,
        isSharePage: !1,
        showTask: !1,
        showCommentWrap: !1,
        backTradeQuery: {},
        showPrivacyPolicy: !1,
        didAgreeUserAgreement: m.reactive({ value: !0 }),
        txvVid: "",
        showShareGuide: !1,
        isForbidForward: !1,
        isAiSummaryExpand: !1,
        skin: m.wx$1.getStorageSync("user/skin") || "white",
        readTimer: null,
        readPercent: "0%",
        commentEndReported: !1,
        profilePopParams: null,
        isAbtRelatedHq: !1,
      };
    },
    created: function () {
      this.unsubUserAgreementStatus();
    },
    beforeDestroy: function () {
      b.Event.remove("yy.task.update_share_link", this);
    },
    destroyed: function () {
      this.fullTeachTimeout && clearTimeout(this.fullTeachTimeout),
        this.unsubUserAgreementStatus(),
        this.stopRead();
    },
    onLoad: function (t) {
      return h(
        this,
        null,
        e().mark(function n() {
          var o,
            i,
            a,
            c,
            u,
            d,
            h,
            f,
            w,
            v = this;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), this.checkLogin();
                  case 3:
                    e.next = 8;
                    break;
                  case 5:
                    (e.prev = 5), (e.t0 = e.catch(0)), p.aegisReportError(e.t0);
                  case 8:
                    if (
                      ((this.showTask = !0),
                      (o = t.articleStyle),
                      (i = t.id),
                      (a = t.scene),
                      (c = t.sourceFrom),
                      (u = t.columnfrom),
                      (this.isAbtRelatedHq =
                        "lctflashnews" === String(c).toLowerCase() ||
                        ["yaowen", "choose", "flash"].includes(u)),
                      (this.isFullTeach = "fullTeach" === o),
                      (this.newsId = i),
                      a)
                    )
                      try {
                        (d = decodeURIComponent(a).split(",")) &&
                          d.length &&
                          ((this.newsId = d[0] || i),
                          1 == +d[1] && (this.isAiSummaryExpand = !0));
                      } catch (e) {}
                    this.mainPathReporter.setContentId(this.newsId),
                      t.from &&
                        "share" === t.from &&
                        m.Request.reportMTAData({
                          eventName: "news.mini.shareDetail.visited",
                          newsid: this.newsId,
                        }),
                      (this.showAddToMyMiniAppGuide = !1),
                      y().then(function (e) {
                        var t = (e && e.adinfo && e.adinfo[0]) || {};
                        t &&
                          "1" === t.feedback &&
                          setTimeout(function () {
                            (v.showAddToMyMiniAppGuide = !0),
                              (v.guideText = t.text),
                              (v.adinfo = t || {});
                            var e = t.report_info,
                              n = t.adid;
                            m.Request.reportMTAData({
                              eventName: "base.global.mpguide_brow",
                              report_info: e,
                              adid: n,
                            }),
                              g(t.adid).then(function (e) {});
                          }, 5e3);
                      }),
                      t.share_code &&
                        t.share_type &&
                        m.actServ.submitShareVisitRecord(t),
                      b.Event.on(
                        "yy.task.update_share_link",
                        this,
                        function (e) {
                          var t = e.scode,
                            n = e.taskid,
                            o = e.actid;
                          v.actTackQuery = "&share_code="
                            .concat(t, "&share_type=task_")
                            .concat(n, "_")
                            .concat(o, "&sata_data=OAf00p000k001");
                        }
                      ),
                      (h = t.__share_flag__),
                      (this.isSharePage = 1 == +h),
                      (null == t ? void 0 : t.btnText) &&
                        (null == t ? void 0 : t.brokerCode) &&
                        (this.backTradeQuery =
                          ((f = l({}, t)),
                          (w = {
                            backNavExtData: {
                              scode: t.etfCode,
                              market: t.etfMarket,
                            },
                          }),
                          r(f, s(w))));
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            n,
            this,
            [[0, 5]]
          );
        })
      );
    },
    onShow: function () {
      var e, t;
      b.setSkin(),
        (this.enterTime = Date.now()),
        this.shareGroup &&
          ((this.shareGroup = !1),
          (this.shareSuccess = !0),
          b.Event.emit("user.behavior", { type: "share" })),
        m.Util.isFromPyq() &&
          m.wx$1.showModal({
            title: "",
            content:
              "当前模式部分功能不可用，可点击下方“前往小程序”享受完整内容",
            showCancel: !1,
            confirmText: "我知道了",
            success: function (e) {},
          }),
        this.firstTime
          ? (this.firstTime = !1)
          : (this.$refs.newsCommentList &&
              (null == (e = this.$refs.newsCommentList) || e.updateComList()),
            this.$refs.newsBody &&
              (null == (t = this.$refs.newsBody) || t.mpOnShow())),
        this.subUserAgreementStatus(),
        this.startRead(),
        this.onShowHalfEditor(this);
    },
    onPageScroll: b.throttle(16, function (e) {
      var t = this;
      this.$refs.newsBody &&
        this.$refs.newsBody.onHostPageScroll &&
        this.$refs.newsBody.onHostPageScroll(),
        (this.scrollHeight = e.scrollTop),
        this.checkScrollPosition(),
        m.wx$1.setStorageSync("miniNewsDetailScrollTop", {
          scrollTop: e.scrollTop,
        }),
        m.wx$1
          .createSelectorQuery()
          .in(this)
          .select("#communityWrap >>> .mod-loadText")
          .boundingClientRect(function (e) {
            e &&
              e.top < b.device.windowHeight &&
              t.$refs.newsCommentList.loadData();
          })
          .exec(),
        this.updateReadPercent(),
        m.scrollDepthStat.onScroll(e.scrollTop, this.__route__);
    }),
    onShareAppMessage: function () {
      return h(
        this,
        null,
        e().mark(function t() {
          var n,
            o,
            i = this;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      this.mainPathReporter.check("share-start"),
                      (n = decodeURIComponent(
                        (this.detailInfo.title || "").replace(/%/g, "%25")
                      )),
                      (o = [
                        "id=".concat(this.newsId),
                        "title=".concat(n),
                        "source=".concat(this.detailInfo.source),
                        "date=".concat(this.date),
                      ]),
                      m.Request.reportMTAData({
                        eventName: "news.mini.detail.share",
                        newsid: this.newsId || "",
                      }),
                      (e.next = 5),
                      y().then(function (e) {
                        var t = (e && e.adinfo && e.adinfo[0]) || {};
                        if (t && "1" === t.feedback) {
                          (i.showAddToMyMiniAppGuide = !0),
                            (i.guideText = t.text),
                            (i.adinfo = t || {});
                          var n = t.report_info,
                            o = t.adid;
                          m.Request.reportMTAData({
                            eventName: "base.global.mpguide_brow",
                            report_info: n,
                            adid: o,
                          }),
                            g(t.adid).then(function (e) {});
                        }
                      })
                    );
                  case 5:
                    return (
                      (this.shareGroup = !0),
                      (this.shareSuccess = !1),
                      (this.showShareGuide = !1),
                      this.mainPathReporter.check("share-end"),
                      e.abrupt("return", {
                        title: n,
                        desc: "".concat(this.source, "  ").concat(this.date),
                        path: "pages/newsCon/newsDetail/main?"
                          .concat(o.join("&"), "&from=share")
                          .concat(this.actTackQuery),
                      })
                    );
                  case 10:
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
    onShareTimeline: function () {
      var e;
      this.mainPathReporter.check("share-timeline-start");
      var t = this.detailInfo.title || "",
        n = [
          "id=".concat(this.newsId),
          "title=".concat(t),
          "source=".concat(this.detailInfo.source),
          "date=".concat(this.date),
        ];
      return (
        null == (e = m.Request) ||
          e.reportMTAData({ eventName: "xcx_share_timeline" }),
        (this.shareGroup = !0),
        (this.shareSuccess = !1),
        (this.showShareGuide = !1),
        this.mainPathReporter.check("share-timeline-end"),
        {
          title: t,
          query: ""
            .concat(n.join("&"), "&from=share")
            .concat(this.actTackQuery),
        }
      );
    },
    onHide: function () {
      (this.showTask = !1),
        this.unsubUserAgreementStatus(),
        this.stopRead(),
        this.onHideHalfEditor(this);
    },
    onUnload: function () {
      var e;
      try {
        this.$refs.newsCommentList &&
          (null == (e = this.$refs.newsCommentList) ||
            e.removeAllExposureData());
      } catch (e) {}
    },
    updated: function () {
      var e = this;
      m.wx$1
        .createSelectorQuery()
        .in(this)
        .select("#detailBody")
        .boundingClientRect(function (t) {
          var n = t.height;
          (e.communityTop = n), e.checkScrollPosition();
        })
        .exec();
    },
    methods: {
      showProfilePop: function (e) {
        this.profilePopParams = e;
      },
      hideProfilePop: function () {
        this.profilePopParams = null;
      },
      updateReadPercent: function () {
        var e = this;
        m.wx$1
          .createSelectorQuery()
          .in(this)
          .select("#detailBody")
          .boundingClientRect()
          .selectViewport()
          .fields({ scrollOffset: !0, size: !0 })
          .exec(function (t) {
            var n,
              o,
              i = (null != (n = null == t ? void 0 : t[0]) ? n : {}).height,
              r = void 0 === i ? 0 : i,
              s = null != (o = null == t ? void 0 : t[1]) ? o : {},
              a = s.scrollTop,
              c = void 0 === a ? 0 : a,
              u = s.height,
              d = c + (void 0 === u ? 0 : u);
            d >= r && (d = r),
              (e.readPercent =
                0 === r ? "0%" : "".concat(Math.floor((d / r) * 100), "%"));
          });
      },
      startRead: function () {
        var e = this;
        this.readTimer && clearTimeout(this.readTimer),
          (this.readTimer = setTimeout(function () {
            e.updateReadPercent(),
              m.Request.reportMTAData({
                eventName: "yy.newsprogress.start",
                newsid: e.newsId,
                read_percentge: e.readPercent,
              });
          }, 800));
      },
      stopRead: function () {
        m.Request.reportMTAData({
          eventName: "yaowen.detail_readinfo",
          newsid: this.newsId,
          read_percentge: this.readPercent,
        }),
          this.readTimer && clearTimeout(this.readTimer);
      },
      onTouchStart: function () {
        this.userTouched = !0;
      },
      onShare: function () {
        this.showShareGuide = !0;
      },
      onHideShareGuide: function () {
        this.showShareGuide = !1;
      },
      shareFinancialReport: function () {
        m.Request.reportMTAData({
          eventName: "news.mini.detail.aireport",
          newsid: this.newsId,
        });
      },
      checkUserAgreementStatus: function () {
        var e = !0;
        try {
          var t = m.StockBridge.store.protocolStatus;
          "string" == typeof t && (e = "agree" === t);
        } catch (e) {}
        return (this.didAgreeUserAgreement.value = e), e;
      },
      subUserAgreementStatus: function () {
        this.checkUserAgreementStatus() ||
          (this.unsubUserAgreementStatus(),
          m.StockBridge.store.subscribeProtocolStatus(
            this.handleProtocolStatusChange
          ));
      },
      unsubUserAgreementStatus: function () {
        m.StockBridge.store.unsubscribeProtocolStatus(
          this.handleProtocolStatusChange
        );
      },
      handleProtocolStatusChange: function () {
        this.checkUserAgreementStatus();
      },
      checkLogin: function () {
        return h(
          this,
          null,
          e().mark(function t() {
            var n, o, i;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = m.login.isLogin()), e.t0)) {
                        e.next = 4;
                        break;
                      }
                      return (e.next = 4), m.login.login();
                    case 4:
                      (n = m.login.getLoginInfo() || {}),
                        (o = n.qluin),
                        (i = n.qlskey),
                        o &&
                          i &&
                          (this.userinfo = {
                            qlskey: i,
                            qluin: o,
                            qlappid: "wx4ffb369b6881ee5e",
                            appid: "wx4ffb369b6881ee5e",
                            openid: o,
                            fskey: i,
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
      onLayoutBody: function (e) {},
      onDataReady: function (e) {
        var t = this;
        (this.showLoading = !1),
          (this.errorStatusType = (e && e.errorStatusType) || ""),
          e &&
            !this.errorStatusType &&
            ((this.isForbidForward = !!e.isForbidForward),
            (this.detailInfo = e.detailInfo)),
          this.detailInfo &&
            this.detailInfo.id &&
            (this.news = this.detailInfo.relate_news || []),
          this.processTxvVideoInfo(),
          setTimeout(function () {
            t.showAdditionalElements = !0;
          }, 300),
          (this.forbidComment =
            this.detailInfo &&
            !!this.detailInfo.comment_status &&
            1 == +this.detailInfo.comment_status),
          this.getShareNumber(),
          setTimeout(function () {
            t.isDataReady = !0;
          }, 100);
        var n = getCurrentPages(),
          o = n[n.length - 1].options,
          i = o.articleStyle,
          r = o.anchorTitle;
        (this.isFullTeach = "fullTeach" === i),
          this.isFullTeach && r && ((this.anchorTitle = r), this.getLocation()),
          this.$nextTick(function () {
            setTimeout(function () {
              t.showCommentWrap = !0;
            }, 300);
          }),
          this.forbidComment || this.isForbidForward
            ? this.mainPathReporter.check("comment-forbid")
            : this.mainPathReporter.check("comment-start");
      },
      checkScrollPosition: function () {
        var e = this.scrollHeight + b.device.windowHeight - this.communityTop;
        e >= 0
          ? (this.bottomBarType = "edit")
          : e < 0 && (this.bottomBarType = "comment");
      },
      scrollToComment: function () {
        this.enableHandleScroll &&
          (m.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#detailBody")
            .boundingClientRect(function (e) {
              var t = e.height;
              m.wx$1.pageScrollTo({ scrollTop: t, duration: 300 });
            })
            .exec(),
          m.Request.reportMTAData({
            eventName: "news.mini.detail.bottom_bar_pos_click",
            newsid: this.newsId || "",
          }));
      },
      getShareNumber: function () {
        var t = this;
        b.wx.request({
          url: "https://wzq.tenpay.com/cgi/cgi-bin/numserver/getStaticNums",
          data: { ids: this.newsId, type: "forward" },
          method: "GET",
          success: function (n) {
            return h(
              t,
              null,
              e().mark(function t() {
                var o, i;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (i = n.data) &&
                            Array.isArray(i) &&
                            ((this.forwardNum =
                              (null == (o = i[0]) ? void 0 : o.forward) || 0),
                            this.isShowComment && this.forwardNum);
                        case 2:
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
          fail: function (n) {
            return h(
              t,
              null,
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
        });
      },
      getCommentList: function () {
        var t = this,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        b.wx.request({
          url: "https://wzq.tenpay.com/group/newstockgroup/rssNewsService/newsRssList",
          data: n,
          success: function (n) {
            return h(
              t,
              null,
              e().mark(function t() {
                var o, i;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (o = n.data),
                            (i = o.comment_cnt),
                            (this.commentCnt = i),
                            this.checkScrollPosition();
                        case 2:
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
          fail: function (n) {
            return h(
              t,
              null,
              e().mark(function t() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            );
          },
        });
      },
      getParams: function (e) {
        var t = {
          id: this.newsId,
          visible: 1,
          limit: 10,
          _: Date.parse(new Date()),
          begin: "",
          content_link: 1,
        };
        return (
          e
            ? ((this.pageNum = 0), (t.begin = ""), (t.begin_news = ""))
            : (this.pageNum++,
              (t.begin = this.min_id),
              (t.begin_news = this.news_min_id || "")),
          (this.pageMaxNum = Math.max(this.pageNum, this.pageMaxNum)),
          (t.map_id = "news_".concat(this.newsId)),
          (t.comment_id = this.detailInfo.commentid || ""),
          t
        );
      },
      getCommentCount: function (e) {
        (this.commentCnt = e), this.checkScrollPosition();
      },
      onCommentUpdate: function () {
        this.commentEndReported ||
          ((this.commentEndReported = !0),
          this.mainPathReporter.check("comment-end"));
      },
      onPutComment: function (e) {
        var t = {
          type: "detail",
          id: null == e ? void 0 : e.id,
          touser: null == e ? void 0 : e.user_name,
          post_scene: "news",
        };
        this.openEditor(t);
      },
      onTapMore: function (e) {
        var t = (e || {}).actionSheet;
        if (t && t.length) {
          var n = [];
          t.forEach(function (e) {
            var t = e.showName;
            n.push(t);
          }),
            m.wx$1.showActionSheet({
              itemList: n,
              success: function (e) {
                e.tapIndex >= 0 && (0, t[e.tapIndex].onTapMenu)();
              },
              fail: function (e) {},
            });
        }
      },
      onCheckUserAgreementStatus: function () {
        this.didAgreeUserAgreement.value || (this.showPrivacyPolicy = !0);
      },
      goEdit: function () {
        var e = this.newsId;
        this.openEditor({ id: e, type: "news" }),
          m.Request.reportMTAData({
            eventName: "news.mini.detail.bottom_bar_fatie_click",
            newsid: this.newsId,
          });
      },
      getLocation: function () {
        var e,
          t,
          n = this,
          o =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
        if (
          (this.fullTeachTimeout && clearTimeout(this.fullTeachTimeout),
          !this.userTouched)
        ) {
          var i = (
            null == (t = null == (e = this.detailInfo) ? void 0 : e.content)
              ? void 0
              : t.data
          ).filter(function (e) {
            return "h1" === e.tag;
          });
          m.wx$1
            .createSelectorQuery()
            .in(this)
            .selectAll("#detailBody >>> .text-h1")
            .boundingClientRect(function (e) {
              var t, r;
              if (e && e.length > 0 && i && i.length)
                for (
                  var s = function () {
                      var o =
                        null !=
                        (r =
                          null == (t = i[a].desc)
                            ? void 0
                            : t.replace(/<[^>]*>/g, ""))
                          ? r
                          : "";
                      if (
                        (n.anchorTitle === o ||
                          decodeURIComponent(n.anchorTitle) === o) &&
                        a < e.length
                      ) {
                        var s = e[a].top;
                        return (
                          s &&
                            m.wx$1
                              .createSelectorQuery()
                              .in(n)
                              .selectViewport()
                              .scrollOffset(function (e) {
                                var t = e.scrollTop;
                                m.wx$1.pageScrollTo({
                                  scrollTop: t + s,
                                  duration: 0,
                                });
                              })
                              .exec(),
                          1
                        );
                      }
                    },
                    a = 0;
                  a < i.length && !s();
                  a++
                );
              o > 0 &&
                (n.fullTeachTimeout = setTimeout(function () {
                  n.getLocation(o - 1);
                }, 500));
            })
            .exec();
        }
      },
      processTxvVideoInfo: function () {
        var e = this;
        if (this.detailInfo && this.detailInfo.content) {
          var t = this.detailInfo.content.data;
          t &&
            t.length &&
            t.forEach(function (t) {
              "video" === t.type && (e.txvVid = t.vid);
            });
        }
      },
    },
  };
Array ||
  (
    m.resolveComponent("mp-privacy-dialog") +
    m.resolveComponent("stock-privacy-dialog") +
    m.resolveComponent("txv-video-player") +
    m.resolveComponent("NewsBody") +
    m.resolveComponent("yy-adv") +
    m.resolveComponent("yyBanner") +
    m.resolveComponent("relatednews") +
    m.resolveComponent("addToMyMpGuide") +
    m.resolveComponent("NewsComList") +
    m.resolveComponent("BottomBar") +
    m.resolveComponent("task") +
    m.resolveComponent("BackMpBtn") +
    m.resolveComponent("PrivacyPolicyModal") +
    m.resolveComponent("shareLayer") +
    m.resolveComponent("ThirteenAnniversaryTask") +
    m.resolveComponent("profilePop") +
    m.resolveComponent("HalfEditor")
  )();
var S = m._export_sfc(k, [
  [
    "render",
    function (e, t, n, o, i, r) {
      var s;
      return m.e(
        { a: e.rootFontSize, b: i.newsId },
        i.newsId
          ? m.e(
              { c: i.txvVid },
              i.txvVid ? { d: m.p({ vid: i.txvVid, "use-poster": !1 }) } : {},
              {
                e: m.sr("newsBody", "277f7542-2"),
                f: m.o(r.onDataReady, 270),
                g: m.o(r.shareFinancialReport, 271),
                h: m.o(r.onTouchStart, 272),
                i: m.p({
                  theme: i.skin,
                  "original-id": i.newsId,
                  "fluc-show-mode": "redup",
                  "stock-name": null,
                  click_time: 1,
                  pathname: "",
                  "open-app": 1,
                  "is-full-teach": i.isFullTeach,
                  "is-ai-summary-expand": i.isAiSummaryExpand,
                }),
              }
            )
          : {},
        { j: m.p({ type: "newsdetail", size: "h200" }), k: i.isDataReady },
        (i.isDataReady, {}),
        { l: i.showAdditionalElements },
        i.showAdditionalElements ? { m: m.p({ news: i.news }) } : {},
        {
          n: m.o(function (e) {
            return (i.showAddToMyMiniAppGuide = !1);
          }, 273),
          o: m.p({
            visible: i.showAddToMyMiniAppGuide,
            "guide-configurable": !0,
            "guide-text": i.guideText,
            adinfo: i.adinfo,
          }),
          p: !i.isForbidForward,
        },
        i.isForbidForward
          ? {}
          : m.e(
              {
                q:
                  i.isDataReady &&
                  i.isShowComment &&
                  i.detailInfo &&
                  1 !== i.detailInfo.comment_status,
              },
              (i.isDataReady &&
                i.isShowComment &&
                i.detailInfo &&
                i.detailInfo.comment_status,
              {}),
              {
                r:
                  i.isDataReady &&
                  i.detailInfo &&
                  1 !== i.detailInfo.comment_status,
              },
              i.isDataReady && i.detailInfo && 1 !== i.detailInfo.comment_status
                ? {
                    s: m.sr("newsCommentList", "277f7542-8"),
                    t: m.o(r.getCommentCount, 274),
                    v: m.o(r.onCommentUpdate, 275),
                    w: m.o(r.onPutComment, 276),
                    x: m.o(r.onTapMore, 277),
                    y: m.o(r.onCheckUserAgreementStatus, 278),
                    z: m.o(r.showProfilePop, 279),
                    A: m.p({
                      "page-type": "news",
                      "p-userinfo": i.userinfo,
                      "news-id": i.newsId,
                      "news-info": i.detailInfo,
                      "main-app": this,
                      "did-agree-user-agreement": i.didAgreeUserAgreement,
                    }),
                  }
                : {},
              { B: !i.errorStatusType },
              i.errorStatusType
                ? {}
                : {
                    C: m.o(r.scrollToComment, 280),
                    D: m.o(r.goEdit, 281),
                    E: m.o(r.showProfilePop, 282),
                    F: m.p({
                      "content-id": i.newsId,
                      "ai-scene": "newsdetail",
                      "ai-theme": i.skin,
                      "ai-report-prefix": "news.uni_news_detail",
                      "ai-report-info": {
                        newsId: null != (s = i.newsId) ? s : "",
                      },
                      "show-comment": i.bottomBarType,
                      "comment-num": i.commentCnt,
                      "forbid-comment": i.forbidComment,
                      "show-share": "default",
                      forwardNum: i.forwardNum,
                    }),
                  },
              { G: i.showCommentWrap }
            ),
        { H: i.showTask },
        (i.showTask, {}),
        {
          I: m.p({ params: i.backTradeQuery }),
          J: m.o(function (e) {
            return (i.showPrivacyPolicy = e);
          }, 283),
          K: m.p({ value: i.showPrivacyPolicy }),
          L: i.showShareGuide,
          M: m.o(r.onHideShareGuide, 284),
          N: m.p({ mode: "guide", customEvents: ["common-ai-summary-finish"] }),
          O: i.profilePopParams,
        },
        i.profilePopParams
          ? {
              P: m.o(r.hideProfilePop, 285),
              Q: m.p({
                userStateData: i.profilePopParams.userStateData,
                content: i.profilePopParams.content,
                defaultHeadImage: i.profilePopParams.defaultHeadImage,
                defaultNickname: i.profilePopParams.defaultNickname,
              }),
            }
          : {},
        { R: e.isShowHalfEditor },
        e.isShowHalfEditor
          ? {
              S: m.sr("halfEditor", "277f7542-16"),
              T: m.o(e.hideHalfEditor, 286),
              U: m.p({ "query-editor": e.queryHalfEditor }),
            }
          : {},
        {
          V: m.n(i.showLoading ? "loading-background" : ""),
          W: m.n("black" === i.skin ? "black" : ""),
          X: i.skin,
        }
      );
    },
  ],
  ["__scopeId", "data-v-277f7542"],
]);
(k.__runtimeHooks = 7), wx.createPage(S);
