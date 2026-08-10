var t = require("../../../../../../../common/vendor.js"),
  e = {
    name: "transfer",
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
    function (e, a, n, i, s, r) {
      return t.e(
        { a: r.title || r.shareParams.title },
        r.title || r.shareParams.title
          ? t.e(
              { b: r.title },
              r.title
                ? t.e(
                    { c: r.title },
                    r.title
                      ? { d: t.n("source_others_op_" + r.showNewsType) }
                      : {},
                    {
                      e: t.t(r.title),
                      f: t.o(function () {
                        return (
                          r.tapOtherSource &&
                          r.tapOtherSource.apply(r, arguments)
                        );
                      }, 3308),
                    }
                  )
                : {},
              { g: r.shareParams.title },
              r.shareParams.title
                ? t.e(
                    {
                      h: t.p({
                        src: r.shareParams.icon,
                        backgroundText: !1,
                        backgrounColor: "E9EBF0",
                      }),
                      i: r.tags && r.tags.length,
                    },
                    r.tags && r.tags.length
                      ? {
                          j: t.f(r.tags, function (e, a, n) {
                            return t.e(
                              { a: t.t(e), b: a !== r.tags.length - 1 },
                              (r.tags.length, {}),
                              { c: a === r.tags.length - 1 },
                              (r.tags.length, {}),
                              { d: a }
                            );
                          }),
                          k: t.t(r.shareParams.title),
                        }
                      : {},
                    {
                      l: t.o(function () {
                        return (
                          r.goSharePage && r.goSharePage.apply(r, arguments)
                        );
                      }, 3309),
                    }
                  )
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-44abfcd4"],
]);
wx.createComponent(a);
