var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (e, t, i) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  u = function (e, n) {
    for (var i in n || (n = {})) s.call(n, i) && c(e, i, n[i]);
    if (r) {
      var o,
        u = t(r(n));
      try {
        for (u.s(); !(o = u.n()).done; ) {
          i = o.value;
          a.call(n, i) && c(e, i, n[i]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  m = function (e, t) {
    return i(e, o(t));
  },
  p = function (e, t, n) {
    return new Promise(function (i, o) {
      var r = function (e) {
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
          return e.done ? i(e.value) : Promise.resolve(e.value).then(r, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  f = require("../../../../stock-community-base/utils/knife.js"),
  h = require("../../utils/mixins/securityCheck/index.js"),
  d = require("../../../../stock-community-base/utils/mixins/exposureReport.js"),
  l = require("../../../../../../../common/vendor.js"),
  g = require("store.js"),
  w = require("../../../../stock-community-base/utils/privacyCheck.js"),
  b = f.sdk.getUserInfo,
  I = {
    name: "NewsComList",
    options: { styleIsolation: "shared" },
    mixins: [h.securityCheck, d.exposureReport],
    components: {
      ComItem: function () {
        return "../ComItem/index.js";
      },
      loadMore: function () {
        return "../loadMore/index.js";
      },
      noData: function () {
        return "../noData/index.js";
      },
      noNetwork: function () {
        return "../noNetwork/index.js";
      },
    },
    inject: {
      didAgreeUserAgreement: {
        default: function () {
          return {};
        },
      },
      onCheckUserAgreementStatus: { default: function () {} },
    },
    props: {
      pageType: { type: String, default: "news" },
      pUserinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      newsId: { type: String, default: "" },
      newsInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isVIP: { type: Boolean, default: !1 },
      BUS: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    provide: function () {
      return { newsCommentId: this.newsCommentId };
    },
    data: function () {
      return {
        pageInit: !1,
        platform: f.platform,
        showLabels: ["hot", "24h", "best", "1000", "100", "10"],
        firstLoading: !0,
        nomore: !1,
        noNetwork: !1,
        isLoading: !1,
        pageNum: 0,
        pageMaxNum: 0,
        min_id: "",
        news_min_id: "",
        commentCnt: 0,
        commentsData: [],
        dUserInfo: null,
      };
    },
    computed: m(u({}, g.statesMap), {
      itemTopHandle: function () {
        return (
          { wzq: ["more"], zxg: ["more"], mini: ["more"], web: [] }[
            f.platform
          ] || []
        );
      },
      itemBottomHandle: function () {
        return (
          {
            web: [],
            wzq: ["turn", "comment", "like"],
            mini: ["comment", "like"],
            zxg: ["turn", "comment", "like"],
          }[f.platform] || []
        );
      },
      noMoreText: function () {
        return (
          {
            web: "评论服务由腾讯自选股提供",
            wzq: "评论服务由腾讯自选股提供",
            mini: "评论服务由腾讯自选股提供",
            zxg: "已经到底了，触底反弹否极泰来",
          }[f.platform] || ""
        );
      },
      newsCommentId: function () {
        return this.newsInfo.commentid || "";
      },
    }),
    watch: {
      newsInfo: {
        deep: !0,
        immediate: !0,
        handler: function (e) {
          this.resetState(), e.id && 1 != +e.comment_status && this.init();
        },
      },
    },
    created: function () {
      this.dUserInfo = this.pUserinfo;
    },
    mounted: function () {
      this.userInit();
    },
    activated: function () {
      "news" === this.pageType &&
        "function" == typeof this.initBatchObserver &&
        this.initBatchObserver();
    },
    deactivated: function () {
      this.cleanupExposure();
    },
    beforeDestroy: function () {
      this.cleanupExposure();
    },
    methods: m(
      u(
        {
          cleanupExposure: function () {
            "news" === this.pageType &&
              "function" == typeof this.removeAllExposureData &&
              this.removeAllExposureData();
          },
        },
        g.mutations
      ),
      {
        showProfilePop: function (e) {
          this.$emit("showProfilePop", e);
        },
        resetState: function () {
          (this.pageInit = !1),
            (this.noNetwork = !1),
            (this.firstLoading = !0),
            this.clearCommentsData(),
            this.$emit("getCommentCount", 0);
        },
        init: function () {
          return p(
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
                          ((n = this.getParams(!0)),
                          (this.firstLoading = !0),
                          (e.t0 = this.dUserInfo && this.dUserInfo.openid),
                          e.t0)
                        ) {
                          e.next = 7;
                          break;
                        }
                        return (e.next = 6), b();
                      case 6:
                        this.dUserInfo = e.sent;
                      case 7:
                        return (
                          (e.next = 9),
                          this.onPageInit({
                            params: n,
                            type: this.pageType,
                            info: this.dUserInfo,
                            scb: this.successHanlde,
                            fcb: this.networkErrorHandle,
                          })
                        );
                      case 9:
                        (this.pageInit = e.sent),
                          this.pageInit &&
                            this.$emit("getCommentCount", this.commentCnt);
                      case 11:
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
        deleteComItem: function (e) {
          this.deleteItem(e), this.$forceUpdate();
        },
        updateComList: function () {
          return p(this, arguments, function () {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return e().mark(function i() {
              var o;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ("like" !== n.type) {
                        e.next = 4;
                        break;
                      }
                      t.updateTimeLine(n), (e.next = 9);
                      break;
                    case 4:
                      return (
                        (o = t.getParams(!0)),
                        (e.next = 7),
                        t.onPageInit({
                          params: o,
                          type: t.pageType,
                          info: t.dUserInfo,
                          scb: t.successHanlde,
                          fcb: t.networkErrorHandle,
                        })
                      );
                    case 7:
                      (t.pageInit = e.sent),
                        t.pageInit && t.$emit("getCommentCount", t.commentCnt);
                    case 9:
                      t.$forceUpdate();
                    case 10:
                    case "end":
                      return e.stop();
                  }
              }, i);
            })();
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
            (t.comment_id = this.newsInfo.commentid || ""),
            t
          );
        },
        onHandleTapList: function (t, n) {
          return p(
            this,
            null,
            e().mark(function i() {
              var o,
                r,
                s,
                a,
                c,
                u,
                m,
                p = this;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!w.isH5Native) {
                          e.next = 7;
                          break;
                        }
                        return (e.next = 3), w.sqPrivacyCheck();
                      case 3:
                        if (e.sent) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt("return");
                      case 5:
                        e.next = 9;
                        break;
                      case 7:
                        if (
                          this.didAgreeUserAgreement.value ||
                          !this.onCheckUserAgreementStatus
                        ) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          void this.onCheckUserAgreementStatus()
                        );
                      case 9:
                        (o = this.commentsData.findIndex(function (e, n, i) {
                          return e.subject_id == t.subject_id;
                        })),
                          (s = (r = n || {}).eventName),
                          (a = r.eventData),
                          (c = {
                            putComment: "onPutComment",
                            turn: "onHandelTurn",
                            putLike: "onPutLike",
                            tapPerson: "onTapPerson",
                            tapImage: "onTapImage",
                            tapDetail: "onTapDetail",
                            tapContent: "onTapContent",
                            toggleShow: "onToggleShow",
                            tapMore: "onTapMore",
                            tapIllegal: "onTapIllegal",
                            tapDeleteItem: "onTapDeleteItem",
                          }),
                          "tapMore" !== s ||
                            ("zxg" !== f.platform && "mini" !== f.platform) ||
                            ((u = Object.assign({}, a)),
                            (a.itemData = u),
                            (a.listData = this.commentsData)),
                          (m = (a || {}).fakeInput),
                          Object.keys(c).forEach(function (e) {
                            e === s &&
                              p
                                .securityCheck({
                                  eventName:
                                    "onTapDetail" === c[s] ? "tapDetail" : s,
                                  fakeInput: m,
                                  postData: p.commentsData[o] || {},
                                })
                                .then(function () {
                                  p[c[e]](a, o, {
                                    pageType: p.pageType,
                                    newsCommentId: p.newsInfo.commentid || "",
                                    itemData: p.commentsData[o],
                                  });
                                });
                          }),
                          this.$forceUpdate();
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                i,
                this
              );
            })
          );
        },
        loadData: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return p(
            this,
            null,
            e().mark(function n() {
              var i;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!this.isLoading && !this.nomore) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          (this.isLoading = !0),
                          (i = this.getParams(!1)),
                          (e.next = 6),
                          this.getList(
                            i,
                            t,
                            this.successHanlde,
                            this.networkErrorHandle
                          )
                        );
                      case 6:
                        this.pageInit = e.sent;
                      case 7:
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
        successHanlde: function (e, t) {
          var n = this,
            i = t.more_flag,
            o = void 0 === i ? "" : i,
            r = t.min_id,
            s = void 0 === r ? "" : r,
            a = t.news_min_id,
            c = void 0 === a ? "" : a,
            u = t.comment_cnt,
            m = void 0 === u ? 0 : u;
          e && (this.firstLoading = !1),
            this.$nextTick(function () {
              n.reinitBatchObserver();
            }),
            (this.nomore = !o),
            (this.min_id = s),
            (this.news_min_id = c),
            (this.commentCnt = m),
            (this.noNetwork = !1),
            (this.isLoading = !1),
            this.$forceUpdate(),
            this.$emit("getCommentUpdate", { nomore: this.nomore });
        },
        networkErrorHandle: function (e) {
          (this.noNetwork = !0), (this.firstLoading = e), (this.isLoading = !1);
        },
        timeoutLoad: function () {
          return p(
            this,
            null,
            e().mark(function t() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (this.resetState(),
                          (e.t0 =
                            this.newsInfo.id &&
                            1 != +this.newsInfo.comment_status),
                          !e.t0)
                        ) {
                          e.next = 6;
                          break;
                        }
                        return (e.next = 5), this.init();
                      case 5:
                        this.$forceUpdate();
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
        isLast: function (e) {
          return e === this.commentsData.length - 1;
        },
      }
    ),
  };
Array ||
  (
    l.resolveComponent("noNetwork") +
    l.resolveComponent("ComItem") +
    l.resolveComponent("noData") +
    l.resolveComponent("loadMore")
  )();
var k = l._export_sfc(I, [
  [
    "render",
    function (e, t, n, i, o, r) {
      return l.e(
        {
          a: o.noNetwork && 0 === o.commentsData.length,
          b: l.o(function (e) {
            return r.loadData(!0);
          }, 1687),
          c:
            o.pageInit &&
            !o.firstLoading &&
            o.commentsData &&
            o.commentsData.length &&
            !n.isVIP,
        },
        o.pageInit &&
          !o.firstLoading &&
          o.commentsData &&
          o.commentsData.length &&
          !n.isVIP
          ? {
              d: l.f(o.commentsData, function (e, t, i) {
                return {
                  a: l.o(
                    function (t) {
                      return r.onHandleTapList(e, t);
                    },
                    1688,
                    e.subject_id
                  ),
                  b: l.o(r.showProfilePop, 1689, e.subject_id),
                  c: "cb43bb3d-1-" + i,
                  d: l.p({
                    last: r.isLast(t),
                    pageType: n.pageType,
                    itemData: e,
                    itemTopHandle: r.itemTopHandle,
                    itemBottomHandle: r.itemBottomHandle,
                    showLabels: o.showLabels,
                    BUS: n.BUS,
                  }),
                  e: e.subject_id,
                  f: e.subject_id,
                };
              }),
            }
          : {},
        { e: !o.noNetwork && !o.commentsData.length },
        o.noNetwork || o.commentsData.length
          ? {}
          : {
              f: l.p({
                useBlack: !0,
                text: n.isVIP ? "解锁后可查看评论" : "别观望，加入评论",
              }),
            },
        { g: !o.firstLoading && o.commentsData.length },
        !o.firstLoading && o.commentsData.length
          ? {
              h: l.o(r.loadData, 1690),
              i: l.p({
                noMoreText: r.noMoreText,
                nomore: o.nomore,
                noNetwork: o.noNetwork,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-cb43bb3d"],
]);
wx.createComponent(k);
