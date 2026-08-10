var t = require("../../../../../common/vendor.js"),
  e = {
    inject: { stockBridge: { default: {} } },
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isShowComment: { type: Boolean, default: !1 },
      reportPrefix: { type: String, default: "" },
      userInfo: { default: {} },
    },
    components: {
      replyBox: function () {
        return "./replyBox.js";
      },
      NewsComList: function () {
        return "../../../../newsSbg/@tencent/stock-sq/src/source/NewsComList/index.js";
      },
    },
    data: function () {
      return { bottomBar: { type: "comments", title: "评论" } };
    },
    created: function () {},
    beforeDestroy: function () {},
    methods: {
      handleCloseComment: function () {
        this.$emit("close");
      },
      setCommentCount: function (t) {
        this.$emit("setCommentCount", t);
      },
      updateComList: function () {
        var t = this,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        setTimeout(function () {
          var n = t.$refs["newsCommentList_".concat(t.itemData.news_id)];
          n && n.updateComList(e);
        }, 300);
      },
      commentReport: function (t) {
        var e = {
          event: "string" == typeof t ? t : t.event,
          data: { newsId: this.itemData.news_id },
        };
        "string" != typeof t && (e = t),
          this.stockBridge.report(e.event, e.eventData);
      },
      onHandelTurn: function (t) {
        t.path;
        var e = t.query;
        this.$emit("handleCommentTurn", e);
      },
      goEdit: function () {
        var t = this,
          e = this.itemData,
          n = {
            id: e.news_id,
            type: "video",
            newsTitle: e.news_title,
            videoType: e.news_type,
          };
        setTimeout(function () {
          t.$emit("handleGoEdit", n);
        }, 300),
          this.stockBridge.report(
            "information.video.tab.list.bottom_bar_click",
            { newsid: n.id }
          );
      },
      onPutComment: function (t) {
        var e = {
          type: "detail",
          id: null == t ? void 0 : t.id,
          touser: null == t ? void 0 : t.user_name,
          post_scene: "video",
        };
        this.$emit("onPutComment", e);
      },
    },
  };
Array || (t.resolveComponent("NewsComList") + t.resolveComponent("replyBox"))();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, o, i, m, s) {
      return t.e(
        { a: o.isShowComment && o.itemData },
        o.isShowComment && o.itemData
          ? t.e(
              {
                b: t.o(function () {
                  return (
                    s.handleCloseComment &&
                    s.handleCloseComment.apply(s, arguments)
                  );
                }, 1602),
                c: t.o(function () {}, 1603),
                d: t.o(function () {
                  return (
                    s.handleCloseComment &&
                    s.handleCloseComment.apply(s, arguments)
                  );
                }, 1604),
                e: o.itemData.comment_num,
              },
              o.itemData.comment_num ? { f: t.t(o.itemData.comment_num) } : {},
              {
                g: t.sr("newsCommentList_" + o.itemData.news_id, "1af0a59c-0"),
                h: "newsCommentList_" + o.itemData.news_id,
                i: t.o(s.commentReport, 1605),
                j: t.o(s.setCommentCount, 1606),
                k: t.o(s.onHandelTurn, 1607),
                l: t.o(s.onPutComment, 1608),
                m: t.p({
                  pageType: "news",
                  pUserinfo: o.userInfo,
                  newsId: o.itemData.news_id,
                  newsInfo: o.itemData,
                }),
                n: o.isShowComment,
              },
              o.isShowComment
                ? {
                    o: t.sr("reply", "1af0a59c-1"),
                    p: t.o(s.goEdit, 1609),
                    q: t.p({
                      type: "newsDetail",
                      reportPrefix: o.reportPrefix,
                      bottomBar: m.bottomBar,
                      forbidComment: 1 == +o.itemData.comment_status,
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-1af0a59c"],
]);
wx.createComponent(n);
