var t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = function (t, e, n) {
    return new Promise(function (i, o) {
      var m = function (t) {
          try {
            a(n.next(t));
          } catch (t) {
            o(t);
          }
        },
        r = function (t) {
          try {
            a(n.throw(t));
          } catch (t) {
            o(t);
          }
        },
        a = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(m, r);
        };
      a((n = n.apply(t, e)).next());
    });
  },
  o = require("../../../../../../common/vendor.js"),
  m = require("../../../stock-community-ui/utils/service/index.js"),
  r = require("../../../stock-community-base/utils/commentFilter.js"),
  a = require("../../../stock-community-base/utils/constant.js"),
  s = require("../../../stock-community-base/utils/knife.js"),
  u = s.sdk.reportAnalytics,
  c = {
    name: "ShowComment",
    components: {
      showCommentItem: function () {
        return "../showCommentItem/index.js";
      },
    },
    inject: {
      platformType: { default: "" },
      userinfo: { default: {} },
      hqBridge: { default: {} },
    },
    props: {
      doReport: {},
      pageType: { type: String, default: "" },
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      itemBottomHandle: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return {
        pageNum: 0,
        showNum: 1,
        isShowMore: !1,
        onShowCommentItemList: [],
        tlMark: "",
        lastId: "",
        detailCommentHasMore: !1,
      };
    },
    computed: {
      platformClass: function () {
        return "wzq" === s.platform ? "wzq" : this.platformType;
      },
      checkShowNum: function () {
        if ("commentDetail" === this.pageType) return this.detailCommentHasMore;
        return (
          !(+this.commentsTail.cnt <= 1) &&
          +this.commentsTail.cnt > this.showNum
        );
      },
      commentsTail: function () {
        return this.itemData.commentsTail || { cnt: 0 };
      },
      subjectUserId: function () {
        return this.itemData.user_id;
      },
      itemDataId: function () {
        return this.itemData.id;
      },
      showType: function () {
        return this.itemData.showType;
      },
      commentItemList: function () {
        return this.onShowCommentItemList || [];
      },
    },
    watch: {
      itemData: {
        deep: !0,
        immediate: !0,
        handler: function (t, e) {
          var n, i, o, m;
          !t ||
            (t.id === (null == e ? void 0 : e.id) &&
              t.user_image === (null == e ? void 0 : e.user_image) &&
              (null == (n = null == t ? void 0 : t.commentsTail)
                ? void 0
                : n.cnt) ===
                (null == (i = null == e ? void 0 : e.commentsTail)
                  ? void 0
                  : i.cnt)) ||
            ((this.pageNum = 0),
            (this.showNum = 1),
            (this.isShowMore = !1),
            (this.tlMark = ""),
            (this.lastId = ""),
            "commentDetail" === this.pageType &&
              t.commentsTail.cnt > 1 &&
              (this.detailCommentHasMore = !0),
            (this.onShowCommentItemList =
              (null ==
              (m =
                null == (o = null == t ? void 0 : t.commentsTail)
                  ? void 0
                  : o.list)
                ? void 0
                : m.slice(0)) || []));
        },
      },
    },
    mounted: function () {
      var t, e, n, i, m, r;
      null == (e = null == (t = this.hqBridge) ? void 0 : t.busOn) ||
        e.call(t, "onNewComment", this.onNewComment),
        o.StockBridge.busOn("onNewComment", this.onNewComment),
        null == (i = null == (n = this.hqBridge) ? void 0 : n.busOn) ||
          i.call(n, "detailCommentNewReply", this.onNewReply),
        o.StockBridge.busOn("detailCommentNewReply", this.onNewReply),
        null == (r = null == (m = this.hqBridge) ? void 0 : m.busOn) ||
          r.call(m, "onReplyDelete", this.onReplyDelete);
    },
    beforeDestroy: function () {
      var t, e, n, i, m, r;
      null == (e = null == (t = this.hqBridge) ? void 0 : t.busOff) ||
        e.call(t, "onNewComment", this.onNewComment),
        null == (i = null == (n = this.hqBridge) ? void 0 : n.busOff) ||
          i.call(n, "onReplyDelete", this.onReplyDelete),
        null == (r = null == (m = this.hqBridge) ? void 0 : m.busOff) ||
          r.call(m, "detailCommentNewReply", this.onNewReply),
        o.StockBridge.busOff("onNewComment", this.onNewComment),
        o.StockBridge.busOff("detailCommentNewReply", this.onNewReply);
    },
    methods: {
      tapPerson: function (t) {
        this.$emit("tapPerson", t);
      },
      tapImage: function (t) {
        this.$emit("tapImage", t);
      },
      newComment: function (t) {
        this.$emit("newComment", t);
      },
      tapDetail: function (t, e) {
        this.$emit("tapDetail", t),
          "needAnchor" === t && e && this.$emit("tapCommentItem", e);
      },
      moreComment: function (t) {
        this.loadMoreReply();
        var e = ""
          .concat(a.prefix[this.pageType], "_")
          .concat(a.modules[this.pageType], "_moreComment");
        u({ eventName: e });
      },
      doLoadLastest: function (t) {
        return i(
          this,
          null,
          n().mark(function e() {
            var i, o, r;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = this.itemData.id),
                        "commentDetail" !== this.pageType)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (
                        (o = {
                          first_level_comment_id: i,
                          limit: 10,
                          timeline_mark: "",
                        }),
                        (e.next = 5),
                        m.subjectLevelMoreCommentList(o, this.userinfo)
                      );
                    case 5:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (r = {
                          subjectId: i,
                          first: t,
                          order: "reply_time",
                          userinfo: this.userinfo,
                          tlMark: "",
                          begin: "",
                        }),
                        (e.next = 9),
                        m.commentListPlatContent(r)
                      );
                    case 9:
                      return e.abrupt("return", e.sent);
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
      loadLatested: function (t) {
        return i(
          this,
          null,
          n().mark(function i() {
            var o = this;
            return n().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      !0,
                        this.doLoadLastest(!0).then(function (n) {
                          var i = n.data;
                          r.CommentFilter(i, !0, !1, o.userinfo)
                            .then(function (n) {
                              var i =
                                (null == n ? void 0 : n.commentsData) || [];
                              if (i && i.length > 0) {
                                "commentDetail" === o.pageType &&
                                  i.forEach(function (t) {
                                    t.root_id = o.itemData.id;
                                  });
                                var m = i.filter(function (e) {
                                  return (e.commentid || e.comment_id) === t;
                                });
                                if (m && m.length > 0) {
                                  var r = e(m, 1)[0];
                                  o.onShowCommentItemList.splice(
                                    o.showNum,
                                    0,
                                    r
                                  ),
                                    (o.showNum += 1),
                                    (o.commentsTail.cnt += 1),
                                    o.$forceUpdate(),
                                    o.$nextTick(function () {
                                      var t;
                                      null == (t = o.hqBridge) ||
                                        t.busEmit("watchHeightChange");
                                    });
                                }
                              }
                            })
                            .catch(function (t) {});
                        });
                    case 2:
                    case "end":
                      return n.stop();
                  }
              },
              i,
              this
            );
          })
        );
      },
      doLoadMoreReply: function (t) {
        return i(
          this,
          null,
          n().mark(function e() {
            var i, o, r;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = this.itemData.id),
                        "commentDetail" !== this.pageType)
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (
                        (o = {
                          first_level_comment_id: i,
                          limit: t ? 11 : 10,
                          timeline_mark: this.tlMark,
                        }),
                        (e.next = 5),
                        m.subjectLevelMoreCommentList(o, this.userinfo)
                      );
                    case 5:
                      return e.abrupt("return", e.sent);
                    case 6:
                      return (
                        (r = {
                          subjectId: i,
                          first: t,
                          order: "",
                          userinfo: this.userinfo,
                          tlMark: this.tlMark,
                          begin: this.lastId,
                        }),
                        (e.next = 9),
                        m.commentListPlatContent(r)
                      );
                    case 9:
                      return e.abrupt("return", e.sent);
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
      loadMoreReply: function () {
        return i(
          this,
          null,
          n().mark(function e() {
            var i,
              o = this;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (i = 0 === this.pageNum),
                        this.doLoadMoreReply(i).then(function (e) {
                          var n = e.data;
                          (o.tlMark = n.tl_mark),
                            r
                              .CommentFilter(n, i, !1, o.userinfo)
                              .then(function (e) {
                                var n =
                                  (null == e ? void 0 : e.commentsData) || [];
                                if (n && n.length > 0) {
                                  "commentDetail" === o.pageType &&
                                    n.forEach(function (t) {
                                      t.root_id = o.itemData.id;
                                    });
                                  var m = n[n.length - 1];
                                  (o.lastId = m.commentid || o.comment_id),
                                    i
                                      ? n.forEach(function (t) {
                                          o.onShowCommentItemList.find(
                                            function (e) {
                                              return (
                                                e.comment_id === t.comment_id
                                              );
                                            }
                                          ) || o.onShowCommentItemList.push(t);
                                        })
                                      : (o.onShowCommentItemList = [].concat(
                                          t(o.onShowCommentItemList),
                                          t(n)
                                        )),
                                    (o.pageNum = o.showNum + 1),
                                    "commentDetail" === o.pageType
                                      ? ((o.showNum = Math.min(
                                          o.onShowCommentItemList.length,
                                          o.showNum + 10
                                        )),
                                        (o.detailCommentHasMore = e.more_flag))
                                      : (o.showNum = Math.min(
                                          o.commentsTail.cnt,
                                          o.showNum + 10
                                        )),
                                    o.$nextTick(function () {
                                      var t;
                                      null == (t = o.hqBridge) ||
                                        t.busEmit("watchHeightChange");
                                    });
                                }
                              })
                              .catch(function (t) {});
                        });
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
      },
      semiTapSubmit: function () {
        this.$emit("semiTapSubmit");
      },
      onHandleTapItem: function (t) {
        this.$emit("onHandleTapItem", t);
      },
      onNewComment: function (t, e) {
        return i(
          this,
          null,
          n().mark(function i() {
            var o,
              m = this;
            return n().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (
                        ((e = e || t.commentid),
                        (o = t.root_id),
                        t.rootid !== this.itemData.id && o !== this.itemData.id)
                      ) {
                        n.next = 10;
                        break;
                      }
                      return (n.prev = 3), (n.next = 6), this.loadLatested(e);
                    case 6:
                      n.next = 10;
                      break;
                    case 8:
                      (n.prev = 8), (n.t0 = n.catch(3));
                    case 10:
                      this.$nextTick(function () {
                        var t;
                        null == (t = m.hqBridge) ||
                          t.busEmit("watchHeightChange");
                      });
                    case 11:
                    case "end":
                      return n.stop();
                  }
              },
              i,
              this,
              [[3, 8]]
            );
          })
        );
      },
      onNewReply: function (t, e) {
        return i(
          this,
          null,
          n().mark(function i() {
            var o,
              m,
              r = this;
            return n().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (
                        ((e = e || t.commentid),
                        (o = t.parent_id),
                        (m = t.root_id),
                        o !== this.itemData.id && m !== this.itemData.id)
                      ) {
                        n.next = 10;
                        break;
                      }
                      return (n.prev = 3), (n.next = 6), this.loadLatested(e);
                    case 6:
                      n.next = 10;
                      break;
                    case 8:
                      (n.prev = 8), (n.t0 = n.catch(3));
                    case 10:
                      this.$nextTick(function () {
                        var t;
                        null == (t = r.hqBridge) ||
                          t.busEmit("watchHeightChange");
                      });
                    case 11:
                    case "end":
                      return n.stop();
                  }
              },
              i,
              this,
              [[3, 8]]
            );
          })
        );
      },
      onReplyDelete: function (t, e) {
        return i(
          this,
          null,
          n().mark(function t() {
            var i, o;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      for (i = 0; i < this.onShowCommentItemList.length; i++)
                        (o = this.onShowCommentItemList[i]).comment_id &&
                          o.comment_id === e &&
                          this.onShowCommentItemList.splice(i, 1);
                    case 1:
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
    },
  };
Array || o.resolveComponent("showCommentItem")();
var l = o._export_sfc(c, [
  [
    "render",
    function (t, e, n, i, m, r) {
      return o.e(
        { a: r.commentItemList && r.commentItemList.length > 0 },
        r.commentItemList && r.commentItemList.length > 0
          ? o.e(
              {
                b: o.f(r.commentItemList, function (t, e, i) {
                  return {
                    a: e < m.showNum || m.isShowMore,
                    b: t.comment_id + e,
                    c: o.o(
                      function (t) {
                        return r.tapPerson(t);
                      },
                      5566,
                      t.comment_id + e
                    ),
                    d: o.o(
                      function (t) {
                        return r.tapImage(t);
                      },
                      5567,
                      t.comment_id + e
                    ),
                    e: o.o(
                      function (t) {
                        return r.tapDetail("needAnchor", t);
                      },
                      5568,
                      t.comment_id + e
                    ),
                    f: o.o(r.semiTapSubmit, 5569, t.comment_id + e),
                    g: o.o(r.newComment, 5570, t.comment_id + e),
                    h: o.o(r.onHandleTapItem, 5571, t.comment_id + e),
                    i: "2856a04d-0-" + i,
                    j: o.p({
                      "comment-item": t,
                      "page-type": n.pageType,
                      "item-data-id": r.itemDataId,
                      "subject-user-id": r.subjectUserId,
                      "show-type": r.showType,
                      "item-bottom-handle": n.itemBottomHandle,
                    }),
                  };
                }),
                c: r.checkShowNum,
              },
              r.checkShowNum
                ? o.e(
                    { d: "commentDetail" !== n.pageType && 1 === m.showNum },
                    "commentDetail" !== n.pageType && 1 === m.showNum
                      ? { e: o.t(r.commentsTail.cnt - m.showNum + "条回复") }
                      : { f: o.t("更多回复") },
                    {
                      g: o.o(function (t) {
                        return r.moreComment("more_needAnchor");
                      }, 5572),
                    }
                  )
                : {},
              {
                h: r.itemDataId,
                i: o.n(r.platformClass),
                j: o.n(n.pageType),
                k: o.o(function (t) {
                  return r.tapDetail("needAnchor");
                }, 5573),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-2856a04d"],
]);
wx.createComponent(l);
