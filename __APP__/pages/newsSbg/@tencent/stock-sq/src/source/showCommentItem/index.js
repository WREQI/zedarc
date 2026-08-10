var e = require("../../../../stock-community-base/utils/knife.js"),
  t = require("../../../../../../../common/vendor.js"),
  o = {
    name: "showCommentItem",
    options: { styleIsolation: "shared" },
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
      pageType: { type: String, default: "" },
      commentItem: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return { showStart: !1, platform: e.platform, hasExposed: !1 };
    },
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
    },
    mounted: function () {},
    beforeDestroy: function () {},
    methods: {
      initShowMore: function () {
        this.showStart = !0;
      },
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
Array || t.resolveComponent("shortContent")();
var n = t._export_sfc(o, [
  [
    "render",
    function (e, o, n, m, r, s) {
      return t.e(
        { a: r.showStart },
        r.showStart
          ? {
              b: t.t(n.commentItem.from_user_name || n.commentItem.user_name),
              c: t.n(1001 === s.userType ? "personal vip" : ""),
              d: t.n(1002 === s.userType ? "enterprise vip" : ""),
              e: t.o(function (e) {
                return s.tapPerson(
                  n.commentItem.user_id || n.commentItem.from_user
                );
              }, 4930),
            }
          : {},
        {
          f:
            n.subjectUserId ===
            (n.commentItem.user_id || n.commentItem.from_user),
        },
        n.subjectUserId === (n.commentItem.user_id || n.commentItem.from_user)
          ? {
              g: t.t("long" === n.showType ? "作者" : "楼主"),
              h: t.n(
                n.subjectUserId ===
                  (n.commentItem.user_id || n.commentItem.from_user)
                  ? "author"
                  : "friend"
              ),
            }
          : {},
        { i: n.commentItem.replyTo && n.commentItem.replyTo.text },
        n.commentItem.replyTo && n.commentItem.replyTo.text
          ? t.e(
              { j: n.commentItem.replyTo.text },
              n.commentItem.replyTo.text
                ? {
                    k: t.t(n.commentItem.replyTo.text.replace(/(\s*$)/g, "")),
                    l: t.n(1001 === s.toUType ? "personal vip" : ""),
                    m: t.n(1002 === s.toUType ? "enterprise vip" : ""),
                    n: t.o(function (e) {
                      return s.tapPerson(n.commentItem.to_user);
                    }, 4931),
                  }
                : {},
              { o: n.subjectUserId === n.commentItem.to_user },
              n.subjectUserId === n.commentItem.to_user
                ? {
                    p: t.t("long" === n.showType ? "作者" : "楼主"),
                    q: t.n(
                      n.subjectUserId === n.commentItem.to_user
                        ? "author"
                        : "friend"
                    ),
                  }
                : {}
            )
          : {},
        {
          r: t.o(s.initShowMore, 4932),
          s: t.o(s.tapImage, 4933),
          t: t.p({ itemType: "comment", itemData: n.commentItem }),
          v: n.pageType,
          w: r.platform,
          x: n.commentItem.comment_id,
          y: t.o(function (e) {
            return s.tapCommentTail(n.commentItem);
          }, 4934),
        }
      );
    },
  ],
  ["__scopeId", "data-v-8aa1a29f"],
]);
wx.createComponent(n);
