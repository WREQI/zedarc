var e = require("../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  i = function (e, n, a) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[n] = a);
  },
  r = require("../../../../../stock-community-base/utils/knife.js"),
  s = require("../../../../../../../../common/vendor.js"),
  l = {
    name: "ComItem",
    components: {
      itemHeader: function () {
        return "../itemHeader/index.js";
      },
      otherSource: function () {
        return "../../otherSource/index.js";
      },
      handleOper: function () {
        return "../handleOper/index.js";
      },
      longContent: function () {
        return "../../longContent/index.js";
      },
      shortContent: function () {
        return "../../shortContent/index.js";
      },
      itemImage: function () {
        return "../../itemImage/index.js";
      },
      showComment: function () {
        return "../showComment/index.js";
      },
      showTurn: function () {
        return "../../showTurn/index.js";
      },
      showBox: function () {
        return "../../showBox/index.js";
      },
      itemHqMins: function () {
        return "../../itemHqMins/index.js";
      },
      stockBar: function () {
        return "../../relatedStocks/stockBar.js";
      },
    },
    props: {
      pageType: { type: String, default: "" },
      itemTopHandle: Array,
      itemBottomHandle: Array,
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
      BUS: {
        type: Object,
        default: function () {
          return {};
        },
      },
      comIndex: { type: String, default: "" },
      pageId: { type: String, default: "" },
      stockName: { type: String, default: "" },
      topic: { type: String, default: "" },
      selection: { type: String, default: "" },
      position: { type: Number, default: 0 },
    },
    inject: { stockPollPool: { value: "stockPollPool", default: null } },
    data: function () {
      return { platform: r.platform, imageRefreshFlag: 0 };
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
    computed: {
      env: function () {
        try {
          return { IS_WEIXIN: !1, IS_ZXG: !1, IS_ZXG_XCX: !0, IS_WZQ_XCX: !1 };
        } catch (e) {}
        return {};
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
      topicInfo: function () {
        var t;
        return (
          (null == (t = this.itemData) ? void 0 : t.topic_info) &&
          (function (t, r) {
            for (var s in r || (r = {})) a.call(r, s) && i(t, s, r[s]);
            if (n) {
              var l,
                m = e(n(r));
              try {
                for (m.s(); !(l = m.n()).done; ) {
                  s = l.value;
                  o.call(r, s) && i(t, s, r[s]);
                }
              } catch (e) {
                m.e(e);
              } finally {
                m.f();
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
        var t, n, a, o, i;
        if ("square" === this.pageType)
          return null !=
            (a =
              null ==
              (n = null == (t = this.itemData) ? void 0 : t.relatedStocks)
                ? void 0
                : n.slice(0, 2))
            ? a
            : [];
        if ("stock" === this.pageType) {
          var r,
            s =
              null !=
              (i = null == (o = this.itemData) ? void 0 : o.relatedStocks)
                ? i
                : [],
            l = [],
            m = e(s);
          try {
            for (m.s(); !(r = m.n()).done; ) {
              var u = r.value;
              if (u.symbol !== this.pageId && (l.push(u), l.length >= 2)) break;
            }
          } catch (e) {
            m.e(e);
          } finally {
            m.f();
          }
          return l;
        }
        return [];
      },
    },
    methods: {
      onHandleTapItem: function (e, t) {
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
        var t, n, a, o;
        return (
          this.env.IS_ZXG_XCX
            ? (o = "IDA00p000l122")
            : this.env.IS_WZQ_XCX
            ? (o = "il500p000l123")
            : this.env.IS_WEIXIN
            ? (o = "IrJ00p000l120")
            : this.env.IS_ZXG && (o = "IDg00p000l121"),
          o
            ? {
                fchannel_id_fm_i: o,
                stocklist: null != e ? e : "",
                positionlist: null != (t = this.position) ? t : 0,
                postid:
                  null !=
                  (a = null == (n = this.itemData) ? void 0 : n.subject_id)
                    ? a
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
    },
  };
Array ||
  (
    s.resolveComponent("itemHeader") +
    s.resolveComponent("shortContent") +
    s.resolveComponent("longContent") +
    s.resolveComponent("itemImage") +
    s.resolveComponent("showComment")
  )();
var m = s._export_sfc(l, [
  [
    "render",
    function (e, t, n, a, o, i) {
      return s.e(
        {
          a: s.o(function (e) {
            return i.onHandleTapItem("tapDetail");
          }, 3892),
          b: s.o(function (e) {
            return i.onHandleTapItem(e);
          }, 3893),
          c: s.p({
            BUS: n.BUS,
            itemData: n.itemData,
            showLabels: n.showLabels,
            imageRefreshFlag: o.imageRefreshFlag,
            itemTopHandle: n.itemTopHandle,
            pageType: n.pageType,
            itemBottomHandle: n.itemBottomHandle,
          }),
          d: i.isItemShort,
        },
        i.isItemShort
          ? {
              e: s.o(function (e) {
                return i.onHandleTapItem("tapImage", e);
              }, 3894),
              f: s.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 3895),
              g: s.o(function (e) {
                return i.onHandleTapItem("toggleShow", e);
              }, 3896),
              h: s.o(function (e) {
                return i.onHandleTapItem("tapContent", e);
              }, 3897),
              i: s.p({
                disabled: "web" === o.platform,
                itemData: n.itemData,
                pageType: n.pageType,
              }),
            }
          : {},
        { j: "long" === n.itemData.showType },
        "long" === n.itemData.showType
          ? {
              k: s.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 3898),
              l: s.o(function (e) {
                return i.onHandleTapItem("toggleShow", e);
              }, 3899),
              m: s.p({ itemData: n.itemData.detailInfo }),
            }
          : {},
        { n: "turn" !== n.itemData.showType },
        "turn" !== n.itemData.showType
          ? {
              o: s.o(function (e) {
                return i.onHandleTapItem("tapImage", e);
              }, 3900),
              p: s.p({
                itemData: n.itemData,
                imageRefreshFlag: o.imageRefreshFlag,
              }),
            }
          : {},
        {
          q: s.o(function (e) {
            return i.onHandleTapItem("tapDetail");
          }, 3901),
          r:
            1 === n.itemData.is_yb_answer &&
            n.itemData.yb_disclaimer &&
            n.itemData.yb_disclaimer.length > 0,
        },
        1 === n.itemData.is_yb_answer &&
          n.itemData.yb_disclaimer &&
          n.itemData.yb_disclaimer.length > 0
          ? { s: s.t(n.itemData.yb_disclaimer) }
          : {},
        {
          t: s.o(function (e) {
            return i.onHandleTapItem("tapCommentItem", e);
          }, 3902),
          v: s.o(function (e) {
            return i.onHandleTapItem("tapImage", e);
          }, 3903),
          w: s.o(function (e) {
            return i.onHandleTapItem("tapDetail", e);
          }, 3904),
          x: s.o(function (e) {
            return i.onHandleTapItem("tapPerson", e);
          }, 3905),
          y: s.o(function (e) {
            return i.onHandleTapItem(e);
          }, 3906),
          z: s.p({
            BUS: n.BUS,
            itemData: n.itemData,
            showLabels: n.showLabels,
            imageRefreshFlag: o.imageRefreshFlag,
            itemTopHandle: n.itemTopHandle,
            pageType: n.pageType,
            itemBottomHandle: n.itemBottomHandle,
            onHandleTapItem: i.onHandleTapItem,
          }),
          A: s.n(n.last && !i.isTopic ? "last" : ""),
          B: s.n(i.isTopic ? "is-topic" : ""),
          C: n.comIndex,
          D: s.n(i.isTopic ? "is-topic" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-82de41dd"],
]);
wx.createComponent(m);
