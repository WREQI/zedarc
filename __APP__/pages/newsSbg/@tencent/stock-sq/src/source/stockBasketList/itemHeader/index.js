var e = require("../../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../stock-community-base/utils/constant.js"),
  a = require("../../../../../stock-community-base/utils/knife.js"),
  n = require("../../../../../../../../common/vendor.js"),
  o = a.sdk.showKnowModal,
  i = {
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
    },
    data: function () {
      return { platform: a.platform, isMP: !0 };
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
          a = t.opeOwnerVisibleCommentTextMap;
        a[+e] && o({ content: a[+e], confirmText: "我知道了" });
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
          }, 4259),
          b: n.o(function (e) {
            return r.tapStock("tapContent", e);
          }, 4260),
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
          d: 1 == a.itemData.top_tag,
        },
        (a.itemData.top_tag, {}),
        { e: "messageBox" === a.pageType && !!a.itemData.comment_type },
        "messageBox" === a.pageType && a.itemData.comment_type
          ? {
              f: n.n(r.rightTips.icon),
              g: n.t(r.rightTips.text),
              h: n.o(function () {
                return r.tapTipClick && r.tapTipClick.apply(r, arguments);
              }, 4261),
            }
          : {},
        {
          i: !(
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
              j: n.p({
                itemData: a.itemData,
                showLabels: a.showLabels,
                pageType: a.pageType,
              }),
            },
        {
          k:
            -1 !== a.itemTopHandle.indexOf("follow") &&
            !(a.itemData.owner && "detail" === a.pageType),
        },
        -1 === a.itemTopHandle.indexOf("follow") ||
          (a.itemData.owner && "detail" === a.pageType)
          ? {}
          : {
              l: n.o(function (e) {
                return r.handleHeader("tapFollow", e);
              }, 4262),
              m: n.o(function (e) {
                return r.handleHeader("toast", e);
              }, 4263),
              n: n.p({
                itemData: a.itemData,
                pageType: a.pageType,
                isBlack: a.isBlack,
              }),
            },
        { o: r.isShowOneself },
        r.isShowOneself
          ? {
              p: n.n(
                -1 !== a.itemTopHandle.indexOf("more") ? "" : "look-oneself-mar"
              ),
              q: n.o(function () {
                return r.handleOneself && r.handleOneself.apply(r, arguments);
              }, 4264),
            }
          : {},
        { r: r.showHandleMore },
        r.showHandleMore
          ? {
              s: n.o(function (e) {
                return r.handleHeader("tapMore", e);
              }, 4265),
              t: n.o(function (e) {
                return r.handleHeader("tapIllegal", e);
              }, 4266),
              v: n.o(function (e) {
                return r.handleHeader("tapDeleteItem", e);
              }, 4267),
              w: n.o(function (e) {
                return r.handleHeader("toast", e);
              }, 4268),
              x: n.o(r.handleTurn, 4269),
              y: n.p({
                itemData: a.itemData,
                subjectData: a.subjectData,
                BUS: a.BUS,
                pageType: a.pageType,
                hideSangedianIcon: r.hideMoreIcon,
              }),
            }
          : {},
        {
          z: n.n(r.rightClass),
          A: n.o(function () {
            return r.tapDetail && r.tapDetail.apply(r, arguments);
          }, 4270),
        }
      );
    },
  ],
  ["__scopeId", "data-v-133c02a6"],
]);
wx.createComponent(r);
