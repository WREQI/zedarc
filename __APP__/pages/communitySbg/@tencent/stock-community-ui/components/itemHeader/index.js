var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../stock-community-base/utils/knife.js"),
  a = require("../../../stock-community-base/utils/constant.js"),
  n = require("../../../../../../common/vendor.js"),
  o = t.sdk.showKnowModal,
  i = {
    name: "itemHeader",
    components: {
      avatorCard: function () {
        return "../avatorCard/index.js";
      },
      handleFollow: function () {
        return "../handleFollow/index.js";
      },
      showLabel: function () {
        return "../showLabel/index.js";
      },
      handleMore: function () {
        return "../handleMore/index.js";
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
    methods: {
      handleOneself: function () {
        var e = this.itemData.status,
          t = a.opeOwnerVisibleCommentTextMap;
        t[+e] &&
          o({
            content: t[+e],
            confirmText: "我知道了",
            confirmColor: "#E63535",
          });
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
  (
    n.resolveComponent("avatorCard") +
    n.resolveComponent("showLabel") +
    n.resolveComponent("handleFollow") +
    n.resolveComponent("handleMore")
  )();
var r = n._export_sfc(i, [
  [
    "render",
    function (e, t, a, o, i, r) {
      return n.e(
        {
          a: n.o(function (e) {
            return r.handleHeader("tapPerson", e);
          }, 5677),
          b: n.o(function (e) {
            return r.tapStock("tapContent", e);
          }, 5678),
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
          }),
          d: "messageBox" === a.pageType && !!a.itemData.comment_type,
        },
        "messageBox" === a.pageType && a.itemData.comment_type
          ? {
              e: n.n(r.rightTips.icon),
              f: n.t(r.rightTips.text),
              g: n.o(function () {
                return r.tapTipClick && r.tapTipClick.apply(r, arguments);
              }, 5679),
            }
          : {},
        {
          h: !(
            a.itemData.top_tag ||
            ("news" === a.pageType && "app" === i.platform) ||
            "messageBox" === a.pageType ||
            "detail" === a.pageType
          ),
        },
        a.itemData.top_tag ||
          ("news" === a.pageType && "app" === i.platform) ||
          "messageBox" === a.pageType ||
          "detail" === a.pageType
          ? {}
          : {
              i: n.p({
                itemData: a.itemData,
                showLabels: a.showLabels,
                pageType: a.pageType,
              }),
            },
        { j: -1 !== a.itemTopHandle.indexOf("follow") && !a.itemData.owner },
        -1 === a.itemTopHandle.indexOf("follow") || a.itemData.owner
          ? {}
          : {
              k: n.o(function (e) {
                return r.handleHeader("tapFollow", e);
              }, 5680),
              l: n.o(function (e) {
                return r.handleHeader("toast", e);
              }, 5681),
              m: n.p({
                itemData: a.itemData,
                pageType: a.pageType,
                isBlack: a.isBlack,
              }),
            },
        { n: r.isShowOneself },
        r.isShowOneself
          ? {
              o: n.n(
                -1 !== a.itemTopHandle.indexOf("more") ? "" : "look-oneself-mar"
              ),
              p: n.o(function () {
                return r.handleOneself && r.handleOneself.apply(r, arguments);
              }, 5682),
            }
          : {},
        { q: r.showHandleMore },
        r.showHandleMore
          ? {
              r: n.o(function (e) {
                return r.handleHeader("tapMore", e);
              }, 5683),
              s: n.o(function (e) {
                return r.handleHeader("tapIllegal", e);
              }, 5684),
              t: n.o(function (e) {
                return r.handleHeader("tapDeleteItem", e);
              }, 5685),
              v: n.o(function (e) {
                return r.handleHeader("toast", e);
              }, 5686),
              w: n.o(r.handleTurn, 5687),
              x: n.p({
                itemData: a.itemData,
                subjectData: a.subjectData,
                pageType: a.pageType,
                hideSangedianIcon: r.hideMoreIcon,
              }),
            }
          : {},
        {
          y: n.n(r.rightClass),
          z: n.o(function () {
            return r.tapDetail && r.tapDetail.apply(r, arguments);
          }, 5688),
        }
      );
    },
  ],
  ["__scopeId", "data-v-efcb78fd"],
]);
wx.createComponent(r);
