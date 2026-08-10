var e = require("../../../../../../common/vendor.js"),
  t = {
    name: "showCommentItem",
    components: {
      shortContent: function () {
        return "../shortContent/index.js";
      },
    },
    inject: {
      registerExposureElement: { default: null },
      unregisterExposureElement: { default: null },
      addToExposureQueue: { default: null },
    },
    props: {
      subjectUserId: { type: String, default: "" },
      showType: { type: String, default: "" },
      commentItem: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pageType: { type: String, default: "" },
    },
    data: function () {
      return { showStart: !1, hasExposed: !1 };
    },
    mounted: function () {},
    beforeDestroy: function () {},
    computed: {
      userType: function () {
        var e, t;
        return (
          (null == (e = this.commentItem) ? void 0 : e.vip_type) ||
          (null == (t = this.commentItem) ? void 0 : t.from_vip_type) ||
          ""
        );
      },
      toUType: function () {
        var e;
        return (null == (e = this.commentItem) ? void 0 : e.to_vip_type) || "";
      },
      canShowSlot: function () {
        return "stock" === this.pageType || "topic" === this.pageType;
      },
      isReplyOwner: function () {
        return this.subjectUserId === this.commentItem.to_user;
      },
    },
    methods: {
      tapPerson: function (e) {
        this.$emit("tapPerson", e);
      },
      tapImage: function (e) {
        this.$emit("tapImage", e);
      },
      tapCommentTail: function (e) {
        this.$emit("tapCommentTail", e);
      },
      initExposureObserver: function () {},
      destroyObserver: function () {},
      reportExposure: function () {},
    },
  };
Array || e.resolveComponent("shortContent")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, o, m, r, s) {
      return e.e(
        {
          a: e.t(o.commentItem.from_user_name || o.commentItem.user_name),
          b: e.n(1001 === s.userType ? "personal vip" : ""),
          c: e.n(1002 === s.userType ? "enterprise vip" : ""),
          d: e.o(function (e) {
            return s.tapPerson(
              o.commentItem.user_id || o.commentItem.from_user
            );
          }, 5774),
          e:
            o.subjectUserId ===
            (o.commentItem.user_id || o.commentItem.from_user),
        },
        o.subjectUserId === (o.commentItem.user_id || o.commentItem.from_user)
          ? {
              f: e.t("long" === o.showType ? "作者" : "楼主"),
              g: e.n(
                o.subjectUserId ===
                  (o.commentItem.user_id || o.commentItem.from_user)
                  ? "author"
                  : ""
              ),
            }
          : {},
        {
          h:
            o.commentItem.replyTo &&
            o.commentItem.replyTo.text &&
            !s.isReplyOwner,
        },
        o.commentItem.replyTo && o.commentItem.replyTo.text && !s.isReplyOwner
          ? e.e(
              { i: o.commentItem.replyTo.text },
              o.commentItem.replyTo.text
                ? {
                    j: e.t(o.commentItem.replyTo.text.replace(/(\s*$)/g, "")),
                    k: e.n(1001 === s.toUType ? "personal vip" : ""),
                    l: e.n(1002 === s.toUType ? "enterprise vip" : ""),
                    m: e.o(function (e) {
                      return s.tapPerson(o.commentItem.to_user);
                    }, 5775),
                  }
                : {}
            )
          : {},
        {
          n: e.o(s.tapImage, 5776),
          o: e.p({
            itemType: "comment",
            itemData: o.commentItem,
            pageType: o.pageType,
          }),
          p: e.o(function (e) {
            return s.tapCommentTail(o.commentItem);
          }, 5777),
          q: o.commentItem.comment_id,
        }
      );
    },
  ],
  ["__scopeId", "data-v-b9fbe9a6"],
]);
wx.createComponent(n);
