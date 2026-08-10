var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../stock-community-base/utils/knife.js"),
  a = require("../../../stock-community-base/utils/constant.js"),
  n = require("../../../../../../common/vendor.js"),
  o = {
    name: "ItemHeader",
    components: {
      avatorCard: function () {
        return "../avatorCard/index.js";
      },
      handleOper: function () {
        return "../handleOper/index.js";
      },
    },
    props: {
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
      itemTopHandle: {
        type: Array,
        default: function () {
          return [];
        },
      },
      itemBottomHandle: {
        type: Array,
        default: function () {
          return [];
        },
      },
      imageRefreshFlag: { default: 0 },
      isShowMark: { type: Boolean, default: !1 },
      subjectUserId: { type: String, default: "" },
      isBlack: { type: Number, require: 0 },
      subjectData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showImage: { type: Boolean, default: !0 },
      showOper: { type: Boolean, default: !0 },
      showReply: { type: Boolean, default: !0 },
      replyType: { type: String, default: "putComment" },
    },
    data: function () {
      return { platform: t.platform, isMP: !0 };
    },
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
          n = e.owner;
        return (
          "number" == typeof t &&
          a.commentSpecialStatus.indexOf(+t) > -1 &&
          1 === n
        );
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
    mounted: function () {},
    methods: {
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
          o = {
            eventName: e,
            eventData: {
              eventName: "tapStock" === a ? "stock" : "topic",
              eventData: {},
            },
          };
        "tapStock" === a
          ? ((o.eventData.eventData.symbol = n.stock_id),
            (o.eventData.eventData.text = n.stock_name))
          : "tapTopic" === a && (o.eventData.eventData.topicId = n.topic_id),
          this.$emit("handleHeader", o);
      },
    },
  };
Array ||
  (n.resolveComponent("avatorCard") + n.resolveComponent("handleOper"))();
var i = n._export_sfc(o, [
  [
    "render",
    function (e, t, a, o, i, r) {
      return n.e(
        {
          a: n.o(function (e) {
            return r.handleHeader("tapPerson", e);
          }, 5550),
          b: n.o(function (e) {
            return r.tapStock("tapContent", e);
          }, 5551),
          c: n.p({
            disabled: !!a.itemData.from_news,
            "item-data": a.itemData,
            "is-show-tag": a.itemData.url,
            "page-type": a.pageType,
            "is-show-mark": a.isShowMark,
            "subject-user-id": a.subjectUserId,
            "image-refresh-flag": a.imageRefreshFlag,
            "subject-data": a.subjectData,
            "is-show-action": ["personal", "friends"].indexOf(a.pageType) > -1,
            "show-image": a.showImage,
          }),
          d: a.showReply || a.showOper,
        },
        a.showReply || a.showOper
          ? {
              e: n.o(r.handleOper, 5552),
              f: n.p({
                "item-data": a.itemData,
                "item-bottom-handle": a.itemBottomHandle,
                "page-type": a.pageType,
                "show-reply": a.showReply,
                "show-oper": a.showOper,
                "reply-type": a.replyType,
              }),
            }
          : {},
        {
          g: n.n(r.rightClass),
          h: n.o(function () {
            return r.tapDetail && r.tapDetail.apply(r, arguments);
          }, 5553),
        }
      );
    },
  ],
  ["__scopeId", "data-v-8af208a5"],
]);
wx.createComponent(i);
