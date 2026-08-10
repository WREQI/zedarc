var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "otherSource",
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isTurnBox: { type: Boolean, default: !1 },
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
    function (e, a, i, r, n, s) {
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
                      f: t.n(i.isTurnBox ? "show-turn" : ""),
                      g: t.o(function () {
                        return (
                          s.tapOtherSource &&
                          s.tapOtherSource.apply(s, arguments)
                        );
                      }, 5673),
                    }
                  )
                : s.shareParams.title
                ? {
                    i: t.p({
                      src: s.shareParams.icon,
                      backgroundText: !1,
                      backgrounColor: "E9EBF0",
                    }),
                    j: t.t(s.shareParams.title),
                    k: t.o(function () {
                      return s.goSharePage && s.goSharePage.apply(s, arguments);
                    }, 5674),
                  }
                : {},
              { h: s.shareParams.title }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-92b6c649"],
]);
wx.createComponent(a);
