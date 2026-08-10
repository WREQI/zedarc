var e = require("../../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../stock-community-base/utils/knife.js"),
  a = require("../../../../../stock-community-base/utils/constant.js"),
  n = require("../../../../../../../../common/vendor.js"),
  i = t.sdk.showKnowModal,
  o = {
    name: "itemHeader",
    components: {
      avatorCard: function () {
        return "../avatorCard/index.js";
      },
      handleFollow: function () {
        return "../../handleFollow/index.js";
      },
      showLabel: function () {
        return "../../showLabel/index.js";
      },
      handleMore: function () {
        return "../../handleMore/index.js";
      },
      handleOper: function () {
        return "../handleOper/index.js";
      },
    },
    props: {
      showLabels: {
        type: Array,
        default: function () {
          return [];
        },
      },
      replyList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pageType: { type: String, default: "" },
      itemTopHandle: Array,
      itemBottomHandle: Array,
      imageRefreshFlag: { default: 0 },
      isShowMark: { type: Boolean, default: !1 },
      subjectUserId: { type: String, default: "" },
      isBlack: { type: Number, require: 0 },
      BUS: {
        type: Object,
        default: function () {
          return {};
        },
      },
      subjectData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showImage: { type: Boolean, default: !0 },
      showOper: { type: Boolean, default: !0 },
    },
    data: function () {
      return { platform: t.platform, isMP: !0 };
    },
    mounted: function () {},
    computed: {
      rightTips: function () {
        return this.itemData.comment_type &&
          "comment_like" !== this.itemData.comment_type
          ? { icon: "sq-icon-pinglun", text: "" }
          : { icon: "sq-icon-hongniu", text: "点赞了你的帖子" };
      },
      rightClass: function () {
        return this.isMP
          ? "right"
          : [].concat(e(this.itemTopHandle), ["right"]);
      },
      isShowOneself: function () {
        var e = this.itemData,
          t = e.status,
          a = e.owner;
        return (2 == +t || 3 == +t || 1e3 == +t) && 1 === a;
      },
      showHandleMore: function () {
        return (
          -1 !== this.itemTopHandle.indexOf("more") ||
          ("messageBox" === this.pageType &&
            this.itemData.comment_type &&
            "comment_like" !== this.itemData.comment_type)
        );
      },
      hideMoreIcon: function () {
        var e = getCurrentPages();
        return "pages/newsCon/video/videoDetail" === e[e.length - 1].route;
      },
    },
    methods: {
      handleOneself: function () {
        var e = this.itemData.status,
          t = a.opeOwnerVisibleCommentTextMap;
        t[+e] && i({ content: t[+e], confirmText: "我知道了" });
      },
      handleTurn: function () {
        var e = this.itemData.commentid,
          t = this.replyList.findIndex(function (t) {
            return t.commentid === e;
          });
        (t < 0 && "detail" === this.pageType) ||
          this.$emit("handleTurn", { index: t, eventData: this.itemData });
      },
      handleHeader: function (e, t) {
        this.$emit("handleHeader", { eventName: e, eventData: t });
      },
      handleOper: function (e) {
        this.$emit("handleHeader", e);
      },
      tapDetail: function () {
        this.$emit("tapDetail");
      },
      tapTipClick: function () {
        "sq-icon-pinglun" === this.rightTips.icon &&
          this.$emit("tapReply", {
            eventName: "reply",
            eventData: this.itemData,
          });
      },
      tapStock: function (e, t) {
        var a = t.action,
          n = t.itemData,
          i = {
            eventName: e,
            eventData: {
              eventName: "tapStock" === a ? "stock" : "topic",
              eventData: {},
            },
          };
        "tapStock" === a
          ? ((i.eventData.eventData.symbol = n.stock_id),
            (i.eventData.eventData.text = n.stock_name))
          : "tapTopic" === a && (i.eventData.eventData.topicId = n.topic_id),
          this.$emit("handleHeader", i);
      },
    },
  };
Array ||
  (n.resolveComponent("avatorCard") + n.resolveComponent("handleOper"))();
var r = n._export_sfc(o, [
  [
    "render",
    function (e, t, a, i, o, r) {
      return n.e(
        {
          a: n.o(function (e) {
            return r.handleHeader("tapPerson", e);
          }, 4564),
          b: n.o(function (e) {
            return r.tapStock("tapContent", e);
          }, 4565),
          c: n.p({
            disabled: !!a.itemData.from_news,
            itemData: a.itemData,
            isShowTag: a.itemData.url,
            pageType: a.pageType,
            isShowMark: a.isShowMark,
            subjectUserId: a.subjectUserId,
            imageRefreshFlag: a.imageRefreshFlag,
            subjectData: a.subjectData,
            isShowAction: ["personal", "friends"].indexOf(a.pageType) > -1,
            showImage: a.showImage,
          }),
          d: a.showOper,
        },
        a.showOper
          ? {
              e: n.o(r.handleOper, 4566),
              f: n.p({
                itemData: a.itemData,
                itemBottomHandle: a.itemBottomHandle,
                pageType: a.pageType,
                BUS: a.BUS,
              }),
            }
          : {},
        {
          g: n.n(r.rightClass),
          h: n.o(function () {
            return r.tapDetail && r.tapDetail.apply(r, arguments);
          }, 4567),
        }
      );
    },
  ],
  ["__scopeId", "data-v-5c32fcd3"],
]);
wx.createComponent(r);
