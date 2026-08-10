var e = require("../../../../../../../../common/vendor.js"),
  t = {
    name: "showCommentItem",
    components: {
      shortContent: function () {
        return "../shortContent/index.js";
      },
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
      return { showStart: !1 };
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
    },
  };
Array || e.resolveComponent("shortContent")();
var o = e._export_sfc(t, [
  [
    "render",
    function (t, o, m, n, r, s) {
      return e.e(
        { a: r.showStart },
        r.showStart
          ? {
              b: e.t(m.commentItem.from_user_name || m.commentItem.user_name),
              c: e.n(1001 === s.userType ? "personal vip" : ""),
              d: e.n(1002 === s.userType ? "enterprise vip" : ""),
              e: e.o(function (e) {
                return s.tapPerson(
                  m.commentItem.user_id || m.commentItem.from_user
                );
              }, 4899),
            }
          : {},
        {
          f:
            m.subjectUserId ===
            (m.commentItem.user_id || m.commentItem.from_user),
        },
        m.subjectUserId === (m.commentItem.user_id || m.commentItem.from_user)
          ? {
              g: e.t("long" === m.showType ? "作者" : "楼主"),
              h: e.n(
                m.subjectUserId ===
                  (m.commentItem.user_id || m.commentItem.from_user)
                  ? "author"
                  : "friend"
              ),
            }
          : {},
        { i: m.commentItem.replyTo && m.commentItem.replyTo.text },
        m.commentItem.replyTo && m.commentItem.replyTo.text
          ? e.e(
              { j: m.commentItem.replyTo.text },
              m.commentItem.replyTo.text
                ? {
                    k: e.t(m.commentItem.replyTo.text.replace(/(\s*$)/g, "")),
                    l: e.n(1001 === s.toUType ? "personal vip" : ""),
                    m: e.n(1002 === s.toUType ? "enterprise vip" : ""),
                    n: e.o(function (e) {
                      return s.tapPerson(m.commentItem.to_user);
                    }, 4900),
                  }
                : {},
              { o: m.subjectUserId === m.commentItem.to_user },
              m.subjectUserId === m.commentItem.to_user
                ? {
                    p: e.t("long" === m.showType ? "作者" : "楼主"),
                    q: e.n(
                      m.subjectUserId === m.commentItem.to_user
                        ? "author"
                        : "friend"
                    ),
                  }
                : {}
            )
          : {},
        {
          r: e.n(m.pageType),
          s: e.o(s.initShowMore, 4901),
          t: e.o(s.tapImage, 4902),
          v: e.p({
            itemType: "comment",
            fromType: "showcomment",
            pageType: m.pageType,
            itemData: m.commentItem,
          }),
          w: e.o(function (e) {
            return s.tapCommentTail(m.commentItem);
          }, 4903),
        }
      );
    },
  ],
  ["__scopeId", "data-v-ca1a8be2"],
]);
wx.createComponent(o);
