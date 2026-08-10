var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  o = function (t, a, r) {
    return a in t
      ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[a] = r);
  },
  n = function (e, n) {
    for (var s in n || (n = {})) r.call(n, s) && o(e, s, n[s]);
    if (a) {
      var c,
        l = t(a(n));
      try {
        for (l.s(); !(c = l.n()).done; ) {
          s = c.value;
          i.call(n, s) && o(e, s, n[s]);
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
    }
    return e;
  },
  s = require("../api/CheckIntersectionObserver.js"),
  c = require("../api/ReportLog.js"),
  l = require("../../../../../common/vendor.js"),
  u = {
    components: {},
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
        var t, e, a, r;
        return {
          avgChangePct:
            null == (e = null == (t = this.basketData) ? void 0 : t.ranking)
              ? void 0
              : e.avgChangePct,
          total:
            null == (r = null == (a = this.basketData) ? void 0 : a.ranking)
              ? void 0
              : r.total,
        };
      },
      isDisposableType: function () {
        var t, e;
        return (
          1 ===
          (null == (e = null == (t = this.basketData) ? void 0 : t.info)
            ? void 0
            : e.showType)
        );
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
      changePctColor: function (t) {
        var e = ((null == t ? void 0 : t.ranking) || 0).avgChangePct;
        return +e > 0 ? "up" : +e < 0 ? "down" : "";
      },
      formatChangePct: function (t) {
        var e = ((null == t ? void 0 : t.ranking) || 0).avgChangePct;
        return e > 0 ? "+".concat(e, "%") : "".concat(e, "%");
      },
      openObserver: function () {
        var t = this;
        c.REPORT_PREFIX_REG.test(this.reportPrefix) &&
          s.checkIntersectionObserver(
            this,
            ".basket-tag-wrapper",
            function (e) {
              t.reportLog("watchlist_brow"), e && (t.isHasObserved = !0);
            },
            0
          );
      },
      closeObserver: function () {
        c.REPORT_PREFIX_REG.test(this.reportPrefix) &&
          s.checkIntersectionObserver(this, "");
      },
      reportLog: function (t) {
        var e,
          a,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = c.reportLogExtra(
            {
              category_id: this.categoryId || this.basketType,
              watchlist_id:
                null == (a = null == (e = this.basketData) ? void 0 : e.info)
                  ? void 0
                  : a.id,
              positionlist: this.positionid,
            },
            this.reportPrefix,
            this.newsData,
            this.subjectData
          );
        this.hqBridge.report(
          "".concat(this.reportPrefix, ".").concat(t),
          n(n(n({}, i), r), this.reportExtra || {})
        );
      },
      goToBasketDetail: function (t) {
        var e,
          a = null == (e = this.basketData.info) ? void 0 : e.id;
        if (a) {
          "wzq" !== this.hqBridge.ENV &&
            this.hqBridge.routeTo({
              path: "/pages/stockBasket/detail",
              query: { gdId: a },
            });
          var r = {
            title: "watchlist_title_click",
            summary: "watchlist_word_click",
            footer: "watchlist_more_click",
          };
          r[t] && this.reportLog(r[t]), this.$emit("goToBasketDetail", a);
        }
      },
    },
  },
  p = l._export_sfc(u, [
    [
      "render",
      function (t, e, a, r, i, o) {
        return l.e(
          { a: a.basketData },
          a.basketData
            ? l.e(
                { b: l.t(a.basketData.info.name), c: !o.isDisposableType },
                o.isDisposableType
                  ? {}
                  : {
                      d: l.t(o.formatChangePct(a.basketData)),
                      e: l.n(o.changePctColor(a.basketData)),
                    },
                {
                  f: l.o(function (t) {
                    return o.goToBasketDetail("title");
                  }, 4352),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-1e6998b1"],
  ]);
wx.createComponent(p);
