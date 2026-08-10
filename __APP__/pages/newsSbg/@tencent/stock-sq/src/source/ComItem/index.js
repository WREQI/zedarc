var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  n = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = function (e, o) {
    for (var n in o || (o = {})) r.call(o, n) && c(e, n, o[n]);
    if (i) {
      var a,
        u = t(i(o));
      try {
        for (u.s(); !(a = u.n()).done; ) {
          n = a.value;
          s.call(o, n) && c(e, n, o[n]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  l = require("../../../../stock-community-base/utils/knife.js"),
  p = require("../../../../stock-community-base/utils/api/index.js"),
  m = require("../../../../../../../common/vendor.js"),
  h = require("../../utils/communityHelp.js"),
  d = {
    name: "ComItem",
    options: { styleIsolation: "shared" },
    components: {
      itemHeader: function () {
        return "../itemHeader/index.js";
      },
      otherSource: function () {
        return "../otherSource/index.js";
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
        return "../showBox/index.js";
      },
      itemHqMins: function () {
        return "../itemHqMins/index.js";
      },
      stockBar: function () {
        return "../relatedStocks/stockBar.js";
      },
      basketTag: function () {
        return "../../../../../../stockBasket/@tencent/wzq-lite-basket/components/basketTag.js";
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
      reportPrefix: { type: String, default: "" },
    },
    inject: {
      hqBridge: { default: {} },
      stockPollPool: { value: "stockPollPool", default: null },
      registerExposureElement: { default: null },
      unregisterExposureElement: { default: null },
      addToExposureQueue: { default: null },
    },
    data: function () {
      return {
        isShort: ["short", "reply", "turnNews", "turn", "share"],
        platform: l.platform,
        imageRefreshFlag: 0,
        env: {},
        hasExposed: !1,
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
    mounted: function () {
      m.StockBridge.busOn("onNewComment", this.onNewComment);
    },
    beforeDestroy: function () {
      m.StockBridge.busOff("onNewComment", this.onNewComment);
    },
    computed: {
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
          u({ selection: 1 }, this.itemData.topic_info)
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
            ].indexOf(this.pageType) &&
          "miniapp" !== this.from &&
          !l.IS_LITE_MODE
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
      watchList: function () {
        var e;
        return l.enableBasketList()
          ? null == (e = this.itemData)
            ? void 0
            : e.watchList
          : null;
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
            c = [],
            u = t(s);
          try {
            for (u.s(); !(r = u.n()).done; ) {
              var l = r.value;
              if (l.symbol !== this.pageId && (c.push(l), c.length >= 2)) break;
            }
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }
          return c;
        }
        return [];
      },
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
                        h.updateCommentList(n, this.itemData)
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
      showProfilePop: function (e) {
        this.$emit("showProfilePop", e);
      },
      formatReportPrefix: function (e) {
        return { wzq_shequ_guangchangtl: "shequ.square" }[e] || e;
      },
      headerToggleClick: function (e, t) {
        this.BUS &&
          this.BUS.$emit("on_square_gd_header_toggle_click", {
            isAdded: e,
            isFirstAddBasket: t,
          });
      },
      goToStockDetail: function (e) {
        var t;
        p.api.goStockDetailWithHqData(
          ((t = u({}, e || {})), n(t, a({ instance: this })))
        );
      },
      goToBasketDetail: function (e) {
        p.api.goWatchList({ gdId: e, instance: this });
      },
      onHandleTapItem: function (e, t) {
        var o = this.itemData.top_tag;
        l.isObject(e)
          ? this.$emit("onHandleTapItem", e)
          : this.$emit("onHandleTapItem", {
              eventName: e,
              eventData: t,
              topTag: o,
            });
      },
      getStockReportParams: function (e, t) {
        var o;
        return (
          this.env.IS_ZXG_XCX,
          {
            fchannel_id_fm_i: "IDA00p000l122",
            stocklist: e.join(","),
            positionlist: t.join(","),
            foperation_purpose: "zixuan",
            postid: null != (o = this.itemData.id) ? o : "",
          }
        );
      },
      stockbarGoDetail: function (e) {
        if (e) {
          var t = this.getStockReportParams([e], [this.position]),
            o = "";
          "square" === this.pageType
            ? (this.env.IS_WEIXIN,
              (o = "shequ.shequ_shouye.stock_detail_click"))
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
            : (this.env.IS_WEIXIN, (o = "shequ.comment.related_stock_add")),
            o && this.$emit("commentReport", { eventName: o, data: t });
        }
      },
      stockbarRemoveStock: function (e) {
        if (e) {
          var t = this.getStockReportParams([e], [this.position]),
            o = "";
          this.env.IS_ZXG
            ? (o = "shequ.shequ_guangchang.related_stock_cancel")
            : (this.env.IS_WEIXIN, (o = "shequ.comment.related_stock_cancel")),
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
            this.env.IS_WEIXIN, (a = "shequ.shequ_shouye.related_stock_brow");
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
      initExposureObserver: function () {},
      destroyObserver: function () {},
      reportExposure: function () {},
    },
  };
Array ||
  (
    m.resolveComponent("itemHeader") +
    m.resolveComponent("shortContent") +
    m.resolveComponent("longContent") +
    m.resolveComponent("itemImage") +
    m.resolveComponent("itemHqMins") +
    m.resolveComponent("otherSource") +
    m.resolveComponent("showTurn") +
    m.resolveComponent("stockBar") +
    m.resolveComponent("showBox") +
    m.resolveComponent("basketTag") +
    m.resolveComponent("handleOper") +
    m.resolveComponent("showComment")
  )();
var f = m._export_sfc(d, [
  [
    "render",
    function (e, t, o, n, a, i) {
      return m.e(
        { a: i.isTopic },
        i.isTopic
          ? {
              b: m.o(function (e) {
                return i.onHandleTapItem("tapTopic", {
                  eventName: "topic",
                  topicInfo: i.topicInfo,
                });
              }, 3327),
            }
          : {},
        { c: i.selectionDate && o.selection },
        i.selectionDate && o.selection
          ? {
              d: m.t(i.selectionDate[1]),
              e: m.t(i.selectionDate[2]),
              f: m.n(new Date().getDate() == i.selectionDate[2] ? "today" : ""),
            }
          : {},
        {
          g: m.o(function (e) {
            return i.onHandleTapItem("tapDetail");
          }, 3328),
          h: m.o(function (e) {
            return i.onHandleTapItem(e);
          }, 3329),
          i: m.p({
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
              k: m.o(function (e) {
                return i.onHandleTapItem("tapImage", e);
              }, 3330),
              l: m.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 3331),
              m: m.o(function (e) {
                return i.onHandleTapItem("toggleShow", e);
              }, 3332),
              n: m.o(function (e) {
                return i.onHandleTapItem("tapContent", e);
              }, 3333),
              o: m.p({
                disabled: "web" === a.platform,
                itemData: o.itemData,
                pageType: o.pageType,
              }),
            }
          : {},
        { p: "long" === o.itemData.showType },
        "long" === o.itemData.showType
          ? {
              q: m.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 3334),
              r: m.o(function (e) {
                return i.onHandleTapItem("toggleShow", e);
              }, 3335),
              s: m.p({ itemData: o.itemData.detailInfo }),
            }
          : {},
        { t: "turn" !== o.itemData.showType },
        "turn" !== o.itemData.showType
          ? {
              v: m.o(function (e) {
                return i.onHandleTapItem("tapImage", e);
              }, 3336),
              w: m.p({
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
              y: m.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 3337),
              z: m.p({
                time: o.itemData.created_at,
                stockid: o.itemData.stock_id,
                comid: o.itemData.id,
                type: "item",
              }),
            },
        {
          A:
            -1 !==
              ["turnNews", "short", "share"].indexOf(o.itemData.showType) &&
            "news" !== o.pageType,
        },
        -1 !== ["turnNews", "short", "share"].indexOf(o.itemData.showType) &&
          "news" !== o.pageType
          ? {
              B: m.o(function (e) {
                return i.onHandleTapItem("goSharePage", e);
              }, 3338),
              C: m.o(function (e) {
                return i.onHandleTapItem("tapOtherSource", e);
              }, 3339),
              D: m.p({ itemData: o.itemData }),
            }
          : {},
        {
          E: m.o(function (e) {
            return i.onHandleTapItem("tapDetail");
          }, 3340),
          F: "turn" === o.itemData.showType,
        },
        "turn" === o.itemData.showType
          ? {
              G: m.o(function (e) {
                return i.onHandleTapItem(e);
              }, 3341),
              H: m.p({
                itemData: o.itemData.detailInfo,
                turnLog: o.itemData.turnLog,
                allowLike: 0 !== o.itemData.allow_like,
                showType: "list",
                disabled: !1,
              }),
            }
          : {},
        {
          I:
            !i.watchList &&
            i.stockPollPool &&
            i.relatedStocks &&
            i.relatedStocks.length > 0,
        },
        !i.watchList &&
          i.stockPollPool &&
          i.relatedStocks &&
          i.relatedStocks.length > 0
          ? {
              J: m.f(i.relatedStocks, function (e, t, o) {
                return {
                  a: t,
                  b: m.o(i.stockbarGoDetail, 3342, t),
                  c: m.o(i.stockbarAddStock, 3343, t),
                  d: m.o(i.stockbarRemoveStock, 3344, t),
                  e: m.o(i.stockbarExposed, 3345, t),
                  f: "3e0b4006-7-" + o,
                  g: m.p({ code: e.symbol, name: e.name }),
                };
              }),
            }
          : {},
        {
          K: m.o(function (e) {
            return i.onHandleTapItem("tapShowBox", e);
          }, 3346),
          L: m.o(function (e) {
            return i.onHandleTapItem("commentReport", e);
          }, 3347),
          M: m.p({
            showTags: i.showTags,
            itemData: o.itemData,
            pageType: o.pageType,
            hotRank: i.hotRank,
            pageId: o.pageId,
            topic: o.topic,
            stockName: o.stockName,
          }),
          N: i.watchList,
        },
        i.watchList
          ? {
              O: m.o(i.headerToggleClick, 3348),
              P: m.o(i.goToStockDetail, 3349),
              Q: m.o(i.goToBasketDetail, 3350),
              R: m.p({
                "is-subject": !0,
                "report-prefix": i.formatReportPrefix(o.reportPrefix),
                "basket-data": i.watchList,
                "subject-data": { rss_list: [{ subject_id: o.itemData.id }] },
                "is-show-footer": !0,
                "row-num": 5,
              }),
            }
          : {},
        {
          S:
            1 === o.itemData.is_yb_answer &&
            o.itemData.yb_disclaimer &&
            o.itemData.yb_disclaimer.length > 0,
        },
        1 === o.itemData.is_yb_answer &&
          o.itemData.yb_disclaimer &&
          o.itemData.yb_disclaimer.length > 0
          ? { T: m.t(o.itemData.yb_disclaimer) }
          : {},
        {
          U: m.o(i.onHandleTapItem, 3351),
          V: m.o(i.showProfilePop, 3352),
          W: m.p({
            itemData: o.itemData,
            itemBottomHandle: o.itemBottomHandle,
            pageType: o.pageType,
            BUS: o.BUS,
            from: o.from,
          }),
          X: !i.isTopic,
        },
        i.isTopic
          ? {}
          : {
              Y: m.o(function (e) {
                return i.onHandleTapItem("tapCommentItem", e);
              }, 3353),
              Z: m.o(function (e) {
                return i.onHandleTapItem("tapImage", e);
              }, 3354),
              aa: m.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 3355),
              ab: m.o(function (e) {
                return i.onHandleTapItem("tapPerson", e);
              }, 3356),
              ac: m.p({ pageType: o.pageType, itemData: o.itemData }),
            },
        {
          ad: m.n(o.last && !i.isTopic ? "last" : ""),
          ae: m.n(i.isTopic ? "is-topic" : ""),
          af: o.comIndex,
          ag: m.n(i.isTopic ? "is-topic" : ""),
          ah: o.itemData.id,
        }
      );
    },
  ],
  ["__scopeId", "data-v-3e0b4006"],
]);
wx.createComponent(f);
