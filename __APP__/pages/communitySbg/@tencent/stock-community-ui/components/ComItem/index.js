var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, t, o) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  u = function (e, n) {
    for (var o in n || (n = {})) r.call(n, o) && c(e, o, n[o]);
    if (i) {
      var a,
        u = t(i(n));
      try {
        for (u.s(); !(a = u.n()).done; ) {
          o = a.value;
          s.call(n, o) && c(e, o, n[o]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  l = function (e, t, n) {
    return new Promise(function (o, a) {
      var i = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        r = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(i, r);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  m = require("../../../stock-community-base/utils/knife.js"),
  p = require("../../../stock-community-base/utils/api/index.js"),
  h = require("../../../../../../common/vendor.js"),
  d = require("../../utils/service/index.js"),
  f = require("../../../stock-community-base/utils/commentFilter.js"),
  g = require("../../../stock-news-core/utils/loginHelper.js"),
  _ = function () {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return l(exports, [].concat(n), function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return e().mark(function o() {
        var a, i;
        return e().wrap(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  if (((o.prev = 0), n.id === t)) {
                    o.next = 3;
                    break;
                  }
                  return o.abrupt("return", !1);
                case 3:
                  return (
                    (a = g.getLoginParamsObject()),
                    (o.next = 6),
                    (function (t) {
                      return l(exports, [t], function (t) {
                        var n = t.itemId,
                          o = t.newsCommentId,
                          a = t.userinfo;
                        return e().mark(function t() {
                          var i, r, s, c, u;
                          return e().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      d.getCommentDetail({
                                        subjectId: n,
                                        newsCommentId: o,
                                      })
                                    );
                                  case 3:
                                    return (
                                      (i = e.sent),
                                      (e.next = 6),
                                      f.CommentFilter(i.data, !1, !1, a)
                                    );
                                  case 6:
                                    return (
                                      (r = e.sent.commentsData[0]),
                                      (e.next = 9),
                                      d.commentListPlatContent({
                                        subjectId: n,
                                        first: !0,
                                        begin: "",
                                      })
                                    );
                                  case 9:
                                    return (
                                      (s = e.sent),
                                      (e.next = 12),
                                      f.CommentFilter(s.data)
                                    );
                                  case 12:
                                    return (
                                      (c = e.sent.commentsData),
                                      (u = Object.assign({}, r)),
                                      e.abrupt(
                                        "return",
                                        (u.commentsTail ||
                                          (u.commentsTail = { cnt: "0" }),
                                        (u.commentsTail.cnt = c.length),
                                        (u.commentsTail.list = c.filter(
                                          function (e) {
                                            return (
                                              -1 ===
                                              [1, 2].indexOf(e.check_label)
                                            );
                                          }
                                        )),
                                        u)
                                      )
                                    );
                                  case 17:
                                    return (
                                      (e.prev = 17),
                                      (e.t0 = e.catch(0)),
                                      e.abrupt("return", null)
                                    );
                                  case 20:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 17]]
                          );
                        })();
                      });
                    })({ itemId: t, newsCommentId: "", userinfo: a })
                  );
                case 6:
                  return (
                    (i = o.sent),
                    o.abrupt(
                      "return",
                      !!i &&
                        (Object.assign(n, {
                          retweet_count: i.retweet_count || "",
                          like_num: i.like_num || "",
                          like_id: i.like_id || "",
                          commentsTail: i.commentsTail || [],
                        }),
                        !0)
                    )
                  );
                case 10:
                  return (
                    (o.prev = 10), (o.t0 = o.catch(0)), o.abrupt("return", !1)
                  );
                case 13:
                case "end":
                  return o.stop();
              }
          },
          o,
          null,
          [[0, 10]]
        );
      })();
    });
  },
  k = {
    name: "ComItem",
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
        return "../../../../../stockBasket/@tencent/wzq-lite-basket/components/basketTag.js";
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
      from: { type: String, default: "" },
      comIndex: { type: String, default: "" },
      pageId: { type: String, default: "" },
      stockName: { type: String, default: "" },
      topic: { type: String, default: "" },
      selection: { type: String, default: "" },
      position: { type: Number, default: 0 },
      reportPrefix: { type: String, default: "" },
    },
    inject: {
      stockPollPool: { value: "stockPollPool", default: null },
      hqBridge: { default: {} },
      registerExposureElement: { default: null },
      unregisterExposureElement: { default: null },
      addToExposureQueue: { default: null },
    },
    data: function () {
      return {
        isShort: ["short", "reply", "turnNews", "turn", "share"],
        platform: m.platform,
        imageRefreshFlag: 0,
        env: {},
        isWZQMP: m.IS_WZQ_XCX,
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
      h.StockBridge.busOn("onNewComment", this.onNewComment);
    },
    beforeDestroy: function () {
      h.StockBridge.busOff("onNewComment", this.onNewComment);
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
        return !1;
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
        return m.enableBasketList()
          ? null == (e = this.itemData)
            ? void 0
            : e.watchList
          : null;
      },
      relatedStocks: function () {
        var e, n, o, a, i;
        if (
          "square" === this.pageType ||
          "topic" === this.pageType ||
          "friends" === this.pageType
        )
          return null !=
            (o =
              null ==
              (n = null == (e = this.itemData) ? void 0 : e.relatedStocks)
                ? void 0
                : n.slice(0, 2))
            ? o
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
        return l(
          this,
          null,
          e().mark(function n() {
            var o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = t.parent_id || t.root_id),
                        (e.next = 3),
                        _(o, this.itemData)
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      formatReportPrefix: function (e) {
        return { wzq_shequ_guangchangtl: "shequ.square" }[e] || e;
      },
      headerToggleClick: function (e, t) {
        this.hqBridge &&
          this.hqBridge.busEmit("on_square_gd_header_toggle_click", {
            isAdded: e,
            isFirstAddBasket: t,
          });
      },
      goToStockDetail: function (e) {
        var t;
        p.api.goStockDetailWithHqData(
          ((t = u({}, e || {})), o(t, a({ instance: this })))
        );
      },
      goToBasketDetail: function (e) {
        p.api.goWatchList({ gdId: e, instance: this });
      },
      onHandleTapItem: function (e, t) {
        var n = this.itemData.top_tag;
        m.isObject(e)
          ? this.$emit("onHandleTapItem", e)
          : this.$emit("onHandleTapItem", {
              eventName: e,
              eventData: t,
              topTag: n,
            });
      },
      getStockReportParams: function (e, t) {
        var n, o;
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
                stocklist: e.join(","),
                positionlist: t.join(","),
                foperation_purpose: "zixuan",
                postid: null != (n = this.itemData.id) ? n : "",
              }
            : {}
        );
      },
      stockbarGoDetail: function (e) {
        if (e) {
          var t = this.getStockReportParams([e], [this.position]),
            n = "";
          "square" === this.pageType
            ? this.env.IS_WEIXIN &&
              (n = "shequ.shequ_shouye.stock_detail_click")
            : "stock" === this.pageType
            ? this.isTopic
              ? this.env.IS_ZXG
                ? (n = "shequ.shequ_gegu.promote_stock_detail_click")
                : this.env.IS_WEIXIN &&
                  (n = "shequ.comment-comment.promote_stock_detail_click")
              : this.env.IS_ZXG
              ? (n = "shequ.shequ_gegu.stock_detail_click")
              : this.env.IS_WEIXIN &&
                (n = "shequ.comment-comment.stock_detail_click")
            : "topic" === this.pageType
            ? this.env.IS_ZXG
              ? (n = "shequ.shequ_topic.stock_detail_click")
              : this.env.IS_WEIXIN &&
                (n = "shequ.topic-topic.stock_detail_click")
            : "friends" === this.pageType &&
              this.env.IS_WEIXIN &&
              (n = "shequ.shequ_shouye_guyouquan.stock_detail_click"),
            n && this.$emit("commentReport", { eventName: n, data: t });
        }
      },
      stockbarAddStock: function (e) {
        if (e) {
          var t = this.getStockReportParams([e], [this.position]),
            n = "";
          this.env.IS_ZXG
            ? (n = "shequ.shequ_guangchang.related_stock_add")
            : this.env.IS_WEIXIN && (n = "shequ.comment.related_stock_add"),
            n && this.$emit("commentReport", { eventName: n, data: t });
        }
      },
      stockbarRemoveStock: function (e) {
        if (e) {
          var t = this.getStockReportParams([e], [this.position]),
            n = "";
          this.env.IS_ZXG
            ? (n = "shequ.shequ_guangchang.related_stock_cancel")
            : this.env.IS_WEIXIN && (n = "shequ.comment.related_stock_cancel"),
            n && this.$emit("commentReport", { eventName: n, data: t });
        }
      },
      stockbarExposed: function (e, t) {
        var n;
        if (e) {
          var o = this.getStockReportParams([e], [this.position]);
          o.hasaddlist = t ? "1" : "0";
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
                void this.$emit("commentReport", { eventName: a, data: o })
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
            (null == (n = this.stockPollPool) ||
              n.exposurePool.exposeInList(a, o));
        }
      },
      initExposureObserver: function () {},
      destroyObserver: function () {},
      reportExposure: function () {},
    },
  };
Array ||
  (
    h.resolveComponent("itemHeader") +
    h.resolveComponent("shortContent") +
    h.resolveComponent("longContent") +
    h.resolveComponent("itemImage") +
    h.resolveComponent("itemHqMins") +
    h.resolveComponent("otherSource") +
    h.resolveComponent("showTurn") +
    h.resolveComponent("stockBar") +
    h.resolveComponent("showBox") +
    h.resolveComponent("basketTag") +
    h.resolveComponent("handleOper") +
    h.resolveComponent("showComment")
  )();
var I = h._export_sfc(k, [
  [
    "render",
    function (e, t, n, o, a, i) {
      return h.e(
        { a: i.isTopic },
        i.isTopic
          ? {
              b: h.o(function (e) {
                return i.onHandleTapItem("tapTopic", {
                  eventName: "topic",
                  topicInfo: i.topicInfo,
                });
              }, 5300),
            }
          : {},
        { c: i.selectionDate && n.selection },
        i.selectionDate && n.selection
          ? {
              d: h.t(i.selectionDate[1]),
              e: h.t(i.selectionDate[2]),
              f: h.n(new Date().getDate() == i.selectionDate[2] ? "today" : ""),
            }
          : {},
        {
          g: h.o(function (e) {
            return i.onHandleTapItem("tapDetail");
          }, 5301),
          h: h.o(function (e) {
            return i.onHandleTapItem(e);
          }, 5302),
          i: h.p({
            itemData: n.itemData,
            showLabels: n.showLabels,
            imageRefreshFlag: a.imageRefreshFlag,
            itemTopHandle: n.itemTopHandle,
            pageType: n.pageType,
          }),
          j: -1 !== a.isShort.indexOf(n.itemData.showType),
        },
        -1 !== a.isShort.indexOf(n.itemData.showType)
          ? {
              k: h.o(function (e) {
                return i.onHandleTapItem("tapImage", e);
              }, 5303),
              l: h.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 5304),
              m: h.o(function (e) {
                return i.onHandleTapItem("tapContent", e);
              }, 5305),
              n: h.p({
                disabled: "web" === a.platform,
                itemData: n.itemData,
                pageType: n.pageType,
                itemType: "mainSubject",
              }),
            }
          : {},
        { o: "long" === n.itemData.showType },
        "long" === n.itemData.showType
          ? { p: h.p({ itemData: n.itemData.detailInfo }) }
          : {},
        { q: "turn" !== n.itemData.showType },
        "turn" !== n.itemData.showType
          ? {
              r: h.o(function (e) {
                return i.onHandleTapItem("tapImage", e);
              }, 5306),
              s: h.p({
                itemData: n.itemData,
                imageRefreshFlag: a.imageRefreshFlag,
              }),
            }
          : {},
        {
          t:
            17 === parseInt(n.itemData.type) &&
            !(n.itemData.hqCount && n.itemData.hqCount > 30),
        },
        17 !== parseInt(n.itemData.type) ||
          (n.itemData.hqCount && n.itemData.hqCount > 30)
          ? {}
          : {
              v: h.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 5307),
              w: h.p({
                time: n.itemData.created_at,
                stockid: n.itemData.stock_id,
                comid: n.itemData.id,
                type: "item",
              }),
            },
        {
          x:
            -1 !==
              ["turnNews", "short", "share"].indexOf(n.itemData.showType) &&
            "news" !== n.pageType,
        },
        -1 !== ["turnNews", "short", "share"].indexOf(n.itemData.showType) &&
          "news" !== n.pageType
          ? {
              y: h.o(function (e) {
                return i.onHandleTapItem("goSharePage", e);
              }, 5308),
              z: h.o(function (e) {
                return i.onHandleTapItem("tapOtherSource", e);
              }, 5309),
              A: h.p({ itemData: n.itemData }),
            }
          : {},
        {
          B: h.o(function (e) {
            return i.onHandleTapItem("tapDetail");
          }, 5310),
          C: "turn" === n.itemData.showType,
        },
        "turn" === n.itemData.showType
          ? {
              D: h.o(function (e) {
                return i.onHandleTapItem(e);
              }, 5311),
              E: h.p({
                itemData: n.itemData.detailInfo,
                turnLog: n.itemData.turnLog,
                allowLike: 0 !== n.itemData.allow_like,
                showType: "list",
                disabled: !1,
              }),
            }
          : {},
        {
          F:
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
              G: h.f(i.relatedStocks, function (e, t, n) {
                return {
                  a: t,
                  b: h.o(i.stockbarGoDetail, 5312, t),
                  c: h.o(i.stockbarAddStock, 5313, t),
                  d: h.o(i.stockbarRemoveStock, 5314, t),
                  e: h.o(i.stockbarExposed, 5315, t),
                  f: "5b9ae403-7-" + n,
                  g: h.p({ code: e.symbol, name: e.name }),
                };
              }),
            }
          : {},
        {
          H: h.o(function (e) {
            return i.onHandleTapItem("tapShowBox", e);
          }, 5316),
          I: h.o(function (e) {
            return i.onHandleTapItem("commentReport", e);
          }, 5317),
          J: h.p({
            showTags: i.showTags,
            itemData: n.itemData,
            pageType: n.pageType,
            hotRank: i.hotRank,
            pageId: n.pageId,
            topic: n.topic,
            stockName: n.stockName,
          }),
          K: i.watchList,
        },
        i.watchList
          ? {
              L: h.o(i.headerToggleClick, 5318),
              M: h.o(i.goToStockDetail, 5319),
              N: h.o(i.goToBasketDetail, 5320),
              O: h.p({
                "is-subject": !0,
                "report-prefix": i.formatReportPrefix(n.reportPrefix),
                "basket-data": i.watchList,
                "subject-data": { rss_list: [{ subject_id: n.itemData.id }] },
                "is-show-footer": !0,
                "row-num": 5,
              }),
            }
          : {},
        {
          P:
            1 === n.itemData.is_yb_answer &&
            n.itemData.yb_disclaimer &&
            n.itemData.yb_disclaimer.length > 0,
        },
        1 === n.itemData.is_yb_answer &&
          n.itemData.yb_disclaimer &&
          n.itemData.yb_disclaimer.length > 0
          ? { Q: h.t(n.itemData.yb_disclaimer) }
          : {},
        {
          R: h.o(i.onHandleTapItem, 5321),
          S: h.p({
            itemData: n.itemData,
            itemBottomHandle: n.itemBottomHandle,
            pageType: n.pageType,
          }),
          T: !i.isTopic,
        },
        i.isTopic
          ? {}
          : {
              U: h.o(function (e) {
                return i.onHandleTapItem("tapCommentItem", e);
              }, 5322),
              V: h.o(function (e) {
                return i.onHandleTapItem("tapImage", e);
              }, 5323),
              W: h.o(function (e) {
                return i.onHandleTapItem("tapDetail", e);
              }, 5324),
              X: h.o(function (e) {
                return i.onHandleTapItem("tapPerson", e);
              }, 5325),
              Y: h.p({ pageType: n.pageType, itemData: n.itemData }),
            },
        {
          Z: h.n(i.isTopic ? "is-topic" : ""),
          aa: n.comIndex,
          ab: h.n(i.isTopic ? "is-topic" : ""),
          ac: n.itemData.id,
        }
      );
    },
  ],
  ["__scopeId", "data-v-5b9ae403"],
]);
wx.createComponent(I);
