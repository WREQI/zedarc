var e = require("../../../stock-community-base/utils/knife.js"),
  t = require("../../../../../../common/vendor.js"),
  n = {
    name: "showCommentItem",
    components: {
      BaseImage: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/baseImage/index.js";
      },
      itemHeader: function () {
        return "../itemHeader/index.js";
      },
      shortContent: function () {
        return "../shortContent/index.js";
      },
      itemImage: function () {
        return "../itemImage/index.js";
      },
    },
    inject: {
      hqBridge: { default: {} },
      stockBridge: { default: {} },
      registerExposureElement: { default: null },
      unregisterExposureElement: { default: null },
      addToExposureQueue: { default: null },
    },
    props: {
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
      subjectUserId: { type: String, default: "" },
      showType: { type: String, default: "" },
      pageType: { type: String, default: "" },
      commentItem: {
        type: Object,
        default: function () {
          return {};
        },
      },
      defaultImg: { require: !1 },
    },
    watch: {
      commentItem: {
        deep: !0,
        immediate: !0,
        handler: function (e, t) {
          e &&
            t &&
            (e.id !== t.id || e.user_image !== t.user_image) &&
            (this.imageRefreshFlag = Math.random());
        },
      },
    },
    data: function () {
      return {
        showStart: !1,
        imageRefreshFlag: 0,
        canHighLight: !1,
        animationKey: 0,
        anchorId: "",
        hasExposed: !1,
      };
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
      userImage: function () {
        var e, t;
        return (
          (null == (e = this.commentItem) ? void 0 : e.user_headimgurl) ||
          (null == (t = this.commentItem) ? void 0 : t.from_user_image) ||
          ""
        );
      },
      userId: function () {
        var e, t;
        return (
          (null == (e = this.commentItem) ? void 0 : e.user_id) ||
          (null == (t = this.commentItem) ? void 0 : t.from_user) ||
          ""
        );
      },
    },
    mounted: function () {
      this.addAnchorCommentEventListener();
    },
    beforeDestroy: function () {
      this.removeAnchorCommentEventListener();
    },
    deactivated: function () {
      this.removeAnchorCommentEventListener();
    },
    activated: function () {
      this.addAnchorCommentEventListener();
    },
    methods: {
      addAnchorCommentEventListener: function () {
        "commentDetail" === this.pageType &&
          this.stockBridge.busOn(
            "community-scrollto-anchorcomment",
            this.scrollToAnchorComment
          );
      },
      removeAnchorCommentEventListener: function () {
        "commentDetail" === this.pageType &&
          this.stockBridge.busOff(
            "community-scrollto-anchorcomment",
            this.scrollToAnchorComment
          );
      },
      scrollToAnchorComment: function () {
        var e,
          t = this;
        "commentDetail" === this.pageType &&
          ((this.anchorId = this.stockBridge.getStorage("commentAnchorId")),
          this.commentItem &&
            (null == (e = this.commentItem) ? void 0 : e.comment_id) ===
              this.anchorId &&
            (this.stockBridge.setStorage("commentAnchorId", ""),
            (this.canHighLight = !1),
            (this.animationKey = Date.now()),
            this.$nextTick(function () {
              (t.canHighLight = !0),
                setTimeout(function () {
                  t.canHighLight = !1;
                }, 1e3);
            })));
      },
      setDisableLitImag: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          e.image_list &&
          1 === e.image_list.length &&
          e.image_list[0].origin &&
          -1 !== e.image_list[0].origin.indexOf("gif123")
        );
      },
      onHandleTapItem: function (t, n) {
        var o = this.commentItem.top_tag;
        e.isObject(t)
          ? this.$emit("onHandleTapItem", t)
          : this.$emit("onHandleTapItem", {
              eventName: t,
              eventData: n,
              topTag: o,
            });
      },
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
Array ||
  (
    t.resolveComponent("BaseImage") +
    t.resolveComponent("itemHeader") +
    t.resolveComponent("shortContent") +
    t.resolveComponent("itemImage")
  )();
var o = t._export_sfc(n, [
  [
    "render",
    function (e, n, o, m, i, r) {
      return t.e(
        {
          a: t.p({
            src: r.userImage,
            backgrounColor: "DCDFE6",
            defaultImg: o.defaultImg,
            imageRefreshFlag: i.imageRefreshFlag,
          }),
          b: t.n(2 === r.userType ? "vip" : ""),
          c: t.n(1001 === r.userType ? "personal vip" : ""),
          d: t.n(1002 === r.userType ? "enterprise vip" : ""),
          e: r.userId,
          f: t.o(function (e) {
            return r.tapPerson(r.userId);
          }, 5737),
          g: t.o(function (e) {
            return r.onHandleTapItem("tapDetail");
          }, 5738),
          h: t.o(function (e) {
            return r.onHandleTapItem(e);
          }, 5739),
          i: t.p({
            itemData: o.commentItem,
            imageRefreshFlag: i.imageRefreshFlag,
            itemTopHandle: o.itemTopHandle,
            pageType: o.pageType,
            itemBottomHandle: o.itemBottomHandle,
            replyType: "putPeply",
          }),
          j: o.commentItem.replyTo && o.commentItem.replyTo.text,
        },
        o.commentItem.replyTo && o.commentItem.replyTo.text
          ? t.e(
              { k: o.commentItem.replyTo.text },
              o.commentItem.replyTo.text
                ? {
                    l: t.t(o.commentItem.replyTo.text.replace(/(\s*$)/g, "")),
                    m: t.n(1001 === r.toUType ? "personal vip" : ""),
                    n: t.n(1002 === r.toUType ? "enterprise vip" : ""),
                    o: t.o(function (e) {
                      return r.tapPerson(o.commentItem.to_user);
                    }, 5740),
                  }
                : {}
            )
          : {},
        {
          p: t.n(o.pageType),
          q: t.o(r.initShowMore, 5741),
          r: t.o(function (e) {
            return r.onHandleTapItem("tapImage", e);
          }, 5742),
          s: t.o(function (e) {
            return r.onHandleTapItem("tapDetail", e);
          }, 5743),
          t: t.o(function (e) {
            return r.onHandleTapItem("toggleShow", e);
          }, 5744),
          v: t.o(function (e) {
            return r.onHandleTapItem("tapContent", e);
          }, 5745),
          w: t.p({
            itemType: "comment",
            fromType: "showcomment",
            pageType: o.pageType,
            itemData: o.commentItem,
          }),
          x: t.o(function (e) {
            return r.onHandleTapItem("tapImage", e);
          }, 5746),
          y: t.p({
            disableSimpleImg: !1,
            disableLitImag: r.setDisableLitImag(o.commentItem),
            itemData: o.commentItem,
          }),
          z:
            1 === o.commentItem.is_yb_answer &&
            o.commentItem.yb_disclaimer &&
            o.commentItem.yb_disclaimer.length > 0,
        },
        1 === o.commentItem.is_yb_answer &&
          o.commentItem.yb_disclaimer &&
          o.commentItem.yb_disclaimer.length > 0
          ? { A: t.t(o.commentItem.yb_disclaimer) }
          : {},
        {
          B: "comItem-".concat(o.commentItem.comment_id),
          C: "blink-active-".concat(i.animationKey),
          D: i.canHighLight ? 1 : "",
          E: t.o(function (e) {
            return r.tapCommentTail(o.commentItem);
          }, 5747),
          F: o.commentItem.comment_id,
        }
      );
    },
  ],
  ["__scopeId", "data-v-ab36eca9"],
]);
wx.createComponent(o);
