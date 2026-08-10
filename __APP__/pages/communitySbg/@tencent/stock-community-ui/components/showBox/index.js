var t = require("../../../../../../common/vendor.js"),
  e = {
    components: {
      showRank: function () {
        return "../showRank/index.js";
      },
    },
    data: function () {
      return {};
    },
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showTags: { type: Boolean, default: !0 },
      pageType: { default: "topic" },
      belong: { default: "" },
      hotRank: { type: Number, default: 0 },
      pageId: { type: String, default: "" },
      stockName: { type: String, default: "" },
      topic: { type: String, default: "" },
    },
    created: function () {},
    computed: {
      showUrl: function () {
        return (
          1 == +this.itemData.top_tag &&
          this.itemData.url &&
          this.itemData.url_title
        );
      },
      enableshowBox: function () {
        return !!(
          this.hotRank ||
          (this.showTags && this.showUrl) ||
          (this.showTags &&
            "stock" !== this.pageType &&
            this.itemData.stock_name) ||
          (this.showTags &&
            "topic" !== this.pageType &&
            this.itemData.topic_name)
        );
      },
    },
    methods: {
      onCommentReport: function (t) {
        this.$emit(t);
      },
      tapShowBox: function (t, e) {
        this.$emit("tapShowBox", { eventName: t, eventData: e });
      },
    },
  };
Array || t.resolveComponent("showRank")();
var a = t._export_sfc(e, [
  [
    "render",
    function (e, a, o, n, i, s) {
      return t.e(
        { a: s.enableshowBox },
        s.enableshowBox
          ? t.e(
              { b: o.hotRank },
              o.hotRank
                ? {
                    c: t.o(s.onCommentReport, 5718),
                    d: t.p({
                      hotRank: o.hotRank,
                      pageType: o.pageType,
                      pageId: o.pageId,
                      topic: o.topic,
                      stockName: o.stockName,
                    }),
                  }
                : {},
              { e: o.showTags && s.showUrl },
              o.showTags && s.showUrl
                ? {
                    f: t.t(o.itemData.url_title),
                    g: t.o(function (t) {
                      return s.tapShowBox("url", o.itemData);
                    }, 5719),
                  }
                : {},
              {
                h:
                  o.showTags && "stock" !== o.pageType && o.itemData.stock_name,
              },
              o.showTags && "stock" !== o.pageType && o.itemData.stock_name
                ? {
                    i: t.t(o.itemData.stock_name),
                    j: t.o(function (t) {
                      return s.tapShowBox("stock", o.itemData);
                    }, 5720),
                  }
                : {},
              {
                k:
                  o.showTags && "topic" !== o.pageType && o.itemData.topic_name,
              },
              o.showTags && "topic" !== o.pageType && o.itemData.topic_name
                ? {
                    l: t.t(o.itemData.topic_name),
                    m: t.o(function (t) {
                      return s.tapShowBox("topic", o.itemData);
                    }, 5721),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-740e9626"],
]);
wx.createComponent(a);
