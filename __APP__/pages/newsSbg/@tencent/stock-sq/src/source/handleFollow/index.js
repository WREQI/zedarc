var t = require("../../../../stock-community-base/utils/knife.js"),
  e = require("../../../../stock-community-base/utils/mixins/checkComStatus.js"),
  o = require("../../../../../../../common/vendor.js"),
  i = {
    name: "handleFollow",
    mixins: [e.CheckStatusMixin],
    components: {
      BubbleTip: function () {
        return "../bubbleTip/index.js";
      },
    },
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isBlack: { type: Number, require: 0 },
      pageType: { type: String, default: "" },
    },
    data: function () {
      return { platform: t.platform, isWZQXCX: !1, isLiteMode: !1 };
    },
    computed: {},
    methods: {
      handleBlack: function (t) {
        this.checkSubjectStatus(this.itemData) &&
          2 == +t &&
          this.$emit("toast", "根据对方设置，您无法关注");
      },
      tapFollow: function (t) {
        this.checkSubjectStatus(this.itemData) &&
          (t || (this.$emit("tapFollow"), this.$forceUpdate()));
      },
    },
    created: function () {},
    mounted: function () {},
    watch: {},
  };
Array || o.resolveComponent("BubbleTip")();
var a = o._export_sfc(i, [
  [
    "render",
    function (t, e, i, a, n, l) {
      return o.e(
        { a: !i.itemData.owner },
        i.itemData.owner
          ? {}
          : o.e(
              { b: i.isBlack },
              i.isBlack
                ? {
                    c: o.t(1 == i.isBlack ? "已拉黑" : "关注"),
                    d: o.o(function (t) {
                      return l.handleBlack(i.isBlack);
                    }, 4894),
                  }
                : o.e(
                    {
                      e: o.t(i.itemData.isFollow ? "已关注" : "关注"),
                      f: !i.itemData.isFollow && i.itemData.isFollowBubbleShow,
                    },
                    !i.itemData.isFollow && i.itemData.isFollowBubbleShow
                      ? {
                          g: o.p({
                            isShow: i.itemData.isFollowBubbleShow,
                            content: i.itemData.followBubbleContent,
                            autoClose: !0,
                          }),
                        }
                      : {},
                    {
                      h: o.n(i.itemData.isFollow ? "followed" : "follow"),
                      i: o.o(function (t) {
                        return l.tapFollow(i.itemData.owner);
                      }, 4895),
                    }
                  ),
              {
                j: o.n(i.itemData.owner ? "owner" : ""),
                k: o.n(i.pageType),
                l: o.n(
                  i.itemData.isFollow ? "followed-content" : "follow-content"
                ),
                m: o.n(n.isWZQXCX || n.isLiteMode ? "wzqxcx" : "normal-border"),
              }
            )
      );
    },
  ],
  ["__scopeId", "data-v-9b6651c3"],
]);
wx.createComponent(a);
