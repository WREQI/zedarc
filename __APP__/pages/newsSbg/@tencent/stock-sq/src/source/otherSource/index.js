var t = require("../../../../../../../common/vendor.js"),
  e = {
    name: "otherSource",
    options: { styleIsolation: "shared" },
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    components: {
      BaseImage: function () {
        return "../baseImage/index.js";
      },
    },
    data: function () {
      return {};
    },
    computed: {
      detailInfo: function () {
        return this.itemData.detailInfo || {};
      },
      title: function () {
        return this.detailInfo.title || this.itemData.title;
      },
      shareParams: function () {
        return this.detailInfo.stockProp || this.itemData.stockProp || {};
      },
      showNewsType: function () {
        return { 公告: "gonggao", 研报: "yanbao" }[this.zxType] || "xinwen";
      },
      tags: function () {
        return (
          this.shareParams &&
          this.shareParams.tag &&
          this.shareParams.tag.split(",")
        );
      },
      newsid: function () {
        return this.detailInfo.news_id || this.itemData.news_id;
      },
      link: function () {
        return this.detailInfo.link || this.itemData.link;
      },
      zxType: function () {
        return this.detailInfo.resourceText || "";
      },
      litype: function () {
        return this.detailInfo.litype || this.itemData.litype;
      },
      newsFrom: function () {
        return this.detailInfo.newsFrom || this.itemData.newsFrom;
      },
    },
    methods: {
      tapOtherSource: function () {
        var t = this.newsid;
        3 == +this.litype && (t = this.newsid && this.newsid.split("_")[2]),
          this.$emit("tapOtherSource", {
            newsFrom: this.newsFrom || "news",
            newsid: t,
            itemData: this.itemData,
          });
      },
      goSharePage: function () {
        this.$emit("goSharePage", { shareParams: this.shareParams });
      },
    },
  };
Array || t.resolveComponent("BaseImage")();
var a = t._export_sfc(e, [
  [
    "render",
    function (e, a, n, i, r, s) {
      return t.e(
        { a: s.title || s.shareParams.title },
        s.title || s.shareParams.title
          ? t.e(
              { b: s.title },
              s.title
                ? t.e(
                    { c: s.title },
                    s.title
                      ? { d: t.n("source_others_op_" + s.showNewsType) }
                      : {},
                    {
                      e: t.t(s.title),
                      f: t.o(function () {
                        return (
                          s.tapOtherSource &&
                          s.tapOtherSource.apply(s, arguments)
                        );
                      }, 4248),
                    }
                  )
                : {},
              { g: s.shareParams.title },
              s.shareParams.title
                ? t.e(
                    {
                      h: t.p({
                        src: s.shareParams.icon,
                        backgroundText: !1,
                        backgrounColor: "E9EBF0",
                      }),
                      i: s.tags && s.tags.length,
                    },
                    s.tags && s.tags.length
                      ? {
                          j: t.f(s.tags, function (e, a, n) {
                            return t.e(
                              { a: t.t(e), b: a !== s.tags.length - 1 },
                              (s.tags.length, {}),
                              { c: a === s.tags.length - 1 },
                              (s.tags.length, {}),
                              { d: a }
                            );
                          }),
                          k: t.t(s.shareParams.title),
                        }
                      : {},
                    {
                      l: t.o(function () {
                        return (
                          s.goSharePage && s.goSharePage.apply(s, arguments)
                        );
                      }, 4249),
                    }
                  )
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-d2630d25"],
]);
wx.createComponent(a);
