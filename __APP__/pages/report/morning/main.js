var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/typeof"),
  n = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  o = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  c = function (e, t) {
    for (var r in t || (t = {})) a.call(t, r) && u(e, r, t[r]);
    if (s) {
      var o,
        i = n(s(t));
      try {
        for (i.s(); !(o = i.n()).done; ) {
          r = o.value;
          l.call(t, r) && u(e, r, t[r]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  d = function (e, t) {
    return o(e, i(t));
  },
  m = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  p = require("../../../common/vendor.js"),
  h = require("../@tencent/stock-news-core/hooks/useUserProtocol.js"),
  f = require("../../../module/delivery/deliveryMixin.js"),
  g = require("../@tencent/stock-news-base/service/news/gray.js"),
  _ = require("../@tencent/stock-news-base/service/news/apis/queryAudioList.js"),
  w = require("../utils/shareHelper.js"),
  v = require("../@tencent/st-canvas-image/OffscreenCanvas.js"),
  y = require("../@tencent/stock-halfscreen-editor/hooks/outter/useHalfEditor.js"),
  S = function (e) {
    return Array.isArray(e)
      ? e.map(function (e) {
          var t, n, r, o, i, s, a, l;
          return d(c({}, e), {
            stock_code: String(null != (t = e.symbol) ? t : ""),
            stock_name: String(null != (n = e.symbol_name) ? n : ""),
            news_id: String(null != (r = e.news_id) ? r : ""),
            title: String(null != (o = e.title) ? o : ""),
            type: Number(null != (i = e.type) ? i : 0),
            publish_time:
              "number" == typeof e.publish_time && e.publish_time > 1e12
                ? Math.floor(e.publish_time / 1e3)
                : Number(null != (s = e.publish_time) ? s : 0),
            url: String(null != (a = e.url) ? a : ""),
            is_important: Number(null != (l = e.is_important) ? l : 0),
          });
        })
      : [];
  },
  b = function (e) {
    return Array.isArray(e)
      ? e.map(function (e) {
          var t;
          return d(c({}, e), {
            news_id: String(null != (t = e.news_id) ? t : ""),
            relate_stocks: Array.isArray(e.relate_stocks)
              ? e.relate_stocks.map(function (e) {
                  var t, n, r;
                  return d(c({}, e), {
                    stock_code: String(null != (t = e.symbol) ? t : ""),
                    stock_name: String(null != (n = e.name) ? n : ""),
                    zdf: String(null != (r = e.zdf) ? r : ""),
                  });
                })
              : [],
          });
        })
      : [];
  },
  k = function (e) {
    var n, r, o, i, s, a, l, u, m;
    if (!e) return e;
    var p,
      h = e.data && "object" == t(e.data) ? e.data : e,
      f = c({}, e),
      g =
        ((p =
          null != (o = null != (n = h.speech_info) ? n : h.audio_info)
            ? o
            : null == (r = h.news_info)
            ? void 0
            : r.audio_info),
        Array.isArray(p)
          ? p.map(function (e) {
              var t, n, r, o, i;
              return d(c({}, e), {
                model: Number(null != (t = e.model) ? t : 0),
                model_name: String(null != (n = e.model_name) ? n : ""),
                play_time: Number(null != (r = e.play_time) ? r : 0),
                play_url: String(null != (o = e.play_url) ? o : ""),
                time_mark: String(null != (i = e.time_mark) ? i : ""),
              });
            })
          : []),
      _ = (function (e) {
        var n, r, o, i, s, a, l, u, m, p, h, f, g, _, w;
        if (!e) return e;
        var v = c({}, e);
        return d(c({}, v), {
          news_id: String(
            null != (r = null != (n = e.news_id) ? n : e.id) ? r : ""
          ),
          title: String(null != (o = e.title) ? o : ""),
          source: String(null != (i = e.source) ? i : ""),
          news_type: Number(null != (s = e.news_type) ? s : 0),
          is_deleted: Number(null != (a = e.is_deleted) ? a : 0),
          data_source: Number(null != (l = e.data_source) ? l : 0),
          publish_time: Number(null != (u = e.publish_time) ? u : 0),
          comment_status: Number(null != (m = e.comment_status) ? m : 0),
          commentid: String(null != (p = e.commentid) ? p : ""),
          cont_type: Number(null != (h = e.cont_type) ? h : 0),
          content: d(c({}, e.content), {
            data: Array.isArray(null == (f = e.content) ? void 0 : f.data)
              ? e.content.data.map(function (e) {
                  var t, n, r, o, i, s, a, l, u, m, p, h;
                  return d(c({}, e), {
                    type: String(null != (t = e.type) ? t : ""),
                    desc: String(null != (n = e.desc) ? n : ""),
                    tag: String(null != (r = e.tag) ? r : ""),
                    height: String(null != (o = e.height) ? o : ""),
                    width: String(null != (i = e.width) ? i : ""),
                    url: String(null != (s = e.url) ? s : ""),
                    vid: String(null != (a = e.vid) ? a : ""),
                    duration: String(null != (l = e.duration) ? l : ""),
                    link: String(null != (u = e.link) ? u : ""),
                    id: String(null != (m = e.id) ? m : ""),
                    comment: String(null != (p = e.comment) ? p : ""),
                    module_id: String(null != (h = e.module_id) ? h : ""),
                  });
                })
              : [],
          }),
          publish_status: Number(null != (g = e.publish_status) ? g : 0),
          footernote: Array.isArray(e.footernote)
            ? e.footernote.map(function (e) {
                return String(null != e ? e : "");
              })
            : [],
          summary: String(null != (_ = e.summary) ? _ : ""),
          url: String(null != (w = e.url) ? w : ""),
          relate_stocks: Array.isArray(e.relate_stocks)
            ? e.relate_stocks.map(function (e) {
                var t, n;
                return d(c({}, e), {
                  stock_code: String(null != (t = e.symbol) ? t : ""),
                  stock_name: String(null != (n = e.name) ? n : ""),
                });
              })
            : [],
          stock_orders:
            e.stock_orders && "object" == t(e.stock_orders)
              ? c({}, e.stock_orders)
              : {},
        });
      })(h.news_info);
    return d(c({}, f), {
      code: Number(null != (s = null != (i = e.code) ? i : e.retcode) ? s : -1),
      msg: String(null != (l = null != (a = e.msg) ? a : e.retmsg) ? l : ""),
      news_info: _ ? d(c({}, _), { audio_info: g }) : _,
      summary_stocks: S(h.summary_stocks),
      req_time: Number(null != (u = h.req_time) ? u : 0),
      news_stocks: b(h.news_stocks),
      ai_podcast: Boolean(null != (m = h.ai_podcast) && m),
    });
  },
  x = function (e) {
    return Array.isArray(e)
      ? e.map(function (e) {
          var t, n, r, o, i, s, a, l;
          return d(c({}, e), {
            stock_code: String(null != (t = e.symbol) ? t : ""),
            stock_name: String(null != (n = e.symbol_name) ? n : ""),
            news_id: String(null != (r = e.news_id) ? r : ""),
            title: String(null != (o = e.title) ? o : ""),
            type: Number(null != (i = e.type) ? i : 0),
            publish_time: Number(null != (s = e.publish_time) ? s : 0),
            url: String(null != (a = e.url) ? a : ""),
            is_important: Number(null != (l = e.is_important) ? l : 0),
          });
        })
      : [];
  },
  I = function (e) {
    return Array.isArray(e)
      ? e.map(function (e) {
          var t;
          return d(c({}, e), {
            news_id: String(null != (t = e.news_id) ? t : ""),
            relate_stocks: Array.isArray(e.relate_stocks)
              ? e.relate_stocks.map(function (e) {
                  var t, n, r;
                  return d(c({}, e), {
                    stock_code: String(null != (t = e.symbol) ? t : ""),
                    stock_name: String(null != (n = e.name) ? n : ""),
                    zdf: String(null != (r = e.zdf) ? r : ""),
                  });
                })
              : [],
          });
        })
      : [];
  },
  A = function (e) {
    var n, r, o, i, s, a, l, u;
    if (!e) return e;
    var m,
      p = e.data && "object" == t(e.data) ? e.data : e,
      h = c({}, e),
      f =
        ((m =
          null != (o = null != (n = p.speech_info) ? n : p.audio_info)
            ? o
            : null == (r = p.news_info)
            ? void 0
            : r.audio_info),
        Array.isArray(m)
          ? m.map(function (e) {
              var t, n, r, o, i;
              return d(c({}, e), {
                model: Number(null != (t = e.model) ? t : 0),
                model_name: String(null != (n = e.model_name) ? n : ""),
                play_time: Number(null != (r = e.play_time) ? r : 0),
                play_url: String(null != (o = e.play_url) ? o : ""),
                time_mark: String(null != (i = e.time_mark) ? i : ""),
              });
            })
          : []),
      g = (function (e) {
        var n, r, o, i, s, a, l, u, m, p, h, f, g, _, w;
        if (!e) return e;
        var v = c({}, e);
        return d(c({}, v), {
          news_id: String(
            null != (r = null != (n = e.news_id) ? n : e.id) ? r : ""
          ),
          title: String(null != (o = e.title) ? o : ""),
          source: String(null != (i = e.source) ? i : ""),
          news_type: Number(null != (s = e.news_type) ? s : 0),
          is_deleted: Number(null != (a = e.is_deleted) ? a : 0),
          data_source: Number(null != (l = e.data_source) ? l : 0),
          publish_time: Number(null != (u = e.publish_time) ? u : 0),
          comment_status: Number(null != (m = e.comment_status) ? m : 0),
          commentid: String(null != (p = e.commentid) ? p : ""),
          cont_type: Number(null != (h = e.cont_type) ? h : 0),
          content: d(c({}, e.content), {
            data: Array.isArray(null == (f = e.content) ? void 0 : f.data)
              ? e.content.data.map(function (e) {
                  var t, n, r, o, i, s, a, l, u, m, p, h;
                  return d(c({}, e), {
                    type: String(null != (t = e.type) ? t : ""),
                    desc: String(null != (n = e.desc) ? n : ""),
                    tag: String(null != (r = e.tag) ? r : ""),
                    height: String(null != (o = e.height) ? o : ""),
                    width: String(null != (i = e.width) ? i : ""),
                    url: String(null != (s = e.url) ? s : ""),
                    vid: String(null != (a = e.vid) ? a : ""),
                    duration: String(null != (l = e.duration) ? l : ""),
                    link: String(null != (u = e.link) ? u : ""),
                    id: String(null != (m = e.id) ? m : ""),
                    comment: String(null != (p = e.comment) ? p : ""),
                    module_id: String(null != (h = e.module_id) ? h : ""),
                  });
                })
              : [],
          }),
          publish_status: Number(null != (g = e.publish_status) ? g : 0),
          footernote: Array.isArray(e.footernote)
            ? e.footernote.map(function (e) {
                return String(null != e ? e : "");
              })
            : [],
          summary: String(null != (_ = e.summary) ? _ : ""),
          url: String(null != (w = e.url) ? w : ""),
          relate_stocks: Array.isArray(e.relate_stocks)
            ? e.relate_stocks.map(function (e) {
                var t, n;
                return d(c({}, e), {
                  stock_code: String(null != (t = e.symbol) ? t : ""),
                  stock_name: String(null != (n = e.name) ? n : ""),
                });
              })
            : [],
          stock_orders:
            e.stock_orders && "object" == t(e.stock_orders)
              ? c({}, e.stock_orders)
              : {},
        });
      })(p.news_info);
    return d(c({}, h), {
      code: Number(null != (s = null != (i = e.code) ? i : e.retcode) ? s : -1),
      msg: String(null != (l = null != (a = e.msg) ? a : e.retmsg) ? l : ""),
      news_info: g ? d(c({}, g), { audio_info: f }) : g,
      summary_stocks: x(p.summary_stocks),
      req_time: Number(null != (u = p.req_time) ? u : 0),
      news_stocks: I(p.news_stocks),
    });
  },
  C = new p.HQBridge(),
  N = {
    components: {
      MorningReportCard: function () {
        return "../../reportSbg/@tencent/stock-morning-report/morning-report-card.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLW1vcm5pbmctcmVwb3J0L21vcm5pbmctcmVwb3J0LWNhcmQudnVl;
          }
        );
      },
      MorningReportComList: function () {
        return "../../newsSbg/@tencent/stock-sq/src/source/MorningReportComList/index.js";
      },
      shareLayer: function () {
        return "../components/shareLayer.js";
      },
      navigatorBar: function () {
        return "../components/navBar.js";
      },
      GlobalCurtainAdv: function () {
        return "../../asyncCom/@tencent/st-act-premotes/src/components/delivery/GlobalCurtainAdv/wzqmp.js";
      },
      BottomBanner: function () {
        return "../../asyncCom/@tencent/st-act-premotes/src/components/delivery/GlobalBottomBanner/index.js";
      },
      Skeleton: function () {
        return "./skeleton/skeleton.js";
      },
      EmptyNews: function () {
        return "../../newsCon/utils/empty.js";
      },
      EmptyQuote: function () {
        return "../../quote/components/empty.js";
      },
      NavBar: function () {
        return "../../asyncCom/components/navBar/index.js";
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
      HalfEditor: function () {
        return "../../halfScreenEditor/@tencent/stock-halfscreen-editor/components/halfscreen-editor.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhhbGZzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvaGFsZnNjcmVlbi1lZGl0b3IudnVl;
          }
        );
      },
    },
    mixins: [f.deliveryMixin],
    setup: function (t, n) {
      var r = this,
        o = p.getCurrentInstance().proxy || p.getCurrentInstance(),
        i = "morning",
        s = h.useUserProtocol(),
        a = s.didAgreeUserAgreement,
        l = s.subUserAgreementStatus,
        u = s.unsubUserAgreementStatus;
      p.provide("didAgreeUserAgreement", a),
        p.provide("onCheckUserAgreementStatus", function () {
          var e, t;
          null ==
            (t =
              null == (e = p.StockBridge.privacyAgreement)
                ? void 0
                : e.check) || t.call(e).catch(function () {});
        }),
        p.provide("hqBridge", C),
        p.provide("stockBridge", p.StockBridge),
        p.provide("getUserInfo", function () {
          return new Promise(function (t, n) {
            return m(
              r,
              null,
              e().mark(function r() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            p.userinfo.get(!0, function (e) {
                              t(e);
                            })
                          );
                        case 3:
                          e.next = 8;
                          break;
                        case 5:
                          (e.prev = 5), (e.t0 = e.catch(0)), n(e.t0);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 5]]
                );
              })
            );
          });
        });
      var d = y.useHalfEditor(o, t, n, i, {
        postSuccessFunc: function () {
          o.updateComList({ refreshTapPostion: !1 });
        },
      });
      return c(
        {
          pageType: i,
          didAgreeUserAgreement: a,
          subUserAgreementStatus: l,
          unsubUserAgreementStatus: u,
        },
        d
      );
    },
    data: function () {
      var e, t;
      return {
        newsId: null,
        showError: !1,
        url: "",
        resUrl: "",
        showCoverView: !0,
        morningPopupReadyDisplay: !1,
        shareFlag: !1,
        rssItem: null,
        loaded: !1,
        isDataReady: !1,
        mediaInfo: {},
        mediaInfoAll: {},
        adInfo: null,
        rmzb: null,
        detailInfo: {},
        speechInfo: null,
        originalData: {},
        xgInfo: null,
        hideCommentFlag: !1,
        userinfo: {},
        isAutoSubscribe: !1,
        gear:
          (
            (p.wx$1.getWindowInfo && p.wx$1.getWindowInfo()) ||
            p.wx$1.getSystemInfoSync()
          ).windowWidth > 400,
        anchorTitle: null,
        showShareGuide: !1,
        pageScrollTop: 0,
        zxtxShowStatus: !1,
        preloadNewsCon: !1,
        preloadQuote: !1,
        showSkeleton: !0,
        queryData: {},
        skin: p.wx$1.getStorageSync("user/skin") || "white",
        isPC:
          (null ==
          (t = null == (e = getApp().globalData.detect) ? void 0 : e.env)
            ? void 0
            : t.IS_PCWEIXIN) || !1,
        profilePopParams: null,
      };
    },
    computed: {
      enableComment: function () {
        var e;
        return (
          1 !== (null == (e = this.detailInfo) ? void 0 : e.comment_status)
        );
      },
      isShowComment: function () {
        var e;
        return null == (e = this.detailInfo) ? void 0 : e.id;
      },
      showReplyBar: function () {
        return this.rssItem && !this.hideCommentFlag;
      },
      newsIdValid: function () {
        return this.newsId && "morning_report" !== this.newsId;
      },
      headerAlpha: function () {
        if (this.pageScrollTop > 0) {
          return this.pageScrollTop <= 150 ? this.pageScrollTop / 150 : 1;
        }
        return 0;
      },
    },
    onLoad: function (t) {
      return m(
        this,
        null,
        e().mark(function n() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (this.shareFlag =
                      1 == +t.__share_flag__ ||
                      1 == +t.__menu_flag__ ||
                      1 == +t.__push_flag__),
                      (this.hideCommentFlag = "0" === t.__comment_flag__),
                      (this.newsId = t.id),
                      (this.anchorTitle = t.anchorTitle),
                      (this.isAutoSubscribe = 1 == +t.__subscribe_flag__),
                      (this.queryData = t),
                      this.getAuth(),
                      this.getSnpData(),
                      this.onZxtxStatusChange(),
                      this.subUserAgreementStatus();
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            n,
            this
          );
        })
      );
    },
    onUnload: function () {
      this.unsubUserAgreementStatus();
    },
    onShareAppMessage: function () {
      return m(
        this,
        null,
        e().mark(function t() {
          var n, r, o, i;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (p.Request.reportMTAData({
                        eventName: "news.morning_report.share_wx_click",
                        newsid: this.newsId,
                        report_info: this.reportInfo,
                      }),
                      this.onHideShareGuide(),
                      (n = { newsid: this.newsId }),
                      this.reportInfo &&
                        (n = d(c({}, n), { report_info: this.reportInfo })),
                      (r = {
                        title: "你的好友邀请你一起看微证券早报",
                        mtaParams: n,
                      }),
                      (e.prev = 4),
                      this.isPC)
                    ) {
                      e.next = 13;
                      break;
                    }
                    return (
                      p.wx$1.showLoading({ title: "" }),
                      (e.next = 9),
                      this.getShareSnapshot()
                    );
                  case 9:
                    (o = e.sent),
                      (i = (o || {}).tempFilePath),
                      (r = d(c({}, r), { imageUrl: i }));
                  case 13:
                    e.next = 17;
                    break;
                  case 15:
                    (e.prev = 15), (e.t0 = e.catch(4));
                  case 17:
                    return (e.prev = 17), p.wx$1.hideLoading(), e.finish(17);
                  case 20:
                    return e.abrupt("return", r);
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this,
            [[4, 15, 17, 20]]
          );
        })
      );
    },
    onShareTimeline: function () {
      p.Request.reportMTAData({
        eventName: "news.morning_report.share_circle_click",
        newsid: this.newsId,
      }),
        this.onHideShareGuide();
      var e = "你的好友邀请你一起看微证券早报";
      if (this.detailInfo && this.detailInfo.publish_time) {
        var t = new Date(1e3 * this.detailInfo.publish_time);
        e = ""
          .concat(e, " | ")
          .concat("0".concat(t.getMonth() + 1).slice(-2))
          .concat("0".concat(t.getDate()).slice(-2), "期");
      }
      return {
        title: e,
        path: "/pages/report/morning/main",
        query: "id=".concat(
          this.newsId,
          "&articleStyle=card&subtype=morningreportcard"
        ),
        imageUrl:
          "https://st.gtimg.com/design/6b7cc557c21235fa7bbe907d09f66762.png",
        mtaParams: { newsid: this.newsId },
      };
    },
    onShow: function () {
      var e = this;
      (this.needRefreshComList || this.needRefreshComListAll) &&
        (this.updateComList({ refreshTapPostion: !this.needRefreshComListAll }),
        (this.needRefreshComList = !1),
        (this.needRefreshComListAll = !1)),
        this.loaded &&
          p.nextTick$1(function () {
            var t, n, r, o;
            try {
              e.needRefreshSnpData &&
                ((e.needRefreshSnpData = !1),
                null ==
                  (n = null == (t = e.$refs) ? void 0 : t.morningReportCard) ||
                  n.requestStockIsInPortfolio()),
                null ==
                  (o = null == (r = e.$refs) ? void 0 : r.morningReportCard) ||
                  o.mpOnShow();
            } catch (e) {}
          }),
        this.onShowHalfEditor(this);
    },
    onHide: function () {
      var e = this;
      (this.needRefreshComList = !0),
        (this.needRefreshSnpData = !0),
        this.loaded &&
          p.nextTick$1(function () {
            var t, n;
            try {
              null ==
                (n = null == (t = e.$refs) ? void 0 : t.morningReportCard) ||
                n.mpOnHide();
            } catch (e) {}
          }),
        this.onHideHalfEditor(this);
    },
    onReachBottom: function () {
      var e = this;
      this.comListDataReady &&
        p.nextTick$1(function () {
          var t, n;
          try {
            null == (n = null == (t = e.$refs) ? void 0 : t.morningComList) ||
              n.mpOnLoadMore();
          } catch (e) {}
        });
    },
    onPageScroll: function (e) {
      var t,
        n,
        r = e.scrollTop,
        o = void 0 === r ? 0 : r;
      if (((this.pageScrollTop = o), this.loaded)) {
        var i = e.scrollTop,
          s = void 0 === i ? 0 : i;
        this.pageScrollTop = s;
        try {
          null ==
            (n = null == (t = this.$refs) ? void 0 : t.morningReportCard) ||
            n.mpScroll(e);
        } catch (e) {}
      }
    },
    methods: {
      getAuth: function () {
        var e = p.login.getLoginInfo() || {},
          t = e.qluin,
          n = e.qlskey;
        t &&
          n &&
          (this.userinfo = { qlskey: n, qluin: t, openid: t, fskey: n });
      },
      getSnpData: function () {
        var e;
        (e =
          "morning_report" === this.newsId
            ? "https://snp.tenpay.com/snpapi/marketReportService/getPreMarketLatestReport"
            : "https://snp.tenpay.com/snpapi/marketReportService/getPreMarketReportDetails"),
          this.sendSnpDetailRequest(e);
      },
      sendSnpDetailRequest: function (t) {
        return m(
          this,
          null,
          e().mark(function n() {
            var r, o, i, s, a, l, u, c, d, h, f;
            return e().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        p.wx$1.showNavigationBarLoading(),
                        (this.showError = !1),
                        this.rssItem || (this.showSkeleton = !0),
                        (r = "morning_report" === this.newsId),
                        (n.prev = 2),
                        (o = {}),
                        (n.next = 6),
                        g.isNewsGrayUser(
                          r
                            ? "queryPreMarketLatestReport"
                            : "queryPreMarketReportDetails"
                        )
                      );
                    case 6:
                      if (!n.sent) {
                        n.next = 19;
                        break;
                      }
                      if (!r) {
                        n.next = 13;
                        break;
                      }
                      return (
                        (n.next = 10),
                        (function () {
                          return m(this, arguments, function () {
                            var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                            return e().mark(function n() {
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt(
                                        "return",
                                        g.newsRequest(
                                          "/zxg/news/daily_report/query_pre_market_latest_report",
                                          t
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, n);
                            })();
                          });
                        })({ news_id: this.newsId })
                      );
                    case 10:
                      (n.t0 = n.sent), (n.next = 16);
                      break;
                    case 13:
                      return (
                        (n.next = 15),
                        (function (t) {
                          return m(
                            this,
                            null,
                            e().mark(function n() {
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt(
                                        "return",
                                        g.newsRequest(
                                          "/zxg/news/daily_report/query_pre_market_report_details",
                                          t
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, n);
                            })
                          );
                        })({ news_id: this.newsId })
                      );
                    case 15:
                      n.t0 = n.sent;
                    case 16:
                      (o = n.t0), (n.next = 27);
                      break;
                    case 19:
                      return (
                        (i = (function () {
                          var e = "zxg_xcx",
                            t = new Date().getTime(),
                            n = Math.floor(Math.random() * Math.floor(1e4)),
                            r = p.md5Module(
                              e + "68cae00479351606086e78d754042961" + n + t
                            );
                          return {
                            zappid: e,
                            sign: r,
                            nonce: n,
                            queryStr: "zappid="
                              .concat(e, "&sign=")
                              .concat(r, "&nonce=")
                              .concat(n, "&timestamp=")
                              .concat(t),
                          };
                        })()),
                        "101011110110000000000010010011",
                        (s = ""),
                        this.userinfo &&
                          ((a = this.userinfo),
                          (l = a.appid),
                          (u = a.openid),
                          (c = a.fskey),
                          (d = { appid: l, openid: u, fskey: c, wx_openid: u }),
                          (d = Object.keys(d).map(function (e) {
                            return "".concat(e, "=").concat(d[e]);
                          })),
                          (s = d.length > 0 ? "&".concat(d.join("&")) : "")),
                        (h = ""
                          .concat(t, "?filter=0&news_id=")
                          .concat(this.newsId, "&")
                          .concat(i.queryStr, "&reserve=")
                          .concat(parseInt("101011110110000000000010010011", 2))
                          .concat(s)),
                        (n.next = 25),
                        p.StockBridge.request(h, "GET", {})
                      );
                    case 25:
                      (f = n.sent), (o = r ? A(f) : k(f));
                    case 27:
                      (null == o ? void 0 : o.news_info) &&
                        !o.news_info.id &&
                        o.news_info.news_id &&
                        (o.news_info.id = o.news_info.news_id),
                        this.processSnpData(o),
                        (n.next = 33);
                      break;
                    case 30:
                      (n.prev = 30),
                        (n.t1 = n.catch(2)),
                        (this.errMsg = n.t1.msg),
                        (this.showError = !0),
                        (this.showSkeleton = !1);
                    case 33:
                      return (
                        (n.prev = 33),
                        p.wx$1.hideNavigationBarLoading(),
                        n.finish(33)
                      );
                    case 36:
                      this.rssItem && (this.isDataReady = !0);
                    case 37:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this,
              [[2, 30, 33, 36]]
            );
          })
        );
      },
      processSnpData: function (e) {
        var t;
        if (e && ("0" === e.retcode || 0 === e.code)) {
          var n = e,
            r = n.news_info;
          (this.detailInfo = r),
            (this.rmzb = n.rmzb),
            (this.mediaInfoAll = n.media_info_all),
            (this.mediaInfo = n.media_info || null),
            (this.speechInfo = (
              null == (t = null == r ? void 0 : r.audio_info)
                ? void 0
                : t.length
            )
              ? r.audio_info
              : null),
            (this.xgInfo = n.xg_info),
            (this.adInfo = n.adinfo),
            (this.rssItem = r),
            (this.rssItem.summaryStocks = n.summary_stocks || []),
            (this.rssItem.news_stocks = n.news_stocks || []),
            (this.rssItem.ai_podcast = !!n.ai_podcast),
            (this.originalData = this.rssItem),
            (this.media_info = e.media_info || null),
            (this.errMsg = ""),
            (this.showError = !1),
            this.speechInfo || this.getSpeechInfo(),
            this.newsIdValid || (this.newsId = this.detailInfo.id);
        }
        this.rssItem ||
          ((this.errMsg = e.retmsg || ""),
          (this.showError = !0),
          (this.showSkeleton = !1));
      },
      getSpeechInfo: function () {
        return m(
          this,
          null,
          e().mark(function t() {
            var n, r, o, i, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (this.speechInfo = null),
                        (e.prev = 1),
                        (r = null),
                        (e.next = 5),
                        g.isNewsGrayUser("queryAudioList")
                      );
                    case 5:
                      if (!e.sent) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (e.next = 8),
                        _.queryAudioList({ news_ids: this.newsId })
                      );
                    case 8:
                      (r = e.sent), (e.next = 17);
                      break;
                    case 11:
                      return (
                        (o = (function () {
                          var e = "zxg_xcx",
                            t = Math.floor(Math.random() * Math.floor(1e4)),
                            n = p.md5Module(
                              e + "68cae00479351606086e78d754042961" + t
                            );
                          return {
                            zappid: e,
                            sign: n,
                            nonce: t,
                            queryStr: "zappid="
                              .concat(e, "&sign=")
                              .concat(n, "&nonce=")
                              .concat(t),
                          };
                        })()),
                        (i =
                          "https://snp.tenpay.com/cgi-bin/snpgw_news_speech_list.fcgi?news_ids="
                            .concat(this.newsId, "&")
                            .concat(o.queryStr)),
                        (e.next = 15),
                        p.StockBridge.request(i, "GET", {})
                      );
                    case 15:
                      (s = e.sent), (r = _.adaptQueryAudioListResp(s));
                    case 17:
                      0 == +r.code &&
                        Array.isArray(r.audio_list) &&
                        (null == (n = r.audio_list[0])
                          ? void 0
                          : n.audio_info) &&
                        (this.speechInfo = r.audio_list[0].audio_info),
                        (e.next = 22);
                      break;
                    case 20:
                      (e.prev = 20), (e.t0 = e.catch(1));
                    case 22:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[1, 20]]
            );
          })
        );
      },
      commentReport: function (e) {
        if ("string" == typeof e) p.Request.reportMTAData({ eventName: e });
        else if ("object" == t(e) && (null == e ? void 0 : e.eventName)) {
          var n = e.eventName,
            r = e.data,
            o = void 0 === r ? {} : r;
          p.Request.reportMTAData(c({ eventName: n }, o));
        }
      },
      goEdit: function () {
        var e = this.detailInfo.id;
        this.openEditor({ id: e, type: "video" }),
          (this.needRefreshComListAll = !0);
      },
      updateComList: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        setTimeout(function () {
          var n, r;
          try {
            null == (r = null == (n = e.$refs) ? void 0 : n.morningComList) ||
              r.updateComList(t);
          } catch (e) {}
        }, 300);
      },
      dataReady: function () {
        var e = this;
        (this.showSkeleton = !1),
          setTimeout(function () {
            (e.loaded = !0), e.preloadRelatedSubpackages();
          }, 300);
      },
      preloadRelatedSubpackages: function () {
        var e = this;
        (this.preloadNewsCon = !0),
          setTimeout(function () {
            e.preloadQuote = !0;
          }, 500);
      },
      mpScrollTop: function (e) {
        if (e) {
          var t = this.pageScrollTop || 0;
          p.wx$1.pageScrollTo({ scrollTop: e + t, duration: 300 });
        }
      },
      comListDataReady: function () {
        this.comListDataReady = !0;
      },
      onShare: function (e) {
        "circle" === e && (this.showShareGuide = !0);
      },
      onHideShareGuide: function () {
        this.showShareGuide = !1;
      },
      onZxtxStatusChange: function () {
        var e,
          t,
          n = this;
        null == (e = p.StockBridge) ||
          e.busOn("news-mreport-zxtx-show", function () {
            n.zxtxShowStatus = !0;
          }),
          null == (t = p.StockBridge) ||
            t.busOn("news-mreport-zxtx-hide", function () {
              n.zxtxShowStatus = !1;
            });
      },
      getShareSnapshot: function () {
        return m(
          this,
          null,
          e().mark(function t() {
            var n, r, o, i, s, a, l, u, c, d, m, h, f, g, _, y, S, b, k;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      for (
                        o = w.getRenderRows(
                          this.rssItem.title.split("|")[1],
                          449,
                          2,
                          29,
                          600
                        ),
                          i = [
                            {
                              type: "image",
                              url: "https://st.gtimg.com/design/24852ceac7432f507fb090667742202e.png?t=".concat(
                                Date.parse(new Date().toString())
                              ),
                              x: 0,
                              y: 0,
                            },
                          ],
                          s = 110,
                          a = 0;
                        a < o.length;
                        a++
                      )
                        (l = o[a]),
                          i.push({
                            type: "text",
                            text: l,
                            x: 15.36,
                            y: s,
                            style: {
                              color: "#262E40",
                              fontSize: 29,
                              fontWeight: "600",
                            },
                          }),
                          (s += 41);
                      if (
                        ((u = "".concat(
                          ((c = 1e3 * this.rssItem.publish_time),
                          p.dayjs(c).format("YYYY年MM月DD日"))
                        )),
                        i.push({
                          type: "text",
                          text: u,
                          x: 15.36,
                          y: 204,
                          style: { color: "#7A8499", fontSize: 17 },
                        }),
                        (d =
                          (null ==
                          (r =
                            null == (n = this.$refs)
                              ? void 0
                              : n.morningReportCard)
                            ? void 0
                            : r.newsData) || {}),
                        (m = d.briefContent),
                        (h =
                          m &&
                          m.find(function (e) {
                            return "盘前要闻" === e.groupName;
                          })))
                      )
                        for (
                          f = h.secondaryDir[0].contentArr,
                            g = f[0].content,
                            _ = g[g.length - 1].text,
                            y = w.getRenderRows(
                              _.startsWith("1、") ? _.substring(2) : _,
                              389,
                              3,
                              21
                            ),
                            S = 320,
                            30,
                            b = 0;
                          b < y.length && b < 2;
                          b++
                        )
                          (k = y[b]),
                            i.push({
                              type: "text",
                              text: k,
                              x: 0 === b ? 60 : 30.72,
                              y: S,
                              style: {
                                color: "#262E40",
                                fontSize: 21,
                                fontWeight: "600",
                              },
                            }),
                            (S += 30);
                      return (e.next = 9), v.OffscreenCanvasImage.draw(i);
                    case 9:
                      return e.abrupt("return", e.sent);
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
      handleGlobalClick: function () {
        return m(
          this,
          null,
          e().mark(function t() {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        1012 !=
                        +(null == (n = this.queryData)
                          ? void 0
                          : n._scene_from_)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (e.next = 4),
                        p.silentSubscribe("ams_cooper_1")
                      );
                    case 4:
                      e.next = 8;
                      break;
                    case 6:
                      (e.prev = 6), (e.t0 = e.catch(1));
                    case 8:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[1, 6]]
            );
          })
        );
      },
      showProfilePop: function (e) {
        this.profilePopParams = e;
      },
      hideProfilePop: function () {
        this.profilePopParams = null;
      },
    },
  };
Array ||
  (
    p.resolveComponent("mp-privacy-dialog") +
    p.resolveComponent("stock-privacy-dialog") +
    p.resolveComponent("Skeleton") +
    p.resolveComponent("MorningReportCard") +
    p.resolveComponent("MorningReportComList") +
    p.resolveComponent("navigator-bar") +
    p.resolveComponent("share-layer") +
    p.resolveComponent("GlobalCurtainAdv") +
    p.resolveComponent("BottomBanner") +
    p.resolveComponent("EmptyNews") +
    p.resolveComponent("EmptyQuote") +
    p.resolveComponent("NavBar") +
    p.resolveComponent("ThirteenAnniversaryTask") +
    p.resolveComponent("profilePop") +
    p.resolveComponent("HalfEditor")
  )();
var R = p._export_sfc(N, [
  [
    "render",
    function (e, t, n, r, o, i) {
      return p.e(
        { a: e.rootFontSize, b: o.showSkeleton },
        (o.showSkeleton, {}),
        { c: o.rssItem },
        o.rssItem
          ? {
              d: p.sr("morningReportCard", "cc828023-3"),
              e: p.o(i.dataReady, 316),
              f: p.o(i.mpScrollTop, 317),
              g: p.o(i.onShare, 318),
              h: p.p({
                id: "morningReportCard",
                data: o.rssItem,
                rmzb: o.rmzb,
                "media-info": o.mediaInfo,
                theme: e.theme,
                pathname: "",
                "open-app": 1,
                "speech-info": o.speechInfo,
                "fluc-show-mode": "redup",
                "wzq-config": {},
                "xg-info": o.xgInfo,
                "media-info-all": o.mediaInfoAll,
                "translate-status": !1,
                "is-brief": !0,
                "has-subscribed": e.hasSubscribed,
                "show-follow-guide": e.showFollowGuide,
                "news-id": o.newsId,
                "anchor-title": o.anchorTitle,
                "is-auto-subscribe": o.isAutoSubscribe,
              }),
            }
          : {},
        {
          i:
            !o.showError &&
            i.enableComment &&
            o.rssItem &&
            o.loaded &&
            i.newsIdValid,
        },
        !o.showError &&
          i.enableComment &&
          o.rssItem &&
          o.loaded &&
          i.newsIdValid
          ? {
              j: p.sr("morningComList", "cc828023-4"),
              k: p.o(i.goEdit, 319),
              l: p.o(i.commentReport, 320),
              m: p.o(i.comListDataReady, 321),
              n: p.o(i.showProfilePop, 322),
              o: p.p({
                "page-type": r.pageType,
                "is-show-comment": i.isShowComment,
                "detail-info": o.detailInfo,
                "enable-comment": i.enableComment,
                "show-reply-bar": i.showReplyBar,
                userinfo: o.userinfo,
                "news-id": o.newsId,
                gear: o.gear,
              }),
            }
          : {},
        { p: !o.showError && o.rssItem && o.loaded && i.newsIdValid },
        (!o.showError && o.rssItem && o.loaded && i.newsIdValid, {}),
        { q: o.showError },
        o.showError
          ? {
              r: p.t(e.errMsg ? "，" + e.errMsg : ""),
              s: p.o(function (e) {
                return i.getSnpData();
              }, 323),
            }
          : {},
        { t: !o.isPC },
        o.isPC
          ? {}
          : {
              v: p.p({
                id: "navBar",
                title: "微证券早报",
                "header-alpha": i.headerAlpha,
              }),
            },
        { w: o.showShareGuide },
        o.showShareGuide ? { x: p.o(i.onHideShareGuide, 324) } : {},
        { y: o.loaded },
        o.loaded
          ? p.e(
              {
                z:
                  !o.zxtxShowStatus &&
                  e.premoteMixin &&
                  e.premoteMixin.GlobalCurtainAdv,
              },
              !o.zxtxShowStatus &&
                e.premoteMixin &&
                e.premoteMixin.GlobalCurtainAdv
                ? { A: p.p({ premote: e.premoteMixin.GlobalCurtainAdv }) }
                : {}
            )
          : {},
        { B: o.loaded },
        o.loaded
          ? p.e(
              {
                C:
                  !o.zxtxShowStatus &&
                  e.premoteMixin &&
                  e.premoteMixin.GlobalBottomBanner,
              },
              !o.zxtxShowStatus &&
                e.premoteMixin &&
                e.premoteMixin.GlobalBottomBanner
                ? {
                    D: p.p({
                      premote: e.premoteMixin.GlobalBottomBanner,
                      "has-bottom-bar": !0,
                    }),
                  }
                : {}
            )
          : {},
        { E: o.preloadNewsCon },
        (o.preloadNewsCon, {}),
        { F: o.preloadQuote },
        (o.preloadQuote, {}),
        {
          G: p.sr("_navBar", "cc828023-11"),
          H: p.p({ mode: "guide" }),
          I: o.profilePopParams,
        },
        o.profilePopParams
          ? {
              J: p.o(i.hideProfilePop, 325),
              K: p.p({
                userStateData: o.profilePopParams.userStateData,
                content: o.profilePopParams.content,
                defaultHeadImage: o.profilePopParams.defaultHeadImage,
                defaultNickname: o.profilePopParams.defaultNickname,
                needBottomInset: !0,
              }),
            }
          : {},
        { L: e.isShowHalfEditor },
        e.isShowHalfEditor
          ? {
              M: p.sr("halfEditor", "cc828023-14"),
              N: p.o(e.hideHalfEditor, 326),
              O: p.p({ "query-editor": e.queryHalfEditor }),
            }
          : {},
        {
          P: p.n(o.shareFlag ? "sharePage" : ""),
          Q: p.n("black" === o.skin ? "black" : ""),
          R: o.skin,
          S: p.o(function () {
            return (
              i.handleGlobalClick && i.handleGlobalClick.apply(i, arguments)
            );
          }, 327),
        }
      );
    },
  ],
  ["__scopeId", "data-v-cc828023"],
]);
(N.__runtimeHooks = 7), wx.createPage(R);
