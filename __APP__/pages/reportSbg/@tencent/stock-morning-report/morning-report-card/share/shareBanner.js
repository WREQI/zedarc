var e = require("../../../../../../common/vendor.js"),
  r = {
    name: "ShareBanner",
    directives: {
      "observe-visibility":
        require("../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js")
          .ObserveVisibility,
    },
    components: {
      ShareButtonWrapper: function () {
        return "../component/ShareButtonWrapper.js";
      },
    },
    props: ["wzqConfig", "newsId"],
    data: function () {
      return { isMP: !0 };
    },
    computed: {
      isPC: function () {
        var e, r;
        return (
          this.isMP &&
          ((null ==
          (r = null == (e = getApp().globalData.detect) ? void 0 : e.env)
            ? void 0
            : r.IS_PCWEIXIN) ||
            !1)
        );
      },
    },
    methods: {
      visibilityChanged: function (r) {
        r &&
          e.StockBridge.report("news.detail.sharebanner_visited", {
            newsid: this.newsId,
          });
      },
      onShareClick: function (r) {
        e.StockBridge.report(
          "news.morning_report.sharebanner_".concat(r, "_click"),
          { newsid: this.newsId }
        ),
          this.$emit("share", r);
      },
    },
  };
Array || e.resolveComponent("ShareButtonWrapper")();
var n = e._export_sfc(r, [
  [
    "render",
    function (r, n, i, t, o, s) {
      return e.e(
        {
          a: e.o(function (e) {
            return s.onShareClick("friend");
          }, 4200),
          b: !s.isPC,
        },
        s.isPC
          ? {}
          : {
              c: e.o(function (e) {
                return s.onShareClick("circle");
              }, 4201),
            }
      );
    },
  ],
  ["__scopeId", "data-v-78a1f15b"],
]);
wx.createComponent(n);
