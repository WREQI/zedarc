var t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  o = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  e = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  n = function (t, o, e) {
    return o in t
      ? r(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (t[o] = e);
  },
  l = function (t, r) {
    for (var l in r || (r = {})) i.call(r, l) && n(t, l, r[l]);
    if (e) {
      var s,
        c = o(e(r));
      try {
        for (c.s(); !(s = c.n()).done; ) {
          l = s.value;
          a.call(r, l) && n(t, l, r[l]);
        }
      } catch (t) {
        c.e(t);
      } finally {
        c.f();
      }
    }
    return t;
  },
  s = require("../api/ReportLog.js"),
  c = require("../../../../../common/vendor.js"),
  u = {
    components: {
      basketScrollableStockList: function () {
        return "./basketScrollableStockList.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      rankingData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      positionTop: { type: Number, default: 0 },
      showFakeTitle: { type: Boolean, default: !1 },
      gdId: { type: String, required: !0 },
    },
    data: function () {
      return {
        reportPrefix: "hq.basketdetail",
        rowNum: 10,
        localRankingData: this.rankingData,
        isSorting: !1,
        curSortData: {},
      };
    },
    computed: {
      reportSplicing: function () {
        return this.reportPrefix;
      },
    },
    watch: {
      rankingData: {
        handler: function (t) {
          this.isSorting ||
            ((this.localRankingData = t),
            this.saveOriginStockData(t),
            this.curSortData.orderBy &&
              this.onSortToggleHandle(this.curSortData, !0));
        },
        deep: !0,
      },
    },
    activated: function () {
      var t, o, r;
      null ==
        (r =
          null == (o = null == (t = this.$refs) ? void 0 : t.scollList)
            ? void 0
            : o.reset) || r.call(o);
    },
    mounted: function () {
      this.saveOriginStockData(this.rankingData);
    },
    beforeDestroy: function () {
      this.originStockData = null;
    },
    methods: {
      resetSortStatus: function () {
        var t, o, r;
        null ==
          (r =
            null == (o = null == (t = this.$refs) ? void 0 : t.scollList)
              ? void 0
              : o.resetSortStatus) || r.call(o);
      },
      saveOriginStockData: function (t) {
        var o;
        this.originStockData = null == (o = t.data) ? void 0 : o.slice();
      },
      sortByDataKey: function (t, o) {
        var r =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return null == t
          ? void 0
          : t.sort(function (t, e) {
              var i = parseFloat(t.data[o]),
                a = parseFloat(e.data[o]);
              return isNaN(i) ? 1 : isNaN(a) ? -1 : r ? a - i : i - a;
            });
      },
      onSortToggleHandle: function (o) {
        var r = this,
          e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (this.curSortData = o), (this.isSorting = !0);
        var i = s.reportLogExtra(
          { watchlist_id: this.gdId },
          this.reportPrefix
        );
        e ||
          this.hqBridge.report(
            "hq.basketdetail.column_sort_click",
            l(l({}, i), o)
          ),
          0 === o.order
            ? (this.localRankingData.data = t(this.originStockData))
            : (this.localRankingData.data = this.sortByDataKey(
                this.localRankingData.data,
                o.orderBy,
                -1 === o.order
              )),
          this.$nextTick(function () {
            r.isSorting = !1;
          });
      },
      onToggleFoldClick: function () {
        var t,
          o =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "down";
        this.rowNum =
          "up" === o
            ? 10
            : (null == (t = this.rankingData) ? void 0 : t.total) || 10;
      },
      onTableToggleClick: function (t, o) {
        var r = this;
        this.$nextTick(function () {
          var e;
          r.$set(
            null == (e = r.localRankingData) ? void 0 : e.data[t],
            "watched",
            o
          );
        });
      },
      reportLog: function (t) {
        var o,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          -1 ===
          (null == (o = this.reportSplicing) ? void 0 : o.indexOf("undefined"))
        ) {
          var e = s.reportLogExtra(
            { watchlist_id: this.gdId },
            this.reportPrefix
          );
          this.hqBridge.report(
            "".concat(this.reportSplicing, "_").concat(t),
            l(l({}, e), r)
          );
        }
      },
      goToStockDetail: function (t) {
        this.$emit("goToStockDetail", t),
          this.reportLog("watchlist_stock_click", { stockid: t.symbol });
      },
    },
  };
Array || c.resolveComponent("basketScrollableStockList")();
var d = c._export_sfc(u, [
  [
    "render",
    function (t, o, r, e, i, a) {
      return {
        a: c.sr("scollList", "76becf00-0"),
        b: c.o(a.goToStockDetail, 2200),
        c: c.o(a.onToggleFoldClick, 2201),
        d: c.o(a.onTableToggleClick, 2202),
        e: c.o(a.onSortToggleHandle, 2203),
        f: c.p({
          "ranking-data": i.localRankingData,
          "report-prefix": i.reportPrefix,
          "gd-id": r.gdId,
          "column-num": "all",
          "row-num": i.rowNum,
          "root-class": "basket-detail-wrapper",
          "position-top": r.positionTop,
          "show-fake-title": r.showFakeTitle,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-76becf00"],
]);
wx.createComponent(d);
