var t = require("../../../../../../../../common/vendor.js");
Array ||
  (
    t.resolveComponent("NewsContentNormal") +
    t.resolveComponent("NewsContentFlash")
  )();
var n = t._export_sfc(
  {
    name: "NewsCompContent",
    props: [
      "data",
      "translateStatus",
      "wzqConfig",
      "xgInfo",
      "watchList",
      "jumpPage",
      "theme",
      "isHstabShow",
      "copyable",
    ],
    components: {
      NewsContentNormal: function () {
        return "./components/NewsContentNormal/index.js";
      },
      NewsContentFlash: function () {
        return "./components/NewsContentFlash.js";
      },
    },
    data: function () {
      return { isWZQ: !1, isMP: !0 };
    },
    computed: {
      isFlash: function () {
        return /^FN/.test(this.data.id);
      },
    },
    methods: {
      mpOnShow: function () {
        this.$refs.newsContentNormal && this.$refs.newsContentNormal.mpOnShow();
      },
    },
  },
  [
    [
      "render",
      function (n, e, s, o, a, r) {
        return t.e(
          { a: !r.isFlash },
          r.isFlash
            ? {}
            : t.e({ b: a.isMP }, (a.isMP, {}), {
                c: t.sr("newsContentNormal", "3a9add32-0"),
                d: t.p({
                  data: s.data,
                  translateStatus: s.translateStatus,
                  wzqConfig: s.wzqConfig,
                  xgInfo: s.xgInfo,
                  watchList: s.watchList,
                  jumpPage: s.jumpPage,
                  theme: s.theme,
                  isHstabShow: s.isHstabShow,
                  copyable: s.copyable,
                }),
              }),
          { e: r.isFlash },
          r.isFlash ? { f: t.p({ data: s.data, wzqConfig: s.wzqConfig }) } : {}
        );
      },
    ],
  ]
);
wx.createComponent(n);
