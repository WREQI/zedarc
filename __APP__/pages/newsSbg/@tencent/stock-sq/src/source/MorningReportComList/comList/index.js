require("../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  m = function (e, n) {
    for (var r in n || (n = {})) o.call(n, r) && c(e, r, n[r]);
    if (a) {
      var i,
        m = t(a(n));
      try {
        for (m.s(); !(i = m.n()).done; ) {
          r = i.value;
          s.call(n, r) && c(e, r, n[r]);
        }
      } catch (e) {
        m.e(e);
      } finally {
        m.f();
      }
    }
    return e;
  },
  u = function (e, t) {
    return r(e, i(t));
  },
  p = function (e, t, n) {
    return new Promise(function (r, i) {
      var a = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        o = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, o);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  d = require("../../../../../stock-community-base/utils/knife.js"),
  h = require("../../../utils/mixins/securityCheck/index.js"),
  f = require("../../../../../stock-community-base/utils/privacyCheck.js"),
  l = require("../../NewsComList/store.js"),
  g = require("../../../../../../../../common/vendor.js"),
  w = {
    name: "ComList",
    mixins: [h.securityCheck],
    components: {
      ComItem: function () {
        return "../comItem/index.js";
      },
      loadMore: function () {
        return "../../loadMore/index.js";
      },
      noData: function () {
        return "../../noData/index.js";
      },
      noNetwork: function () {
        return "../../noNetwork/index.js";
      },
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
    inject: {
      didAgreeUserAgreement: { default: { value: !0 } },
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
    },
    provide: function () {
      return { newsCommentId: this.newsCommentId };
    },
    data: function () {
      return {
        pageInit: !1,
        platform: d.platform,
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
      };
    },
    computed: u(m({}, l.statesMap), {
      itemTopHandle: function () {
        return (
          { wzq: ["more"], zxg: ["more"], mini: ["more"], web: [] }[
            d.platform
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
          }[d.platform] || []
        );
      },
      noMoreText: function () {
        return (
          {
            web: "评论服务由腾讯自选股提供",
            wzq: "评论服务由腾讯自选股提供",
            mini: "评论服务由腾讯自选股提供",
            zxg: "已经到底了，触底反弹否极泰来",
          }[d.platform] || ""
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
    created: function () {},
    mounted: function () {
      this.userInit();
    },
    methods: u(m({}, l.mutations), {
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
                      return (
                        (n = this.getParams(!0)),
                        (this.firstLoading = !0),
                        (e.prev = 2),
                        (e.next = 5),
                        this.onPageInit({
                          params: n,
                          type: this.pageType,
                          info: this.pUserinfo,
                          scb: this.successHanlde,
                          fcb: this.networkErrorHandle,
                        })
                      );
                    case 5:
                      (this.pageInit = e.sent), (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(2));
                    case 10:
                      this.pageInit &&
                        (this.$emit("comListDataReady"),
                        this.$emit("getCommentCount", this.commentCnt));
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[2, 8]]
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
          return e().mark(function r() {
            var i;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ("like" !== n.type) {
                        e.next = 4;
                        break;
                      }
                      t.updateTimeLine(n), (e.next = 20);
                      break;
                    case 4:
                      if (!n.refreshTapPostion || !t.tapItem) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 7), t.refreshTapPostionCom();
                    case 7:
                      (t.tapItem = null), (e.next = 20);
                      break;
                    case 10:
                      return (
                        (i = t.getParams(!0)),
                        (e.prev = 11),
                        (e.next = 14),
                        t.onPageInit({
                          params: i,
                          type: t.pageType,
                          info: t.pUserinfo,
                          scb: t.successHanlde,
                          fcb: t.networkErrorHandle,
                        })
                      );
                    case 14:
                      (t.pageInit = e.sent), (e.next = 19);
                      break;
                    case 17:
                      (e.prev = 17), (e.t0 = e.catch(11));
                    case 19:
                      t.pageInit && t.$emit("getCommentCount", t.commentCnt);
                    case 20:
                      t.$forceUpdate();
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[11, 17]]
            );
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
          e().mark(function r() {
            var i,
              a,
              o,
              s,
              c,
              m,
              u,
              p,
              h = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = (i = n || {}).eventName),
                        (o = i.eventData),
                        !(s = ["putComment", "putLike", "turn"].includes(a)) ||
                          !f.isH5Native)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 4), f.sqPrivacyCheck();
                    case 4:
                      if (e.sent) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      e.next = 10;
                      break;
                    case 8:
                      if (
                        !s ||
                        this.didAgreeUserAgreement.value ||
                        !this.onCheckUserAgreementStatus
                      ) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 10:
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
                        "tapMore" !== a ||
                          ("zxg" !== d.platform && "mini" !== d.platform) ||
                          ((m = Object.assign({}, o)),
                          (o.itemData = m),
                          (o.listData = this.commentsData)),
                        (u = (o || {}).fakeInput),
                        (p = this.commentsData.findIndex(function (e, n, r) {
                          return e.subject_id == t.subject_id;
                        })),
                        Object.keys(c).forEach(function (e) {
                          e === a &&
                            h
                              .securityCheck({
                                eventName:
                                  "onTapDetail" === c[a] ? "tapDetail" : a,
                                fakeInput: u,
                                postData: h.commentsData[p] || {},
                              })
                              .then(function () {
                                h[c[e]](o, p, {
                                  pageType: h.pageType,
                                  newsCommentId: h.newsInfo.commentid || "",
                                  itemData: h.commentsData[p],
                                });
                              });
                        }),
                        (this.tapItem = t),
                        this.$forceUpdate();
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              this
            );
          })
        );
      },
      loadData: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return p(
          this,
          null,
          e().mark(function n() {
            var r;
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
                        (r = this.getParams(!1)),
                        (e.prev = 4),
                        (e.next = 7),
                        this.getList(
                          r,
                          t,
                          this.successHanlde,
                          this.networkErrorHandle
                        )
                      );
                    case 7:
                      (this.pageInit = e.sent), (e.next = 12);
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(4));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this,
              [[4, 10]]
            );
          })
        );
      },
      successHanlde: function (e, t) {
        var n = t.more_flag,
          r = void 0 === n ? "" : n,
          i = t.min_id,
          a = void 0 === i ? "" : i,
          o = t.news_min_id,
          s = void 0 === o ? "" : o,
          c = t.comment_cnt,
          m = void 0 === c ? 0 : c;
        e && (this.firstLoading = !1),
          (this.nomore = !r),
          (this.min_id = a),
          (this.news_min_id = s),
          (this.commentCnt = m),
          (this.noNetwork = !1),
          (this.isLoading = !1),
          this.$forceUpdate();
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
      mpOnLoadMore: function () {
        this.loadData();
      },
      refreshTapPostionCom: function () {
        return p(
          this,
          null,
          e().mark(function t() {
            var n,
              r,
              i = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.tapItem) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (n = this.commentsData.findIndex(function (e, t, n) {
                          return e.id == i.tapItem.id;
                        })),
                        (r = {
                          id: this.newsId,
                          limit: 1,
                          _: Date.parse(new Date()),
                          content_link: 1,
                          begin:
                            n > 0 ? this.commentsData[n - 1].subject_id : "",
                          begin_news: "",
                          map_id: "news_".concat(this.newsId),
                          comment_id: this.newsCommentId,
                        }),
                        (e.prev = 3),
                        (e.next = 6),
                        this.replaceList(r)
                      );
                    case 6:
                      e.next = 10;
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(3));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[3, 8]]
            );
          })
        );
      },
    }),
  };
Array ||
  (
    g.resolveComponent("noNetwork") +
    g.resolveComponent("ComItem") +
    g.resolveComponent("noData") +
    g.resolveComponent("loadMore")
  )();
var b = g._export_sfc(w, [
  [
    "render",
    function (e, t, n, r, i, a) {
      return g.e(
        {
          a: i.noNetwork && 0 === i.commentsData.length,
          b: g.o(function (e) {
            return a.loadData(!0);
          }, 3071),
          c:
            i.pageInit &&
            !i.firstLoading &&
            i.commentsData &&
            i.commentsData.length &&
            !n.isVIP,
        },
        i.pageInit &&
          !i.firstLoading &&
          i.commentsData &&
          i.commentsData.length &&
          !n.isVIP
          ? {
              d: g.f(i.commentsData, function (e, t, r) {
                return {
                  a: e.subject_id,
                  b: g.o(
                    function (t) {
                      return a.onHandleTapList(e, t);
                    },
                    3072,
                    e.subject_id
                  ),
                  c: "09584f0d-1-" + r,
                  d: g.p({
                    last: t === i.commentsData.length - 1,
                    pageType: n.pageType,
                    itemData: e,
                    itemTopHandle: a.itemTopHandle,
                    itemBottomHandle: a.itemBottomHandle,
                    showLabels: i.showLabels,
                    BUS: n.BUS,
                  }),
                };
              }),
            }
          : {},
        { e: !i.noNetwork && !i.commentsData.length },
        i.noNetwork || i.commentsData.length
          ? {}
          : {
              f: g.p({
                useBlack: !1,
                text: n.isVIP ? "解锁后可查看评论" : "别观望，加入评论",
              }),
            },
        { g: !i.firstLoading && i.commentsData.length && !i.nomore },
        i.firstLoading || !i.commentsData.length || i.nomore
          ? {}
          : {
              h: g.o(a.loadData, 3073),
              i: g.p({
                noMoreText: a.noMoreText,
                nomore: i.nomore,
                noNetwork: i.noNetwork,
              }),
            }
      );
    },
  ],
  ["__scopeId", "data-v-09584f0d"],
]);
wx.createComponent(b);
