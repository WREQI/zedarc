require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  o = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  n = function (t, o, i) {
    return o in t
      ? e(t, o, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[o] = i);
  },
  c = function (e, o) {
    for (var i in o || (o = {})) a.call(o, i) && n(e, i, o[i]);
    if (r) {
      var c,
        l = t(r(o));
      try {
        for (l.s(); !(c = l.n()).done; ) {
          i = c.value;
          s.call(o, i) && n(e, i, o[i]);
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
    }
    return e;
  },
  l = require("../api/CheckIntersectionObserver.js"),
  u = require("../api/ReportLog.js"),
  d = require("../../../../../common/vendor.js"),
  h = require("../api/StockBasketAPI.js"),
  p = {
    components: {
      basketHeader: function () {
        return "./basketHeader.js";
      },
      basketStockList: function () {
        return "./basketStockList.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      rootClass: { type: [String, Array], default: "" },
      isBgWhite: { type: Boolean, default: !1 },
      isBigRadius: { type: Boolean, default: !1 },
      basketData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      reportPrefix: { type: String, default: "" },
      reportExtra: {
        type: Object,
        default: function () {
          return {};
        },
      },
      basketType: { type: String, default: "" },
      isNews: { type: Boolean, default: !1 },
      isSearchAi: { type: Boolean, default: !1 },
      subjectData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      newsData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isSubject: { type: Boolean, default: !1 },
      isHstabShow: { type: Boolean, default: !1 },
      positionid: { type: Number, default: 0 },
      isShowFooter: { type: Boolean, default: !1 },
      isShowDesc: { type: Boolean, default: !0 },
      rowNum: { type: Number, default: 2 },
      columnNum: { type: [Number, String], default: 2 },
      from: { type: String, default: "" },
      isToMockTrade: { type: Boolean, default: !1 },
      routeMockTradeParam: {
        type: Object,
        default: function () {
          return {};
        },
      },
      skin: { type: String, default: "white" },
    },
    emits: [
      "goToStockDetail",
      "goToBasketDetail",
      "goToMockTrade",
      "goToChoosePage",
    ],
    data: function () {
      return { stockBasketAPI: new h.StockBasketAPI(this.hqBridge) };
    },
    computed: {
      baseInfo: function () {
        var t;
        return (null == (t = this.basketData) ? void 0 : t.info) || {};
      },
      userData: function () {
        var t;
        return (null == (t = this.basketData) ? void 0 : t.userData) || {};
      },
      categoryId: function () {
        var t, e;
        return (
          (null == (e = null == (t = this.basketData) ? void 0 : t.column)
            ? void 0
            : e.id) || ""
        );
      },
      rankingData: function () {
        var t, e, o, i, r, a, s, n;
        return {
          avgChangePct:
            null == (e = null == (t = this.basketData) ? void 0 : t.ranking)
              ? void 0
              : e.avgChangePct,
          accChangePct1M:
            null == (i = null == (o = this.basketData) ? void 0 : o.ranking)
              ? void 0
              : i.accChangePct1M,
          total:
            null == (a = null == (r = this.basketData) ? void 0 : r.ranking)
              ? void 0
              : a.total,
          updateTime:
            null == (n = null == (s = this.basketData) ? void 0 : s.ranking)
              ? void 0
              : n.updateTime,
        };
      },
      isLite: function () {
        return ["wzqlight", "mpwzq"].includes("mpweapp");
      },
    },
    watch: {
      isHstabShow: function (t) {
        t && !this.isHasObserved
          ? this.openObserver()
          : (this.closeObserver(), (this.isHasObserved = !1));
      },
    },
    mounted: function () {
      var t = this;
      setTimeout(function () {
        t.openObserver();
      }, 1e3);
    },
    beforeDestroy: function () {
      this.closeObserver();
    },
    methods: {
      openObserver: function () {
        var t = this;
        u.REPORT_PREFIX_REG.test(this.reportPrefix) &&
          l.checkIntersectionObserver(
            this,
            ".basket-overview-wrapper",
            function (e) {
              t.reportLog("watchlist_brow"), e && (t.isHasObserved = !0);
            },
            0
          );
      },
      closeObserver: function () {
        u.REPORT_PREFIX_REG.test(this.reportPrefix) &&
          l.checkIntersectionObserver(this, "");
      },
      reportLog: function (t) {
        var e,
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (u.REPORT_PREFIX_REG.test(this.reportPrefix)) {
          var i = u.reportLogExtra(
            {
              category_id: this.categoryId || this.basketType,
              watchlist_id: null == (e = this.baseInfo) ? void 0 : e.id,
              positionlist: this.positionid,
            },
            this.reportPrefix,
            this.newsData,
            this.subjectData
          );
          this.hqBridge.report(
            "".concat(this.reportPrefix, ".").concat(t),
            c(c(c({}, i), o), this.reportExtra || {})
          );
        }
      },
      goToStockDetail: function (t) {
        this.$emit("goToStockDetail", t),
          this.reportLog("watchlist_stock_click", { stockid: t.symbol });
      },
      goToBasketDetail: function (t) {
        var e;
        if (this.isLite) {
          var o = null == (e = this.basketData.info) ? void 0 : e.id;
          if (o) {
            "wzq" !== this.hqBridge.ENV &&
              (this.isSearchAi && "wzq_light" === this.hqBridge.ENV
                ? this.hqBridge.openExtraWebview(
                    "https://wzq.tenpay.com/mp/lite/index.html#/pages/stockBasket/detail?gdId=".concat(
                      o
                    )
                  )
                : this.hqBridge.routeTo({
                    path: "/pages/stockBasket/detail",
                    query: { gdId: o },
                  })),
              this.$emit("goToBasketDetail", o);
            var i = {
              title: "watchlist_title_click",
              summary: "watchlist_word_click",
              footer: "watchlist_more_click",
            };
            i[t] && this.reportLog(i[t]);
          }
        }
      },
      onTableToggleClick: function (t, e) {
        this.$emit("tableToggleClick", t, e);
      },
      onBasketToggleClick: function () {
        var t,
          e,
          r = this;
        if (this.isLite) {
          var a,
            s,
            n = !this.userData.watched,
            l = [
              {
                act: n ? "wla" : "wld",
                ids: [(null == (t = this.baseInfo) ? void 0 : t.id) || ""],
                timestamp: Math.floor(Date.now() / 1e3),
              },
            ],
            u = { seq: JSON.stringify(l) };
          this.reportLog(
            n ? "watchlist_add_click" : "watchlist_add_cancel_click",
            0,
            ((a = c({}, this.reportExtra)),
            (s = { watchlist_id: null == (e = this.baseInfo) ? void 0 : e.id }),
            o(a, i(s)))
          ),
            this.stockBasketAPI
              .updateBasketWatched(u)
              .then(function (t) {
                var e, o, i, a, s, c, l;
                if (
                  0 !== t.code ||
                  0 !==
                    (null ==
                    (i =
                      null == (o = null == (e = t.data) ? void 0 : e.record)
                        ? void 0
                        : o[0])
                      ? void 0
                      : i.code)
                )
                  throw Error(n ? "收藏股单失败" : "取消收藏股单失败");
                r.$emit("basketToggleClick", n),
                  null == (s = (a = r.hqBridge).busEmit) ||
                    s.call(a, "toggleAdded", "basket"),
                  d.StockBridge.busEmit("common-toggleAdded"),
                  null == (l = (c = r.hqBridge).toast) ||
                    l.call(c, n ? "已收藏股单" : "已取消收藏股单", "success");
              })
              .catch(function () {
                var t, e;
                null == (e = (t = r.hqBridge).toast) ||
                  e.call(t, "收藏股单失败", "error");
              });
        }
      },
      goToMockTrade: function () {
        this.$emit("goToMockTrade");
      },
      goToChoosePage: function () {
        this.$emit("goToChoosePage");
      },
    },
  };
Array ||
  (
    d.resolveComponent("basket-header") +
    d.resolveComponent("basket-stock-list")
  )();
var g = d._export_sfc(p, [
  [
    "render",
    function (t, e, o, i, r, a) {
      return {
        a: d.o(a.goToBasketDetail, 1412),
        b: d.o(a.onBasketToggleClick, 1413),
        c: d.p({
          "base-info": a.baseInfo,
          "ranking-data": a.rankingData,
          "is-show-desc": !(o.isNews || o.isSubject) && o.isShowDesc,
          "is-added": a.userData.watched,
          "is-show-footer": o.isShowFooter,
          "report-prefix": o.reportPrefix,
          "report-extra": o.reportExtra,
          from: o.from,
          skin: o.skin,
          "is-search-ai": o.isSearchAi,
        }),
        d: d.o(a.goToStockDetail, 1414),
        e: d.o(function (t) {
          return a.goToBasketDetail("footer");
        }, 1415),
        f: d.o(a.onTableToggleClick, 1416),
        g: d.o(a.goToMockTrade, 1417),
        h: d.o(a.goToChoosePage, 1418),
        i: d.p({
          "gd-id": a.baseInfo.id,
          "category-id": a.categoryId,
          "news-data": o.newsData,
          "subject-data": o.subjectData,
          "ranking-data": o.basketData.ranking,
          "column-num": o.columnNum,
          "row-num": o.rowNum,
          "report-prefix": o.reportPrefix,
          "report-extra": o.reportExtra,
          "is-show-footer": o.isShowFooter && (a.isLite || o.isToMockTrade),
          "is-search-ai": o.isSearchAi,
          "is-to-mock-trade": o.isToMockTrade,
          "route-mock-trade-param": o.routeMockTradeParam,
          skin: o.skin,
          "root-class": ["basket-overview-sub-wrapper", o.rootClass],
        }),
        j: d.n(o.rootClass),
        k: d.n(o.isBgWhite && "bg-white"),
        l: d.n(o.isBigRadius && "big-radius"),
        m: d.n(o.isSearchAi ? "" : "margin24px"),
        n: d.n("white" !== o.skin ? "skin-black" : ""),
        o: d.o(function (t) {
          return a.goToBasketDetail("");
        }, 1419),
      };
    },
  ],
  ["__scopeId", "data-v-e9166c78"],
]);
wx.createComponent(g);
