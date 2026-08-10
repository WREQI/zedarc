var e = require("../../../common/vendor.js"),
  o = {
    name: "videoDetail.vue",
    components: {
      Detail: function () {
        return "./detail.js";
      },
      PrivacyPolicyModal: function () {
        return "../../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
      },
      profilePop: function () {
        return "../../newsSbg/@tencent/stock-sq/src/source/profilePop/index.js";
      },
    },
    mixins: [require("../../../utils/mixins/privacy.js").privacy],
    data: function () {
      return {
        newsId: "",
        reportPrefix: "",
        networkType: "",
        tabsId: ["follow", "recommend"],
        tabsCurrent: "recommend",
        keepVideoAlive: !1,
        isSharePage: !1,
        skin: e.wx$1.getStorageSync("user/skin") || "white",
        stockId: "",
        profilePopParams: null,
      };
    },
    onLoad: function (e) {
      (this.newsId = e.id || e.newsId),
        (this.reportPrefix = e.reportPrefix),
        (this.networkType = e.networkType),
        (this.isSharePage = 1 == +e.__share_flag__),
        (this.stockId = e.stockid || "");
    },
    created: function (e) {},
    onShow: function () {
      var e;
      null == (e = this.$refs.detail) || e.onVisible();
    },
    onShareAppMessage: function () {
      var e;
      return null == (e = this.$refs.detail) ? void 0 : e.shareAppMessage();
    },
    onShareTimeline: function () {
      var e;
      return null == (e = this.$refs.detail) ? void 0 : e.shareTimeline();
    },
    methods: {
      isCanShowVideo: function () {
        var e;
        return (null == (e = this.newsId) ? void 0 : e.length) > 0;
      },
      tapAction: function () {},
      dataReport: function (e) {
        e.event, e.data;
      },
      showProfilePop: function (e) {
        this.profilePopParams = e;
      },
      hideProfilePop: function () {
        this.profilePopParams = null;
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("detail") +
    e.resolveComponent("PrivacyPolicyModal") +
    e.resolveComponent("profilePop")
  )();
var i = e._export_sfc(o, [
  [
    "render",
    function (o, i, r, n, a, t) {
      return e.e(
        { a: o.rootFontSize, b: t.isCanShowVideo() },
        t.isCanShowVideo()
          ? {
              c: e.sr("detail", "38935c89-2"),
              d: e.o(t.showProfilePop, 290),
              e: e.p({
                "news-id": a.newsId,
                "stock-id": a.stockId,
                "is-share-page": a.isSharePage,
              }),
            }
          : {},
        {
          f: e.o(function (e) {
            return (o.showPrivacyPolicy = e);
          }, 291),
          g: e.p({ value: o.showPrivacyPolicy }),
          h: a.profilePopParams,
        },
        a.profilePopParams
          ? {
              i: e.o(t.hideProfilePop, 292),
              j: e.p({
                userStateData: a.profilePopParams.userStateData,
                content: a.profilePopParams.content,
                defaultHeadImage: a.profilePopParams.defaultHeadImage,
                defaultNickname: a.profilePopParams.defaultNickname,
              }),
            }
          : {},
        { k: e.n("black" === a.skin ? "black" : ""), l: a.skin }
      );
    },
  ],
  ["__scopeId", "data-v-38935c89"],
]);
(o.__runtimeHooks = 6), wx.createPage(i);
