var e = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  r = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = require("../../../../../stock-community-base/utils/knife.js"),
  p = require("../../../../../../../../common/vendor.js"),
  c = require("../../../utils/communityHelp.js"),
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
        return "../longContent/index.js";
      },
      shortContent: function () {
        return "../shortContent/index.js";
      },
      itemImage: function () {
        return "../itemImage/index.js";
      },
      showComment: function () {
        return "../showComment/index.js";
      },
      showTurn: function () {
        return "../showTurn/index.js";
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
    inject: {
      stockPollPool: { value: "stockPollPool", default: null },
      platformType: { default: "" },
    },
    data: function () {
      return {
        isShort: ["short", "reply", "turnNews", "turn", "share"],
        platform: s.platform,
        imageRefreshFlag: 0,
        env: {},
      };
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
      platformClass: function () {
        return this.platformType;
      },
      isTopic: function () {
        var e, t;
        return null == (t = null == (e = this.itemData) ? void 0 : e.topic_info)
          ? void 0
          : t.topic_id;
      },
      topicInfo: function () {
        var e;
        return (
          (null == (e = this.itemData) ? void 0 : e.topic_info) &&
          (function (e, o) {
            for (var s in o || (o = {})) a.call(o, s) && r(e, s, o[s]);
            if (n) {
              var p,
                c = t(n(o));
              try {
                for (c.s(); !(p = c.n()).done; ) {
                  s = p.value;
                  i.call(o, s) && r(e, s, o[s]);
                }
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
            }
            return e;
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
        var e, o, n, a, i;
        if (
          "square" === this.pageType ||
          "topic" === this.pageType ||
          "friends" === this.pageType
        )
          return null !=
            (n =
              null ==
              (o = null == (e = this.itemData) ? void 0 : e.relatedStocks)
                ? void 0
                : o.slice(0, 2))
            ? n
            : [];
        if ("stock" === this.pageType) {
          var r,
            s =
              null !=
              (i = null == (a = this.itemData) ? void 0 : a.relatedStocks)
                ? i
                : [],
            p = [],
            c = t(s);
          try {
            for (c.s(); !(r = c.n()).done; ) {
              var l = r.value;
              if (l.symbol !== this.pageId && (p.push(l), p.length >= 2)) break;
            }
          } catch (e) {
            c.e(e);
          } finally {
            c.f();
          }
          return p;
        }
        return [];
      },
    },
    mounted: function () {
      p.StockBridge.busOn("onNewComment", this.onNewComment);
    },
    beforeDestroy: function () {
      p.StockBridge.busOff("onNewComment", this.onNewComment);
    },
    methods: {
      onNewComment: function (t) {
        return (
          (o = this),
          null,
          (n = e().mark(function o() {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.parent_id || t.root_id),
                        (e.next = 3),
                        c.updateCommentList(n, this.itemData)
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              this
            );
          })),
          new Promise(function (e, t) {
            var a = function (e) {
                try {
                  r(n.next(e));
                } catch (e) {
                  t(e);
                }
              },
              i = function (e) {
                try {
                  r(n.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              r = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(a, i);
              };
            r((n = n.apply(o, null)).next());
          })
        );
        var o, n;
      },
      showOtherSource: function (e) {
        var t = -1 !== ["turnNews", "short", "share"].indexOf(e.showType),
          o =
            -1 ===
            ["news", "stockbasket", "stockmpdetail"].indexOf(this.pageType);
        return t && o;
      },
      onHandleTapItem: function (e, t) {
        var o = this.itemData.top_tag;
        s.isObject(e)
          ? this.$emit("onHandleTapItem", e)
          : this.$emit("onHandleTapItem", {
              eventName: e,
              eventData: t,
              topTag: o,
            });
      },
      getStockReportParams: function (e, t) {
        var o, n;
        return (
          this.env.IS_ZXG_XCX
            ? (n = "IDA00p000l122")
            : this.env.IS_WZQ_XCX
            ? (n = "il500p000l123")
            : this.env.IS_WEIXIN
            ? (n = "IrJ00p000l120")
            : this.env.IS_ZXG && (n = "IDg00p000l121"),
          n
            ? {
                fchannel_id_fm_i: n,
                stocklist: e.join(","),
                positionlist: t.join(","),
                foperation_purpose: "zixuan",
                postid: null != (o = this.itemData.id) ? o : "",
              }
            : {}
        );
      },
      stockbarGoDetail: function (e) {
        if (e) {
          var t = this.getStockReportParams([e], [this.position]),
            o = "";
          "square" === this.pageType
            ? this.env.IS_WEIXIN &&
              (o = "shequ.shequ_shouye.stock_detail_click")
            : "stock" === this.pageType
            ? this.isTopic
              ? this.env.IS_ZXG
                ? (o = "shequ.shequ_gegu.promote_stock_detail_click")
                : this.env.IS_WEIXIN &&
                  (o = "shequ.comment-comment.promote_stock_detail_click")
              : this.env.IS_ZXG
              ? (o = "shequ.shequ_gegu.stock_detail_click")
              : this.env.IS_WEIXIN &&
                (o = "shequ.comment-comment.stock_detail_click")
            : "topic" === this.pageType
            ? this.env.IS_ZXG
              ? (o = "shequ.shequ_topic.stock_detail_click")
              : this.env.IS_WEIXIN &&
                (o = "shequ.topic-topic.stock_detail_click")
            : "friends" === this.pageType &&
              this.env.IS_WEIXIN &&
              (o = "shequ.shequ_shouye_guyouquan.stock_detail_click"),
            o && this.$emit("commentReport", { eventName: o, data: t });
        }
      },
      stockbarAddStock: function (e) {
        if (e) {
          var t = this.getStockReportParams([e], [this.position]),
            o = "";
          this.env.IS_ZXG
            ? (o = "shequ.shequ_guangchang.related_stock_add")
            : this.env.IS_WEIXIN && (o = "shequ.comment.related_stock_add"),
            o && this.$emit("commentReport", { eventName: o, data: t });
        }
      },
      stockbarRemoveStock: function (e) {
        if (e) {
          var t = this.getStockReportParams([e], [this.position]),
            o = "";
          this.env.IS_ZXG
            ? (o = "shequ.shequ_guangchang.related_stock_cancel")
            : this.env.IS_WEIXIN && (o = "shequ.comment.related_stock_cancel"),
            o && this.$emit("commentReport", { eventName: o, data: t });
        }
      },
      stockbarExposed: function (e, t) {
        var o;
        if (e) {
          var n = this.getStockReportParams([e], [this.position]);
          n.hasaddlist = t ? "1" : "0";
          var a = "";
          if ("square" === this.pageType)
            this.env.IS_WEIXIN && (a = "shequ.shequ_shouye.related_stock_brow");
          else if ("stock" === this.pageType) {
            if (this.isTopic)
              return (
                this.env.IS_ZXG
                  ? (a = "shequ.shequ_gegu.promote_related_stock_brow")
                  : this.env.IS_WEIXIN &&
                    (a = "shequ.comment-comment.promote_related_stock_brow"),
                void this.$emit("commentReport", { eventName: a, data: n })
              );
            this.env.IS_ZXG
              ? (a = "shequ.shequ_gegu.related_stock_brow")
              : this.env.IS_WEIXIN &&
                (a = "shequ.comment-comment.related_stock_brow");
          } else
            "topic" === this.pageType
              ? this.env.IS_ZXG
                ? (a = "shequ.shequ_topic.related_stock_brow")
                : this.env.IS_WEIXIN &&
                  (a = "shequ.topic-topic.related_stock_brow")
              : "friends" === this.pageType &&
                this.env.IS_WEIXIN &&
                (a = "shequ.shequ_shouye_guyouquan.related_stock_brow");
          a &&
            (null == (o = this.stockPollPool) ||
              o.exposurePool.exposeInList(a, n));
        }
      },
    },
  };
Array ||
  (
    p.resolveComponent("itemHeader") +
    p.resolveComponent("shortContent") +
    p.resolveComponent("longContent") +
    p.resolveComponent("itemImage") +
    p.resolveComponent("itemHqMins") +
    p.resolveComponent("otherSource") +
    p.resolveComponent("showTurn") +
    p.resolveComponent("stockBar") +
    p.resolveComponent("showBox") +
    p.resolveComponent("handleOper") +
    p.resolveComponent("showComment")
  )();
var u = p._export_sfc(l, [
  [
    "render",
    function (e, t, o, n, a, i) {
      return p.e(
        { a: i.isTopic },
        i.isTopic
          ? {
              b: p.o(function (e) {
                return i.onHandleTapItem("tapTopic", {
                  eventName: "topic",
                  topicInfo: i.topicInfo,
                });
              }, 3107),
            }
          : {},
        { c: i.selectionDate && o.selection },
        i.selectionDate && o.selection
          ? {
              d: p.t(i.selectionDate[1]),
              e: p.t(i.selectionDate[2]),
              f: p.n(new Date().getDate() == i.selectionDate[2] ? "today" : ""),
            }
          : {},
        {
          g: p.o(function (e) {
            return i.onHandleTapItem("tapDetail");
          }, 3108),
          h: p.o(function (e) {
            return i.onHandleTapItem(e);
          }, 3109),
          i: p.p({
            BUS: o.BUS,
            itemData: o.itemData,
            showLabels: o.showLabels,
            imageRefreshFlag: a.imageRefreshFlag,
            itemTopHandle: o.itemTopHandle,
            pageType: o.pageType,
          }),
          j: -1 !== a.isShort.indexOf(o.itemData.showType),
        },
        -1 !== a.isShort.indexOf(o.itemData.showType)
          ? {
              k: p.o(function (e) {
                return i.onHandleTapItem("tapImage", e);
              }, 3110),
              l: p.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 3111),
              m: p.o(function (e) {
                return i.onHandleTapItem("toggleShow", e);
              }, 3112),
              n: p.o(function (e) {
                return i.onHandleTapItem("tapContent", e);
              }, 3113),
              o: p.p({
                disabled: "web" === a.platform,
                itemData: o.itemData,
                pageType: o.pageType,
              }),
            }
          : {},
        { p: "long" === o.itemData.showType },
        "long" === o.itemData.showType
          ? {
              q: p.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 3114),
              r: p.o(function (e) {
                return i.onHandleTapItem("toggleShow", e);
              }, 3115),
              s: p.p({ pageType: o.pageType, itemData: o.itemData.detailInfo }),
            }
          : {},
        { t: "turn" !== o.itemData.showType },
        "turn" !== o.itemData.showType
          ? {
              v: p.o(function (e) {
                return i.onHandleTapItem("tapImage", e);
              }, 3116),
              w: p.p({
                pageType: o.pageType,
                itemData: o.itemData,
                imageRefreshFlag: a.imageRefreshFlag,
              }),
            }
          : {},
        {
          x:
            17 === parseInt(o.itemData.type) &&
            !(o.itemData.hqCount && o.itemData.hqCount > 30),
        },
        17 !== parseInt(o.itemData.type) ||
          (o.itemData.hqCount && o.itemData.hqCount > 30)
          ? {}
          : {
              y: p.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 3117),
              z: p.p({
                time: o.itemData.created_at,
                stockid: o.itemData.stock_id,
                comid: o.itemData.id,
                type: "item",
              }),
            },
        { A: i.showOtherSource(o.itemData) },
        i.showOtherSource(o.itemData)
          ? {
              B: p.o(function (e) {
                return i.onHandleTapItem("goSharePage", e);
              }, 3118),
              C: p.o(function (e) {
                return i.onHandleTapItem("tapOtherSource", e);
              }, 3119),
              D: p.p({ itemData: o.itemData }),
            }
          : {},
        {
          E: p.o(function (e) {
            return i.onHandleTapItem("tapDetail");
          }, 3120),
          F: "turn" === o.itemData.showType,
        },
        "turn" === o.itemData.showType
          ? {
              G: p.o(function (e) {
                return i.onHandleTapItem(e);
              }, 3121),
              H: p.p({
                itemData: o.itemData.detailInfo,
                turnLog: o.itemData.turnLog,
                allowLike: 0 !== o.itemData.allow_like,
                showType: "list",
                pageType: o.pageType,
                disabled: !1,
              }),
            }
          : {},
        { I: i.stockPollPool && i.relatedStocks && i.relatedStocks.length > 0 },
        i.stockPollPool && i.relatedStocks && i.relatedStocks.length > 0
          ? {
              J: p.f(i.relatedStocks, function (e, t, o) {
                return {
                  a: t,
                  b: p.o(i.stockbarGoDetail, 3122, t),
                  c: p.o(i.stockbarAddStock, 3123, t),
                  d: p.o(i.stockbarRemoveStock, 3124, t),
                  e: p.o(i.stockbarExposed, 3125, t),
                  f: "3edd5420-7-" + o,
                  g: p.p({ code: e.symbol, name: e.name }),
                };
              }),
            }
          : {},
        {
          K: p.o(function (e) {
            return i.onHandleTapItem("tapShowBox", e);
          }, 3126),
          L: p.o(function (e) {
            return i.onHandleTapItem("commentReport", e);
          }, 3127),
          M: p.p({
            showTags: i.showTags,
            itemData: o.itemData,
            pageType: o.pageType,
            hotRank: i.hotRank,
            pageId: o.pageId,
            topic: o.topic,
            stockName: o.stockName,
          }),
          N:
            1 === o.itemData.is_yb_answer &&
            o.itemData.yb_disclaimer &&
            o.itemData.yb_disclaimer.length > 0,
        },
        1 === o.itemData.is_yb_answer &&
          o.itemData.yb_disclaimer &&
          o.itemData.yb_disclaimer.length > 0
          ? { O: p.t(o.itemData.yb_disclaimer) }
          : {},
        {
          P: p.o(i.onHandleTapItem, 3128),
          Q: p.p({
            itemData: o.itemData,
            itemBottomHandle: o.itemBottomHandle,
            pageType: o.pageType,
            BUS: o.BUS,
          }),
          R: !i.isTopic,
        },
        i.isTopic
          ? {}
          : {
              S: p.o(function (e) {
                return i.onHandleTapItem("tapCommentItem", e);
              }, 3129),
              T: p.o(function (e) {
                return i.onHandleTapItem("tapImage", e);
              }, 3130),
              U: p.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 3131),
              V: p.o(function (e) {
                return i.onHandleTapItem("tapPerson", e);
              }, 3132),
              W: p.p({ pageType: o.pageType, itemData: o.itemData }),
            },
        {
          X: p.n(o.last && !i.isTopic ? "last" : ""),
          Y: p.n(i.isTopic ? "is-topic" : ""),
          Z: o.comIndex,
          aa: p.n(i.isTopic ? "is-topic" : ""),
          ab: p.n(i.platformClass),
          ac: p.n(o.pageType),
        }
      );
    },
  ],
  ["__scopeId", "data-v-3edd5420"],
]);
wx.createComponent(u);
