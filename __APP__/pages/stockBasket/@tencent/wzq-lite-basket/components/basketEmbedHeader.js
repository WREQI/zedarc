var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  o = function (t, r, i) {
    return r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[r] = i);
  },
  s = function (e, s) {
    for (var n in s || (s = {})) i.call(s, n) && o(e, n, s[n]);
    if (r) {
      var c,
        l = t(r(s));
      try {
        for (l.s(); !(c = l.n()).done; ) {
          n = c.value;
          a.call(s, n) && o(e, n, s[n]);
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
    }
    return e;
  },
  n = require("../api/CheckIntersectionObserver.js"),
  c = require("../api/ReportLog.js"),
  l = require("../../../../../common/vendor.js"),
  u = {
    components: {
      basketHeader: function () {
        return "./basketHeader.js";
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
    },
    emits: ["goToBasketDetail"],
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
        var t, e, r, i;
        return {
          avgChangePct:
            null == (e = null == (t = this.basketData) ? void 0 : t.ranking)
              ? void 0
              : e.avgChangePct,
          total:
            null == (i = null == (r = this.basketData) ? void 0 : r.ranking)
              ? void 0
              : i.total,
        };
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
      this.openObserver();
    },
    beforeDestroy: function () {
      this.closeObserver();
    },
    methods: {
      openObserver: function () {
        var t = this;
        c.REPORT_PREFIX_REG.test(this.reportPrefix) &&
          n.checkIntersectionObserver(
            this,
            ".basket-header-wrapper",
            function (e) {
              t.reportLog("watchlist_brow"), e && (t.isHasObserved = !0);
            },
            0
          );
      },
      closeObserver: function () {
        c.REPORT_PREFIX_REG.test(this.reportPrefix) &&
          n.checkIntersectionObserver(this, "");
      },
      reportLog: function (t) {
        var e,
          r,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = c.reportLogExtra(
            {
              category_id: this.categoryId || this.basketType,
              watchlist_id:
                null == (r = null == (e = this.basketData) ? void 0 : e.info)
                  ? void 0
                  : r.id,
              positionlist: this.positionid,
              positionid: this.positionid,
            },
            this.reportPrefix,
            this.newsData,
            this.subjectData
          );
        this.hqBridge.report(
          "".concat(this.reportPrefix, ".").concat(t),
          s(s(s({}, a), i), this.reportExtra || {})
        );
      },
      goToBasketDetail: function (t) {
        var e,
          r = null == (e = this.basketData.info) ? void 0 : e.id;
        if (r) {
          "wzq" !== this.hqBridge.ENV &&
            this.hqBridge.routeTo({
              path: "/pages/stockBasket/detail",
              query: { gdId: r },
            }),
            this.$emit("goToBasketDetail", r);
          var i = {
            title: "watchlist_title_click",
            summary: "watchlist_word_click",
            footer: "watchlist_more_click",
          };
          i[t] && this.reportLog(i[t]);
        }
      },
    },
  };
Array || l.resolveComponent("basket-header")();
var d = l._export_sfc(u, [
  [
    "render",
    function (t, e, r, i, a, o) {
      return {
        a: l.o(o.goToBasketDetail, 5332),
        b: l.o(function (t) {
          return o.goToBasketDetail("footer");
        }, 5333),
        c: l.p({
          mode: "embed",
          "is-show-more-action": !0,
          "is-show-bottom-line": !1,
          "is-show-desc": !1,
          "is-added": r.basketData.userData.watched,
          "report-prefix": r.reportPrefix,
          "base-info": r.basketData.info,
          "ranking-data": o.rankingData,
        }),
      };
    },
  ],
]);
wx.createComponent(d);
