var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  o = function (e, n, a) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[n] = a);
  },
  i = require("../../../../../common/vendor.js"),
  s = require("../const/index.js"),
  c = require("../api/ReportLog.js"),
  l = {
    components: {
      basketFooter: function () {
        return "./basketFooter.js";
      },
    },
    props: {
      mode: { type: String, default: "explicit" },
      reportPrefix: { type: String, default: "" },
      reportExtra: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isShowDesc: { type: Boolean, default: !0 },
      isAdded: { type: Boolean, default: !1 },
      baseInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      rankingData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isShowBottomLine: { type: Boolean, default: !0 },
      isShowSummaryLine: { type: Boolean, default: !1 },
      isShowMoreAction: { type: Boolean, default: !1 },
      isShowFooter: { type: Boolean, default: !0 },
      isSearchAi: { type: Boolean, default: !1 },
      skin: { type: String, default: "white" },
    },
    emits: ["headerTitleClick", "basketFooterClick"],
    data: function () {
      return {
        isHasObserved: !1,
        ADDED_ICON_URL: s.ADDED_ICON_URL,
        NOT_ADDED_ICON_URL: s.NOT_ADDED_ICON_URL,
      };
    },
    computed: {
      isLite: function () {
        return ["wzqlight", "mpwzq"].includes("mpweapp");
      },
      isDisposableType: function () {
        var e;
        return 1 === (null == (e = this.baseInfo) ? void 0 : e.showType);
      },
      renderChangePct: function () {
        var e,
          t,
          n,
          a = +(null == (e = this.rankingData) ? void 0 : e.avgChangePct);
        return !(null ==
        (n = null == (t = this.rankingData) ? void 0 : t.avgChangePct)
          ? void 0
          : n.length) || isNaN(a)
          ? null
          : a > 0
          ? { class: "subtitle-rise", str: "+".concat(a.toFixed(2)) }
          : a < 0
          ? { class: "subtitle-drop", str: a.toFixed(2) }
          : { class: "subtitle-total", str: a.toFixed(2) };
      },
      renderChangeMonthPct: function () {
        var e,
          t,
          n,
          a = +(null == (e = this.rankingData) ? void 0 : e.accChangePct1M);
        return !(null ==
        (n = null == (t = this.rankingData) ? void 0 : t.accChangePct1M)
          ? void 0
          : n.length) || isNaN(a)
          ? null
          : a > 0
          ? { class: "subtitle-rise", str: "+".concat(a.toFixed(2)) }
          : a < 0
          ? { class: "subtitle-drop", str: a.toFixed(2) }
          : { class: "subtitle-total", str: a.toFixed(2) };
      },
      footerDesc: function () {
        var e;
        return "".concat(
          (null == (e = this.rankingData) ? void 0 : e.total) || 0,
          "只股票"
        );
      },
      updateTimeText: function () {
        if (!this.rankingData || !this.rankingData.updateTime) return "";
        var e = new Date(this.rankingData.updateTime.replace(/-/g, "/")),
          t = new Date().getFullYear(),
          n = e.getFullYear();
        return ""
          .concat(n !== t ? "".concat(n, "-") : "")
          .concat(this.padLeft(e.getMonth() + 1), "-")
          .concat(this.padLeft(e.getDate()), " ")
          .concat(this.padLeft(e.getHours()), ":")
          .concat(this.padLeft(e.getMinutes()));
      },
    },
    watch: {
      isAdded: {
        handler: function (t) {
          var s = this;
          this.$nextTick(function () {
            var l = t ? "watchlist_add_cancel_brow" : "watchlist_add_brow";
            i.StockBridge.report(
              "".concat(s.reportPrefix, ".").concat(l),
              c.reportLogExtra(
                (function (t, i) {
                  for (var s in i || (i = {})) a.call(i, s) && o(t, s, i[s]);
                  if (n) {
                    var c,
                      l = e(n(i));
                    try {
                      for (l.s(); !(c = l.n()).done; ) {
                        s = c.value;
                        r.call(i, s) && o(t, s, i[s]);
                      }
                    } catch (e) {
                      l.e(e);
                    } finally {
                      l.f();
                    }
                  }
                  return t;
                })({ watchlist_id: s.baseInfo.id }, s.reportExtra),
                s.reportPrefix
              )
            );
          });
        },
        immediate: !0,
      },
    },
    methods: {
      onHeaderTitleClick: function (e) {
        var t, n;
        this.$emit(
          "headerTitleClick",
          (null ==
          (n = null == (t = null == e ? void 0 : e.target) ? void 0 : t.dataset)
            ? void 0
            : n.name) || "title"
        );
      },
      onBasketFooterClick: function () {
        this.$emit("basketFooterClick", this.baseInfo.id);
      },
      padLeft: function (e) {
        return "".concat(e).length < 2 ? "0".concat(e) : "".concat(e);
      },
      onBasketToggleClick: function () {
        this.$emit("basketToggleClick");
      },
    },
  };
Array || i.resolveComponent("basketFooter")();
var d = i._export_sfc(l, [
  [
    "render",
    function (e, t, n, a, r, o) {
      return i.e(
        { a: n.isSearchAi },
        (n.isSearchAi, {}),
        {
          b: i.t(n.baseInfo.name),
          c: i.n(n.isSearchAi ? "font28px" : ""),
          d: n.isShowMoreAction,
        },
        n.isShowMoreAction
          ? {
              e: i.o(o.onBasketFooterClick, 2995),
              f: i.p({ "root-class": n.mode, desc: o.footerDesc }),
            }
          : n.isSearchAi && o.isLite
          ? i.e(
              { h: n.isAdded },
              n.isAdded ? { i: r.ADDED_ICON_URL } : { j: r.NOT_ADDED_ICON_URL },
              {
                k: i.t(n.isAdded ? "已收藏此股单" : "收藏股单"),
                l: i.o(function () {
                  return (
                    o.onBasketToggleClick &&
                    o.onBasketToggleClick.apply(o, arguments)
                  );
                }, 2996),
              }
            )
          : {},
        { g: n.isSearchAi && o.isLite, m: !o.isDisposableType },
        o.isDisposableType
          ? {}
          : i.e(
              { n: !n.isShowFooter },
              n.isShowFooter
                ? {}
                : i.e(
                    { o: n.rankingData.total },
                    (n.rankingData.total, {}),
                    { p: n.rankingData.total },
                    n.rankingData.total ? { q: i.t(n.rankingData.total) } : {}
                  ),
              { r: o.renderChangePct },
              (o.renderChangePct, {}),
              { s: o.renderChangePct },
              o.renderChangePct
                ? {
                    t: i.t(o.renderChangePct.str),
                    v: i.n(o.renderChangePct.class),
                  }
                : {},
              { w: o.renderChangeMonthPct },
              (o.renderChangeMonthPct, {}),
              { x: o.renderChangeMonthPct },
              o.renderChangeMonthPct
                ? {
                    y: i.t(o.renderChangeMonthPct.str),
                    z: i.n(o.renderChangeMonthPct.class),
                  }
                : {}
            ),
        { A: n.isShowDesc && n.baseInfo.desc },
        n.isShowDesc && n.baseInfo.desc
          ? {
              B: i.t(n.baseInfo.desc),
              C: n.isShowSummaryLine ? 1 : "",
              D: n.isSearchAi ? 1 : "",
            }
          : {},
        {
          E: i.n(n.mode),
          F: i.n(n.isShowBottomLine ? "show-line" : ""),
          G: i.n("white" !== n.skin ? "skin-black" : ""),
          H: i.o(function () {
            return (
              o.onHeaderTitleClick && o.onHeaderTitleClick.apply(o, arguments)
            );
          }, 2997),
        }
      );
    },
  ],
  ["__scopeId", "data-v-be0beac9"],
]);
wx.createComponent(d);
