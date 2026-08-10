require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/typeof"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  i = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = function (e, t) {
    for (var s in t || (t = {})) o.call(t, s) && c(e, s, t[s]);
    if (a) {
      var i,
        r = n(a(t));
      try {
        for (r.s(); !(i = r.n()).done; ) {
          s = i.value;
          l.call(t, s) && c(e, s, t[s]);
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    return e;
  },
  h = function (e, t) {
    return i(e, r(t));
  },
  d = function (e, t, n) {
    return new Promise(function (s, i) {
      var r = function (e) {
          try {
            o(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          try {
            o(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        o = function (e) {
          return e.done ? s(e.value) : Promise.resolve(e.value).then(r, a);
        };
      o((n = n.apply(e, t)).next());
    });
  },
  p = require("../../../../../../common/vendor.js"),
  m = require("../../../stock-news-core/utils/tools.js"),
  f = require("../../../stock-news-base/service/news/gray.js"),
  w = require("../../../stock-news-base/service/news/apis/queryNewsInfo.js"),
  g = require("../../../stock-news-base/service/news/apis/queryAudioList.js"),
  _ = require("../../../stock-news-core/components/status/config.js"),
  v = require("../../../stock-news-core/utils/request/index.js"),
  S = require("../../../stock-news-core/utils/bus.js"),
  y = require("../../../stock-news-core/utils/shy/index.js"),
  T = require("../../../stock-news-sdk/index.js"),
  E = require("../../../stock-news-core/utils/report.js"),
  b = require("../../../../js-cookie/src/js.cookie.js"),
  I = {
    NORMAL_NEWS_TYPE: 1,
    OM_NEWS_TYPE: 2,
    LINK_NEWS_TYPE: 3,
    THEME_NEWS_TYPE: 4,
    IMGS_NEWS_TYPE: 5,
    VIDEO_NEWS_TYPE: 6,
    ST_VD_NEWS_TYPE: 7,
    MN_VD_NEWS_TYPE: 8,
    EVENT_TYPE: 10,
    EVENT_GROUP_TYPE: 11,
    AD_TYPE: 12,
    XUANGU_TYPE: 13,
    LIVE_TYPE: 14,
    FLASH_NEWS_TYPE: 15,
    GANHUO_REPORT_TYPE: 16,
    CHARGE_NEWS_TYPE: 17,
    COLUMN_TYPE: 18,
    PM_GANHUO_REPORT_TYPE: 19,
    ROW_FLASH_TYPE: 20,
  },
  k = { NORMAL: 1, REPORT: 2, ZUTU: 3, WEIXIN: 4, AIREPORT: 17 },
  N = {
    name: "news-body",
    components: {
      NewsWeixin: null,
      NewsNormal: function () {
        return "./NewsNormal.js";
      },
      NewsReport: function () {
        return "./NewsReport.js";
      },
      Translate: function () {
        return "./components/Translate/index.js";
      },
      TextSelectionOverlay: function () {
        return "./components/TextSelectionOverlay/mp.js";
      },
      NewsStatus: function () {
        return "../../../../../newsSbg/@tencent/stock-news-core/components/status/index.js";
      },
      NewsProspect: null,
      HalfScreenAiEntry: function () {
        return "../../../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
    },
    provide: function () {
      return { isFullTeach: this.isFullTeach, isSharePage: this.isSharePage };
    },
    props: {
      theme: { type: String, default: "blue" },
      originalId: { type: String, default: "" },
      flucShowMode: { type: String, default: "redup" },
      auto_open: { type: String, default: "" },
      stockName: { type: String, default: "" },
      click_time: { type: Number, default: 0 },
      isWeb: { type: Boolean, default: !1 },
      pathname: { type: String, default: "" },
      speech_ids: { type: String, default: "" },
      isWZQ: { type: Boolean, default: !1 },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            stat: { click: function () {} },
            Helper: { navigateTo: function () {} },
          };
        },
      },
      userinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isProspect: { default: !1 },
      isFullTeach: { default: !1 },
      isSharePage: { default: !1 },
      isHstabShow: { default: !1 },
      isAiSummaryExpand: { default: !1 },
    },
    inject: {
      requestFormat: { value: "requestFormat", default: null },
      mainPathReporter: { default: null },
    },
    data: function () {
      return {
        data: {},
        commonData: {},
        NEWS_TEMPLATE_TYPE: k,
        NEWS_TYPE: I,
        newsTemplate: "",
        mediaInfo: {},
        mediaInfoAll: {},
        adInfo: null,
        showError: !1,
        rssItem: null,
        rmzb: null,
        speechInfo: null,
        isConnected: !0,
        hasTranslation: 0,
        translateStatus: !1,
        translationData: {},
        originalData: {},
        xgInfo: null,
        watchList: null,
        dataReady: !1,
        newsId: this.normalizeNewsId(this.originalId),
        skipSpeech: !1,
        remoteTranslateData: null,
        isMP: !0,
        busEvents: {},
        isRestricted: !1,
        aiDialogEnable: !0,
        showAiDialog: !1,
        aiQuestionObj: null,
        aiSseServeType: "newsSummaryServerHttp",
        aiReadingContent: {},
        aiQuestionIndex: 0,
      };
    },
    watch: {
      originalId: function (e, t) {
        (this.newsId = this.normalizeNewsId(e)),
          t && e && t !== e && ((this.rssItem = null), this.init());
      },
    },
    computed: {
      errorStatusType: function () {
        return this.isConnected
          ? this.isRestricted
            ? _.NEWS_STATUS_TYPE.ERROR_RESTRICTED
            : _.NEWS_STATUS_TYPE.ERROR_DELETED
          : _.NEWS_STATUS_TYPE.ERROR_NETWORK;
      },
      isDisclosure: function () {
        return /^(no)[s,u,k,j,n,b]/.test(this.newsId);
      },
      isResearch: function () {
        return /^(re)[s,u,k,j,n]/.test(this.newsId);
      },
      isNews: function () {
        return (
          /^SN/.test(this.newsId) ||
          /^NW/.test(this.newsId) ||
          /^ne[s,u,k,j,n,w]SN/.test(this.newsId)
        );
      },
      isFlash: function () {
        return /^FN/.test(this.newsId);
      },
      showTranslation: function () {
        return 2 === this.hasTranslation || 1 === this.hasTranslation;
      },
      isForbidForward: function () {
        return this.rssItem && 0 == +this.rssItem.forward_status;
      },
      selectable: function () {
        return p.StockBridge.ENV === p.EnvTypeEnum.SHY_NATIVE || !0;
      },
      textSelectionItems: function () {
        return [
          { key: "askAi", label: "问元宝" },
          { key: "copy", label: "复制" },
          { key: "selectAll", label: "全选" },
          { key: "share", label: "分享" },
          { key: "search", label: "搜索" },
        ].filter(function (e) {
          return "search" !== e.key;
        });
      },
    },
    mounted: function () {
      var e,
        t = this;
      null == (e = this.mainPathReporter) || e.check("news-mounted"),
        this.newsId
          ? (this.init(),
            this.$nextTick(function () {
              t.busOn("accountDom", function () {
                t.$emit("showMiniApply");
              });
            }))
          : y.shy.getUserInfo(function (e) {
              try {
                Object.assign(t.commonData, e);
              } catch (e) {
                E.aegisReportError(e);
              }
              t.newsId && t.init();
            }),
        y.shy.getNetworkStatus(function (e) {
          t.isConnected = e && e.isConnected;
        }),
        y.shy.onNetworkStatusChange(function (e) {}),
        this.reportFullTeachPage(),
        this.busOn("news-ParagraphLongpress", this.onParagraphLongpressBus),
        this.subscribeAiDialogEvents();
    },
    beforeDestroy: function () {
      this.busOff(), this.unsubscribeAiDialogEvents();
    },
    methods: {
      normalizeNewsId: function (e) {
        return e && /^ne[s,u,k,j,n,w]SN/.test(e) ? e.substr(3) : e;
      },
      reportFullTeachPage: function () {
        this.isFullTeach;
      },
      init: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return d(
          this,
          null,
          t().mark(function n() {
            var s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((this.skipSpeech = e),
                        (this.remoteTranslateData = null),
                        (this.isRestricted = !1),
                        !this.newsId)
                      ) {
                        t.next = 23;
                        break;
                      }
                      if (
                        (null == (s = this.mainPathReporter) ||
                          s.check("news-request-start"),
                        (t.prev = 2),
                        this.initTitle(),
                        (this.reserve = this.getReserve()),
                        !this.isDisclosure && !this.isResearch)
                      ) {
                        t.next = 10;
                        break;
                      }
                      return (t.next = 8), this.fetchReportData();
                    case 8:
                      t.next = 18;
                      break;
                    case 10:
                      if (!this.isFlash) {
                        t.next = 15;
                        break;
                      }
                      return (t.next = 13), this.fetchFlashData();
                    case 13:
                      t.next = 18;
                      break;
                    case 15:
                      return (
                        this.isNews ||
                          E.aegisReportError(new Error("错误的资讯类型")),
                        (t.next = 18),
                        this.fetchNewsData()
                      );
                    case 18:
                      t.next = 23;
                      break;
                    case 20:
                      (t.prev = 20),
                        (t.t0 = t.catch(2)),
                        this.handleFetchException(t.t0);
                    case 23:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[2, 20]]
            );
          })
        );
      },
      getSpeechInfo: function () {
        return d(
          this,
          null,
          t().mark(function e() {
            var n, s, i, r;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (this.speechInfo = null),
                        (s = null),
                        (e.prev = 2),
                        (e.next = 5),
                        f.isNewsGrayUser("queryAudioList")
                      );
                    case 5:
                      if (!e.sent) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (e.next = 8),
                        g.queryAudioList({ news_ids: this.newsId })
                      );
                    case 8:
                      (s = e.sent), (e.next = 16);
                      break;
                    case 11:
                      return (
                        (i = m.md5()),
                        (e.next = 14),
                        v.request(
                          "https://snp.tenpay.com/cgi-bin/snpgw_news_speech_list.fcgi?news_ids="
                            .concat(this.newsId, "&")
                            .concat(i.queryStr),
                          {},
                          { method: "get", isShowToast: !1 }
                        )
                      );
                    case 14:
                      (r = e.sent), (s = g.adaptQueryAudioListResp(r));
                    case 16:
                      e.next = 20;
                      break;
                    case 18:
                      (e.prev = 18), (e.t0 = e.catch(2));
                    case 20:
                      s &&
                        0 == +s.code &&
                        Array.isArray(s.audio_list) &&
                        (null == (n = s.audio_list[0])
                          ? void 0
                          : n.audio_info) &&
                        (this.speechInfo = s.audio_list[0].audio_info);
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[2, 18]]
            );
          })
        );
      },
      getReserve: function () {
        return this.isFlash
          ? "10000000010110000000000000110000"
          : "10101011110110000000000010010011";
      },
      fetchReportData: function () {
        return d(
          this,
          null,
          t().mark(function e() {
            var n, s, i, r, a, o;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r =
                          "https://proxy.finance.qq.com/ifzqgtimg/appstock/news/content/content?app=xcx&id=".concat(
                            this.newsId
                          )),
                        (a = null),
                        (e.prev = 2),
                        (e.next = 5),
                        v.request(r, {}, { method: "get", isShowToast: !1 })
                      );
                    case 5:
                      (a = e.sent), (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(2));
                    case 10:
                      (o =
                        null == (n = null == a ? void 0 : a.data)
                          ? void 0
                          : n[0]),
                        a && 0 === a.code && o
                          ? ((this.rssItem = o),
                            (this.originalData = this.rssItem),
                            (this.newsTemplate = k.REPORT),
                            (this.showError = !1),
                            this.processTranslateData(this.rssItem),
                            this.notifyDataReady())
                          : ((this.showError = !0),
                            this.emitErrorDataReady(),
                            a && 0 === a.code && !o
                              ? null == (s = this.mainPathReporter) ||
                                s.check("news-deleted")
                              : null == (i = this.mainPathReporter) ||
                                i.check(
                                  a ? "news-code-error" : "news-request-error"
                                ));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[2, 8]]
            );
          })
        );
      },
      fetchFlashData: function () {
        return d(
          this,
          null,
          t().mark(function e() {
            var n, s, i;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (this.showError = !1),
                        (n = null),
                        (e.next = 4),
                        f.isNewsGrayUser("queryFlashnewsInfo")
                      );
                    case 4:
                      if (!e.sent) {
                        e.next = 16;
                        break;
                      }
                      return (
                        (e.prev = 5),
                        (e.next = 8),
                        (function (e) {
                          return d(
                            this,
                            null,
                            t().mark(function n() {
                              return t().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return t.abrupt(
                                        "return",
                                        f.newsRequest(
                                          "/zxg/news/simple_text/query_flashnews_info",
                                          e
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return t.stop();
                                  }
                              }, n);
                            })
                          );
                        })({
                          news_id: this.newsId,
                          reserve: parseInt(this.reserve, 2),
                        })
                      );
                    case 8:
                      (n = e.sent), (e.next = 14);
                      break;
                    case 11:
                      (e.prev = 11),
                        (e.t0 = e.catch(5)),
                        (n = this.normalizeRequestError(e.t0));
                    case 14:
                      e.next = 29;
                      break;
                    case 16:
                      return (
                        "https://snp.tenpay.com/cgi-bin/snpgw_724_newsinfo.fcgi",
                        m.md5(),
                        this.buildSnpAuthParams(),
                        m.isH5Lite(),
                        (s = {
                          filter: 0,
                          news_id: this.newsId,
                          reserve: parseInt(this.reserve, 2),
                        }),
                        (i = m.gdParamsFormat(s)),
                        (e.prev = 19),
                        (e.next = 22),
                        v.request(
                          "https://snp.tenpay.com/cgi-bin/snpgw_724_newsinfo.fcgi",
                          i,
                          { method: "post", isShowToast: !1, dropConfig: !0 }
                        )
                      );
                    case 22:
                      (n = e.sent), (e.next = 28);
                      break;
                    case 25:
                      (e.prev = 25),
                        (e.t1 = e.catch(19)),
                        (n = this.normalizeRequestError(e.t1));
                    case 28:
                      n = (function (e) {
                        var t,
                          n,
                          s,
                          i,
                          r,
                          a,
                          o,
                          l,
                          c,
                          d,
                          p,
                          m,
                          f,
                          w,
                          g,
                          _,
                          v,
                          S;
                        if (!e) return e;
                        var y = null != (t = e.retcode) ? t : e.code,
                          T = "0" === String(y) || 0 === y,
                          E =
                            null != (s = null != (n = e.data) ? n : e.news_info)
                              ? s
                              : {},
                          b = u({}, e),
                          I = u({}, E),
                          k = (null != (i = E.label_list) ? i : []).map(
                            function (e) {
                              var t, n, s, i, r, a;
                              return h(u({}, e), {
                                label_id: String(
                                  null !=
                                    (n = null != (t = e.id) ? t : e.label_id)
                                    ? n
                                    : ""
                                ),
                                label_name: String(
                                  null !=
                                    (i =
                                      null != (s = e.name) ? s : e.label_name)
                                    ? i
                                    : ""
                                ),
                                label_type: Number(
                                  null !=
                                    (a =
                                      null != (r = e.label_type) ? r : e.type)
                                    ? a
                                    : 0
                                ),
                              });
                            }
                          ),
                          N = (null != (r = E.relate_stocks) ? r : []).map(
                            function (e) {
                              var t, n, s, i, r, a, o, l;
                              return h(u({}, e), {
                                stock_code: String(
                                  null !=
                                    (n =
                                      null != (t = e.symbol) ? t : e.stock_code)
                                    ? n
                                    : ""
                                ),
                                stock_name: String(
                                  null !=
                                    (i =
                                      null != (s = e.name) ? s : e.stock_name)
                                    ? i
                                    : ""
                                ),
                                bk_id: String(null != (r = e.bk_id) ? r : ""),
                                bk_title: String(
                                  null != (a = e.bk_title) ? a : ""
                                ),
                                bk_type: String(
                                  null !=
                                    (l =
                                      null != (o = e.bk_type)
                                        ? o
                                        : e["data-bktype"])
                                    ? l
                                    : ""
                                ),
                              });
                            }
                          ),
                          R =
                            null !=
                            (l =
                              null !=
                              (o =
                                null == (a = e.data) ? void 0 : a.speech_info)
                                ? o
                                : E.speech_info)
                              ? l
                              : [],
                          x = (Array.isArray(R) ? R : []).map(function (e) {
                            var t, n;
                            return {
                              model: 0,
                              model_name: "",
                              play_time: Number(
                                null != (t = e.play_time) ? t : 0
                              ),
                              time_mark: "",
                              play_url: String(
                                null != (n = e.play_url) ? n : ""
                              ),
                            };
                          }),
                          P = E.content,
                          A = String(
                            null != (d = null != (c = E.id) ? c : E.news_id)
                              ? d
                              : ""
                          );
                        return h(u({}, b), {
                          code: T ? 0 : Number(null != y ? y : -1),
                          msg: String(
                            null != (m = null != (p = e.msg) ? p : e.ret_msg)
                              ? m
                              : ""
                          ),
                          news_info: h(u({}, I), {
                            news_id: A,
                            title: String(null != (f = E.title) ? f : ""),
                            publish_time: Number(
                              null != (w = E.publish_time) ? w : 0
                            ),
                            source_media: String(
                              null !=
                                (_ =
                                  null != (g = E.source) ? g : E.source_media)
                                ? _
                                : ""
                            ),
                            is_deleted: Number(
                              null != (v = E.is_deleted) ? v : 0
                            ),
                            comment_status: Number(
                              null != (S = E.comment_status) ? S : 0
                            ),
                            content: P,
                            label_list: k,
                            relate_stocks: N,
                            audio_info: x,
                          }),
                        });
                      })(n);
                    case 29:
                      this.handleSnpResponse(n);
                    case 30:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [
                [5, 11],
                [19, 25],
              ]
            );
          })
        );
      },
      fetchNewsData: function () {
        return d(
          this,
          null,
          t().mark(function e() {
            var n, s, i;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (this.showError = !1),
                        (n = null),
                        (e.next = 4),
                        f.isNewsGrayUser("queryNewsInfo")
                      );
                    case 4:
                      if (!e.sent) {
                        e.next = 16;
                        break;
                      }
                      return (
                        (e.prev = 5),
                        (e.next = 8),
                        w.queryNewsInfo({
                          news_id: this.newsId,
                          reserve: parseInt(this.reserve, 2),
                        })
                      );
                    case 8:
                      (n = e.sent), (e.next = 14);
                      break;
                    case 11:
                      (e.prev = 11),
                        (e.t0 = e.catch(5)),
                        (n = this.normalizeRequestError(e.t0));
                    case 14:
                      e.next = 29;
                      break;
                    case 16:
                      return (
                        "https://snp.tenpay.com/cgi-bin/snpgw_unified_newsinfo.fcgi",
                        m.md5(),
                        this.buildSnpAuthParams(),
                        m.isH5Lite(),
                        (s = {
                          filter: 0,
                          news_id: this.newsId,
                          reserve: parseInt(this.reserve, 2),
                        }),
                        (i = m.gdParamsFormat(s)),
                        (e.prev = 19),
                        (e.next = 22),
                        v.request(
                          "https://snp.tenpay.com/cgi-bin/snpgw_unified_newsinfo.fcgi",
                          i,
                          { method: "post", isShowToast: !1, dropConfig: !0 }
                        )
                      );
                    case 22:
                      (n = e.sent), (e.next = 28);
                      break;
                    case 25:
                      (e.prev = 25),
                        (e.t1 = e.catch(19)),
                        (n = this.normalizeRequestError(e.t1));
                    case 28:
                      n = w.adaptQueryNewsInfoResp(n);
                    case 29:
                      this.handleSnpResponse(n);
                    case 30:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [
                [5, 11],
                [19, 25],
              ]
            );
          })
        );
      },
      normalizeRequestError: function (t) {
        if (!t || "object" != e(t)) return null;
        var n = void 0 !== t.code ? t.code : t.retcode;
        return null == n || -1003 == +n ? null : { retcode: n };
      },
      buildSnpAuthParams: function () {
        var e = {},
          t = "",
          n = {},
          s = "";
        try {
          (e = Object.keys(e).map(function (t) {
            return "".concat(t, "=").concat(e[t]);
          })),
            (n = Object.keys(n).map(function (e) {
              return "".concat(e, "=").concat(n[e]);
            })),
            (t = e.length > 0 ? "&".concat(e.join("&")) : ""),
            (s = n.length > 0 ? "&".concat(n.join("&")) : "");
        } catch (e) {
          E.aegisReportError(e);
        }
        return { loginParamStr: t, vipParamStr: s };
      },
      isRestrictedEnNews: function (e) {
        if (!e) return !1;
        var t = [859210038, 1625308004];
        return t.includes(+e.code) || t.includes(+e.retcode);
      },
      handleSnpResponse: function (e) {
        var t,
          n,
          s,
          i,
          r,
          a,
          o,
          l,
          c,
          d,
          p = this.isRestrictedEnNews(e);
        if (
          !e ||
          (this.isNews && e.news_info && 1 != +e.news_info.publish_status) ||
          (e.news_info && 1 === e.news_info.is_deleted) ||
          p
        )
          return (
            (this.showError = !0),
            (this.isRestricted = p),
            this.emitErrorDataReady(),
            void (e
              ? (p ||
                  null == (t = this.mainPathReporter) ||
                  t.check("news-deleted"),
                null == (n = this.mainPathReporter) || n.check("news-end"))
              : null == (s = this.mainPathReporter) ||
                s.check("news-request-error"))
          );
        if (!e || ("0" !== e.retcode && 0 !== e.code))
          (this.showError = !0),
            this.emitErrorDataReady(),
            null == (d = this.mainPathReporter) || d.check("news-code-error");
        else {
          var m = e,
            f = null == m ? void 0 : m.news_info;
          f && !f.id && f.news_id && (f.id = f.news_id),
            f && !f.commentid && f.comment_id && (f.commentid = f.comment_id),
            (this.mediaInfoAll = null == m ? void 0 : m.media_info),
            (this.mediaInfo = (null == m ? void 0 : m.media_info) || null),
            (this.media_info = (null == m ? void 0 : m.media_info) || null),
            (this.rssItem = f || {}),
            (this.originalData = this.rssItem),
            (this.rmzb = null == m ? void 0 : m.rmzb);
          var w = function (e) {
            return (e || []).map(function (e) {
              var t, n, s, i, r, a;
              return h(u({}, e), {
                symbol:
                  null != (n = null != (t = e.symbol) ? t : e.stock_code)
                    ? n
                    : "",
                name:
                  null != (i = null != (s = e.name) ? s : e.stock_name)
                    ? i
                    : "",
                "data-bktype":
                  null != (a = null != (r = e["data-bktype"]) ? r : e.bk_type)
                    ? a
                    : "",
              });
            });
          };
          if (
            (f &&
              ((f.relate_stocks = w(f.relate_stocks)),
              (f.mention_stocks = w(f.mention_stocks))),
            (this.rssItem.summaryStocks =
              (null == m ? void 0 : m.summary_stocks) || []),
            (this.rssItem.news_stocks =
              (null == m ? void 0 : m.news_stocks) || []),
            (this.rssItem.ai_podcast = !!(null == m ? void 0 : m.ai_podcast)),
            (this.watchList = null == m ? void 0 : m.watch_list),
            this.processTranslateData(f),
            (this.speechInfo = (
              null == (i = null == m ? void 0 : m.speech_info)
                ? void 0
                : i.length
            )
              ? m.speech_info
              : (
                  null == (r = null == m ? void 0 : m.audio_info)
                    ? void 0
                    : r.length
                )
              ? m.audio_info
              : null),
            this.isFlash &&
              (null == (a = null == f ? void 0 : f.audio_info)
                ? void 0
                : a.length) &&
              (this.speechInfo = f.audio_info),
            this.speechInfo || this.skipSpeech || this.getSpeechInfo(),
            (this.xgInfo = null == m ? void 0 : m.xg_info),
            null == (l = null == (o = this.xgInfo) ? void 0 : o.xg_id)
              ? void 0
              : l.length)
          )
            (this.xgInfo.type = "xg"),
              this.wzqConfig.stat.click(
                "xuangu.invest_school.detail_page",
                void 0,
                void 0,
                { newsid: this.newsId }
              );
          (this.adInfo = null == m ? void 0 : m.ad_info),
            (this.newsTemplate =
              15 === (null == (c = this.rssItem) ? void 0 : c.data_source)
                ? k.WEIXIN
                : k.NORMAL),
            (this.showError = !1),
            this.notifyDataReady();
        }
      },
      emitErrorDataReady: function () {
        this.$emit("dataReady", {
          showError: this.showError,
          errorStatusType: this.errorStatusType,
        });
      },
      handleFetchException: function (e) {
        (this.rssItem = []),
          (this.showError = !0),
          this.emitErrorDataReady(),
          E.aegisReportError(e);
      },
      getTranslateData: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = m.md5(),
          n = t.zappid,
          s = t.sign,
          i = t.nonce,
          r = u({ zappid: n, sign: s, nonce: i }, e);
        return (
          (r = p.wx$1
            ? h(u({}, r), {
                openId: p.wx$1.getStorageSync("_qluin"),
                fsKey: p.wx$1.getStorageSync("_qlskey"),
              })
            : h(u({}, r), {
                openId: b.cookie.get("wzq_qluin"),
                fsKey: b.cookie.get("wzq_qlskey"),
              })),
          v.request(
            "https://snp.tenpay.com/cgi-bin/snpgw_news_translation.fcgi",
            r,
            { method: "get", isShowToast: !1 }
          )
        );
      },
      processTranslateData: function (e) {
        this.rssItem &&
          ((this.hasTranslation = e && +e.has_translation),
          (this.translationData = h(u({}, this.rssItem), {
            title: this.rssItem.title_tr,
            summary: this.rssItem.summary_tr,
            footernote: this.rssItem.footernote_tr,
          })),
          this.isFlash || this.isNews
            ? (this.translationData.content = this.rssItem.content_tr)
            : (this.translationData.detail = this.rssItem.content_tr),
          this.showTranslation &&
            (E.report("news.article.translate.exposure", {}),
            this.wzqConfig.stat.click(
              "information.translate.exposure",
              void 0,
              void 0,
              { newsid: this.newsId }
            )));
      },
      requestTranslateData: function () {
        return d(
          this,
          null,
          t().mark(function e() {
            var n, s;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        T.sdk.loadingBar("show"),
                        !this.isFlash && !this.isNews)
                      ) {
                        e.next = 13;
                        break;
                      }
                      return (
                        (n = null),
                        (s = this.getTranslateData({ news_id: this.newsId })),
                        (e.prev = 4),
                        (e.next = 7),
                        s
                      );
                    case 7:
                      (n = e.sent), (e.next = 12);
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(4));
                    case 12:
                      n &&
                        0 == +n.retcode &&
                        n.data &&
                        ((this.remoteTranslateData = n.data),
                        (this.translationData = u({}, n.data)));
                    case 13:
                      (this.rssItem = this.translationData), (e.next = 19);
                      break;
                    case 16:
                      (e.prev = 16),
                        (e.t1 = e.catch(0)),
                        E.aegisReportError(e.t1);
                    case 19:
                      return (
                        (e.prev = 19), T.sdk.loadingBar("hide"), e.finish(19)
                      );
                    case 22:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [
                [0, 16, 19, 22],
                [4, 10],
              ]
            );
          })
        );
      },
      onTranslateChange: function (e, t) {
        t && !this.remoteTranslateData
          ? this.requestTranslateData()
          : (this.rssItem = e),
          (this.translateStatus = t);
      },
      notifyDataReady: function () {
        var e,
          t,
          n = this;
        if (
          (this.$nextTick(function () {
            n.$emit("dataReady", {
              detailInfo: n.originalData,
              watchList: n.watchList,
              newsTemplate: n.newsTemplate,
              adInfo: n.adInfo,
              isForbidForward: n.isForbidForward,
              errorStatusType: "",
            });
          }),
          this.isNews || this.isFlash)
        ) {
          this.isFlash;
          var s = h(u({}, this.mediaInfoAll), { newsid: this.newsId });
          (this.mediaInfoAll &&
            2 === this.mediaInfoAll.media_type &&
            2 !== this.mediaInfoAll.status) ||
            E.report("news.newsdetail.news_article_media_exposure", s || {});
        }
        this.newsTemplate
          ? this.showError ||
            null == (t = this.mainPathReporter) ||
            t.check("news-end", this.newsTemplate)
          : null == (e = this.mainPathReporter) ||
            e.check("news-template-error");
      },
      initSubscribe: function () {
        var e = this;
        this.busOn("addFocus", function (e) {}),
          y.shy.subscribeNotification(
            "SDVideoSyncSubscribeStatus",
            "",
            function (t) {
              t.media_id === e.mediaInfo.media_id && e.init(!0);
            },
            !1
          );
      },
      initTitle: function () {
        var e;
        (e = this.isDisclosure
          ? "公告"
          : this.isResearch
          ? "研报"
          : this.isFullTeach
          ? "功能帮助"
          : "新闻"),
          this.stockName
            ? y.shy.setTitle(
                ""
                  .concat(this.stockName ? "".concat(this.stockName, "-") : "")
                  .concat(e)
              )
            : /^FN/.test(this.newsId)
            ? y.shy.setTitle("快讯")
            : y.shy.setTitle(e);
      },
      mpOnShow: function () {
        this.$refs.newsNormal && this.$refs.newsNormal.mpOnShow(),
          this.watchList && this.init(!0);
      },
      onTouchEnd: function () {
        var e, t;
        (null == (e = this.$refs.translate) ? void 0 : e.handleTouchend) &&
          (null == (t = this.$refs.translate) || t.handleTouchend());
      },
      onTouchMove: function () {
        var e, t;
        (null == (e = this.$refs.translate) ? void 0 : e.handleTouchmove) &&
          (null == (t = this.$refs.translate) || t.handleTouchmove());
      },
      busOn: function (e, t) {
        S.BUS.$on(e, t), (this.busEvents[e] = t);
      },
      busOff: function () {
        for (var e in this.busEvents) S.BUS.$off(e, this.busEvents[e]);
      },
      onMenuTextSelect: function (e) {
        var t = e || {},
          n = t.action,
          s = t.text;
        if (n)
          if ("copy" === n) {
            if (!s) return;
            m.envUtil.copyToPasteboard(s, "复制成功", p.StockBridge);
          } else
            "askAi" === n
              ? this.onShowAiDialog({
                  title: s,
                  prompt: s,
                  scene: "newsdetail",
                })
              : "share" === n
              ? this.shareSelectedText(s)
              : "search" === n && this.searchSelectedText(s);
      },
      shareSelectedText: function (e) {
        var t = this;
        if (e) {
          var n =
              (this.rssItem && this.rssItem.title) ||
              (e.length > 50 ? "".concat(e.slice(0, 50), "...") : e),
            s = function () {
              var s, i, r, a, o, l, c;
              try {
                if ("mpweapp" === p.ShellTypeEnum.SHY) {
                  var u =
                      (t.rssItem &&
                        (null != (s = t.rssItem.news_type)
                          ? s
                          : t.rssItem.type)) ||
                      "",
                    h = "blue" === t.theme ? "g" : "b",
                    d =
                      t.rssItem && "快讯" === t.rssItem.title
                        ? "&title=".concat(encodeURIComponent("快讯"))
                        : "",
                    m = t.isFullTeach ? "&articleStyle=fullTeach" : "",
                    f =
                      "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id="
                        .concat(t.newsId, "&s=")
                        .concat(h, "&zxtype=")
                        .concat(u)
                        .concat(d)
                        .concat(m),
                    w = {
                      title: n,
                      summary: e,
                      url: f,
                      iconUrl:
                        "https://zqact.tenpay.com/resources/img/zxg_wx_sharelogo.jpg",
                    };
                  y.shy.openShareView({
                    to: ["wx", "pyq", "qq", "qzone"],
                    type: "onlyEvent",
                    params: w,
                  }),
                    null ==
                      (r = null == (i = p.StockBridge) ? void 0 : i.busEmit) ||
                      r.call(i, "news-detail-custom-share", w);
                } else {
                  var g = "undefined" != typeof location ? location.href : "";
                  null ==
                    (o = null == (a = p.StockBridge) ? void 0 : a.userShare) ||
                    o.call(a, {
                      title: n,
                      desc: e,
                      path: g,
                      mtaParams: {
                        newsid: t.newsId,
                        share_source: "text_selection",
                      },
                      success: function () {
                        "function" == typeof p.StockBridge.hideShareGuide &&
                          p.StockBridge.hideShareGuide();
                      },
                    }),
                    null ==
                      (c =
                        null == (l = p.StockBridge)
                          ? void 0
                          : l.openShareGuide) || c.call(l, {});
                }
              } catch (e) {}
            };
          try {
            if (
              "undefined" != typeof navigator &&
              "function" == typeof navigator.share
            ) {
              var i = navigator.share({ title: n, text: e });
              i &&
                "function" == typeof i.catch &&
                i.catch(function (e) {
                  e && "AbortError" !== e.name && s();
                });
            } else s();
          } catch (e) {}
        }
      },
      searchSelectedText: function (e) {
        var t;
        if (e) {
          var n = "https://www.baidu.com/s?wd=".concat(
            encodeURIComponent(e.trim())
          );
          try {
            if (null == (t = p.StockBridge) ? void 0 : t.openExtraWebview)
              return void p.StockBridge.openExtraWebview(n);
            "undefined" != typeof window && window.open(n, "_blank");
          } catch (e) {}
        }
      },
      onParagraphLongpressBus: function (e) {
        var t = this.$refs.textSelectionOverlay;
        t &&
          "function" == typeof t.handleParagraphLongpress &&
          t.handleParagraphLongpress(e);
      },
      onHostPageScroll: function () {
        var e = this.$refs.textSelectionOverlay;
        e &&
          (e.activeHandle ||
            ("function" == typeof e.clearSelection && e.clearSelection()));
      },
      getAiQuestionListFromRef: function () {
        var e, t, n, s, i, r;
        try {
          var a =
            null ==
            (r =
              null ==
              (i =
                null ==
                (s =
                  null ==
                  (n =
                    null ==
                    (t = null == (e = this.$refs) ? void 0 : e.newsNormal)
                      ? void 0
                      : t.$refs)
                    ? void 0
                    : n.newsContent)
                  ? void 0
                  : s.$refs)
                ? void 0
                : i.newsContentNormal)
              ? void 0
              : r.aiQuestionList;
          return Array.isArray(a) ? a : [];
        } catch (e) {
          return [];
        }
      },
      onShowAiDialogEvent: function (e) {
        var t = e.contentId,
          n = e.aiQuestionObj,
          s = e.sseServeType,
          i = e.aiReadingContent;
        if (t === this.newsId && n) {
          (this.aiSseServeType = s || "newsSummaryServerHttp"),
            (this.aiReadingContent = i || {});
          var r = n;
          if ("newsAIReading" === this.aiSseServeType) {
            var a = this.getAiQuestionListFromRef();
            if (a.length) {
              var o = a[this.aiQuestionIndex % a.length] || {};
              o &&
                o.title &&
                ((r = h(u(u({}, n), o), { title: o.title })),
                (this.aiQuestionIndex += 1));
            }
          }
          this.onShowAiDialog(r);
        }
      },
      subscribeAiDialogEvents: function () {
        var e, t;
        null == (t = null == (e = p.StockBridge) ? void 0 : e.busOn) ||
          t.call(e, "showAiDialog", this.onShowAiDialogEvent);
      },
      unsubscribeAiDialogEvents: function () {
        var e, t;
        null == (t = null == (e = p.StockBridge) ? void 0 : e.busOff) ||
          t.call(e, "showAiDialog", this.onShowAiDialogEvent);
      },
      onShowAiDialog: function (e) {
        e && ((this.aiQuestionObj = e), (this.showAiDialog = !0));
      },
      onCloseAiDialog: function () {
        (this.showAiDialog = !1),
          (this.aiQuestionObj = null),
          (this.aiSseServeType = "newsSummaryServerHttp"),
          (this.aiReadingContent = {});
      },
      gotoSHYAIDetail: function () {
        var e = this,
          t = this.aiQuestionObj,
          n = t.title,
          s = t.prompt,
          i = t.scene;
        y.shy.getSystemInfo(function (t) {
          var r = t && "white" === t.skin,
            a = [
              "sourceFrom=".concat(i || ""),
              "aiDialogQuestion=".concat(encodeURIComponent(n)),
              "aiQuestionQuery=".concat(encodeURIComponent(s)),
              "serverObj=".concat(
                encodeURIComponent(JSON.stringify(e.aiQuestionObj))
              ),
            ];
          e.aiSseServeType &&
            a.push(
              "sseServeType=".concat(encodeURIComponent(e.aiSseServeType))
            ),
            "newsAIReading" === e.aiSseServeType &&
              e.aiReadingContent &&
              Object.keys(e.aiReadingContent).length &&
              a.push(
                "aiReadingContent=".concat(
                  encodeURIComponent(JSON.stringify(e.aiReadingContent))
                )
              );
          var o = {
              url: "qqstock://SHY?info=".concat(
                encodeURIComponent(
                  JSON.stringify({
                    p_key: "com.tencent.shy.search_ai",
                    p_url: "semiAi?".concat(a.join("&")),
                    showNav: !1,
                  })
                )
              ),
              height: 0.8 * window.screen.height,
              cornerRadius: 8,
              coverColor: r ? "#66000000" : "#99000000",
            },
            l = "qqstock://SDModal?info=".concat(
              encodeURIComponent(JSON.stringify(o))
            );
          y.shy.navigateTo({ url: l });
        });
      },
    },
  };
Array ||
  (
    p.resolveComponent("NewsProspect") +
    p.resolveComponent("NewsNormal") +
    p.resolveComponent("NewsReport") +
    p.resolveComponent("NewsWeixin") +
    p.resolveComponent("Translate") +
    p.resolveComponent("NewsStatus") +
    p.resolveComponent("TextSelectionOverlay") +
    p.resolveComponent("half-screen-ai-entry")
  )();
var R = p._export_sfc(N, [
  [
    "render",
    function (e, t, n, s, i, r) {
      return p.e(
        { a: i.rssItem },
        i.rssItem
          ? p.e(
              {
                b:
                  i.newsTemplate === i.NEWS_TEMPLATE_TYPE.NORMAL &&
                  n.isProspect,
              },
              i.newsTemplate === i.NEWS_TEMPLATE_TYPE.NORMAL && n.isProspect
                ? {
                    c: p.p({
                      wzqConfig: n.wzqConfig,
                      data: i.rssItem,
                      speechInfo: i.speechInfo,
                      theme: n.theme,
                    }),
                  }
                : i.newsTemplate === i.NEWS_TEMPLATE_TYPE.NORMAL
                ? p.e({ e: i.isMP }, (i.isMP, {}), {
                    f: p.sr("newsNormal", "7b98afdc-1"),
                    g: p.p({
                      data: i.rssItem,
                      theme: n.theme,
                      pathname: n.pathname,
                      speechInfo: i.speechInfo,
                      speech_ids: n.speech_ids,
                      flucShowMode: n.flucShowMode,
                      wzqConfig: n.wzqConfig,
                      xgInfo: i.xgInfo,
                      watchList: i.watchList,
                      mediaInfoAll: i.mediaInfoAll,
                      translateStatus: i.translateStatus,
                      userinfo: n.userinfo,
                      isHstabShow: n.isHstabShow,
                      copyable: !r.isForbidForward,
                      isAiSummaryExpand: n.isAiSummaryExpand,
                    }),
                  })
                : i.newsTemplate === i.NEWS_TEMPLATE_TYPE.REPORT
                ? {
                    i: p.p({
                      reportData: i.rssItem,
                      pathname: n.pathname,
                      translateStatus: i.translateStatus,
                      wzqConfig: n.wzqConfig,
                      hasTranslation: i.hasTranslation,
                      isDisclosure: r.isDisclosure,
                      isResearch: r.isResearch,
                      auto_open: n.auto_open,
                      flucShowMode: n.flucShowMode,
                      theme: n.theme,
                    }),
                  }
                : i.newsTemplate === i.NEWS_TEMPLATE_TYPE.WEIXIN
                ? { k: p.p({ data: i.rssItem }) }
                : {},
              {
                d: i.newsTemplate === i.NEWS_TEMPLATE_TYPE.NORMAL,
                h: i.newsTemplate === i.NEWS_TEMPLATE_TYPE.REPORT,
                j: i.newsTemplate === i.NEWS_TEMPLATE_TYPE.WEIXIN,
                l: !r.isDisclosure,
              },
              r.isDisclosure
                ? {}
                : {
                    m: p.sr("translate", "7b98afdc-4"),
                    n: p.o(r.onTranslateChange, 2123),
                    o: p.p({
                      hasTranslation: i.hasTranslation,
                      wzqConfig: n.wzqConfig,
                      translationData: i.translationData,
                      originalData: i.originalData,
                    }),
                  }
            )
          : {},
        { p: i.showError },
        i.showError
          ? {
              q: p.o(function (e) {
                return r.init();
              }, 2124),
              r: p.p({ type: r.errorStatusType }),
            }
          : (!i.rssItem ||
              !i.rssItem.content ||
              i.newsTemplate === i.NEWS_TEMPLATE_TYPE.WEIXIN ||
              i.newsTemplate === i.NEWS_TEMPLATE_TYPE.REPORT ||
              ((!i.rssItem.content.data ||
                0 !== i.rssItem.content.data.length) &&
                i.rssItem.content.data) ||
              (111 !== i.rssItem.news_type && 111 !== i.rssItem.type) ||
              i.rssItem.content_html,
            {}),
        {
          s:
            i.rssItem &&
            i.rssItem.content &&
            i.newsTemplate !== i.NEWS_TEMPLATE_TYPE.WEIXIN &&
            i.newsTemplate !== i.NEWS_TEMPLATE_TYPE.REPORT &&
            ((i.rssItem.content.data && 0 === i.rssItem.content.data.length) ||
              !i.rssItem.content.data) &&
            (111 === i.rssItem.news_type || 111 === i.rssItem.type) &&
            !i.rssItem.content_html,
          t: r.selectable && !r.isForbidForward,
        },
        r.selectable && !r.isForbidForward
          ? {
              v: p.sr("textSelectionOverlay", "7b98afdc-6"),
              w: p.o(r.onMenuTextSelect, 2125),
              x: p.p({
                items: r.textSelectionItems,
                "container-selector": ".stock-news-container",
              }),
            }
          : {},
        { y: i.aiDialogEnable && i.showAiDialog && i.aiQuestionObj },
        i.aiDialogEnable && i.showAiDialog && i.aiQuestionObj
          ? {
              z: p.o(r.onCloseAiDialog, 2126),
              A: p.p({
                "sse-serve-type": i.aiSseServeType,
                "ai-reading-content": i.aiReadingContent,
                theme: n.theme,
                "show-ai-dialog": i.showAiDialog,
                "ai-dialog-question": i.aiQuestionObj.title || "",
                "ai-question-query": i.aiQuestionObj.prompt || "",
                "server-obj": i.aiQuestionObj,
                "source-from": i.aiQuestionObj.scene || "newsdetail",
                "need-preset-question": !0,
              }),
            }
          : {},
        {
          B: p.o(function () {
            return r.onTouchEnd && r.onTouchEnd.apply(r, arguments);
          }, 2127),
          C: p.o(function () {
            return r.onTouchMove && r.onTouchMove.apply(r, arguments);
          }, 2128),
        }
      );
    },
  ],
]);
wx.createComponent(R);
var x = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.JUMP_PAGE_CONFIG = {
  1: {
    name: "大盘分析",
    url: "https://st.gtimg.com/design/40f3cc0be5e9d454bce2bd8a3f635938.png",
  },
  2: {
    name: "资金流向",
    url: "https://st.gtimg.com/design/3790731f3a60923baf523d447acd89d6.png",
  },
  3: {
    name: "龙虎榜",
    url: "https://st.gtimg.com/design/a7153df2178e9be9ed54b81c1bdc4ca5.png",
  },
  4: {
    name: "打新日历",
    url: "https://st.gtimg.com/design/c4d89225024d5469ab78fe8ce6df05b6.png",
  },
  9: {
    name: "北向资金",
    url: "https://st.gtimg.com/design/fd3e24da02bdadc10601aa277f2227b2.png",
  },
}),
  (exports.JUMP_PAGE_TYPE = {
    MARKET_OVERVIEW: 1,
    HS_FUNDFLOW: 2,
    LONGHU: 3,
    HANGQING_DAXIN: 4,
    HANGQING_HUSHEN: 5,
    HANGQING_GANGGUTONG: 9,
  }),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLW5ld3MtZGV0YWlsL2NvbXBvbmVudHMvTmV3c0JvZHkvaW5kZXgudnVl =
    x);
