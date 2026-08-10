var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../common/vendor.js"),
  o = require("../morning-report-card.js"),
  t = {
    name: "MorningReportContent",
    components: {
      NewsBriefScdc: function () {
        return "./scdc/scdc.js";
      },
      NewsBriefPgyw: function () {
        return "./pqyw/pqyw.js";
      },
      NewsBriefTzrl: function () {
        return "./tzrl/tzrl.js";
      },
      NewsBriefLhlk: function () {
        return "./lhlk/lhlk.js";
      },
      NewsBriefGszfm: function () {
        return "./gszfm/gszfm.js";
      },
      NewsBriefZxtx: function () {
        return "./zxtx/zxtx.js";
      },
      NewsBriefHwsc: function () {
        return "./hwsc/hwsc.js";
      },
      NewsShareBanner: function () {
        return "./share/shareBanner.js";
      },
    },
    inject: { TradeFunc: { default: null }, stockBridge: { default: !1 } },
    props: [
      "data",
      "newsId",
      "wzqConfig",
      "allFold",
      "anchorTitle",
      "gdList",
      "isOnShow",
    ],
    data: function () {
      return { isCCMxcx: !1, hasBind: !0, advPermission: !1 };
    },
    computed: {
      isCCMyybanner: function () {
        return this.isCCMxcx && !this.hasBind && this.advPermission;
      },
    },
    mounted: function () {},
    methods: {
      wzqKeepPos: function () {
        this.$emit("wzqKeepPos");
      },
      goToNews: function (e) {
        this.wzqKeepPos(), o.jumpToDetail(e, this);
      },
      scrollToZixuan: function () {
        var e = this;
        try {
          n.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#zxtxTop")
            .boundingClientRect()
            .exec(function (n) {
              n &&
                n.length > 0 &&
                n[0] &&
                e.$emit("mpScrollTop", n[0].top - 72);
            });
        } catch (e) {}
      },
      onShare: function (e) {
        this.$emit("share", e);
      },
      mpScroll: function (e) {
        var n;
        null == (n = this.$refs.zxtx) || n.mpScroll(e);
      },
      ishasBind: function () {
        return (
          (n = this),
          null,
          (o = e().mark(function n() {
            var o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        null == (o = this.TradeFunc)
                          ? void 0
                          : o.fetchBrokerInfo()
                      );
                    case 2:
                      this.hasBind = !this.TradeFunc || this.TradeFunc.isBind();
                    case 3:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this
            );
          })),
          new Promise(function (e, t) {
            var i = function (e) {
                try {
                  r(o.next(e));
                } catch (e) {
                  t(e);
                }
              },
              s = function (e) {
                try {
                  r(o.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              r = function (n) {
                return n.done
                  ? e(n.value)
                  : Promise.resolve(n.value).then(i, s);
              };
            r((o = o.apply(n, null)).next());
          })
        );
        var n, o;
      },
      yyCCMClick: function () {
        var e,
          n,
          o =
            (
              (null == (e = this.stockBridge) ? void 0 : e.getChannel()) || ""
            ).split(".")[0] || "";
        null == (n = this.stockBridge) ||
          n.locationTo(
            "https://zqact04.tenpay.com/activity/page/fitXcxQrcode/#/index?stat=".concat(
              o
            )
          );
      },
      handleShowHalfAi: function (e) {
        this.$emit("handleShowHalfAi", e);
      },
    },
  };
Array ||
  (
    n.resolveComponent("NewsBriefPgyw") +
    n.resolveComponent("NewsBriefZxtx") +
    n.resolveComponent("NewsBriefTzrl") +
    n.resolveComponent("NewsBriefScdc") +
    n.resolveComponent("NewsBriefLhlk") +
    n.resolveComponent("NewsBriefGszfm") +
    n.resolveComponent("NewsBriefHwsc") +
    n.resolveComponent("NewsShareBanner")
  )();
var i = n._export_sfc(t, [
  [
    "render",
    function (e, o, t, i, s, r) {
      return n.e(
        {
          a: n.o(r.wzqKeepPos, 3392),
          b: n.o(function (n) {
            return e.$emit("pqywSecondArticleFullyVisible");
          }, 3393),
          c: n.p({
            "news-id": t.newsId,
            "wzq-config": t.wzqConfig,
            "news-data": t.data,
          }),
          d: n.sr("zxtx", "e1025e4b-1"),
          e: n.o(r.scrollToZixuan, 3394),
          f: n.o(r.wzqKeepPos, 3395),
          g: n.o(r.handleShowHalfAi, 3396),
          h: n.p({
            "news-id": t.newsId,
            "wzq-config": t.wzqConfig,
            "anchor-title": t.anchorTitle,
            "news-data": t.data,
          }),
          i: n.o(r.wzqKeepPos, 3397),
          j: n.o(r.onShare, 3398),
          k: n.p({
            "news-id": t.newsId,
            "wzq-config": t.wzqConfig,
            "news-data": t.data,
          }),
          l: n.o(r.goToNews, 3399),
          m: n.o(r.wzqKeepPos, 3400),
          n: n.p({
            "news-id": t.newsId,
            "wzq-config": t.wzqConfig,
            "news-data": t.data,
          }),
          o: n.o(r.goToNews, 3401),
          p: n.o(r.wzqKeepPos, 3402),
          q: n.p({
            "news-id": t.newsId,
            "wzq-config": t.wzqConfig,
            "news-data": t.data,
            "gd-list": t.gdList,
            "is-on-show": t.isOnShow,
          }),
          r: n.o(r.wzqKeepPos, 3403),
          s: n.p({
            "news-id": t.newsId,
            "wzq-config": t.wzqConfig,
            "news-data": t.data,
          }),
          t: n.o(r.goToNews, 3404),
          v: n.o(r.wzqKeepPos, 3405),
          w: n.p({
            "news-id": t.newsId,
            "wzq-config": t.wzqConfig,
            "news-data": t.data,
          }),
          x: r.isCCMyybanner,
        },
        r.isCCMyybanner
          ? {
              y: n.o(function () {
                return r.yyCCMClick && r.yyCCMClick.apply(r, arguments);
              }, 3406),
            }
          : {},
        {
          z: n.f(t.data.footernote, function (e, o, t) {
            return { a: n.t(e), b: o };
          }),
          A: n.o(r.onShare, 3407),
          B: n.p({ "news-id": t.newsId, "wzq-config": t.wzqConfig }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-e1025e4b"],
]);
wx.createComponent(i);
