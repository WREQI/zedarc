var t = require("../../../../../../../common/vendor.js"),
  e = {
    name: "showTurnNum",
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      allowLike: { type: Boolean, default: !0 },
    },
    components: {},
    data: function () {
      return {};
    },
    computed: {},
    methods: {},
    created: function () {},
  },
  a = t._export_sfc(e, [
    [
      "render",
      function (e, a, n, o, m, r) {
        return t.e(
          {
            a: t.t(n.itemData.retweetNum || n.itemData.retweet_count || 0),
            b: t.t(n.itemData.commentNum || n.itemData.comment_cnt || 0),
            c: n.allowLike,
          },
          n.allowLike
            ? { d: t.t(n.itemData.likeNum || n.itemData.like_num || 0) }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-fc06bd6d"],
  ]);
wx.createComponent(a);
