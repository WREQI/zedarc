var e = require("../../../../common/vendor.js"),
  t = require("../stock-information-page/components/CommunityList.js"),
  n = require("node-modules/@tencent/st-tools/dist/mpDetect.js").detect(),
  o = n.IS_WZQ_XCX,
  r = n.IS_ZXG_XCX_ALLH5,
  i = {
    components: {
      square: function () {
        return "./components/square.js";
      },
    },
    inject: {
      didAgreeUserAgreement: {
        default: function () {
          return {};
        },
      },
      onCheckUserAgreementStatus: { default: function () {} },
    },
    props: {
      isCurrSlide: { type: Boolean, default: !1 },
      userInfo: { default: {} },
      isMiniApp: { type: Boolean, default: !1 },
      mpScrollHeight: { type: Number, default: 0 },
      theme: { type: String, default: "white" },
      reportPrefix: { type: String, default: t.nextReportPrefix.GUANGCHANG },
    },
    data: function () {
      return { isMiniWZQ: o, isInMiniZXG: r };
    },
    beforeDestroy: function () {
      this.triggerHide();
    },
    methods: {
      makeUrl: function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = Object.keys(t);
        return n.length > 0
          ? "".concat(e, "?").concat(
              n
                .map(function (e) {
                  return "".concat(e, "=").concat(decodeURIComponent(t[e]));
                })
                .join("&")
            )
          : e;
      },
      onPutComment: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.$emit("onPutComment", e);
      },
      onShow: function () {
        this.triggerShow(), this.updateRecommendArea();
      },
      onHide: function () {
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
          t.onHide();
      },
      triggerShow: function () {
        var e, t;
        null == (t = null == (e = this.$refs) ? void 0 : e.squareRef) ||
          t.onShow();
      },
      updateRecommendArea: function () {
        var e, t;
        null == (t = null == (e = this.$refs) ? void 0 : e.squareRef) ||
          t.updateRecommendArea();
      },
      onMpScroll: function (e) {
        this.$emit("onMpScroll", e);
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
Array || e.resolveComponent("square")();
var u = e._export_sfc(i, [
  [
    "render",
    function (t, n, o, r, i, u) {
      return {
        a: e.sr("squareRef", "f4c40755-0"),
        b: e.o(u.onPutComment, 4016),
        c: e.o(u.tapLike, 4017),
        d: e.o(u.onMpScroll, 4018),
        e: e.o(u.showProfilePop, 4019),
        f: e.p({
          userinfo: o.userInfo,
          "tabs-style-type": "2",
          "is-use-in-news": !0,
          "is-mini-app": o.isMiniApp,
          "is-curr-slide": o.isCurrSlide,
          "cur-page": o.isCurrSlide ? "square" : "",
          "mp-scroll-height": o.mpScrollHeight,
          theme: o.theme,
          "report-prefix": o.reportPrefix,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-f4c40755"],
]);
wx.createComponent(u);
