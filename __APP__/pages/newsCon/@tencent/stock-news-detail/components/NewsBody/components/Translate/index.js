var t = require("../../../../../stock-news-core/utils/report.js"),
  s = require("../../../../../stock-news-core/utils/shy/index.js"),
  n = require("../../../../../stock-news-core/utils/tools.js"),
  a = require("../../../../../../../../common/vendor.js"),
  i = {
    name: "index.vue",
    props: ["hasTranslation", "wzqConfig", "originalData", "translationData"],
    data: function () {
      return { tipsShow: !1, scrolling: !1, translateStatus: !1 };
    },
    computed: {
      showTranslation: function () {
        return 2 == +this.hasTranslation || 1 == +this.hasTranslation;
      },
      tipsClass: function () {
        return ["translate-tips", "safearea"];
      },
      iconClass: function () {
        return [
          "translate-icon",
          this.scrolling ? "scrolling" : "",
          "safearea",
          this.translateStatus
            ? n.isH5Lite()
              ? "highlight-red"
              : "highlight-blue"
            : "",
        ];
      },
    },
    destroyed: function () {},
    mounted: function () {
      var t = this;
      s.shy.getStorage("TIPS_SHOW_STATUS", function (s) {
        s && !s.data && (t.tipsShow = !0);
      }),
        setTimeout(function () {
          t.handleTips();
        }, 4e3);
    },
    methods: {
      handleTips: function () {
        this.tipsShow &&
          ((this.tipsShow = !1),
          s.shy.setStorage("TIPS_SHOW_STATUS", "0", function () {}));
      },
      onTranslate: function () {
        this.scrolling && (this.scrolling = !1),
          (this.translateStatus = !this.translateStatus),
          t.report(
            "news.article.translate.icon." +
              (this.translateStatus ? "yi" : "yuan"),
            { translateStatus: this.translateStatus }
          ),
          this.handleTips(),
          this.$emit(
            "onTranslateChange",
            this.translateStatus && this.showTranslation
              ? this.translationData
              : this.originalData,
            this.translateStatus
          );
      },
      handleTouchmove: function () {
        this.scrolling || (this.scrolling = !0), this.handleTips();
      },
      handleTouchend: function () {
        this.handleTips();
      },
    },
  },
  e = a._export_sfc(i, [
    [
      "render",
      function (t, s, n, i, e, o) {
        return a.e(
          { a: e.tipsShow && o.showTranslation },
          e.tipsShow && o.showTranslation
            ? {
                b: a.n(o.tipsClass),
                c: a.o(function () {
                  return o.handleTips && o.handleTips.apply(o, arguments);
                }, 3611),
              }
            : {},
          { d: o.showTranslation },
          o.showTranslation
            ? {
                e: a.n(o.iconClass),
                f: a.o(function () {
                  return o.onTranslate && o.onTranslate.apply(o, arguments);
                }, 3612),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-6cb3f228"],
  ]);
wx.createComponent(e);
