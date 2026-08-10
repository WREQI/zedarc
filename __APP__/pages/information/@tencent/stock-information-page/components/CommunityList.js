var e = require("../../../../../common/vendor.js"),
  t = {
    GEGU: "wzq_shequ_gegutl",
    SECTION: "wzq_shequ_bankuaitl",
    GEGU_ALL: "wzq_shequ_gegutl_all",
    GEGU_UGC: "wzq_shequ_gegutl_ugc",
    GEGU_LONG: "wzq_shequ_gegutl_long",
    GEGU_COM: "wzq_shequ_gegutl_com",
    HUATI: "wzq_shequ_huatitl",
    GUANGCHANG: "wzq_shequ_guangchangtl",
    DICENGYE: "wzq_shequ_dicengye",
    DICENGYE_GEGU: "wzq_shequ_dicengye_fromgegu",
    DICENGYE_HUATI: "wzq_shequ_dicengye_fromhuati",
    DICENGYE_GUANGCHANG: "wzq_shequ_dicengye_fromguangchang",
    INFORMATION_SHEQU_TAB: "shequ.information",
  },
  o = {
    components: {
      NewsCommunityList: function () {
        return "../../stock-news-community-list/Index.js";
      },
    },
    props: {
      isCurrSlide: { type: Boolean, default: !1 },
      userInfo: { default: {} },
      isMiniApp: { type: Boolean, default: !1 },
      mpScrollHeight: { type: Number, default: 0 },
      theme: { type: String, default: "white" },
    },
    data: function () {
      return { enterTime: 0, reportPrefix: t.INFORMATION_SHEQU_TAB };
    },
    watch: {
      isCurrSlide: function (e) {
        e ||
          (this.$refs &&
            this.$refs.$routerHistory &&
            this.$refs.$routerHistory.resetAllRoute()),
          !e &&
            this.$refs &&
            this.$refs.$routerHistory &&
            this.$refs.$routerHistory.saveAllRoute();
      },
    },
    beforeDestroy: function () {
      this.triggerHide();
    },
    methods: {
      makeUrl: function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = Object.keys(t);
        return o.length > 0
          ? "".concat(e, "?").concat(
              o
                .map(function (e) {
                  return "".concat(e, "=").concat(decodeURIComponent(t[e]));
                })
                .join("&")
            )
          : e;
      },
      goEdit: function (e) {
        this.$emit("goEdit", e);
      },
      onShow: function () {
        (this.enterTime = Date.now()),
          e.StockBridge.report("shequ_shouye_guangchang.visited"),
          this.triggerShow(),
          this.updateRecommendArea();
      },
      onHide: function () {
        e.StockBridge.report("news.index.shequ_stay_time", {
          ftime: Date.now() - this.enterTime,
        }),
          this.triggerHide();
      },
      tapLike: function () {
        e.StockBridge.busEmit("growth-user.behavior.union", {
          type: "click",
          event: "like_post",
        });
      },
      triggerHide: function () {
        var e, t;
        null == (t = null == (e = this.$refs) ? void 0 : e.squareRef) ||
          t.triggerHide();
      },
      triggerShow: function () {
        var e, t;
        null == (t = null == (e = this.$refs) ? void 0 : e.squareRef) ||
          t.triggerShow();
      },
      updateRecommendArea: function () {
        var e, t;
        null == (t = null == (e = this.$refs) ? void 0 : e.squareRef) ||
          t.updateRecommendArea();
      },
      onMpScroll: function (e) {
        this.$emit("onMpScroll", e);
      },
      onPutComment: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.$emit("onPutComment", e);
      },
      onPullingDown: function () {
        var e, t;
        null == (t = null == (e = this.$refs) ? void 0 : e.squareRef) ||
          t.onPullingDown();
      },
      showProfilePop: function (e) {
        this.$emit("showProfilePop", e);
      },
    },
  };
Array || e.resolveComponent("NewsCommunityList")();
var r = e._export_sfc(o, [
  [
    "render",
    function (t, o, r, i, n, u) {
      return {
        a: e.sr("squareRef", "383fd3b1-0"),
        b: e.o(u.goEdit, 2619),
        c: e.o(u.onMpScroll, 2620),
        d: e.o(u.onPutComment, 2621),
        e: e.o(u.showProfilePop, 2622),
        f: e.p({
          "is-curr-slide": r.isCurrSlide,
          "user-info": r.userInfo,
          "is-mini-app": r.isMiniApp,
          "mp-scroll-height": r.mpScrollHeight,
          theme: r.theme,
          "report-prefix": n.reportPrefix,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-383fd3b1"],
]);
wx.createComponent(r);
var i = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWluZm9ybWF0aW9uLXBhZ2UvY29tcG9uZW50cy9Db21tdW5pdHlMaXN0LnZ1ZQ =
  i),
  (exports.nextReportPrefix = t);
