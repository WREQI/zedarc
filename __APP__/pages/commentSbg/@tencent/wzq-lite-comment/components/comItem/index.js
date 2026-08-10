var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  o = function (e, n, i) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[n] = i);
  },
  r = require("../../../stock-community-base/utils/knife.js"),
  s = require("../../../../../../common/vendor.js"),
  m = {
    name: "ComItem",
    components: {
      BaseImage: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/baseImage/index.js";
      },
      itemHeader: function () {
        return "../itemHeader/index.js";
      },
      longContent: function () {
        return "../longContent/index.js";
      },
      shortContent: function () {
        return "../shortContent/index.js";
      },
      showComment: function () {
        return "../showComment/index.js";
      },
      itemImage: function () {
        return "../itemImage/index.js";
      },
    },
    inject: {
      stockPollPool: { value: "stockPollPool", default: null },
      hqBridge: { default: {} },
      stockBridge: { default: {} },
      registerExposureElement: { default: null },
      unregisterExposureElement: { default: null },
      addToExposureQueue: { default: null },
    },
    props: {
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
      showLabels: {
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
      last: { type: Boolean, default: !1 },
      from: { type: String, default: "" },
      comIndex: { type: String, default: "" },
      pageId: { type: String, default: "" },
      stockName: { type: String, default: "" },
      topic: { type: String, default: "" },
      selection: { type: String, default: "" },
      position: { type: Number, default: 0 },
      defaultImg: { require: !1 },
    },
    data: function () {
      return {
        platform: r.platform,
        imageRefreshFlag: 0,
        canHighLight: !1,
        animationKey: 0,
        anchorId: "",
        hasExposed: !1,
      };
    },
    computed: {
      env: function () {
        try {
          return { IS_WEIXIN: !1, IS_ZXG: !1, IS_ZXG_XCX: !0, IS_WZQ_XCX: !1 };
        } catch (e) {}
        return {};
      },
      replyItemBottomHandle: function () {
        return this.itemBottomHandle.filter(function (e) {
          return "like" !== e;
        });
      },
      isItemShort: function () {
        return (
          -1 !==
          ["short", "reply", "turnNews", "turn", "share"].indexOf(
            this.itemData.showType
          )
        );
      },
      isTopic: function () {
        var e, t;
        return null == (t = null == (e = this.itemData) ? void 0 : e.topic_info)
          ? void 0
          : t.topic_id;
      },
      userId: function () {
        var e, t;
        return (
          (null == (e = this.itemData) ? void 0 : e.user_id) ||
          (null == (t = this.itemData) ? void 0 : t.from_user) ||
          ""
        );
      },
      topicInfo: function () {
        var t;
        return (
          (null == (t = this.itemData) ? void 0 : t.topic_info) &&
          (function (t, r) {
            for (var s in r || (r = {})) i.call(r, s) && o(t, s, r[s]);
            if (n) {
              var m,
                l = e(n(r));
              try {
                for (l.s(); !(m = l.n()).done; ) {
                  s = m.value;
                  a.call(r, s) && o(t, s, r[s]);
                }
              } catch (e) {
                l.e(e);
              } finally {
                l.f();
              }
            }
            return t;
          })({ selection: 1 }, this.itemData.topic_info)
        );
      },
      showTags: function () {
        return (
          -1 !==
            [
              "square",
              "friends",
              "fund",
              "stgy",
              "stock",
              "topic",
              "personal",
            ].indexOf(this.pageType) && "miniapp" !== this.from
        );
      },
      hotRank: function () {
        var e;
        return (null == (e = this.itemData) ? void 0 : e.hot_rank) || 0;
      },
      selectionDate: function () {
        var e,
          t = null == (e = this.itemData) ? void 0 : e.selection_date;
        return t && t.split("-");
      },
      relatedStocks: function () {
        var t, n, i, a, o;
        if ("square" === this.pageType)
          return null !=
            (i =
              null ==
              (n = null == (t = this.itemData) ? void 0 : t.relatedStocks)
                ? void 0
                : n.slice(0, 2))
            ? i
            : [];
        if ("stock" === this.pageType) {
          var r,
            s =
              null !=
              (o = null == (a = this.itemData) ? void 0 : a.relatedStocks)
                ? o
                : [],
            m = [],
            l = e(s);
          try {
            for (l.s(); !(r = l.n()).done; ) {
              var u = r.value;
              if (u.symbol !== this.pageId && (m.push(u), m.length >= 2)) break;
            }
          } catch (e) {
            l.e(e);
          } finally {
            l.f();
          }
          return m;
        }
        return [];
      },
      userImage: function () {
        return this.itemData.user_image || this.itemData.from_user_image;
      },
      showComments: function () {
        return (
          this.itemData &&
          this.itemData.commentsTail &&
          this.itemData.commentsTail.list &&
          this.itemData.commentsTail.list.length > 0
        );
      },
      userType: function () {
        var e, t;
        return (
          (null == (e = this.itemData) ? void 0 : e.vip_type) ||
          (null == (t = this.itemData) ? void 0 : t.from_vip_type) ||
          ""
        );
      },
    },
    watch: {
      itemData: {
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
        var e = this;
        "commentDetail" === this.pageType &&
          ((this.anchorId = this.stockBridge.getStorage("commentAnchorId")),
          this.itemData &&
            this.itemData.comment_id === this.anchorId &&
            (this.stockBridge.setStorage("commentAnchorId", ""),
            (this.canHighLight = !1),
            (this.animationKey = Date.now()),
            this.$nextTick(function () {
              (e.canHighLight = !0),
                setTimeout(function () {
                  e.canHighLight = !1;
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
      onHandleTapItem: function (e, t) {
        if (this.pageType && "commentDetail" === this.pageType) {
          if ("tapDetail" === (r.isObject(e) ? e.eventName : e)) return;
        }
        var n = this.itemData.top_tag;
        r.isObject(e)
          ? this.$emit("onHandleTapItem", e)
          : this.$emit("onHandleTapItem", {
              eventName: e,
              eventData: t,
              topTag: n,
            });
      },
      getStockReportParams: function (e) {
        var t, n, i, a;
        return (
          this.env.IS_ZXG_XCX
            ? (a = "IDA00p000l122")
            : this.env.IS_WZQ_XCX
            ? (a = "il500p000l123")
            : this.env.IS_WEIXIN
            ? (a = "IrJ00p000l120")
            : this.env.IS_ZXG && (a = "IDg00p000l121"),
          a
            ? {
                fchannel_id_fm_i: a,
                stocklist: null != e ? e : "",
                positionlist: null != (t = this.position) ? t : 0,
                postid:
                  null !=
                  (i = null == (n = this.itemData) ? void 0 : n.subject_id)
                    ? i
                    : "",
                foperation_purpose: "zixuan",
              }
            : {}
        );
      },
      stockbarGoDetail: function (e) {
        var t = this.getStockReportParams(e),
          n = "";
        "square" === this.pageType
          ? this.env.IS_WEIXIN && (n = "shequ.shequ_shouye.stock_detail_click")
          : "stock" === this.pageType &&
            (this.isTopic
              ? this.env.IS_ZXG
                ? (n = "shequ.shequ_gegu.promote_stock_detail_click")
                : this.env.IS_WEIXIN &&
                  (n = "shequ.comment-comment.promote_stock_detail_click")
              : this.env.IS_ZXG
              ? (n = "shequ.shequ_gegu.stock_detail_click")
              : this.env.IS_WEIXIN &&
                (n = "shequ.comment-comment.stock_detail_click")),
          n && this.$emit("commentReport", { eventName: n, data: t });
      },
      stockbarAddStock: function (e) {
        var t = this.getStockReportParams(e),
          n = "";
        this.env.IS_ZXG
          ? (n = "shequ.shequ_guangchang.related_stock_add")
          : this.env.IS_WEIXIN && (n = "shequ.comment.related_stock_add"),
          n && this.$emit("commentReport", { eventName: n, data: t });
      },
      stockbarRemoveStock: function (e) {
        var t = this.getStockReportParams(e),
          n = "";
        this.env.IS_ZXG
          ? (n = "shequ.shequ_guangchang.related_stock_cancel")
          : this.env.IS_WEIXIN && (n = "shequ.comment.related_stock_cancel"),
          n && this.$emit("commentReport", { eventName: n, data: t });
      },
      initExposureObserver: function () {},
      destroyObserver: function () {},
      reportExposure: function () {},
    },
  };
Array ||
  (
    s.resolveComponent("BaseImage") +
    s.resolveComponent("itemHeader") +
    s.resolveComponent("shortContent") +
    s.resolveComponent("longContent") +
    s.resolveComponent("itemImage") +
    s.resolveComponent("showComment")
  )();
var l = s._export_sfc(m, [
  [
    "render",
    function (e, t, n, i, a, o) {
      return s.e(
        {
          a: s.p({
            src: o.userImage,
            "backgroun-color": "DCDFE6",
            "default-img": n.defaultImg,
            "image-refresh-flag": a.imageRefreshFlag,
          }),
          b: s.n(2 === o.userType ? "vip" : ""),
          c: s.n(1001 === o.userType ? "personal vip" : ""),
          d: s.n(1002 === o.userType ? "enterprise vip" : ""),
          e: o.userId,
          f: s.o(function (e) {
            return o.onHandleTapItem("tapPerson", o.userId);
          }, 5370),
          g: s.o(function (e) {
            return o.onHandleTapItem("tapDetail");
          }, 5371),
          h: s.o(function (e) {
            return o.onHandleTapItem(e);
          }, 5372),
          i: s.p({
            "item-data": n.itemData,
            "show-labels": n.showLabels,
            "image-refresh-flag": a.imageRefreshFlag,
            "item-top-handle": n.itemTopHandle,
            "page-type": n.pageType,
            "reply-type":
              "commentDetail" === n.pageType ? "putPeply" : "putComment",
            "item-bottom-handle": n.itemBottomHandle,
          }),
          j: o.isItemShort,
        },
        o.isItemShort
          ? {
              k: s.o(function (e) {
                return o.onHandleTapItem("tapImage", e);
              }, 5373),
              l: s.o(function (e) {
                return o.onHandleTapItem("tapDetail", e);
              }, 5374),
              m: s.o(function (e) {
                return o.onHandleTapItem("toggleShow", e);
              }, 5375),
              n: s.o(function (e) {
                return o.onHandleTapItem("tapContent", e);
              }, 5376),
              o: s.p({
                disabled: "web" === a.platform,
                "item-data": n.itemData,
                "page-type": n.pageType,
              }),
            }
          : {},
        { p: "long" === n.itemData.showType },
        "long" === n.itemData.showType
          ? {
              q: s.o(function (e) {
                return o.onHandleTapItem("tapDetail", e);
              }, 5377),
              r: s.o(function (e) {
                return o.onHandleTapItem("toggleShow", e);
              }, 5378),
              s: s.p({
                "item-data": n.itemData.detailInfo,
                "page-type": n.pageType,
              }),
            }
          : {},
        {
          t: s.o(function (e) {
            return o.onHandleTapItem("tapDetail");
          }, 5379),
          v: s.o(function (e) {
            return o.onHandleTapItem("tapImage", e);
          }, 5380),
          w: s.p({
            "disable-simple-img": !1,
            "disable-lit-imag": o.setDisableLitImag(n.itemData),
            "item-data": n.itemData,
          }),
          x:
            1 === n.itemData.is_yb_answer &&
            n.itemData.yb_disclaimer &&
            n.itemData.yb_disclaimer.length > 0,
        },
        1 === n.itemData.is_yb_answer &&
          n.itemData.yb_disclaimer &&
          n.itemData.yb_disclaimer.length > 0
          ? { y: s.t(n.itemData.yb_disclaimer) }
          : {},
        {
          z: "comItem-".concat(n.itemData.comment_id),
          A: "blink-active-comItem-".concat(a.animationKey),
          B: a.canHighLight ? 1 : "",
          C: n.itemData.subject_id,
          D: s.o(o.onHandleTapItem, 5381),
          E: s.o(function (e) {
            return o.onHandleTapItem("tapCommentItem", e);
          }, 5382),
          F: s.o(function (e) {
            return o.onHandleTapItem("tapImage", e);
          }, 5383),
          G: s.o(function (e) {
            return o.onHandleTapItem("tapDetail", e);
          }, 5384),
          H: s.o(function (e) {
            return o.onHandleTapItem("tapPerson", e);
          }, 5385),
          I: s.o(function (e) {
            return o.onHandleTapItem(e);
          }, 5386),
          J: s.p({
            "item-data": n.itemData,
            "show-labels": n.showLabels,
            "image-refresh-flag": a.imageRefreshFlag,
            "item-top-handle": n.itemTopHandle,
            "page-type": n.pageType,
            "item-bottom-handle": o.replyItemBottomHandle,
          }),
          K: s.n(n.last ? "last" : ""),
          L: n.comIndex,
          M: s.n(n.last ? "last" : ""),
          N: n.itemData.id,
        }
      );
    },
  ],
  ["__scopeId", "data-v-4025b032"],
]);
wx.createComponent(l);
