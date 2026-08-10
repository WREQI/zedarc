var t = require("../../../../../../../../common/vendor.js"),
  e = {
    name: "showComment",
    components: {
      showCommentItem: function () {
        return "../showCommentItem/index.js";
      },
      itemHeader: function () {
        return "../itemHeader/index.js";
      },
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
      BUS: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showLabels: {
        type: Array,
        default: function () {
          return [];
        },
      },
      imageRefreshFlag: { default: 0 },
      itemTopHandle: Array,
      itemBottomHandle: Array,
      onHandleTapItem: Function,
    },
    data: function () {
      return { showNum: 3, isShowMore: !1 };
    },
    computed: {
      checkListLength: function () {
        return +this.commentsTail.cnt && this.list.length;
      },
      checkShowNum: function () {
        return +this.commentsTail.cnt > this.showNum;
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
      list: function () {
        return (+this.commentsTail.cnt && this.commentsTail.list) || [];
      },
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
        this.$emit("tapDetail", t);
      },
      semiTapSubmit: function () {
        this.$emit("semiTapSubmit");
      },
    },
    created: function () {},
    mounted: function () {},
    watch: {},
  };
Array || t.resolveComponent("showCommentItem")();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, i, m, o, a) {
      return t.e(
        {
          a:
            i.itemData &&
            i.itemData.commentsTail &&
            i.itemData.commentsTail.list &&
            i.itemData.commentsTail.list.length > 0,
        },
        i.itemData &&
          i.itemData.commentsTail &&
          i.itemData.commentsTail.list &&
          i.itemData.commentsTail.list.length > 0
          ? {
              b: t.f(i.itemData.commentsTail.list, function (e, n, m) {
                return t.e(
                  {
                    a: n < o.showNum || o.isShowMore,
                    b: e.comment_id + n,
                    c: t.o(
                      function (t) {
                        return a.tapPerson(t);
                      },
                      4568,
                      e.comment_id + n
                    ),
                    d: t.o(
                      function (t) {
                        return a.tapImage(t);
                      },
                      4569,
                      e.comment_id + n
                    ),
                    e: t.o(
                      function (t) {
                        return a.tapDetail("needAnchor", t);
                      },
                      4570,
                      e.comment_id + n
                    ),
                    f: t.o(a.semiTapSubmit, 4571, e.comment_id + n),
                    g: t.o(a.newComment, 4572, e.comment_id + n),
                    h: "ffd51a4a-0-" + m,
                    i: t.p({
                      commentItem: e,
                      pageType: i.pageType,
                      itemDataId: a.itemDataId,
                      subjectUserId: a.subjectUserId,
                      showType: a.showType,
                      BUS: i.BUS,
                      showLabels: i.showLabels,
                      imageRefreshFlag: i.imageRefreshFlag,
                      itemTopHandle: i.itemTopHandle,
                      itemBottomHandle: i.itemBottomHandle,
                      onHandleTapItem: i.onHandleTapItem,
                    }),
                    j:
                      1 === e.is_yb_answer &&
                      e.yb_disclaimer &&
                      e.yb_disclaimer.length > 0 &&
                      (n < o.showNum || o.isShowMore),
                  },
                  1 === e.is_yb_answer &&
                    e.yb_disclaimer &&
                    e.yb_disclaimer.length > 0 &&
                    (n < o.showNum || o.isShowMore)
                    ? {
                        k: t.t(e.yb_disclaimer),
                        l: t.n(
                          1 === i.itemData.commentsTail.list.length
                            ? "com-yb-disclaimer-addi"
                            : ""
                        ),
                      }
                    : {}
                );
              }),
              c: a.checkShowNum,
              d: t.o(function (t) {
                return a.moreComment("more_needAnchor");
              }, 4573),
              e: t.o(function (t) {
                return a.tapDetail("needAnchor");
              }, 4574),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-ffd51a4a"],
]);
wx.createComponent(n);
